# Prompt Quiz Platform

A scaffold for a mobile-first, gamified quiz experience, built with React,
TypeScript, Vite, Tailwind CSS, Framer Motion, and Zustand.

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
  types/quiz.ts               question/level/option types
  data/levels.ts               sample quiz content (levels -> questions)
  store/quizStore.ts           Zustand store: cursor, phase, score, streak, XP
  components/
    ProgressBar.tsx            step counter + progress track
    GameBar.tsx                XP, streak, sound toggle
    QuestionCard.tsx           active question + slide transition
    AnswerOption.tsx           answer button with select/correct/incorrect states
    FeedbackBanner.tsx         post-answer explanation + continue CTA
    LevelCompleteScreen.tsx    end-of-level celebration
    FinalResultsScreen.tsx     end-of-quiz summary + replay
  App.tsx                      wires store state to the phase being shown
```

## Design principles → implementation

| Principle | Where it lives |
|---|---|
| One Thought at a Time | `App.tsx` renders a single `QuestionCard` per phase; `AnimatePresence mode="wait"` keeps exactly one on screen |
| Ambient Progress & Predictability | `ProgressBar.tsx` — thin track + "N of M" counter, no more |
| Thumb-First Ergonomics | `AnswerOption.tsx` / `FeedbackBanner.tsx` — 48px+ full-width targets, primary actions docked low |
| Instant Visual Reciprocity | `quizStore.selectAnswer` flips to a `feedback` phase immediately; `FeedbackBanner.tsx` + `AnswerOption.tsx` render the correct/incorrect state and explanation before advancing |
| Gamified Progression & Nostalgia | `GameBar.tsx` (XP, streak), `LevelCompleteScreen.tsx`, `FinalResultsScreen.tsx` |
| Seamless Micro-Interactions | Framer Motion throughout: press-scale on buttons, spring-driven progress bar, side-slide question transitions, streak/checkmark pop-ins |
| Responsive Adaptability | Fluid single-column layout (`max-w-xl`, Tailwind `sm:`/`lg:` variants) that scales from phone to desktop without structural changes |

## Content

Quiz content lives in `src/data/levels.ts` as a plain array of levels, each
with an ordered list of questions. Add a level or question there and the
store/UI pick it up automatically — no other code changes needed.
