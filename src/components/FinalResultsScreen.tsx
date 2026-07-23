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
      className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 rounded-xl border border-black/5 bg-quiz-surface px-4 py-12 text-center shadow-sm sm:py-16"
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-quiz-brand">
          Quiz Complete
        </p>
        <h2 className="mt-1 text-3xl font-bold text-quiz-navy">
          {score}/{totalQuestions} ({pct}%)
        </h2>
      </div>
      <div className="flex gap-3 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full border border-quiz-brand/25 bg-quiz-brand-soft px-3 py-1.5 text-quiz-brand">
          XP {xp}
        </span>
        <span className="rounded-full border border-quiz-sunset/30 bg-quiz-sunset-soft px-3 py-1.5 text-quiz-sunset">
          Best streak 🔥 {bestStreak}
        </span>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="min-h-[48px] w-full max-w-xs rounded-full bg-quiz-navy text-sm font-semibold uppercase tracking-widest text-white transition-transform active:scale-[0.97]"
      >
        Play Again
      </button>
    </motion.div>
  );
}
