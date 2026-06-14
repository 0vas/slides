---
name: tdd-implementation
description: Implement code, documentation, deck, or workflow changes with a test-first or criteria-first process. Use when an AI agent is asked to implement, fix, refactor, build, add a feature, create a deck, update docs, change CI/deploy behavior, or make any non-trivial repository change that should define quality criteria before editing and validate them after execution.
---

# TDD Implementation

## Principle

Use test-driven development broadly: define expected behavior and quality gates before changing the system, make the smallest useful change, then prove the criteria are satisfied. For visual/docs/deck work where automated tests may not exist, use criteria-first validation with builds, screenshots, lint checks, link checks, or manual inspection evidence.

## Workflow

1. Understand the request and inspect the local context.
2. Write acceptance criteria before editing. Keep them concrete and verifiable.
3. Identify the validation surface:
   - Unit/integration tests for code behavior.
   - Build/type/lint checks for compile and contract safety.
   - Screenshots/browser checks for visual work.
   - Link/render/export checks for docs and decks.
   - CI/workflow dry runs or syntax checks for automation.
4. Create or update a failing/targeted test first when the codebase has a suitable test harness. If no automated harness exists, record the command or inspection that will fail before the fix or directly validate the changed behavior after.
5. Implement the smallest scoped change that satisfies the criteria.
6. Refactor only inside the touched scope and only when it improves clarity or removes real duplication.
7. Run all selected validations. Add broader checks when the change touches shared behavior, public interfaces, deployment, or reusable components.
8. If validation fails, fix and rerun until the criteria pass or a genuine blocker remains.
9. Final response must include the criteria covered, commands/checks run, failures fixed, and any unverified criterion.

## Acceptance Criteria Shape

Use this compact form in working notes:

- Behavior: what must change for the user.
- Regression: what must remain unchanged.
- Quality: readability, maintainability, accessibility, performance, or visual expectations.
- Validation: exact tests, commands, screenshots, or inspections that will prove it.

## Guardrails

- Do not invent heavyweight test infrastructure for tiny changes.
- Do not skip validation because the change is "only docs" or "only slides"; use an appropriate check.
- Do not mark work complete when acceptance criteria are untested unless you clearly report the gap.
- Prefer existing test patterns and repo commands over new tooling.
