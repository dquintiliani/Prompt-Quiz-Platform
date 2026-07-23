import { AnimatePresence } from "framer-motion";
import { levels } from "./data/levels";
import { useQuizStore, continueToNextLevel } from "./store/quizStore";
import { ProgressBar } from "./components/ProgressBar";
import { GameBar } from "./components/GameBar";
import { LevelSelectScreen } from "./components/LevelSelectScreen";
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
    totalXp,
    soundOn,
    totalQuestions,
    isIntermediateUnlocked,
    isExpertUnlocked,
    startAtLevel,
    startExpertQuiz,
    startIntermediateQuiz,
    selectAnswer,
    advance,
    toggleSound,
    restart,
  } = useQuizStore();

  const isFeedbackVisible = phase === "feedback";
  const isCorrect = selectedOptionId === current.question.correctOptionId;
  const isLastQuestion = cursor === totalQuestions - 1;
  const levelTitle = current.question.category
    ? `${current.level.title} · ${current.question.category}`
    : current.level.title;

  return (
    // Design principle: Responsive Adaptability — a single fluid column that
    // is comfortable on a phone and simply gains breathing room (max-w-xl,
    // larger type via sm:/lg: variants) on tablet and desktop.
    <div className="relative flex min-h-screen w-full flex-col bg-quiz-bg text-quiz-navy">
      {/* Design principle: Frame Content with Subtle Atmosphere */}
      <div className="quiz-atmosphere" aria-hidden>
        <span className="quiz-sparkle left-[8%] top-[18%] text-lg">✨</span>
        <span className="quiz-sparkle right-[10%] top-[30%] text-sm" style={{ animationDelay: "1.2s" }}>
          ✨
        </span>
        <span className="quiz-sparkle left-[20%] bottom-[15%] text-base" style={{ animationDelay: "2.4s" }}>
          ✨
        </span>
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {(phase === "question" || phase === "feedback") && (
          <>
            <ProgressBar current={cursor} total={totalQuestions} />
            <GameBar xp={xp} streak={streak} soundOn={soundOn} onToggleSound={toggleSound} />
          </>
        )}

        <main className="flex flex-1 items-center justify-center px-4 pb-32 pt-6 sm:px-6">
          <AnimatePresence mode="wait">
            {phase === "home" ? (
              <LevelSelectScreen
                key="home"
                levels={levels}
                totalXp={totalXp}
                isIntermediateUnlocked={isIntermediateUnlocked()}
                isExpertUnlocked={isExpertUnlocked()}
                onSelectLevel={startAtLevel}
                onStartExpert={startExpertQuiz}
                onStartIntermediate={startIntermediateQuiz}
              />
            ) : phase === "question" || phase === "feedback" ? (
              <QuestionCard
                key={current.question.id}
                question={current.question}
                levelTitle={levelTitle}
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
    </div>
  );
}

export default App;
