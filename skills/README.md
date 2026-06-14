# Reusable Agent Skills

This folder contains repo-shipped Markdown workflows for reusable slide-deck
work. They are intentionally generic: the canonical file for each workflow is
`SKILL.md`, with no required vendor-specific metadata.

## Skills

- `slide-deck-generator`: create or substantially modify Slidev-style decks
  from prompts using briefs, reusable components, local assets, and validation.
- `slide-visual-qa`: validate slide decks visually with builds, screenshots,
  contrast checks, and dynamic renderer checks.
- `tdd-implementation`: apply criteria-first/TDD discipline to code, docs,
  decks, workflows, and visual changes.

## Install

If your AI coding tool supports installable skills or reusable workflow
folders, copy or sync these folders into that tool's configured skills
directory. For tools without skill discovery, ask the agent to read the matching
`SKILL.md` directly.

Example local install:

```bash
export AGENT_SKILLS_DIR="/path/to/your/agent/skills"
mkdir -p "$AGENT_SKILLS_DIR"
cp -R skills/slide-deck-generator \
  skills/slide-visual-qa \
  skills/tdd-implementation \
  "$AGENT_SKILLS_DIR/"
```

Restart or reload the agent session so the skills are discovered.

## Tool Adapters

The repo includes thin adapters for common agents:

- `AGENTS.md` points agents that support the AGENTS convention to `agent.md`.
- `CLAUDE.md` points Claude Code to `agent.md` and these skills.
- `.github/copilot-instructions.md` points GitHub Copilot to `agent.md` and
  these skills.

These adapters are intentionally small. Update `agent.md` and `skills/` as the
source of truth.

## Use

Ask naturally. Examples:

- "Create a new deck from this prompt..."
- "Run visual QA on this deck..."
- "Implement this change with TDD..."

The skills complement `agent.md`; they do not replace repository rules.
