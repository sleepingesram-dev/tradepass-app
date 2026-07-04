// TradePass — merged question bank + integrity checks.
// Loaded after the four section files, before app.js.

const QUESTIONS = [].concat(
  QUESTIONS_CORE,
  QUESTIONS_TYPE1,
  QUESTIONS_TYPE2,
  QUESTIONS_TYPE3
);

const SECTIONS = ["Core", "Type I", "Type II", "Type III"];

const SECTION_BLURBS = {
  "Core": "Ozone, the Clean Air Act, the three R's, safety",
  "Type I": "Small appliances — fridges, window units, PTACs",
  "Type II": "High-pressure — splits, rooftops, market racks",
  "Type III": "Low-pressure chillers — R-11, R-123"
};

// Basic integrity checks — surface content mistakes loudly in the console
// instead of silently serving broken questions.
(function validateBank() {
  const seen = {};
  QUESTIONS.forEach(function (q) {
    if (seen[q.id]) console.error("TradePass data error: duplicate id " + q.id);
    seen[q.id] = true;
    if (SECTIONS.indexOf(q.section) === -1) console.error("TradePass data error: bad section on " + q.id);
    if (!q.options || q.options.length !== 4) console.error("TradePass data error: " + q.id + " needs exactly 4 options");
    if (!(q.correct >= 0 && q.correct <= 3)) console.error("TradePass data error: bad correct index on " + q.id);
    if (!q.explain) console.error("TradePass data error: missing explanation on " + q.id);
  });
})();

function questionById(id) {
  for (let i = 0; i < QUESTIONS.length; i++) {
    if (QUESTIONS[i].id === id) return QUESTIONS[i];
  }
  return null;
}
