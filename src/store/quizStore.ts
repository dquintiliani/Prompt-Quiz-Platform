import { create } from "zustand";
import { levels } from "../data/levels";
import { EXPERT_QUIZ_LENGTH, expertQuestionBank } from "../data/expertQuestionBank";
import { INTERMEDIATE_QUIZ_LENGTH, intermediateQuestionBank } from "../data/intermediateQuestionBank";
import { loadStoredXp, saveStoredXp } from "../lib/xpStorage";
import type { QuizLevel, QuizQuestion } from "../types/quiz";

/** Lifetime XP (persisted in local storage, never reset by a run/restart)
 * required to unlock each challenge tier. */
export const INTERMEDIATE_UNLOCK_XP = 50;
export const EXPERT_UNLOCK_XP = 200;

interface FlatQuestion {
  question: QuizQuestion;
  level: QuizLevel;
  levelIndex: number;
  isLastInLevel: boolean;
}

const flatQuestions: FlatQuestion[] = levels.flatMap((level, levelIndex) =>
  level.questions.map((question, i) => ({
    question,
    level,
    levelIndex,
    isLastInLevel: i === level.questions.length - 1,
  })),
);

const expertLevel: QuizLevel = {
  id: "expert-challenge",
  title: "Expert Challenge",
  description: "10 random questions pulled fresh from a 30-question expert bank every run.",
  icon: "🎓",
  theme: "expert",
  questions: expertQuestionBank,
};

const intermediateLevel: QuizLevel = {
  id: "intermediate-challenge",
  title: "Intermediate Challenge",
  description: "10 random questions pulled fresh from a 30-question intermediate bank every run.",
  icon: "📘",
  theme: "intermediate",
  questions: intermediateQuestionBank,
};

/** Fisher-Yates shuffle — never mutates the input array. */
function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildExpertRun(): FlatQuestion[] {
  const picks = shuffled(expertQuestionBank).slice(0, EXPERT_QUIZ_LENGTH);
  return picks.map((question, i) => ({
    question,
    level: expertLevel,
    levelIndex: -1,
    isLastInLevel: i === picks.length - 1,
  }));
}

function buildIntermediateRun(): FlatQuestion[] {
  const picks = shuffled(intermediateQuestionBank).slice(0, INTERMEDIATE_QUIZ_LENGTH);
  return picks.map((question, i) => ({
    question,
    level: intermediateLevel,
    levelIndex: -1,
    isLastInLevel: i === picks.length - 1,
  }));
}

export type QuizPhase = "home" | "question" | "feedback" | "level-complete" | "finished";

interface QuizState {
  activeQuestions: FlatQuestion[];
  cursor: number;
  phase: QuizPhase;
  selectedOptionId: string | null;
  score: number;
  streak: number;
  bestStreak: number;
  xp: number;
  /** Lifetime XP accumulated across all runs, persisted to local storage. */
  totalXp: number;
  soundOn: boolean;

  current: FlatQuestion;
  totalQuestions: number;

  isIntermediateUnlocked: () => boolean;
  isExpertUnlocked: () => boolean;
  startAtLevel: (levelIndex: number) => void;
  startExpertQuiz: () => void;
  startIntermediateQuiz: () => void;
  selectAnswer: (optionId: string) => void;
  advance: () => void;
  toggleSound: () => void;
  restart: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  activeQuestions: flatQuestions,
  cursor: 0,
  phase: "home",
  selectedOptionId: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  xp: 0,
  totalXp: loadStoredXp(),
  soundOn: true,

  current: flatQuestions[0],
  totalQuestions: flatQuestions.length,

  isIntermediateUnlocked: () => get().totalXp >= INTERMEDIATE_UNLOCK_XP,
  isExpertUnlocked: () => get().totalXp >= EXPERT_UNLOCK_XP,

  startAtLevel: (levelIndex) => {
    const startCursor = flatQuestions.findIndex((q) => q.levelIndex === levelIndex);
    const cursor = startCursor === -1 ? 0 : startCursor;
    set({
      activeQuestions: flatQuestions,
      cursor,
      current: flatQuestions[cursor],
      totalQuestions: flatQuestions.length,
      phase: "question",
      selectedOptionId: null,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xp: 0,
    });
  },

  startExpertQuiz: () => {
    if (!get().isExpertUnlocked()) return;
    const run = buildExpertRun();
    set({
      activeQuestions: run,
      cursor: 0,
      current: run[0],
      totalQuestions: run.length,
      phase: "question",
      selectedOptionId: null,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xp: 0,
    });
  },

  startIntermediateQuiz: () => {
    if (!get().isIntermediateUnlocked()) return;
    const run = buildIntermediateRun();
    set({
      activeQuestions: run,
      cursor: 0,
      current: run[0],
      totalQuestions: run.length,
      phase: "question",
      selectedOptionId: null,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xp: 0,
    });
  },

  selectAnswer: (optionId) => {
    const { activeQuestions, cursor, streak, bestStreak, score, xp, totalXp } = get();
    const { question } = activeQuestions[cursor];
    const isCorrect = optionId === question.correctOptionId;
    const nextStreak = isCorrect ? streak + 1 : 0;
    const nextTotalXp = isCorrect ? totalXp + question.xpReward : totalXp;

    if (isCorrect) {
      saveStoredXp(nextTotalXp);
    }

    set({
      selectedOptionId: optionId,
      phase: "feedback",
      score: isCorrect ? score + 1 : score,
      streak: nextStreak,
      bestStreak: Math.max(bestStreak, nextStreak),
      xp: isCorrect ? xp + question.xpReward : xp,
      totalXp: nextTotalXp,
    });
  },

  advance: () => {
    const { activeQuestions, cursor } = get();
    const current = activeQuestions[cursor];
    const nextCursor = cursor + 1;
    const isLastQuestion = nextCursor >= activeQuestions.length;

    if (isLastQuestion) {
      set({ phase: "finished" });
      return;
    }

    if (current.isLastInLevel) {
      set({ phase: "level-complete" });
      return;
    }

    set({
      cursor: nextCursor,
      current: activeQuestions[nextCursor],
      phase: "question",
      selectedOptionId: null,
    });
  },

  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),

  restart: () =>
    set({
      activeQuestions: flatQuestions,
      cursor: 0,
      current: flatQuestions[0],
      totalQuestions: flatQuestions.length,
      phase: "home",
      selectedOptionId: null,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xp: 0,
    }),
}));

/** Called from the level-complete screen to move into the next level's first question. */
export function continueToNextLevel() {
  useQuizStore.setState((state) => {
    const nextCursor = state.cursor + 1;
    return {
      cursor: nextCursor,
      current: state.activeQuestions[nextCursor],
      phase: "question",
      selectedOptionId: null,
    };
  });
}

export { flatQuestions, expertLevel, intermediateLevel };
