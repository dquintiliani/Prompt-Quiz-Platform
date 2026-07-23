import { motion } from "framer-motion";
import type { QuizLevel } from "../types/quiz";

interface LevelCompleteScreenProps {
  level: QuizLevel;
  xp: number;
  onContinue: () => void;
}

/**
 * Design principle: Gamified Progression & Nostalgia.
 * A "level cleared" beat borrowed from arcade/platformer games — a pause
 * to celebrate before the next stage, reinforcing progress and motivation.
 */
export function LevelCompleteScreen({ level, xp, onContinue }: LevelCompleteScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-xl border border-black/5 bg-quiz-surface px-4 py-12 text-center shadow-sm sm:py-16"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}
        className={`flex aspect-square w-20 items-center justify-center rounded-xl text-4xl ${
          level.theme === "sunset"
            ? "bg-gradient-to-br from-orange-200 to-pink-200"
            : level.theme === "brand"
              ? "bg-gradient-to-br from-blue-200 to-indigo-200"
              : "bg-gradient-to-br from-slate-200 to-slate-300"
        }`}
        aria-hidden
      >
        🏆
      </motion.div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-quiz-brand">
          Level Complete
        </p>
        <h2 className="mt-1 text-2xl font-bold text-quiz-navy">{level.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-quiz-body">{level.description}</p>
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-quiz-brand">Total XP: {xp}</p>
      <button
        type="button"
        onClick={onContinue}
        className="min-h-[48px] w-full max-w-xs rounded-full bg-quiz-navy text-sm font-semibold uppercase tracking-widest text-white transition-transform active:scale-[0.97]"
      >
        Next Level
      </button>
    </motion.div>
  );
}
