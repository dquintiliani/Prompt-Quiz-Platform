import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

/**
 * Design principle: Ambient Progress & Predictability.
 * Stays quiet — a thin track plus a small step counter — so it informs
 * without competing with the active question for attention.
 */
export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min(100, ((current + 1) / total) * 100);

  return (
    <div className="w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-quiz-accent to-quiz-accent-2"
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
        <span className="shrink-0 text-xs font-medium tabular-nums text-white/50">
          {current + 1} of {total}
        </span>
      </div>
    </div>
  );
}
