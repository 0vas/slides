# Deck Generation Workflow

This workflow adapts a lightweight Spec Kit-style model to the `slides-builder`
agent role. The goal is for a user to provide a prompt and receive a clean,
complete, validated deck without relying on chat memory.

## Principles

- Build from a specification, not loose intuition.
- Use `decks/<slug>/deck.brief.md` as the source of truth for every new deck.
- Ask when critical information is missing.
- Record assumptions in the brief.
- Store deck-owned media locally under `decks/<slug>/public/media/`.
- Follow `agent.md`, `docs/slide-guidelines.md`,
  `docs/component-catalog.md`, and `docs/style-catalog.md`.
- Use repo-shipped skills from `.agents/skills/` when available.

## Adopted Pattern

The decision is recorded in
`docs/adr/0001-spec-kit-lightweight-deck-generation.md`.

```text
Intake -> Brief -> Plan -> Tasks -> Implement -> Validate -> Handoff
```

The repository does not maintain a separate OpenSpec-style change tree for
normal deck creation. A local `deck.brief.md` is enough for this use case.

## Flow

1. **Intake**
   Read the prompt and complete the required fields. Ask before creating files
   if critical information is missing.

2. **Brief**
   Create `decks/<slug>/deck.brief.md` from
   `docs/deck-brief-template.md`. Record prompt, requirements, acceptance
   criteria, constraints, assets, assumptions, and open questions.

3. **Plan**
   Define narrative, approximate slide count, background mode, palette,
   components, asset strategy, and validation surface.

4. **Tasks**
   Break the plan into concrete tasks: scaffold, content, components, media,
   metadata, styles, validation, and documentation.

5. **Implement**
   Copy or adapt `decks/_template`, reuse existing components, and create local
   components only when the catalog does not cover the need.

6. **Validate**
   Run `make check DECK=<slug>`. For visual changes, inspect the cover, a dense
   slide, a media/mockup/chart slide, and navigation.

7. **Handoff**
   Summarize changes, commands run, assumptions, pending work, and key paths.

## Required Intake

| Field | Critical | How To Resolve |
| --- | --- | --- |
| Topic or title | Yes | Ask if missing. |
| Audience | Yes | Ask if missing. |
| Audience level | Yes | Ask, or infer only if obvious. |
| Duration | Yes | Ask if missing. |
| Desired outcome | Yes | Ask what the audience should understand or do. |
| Required points | Yes | Ask for mandatory topics or permission to propose them. |
| Tone and context | Yes | Ask whether it is technical, executive, workshop, keynote, community, etc. |
| Constraints | Yes | Ask about internet, sources, brand, event, projector, language, and format. |
| Assets available | No | Infer `none` if not mentioned and record the assumption. |
| Suggested asset policy | No | Default to SVG Repo and Pexels/similar when useful. |
| Speaker/profile | No | Default to `data/speaker/` when speaker or closing slides are needed. |
| Deliverables | No | Default to static HTML and local build. |
| Slug | No | Infer URL-friendly slug from title. |
| Background mode | Yes | Ask for light, dark, or black/keynote; infer light only if the user allows style decisions. |
| Palette | Yes | Choose from `docs/style-catalog.md` based on background mode. |

Ask at most three concise grouped questions when critical fields are missing.

## Acceptance Criteria

A generated deck satisfies this workflow when:

- it has `deck.brief.md` with requirements and assumptions;
- it starts from `decks/_template`;
- deck media lives in `public/media/`;
- it reuses the catalog before creating new components;
- it includes enough frontmatter for the home page;
- it passes `make check DECK=<slug>`;
- essential rendering does not depend on the internet;
- it records background mode and palette;
- inferred information and open gaps are documented.
