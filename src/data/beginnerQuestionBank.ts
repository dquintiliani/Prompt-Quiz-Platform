import type { QuizQuestion } from "../types/quiz";

interface RawBeginnerQuestion {
  id: number;
  category: string;
  principle: string;
  question: string;
  options: Record<"A" | "B" | "C" | "D", string>;
  answer: "A" | "B" | "C" | "D";
}

const rawBeginnerQuestions: RawBeginnerQuestion[] = [
  {
    id: 1,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "Why is it better to be super specific when asking an AI a question?",
    options: {
      A: "It helps the AI give you a focused answer instead of guessing what you want.",
      B: "It makes the AI answer much faster.",
      C: "It prevents the AI from using big words.",
      D: "It forces the AI to write in code.",
    },
    answer: "A",
  },
  {
    id: 2,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "Which of these questions is the best example of being super specific?",
    options: {
      A: "Tell me about space.",
      B: "Why is Mars red?",
      C: "List 3 fun facts about the moon landing in 1969 for a school project.",
      D: "Give me info on planets.",
    },
    answer: "C",
  },
  {
    id: 3,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "What usually happens if your prompt is too broad, like 'Tell me about food'?",
    options: {
      A: "The AI will decline to answer.",
      B: "You might get a giant, general answer that misses what you actually needed.",
      C: "The AI will automatically know your favorite food.",
      D: "The answer will be given in another language.",
    },
    answer: "B",
  },
  {
    id: 4,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "If you want help planning a workout, which prompt uses Rule 1 best?",
    options: {
      A: "How do I get fit?",
      B: "Give me a 15-minute home leg workout that requires no equipment.",
      C: "Tell me about exercise routines.",
      D: "What is gym cardio?",
    },
    answer: "B",
  },
  {
    id: 5,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "How does adding a specific number (like 'give me 3 reasons') help the AI?",
    options: {
      A: "It speeds up your internet connection.",
      B: "It sets a clear target so the answer stays clean and to the point.",
      C: "It unlocks hidden features in the AI.",
      D: "It forces the AI to use simple math.",
    },
    answer: "B",
  },
  {
    id: 6,
    category: "Be Super Specific",
    principle: "Be Super Specific",
    question: "Which sentence replaces 'Help me write an email' with a super specific request?",
    options: {
      A: "Write a short email to my boss asking for Friday off to go to the dentist.",
      B: "Draft a nice letter about work.",
      C: "How do emails work?",
      D: "Write something professional.",
    },
    answer: "A",
  },
  {
    id: 7,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question: "What does asking an AI to 'pretend to be someone' do for the answer?",
    options: {
      A: "It changes the tone and style to match that persona.",
      B: "It tricks the AI into thinking it is human.",
      C: "It makes the answer twice as long.",
      D: "It deletes all technical facts from the reply.",
    },
    answer: "A",
  },
  {
    id: 8,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question: "If you want a simple explanation of how photos work, which role should you give the AI?",
    options: {
      A: "An advanced camera engineer writing a manual.",
      B: "A friendly photography teacher talking to a beginner.",
      C: "A historian describing the 1800s.",
      D: "A movie director making an action film.",
    },
    answer: "B",
  },
  {
    id: 9,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question: "Which prompt clearly uses Rule 2 (Give It a Role or Background)?",
    options: {
      A: "Act like a chef and give me a 5-minute snack idea using eggs and cheese.",
      B: "What are eggs and cheese?",
      C: "List 5 breakfast foods in a table.",
      D: "Write a snack recipe under 100 words.",
    },
    answer: "A",
  },
  {
    id: 10,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question: "Why might you tell the AI *who the answer is for* (e.g., 'explain this to a 7-year-old')?",
    options: {
      A: "To help it pick the right words and level of detail.",
      B: "Because the AI can't answer without knowing your age.",
      C: "To turn the response into an audio book.",
      D: "To make the response print out automatically.",
    },
    answer: "A",
  },
  {
    id: 11,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question: "You need motivational advice for studying. Which role framing works best?",
    options: {
      A: "Speak like a strict referee giving a penalty.",
      B: "Act like an encouraging coach giving a halftime pep talk.",
      C: "Pretend to be a textbook index.",
      D: "Speak like a tour guide in a museum.",
    },
    answer: "B",
  },
  {
    id: 12,
    category: "Give It a Role or Background",
    principle: "Give It a Role or Background",
    question:
      "What is the benefit of using an analogy in a role prompt (like 'explain gravity using a trampoline')?",
    options: {
      A: "It helps ground a tricky idea in something familiar and easy to picture.",
      B: "It turns the answer into a cartoon video.",
      C: "It removes the need for any real facts.",
      D: "It keeps the answer strictly under three words.",
    },
    answer: "A",
  },
  {
    id: 13,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "What is the main goal of telling the AI how to lay out its answer?",
    options: {
      A: "To make the text easy and quick to read.",
      B: "To test if the AI knows layout design.",
      C: "To make the AI answer in different colors.",
      D: "To hide details from the reader.",
    },
    answer: "A",
  },
  {
    id: 14,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "Which option is an example of setting a layout rule?",
    options: {
      A: "Explain photosynthesis.",
      B: "Put the key steps into a bulleted list.",
      C: "Act like a biologist.",
      D: "Tell me something cool about plants.",
    },
    answer: "B",
  },
  {
    id: 15,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "If you are in a rush and need quick facts, which layout request works best?",
    options: {
      A: "Write a 5-page essay.",
      B: "Give me a 3-bullet-point summary under 50 words total.",
      C: "Tell a story with three chapters.",
      D: "Write a rhyming poem about it.",
    },
    answer: "B",
  },
  {
    id: 16,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "Which formatting request helps you compare two items side by side?",
    options: {
      A: "Make it sound like a text message.",
      B: "Format the comparison in a 2-column table.",
      C: "Write one long paragraph.",
      D: "Use lots of exclamation marks!",
    },
    answer: "B",
  },
  {
    id: 17,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "If you ask the AI to 'Make it sound like a text message,' what kind of output should you expect?",
    options: {
      A: "A formal business letter with a sign-off.",
      B: "Short, casual sentences, maybe with emojis or common abbreviations.",
      C: "A numbered step-by-step technical guide.",
      D: "An academic paper with citations.",
    },
    answer: "B",
  },
  {
    id: 18,
    category: "Choose How It Should Look",
    principle: "Choose How It Should Look",
    question: "Why is setting a word limit (like 'under 4 sentences') helpful?",
    options: {
      A: "It stops the AI from giving extra fluff you don't need.",
      B: "It forces the AI to use smaller font sizes.",
      C: "It makes the AI search faster.",
      D: "It deletes previous chat messages automatically.",
    },
    answer: "A",
  },
  {
    id: 19,
    category: "Show an Example",
    principle: "Show an Example",
    question: "Why is providing an example (few-shot prompting) so effective?",
    options: {
      A: "It shows the AI the exact pattern or style you want it to follow.",
      B: "It proves to the AI that you already know the answer.",
      C: "It lowers your internet data usage.",
      D: "It makes the AI answer in all capital letters.",
    },
    answer: "A",
  },
  {
    id: 20,
    category: "Show an Example",
    principle: "Show an Example",
    question: "Which prompt uses Rule 4 (Show an Example) correctly?",
    options: {
      A: "Rewrite my notes. Example: 'cat = small' -> 'Cats are small, furry mammals.'",
      B: "Rewrite my notes nicely please.",
      C: "Act like an English professor.",
      D: "Make a list of my notes in bullet points.",
    },
    answer: "A",
  },
  {
    id: 21,
    category: "Show an Example",
    principle: "Show an Example",
    question: "When is showing an example especially helpful?",
    options: {
      A: "When you want a unique or unusual format that is hard to explain with words alone.",
      B: "When you want a standard 500-word essay.",
      C: "When you only want a single 'yes' or 'no' answer.",
      D: "When you ask for today's weather.",
    },
    answer: "A",
  },
  {
    id: 22,
    category: "Show an Example",
    principle: "Show an Example",
    question: "If you want the AI to turn movie titles into funny emojis, what's the best approach?",
    options: {
      A: "Give an example like: 'Jurassic Park' -> 🦖🦕🌴.",
      B: "Just say 'Do movie emojis.'",
      C: "Ask 'What are emojis?'",
      D: "Tell it to list 10 movies in order.",
    },
    answer: "A",
  },
  {
    id: 23,
    category: "Show an Example",
    principle: "Show an Example",
    question: "What part of an example prompt tells the AI what to transform?",
    options: {
      A: "The input-output sample (e.g., 'Input -> Output').",
      B: "The greeting at the start of the chat.",
      C: "The length constraint at the end.",
      D: "The system timestamp.",
    },
    answer: "A",
  },
  {
    id: 24,
    category: "Show an Example",
    principle: "Show an Example",
    question: "How many sample demonstrations do you usually need to show a clear pattern?",
    options: {
      A: "Just 1 or 2 clear examples are often enough.",
      B: "At least 50 detailed samples.",
      C: "Exactly 100 examples.",
      D: "You must fill the entire screen with examples.",
    },
    answer: "A",
  },
  {
    id: 25,
    category: "Chat and Tweak",
    principle: "Chat and Tweak",
    question: "What should you do if the AI's first response isn't quite right?",
    options: {
      A: "Follow up with a quick tweak, like 'Can you make that simpler?'",
      B: "Give up immediately.",
      C: "Report a system error.",
      D: "Restart your computer.",
    },
    answer: "A",
  },
  {
    id: 26,
    category: "Chat and Tweak",
    principle: "Chat and Tweak",
    question: "Talking to an AI is most like:",
    options: {
      A: "A back-and-forth conversation with a helpful friend.",
      B: "Filing a legal document that can never be changed.",
      C: "Unlocking a padlock with one single code.",
      D: "Sending a letter in the mail that takes weeks.",
    },
    answer: "A",
  },
  {
    id: 27,
    category: "Chat and Tweak",
    principle: "Chat and Tweak",
    question: "Which of these is a great follow-up tweak if an answer is too long?",
    options: {
      A: "Can you summarize that in 2 short bullet points?",
      B: "Start over from scratch with a different topic.",
      C: "Why did you write so much?",
      D: "Change the font size.",
    },
    answer: "A",
  },
  {
    id: 28,
    category: "Chat and Tweak",
    principle: "Chat and Tweak",
    question: "If step 2 of an AI guide feels confusing, what is the best reply?",
    options: {
      A: "Explain step 2 again, but use a real-world example.",
      B: "This guide is completely useless.",
      C: "What is step 1 again?",
      D: "Delete step 2.",
    },
    answer: "A",
  },
  {
    id: 29,
    category: "The Secret Recipe",
    principle: "The Secret Recipe",
    question: "What are the three parts of 'The Secret Recipe' for great prompts?",
    options: {
      A: "Who to be + What to do + How to show it.",
      B: "When to start + Where to go + Why to leave.",
      C: "How fast + How long + How loud.",
      D: "First name + Last name + Email address.",
    },
    answer: "A",
  },
  {
    id: 30,
    category: "The Secret Recipe",
    principle: "The Secret Recipe",
    question: "Which prompt uses all three parts of 'The Secret Recipe'?",
    options: {
      A: "Act like a video game guide. Give me 3 safety tips for riding a bike. Format it as a level-up cheat sheet!",
      B: "Tell me about bike safety tips.",
      C: "Can you help me ride a bike?",
      D: "Make a list of things to do on a weekend.",
    },
    answer: "A",
  },
];

const optionLetters = ["A", "B", "C", "D"] as const;

export const beginnerQuestionBank: QuizQuestion[] = rawBeginnerQuestions.map((raw) => {
  const correctText = raw.options[raw.answer];

  return {
    id: `beginner-${raw.id}`,
    prompt: raw.question,
    options: optionLetters.map((letter) => ({
      id: letter.toLowerCase(),
      label: raw.options[letter],
    })),
    correctOptionId: raw.answer.toLowerCase(),
    explanation: `${correctText} This tests "${raw.principle}" within ${raw.category}.`,
    xpReward: 10,
    category: raw.category,
    principle: raw.principle,
  };
});

export const BEGINNER_QUIZ_LENGTH = 10;
