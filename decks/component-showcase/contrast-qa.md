# Shared palette contrast — 2026-09-13

The reported EnterpriseTopology slide inherited dark Crystal text over fixed
dark cards. The same surface mismatch affected other shared catalog components.

Acceptance criteria:

- Shared panels and nested surfaces follow their deck palette; text remains
  readable on light and dark decks. Keep the existing layouts and motion.
- Representative body copy reaches at least 4.5:1 against both surface gradient
  stops in all eight palettes (`npm run test:contrast`).
- Keep renderer canvases light when Mermaid/ECharts use fixed dark text.
- Capture and inspect all 51 showcase slides at 1440x900, plus click states on
  the visual index and usage slides; check representative light/dark deck slides.
- Run `make check DECK=component-showcase` and `SITE_BASE_PATH=/ make build-all`.
- Verify the imported F13 HTML still matches its recorded SHA-256.

Regression evidence: the browser-based contrast test failed before the fix
(some text/surface pairs were close to 1:1) and passes after using palette
surfaces. Local visual evidence lives under ignored `tmp/contrast-qa/`.

Validation passed: all 51 showcase slides, all nine index/usage click states,
seven shared-component slides in the dark GitHub deck, and cover/profile/content
samples from both other talks were captured and inspected. The 3D canvas renders
nonblank. `make check DECK=component-showcase` and the five-deck production build
pass, including 72 text/surface samples across eight palettes. F13's original
HTML checksum remains unchanged. Chromium reported only its environment's
unsupported wake-lock request during the showcase capture.
