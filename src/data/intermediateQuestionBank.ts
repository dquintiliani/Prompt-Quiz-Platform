import type { QuizQuestion } from "../types/quiz";

interface RawIntermediateQuestion {
  id: number;
  category: string;
  principle: string;
  question: string;
  options: Record<"A" | "B" | "C" | "D", string>;
  answer: "A" | "B" | "C" | "D";
}

const rawIntermediateQuestions: RawIntermediateQuestion[] = [
  {
    id: 1,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "What's the main goal of applying the 'Precision Over Openness' principle when writing a prompt?",
    options: {
      A: "To guide the model's focus so you get specific, reliable results.",
      B: "To give the model creative freedom through relaxed, conversational language.",
      C: "To encourage the model to share extra context and background details.",
      D: "To let the model fill in missing details using its best judgment.",
    },
    answer: "A",
  },
  {
    id: 2,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "Which of these requests best captures the idea of 'Precision Over Openness'?",
    options: {
      A: "Write a short summary about cloud computing.",
      B: "Tell me everything you know about cloud architecture and its main components.",
      C: "Discuss cloud computing in a creative way.",
      D: "Summarize cloud computing in exactly 3 bullet points, focusing only on cost efficiency.",
    },
    answer: "D",
  },
  {
    id: 3,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "When a prompt doesn't give clear boundaries, how does the model usually respond?",
    options: {
      A: "It figures out what you want without any trouble.",
      B: "It pauses and asks for more details before answering.",
      C: "It draws from a wide net, making generic or off-target answers more likely.",
      D: "It gives a more accurate answer because it has room to think freely.",
    },
    answer: "C",
  },
  {
    id: 4,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "Why is treating a prompt like a casual search query usually not the best approach?",
    options: {
      A: "Search queries need code formatting, while prompts need plain text.",
      B: "Search queries just look up info, while prompts need direction to shape the output.",
      C: "Models handle search queries faster than step-by-step requests.",
      D: "Casual queries take up far fewer tokens to process.",
    },
    answer: "B",
  },
  {
    id: 5,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "If you want consistent answers across multiple runs, which choice fits 'Precision Over Openness' best?",
    options: {
      A: "Skip structural rules so the model can pick the layout it likes best.",
      B: "Ask the model to describe its line of thought before answering.",
      C: "Use friendly, open-ended words like 'good', 'helpful', and 'detailed'.",
      D: "Set clear boundaries and show the exact output format you expect.",
    },
    answer: "D",
  },
  {
    id: 6,
    category: "Precision Over Openness",
    principle: "Precision Over Openness",
    question: "How do simple formatting templates help steer a model's focus?",
    options: {
      A: "They give the model a clear layout to follow, making the output more predictable.",
      B: "They tend to confuse the model by adding unnecessary words.",
      C: "They force the model to look up live data automatically.",
      D: "They replace the need for clear instructions entirely.",
    },
    answer: "A",
  },
  {
    id: 7,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "How do thoughtful constraints actually improve the quality of a response?",
    options: {
      A: "They encourage longer answers that cover every possible scenario.",
      B: "They lower the model's confidence so it gives safer answers.",
      C: "They nudge the model to focus on high-value details while cutting out filler.",
      D: "They help bypass safety checks to deliver direct answers faster.",
    },
    answer: "C",
  },
  {
    id: 8,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "What common response habit can you fix by setting clear length and layout limits?",
    options: {
      A: "Occasional typos in computer code.",
      B: "Unnecessary preamble, fluff, and repeated points.",
      C: "Word-chunking and formatting glitches.",
      D: "Slow server response times.",
    },
    answer: "B",
  },
  {
    id: 9,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "When an output is brief, packed with useful info, and skips conversational chatter, what does that show?",
    options: {
      A: "Good boundaries helped create a focused, high-value answer.",
      B: "The model had too much freedom.",
      C: "The model ran out of space and cut off early.",
      D: "The model made up information on the spot.",
    },
    answer: "A",
  },
  {
    id: 10,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "What is the typical trade-off when you add strict rules to a prompt?",
    options: {
      A: "Slower answer times in exchange for longer paragraphs.",
      B: "Higher token costs in exchange for more creative stories.",
      C: "Lower factual accuracy in exchange for quicker responses.",
      D: "A bit less conversational warmth in exchange for a concise, useful answer.",
    },
    answer: "D",
  },
  {
    id: 11,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "If you need a quick summary with just key numbers and zero extra commentary, which prompt works best?",
    options: {
      A: "'Please write a warm and engaging overview of the results.'",
      B: "'Provide a broad look at all the factors involved.'",
      C: "'Put only the numerical data in a 2-column table with no introduction.'",
      D: "'Explain in detail why these numbers are important to us.'",
    },
    answer: "C",
  },
  {
    id: 12,
    category: "Value Through Restriction",
    principle: "Value Through Restriction",
    question: "What usually happens when you ask a model to avoid buzzwords or extra adjectives?",
    options: {
      A: "It struggles to assemble logical sentences.",
      B: "It picks clear, direct words that fit your guidelines.",
      C: "It defaults to generating random symbols.",
      D: "It ignores the rule and answers normally.",
    },
    answer: "B",
  },
  {
    id: 13,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "What's the main idea behind the 'Synergistic Tooling' principle?",
    options: {
      A: "A single reliable prompting trick is usually all you ever need.",
      B: "Software tools should handle everything so you don't need prompts.",
      C: "Comparing prompt versions is only useful after a product launches.",
      D: "Combining clear phrasing, boundaries, and testing builds a much stronger system.",
    },
    answer: "D",
  },
  {
    id: 14,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "Which set of habits shows 'Synergistic Tooling' in action?",
    options: {
      A: "Clearing up confusing language, adding gentle constraints, and comparing different prompt drafts.",
      B: "Asking the same vague question over and over until you get a good answer.",
      C: "Mixing system settings with random questions without checking the results.",
      D: "Translating instructions back and forth across languages to see what happens.",
    },
    answer: "A",
  },
  {
    id: 15,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "Why is it helpful to test two or three versions of a prompt side-by-side?",
    options: {
      A: "It automatically writes test code for your software project.",
      B: "It lets you see how different setup rules change the quality of the answer.",
      C: "It means you don't have to check the output for mistakes.",
      D: "It ensures every model version gives the exact same reply.",
    },
    answer: "B",
  },
  {
    id: 16,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "How do clear phrasing and supportive boundaries work together in a prompt?",
    options: {
      A: "Clear phrasing adds friendly chatter, while boundaries remove facts.",
      B: "They do the exact same thing, so you only need one or the other.",
      C: "Clear phrasing defines what you mean, while boundaries set helpful limits on format.",
      D: "Clear phrasing expands the search area, while boundaries shrink it too much.",
    },
    answer: "C",
  },
  {
    id: 17,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "When comparing different prompt options, what are you mainly trying to find out?",
    options: {
      A: "Which model provider offers the cheapest pricing.",
      B: "How to update the model's underlying code.",
      C: "Which combination of rules consistently gives you the best results.",
      D: "How to skip reviewing the answers yourself.",
    },
    answer: "C",
  },
  {
    id: 18,
    category: "Synergistic Tooling",
    principle: "Synergistic Tooling",
    question: "Why does a complex project usually need more than just a quick one-line prompt?",
    options: {
      A: "Short prompts will trigger technical errors in the system.",
      B: "Models automatically ignore requests shorter than a few sentences.",
      C: "Using multiple instructions is required by standard web rules.",
      D: "Challenging tasks often work better with a mix of role setting, layout guidance, and edge-case care.",
    },
    answer: "D",
  },
  {
    id: 19,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "According to Principle 4, what's the best way to set expectations in a prompt?",
    options: {
      A: "Use clear parameters like word targets, specific layouts, or defined roles.",
      B: "Use descriptive words like 'thorough', 'concise', or 'professional'.",
      C: "Keep things open so the model has room to interpret your needs.",
      D: "Drop subtle hints naturally throughout your paragraph.",
    },
    answer: "A",
  },
  {
    id: 20,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "Which of these instructions gives the model the clearest guide to follow?",
    options: {
      A: "'Write a short summary.'",
      B: "'Keep your answer brief and clean.'",
      C: "'Make sure the answer sounds high quality.'",
      D: "'Keep the answer under 150 words and use 3 bullet points.'",
    },
    answer: "D",
  },
  {
    id: 21,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "Why can broad goals like 'be creative' or 'be detailed' sometimes feel tricky?",
    options: {
      A: "Models don't understand basic English vocabulary.",
      B: "They leave a lot to interpretation, which can lead to unpredictable results.",
      C: "They cause the system to accidentally output computer code.",
      D: "They make the prompt too long to process.",
    },
    answer: "B",
  },
  {
    id: 22,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "How could you turn the vague tip 'Make it professional' into a clearer guideline?",
    options: {
      A: "Change it to: 'Make it extremely professional and corporate.'",
      B: "Add friendly phrases like 'please' and 'thank you' across the prompt.",
      C: "Try: 'Avoid contractions, state facts directly, and use a standard executive summary layout.'",
      D: "Ask the model to 'be smart, polished, and thoughtful.'",
    },
    answer: "C",
  },
  {
    id: 23,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "Why is it easier to check outputs when you give specific rules (like 'use bullet points')?",
    options: {
      A: "You or a script can easily check if the rule was followed.",
      B: "Models answer faster when you use broad descriptive words.",
      C: "It lets the model score its own work without help.",
      D: "It means you don't need to review the content at all.",
    },
    answer: "A",
  },
  {
    id: 24,
    category: "Explicit and Observable Standards",
    principle: "Explicit and Observable Standards",
    question: "Which option is an example of a clear layout request?",
    options: {
      A: "'Organize the response in a logical way.'",
      B: "'Present the information neatly.'",
      C: "'Use a friendly and structured layout.'",
      D: "'Format as JSON with keys for summary, key_points, and action_items.'",
    },
    answer: "D",
  },
  {
    id: 25,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question: "What two things does Principle 5 suggest checking when reviewing a model's answer?",
    options: {
      A: "How fast it responded and how much it cost.",
      B: "Good grammar AND how entertaining the story was.",
      C: "How helpful the content is AND whether it followed your specific rules.",
      D: "The prompt length AND how many words came back.",
    },
    answer: "C",
  },
  {
    id: 26,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question:
      "Imagine an answer is factual and well-written, but it's 150 words long when you asked for under 100. How should you view this result?",
    options: {
      A: "A complete win, because high-quality writing matters most.",
      B: "A partial success—the content is good, but the rule wasn't met.",
      C: "A sign that you should change your prompt length rules.",
      D: "A system error caused by network lag.",
    },
    answer: "B",
  },
  {
    id: 27,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question: "Why isn't 'it sounds good' enough on its own when testing prompts for automated apps?",
    options: {
      A: "Good writing is impossible to measure.",
      B: "An answer that misses layout rules might break automated workflows downstream.",
      C: "Rules in a prompt are only meant as loose suggestions.",
      D: "Great content slows down system performance.",
    },
    answer: "B",
  },
  {
    id: 28,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question: "When setting up a review process for prompts, how should you balance content quality and rule checks?",
    options: {
      A: "Value both content accuracy and rule adherence so the output is reliable and useful.",
      B: "Focus only on useful content and ignore formatting rules.",
      C: "Focus entirely on character limits and ignore whether the facts are correct.",
      D: "Skip both and rely on general feedback from team members.",
    },
    answer: "A",
  },
  {
    id: 29,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question: "If you ask for a list of 3 items in JSON, but the model gives you 5 accurate items, what needs a little tuning?",
    options: {
      A: "The factual content side.",
      B: "Neither—5 items is better than 3.",
      C: "Both the factual content and rule compliance.",
      D: "The rule compliance side.",
    },
    answer: "D",
  },
  {
    id: 30,
    category: "Two-Dimensional Evaluation",
    principle: "Two-Dimensional Evaluation",
    question: "How does Two-Dimensional Evaluation help you grow as a prompt designer?",
    options: {
      A: "It moves you from 'just getting a nice answer' to creating reliable, repeatable results.",
      B: "It saves time by letting you skip test runs altogether.",
      C: "It removes the need to use testing tools.",
      D: "It shows why setting prompt rules isn't necessary.",
    },
    answer: "A",
  },
];

const optionLetters = ["A", "B", "C", "D"] as const;

export const intermediateQuestionBank: QuizQuestion[] = rawIntermediateQuestions.map((raw) => {
  const correctText = raw.options[raw.answer];

  return {
    id: `intermediate-${raw.id}`,
    prompt: raw.question,
    options: optionLetters.map((letter) => ({
      id: letter.toLowerCase(),
      label: raw.options[letter],
    })),
    correctOptionId: raw.answer.toLowerCase(),
    explanation: `${correctText} This tests "${raw.principle}" within ${raw.category}.`,
    xpReward: 15,
    category: raw.category,
    principle: raw.principle,
  };
});

export const INTERMEDIATE_QUIZ_LENGTH = 10;
