# MASTER BUILD PROMPT — Trade Certification Exam Prep App

Copy everything below the line into any AI assistant, no-code AI builder (Glide AI, Bubble AI, FlutterFlow AI), or use it yourself as the complete blueprint. Nothing is left out: what the app does, every screen, the data structure, the build order, monetization, and launch.

---

## THE PROMPT

You are helping me build a mobile-first exam preparation app for trade certification tests. I am a trade school student with no coding experience and a $0 budget. Follow this specification exactly.

### 1. PRODUCT DEFINITION

**Name (working):** TradePass (verify availability before launch; alternates: PassTheTrade, CertPrep Trades)

**One-line:** A phone-first practice exam app that helps trade students and apprentices pass their certification tests — starting with the EPA 608 (HVAC refrigerant certification).

**First exam covered:** EPA Section 608 — Core, Type I, Type II, Type III. This is chosen because it is federally required for all HVAC techs, taken by tens of thousands of people per year, and its official topic outline is public.

**Users:** Trade school students, apprentices, and career-changers aged 18–40 who study on their phones in short sessions (5–20 minutes) between classes, on job sites, and in trucks.

**Core promise:** "Answer enough of these questions and you will walk into the real exam having already seen every concept it can throw at you."

### 2. COMPLETE FEATURE SPECIFICATION

The MVP has exactly these features. Do not add anything else in version 1.

**Feature 1 — Question Bank by Topic**
- Questions organized into the official EPA 608 outline categories: Core (ozone depletion, Clean Air Act, safety, recovery basics), Type I (small appliances), Type II (high-pressure systems), Type III (low-pressure systems).
- Each question is multiple choice with exactly 4 answer options (A–D), one correct.
- Every question includes a plain-English explanation shown after answering — explaining WHY the right answer is right and why the tempting wrong answer is wrong.
- User taps a topic → gets served questions from that topic in random order.

**Feature 2 — Instant Feedback Mode (default study mode)**
- User answers a question → immediately sees correct/incorrect, the explanation, then a "Next Question" button.
- Green highlight on correct answer, red on the user's wrong pick.

**Feature 3 — Timed Mock Exam Mode**
- Simulates the real test: 25 questions per section (matching the real EPA 608 format), pulled randomly, no explanations until the end.
- Countdown timer visible (set 35 minutes per 25-question section).
- At the end: score, pass/fail versus the real 70% (18/25) passing threshold, and a full review list of every question with the user's answer, correct answer, and explanation.

**Feature 4 — Progress Tracker**
- Per topic: questions attempted, % correct, a simple weak/moderate/strong label (below 60% = weak, 60–79% = moderate, 80%+ = strong).
- One home-screen readiness indicator: "You're scoring X% overall. Passing requires 70%."

**Feature 5 — Missed Questions Deck**
- Every question the user gets wrong is automatically saved to a "Review My Misses" list they can re-drill until answered correctly twice in a row, at which point it drops off the list.

**Feature 6 — Free vs. Paid Gate**
- Free tier: 50 questions (mixed topics) + 1 mock exam. Enough to prove value.
- Paid tier ($24 one-time per exam pack): the full 500-question bank, unlimited mock exams, missed-questions deck, progress tracking.

**Explicitly NOT in v1:** accounts with social features, forums, video lessons, AI tutoring, flashcards, multiple exams, streaks/gamification, push notifications. These are v2+ only if v1 sells.

### 3. DATA STRUCTURE (Google Sheets — this IS the backend)

Create one Google Sheet with these tabs:

**Tab: Questions**
| Column | Content |
|---|---|
| QuestionID | Q0001, Q0002, ... |
| Section | Core / Type I / Type II / Type III |
| Topic | e.g., "Recovery Requirements", "Safety", "Leak Repair" |
| QuestionText | The question |
| OptionA / OptionB / OptionC / OptionD | The four choices |
| CorrectAnswer | A, B, C, or D |
| Explanation | 2–4 sentence plain-English explanation |
| Difficulty | Easy / Medium / Hard |
| FreeTier | TRUE for the 50 free questions, FALSE otherwise |

**Tab: UserProgress** (app-managed)
| Column | Content |
|---|---|
| UserEmail | identifier |
| QuestionID | which question |
| LastResult | Correct / Incorrect |
| TimesCorrect / TimesIncorrect | counters |
| InMissedDeck | TRUE/FALSE |

**Tab: Users**
| Column | Content |
|---|---|
| Email | sign-in identifier |
| PaidStatus | FREE / PAID |
| PurchaseDate | date |

**Content rule (legal, non-negotiable):** Every question must be ORIGINAL, written from public exam topic outlines, your textbook concepts, and your coursework. Never copy real exam questions or another company's question bank — that is copyright infringement and gets the app taken down.

### 4. SCREENS (exact list)

1. **Welcome/Sign-in** — email sign-in (Glide handles this natively), one-line pitch, "Start Studying Free" button.
2. **Home** — readiness score, four section cards (Core, I, II, III) each showing progress %, buttons: "Quick 10 Questions", "Mock Exam", "Review My Misses", "Unlock Full Bank – $24".
3. **Quiz Screen** — question text, 4 tappable options, then feedback state (highlighted answer + explanation + Next).
4. **Mock Exam Screen** — same as quiz but with timer, no feedback until the end.
5. **Results Screen** — score, pass/fail vs 70%, list of missed questions with explanations, "Retake" and "Drill My Misses" buttons.
6. **Progress Screen** — per-topic strength labels and percentages.
7. **Upgrade Screen** — what the paid tier includes, $24 payment button, "one-time payment, yours forever" copy.

### 5. BUILD PATH (exact order, $0 budget)

**Step 1 — Content first (Week 1–2, ongoing).** Set up the Google Sheet. Write 20–30 original questions per study session from your own coursework. Target: 100 questions before touching any app builder; 500 before charging money.

**Step 2 — Build in Glide (glideapps.com, free plan).**
- Sign up free → New App → connect your Google Sheet.
- Glide auto-generates screens from tabs; configure the 7 screens above using Glide's list, detail, and button components.
- Use Glide's "choice" component for the A–D options and visibility conditions to show/hide the explanation after an answer is logged.
- Use a rollup/relation from UserProgress to compute per-topic % correct.
- Timer for mock exams: Glide has limited native timers — acceptable v1 workaround is displaying a start time and instructing "give yourself 35 minutes," or use Glide's math columns with a start-timestamp. Do not let this block launch.
- Gate paid content: set visibility conditions so questions with FreeTier = FALSE only show when the signed-in user's PaidStatus = PAID.

**Step 3 — Payments (free to set up).**
- Create a Gumroad product: "TradePass EPA 608 Full Bank – $24."
- The Upgrade screen's button links to the Gumroad checkout.
- On each sale, Gumroad emails you → you flip that user's PaidStatus to PAID in the sheet (manual for the first sales; automate later with Zapier's free tier: Gumroad sale → update Google Sheet row).
- Costs: $0 upfront. Gumroad takes ~10% + processing per sale. Acceptable until volume justifies Stripe.

**Step 4 — Test with real users (Week 3–4).** Put the free tier in front of 10 classmates. Watch them use it in person. Fix what confuses them. Ask one question: "Would you pay $24 for the full bank before your exam?" Collect the objections.

**Step 5 — Launch loop (Week 4 onward, this is the actual job).**
- Post 1 short video daily (TikTok/YouTube Shorts/Reels): trade school life, "EPA 608 questions everyone gets wrong," exam-day tips. Every video points to the free app.
- Free lead magnet: "10 Hardest EPA 608 Questions" as a free download to collect emails.
- Ask every instructor at your school to look at it. One instructor recommending it to a class = 20 users at once. A school buying class access = your first B2B deal (offer 20 seats for $300).

**Kill/fix checkpoint:** If 2 weeks of daily content can't get 50 people to grab the free tier, stop adding questions and fix distribution first.

### 6. MONETIZATION MATH

- Price: $24 one-time per exam pack. (One-time beats subscription here: people study for ~6 weeks and leave.)
- Goal: $3,000/month ≈ 125 sales/month ≈ 4/day, against a national market of tens of thousands of monthly exam takers.
- Expansion path once EPA 608 sells: add exam packs (OSHA 10/30 prep, state HVAC contractor exams, NATE, electrician journeyman prep) — same app, same sheet structure, new tabs. Each pack is a new $24 product with zero new infrastructure.

### 7. SUCCESS CRITERIA FOR V1

The app is done and launchable when: a stranger can sign in, answer free questions with explanations, take one mock exam, see their score against the 70% pass line, hit a paywall, pay $24 on Gumroad, and get full access within a day. Nothing more.

---

## HOW TO USE THIS PROMPT

- Paste sections 1–4 into Glide's AI app generator or give them to any AI assistant and say: "Build this in Glide, walk me through it step by step, one screen at a time."
- When stuck on any single feature, paste just that feature's spec and ask: "Exact Glide steps for this."
- Keep this file as the single source of truth. If a feature isn't in section 2, it doesn't get built in v1.
