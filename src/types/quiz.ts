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

export interface QuizLevel {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}
