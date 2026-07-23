import { AnimatePresence } from "framer-motion";
import { levels } from "./data/levels";
import { useQuizStore, continueToNextLevel } from "./store/quizStore";
import { ProgressBar } from "./components/ProgressBar";
import { GameBar } from "./components/GameBar";
import { QuestionCard } from "./components/QuestionCard";
import { FeedbackBanner } from "./components/FeedbackBanner";
import { LevelCompleteScreen } from "./components/LevelCompleteScreen";
import { FinalResultsScreen } from "./components/FinalResultsScreen";

function App() {
  const {
    cursor,
    current,
    phase,
    selectedOptionId,
    score,
    streak,
    bestStreak,
    xp,
    soundOn,
    totalQuestions,
    selectAnswer,
    advance,
    toggleSound,
    restart,
  } = useQuizStore();

  const isFeedbackVisible = phase === "feedback";
  const isCorrect = selectedOptionId === current.question.correctOptionId;
  const isLastQuestion = cursor === totalQuestions - 1;

  return (
    // Design principle: Responsive Adaptability — a single fluid column that
    // is comfortable on a phone and simply gains breathing room (max-w-xl,
    // larger type via sm:/lg: variants) on tablet and desktop.
    <div className="flex min-h-screen w-full flex-col bg-quiz-bg text-white">
      {(phase === "question" || phase === "feedback") && (
        <>
          <ProgressBar current={cursor} total={totalQuestions} />
          <GameBar xp={xp} streak={streak} soundOn={soundOn} onToggleSound={toggleSound} />
        </>
      )}

      <main className="flex flex-1 items-center justify-center px-4 pb-32 pt-6 sm:px-6">
        <AnimatePresence mode="wait">
          {phase === "question" || phase === "feedback" ? (
            <QuestionCard
              key={current.question.id}
              question={current.question}
              levelTitle={current.level.title}
              selectedOptionId={selectedOptionId}
              showResult={isFeedbackVisible}
              onSelect={selectAnswer}
            />
          ) : phase === "level-complete" ? (
            <LevelCompleteScreen
              key="level-complete"
              level={levels[current.levelIndex]}
              xp={xp}
              onContinue={continueToNextLevel}
            />
          ) : (
            <FinalResultsScreen
              key="final"
              score={score}
              totalQuestions={totalQuestions}
              xp={xp}
              bestStreak={bestStreak}
              onRestart={restart}
            />
          )}
        </AnimatePresence>
      </main>

      <FeedbackBanner
        question={current.question}
        isCorrect={isCorrect}
        visible={isFeedbackVisible}
        onContinue={advance}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
}

export default App;
