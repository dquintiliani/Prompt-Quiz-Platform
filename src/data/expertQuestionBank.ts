import type { QuizQuestion } from "../types/quiz";

interface RawExpertQuestion {
  id: number;
  category: string;
  principle: string;
  question: string;
  options: Record<"A" | "B" | "C" | "D", string>;
  answer: "A" | "B" | "C" | "D";
}

const rawExpertQuestions: RawExpertQuestion[] = [
  {
    id: 1,
    category: "Architecture & Data Processing",
    principle: "Token-Based Processing",
    question:
      "When a Large Language Model processes an input string, how does it natively break down and evaluate the text?",
    options: {
      A: "It translates sentences into abstract conceptual maps before processing individual words as continuous sound waves.",
      B: "It converts text into numerical chunks representing words, sub-words, or characters and computes statistical patterns over those tokens.",
      C: "It parses whole words as unified semantic entities and maps them directly to a fixed dictionary of static definitions.",
      D: "It breaks text down into strict grammatical units, evaluating subjects and verbs independently of character sequences.",
    },
    answer: "B",
  },
  {
    id: 2,
    category: "Architecture & Data Processing",
    principle: "Token-Based Processing",
    question:
      "Why might an LLM struggle with character-level manipulation, such as reversing a word or counting letters in a long string?",
    options: {
      A: "Because character-level operations exceed the physical memory capacity of the Transformer's context window.",
      B: "Because the model only evaluates abstract ideas without mapping inputs to any numerical representations.",
      C: "Because the model processes text in numerical token chunks rather than looking at raw individual characters directly.",
      D: "Because token-based models process text as whole semantic phrases, preventing access to sub-word segments.",
    },
    answer: "C",
  },
  {
    id: 3,
    category: "Architecture & Data Processing",
    principle: "Token-Based Processing",
    question: "Which statement accurately describes the relationship between text and tokens in LLM architecture?",
    options: {
      A: "Tokens are numerical representations of sub-word units, characters, or words over which the model computes patterns.",
      B: "Tokens represent single whole dictionary words exclusively, ensuring exact one-to-one mapping.",
      C: "Tokens are symbolic rule sets that force the model to process whole sentences in logical blocks.",
      D: "Tokens are abstract conceptual vectors that bypass numerical representations during initial text processing.",
    },
    answer: "A",
  },
  {
    id: 4,
    category: "Model Dynamics & Inference",
    principle: "Probabilistic Generation",
    question: "What is the foundational core objective of an LLM during text generation?",
    options: {
      A: "To query an internal static database and retrieve the most factually verified response.",
      B: "To verify logical truth across external databases before rendering a final sentence.",
      C: "To calculate and output the mathematically most likely next token given the preceding sequence.",
      D: "To apply deterministic rulebooks to assemble grammatically valid outputs.",
    },
    answer: "C",
  },
  {
    id: 5,
    category: "Model Dynamics & Inference",
    principle: "Probabilistic Generation",
    question: "How does an LLM determine which word or character segment to generate next in a sequence?",
    options: {
      A: "It searches a fixed decision tree of grammatically approved complete sentences.",
      B: "It evaluates a probability distribution over potential next tokens conditioned on prior context.",
      C: "It runs a continuous real-time factual query against its training corpus to find exact matches.",
      D: "It applies non-probabilistic logical deduction rules to select a single forced token outcome.",
    },
    answer: "B",
  },
  {
    id: 6,
    category: "Model Dynamics & Inference",
    principle: "Probabilistic Generation",
    question:
      "Because an LLM operates as a probabilistic engine predicting the next token, what inherent behavior can occur?",
    options: {
      A: "It guarantees that generated sentences are logically impossible to alter upon repeated generation.",
      B: "It generates plausible-sounding text based on statistical likelihood rather than absolute factual lookup.",
      C: "It always yields perfectly verified factual truth regardless of how the prompt is phrased.",
      D: "It strictly executes deterministic algorithms that prevent any variation in text output.",
    },
    answer: "B",
  },
  {
    id: 7,
    category: "Architecture & Data Processing",
    principle: "Contextual Understanding",
    question: "What role does the self-attention mechanism play within the Transformer architecture?",
    options: {
      A: "It forces the model to evaluate tokens strictly one by one in a linear, left-to-right sequence without looking back.",
      B: "It compresses all input tokens into a single static token to reduce context window usage.",
      C: "It matches input tokens directly against an external dictionary to assign fixed, context-independent definitions.",
      D: "It evaluates every token in relation to every other token in the prompt to capture context, syntax, and relationships.",
    },
    answer: "D",
  },
  {
    id: 8,
    category: "Architecture & Data Processing",
    principle: "Contextual Understanding",
    question: "How does self-attention allow an LLM to differentiate the word 'bank' in 'river bank' versus 'bank account'?",
    options: {
      A: "It assigns different mathematical weights to 'bank' by calculating its relationship with surrounding tokens like 'river' or 'account'.",
      B: "It looks up 'bank' in a pre-defined static ruleset that overrides token probability based on word order.",
      C: "It isolates 'bank' from all surrounding text and evaluates its standalone dictionary definition.",
      D: "It converts 'bank' into a hardcoded grammatical tag before analyzing the rest of the prompt.",
    },
    answer: "A",
  },
  {
    id: 9,
    category: "Architecture & Data Processing",
    principle: "Contextual Understanding",
    question: "Which capability is directly enabled by self-attention mechanisms in language models?",
    options: {
      A: "Direct querying of real-time web databases without using context tokens.",
      B: "Eliminating the need for a finite context window during complex multi-turn chats.",
      C: "Interpreting long-range relationships, tone, syntax, and nuanced context across the entire prompt.",
      D: "Guaranteeing zero probability of hallucination across complex technical domains.",
    },
    answer: "C",
  },
  {
    id: 10,
    category: "Memory & Scope Limitations",
    principle: "Context Constraints",
    question: "What happens when a conversation exceeds the maximum limit of an LLM's context window?",
    options: {
      A: "The model automatically expands its physical memory parameter size to accommodate the overflow.",
      B: "The model compresses old context into fine-tuning weights, permanently storing it in the core model.",
      C: "Earlier information falls outside the working memory, causing the model to lose track of past instructions or context.",
      D: "The model converts earlier tokens into rulebooks that remain active indefinitely without using token space.",
    },
    answer: "C",
  },
  {
    id: 11,
    category: "Memory & Scope Limitations",
    principle: "Context Constraints",
    question: "Which items actively consume space within a model's finite context window during a chat session?",
    options: {
      A: "Only the immediate final prompt entered by the user in the current turn.",
      B: "System instructions, prompt inputs, previous turn history, and partial outputs.",
      C: "Model training weights, active hyperparameters, and system memory allocations.",
      D: "System instructions and output tokens only; user input history is stored separately outside memory.",
    },
    answer: "B",
  },
  {
    id: 12,
    category: "Memory & Scope Limitations",
    principle: "Context Constraints",
    question: "Why is it important to manage prompt length and history in complex LLM applications?",
    options: {
      A: "Because long prompts force the model to switch from probabilistic generation to static database lookups.",
      B: "Because context windows can only process system instructions and ignore user input if history is too long.",
      C: "Because exceeding the working context limit degrades the model's ability to retain and reason over initial constraints.",
      D: "Because extra tokens permanently alter the underlying transformer model parameters during inference.",
    },
    answer: "C",
  },
  {
    id: 13,
    category: "Model Dynamics & Inference",
    principle: "Output Variability",
    question: "Why can submitting the exact same prompt twice produce slightly different responses from an LLM?",
    options: {
      A: "The model dynamically updates its core training weights after every individual user interaction.",
      B: "Outputs are drawn from statistical probability distributions rather than fixed, deterministic rulebooks.",
      C: "Self-attention mechanisms recalculate token definitions randomly every time a prompt is processed.",
      D: "The finite context window randomly drops system instructions between identical prompt submissions.",
    },
    answer: "B",
  },
  {
    id: 14,
    category: "Model Dynamics & Inference",
    principle: "Output Variability",
    question: "How can a user force an LLM to generate more consistent, near-deterministic outputs?",
    options: {
      A: "By increasing the context window size beyond the default token threshold.",
      B: "By removing system instructions and relying solely on multi-turn user memory.",
      C: "By reducing the output sampling randomness (temperature) down toward zero.",
      D: "By removing XML formatting delimiters from the input prompt.",
    },
    answer: "C",
  },
  {
    id: 15,
    category: "Model Dynamics & Inference",
    principle: "Output Variability",
    question: "Which statement correctly describes LLM generation under normal (non-zero randomness) settings?",
    options: {
      A: "The model selects outputs from a fixed lookup table based on static syntactic rules.",
      B: "The model evaluates every input deterministically, producing identical word-for-word responses indefinitely.",
      C: "The model samples from a probability distribution over tokens, allowing natural variations across runs.",
      D: "The model routes responses through external databases to eliminate sampling variability.",
    },
    answer: "C",
  },
  {
    id: 16,
    category: "Prompt Optimization & Guidance",
    principle: "Domain & Scope Conditioning",
    question: "How does defining a specific persona or role (e.g., 'Act as a senior software engineer') affect model output?",
    options: {
      A: "It shifts the probability distribution toward vocabulary, patterns, and concepts specific to that domain.",
      B: "It permanently alters the model's underlying transformer parameters to favor technical code.",
      C: "It expands the finite context memory window to allow deeper technical reasoning.",
      D: "It forces the model to bypass token-based processing in favor of rule-based logic.",
    },
    answer: "A",
  },
  {
    id: 17,
    category: "Prompt Optimization & Guidance",
    principle: "Domain & Scope Conditioning",
    question: "From a probabilistic standpoint, what is the primary function of prompt engineering?",
    options: {
      A: "To rewrite the model's core vocabulary dictionary before token processing begins.",
      B: "To steer and narrow the model's token probability field toward desired outcomes.",
      C: "To increase the total randomness of the model's sampling engine across unrelated domains.",
      D: "To replace the self-attention mechanism with explicit decision tree constraints.",
    },
    answer: "B",
  },
  {
    id: 18,
    category: "Prompt Optimization & Guidance",
    principle: "Domain & Scope Conditioning",
    question: "Why does adding domain constraints to a prompt reduce vague or generic outputs?",
    options: {
      A: "It forces the model into zero-temperature deterministic lookup mode automatically.",
      B: "It clears non-relevant historical context from the model's finite context window.",
      C: "It deprioritizes generic token sequences by elevating the probability of specialized domain terminology.",
      D: "It converts abstract token patterns into rigid, hardcoded conditional statements.",
    },
    answer: "C",
  },
  {
    id: 19,
    category: "Prompt Optimization & Guidance",
    principle: "Instruction Clarity",
    question: "Why do generic prompts like 'Write a short article about health' often yield mediocre or unhelpful results?",
    options: {
      A: "Models rely on visible text constraints rather than guessing implicit intent, leaving the probability field wide open.",
      B: "Generic words cause self-attention mechanisms to miscalculate relationships between adjacent tokens.",
      C: "The model's finite context window truncates inputs that lack explicit audience specifications.",
      D: "Unclear prompts trigger internal non-deterministic safety overrides that default to basic outputs.",
    },
    answer: "A",
  },
  {
    id: 20,
    category: "Prompt Optimization & Guidance",
    principle: "Instruction Clarity",
    question: "Which prompt design choice best prevents ambiguity and guides the model toward a precise output format?",
    options: {
      A: "Assuming the model will infer implied business goals based on typical conversational intent.",
      B: "Providing clear, visible constraints regarding target audience, format, length, and scope.",
      C: "Keeping instructions as brief as possible so the model can rely on default probabilistic pathways.",
      D: "Relying on open-ended statements so the model's self-attention can select the format automatically.",
    },
    answer: "B",
  },
  {
    id: 21,
    category: "Prompt Optimization & Guidance",
    principle: "Instruction Clarity",
    question:
      "How do explicit negative constraints (e.g., 'Do not use jargon; keep response under 100 words') assist the model?",
    options: {
      A: "They bypass next-token prediction entirely, switching the model into a deterministic rule parser.",
      B: "They narrow the acceptable token space by eliminating unwanted output paths from the probability field.",
      C: "They prevent the context memory window from filling up during multi-turn exchanges.",
      D: "They force the model to convert sub-word tokens back into whole individual words.",
    },
    answer: "B",
  },
  {
    id: 22,
    category: "Structure & Formatting",
    principle: "Structural Framing",
    question: "Why is using Markdown headers, XML tags, or deliberate line breaks effective in complex prompts?",
    options: {
      A: "Delimiters bypass tokenization by encoding raw text directly into model training weights.",
      B: "Models respond strongly to visual hierarchy and delimiters, which help separate instructions from raw context.",
      C: "Structured tags automatically double the effective length of the model's context window.",
      D: "Formatting symbols force the model to execute deterministic logic instead of probabilistic sampling.",
    },
    answer: "B",
  },
  {
    id: 23,
    category: "Structure & Formatting",
    principle: "Structural Framing",
    question:
      "When passing a long document alongside instructions, how can structural priming prevent the model from confusing context with directions?",
    options: {
      A: "By instructing the model to process context in reverse token order.",
      B: "By removing all line breaks and spaces to compress text within the context window.",
      C: "By enclosing the context in clear tags like `<context>...</context>` to visually separate data from commands.",
      D: "By setting the sampling temperature to zero to lock structural parsing.",
    },
    answer: "C",
  },
  {
    id: 24,
    category: "Structure & Formatting",
    principle: "Structural Framing",
    question: "What effect does structural priming have on attention mechanism weighting during prompt evaluation?",
    options: {
      A: "It disables attention across structural tags so the model ignores formatting tokens completely.",
      B: "It forces attention to focus exclusively on the first 10 tokens of the prompt regardless of structure.",
      C: "It helps attention heads parse distinct functional zones (e.g., rules vs data), improving instruction adherence.",
      D: "It converts organizational tags into fixed mathematical code that overrides output probability distributions.",
    },
    answer: "C",
  },
  {
    id: 25,
    category: "In-Context Learning & Logic",
    principle: "In-Context Example Conditioning",
    question: "What is the primary mechanism behind few-shot prompting?",
    options: {
      A: "Establishing a clear structural and stylistic pattern inside the context window for the model to mirror.",
      B: "Updating the core neural network weights temporarily while the prompt is being evaluated.",
      C: "Expanding the physical size of the context window to accommodate multiple input scenarios.",
      D: "Overriding next-token prediction by forcing the model to select outputs from the provided examples directly.",
    },
    answer: "A",
  },
  {
    id: 26,
    category: "In-Context Learning & Logic",
    principle: "In-Context Example Conditioning",
    question: "Providing 1 to 3 concrete input-output examples in a prompt allows the model to do which of the following?",
    options: {
      A: "Learn new factual knowledge that permanently overrides its pre-training dataset.",
      B: "Mirror desired output formats and reasoning styles without requiring model retraining.",
      C: "Generate deterministic outputs that remain identical regardless of temperature settings.",
      D: "Bypass self-attention calculations by directly copying example tokens into the final response.",
    },
    answer: "B",
  },
  {
    id: 27,
    category: "In-Context Learning & Logic",
    principle: "In-Context Example Conditioning",
    question: "How does few-shot prompting differ from fine-tuning?",
    options: {
      A: "Few-shot prompting modifies core weights permanently, whereas fine-tuning only affects working context memory.",
      B: "Few-shot prompting conditions the model using in-context patterns, whereas fine-tuning alters persistent parameters.",
      C: "Few-shot prompting eliminates output randomness, whereas fine-tuning increases output temperature.",
      D: "Few-shot prompting converts text into code tags, whereas fine-tuning relies strictly on unstructured text.",
    },
    answer: "B",
  },
  {
    id: 28,
    category: "In-Context Learning & Logic",
    principle: "Step-by-Step Reasoning Execution",
    question: "Why does asking a model to 'think step-by-step' improve performance on complex logic or math problems?",
    options: {
      A: "It forces the model into deterministic output mode, removing probability from token generation.",
      B: "It expands the context memory window specifically for mathematical calculation tasks.",
      C: "It allows the model to compute intermediate reasoning tokens into context before committing to a final answer.",
      D: "It disables the transformer self-attention mechanism to avoid distraction from previous steps.",
    },
    answer: "C",
  },
  {
    id: 29,
    category: "In-Context Learning & Logic",
    principle: "Step-by-Step Reasoning Execution",
    question: "What is a primary benefit of Chain-of-Thought prompting during multi-step analytical tasks?",
    options: {
      A: "It significantly reduces logic errors and hallucinations by laying out intermediate steps.",
      B: "It guarantees that context window token limits are reduced by half.",
      C: "It allows the model to execute real-time code without generating visible text tokens.",
      D: "It forces the model to select outputs based on static rules rather than token probabilities.",
    },
    answer: "A",
  },
  {
    id: 30,
    category: "In-Context Learning & Logic",
    principle: "Step-by-Step Reasoning Execution",
    question:
      "When an LLM generates a final answer directly for a complex problem without intermediate reasoning tokens, why is it more prone to errors?",
    options: {
      A: "Because skipping reasoning steps automatically causes the context window to drop system instructions.",
      B: "Because direct generation converts all numerical tokens into abstract conceptual entities.",
      C: "Because self-attention cannot process prompts that lack intermediate step-by-step formatting tags.",
      D: "Because next-token prediction forces it to commit to an answer token before calculating the logical steps needed to arrive at it.",
    },
    answer: "D",
  },
];

const optionLetters = ["A", "B", "C", "D"] as const;

export const expertQuestionBank: QuizQuestion[] = rawExpertQuestions.map((raw) => {
  const correctText = raw.options[raw.answer];

  return {
    id: `expert-${raw.id}`,
    prompt: raw.question,
    options: optionLetters.map((letter) => ({
      id: letter.toLowerCase(),
      label: raw.options[letter],
    })),
    correctOptionId: raw.answer.toLowerCase(),
    explanation: `${correctText} This tests "${raw.principle}" within ${raw.category}.`,
    xpReward: 20,
    category: raw.category,
    principle: raw.principle,
  };
});

export const EXPERT_QUIZ_LENGTH = 10;
