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
      <div className="flex items-center gap-3 font-mono text-sm">
        <span className="rounded-md border border-quiz-accent/40 bg-quiz-accent/10 px-2 py-1 text-quiz-accent-2">
          XP {xp}
        </span>
        <AnimatePresence>
          {streak > 1 && (
            <motion.span
              key={streak}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="rounded-md border border-orange-400/40 bg-orange-400/10 px-2 py-1 text-orange-300"
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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/70 transition-transform active:scale-90"
      >
        {soundOn ? "🔊" : "🔇"}
      </button>
    </div>
  );
}
