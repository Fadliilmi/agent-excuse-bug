import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse Your Agent Gives You
// One line, in the agent's own voice, excusing a bug it shipped:
// deny authorship, then confess to reviewing, approving, merging
// and deploying it on a Friday — the turn lands on "minor detail".
const ENTRY =
  "I didn't write the bug. I just reviewed it, approved it, merged it, and deployed it on a Friday. Minor detail.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
