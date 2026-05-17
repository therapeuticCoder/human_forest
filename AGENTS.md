# Agent Instructions

This repository is designed for supervised agentic development.

## Core rules

- Work one task at a time.
- Prefer small, reviewable changes.
- Read `README.md`, `BACKLOG.md`, and `DECISIONS.md` before making changes.
- Do not complete unrelated tasks.
- Do not add dependencies without asking.
- Do not delete large sections or restructure the project without asking.
- Preserve existing behavior unless the task explicitly changes it.
- After editing, run the relevant checks listed in `README.md`.
- Summarize what changed and what checks were run.

## Safety

Do not add secrets, credentials, analytics, tracking, network calls, production integrations, or production assets unless explicitly requested.

Do not use real client data, patient data, or other sensitive information in examples, tests, fixtures, screenshots, or documentation.

## Style

Favor clarity over cleverness.

Prefer:

- boring, legible structures
- names that explain intent
- small files with clear responsibilities
- explicit assumptions
- simple language in documentation

Avoid:

- broad rewrites
- unnecessary abstractions
- hidden behavior
- speculative features
- changes outside the requested scope

## Before editing

State:

- the task being completed
- the files likely to be changed
- any assumptions being made

## After editing

State:

- what changed
- what checks were run
- whether any checks failed
- any follow-up work you recommend

## Human authority

The human remains the product owner and reviewer.

If instructions conflict, ask for clarification instead of guessing.

## React project rules

- Prefer accessible HTML and semantic structure.
- Keep components small and named by purpose.
- Use TypeScript types for component props.
- Use shadcn/ui components where they reduce complexity.
- Do not add routing, global state libraries, authentication, analytics, backend calls, or persistence unless requested.
- Do not add dependencies without human approval.
- Run `pnpm check` after code changes when practical.
