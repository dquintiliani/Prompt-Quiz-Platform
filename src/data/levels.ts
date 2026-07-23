import type { QuizLevel } from "../types/quiz";

export const levels: QuizLevel[] = [
  {
    id: "level-1",
    title: "Prompt Basics",
    description: "Warm up with the fundamentals of writing good prompts.",
    questions: [
      {
        id: "q1",
        prompt: "What's the most reliable way to reduce ambiguity in a prompt?",
        options: [
          { id: "a", label: "Use vague, open-ended phrasing" },
          { id: "b", label: "Give specific constraints and examples" },
          { id: "c", label: "Write in all caps" },
          { id: "d", label: "Make the prompt as short as possible" },
        ],
        correctOptionId: "b",
        explanation:
          "Specific constraints and examples anchor the model's output to what you actually want.",
        xpReward: 10,
      },
      {
        id: "q2",
        prompt: "Which technique helps a model reason through a multi-step problem?",
        options: [
          { id: "a", label: "Chain-of-thought prompting" },
          { id: "b", label: "Asking only yes/no questions" },
          { id: "c", label: "Removing all context" },
          { id: "d", label: "Using random keywords" },
        ],
        correctOptionId: "a",
        explanation:
          "Chain-of-thought prompting encourages the model to work through intermediate steps before answering.",
        xpReward: 10,
      },
      {
        id: "q3",
        prompt: "Why do few-shot examples often improve output quality?",
        options: [
          { id: "a", label: "They increase the token cost" },
          { id: "b", label: "They demonstrate the desired pattern directly" },
          { id: "c", label: "They confuse the model intentionally" },
          { id: "d", label: "They replace the need for instructions" },
        ],
        correctOptionId: "b",
        explanation:
          "Examples show the model the exact pattern to follow, which is often clearer than description alone.",
        xpReward: 10,
      },
    ],
  },
  {
    id: "level-2",
    title: "Prompt Structuring",
    description: "Level up by organizing prompts for complex tasks.",
    questions: [
      {
        id: "q4",
        prompt: "What's a good reason to use XML tags or headers in a prompt?",
        options: [
          { id: "a", label: "To make the prompt longer" },
          { id: "b", label: "To clearly separate distinct sections of context" },
          { id: "c", label: "Models ignore plain text" },
          { id: "d", label: "It's required by every model" },
        ],
        correctOptionId: "b",
        explanation:
          "Structured tags help the model distinguish instructions, context, and examples from each other.",
        xpReward: 15,
      },
      {
        id: "q5",
        prompt: "When should you assign a role or persona to the model?",
        options: [
          { id: "a", label: "Never, it has no effect" },
          { id: "b", label: "When you want to bias its tone or expertise framing" },
          { id: "c", label: "Only for creative writing tasks" },
          { id: "d", label: "Only when the task is mathematical" },
        ],
        correctOptionId: "b",
        explanation:
          "A role or persona nudges the model's tone, vocabulary, and perspective toward what fits the task.",
        xpReward: 15,
      },
    ],
  },
];

export const totalQuestionCount = levels.reduce(
  (sum, level) => sum + level.questions.length,
  0,
);
