// TradePass — app logic. Zero dependencies, works offline from a static host.
// State lives in localStorage on the user's device (this IS the backend for v1).

/* =========================== CONFIG ============================ */
// Set these before launch.
const CONFIG = {
  // Your Gumroad product checkout URL.
  gumroadUrl: "https://fineprint6.gumroad.com/l/epa608",
  // Unlock codes delivered to buyers in the Gumroad receipt/content.
  // Add a new code any time (e.g. one per school for class deals); old ones
  // keep working unless you remove them. (v1 honor system — see README.)
  unlockCodes: ["EPA608-7FN0M8"],
  price: "$24",
  mockQuestions: 25,   // matches the real EPA 608 section format
  mockMinutes: 35,
  passPct: 70,         // real exam passing threshold
  weakBelow: 60,       // strength labels
  strongAt: 80
};

const STORAGE_KEY = "tradepass_v1";

/* =========================== STORAGE =========================== */

let db = loadDB();

function loadDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && typeof d === "object") {
        return {
          name: d.name || "",
          email: d.email || "",
          paid: !!d.paid,
          freeMockUsed: !!d.freeMockUsed,
          theme: (d.theme === "light" || d.theme === "auto") ? d.theme : "dark",
          progress: d.progress || {}
        };
      }
    }
  } catch (e) { /* corrupted storage — start fresh */ }
  return { name: "", email: "", paid: false, freeMockUsed: false, theme: "dark", progress: {} };
}

/* =========================== THEME ============================= */

function applyTheme() {
  const pref = db.theme || "dark";
  const light = pref === "light" ||
    (pref === "auto" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches);
  document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", light ? "#f1f5f9" : "#0f172a");
}

function saveDB() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); } catch (e) { /* storage full/blocked */ }
}

/* ====================== PROGRESS & STATS ======================= */

function recordAnswer(qid, correct) {
  const p = db.progress[qid] || (db.progress[qid] = { tc: 0, ti: 0, streak: 0, missed: false });
  if (correct) {
    p.tc++;
    p.streak++;
    // Answered correctly twice in a row -> drops off the missed deck.
    if (p.streak >= 2) p.missed = false;
  } else {
    p.ti++;
    p.streak = 0;
    p.missed = true;
  }
  saveDB();
}

function statsFor(questions) {
  let attempted = 0, tc = 0, ti = 0;
  questions.forEach(function (q) {
    const p = db.progress[q.id];
    if (p && (p.tc + p.ti) > 0) {
      attempted++;
      tc += p.tc;
      ti += p.ti;
    }
  });
  const answers = tc + ti;
  return { attempted: attempted, total: questions.length, answers: answers, pct: answers ? Math.round(100 * tc / answers) : 0 };
}

function overallStats() { return statsFor(QUESTIONS); }
function sectionQuestions(section) { return QUESTIONS.filter(function (q) { return q.section === section; }); }

function strength(st) {
  if (!st.answers) return { label: "Not started", cls: "none" };
  if (st.pct < CONFIG.weakBelow) return { label: "Weak", cls: "weak" };
  if (st.pct < CONFIG.strongAt) return { label: "Moderate", cls: "moderate" };
  return { label: "Strong", cls: "strong" };
}

/* ====================== QUESTION POOLS ========================= */

function accessible(q) { return db.paid || q.free; }

function studyPool(section) {
  return QUESTIONS.filter(function (q) {
    return (!section || q.section === section) && accessible(q);
  });
}

function missedQuestions() {
  return QUESTIONS.filter(function (q) {
    const p = db.progress[q.id];
    return p && p.missed;
  });
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Each time a question is served, its answer options are displayed in a fresh
// random order — so users learn the material, not the letter positions.
// order[displayIndex] = index into q.options.
function makeItem(q) {
  return { q: q, order: shuffle([0, 1, 2, 3]) };
}

/* =========================== SESSION =========================== */

let view = db.email ? "home" : "welcome";
let session = null;   // current study/mock session
let lastResults = null; // last finished mock, for the results screen
let upgradeMsg = "";  // feedback on the upgrade screen
let accountMsg = "";  // feedback on the account screen

function clearTimer() {
  if (session && session.timerId) { clearInterval(session.timerId); session.timerId = null; }
}

function go(v) {
  clearTimer();
  view = v;
  render();
  window.scrollTo(0, 0);
}

/* ============================ HELPERS ========================== */

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const LETTERS = ["A", "B", "C", "D"];

function fmtTime(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m + ":" + (r < 10 ? "0" : "") + r;
}

function topbar(title, backAction) {
  return '<div class="topbar">' +
    '<button class="back-btn" data-action="' + backAction + '">&larr; Back</button>' +
    "<h1>" + esc(title) + "</h1>" +
    "</div>";
}

/* ============================ VIEWS ============================ */

function renderWelcome() {
  return '<div class="welcome">' +
    '<div class="hard-hat">&#128736;&#65039;</div>' +
    '<div class="brand">Trade<span class="pass">Pass</span></div>' +
    "<h2>Pass your EPA 608 the first time.</h2>" +
    '<p class="pitch">Practice questions with plain-English explanations, timed mock exams, and a tracker that tells you when you\'re ready.</p>' +
    "<div>" +
    '<input type="text" id="in-name" placeholder="Your name" autocomplete="name" value="' + esc(db.name) + '">' +
    '<input type="email" id="in-email" placeholder="Email" autocomplete="email" inputmode="email" value="' + esc(db.email) + '">' +
    '<button class="btn primary" data-action="signin">Start Studying Free</button>' +
    '<p class="muted center">Free: 50 practice questions + 1 mock exam. No credit card.</p>' +
    "</div>" +
    '<p class="footnote">All questions are original study material based on the public EPA Section 608 topic outline. Not affiliated with the EPA. Your progress is saved on this device.</p>' +
    "</div>";
}

function renderHome() {
  const ov = overallStats();
  const ready = ov.answers > 0;
  const passing = ov.pct >= CONFIG.passPct;

  let h = '<div class="topbar"><div class="brand">Trade<span class="pass">Pass</span></div>' +
    '<div class="spacer"></div>' +
    (db.paid ? '<span class="badge pro">FULL BANK</span>' : '<span class="badge free">FREE TIER</span>') +
    '<button class="back-btn" data-action="account" aria-label="Account and settings">&#9881;&#65039;</button>' +
    "</div>";

  // Readiness indicator
  h += '<div class="card readiness">';
  if (ready) {
    h += '<div class="big-score ' + (passing ? "pass" : "fail") + '">' + ov.pct + "%</div>" +
      '<div class="muted">You\'re scoring ' + ov.pct + "% overall. Passing requires " + CONFIG.passPct + "%.</div>" +
      '<div class="meter"><div class="fill ' + (passing ? "pass" : "") + '" style="width:' + Math.min(100, ov.pct) + '%"></div><div class="goal" style="left:' + CONFIG.passPct + '%"></div></div>' +
      '<div class="meter-caption"><span>0%</span><span>pass line ' + CONFIG.passPct + "%</span><span>100%</span></div>";
  } else {
    h += '<div class="big-score">Ready?</div><div class="muted">Answer questions to see your readiness score. Passing the real exam requires ' + CONFIG.passPct + "%.</div>";
  }
  h += "</div>";

  // Section cards
  h += '<div class="section-grid">';
  SECTIONS.forEach(function (sec) {
    const st = statsFor(sectionQuestions(sec));
    const sg = strength(st);
    h += '<button class="section-card" data-action="study-section" data-arg="' + esc(sec) + '">' +
      '<div class="sec-name">' + esc(sec) + "</div>" +
      '<div class="sec-sub">' + esc(SECTION_BLURBS[sec]) + "</div>" +
      '<div class="sec-pct">' + (st.answers ? st.pct + "% correct" : "Not started") + ' <span class="badge ' + sg.cls + '">' + sg.label + "</span></div>" +
      '<div class="mini-meter"><div class="fill" style="width:' + st.pct + '%"></div></div>' +
      "</button>";
  });
  h += "</div>";

  h += '<button class="btn primary" data-action="quick10">&#9889; Quick 10 Questions</button>';
  h += '<button class="btn" data-action="mock-intro">&#9201;&#65039; Mock Exam</button>';
  const missCount = missedQuestions().length;
  h += '<button class="btn" data-action="misses">&#128260; Review My Misses' + (missCount ? " (" + missCount + ")" : "") + "</button>";
  h += '<button class="btn ghost" data-action="progress">&#128200; My Progress</button>';
  if (!db.paid) {
    h += '<button class="btn good" data-action="upgrade">&#128275; Unlock Full Bank &ndash; ' + CONFIG.price + "</button>";
  }
  h += '<p class="footnote">Original study material based on the public EPA Section 608 topic outline. Not affiliated with the EPA or any exam provider.</p>';
  return h;
}

/* ---------------------- Study quiz (instant feedback) --------- */

function startStudy(kind, section) {
  let pool, label;
  if (kind === "quick10") {
    pool = shuffle(studyPool(null)).slice(0, 10);
    label = "Quick 10";
  } else if (kind === "misses") {
    pool = shuffle(missedQuestions());
    label = "Review My Misses";
    if (!pool.length) { go("no-misses"); return; }
  } else {
    pool = shuffle(studyPool(section));
    label = section;
  }
  session = { kind: "study", studyKind: kind, section: section || null, label: label, queue: pool.map(makeItem), idx: 0, picked: null, answered: false, correctCount: 0 };
  go("quiz");
}

function renderQuiz() {
  const item = session.queue[session.idx];
  const q = item.q;
  const correctDisplay = item.order.indexOf(q.correct);
  const n = session.queue.length;
  let h = '<div class="topbar">' +
    '<button class="back-btn" data-action="home">&larr; Exit</button>' +
    "<h1>" + esc(session.label) + "</h1>" +
    '<span class="quiz-progress">' + (session.idx + 1) + " / " + n + "</span>" +
    "</div>";

  if (session.studyKind === "section" && !db.paid) {
    const total = sectionQuestions(q.section).length;
    h += '<div class="lock-banner">Studying ' + n + " free questions of " + total + ' in this section. <button data-action="upgrade">Unlock all &rarr;</button></div>';
  }

  h += '<div class="q-topic">' + esc(q.section) + " &middot; " + esc(q.topic) + "</div>";
  h += '<div class="q-text">' + esc(q.q) + "</div>";

  item.order.forEach(function (optIdx, i) {
    let cls = "option", dis = "";
    if (session.answered) {
      dis = "disabled";
      if (i === correctDisplay) cls += " correct";
      else if (i === session.picked) cls += " wrong";
      else cls += " dim";
    }
    h += '<button class="' + cls + '" ' + dis + ' data-action="answer" data-arg="' + i + '">' +
      '<span class="letter">' + LETTERS[i] + "</span><span>" + esc(q.options[optIdx]) + "</span></button>";
  });

  if (session.answered) {
    const right = session.picked === correctDisplay;
    h += '<div class="verdict ' + (right ? "good" : "bad") + '">' + (right ? "&#10004; Correct!" : "&#10008; Not quite &mdash; the answer is " + LETTERS[correctDisplay] + ".") + "</div>";
    h += '<div class="explain">' + esc(q.explain) + "</div>";
    h += '<button class="btn primary" data-action="next">' + (session.idx + 1 >= n ? "Finish Session" : "Next Question &rarr;") + "</button>";
  }
  return h;
}

function answerStudy(i) {
  if (session.answered) return;
  const item = session.queue[session.idx];
  session.picked = i; // display index
  session.answered = true;
  const correct = item.order[i] === item.q.correct;
  if (correct) session.correctCount++;
  recordAnswer(item.q.id, correct);
  render();
}

function nextStudy() {
  if (session.idx + 1 >= session.queue.length) { go("study-done"); return; }
  session.idx++;
  session.picked = null;
  session.answered = false;
  render();
  window.scrollTo(0, 0);
}

function renderStudyDone() {
  const total = session.queue.length;
  const pct = total ? Math.round(100 * session.correctCount / total) : 0;
  let h = topbar("Session Complete", "home");
  h += '<div class="card result-hero">' +
    '<div class="score">' + session.correctCount + "/" + total + "</div>" +
    '<div class="verdict-chip ' + (pct >= CONFIG.passPct ? "pass" : "fail") + '">' + pct + "% correct</div>" +
    '<p class="muted" style="margin-top:12px">' + (pct >= CONFIG.passPct ? "Above the " + CONFIG.passPct + "% pass line. Keep it up." : "The real exam needs " + CONFIG.passPct + "%. Drill your misses and go again.") + "</p>" +
    "</div>";
  if (session.studyKind === "misses" && missedQuestions().length) {
    h += '<button class="btn primary" data-action="misses">Drill Again (' + missedQuestions().length + " left)</button>";
  } else if (session.studyKind === "quick10") {
    h += '<button class="btn primary" data-action="quick10">Another Quick 10</button>';
  } else if (session.studyKind === "section") {
    h += '<button class="btn primary" data-action="study-section" data-arg="' + esc(session.section) + '">Study ' + esc(session.section) + " Again</button>";
  }
  if (missedQuestions().length && session.studyKind !== "misses") {
    h += '<button class="btn" data-action="misses">Review My Misses (' + missedQuestions().length + ")</button>";
  }
  h += '<button class="btn ghost" data-action="home">Home</button>';
  return h;
}

function renderNoMisses() {
  return topbar("Review My Misses", "home") +
    '<div class="card empty-state"><div class="big">&#127881;</div>' +
    "<p><strong>No missed questions.</strong></p>" +
    '<p class="muted">Questions you get wrong land here automatically. Answer one correctly twice in a row and it drops off the list.</p></div>' +
    '<button class="btn primary" data-action="quick10">Quick 10 Questions</button>';
}

/* ------------------------- Mock exam -------------------------- */

function renderMockIntro() {
  const allowed = db.paid || !db.freeMockUsed;
  let h = topbar("Mock Exam", "home");
  h += '<div class="card">' +
    "<p><strong>Just like the real thing.</strong></p>" +
    '<p class="muted" style="margin-top:6px">' + CONFIG.mockQuestions + " random questions from one section &middot; " + CONFIG.mockMinutes + " minute timer &middot; no feedback until the end &middot; pass line " + CONFIG.passPct + "% (" + Math.ceil(CONFIG.mockQuestions * CONFIG.passPct / 100) + "/" + CONFIG.mockQuestions + ").</p></div>";
  if (!allowed) {
    h += '<div class="lock-banner">You\'ve used your free mock exam. Unlock the full bank for unlimited mock exams in every section. <button data-action="upgrade">Unlock &rarr;</button></div>';
  } else if (!db.paid) {
    h += '<div class="lock-banner">Free tier includes <strong>1 mock exam</strong> &mdash; it draws from the full question bank, so it\'s the real experience. Make it count.</div>';
  }
  h += '<p class="muted" style="margin:8px 0">Choose a section:</p>';
  SECTIONS.forEach(function (sec) {
    h += '<button class="btn" data-action="mock-start" data-arg="' + esc(sec) + '" ' + (allowed ? "" : "disabled") + ">" + esc(sec) + "</button>";
  });
  if (!allowed) h += '<button class="btn good" data-action="upgrade">&#128275; Unlock Full Bank &ndash; ' + CONFIG.price + "</button>";
  return h;
}

function startMock(section) {
  if (!db.paid && db.freeMockUsed) { go("upgrade"); return; }
  const pool = shuffle(sectionQuestions(section)).slice(0, CONFIG.mockQuestions);
  if (!db.paid) { db.freeMockUsed = true; saveDB(); }
  session = {
    kind: "mock",
    section: section,
    queue: pool.map(makeItem),
    idx: 0,
    answers: pool.map(function () { return null; }), // display index of the pick, or null
    endsAt: Date.now() + CONFIG.mockMinutes * 60 * 1000,
    timerId: null
  };
  view = "mock";
  render();
  window.scrollTo(0, 0);
  session.timerId = setInterval(tickMock, 500);
}

function tickMock() {
  if (!session || session.kind !== "mock") { return; }
  const left = session.endsAt - Date.now();
  const el = document.getElementById("timer");
  if (el) {
    el.textContent = fmtTime(left);
    el.className = "timer" + (left < 5 * 60 * 1000 ? " low" : "");
  }
  if (left <= 0) submitMock(true);
}

function renderMock() {
  const item = session.queue[session.idx];
  const q = item.q;
  const n = session.queue.length;
  const answeredCount = session.answers.filter(function (a) { return a !== null; }).length;

  let h = '<div class="topbar">' +
    '<button class="back-btn" data-action="mock-quit">&#10005; Quit</button>' +
    "<h1>" + esc(session.section) + " Mock</h1>" +
    '<span class="timer" id="timer">' + fmtTime(session.endsAt - Date.now()) + "</span>" +
    "</div>";

  h += '<div class="dots">';
  session.queue.forEach(function (_, i) {
    let cls = "dot";
    if (session.answers[i] !== null) cls += " answered";
    if (i === session.idx) cls += " current";
    h += '<button class="' + cls + '" data-action="mock-jump" data-arg="' + i + '">' + (i + 1) + "</button>";
  });
  h += "</div>";

  h += '<div class="q-topic">Question ' + (session.idx + 1) + " of " + n + "</div>";
  h += '<div class="q-text">' + esc(q.q) + "</div>";
  item.order.forEach(function (optIdx, i) {
    const picked = session.answers[session.idx] === i;
    h += '<button class="option' + (picked ? " picked" : "") + '" data-action="mock-pick" data-arg="' + i + '">' +
      '<span class="letter">' + LETTERS[i] + "</span><span>" + esc(q.options[optIdx]) + "</span></button>";
  });

  h += '<div class="mock-nav">' +
    '<button class="btn" data-action="mock-prev" ' + (session.idx === 0 ? "disabled" : "") + ">&larr; Prev</button>" +
    '<button class="btn" data-action="mock-next" ' + (session.idx === n - 1 ? "disabled" : "") + ">Next &rarr;</button>" +
    "</div>";
  h += '<button class="btn primary" style="margin-top:10px" data-action="mock-submit">Submit Exam (' + answeredCount + "/" + n + " answered)</button>";
  return h;
}

function submitMock(auto) {
  if (!session || session.kind !== "mock") return;
  if (!auto) {
    const unanswered = session.answers.filter(function (a) { return a === null; }).length;
    if (unanswered > 0 && !confirm(unanswered + " question(s) unanswered — they count as wrong. Submit anyway?")) return;
  }
  clearTimer();
  let score = 0;
  const detail = session.queue.map(function (item, i) {
    const displayPick = session.answers[i];
    const ans = displayPick === null ? null : item.order[displayPick]; // actual option index
    const correct = ans === item.q.correct;
    if (correct) score++;
    recordAnswer(item.q.id, correct); // unanswered counts as a miss, like the real exam
    return { q: item.q, ans: ans, correct: correct };
  });
  lastResults = { section: session.section, score: score, total: session.queue.length, detail: detail, timedOut: !!auto };
  session = null;
  go("results");
}

function renderResults() {
  const r = lastResults;
  if (!r) return renderHome();
  const pct = Math.round(100 * r.score / r.total);
  const passCount = Math.ceil(r.total * CONFIG.passPct / 100);
  const passed = r.score >= passCount;

  let h = topbar(r.section + " Mock Results", "home");
  if (r.timedOut) h += '<div class="lock-banner">&#9201;&#65039; Time expired — the exam was submitted automatically.</div>';
  h += '<div class="card result-hero">' +
    '<div class="score">' + r.score + "/" + r.total + "</div>" +
    '<div class="verdict-chip ' + (passed ? "pass" : "fail") + '">' + (passed ? "PASS" : "NOT YET") + " &middot; " + pct + "%</div>" +
    '<p class="muted" style="margin-top:12px">Passing requires ' + CONFIG.passPct + "% (" + passCount + "/" + r.total + "). " +
    (passed ? "You’d have passed this section today." : "You needed " + (passCount - r.score) + " more. Drill your misses and retake it.") + "</p></div>";

  h += '<button class="btn primary" data-action="retake" data-arg="' + esc(r.section) + '">Retake Mock Exam</button>';
  if (missedQuestions().length) h += '<button class="btn" data-action="misses">Drill My Misses (' + missedQuestions().length + ")</button>";
  h += '<button class="btn ghost" data-action="home">Home</button>';

  h += '<p class="muted" style="margin:16px 0 8px"><strong>Full review</strong> — every question, your answer, and why:</p>';
  r.detail.forEach(function (d, i) {
    h += '<div class="card review-item ' + (d.correct ? "right" : "wrong") + '">' +
      '<div class="rq">' + (i + 1) + ". " + esc(d.q.q) + "</div>";
    if (d.ans === null) {
      h += '<div class="ra user-wrong">Your answer: (left blank)</div>';
    } else if (!d.correct) {
      h += '<div class="ra user-wrong">Your answer: ' + esc(d.q.options[d.ans]) + "</div>";
    }
    h += '<div class="ra the-answer">' + (d.correct ? "&#10004; Your answer: " : "Correct answer: ") + esc(d.q.options[d.q.correct]) + "</div>" +
      '<div class="rex">' + esc(d.q.explain) + "</div></div>";
  });
  return h;
}

/* -------------------------- Progress -------------------------- */

function renderProgress() {
  const ov = overallStats();
  let h = topbar("My Progress", "home");
  h += '<div class="card center">' +
    (ov.answers
      ? '<div class="big-score" style="font-size:2rem;font-weight:800">' + ov.pct + "% overall</div><div class='muted'>Passing requires " + CONFIG.passPct + "%. " + ov.attempted + " of " + ov.total + " questions attempted.</div>"
      : '<div class="muted">Nothing attempted yet — go answer some questions.</div>') +
    "</div>";

  SECTIONS.forEach(function (sec) {
    const qs = sectionQuestions(sec);
    const st = statsFor(qs);
    const sg = strength(st);
    h += '<div class="card">' +
      '<div class="prog-row" style="border-bottom:1px solid var(--line)">' +
      '<span class="t-name"><strong>' + esc(sec) + "</strong></span>" +
      '<span class="t-stat">' + st.attempted + "/" + st.total + " tried &middot; " + (st.answers ? st.pct + "%" : "&mdash;") + "</span>" +
      '<span class="badge ' + sg.cls + '">' + sg.label + "</span></div>";

    // per-topic rows
    const topics = [];
    qs.forEach(function (q) { if (topics.indexOf(q.topic) === -1) topics.push(q.topic); });
    topics.forEach(function (t) {
      const tqs = qs.filter(function (q) { return q.topic === t; });
      const ts = statsFor(tqs);
      const tg = strength(ts);
      h += '<div class="prog-row">' +
        '<span class="t-name">' + esc(t) + "</span>" +
        '<span class="t-stat">' + ts.attempted + "/" + ts.total + " &middot; " + (ts.answers ? ts.pct + "%" : "&mdash;") + "</span>" +
        '<span class="badge ' + tg.cls + '">' + (ts.answers ? tg.label : "&mdash;") + "</span></div>";
    });
    h += "</div>";
  });

  h += '<p class="muted center">Weak: below ' + CONFIG.weakBelow + "% &middot; Moderate: " + CONFIG.weakBelow + "&ndash;" + (CONFIG.strongAt - 1) + "% &middot; Strong: " + CONFIG.strongAt + "%+</p>";
  return h;
}

/* --------------------- Account & Settings --------------------- */

function renderAccount() {
  let h = topbar("Account & Settings", "home");

  // Who is signed in on this device
  h += '<div class="card">' +
    '<p class="muted" style="margin-bottom:10px">Signed in on this device as</p>' +
    '<input type="text" id="acct-name" placeholder="Your name" autocomplete="name" value="' + esc(db.name) + '">' +
    '<input type="email" id="acct-email" placeholder="Email" autocomplete="email" inputmode="email" value="' + esc(db.email) + '">' +
    (accountMsg ? '<p style="color:var(--good);font-size:0.88rem;margin-bottom:10px">' + esc(accountMsg) + "</p>" : "") +
    '<button class="btn" data-action="save-profile">Save Changes</button>' +
    "</div>";

  // Plan
  h += '<div class="card">';
  if (db.paid) {
    h += '<p><span class="badge pro">FULL BANK</span></p>' +
      '<p class="muted" style="margin-top:8px">Everything is unlocked on this device — every question, unlimited mock exams. Forever.</p>';
  } else {
    h += '<p><span class="badge free">FREE TIER</span></p>' +
      '<p class="muted" style="margin:8px 0 12px">50 free questions + 1 mock exam.</p>' +
      '<button class="btn good" data-action="upgrade" style="margin-bottom:0">&#128275; Unlock Full Bank &ndash; ' + CONFIG.price + "</button>";
  }
  h += "</div>";

  // Appearance
  const cur = db.theme || "dark";
  h += '<div class="card"><p style="margin-bottom:10px"><strong>Appearance</strong></p><div class="theme-row">';
  [["dark", "Dark"], ["light", "Light"], ["auto", "Auto"]].forEach(function (t) {
    h += '<button class="btn small' + (cur === t[0] ? " primary" : "") + '" data-action="set-theme" data-arg="' + t[0] + '">' + t[1] + "</button>";
  });
  h += '</div><p class="muted" style="margin-top:10px;font-size:0.8rem">Auto follows your phone\'s dark/light setting.</p></div>';

  // Data & device
  h += '<div class="card"><p style="margin-bottom:8px"><strong>Your data</strong></p>' +
    '<p class="muted" style="font-size:0.85rem;margin-bottom:12px">Progress, misses, and your unlock are saved on this device — not on a server. Clearing the browser\'s data erases them; the unlock code from your Gumroad receipt re-unlocks in seconds.</p>' +
    '<button class="btn" data-action="reset-progress">Reset All Progress</button>' +
    '<button class="btn ghost" data-action="signout">Sign Out</button>' +
    "</div>";
  return h;
}

/* -------------------------- Upgrade --------------------------- */

function renderUpgrade() {
  let h = topbar("Unlock the Full Bank", "home");
  if (db.paid) {
    return h + '<div class="card empty-state"><div class="big">&#127881;</div><p><strong>You have the full bank.</strong></p><p class="muted">Every question, unlimited mock exams. Go pass that exam.</p></div>' +
      '<button class="btn primary" data-action="home">Start Studying</button>';
  }
  const freeCount = QUESTIONS.filter(function (q) { return q.free; }).length;
  h += '<div class="card">' +
    '<div class="perk"><span class="tick">&#10004;</span><span><strong>The full EPA 608 question bank</strong> &mdash; every Core, Type I, II, and III question we publish (free tier: ' + freeCount + ")</span></div>" +
    '<div class="perk"><span class="tick">&#10004;</span><span><strong>Unlimited timed mock exams</strong> in every section, just like the real test</span></div>' +
    '<div class="perk"><span class="tick">&#10004;</span><span><strong>Missed-questions deck</strong> that re-drills what you get wrong until you own it</span></div>' +
    '<div class="perk"><span class="tick">&#10004;</span><span><strong>Per-topic progress tracking</strong> so you study weaknesses, not what you already know</span></div>' +
    '<div class="price-line"><span class="price">' + CONFIG.price + '</span><div class="terms">One-time payment. Yours forever. No subscription.</div></div>' +
    "</div>";
  h += '<button class="btn good" data-action="gumroad">Buy on Gumroad &ndash; ' + CONFIG.price + "</button>";
  h += '<div class="card"><p style="margin-bottom:8px"><strong>Already purchased?</strong> Your unlock code is in your Gumroad receipt.</p>' +
    '<input type="text" id="in-code" placeholder="Unlock code" autocapitalize="characters" autocomplete="off">' +
    (upgradeMsg ? '<p class="muted" style="color:var(--bad);margin-bottom:8px">' + esc(upgradeMsg) + "</p>" : "") +
    '<button class="btn primary" data-action="redeem">Unlock</button></div>';
  h += '<p class="footnote">Payment is handled by Gumroad. After buying, you\'ll get your unlock code by email within a day (usually instantly).</p>';
  return h;
}

function redeemCode() {
  const el = document.getElementById("in-code");
  const code = (el && el.value ? el.value : "").trim().toUpperCase();
  const ok = CONFIG.unlockCodes.some(function (c) { return c.toUpperCase() === code; });
  if (ok) {
    db.paid = true;
    saveDB();
    upgradeMsg = "";
    go("upgrade"); // re-renders as the "you have it" state
  } else {
    upgradeMsg = code ? "That code didn't match. Check your Gumroad receipt and try again." : "Enter the code from your Gumroad receipt.";
    render();
  }
}

/* ========================= ROUTER/RENDER ======================= */

function render() {
  const app = document.getElementById("app");
  let h;
  switch (view) {
    case "welcome": h = renderWelcome(); break;
    case "quiz": h = renderQuiz(); break;
    case "study-done": h = renderStudyDone(); break;
    case "no-misses": h = renderNoMisses(); break;
    case "mock-intro": h = renderMockIntro(); break;
    case "mock": h = renderMock(); break;
    case "results": h = renderResults(); break;
    case "progress": h = renderProgress(); break;
    case "account": h = renderAccount(); break;
    case "upgrade": h = renderUpgrade(); break;
    default: h = renderHome();
  }
  app.innerHTML = h;
}

/* ========================== ACTIONS ============================ */

const actions = {
  "signin": function () {
    const name = (document.getElementById("in-name").value || "").trim();
    const email = (document.getElementById("in-email").value || "").trim();
    if (!email || email.indexOf("@") < 1) {
      alert("Enter your email to save your progress on this device.");
      return;
    }
    db.name = name;
    db.email = email;
    saveDB();
    go("home");
  },
  "home": function () {
    if (session && session.kind === "mock") {
      if (!confirm("Leave the mock exam? Your answers won't be scored.")) return;
      clearTimer();
      session = null;
    }
    session = null;
    go("home");
  },
  "progress": function () { go("progress"); },
  "account": function () { accountMsg = ""; go("account"); },
  "save-profile": function () {
    const name = (document.getElementById("acct-name").value || "").trim();
    const email = (document.getElementById("acct-email").value || "").trim();
    if (!email || email.indexOf("@") < 1) {
      alert("Enter a valid email — it identifies your progress on this device.");
      return;
    }
    db.name = name;
    db.email = email;
    saveDB();
    accountMsg = "Saved.";
    render();
  },
  "set-theme": function (arg) {
    db.theme = (arg === "light" || arg === "auto") ? arg : "dark";
    saveDB();
    applyTheme();
    render();
  },
  "signout": function () {
    if (!confirm("Sign out on this device? Your progress and unlock stay saved here.")) return;
    db.name = "";
    db.email = "";
    saveDB();
    go("welcome");
  },
  "upgrade": function () { upgradeMsg = ""; go("upgrade"); },
  "quick10": function () { startStudy("quick10"); },
  "misses": function () { startStudy("misses"); },
  "study-section": function (arg) { startStudy("section", arg); },
  "answer": function (arg) { answerStudy(parseInt(arg, 10)); },
  "next": function () { nextStudy(); },
  "mock-intro": function () { go("mock-intro"); },
  "mock-start": function (arg) { startMock(arg); },
  "retake": function (arg) {
    if (!db.paid && db.freeMockUsed) { go("upgrade"); return; }
    startMock(arg);
  },
  "mock-pick": function (arg) {
    session.answers[session.idx] = parseInt(arg, 10);
    render();
  },
  "mock-prev": function () { if (session.idx > 0) { session.idx--; render(); window.scrollTo(0, 0); } },
  "mock-next": function () { if (session.idx < session.queue.length - 1) { session.idx++; render(); window.scrollTo(0, 0); } },
  "mock-jump": function (arg) { session.idx = parseInt(arg, 10); render(); window.scrollTo(0, 0); },
  "mock-submit": function () { submitMock(false); },
  "mock-quit": function () {
    if (confirm("Quit the mock exam? Your answers won't be scored.")) {
      clearTimer();
      session = null;
      go("home");
    }
  },
  "gumroad": function () { window.open(CONFIG.gumroadUrl, "_blank", "noopener"); },
  "redeem": function () { redeemCode(); },
  "reset-progress": function () {
    if (confirm("Erase all progress on this device? Your unlock (if purchased) is kept.")) {
      db.progress = {};
      db.freeMockUsed = false;
      saveDB();
      go("account");
    }
  }
};

document.getElementById("app").addEventListener("click", function (e) {
  const el = e.target.closest ? e.target.closest("[data-action]") : null;
  if (!el) return;
  e.preventDefault();
  const fn = actions[el.getAttribute("data-action")];
  if (fn) fn(el.getAttribute("data-arg"));
});

applyTheme();
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
    if (db.theme === "auto") applyTheme();
  });
}

render();

// PWA: installable + works offline (see sw.js). Relative path keeps it
// working under the /tradepass-app/ subpath on GitHub Pages.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(function () { /* offline mode unavailable; app still works */ });
}
