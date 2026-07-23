import { motion } from "framer-motion";

interface FinalResultsScreenProps {
  score: number;
  totalQuestions: number;
  xp: number;
  bestStreak: number;
  onRestart: () => void;
}

/**
 * Design principle: Gamified Progression & Nostalgia.
 * Plays like a classic "game over / high score" screen — final tally,
 * best streak, and a replay button to encourage another run.
 */
export function FinalResultsScreen({
  score,
  totalQuestions,
  xp,
  bestStreak,
  onRestart,
}: FinalResultsScreenProps) {
  const pct = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 py-16 text-center"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-6xl"
        aria-hidden
      >
        🎉
      </motion.div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-quiz-accent-2">
          Quiz Complete
        </p>
        <h2 className="mt-1 text-3xl font-bold text-white">
          {score}/{totalQuestions} ({pct}%)
        </h2>
      </div>
      <div className="flex gap-4 font-mono text-sm">
        <span className="rounded-md border border-quiz-accent/40 bg-quiz-accent/10 px-3 py-1.5 text-quiz-accent-2">
          XP {xp}
        </span>
        <span className="rounded-md border border-orange-400/40 bg-orange-400/10 px-3 py-1.5 text-orange-300">
          Best streak 🔥 {bestStreak}
        </span>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="min-h-[48px] w-full max-w-xs rounded-xl bg-gradient-to-r from-quiz-accent to-quiz-accent-2 text-base font-semibold text-white transition-transform active:scale-[0.97]"
      >
        Play Again
      </button>
    </motion.div>
  );
}
