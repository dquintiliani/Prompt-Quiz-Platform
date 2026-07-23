import { create } from "zustand";
import { levels } from "../data/levels";
import type { QuizLevel, QuizQuestion } from "../types/quiz";

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

export type QuizPhase = "question" | "feedback" | "level-complete" | "finished";

interface QuizState {
  cursor: number;
  phase: QuizPhase;
  selectedOptionId: string | null;
  score: number;
  streak: number;
  bestStreak: number;
  xp: number;
  soundOn: boolean;

  current: FlatQuestion;
  totalQuestions: number;

  selectAnswer: (optionId: string) => void;
  advance: () => void;
  toggleSound: () => void;
  restart: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  cursor: 0,
  phase: "question",
  selectedOptionId: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  xp: 0,
  soundOn: true,

  current: flatQuestions[0],
  totalQuestions: flatQuestions.length,

  selectAnswer: (optionId) => {
    const { cursor, streak, bestStreak, score, xp } = get();
    const { question } = flatQuestions[cursor];
    const isCorrect = optionId === question.correctOptionId;
    const nextStreak = isCorrect ? streak + 1 : 0;

    set({
      selectedOptionId: optionId,
      phase: "feedback",
      score: isCorrect ? score + 1 : score,
      streak: nextStreak,
      bestStreak: Math.max(bestStreak, nextStreak),
      xp: isCorrect ? xp + question.xpReward : xp,
    });
  },

  advance: () => {
    const { cursor } = get();
    const current = flatQuestions[cursor];
    const nextCursor = cursor + 1;
    const isLastQuestion = nextCursor >= flatQuestions.length;

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
      current: flatQuestions[nextCursor],
      phase: "question",
      selectedOptionId: null,
    });
  },

  toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),

  restart: () =>
    set({
      cursor: 0,
      current: flatQuestions[0],
      phase: "question",
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
      current: flatQuestions[nextCursor],
      phase: "question",
      selectedOptionId: null,
    };
  });
}

export { flatQuestions };
