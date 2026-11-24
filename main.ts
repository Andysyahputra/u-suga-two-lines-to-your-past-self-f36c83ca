import { mkdirSync, writeFileSync } from "node:fs";

// Two lines to my past self: one warning about a specific moment,
// one sentence on why that moment mattered.
const lines: string[] = [
  "Don't say \"I'm fine\" when your father, still in his coat, asks how you are at the kitchen table the night he comes home late from the hospital.",
  "That was the last time he asked, and the silence you chose that night became the ten years of distance you are still trying to close.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
