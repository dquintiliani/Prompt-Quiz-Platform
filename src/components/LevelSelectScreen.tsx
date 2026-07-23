import { motion } from "framer-motion";
import type { QuizLevel, QuizTheme } from "../types/quiz";
import { EXPERT_QUIZ_LENGTH, expertQuestionBank } from "../data/expertQuestionBank";
import { expertLevel } from "../store/quizStore";

interface LevelSelectScreenProps {
  levels: QuizLevel[];
  onSelectLevel: (levelIndex: number) => void;
  onStartExpert: () => void;
}

/** Contextual color theming (principle 5): each level's container and
 * accent shift with its theme while every card keeps identical structure,
 * spacing, and radius (principle 1). */
const themeClasses: Record<QuizTheme, { container: string; accentText: string; iconTile: string }> = {
  sunset: {
    container: "bg-quiz-sunset-soft border-quiz-sunset/20",
    accentText: "text-quiz-sunset",
    iconTile: "bg-gradient-to-br from-orange-200 to-pink-200",
  },
  brand: {
    container: "bg-quiz-brand-soft border-quiz-brand/20",
    accentText: "text-quiz-brand",
    iconTile: "bg-gradient-to-br from-blue-200 to-indigo-200",
  },
  neutral: {
    container: "bg-quiz-bg border-black/10",
    accentText: "text-quiz-muted",
    iconTile: "bg-gradient-to-br from-slate-200 to-slate-300",
  },
  expert: {
    container: "bg-slate-100 border-slate-900/10",
    accentText: "text-amber-600",
    iconTile: "bg-gradient-to-br from-slate-700 to-indigo-900",
  },
};

/** Stand-in "photography" collage: vertical hue slices behind the brand
 * wordmark (principles 6 & 7 — collage panels + a logo layered over rich
 * imagery, legible thanks to the dark gradient scrim at the base). */
function HeroCollage() {
  const slices = [
    "from-indigo-400 to-blue-500",
    "from-blue-500 to-sky-400",
    "from-violet-400 to-indigo-500",
    "from-sky-400 to-cyan-300",
    "from-indigo-500 to-purple-500",
  ];

  return (
    <div className="relative mx-auto mb-10 h-40 w-full max-w-3xl overflow-hidden rounded-xl shadow-sm sm:h-52">
      <div className="absolute inset-0 grid grid-cols-5">
        {slices.map((gradient, i) => (
          <div key={i} className={`bg-gradient-to-b ${gradient}`} />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-1 px-4 text-center sm:bottom-7">
        <span className="text-2xl font-bold tracking-tight text-white drop-shadow sm:text-3xl">
          PROMPT QUIZ
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
          Learn to prompt, one level at a time
        </span>
      </div>
    </div>
  );
}

interface LevelCardProps {
  icon: string;
  theme: QuizTheme;
  title: string;
  metadata: string;
  description: string;
  ctaLabel: string;
  cornerGlyph: string;
  delay: number;
  onClick: () => void;
}

/** A single grid card: media → title → metadata → body → CTA, all
 * centered (principle 9), sharing identical dimensions and radius with
 * every other card in the grid (principle 1). */
function LevelCard({
  icon,
  theme,
  title,
  metadata,
  description,
  ctaLabel,
  cornerGlyph,
  delay,
  onClick,
}: LevelCardProps) {
  const classes = themeClasses[theme];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex h-full flex-col items-center gap-3 rounded-xl border p-6 text-center shadow-sm transition-shadow hover:shadow-md ${classes.container}`}
    >
      <span className="absolute right-3 top-3 text-base opacity-70" aria-hidden>
        {cornerGlyph}
      </span>

      <div
        className={`flex aspect-square w-16 items-center justify-center rounded-xl text-3xl ${classes.iconTile}`}
        aria-hidden
      >
        {icon}
      </div>

      <h2 className="text-lg font-semibold text-quiz-navy">{title}</h2>

      <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${classes.accentText}`}>
        {metadata}
      </p>

      <p className="text-sm leading-relaxed text-quiz-body">{description}</p>

      <span className="mt-2 rounded-full bg-quiz-navy px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white">
        {ctaLabel}
      </span>
    </motion.button>
  );
}

/**
 * Design principles applied here:
 * - Structured Grid Systems: a strict, uniform 1 / 2 / 3-column grid of
 *   identically sized level cards.
 * - Consistent Aspect Ratios: every icon tile is a 1:1 square, 12px radius.
 * - Typographic Hierarchy: bold centered section header, medium-weight
 *   item titles, muted body copy, tracked-out uppercase metadata.
 * - Minimalist CTAs: small uppercase pill button, centered at the card base.
 * - Centered, Stacked Cards: media → title → metadata → body → CTA.
 * - Whimsical Micro-Details: a small sparkle above the header and a tiny
 *   floating accent glyph tucked into each card's corner.
 */
export function LevelSelectScreen({ levels, onSelectLevel, onStartExpert }: LevelSelectScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6"
    >
      <HeroCollage />

      <div className="mb-8 text-center">
        <p className="mb-2 text-lg" aria-hidden>
          ✨
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-quiz-navy sm:text-4xl">
          Choose Your Level
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-quiz-body">
          Two short levels, five questions total, or jump straight into an Expert Challenge —
          pick a starting point and build your prompting skills one card at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((level, index) => (
          <LevelCard
            key={level.id}
            icon={level.icon}
            theme={level.theme}
            title={level.title}
            metadata={`Level ${index + 1} · ${level.questions.length} questions`}
            description={level.description}
            ctaLabel="Start Level"
            cornerGlyph={index % 2 === 0 ? "🎯" : "🧠"}
            delay={index * 0.06}
            onClick={() => onSelectLevel(index)}
          />
        ))}

        <LevelCard
          icon={expertLevel.icon}
          theme={expertLevel.theme}
          title={expertLevel.title}
          metadata={`Expert · ${EXPERT_QUIZ_LENGTH} of ${expertQuestionBank.length} questions`}
          description={expertLevel.description}
          ctaLabel="Start Challenge"
          cornerGlyph="🎲"
          delay={levels.length * 0.06}
          onClick={onStartExpert}
        />
      </div>
    </motion.div>
  );
}
