# Reusable Codex Skills

This folder contains repo-shipped Codex skills for reusable slide-deck work.
They are intentionally generic and do not depend on a personal namespace.

## Skills

- `slide-deck-generator`: create or substantially modify Slidev-style decks
  from prompts using briefs, reusable components, local assets, and validation.
- `slide-visual-qa`: validate slide decks visually with builds, screenshots,
  contrast checks, and dynamic renderer checks.
- `tdd-implementation`: apply criteria-first/TDD discipline to code, docs,
  decks, workflows, and visual changes.

## Install

Copy or sync the folders into your Codex skills directory:

```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R skills/slide-deck-generator \
  skills/slide-visual-qa \
  skills/tdd-implementation \
  "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Restart or reload the Codex session so the skills are discovered.

## Use

Ask naturally. Examples:

- "Create a new deck from this prompt..."
- "Run visual QA on this deck..."
- "Implement this change with TDD..."

The skills complement `agent.md`; they do not replace repository rules.
