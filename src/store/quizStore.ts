import { create } from "zustand";
import { BEGINNER_QUIZ_LENGTH, beginnerQuestionBank } from "../data/beginnerQuestionBank";
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
}

const beginnerLevel: QuizLevel = {
  id: "beginner-challenge",
  title: "Prompt Beginner",
  description: "10 random questions pulled fresh from a 30-question beginner bank every run.",
  icon: "🌱",
  theme: "sunset",
  questions: beginnerQuestionBank,
};

const intermediateLevel: QuizLevel = {
  id: "intermediate-challenge",
  title: "Intermediate Challenge",
  description: "10 random questions pulled fresh from a 30-question intermediate bank every run.",
  icon: "📘",
  theme: "intermediate",
  questions: intermediateQuestionBank,
};

const expertLevel: QuizLevel = {
  id: "expert-challenge",
  title: "Expert Challenge",
  description: "10 random questions pulled fresh from a 30-question expert bank every run.",
  icon: "🎓",
  theme: "expert",
  questions: expertQuestionBank,
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

function buildRun(bank: QuizQuestion[], level: QuizLevel, length: number): FlatQuestion[] {
  return shuffled(bank)
    .slice(0, length)
    .map((question) => ({ question, level }));
}

/** Deterministic placeholder shown only while `phase` is "home" (never rendered). */
const placeholderRun: FlatQuestion[] = beginnerQuestionBank.map((question) => ({
  question,
  level: beginnerLevel,
}));

export type QuizPhase = "home" | "question" | "feedback" | "finished";

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
  startBeginnerQuiz: () => void;
  startIntermediateQuiz: () => void;
  startExpertQuiz: () => void;
  selectAnswer: (optionId: string) => void;
  advance: () => void;
  toggleSound: () => void;
  restart: () => void;
}

function runState(run: FlatQuestion[]) {
  return {
    activeQuestions: run,
    cursor: 0,
    current: run[0],
    totalQuestions: run.length,
    phase: "question" as const,
    selectedOptionId: null,
    score: 0,
    streak: 0,
    bestStreak: 0,
    xp: 0,
  };
}

export const useQuizStore = create<QuizState>((set, get) => ({
  activeQuestions: placeholderRun,
  cursor: 0,
  phase: "home",
  selectedOptionId: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  xp: 0,
  totalXp: loadStoredXp(),
  soundOn: true,

  current: placeholderRun[0],
  totalQuestions: placeholderRun.length,

  isIntermediateUnlocked: () => get().totalXp >= INTERMEDIATE_UNLOCK_XP,
  isExpertUnlocked: () => get().totalXp >= EXPERT_UNLOCK_XP,

  startBeginnerQuiz: () => {
    set(runState(buildRun(beginnerQuestionBank, beginnerLevel, BEGINNER_QUIZ_LENGTH)));
  },

  startIntermediateQuiz: () => {
    if (!get().isIntermediateUnlocked()) return;
    set(runState(buildRun(intermediateQuestionBank, intermediateLevel, INTERMEDIATE_QUIZ_LENGTH)));
  },

  startExpertQuiz: () => {
    if (!get().isExpertUnlocked()) return;
    set(runState(buildRun(expertQuestionBank, expertLevel, EXPERT_QUIZ_LENGTH)));
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
    const nextCursor = cursor + 1;

    if (nextCursor >= activeQuestions.length) {
      set({ phase: "finished" });
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
      activeQuestions: placeholderRun,
      cursor: 0,
      current: placeholderRun[0],
      totalQuestions: placeholderRun.length,
      phase: "home",
      selectedOptionId: null,
      score: 0,
      streak: 0,
      bestStreak: 0,
      xp: 0,
    }),
}));

export { beginnerLevel, expertLevel, intermediateLevel };
