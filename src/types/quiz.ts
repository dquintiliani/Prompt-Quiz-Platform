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
  /** Optional subject grouping, used by the randomized expert question bank. */
  category?: string;
  /** Optional underlying concept being tested, used by the expert question bank. */
  principle?: string;
}

/** Contextual color theme applied to a level's card and header accents. */
export type QuizTheme = "sunset" | "brand" | "neutral" | "expert";

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
