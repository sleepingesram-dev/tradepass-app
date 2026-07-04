// Exports the question bank to data/questions.csv in the exact Google Sheets
// schema from the build spec (trade-exam-app-build-prompt.md, section 3), so
// the bank can be imported into Sheets for the Glide build path.
//
// Usage: node tools/export-csv.mjs
// Also validates the bank and prints per-section / free-tier counts.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadBank(file, varName) {
  const code = readFileSync(join(root, "js", file), "utf8");
  return new Function(code + "\nreturn " + varName + ";")();
}

const bank = [
  ...loadBank("questions-core.js", "QUESTIONS_CORE"),
  ...loadBank("questions-type1.js", "QUESTIONS_TYPE1"),
  ...loadBank("questions-type2.js", "QUESTIONS_TYPE2"),
  ...loadBank("questions-type3.js", "QUESTIONS_TYPE3"),
];

// ---- validate ----
const errors = [];
const ids = new Set();
const sections = ["Core", "Type I", "Type II", "Type III"];
for (const q of bank) {
  if (ids.has(q.id)) errors.push(`duplicate id ${q.id}`);
  ids.add(q.id);
  if (!sections.includes(q.section)) errors.push(`${q.id}: bad section "${q.section}"`);
  if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${q.id}: needs exactly 4 options`);
  if (!(q.correct >= 0 && q.correct <= 3)) errors.push(`${q.id}: bad correct index`);
  if (!q.explain || q.explain.length < 40) errors.push(`${q.id}: explanation missing or too short`);
  if (!["Easy", "Medium", "Hard"].includes(q.difficulty)) errors.push(`${q.id}: bad difficulty`);
  if (typeof q.free !== "boolean") errors.push(`${q.id}: free flag must be boolean`);
  if (!q.topic) errors.push(`${q.id}: missing topic`);
}
if (errors.length) {
  console.error("BANK VALIDATION FAILED:\n" + errors.join("\n"));
  process.exit(1);
}

// ---- export ----
const csvField = (v) => {
  const s = String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

const header = [
  "QuestionID", "Section", "Topic", "QuestionText",
  "OptionA", "OptionB", "OptionC", "OptionD",
  "CorrectAnswer", "Explanation", "Difficulty", "FreeTier",
];
const letters = ["A", "B", "C", "D"];
const rows = bank.map((q) => [
  q.id, q.section, q.topic, q.q,
  q.options[0], q.options[1], q.options[2], q.options[3],
  letters[q.correct], q.explain, q.difficulty, q.free ? "TRUE" : "FALSE",
].map(csvField).join(","));

mkdirSync(join(root, "data"), { recursive: true });
writeFileSync(join(root, "data", "questions.csv"), [header.join(","), ...rows].join("\n") + "\n");

// ---- report ----
const bySection = {};
for (const s of sections) bySection[s] = { total: 0, free: 0 };
for (const q of bank) {
  bySection[q.section].total++;
  if (q.free) bySection[q.section].free++;
}
console.log("Bank valid. Wrote data/questions.csv");
for (const s of sections) console.log(`  ${s}: ${bySection[s].total} questions (${bySection[s].free} free)`);
console.log(`  TOTAL: ${bank.length} questions (${bank.filter((q) => q.free).length} free)`);
const dist = [0, 0, 0, 0];
for (const q of bank) dist[q.correct]++;
console.log(`  Correct-answer spread A/B/C/D: ${dist.join("/")}`);
