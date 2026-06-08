# Spec: Deck Generation By Prompt

Status: active
Owner: repository agents

## Purpose

Enable a human to request a new presentation through a prompt and have an agent
produce a complete Slidev deck using the repository architecture, reusable
components, local media, validation commands, and a clear intake process.

## Requirements

### Requirement: Prompt Intake Gate

The agent SHALL verify that critical deck information exists before scaffolding
or editing a new deck.

#### Scenario: Missing critical information

- GIVEN a prompt without audience, duration, result, required points, or
  constraints
- WHEN the agent prepares to create a new deck
- THEN the agent asks at most three concise grouped questions before
  implementation

#### Scenario: Non-critical information missing

- GIVEN a prompt with enough critical information but no slug or palette
- WHEN the agent prepares the deck brief
- THEN the agent infers a URL-friendly slug and uses `palette-crystal` unless a
  better repo palette is justified
- AND records those assumptions in `decks/<slug>/deck.brief.md`

### Requirement: Deck Brief Source Of Truth

Every new deck SHALL have `decks/<slug>/deck.brief.md` before its production
slides are implemented.

#### Scenario: New deck creation

- GIVEN a user asks for a new deck
- WHEN the agent has enough intake information
- THEN the agent creates or updates `decks/<slug>/deck.brief.md` using
  `docs/deck-brief-template.md`
- AND records prompt, requirements, assumptions, plan, asset policy, validation
  plan, and handoff notes

### Requirement: Spec-Driven Build Flow

The agent SHALL follow Intake -> Spec -> Plan -> Tasks -> Implement -> Validate
-> Handoff for new decks.

#### Scenario: Prompt-to-deck execution

- GIVEN an approved or sufficiently complete brief
- WHEN the agent builds the deck
- THEN it starts from `decks/_template`
- AND maps requirements to slides, components, assets, styles, and validation
  tasks before implementation

### Requirement: Component Reuse

The agent SHALL inspect and prefer the existing component catalog before
creating new visuals.

#### Scenario: Component need exists

- GIVEN a required visual such as a matrix, timeline, mockup, graph, radar,
  media frame, quote, profile, or topology
- WHEN a matching component exists in `docs/component-catalog.md`
- THEN the agent creates a local wrapper if Slidev Markdown needs it
- AND avoids duplicating the shared implementation

### Requirement: Local Asset Sourcing

The agent SHALL store deck-specific media locally and document source/license
notes when assets are sourced from the internet.

#### Scenario: External asset improves the deck

- GIVEN the deck would benefit from icons, editorial images, screenshots, or
  community/event media
- WHEN the agent sources or receives those assets
- THEN it stores them under `decks/<slug>/public/media/`
- AND references them as `media/<file>` in Markdown/props or with
  `import.meta.env.BASE_URL` in Vue

### Requirement: Validation And Handoff

The agent SHALL validate generated decks and report residual gaps.

#### Scenario: Deck implementation complete

- GIVEN a new deck has been implemented
- WHEN the agent finishes the task
- THEN it runs `make check DECK=<slug>` unless blocked
- AND reports commands, results, assumptions, unresolved questions, and key
  files in the final handoff
