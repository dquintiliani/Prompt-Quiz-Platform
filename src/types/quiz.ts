export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  xpReward: number;
}

/** Contextual color theme applied to a level's card and header accents. */
export type QuizTheme = "sunset" | "brand" | "neutral";

export interface QuizLevel {
  id: string;
  title: string;
  description: string;
  /** Small emoji glyph standing in for a square thumbnail/icon tile. */
  icon: string;
  /** Contextual color theme for this level's card (see design principle 5). */
  theme: QuizTheme;
  questions: QuizQuestion[];
}
