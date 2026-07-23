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
      className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 py-16 text-center"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.1 }}
        className="text-6xl"
        aria-hidden
      >
        🏆
      </motion.div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-quiz-accent-2">
          Level Complete
        </p>
        <h2 className="mt-1 text-2xl font-bold text-white">{level.title}</h2>
        <p className="mt-2 text-sm text-white/60">{level.description}</p>
      </div>
      <p className="font-mono text-sm text-quiz-accent-2">Total XP: {xp}</p>
      <button
        type="button"
        onClick={onContinue}
        className="min-h-[48px] w-full max-w-xs rounded-xl bg-gradient-to-r from-quiz-accent to-quiz-accent-2 text-base font-semibold text-white transition-transform active:scale-[0.97]"
      >
        Next Level →
      </button>
    </motion.div>
  );
}
