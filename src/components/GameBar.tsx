import { AnimatePresence, motion } from "framer-motion";

interface GameBarProps {
  xp: number;
  streak: number;
  soundOn: boolean;
  onToggleSound: () => void;
}

/**
 * Design principle: Gamified Progression & Nostalgia.
 * A retro-styled XP counter and fire streak, evoking old arcade/game-show
 * scoreboards, plus a chunky sound toggle — the kind of playful chrome
 * that makes the quiz feel like a level in a game rather than a form.
 */
export function GameBar({ xp, streak, soundOn, onToggleSound }: GameBarProps) {
  return (
    <div className="mx-auto flex w-full max-w-xl items-center justify-between px-4 pb-2 sm:px-6">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full border border-quiz-brand/25 bg-quiz-brand-soft px-3 py-1 text-quiz-brand">
          XP {xp}
        </span>
        <AnimatePresence>
          {streak > 1 && (
            <motion.span
              key={streak}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="rounded-full border border-quiz-sunset/30 bg-quiz-sunset-soft px-3 py-1 text-quiz-sunset"
            >
              🔥 {streak}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={onToggleSound}
        aria-label={soundOn ? "Mute sound" : "Unmute sound"}
        aria-pressed={soundOn}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-quiz-surface text-lg text-quiz-muted transition-transform active:scale-90"
      >
        {soundOn ? "🔊" : "🔇"}
      </button>
    </div>
  );
}
