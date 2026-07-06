# TradePass — EPA 608 Exam Prep

A phone-first practice exam app that helps trade students and apprentices pass their certification tests — starting with the **EPA Section 608** (HVAC refrigerant certification).

Built to the spec in [`trade-exam-app-build-prompt.md`](trade-exam-app-build-prompt.md), as a **zero-dependency static web app**: no framework, no build step, no server, no monthly costs. Host it free on GitHub Pages and it runs on any phone browser.

> **Content rule (non-negotiable):** every question in this repo is ORIGINAL, written from the public EPA 608 topic outline and general trade coursework. Never copy real exam questions or another company's question bank.

## What's in v1

| Feature | Where |
|---|---|
| Question bank by topic (Core, Type I, II, III) | `js/questions-*.js` — 122 original questions, each with a plain-English explanation |
| Instant Feedback study mode | tap a section card or "Quick 10 Questions" |
| Timed Mock Exam (25 questions, 35 min, 70% pass line — real exam format) | "Mock Exam" button |
| Progress tracker (per-topic %, weak/moderate/strong, home-screen readiness score) | "My Progress" |
| Missed Questions Deck (auto-collects wrong answers, drops them after 2 correct in a row) | "Review My Misses" |
| Free/paid gate (50 free questions + 1 free mock; $24 one-time unlocks everything) | "Unlock Full Bank" |
| Account & Settings (edit name/email, plan status, Dark/Light/Auto theme, reset, sign out) | gear icon on Home |

Answer options are re-shuffled every time a question is served, so users learn the material, not the letter positions.

Nothing else is in v1 on purpose. If a feature isn't in section 2 of the spec, it doesn't get built.

## Run it

Open `index.html` in a browser. That's it — no install, no server.

**Deploy free:** push this repo to GitHub → repo Settings → Pages → deploy from the `main` branch. Your app is live at `https://<you>.github.io/tradepass-app/`. Share that link with classmates.

All user data (progress, misses, unlock status) is stored in `localStorage` on the user's device. There is no backend to pay for or break.

**Installable + offline (PWA):** the app ships a manifest and service worker (`manifest.webmanifest`, `sw.js`), so users can install it from the browser — iPhone: Safari Share → *Add to Home Screen*; Android: Chrome menu → *Add to Home screen / Install app*; PC: install icon in Chrome/Edge address bar — and keep studying with no signal. Caching is network-first: online users always get the newest questions; offline users get the last version they loaded. Bump `CACHE` in `sw.js` only if you ever need to force-expire old caches.

## Before you launch — 3 things to change

All three are at the top of [`js/app.js`](js/app.js) in `CONFIG`:

1. **`gumroadUrl`** — create a free Gumroad product ("TradePass EPA 608 Full Bank – $24") and paste your checkout link.
2. **`unlockCodes`** — change `"TRADEPASS-608"` to a code of your own. Put the code in the Gumroad receipt/content so buyers get it instantly. You can add more codes later (e.g., one per month, or one per school for B2B class deals) and retire old ones.
3. **Verify the name** — check that "TradePass" is available before launch (spec section 1).

> **Honest note on the paywall:** with no server, the unlock code is checked in the browser — a determined nerd could bypass it. For a $24 study tool this is the standard v1 trade-off; every no-code tool (including the Glide path in the spec) has an equivalent hole. Upgrade to real license verification (Gumroad License API + a tiny serverless function) once sales justify it.

## Growing the question bank (the actual job)

Target from the spec: **500 questions before charging money**. Current count: 122 (50 free).

1. Write new questions in the matching `js/questions-*.js` file, copying the object format. Keep them **original**, explanation included, 4 options, and vary which option is correct.
2. Run the validator/exporter:

   ```
   node tools/export-csv.mjs
   ```

   It checks every question (unique IDs, 4 options, valid answer, explanation present) and rewrites `data/questions.csv`.
3. Commit. Done — the app picks the new questions up automatically.

## The Google Sheets / Glide path

The spec's original build path (Glide + Google Sheets) is still fully supported: [`data/questions.csv`](data/questions.csv) is the question bank in the exact `Questions`-tab schema from spec section 3 (QuestionID, Section, Topic, QuestionText, OptionA–D, CorrectAnswer, Explanation, Difficulty, FreeTier). Import it into a Google Sheet and follow spec section 5 to build in Glide instead of (or alongside) this web app.

## Repo layout

```
index.html                        app shell
css/app.css                       mobile-first styles
js/questions-core.js              Core question bank (ozone, CAA, 3 R's, safety…)
js/questions-type1.js             Type I (small appliances)
js/questions-type2.js             Type II (high-pressure)
js/questions-type3.js             Type III (low-pressure chillers)
js/data.js                        bank merge + integrity checks
js/app.js                         all app logic + CONFIG (edit before launch)
data/questions.csv                bank export in the spec's Google Sheets schema
tools/export-csv.mjs              validator + CSV exporter
trade-exam-app-build-prompt.md    the master spec — single source of truth
```

## What v1 success looks like (from the spec)

A stranger can sign in, answer free questions with explanations, take one mock exam, see their score against the 70% pass line, hit the paywall, pay $24 on Gumroad, and get full access within a day. Nothing more.

---

*TradePass is independent study material based on the publicly available EPA Section 608 topic outline. Not affiliated with, or endorsed by, the EPA or any exam provider.*
