import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "lid closed. my cursor is still blinking at the end of a sentence you never finished.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
