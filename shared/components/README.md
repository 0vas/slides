# Shared Components

This folder is reserved for Vue components that are reusable across decks.

Current status:

- No component has been promoted here yet.
- Reusable patterns are documented in `docs/component-catalog.md`.
- Existing component implementations live in
  `decks/github-enterprise-platform/components/`.

Promotion rule:

Move a component here when it is useful for more than one deck, accepts data via
props or slots, and does not depend on a single talk's copy or domain.
