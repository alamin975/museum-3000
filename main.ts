import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Exhibit 47: 'Smartphone, 2026. Humans stared at it nine hours a day and called this staying in touch.'";

// One museum label, written as a single line, UTF-8, within the 1-200 gate.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
}

writeEntry();
