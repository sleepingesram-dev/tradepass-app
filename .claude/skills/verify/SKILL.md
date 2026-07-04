---
name: verify
description: Build-free recipe to run and end-to-end test the TradePass static web app in headless Chromium.
---

# Verifying TradePass

TradePass is a zero-dependency static web app — no build, no install. Verification is: serve the folder, drive it in Chromium, screenshot.

## Launch

```bash
python3 -m http.server 8765 -d <repo-root> &   # any static server works
```

Playwright (module from npm; browser binary is preinstalled in remote envs at `/opt/pw-browsers/chromium` — launch with `executablePath: '/opt/pw-browsers/chromium'`, never `playwright install`). Use a phone viewport (390×844) — the app is mobile-first.

## Validate the question bank first

```bash
node tools/export-csv.mjs
```

Fails loudly on duplicate IDs, missing options/explanations, bad answers; prints per-section and free-tier counts (free must total 50) and the A–D correct-answer spread.

## Flows worth driving (in order — later ones depend on state from earlier)

1. Welcome → sign in (empty email must alert; valid email lands on Home with FREE TIER badge).
2. Quick 10 → instant feedback (green/red + explanation each answer), summary at end, Home readiness sentence updates.
3. Missed deck: answer wrong to seed it; a question drops off only after 2 consecutive correct answers.
4. Mock exam: free tier gets exactly ONE (gate on the second), 25 questions, 35:00 countdown, no feedback midway, submit warns on unanswered, results vs 70% (18/25) with full review.
5. Upgrade: wrong code rejected; code in `CONFIG.unlockCodes` (case-insensitive) flips to FULL BANK — unlock button disappears, section study serves all questions, mocks unlimited.
6. Reload the page: sign-in, progress, and purchase must survive (localStorage key `tradepass_v1`).

## Gotchas

- Options are displayed in per-serving shuffled order. To answer correctly/incorrectly deterministically from a script, look the question up in the global `QUESTIONS` array by its `.q-text` textContent and match option text, not letter position.
- App state lives in `let session` / `let db` script-scope bindings — reachable from `page.evaluate` (e.g. `session.endsAt = Date.now() + 1000` to test timer expiry without waiting 35 min).
- All navigation is `data-action` attributes; `confirm()`/`alert()` dialogs guard quit/submit/reset — register a Playwright dialog handler or clicks hang.
- A working full-flow script from the first verification: see git history or rebuild from the flows above (~15 assertions, runs in ~20s).
