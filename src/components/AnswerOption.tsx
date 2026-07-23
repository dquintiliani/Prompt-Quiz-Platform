import { motion } from "framer-motion";
import type { QuizOption } from "../types/quiz";

interface AnswerOptionProps {
  option: QuizOption;
  index: number;
  disabled: boolean;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  showResult: boolean;
  onSelect: (optionId: string) => void;
}

/**
 * Design principles combined here:
 * - Thumb-First Ergonomics: min 48px tall target, full-width, generous gaps.
 * - Seamless Micro-Interactions: press-down scale, glow on select, color
 *   transitions driven by the same reciprocity state.
 * - Instant Visual Reciprocity: renders the correct/incorrect state once
 *   the parent flips `showResult`.
 */
export function AnswerOption({
  option,
  index,
  disabled,
  isSelected,
  isCorrectAnswer,
  showResult,
  onSelect,
}: AnswerOptionProps) {
  const state = showResult
    ? isCorrectAnswer
      ? "correct"
      : isSelected
        ? "incorrect"
        : "neutral"
    : isSelected
      ? "selected"
      : "idle";

  const stateClasses: Record<string, string> = {
    idle: "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10",
    selected: "border-quiz-accent bg-quiz-accent/15 shadow-[0_0_0_1px_var(--color-quiz-accent)]",
    correct: "border-quiz-correct bg-quiz-correct/15 shadow-[0_0_0_1px_var(--color-quiz-correct)]",
    incorrect: "border-quiz-incorrect bg-quiz-incorrect/15 shadow-[0_0_0_1px_var(--color-quiz-incorrect)]",
    neutral: "border-white/10 bg-white/5 opacity-60",
  };

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option.id)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`flex min-h-[48px] w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-base font-medium text-white transition-colors duration-200 ${stateClasses[state]} disabled:cursor-default`}
    >
      <span>{option.label}</span>
      {showResult && isCorrectAnswer && (
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="text-quiz-correct"
          aria-hidden
        >
          ✓
        </motion.span>
      )}
      {showResult && isSelected && !isCorrectAnswer && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="text-quiz-incorrect"
          aria-hidden
        >
          ✕
        </motion.span>
      )}
    </motion.button>
  );
}
