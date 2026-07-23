import { AnimatePresence, motion } from "framer-motion";
import type { QuizQuestion } from "../types/quiz";

interface FeedbackBannerProps {
  question: QuizQuestion;
  isCorrect: boolean;
  visible: boolean;
  onContinue: () => void;
  isLastQuestion: boolean;
}

/**
 * Design principle: Instant Visual Reciprocity.
 * Fires the moment an answer is picked (see quizStore.selectAnswer) with a
 * color-coded banner and the explanation, so the user gets a reason before
 * the flow advances. Paired with Thumb-First Ergonomics: the "Continue"
 * button is full-width and docked low, in easy one-handed reach.
 */
export function FeedbackBanner({
  question,
  isCorrect,
  visible,
  onContinue,
  isLastQuestion,
}: FeedbackBannerProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-10 border-t border-white/10 bg-quiz-surface/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur sm:px-6"
        >
          <div className="mx-auto flex max-w-xl flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${
                  isCorrect
                    ? "bg-quiz-correct/20 text-quiz-correct"
                    : "bg-quiz-incorrect/20 text-quiz-incorrect"
                }`}
                aria-hidden
              >
                {isCorrect ? "✓" : "✕"}
              </span>
              <p className={`text-sm font-semibold ${isCorrect ? "text-quiz-correct" : "text-quiz-incorrect"}`}>
                {isCorrect ? "Correct!" : "Not quite"}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{question.explanation}</p>
            <button
              type="button"
              onClick={onContinue}
              className="min-h-[48px] w-full rounded-xl bg-gradient-to-r from-quiz-accent to-quiz-accent-2 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.97]"
            >
              {isLastQuestion ? "Finish" : "Continue"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
