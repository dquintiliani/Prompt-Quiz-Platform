import { motion } from "framer-motion";
import type { QuizQuestion } from "../types/quiz";
import { AnswerOption } from "./AnswerOption";

interface QuestionCardProps {
  question: QuizQuestion;
  levelTitle: string;
  selectedOptionId: string | null;
  showResult: boolean;
  onSelect: (optionId: string) => void;
}

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

/**
 * Design principle: One Thought at a Time.
 * Only the active question and its options render — no peek at what's
 * next, no trail of past answers. AnimatePresence (in App.tsx) slides this
 * card in/out so the transition itself reinforces "one step, then the next".
 */
export function QuestionCard({
  question,
  levelTitle,
  selectedOptionId,
  showResult,
  onSelect,
}: QuestionCardProps) {
  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="mx-auto w-full max-w-xl"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-quiz-accent-2">
        {levelTitle}
      </p>
      <h2 className="mb-6 text-xl font-semibold leading-snug text-white sm:text-2xl">
        {question.prompt}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={option.id}
            option={option}
            index={index}
            disabled={showResult}
            isSelected={selectedOptionId === option.id}
            isCorrectAnswer={option.id === question.correctOptionId}
            showResult={showResult}
            onSelect={onSelect}
          />
        ))}
      </div>
    </motion.div>
  );
}
