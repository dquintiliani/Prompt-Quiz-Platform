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
  types/quiz.ts               question/level/option types (+ icon/theme per level)
  data/levels.ts               sample quiz content (levels -> questions)
  store/quizStore.ts           Zustand store: phase (home/question/…), cursor, score, streak, XP
  components/
    LevelSelectScreen.tsx      home screen: hero collage + grid of level cards
    ProgressBar.tsx            step counter + progress track
    GameBar.tsx                XP, streak, sound toggle
    QuestionCard.tsx           active question + slide transition
    AnswerOption.tsx           answer button with select/correct/incorrect states
    FeedbackBanner.tsx         post-answer explanation + continue CTA
    LevelCompleteScreen.tsx    end-of-level celebration
    FinalResultsScreen.tsx     end-of-quiz summary + replay
  App.tsx                      atmosphere background + wires store state to the phase being shown
```

## Design principles → implementation

| Principle | Where it lives |
|---|---|
| Structured Grid Systems | `LevelSelectScreen.tsx` — strict 1/2/3-column grid, uniform card padding, borders, and heights |
| Consistent Aspect Ratios | Level icon tiles are `aspect-square`; hero collage panels are uniform vertical slices; cards use 8–12px (`rounded-xl`) corners throughout |
| Typographic Hierarchy | Bold centered section header ("Choose Your Level"), medium-weight card titles, muted `#4a4a4a` body copy (`text-quiz-body`), uppercase tracked-out metadata ("LEVEL 1 · 3 QUESTIONS") |
| Minimalist CTAs | Small uppercase pill buttons ("START LEVEL", "CONTINUE", "NEXT LEVEL", "PLAY AGAIN") instead of heavy gradient buttons |
| Contextual Color Theming | `QuizTheme` (`sunset` / `brand` / `neutral`) on each level drives its card container + accent color while every card keeps the same structure — see `themeClasses` in `LevelSelectScreen.tsx` and `--color-quiz-*` tokens in `index.css` |
| Logos Over Photography | `HeroCollage` in `LevelSelectScreen.tsx` layers a white wordmark over a gradient "photo" panel with a dark scrim for contrast |
| Dynamic Collage Layouts | `HeroCollage` splits the hero banner into 5 vertical gradient slices |
| Subtle Atmosphere | `.quiz-atmosphere` in `index.css` — soft radial light leaks + faint pulsing sparkles behind all content, `pointer-events: none` |
| Centered, Stacked Cards | Level cards and end screens: icon/media top → title → metadata → body copy → CTA, all center-aligned |
| Whimsical Micro-Details | A small ✨ above the home header, tiny 🎯/🧠 glyphs tucked into each level card's corner |
| One Thought at a Time | `App.tsx` renders a single screen per phase; `AnimatePresence mode="wait"` keeps exactly one on screen |
| Ambient Progress & Predictability | `ProgressBar.tsx` — thin track + "N of M" counter, no more |
| Thumb-First Ergonomics | `AnswerOption.tsx` / `FeedbackBanner.tsx` — 48px+ tall targets, primary actions docked low |
| Instant Visual Reciprocity | `quizStore.selectAnswer` flips to a `feedback` phase immediately; `FeedbackBanner.tsx` + `AnswerOption.tsx` render the correct/incorrect state and explanation before advancing |
| Gamified Progression & Nostalgia | `GameBar.tsx` (XP, streak), `LevelCompleteScreen.tsx`, `FinalResultsScreen.tsx` |
| Seamless Micro-Interactions | Framer Motion throughout: press-scale on buttons, spring-driven progress bar, side-slide question transitions, streak/checkmark pop-ins |
| Responsive Adaptability | Fluid layouts (`max-w-xl`/`max-w-5xl`, Tailwind `sm:`/`lg:` variants) that scale from phone to desktop without structural changes |

## Content

Quiz content lives in `src/data/levels.ts` as a plain array of levels, each
with an ordered list of questions. Add a level or question there and the
store/UI pick it up automatically — no other code changes needed.
