# Project Brief

## Project name

Human Forest

## Product concept

Human Forest is a relationship-awareness prototype. It helps a person orient to
the people, groups, communities, and wider-world signals around them without
turning those relationships into a productivity dashboard or social feed.

The product model uses relational depth:

- Party: the innermost group of close people.
- Tribe: nearby relationships and neighborhoods of people.
- Guilds: communities, contexts, and recurring containers.
- Signals: ambient outer-world domains that may matter but should remain lower
  priority.

## Intended users

- The human project owner shaping the prototype.
- Coding agents working under human supervision.
- Future reviewers evaluating the interaction model and product direction.

## Current prototype scope

The current app is a local front-end prototype built with React, TypeScript,
Vite, Tailwind CSS, shadcn/ui, and Vitest.

The active product direction is:

- Curator, Timeline, and Galaxy are separate views.
- Timeline and Curator should be switchable in the app.
- Curator is the primary new view to build next.
- Galaxy is preserved where reasonable, but it should not receive new polish
  unless explicitly requested.
- The innermost relationship layer should be called Party.

## Out of scope for now

This prototype does not include:

- authentication
- analytics or tracking
- backend services
- database persistence
- production integrations
- real client, patient, or sensitive data

## Success criteria

Human Forest is successful at this stage when:

- the prototype clearly separates Timeline and Curator as distinct views
- Curator communicates relational depth from Party through Signals
- Timeline remains usable as a standalone view
- Galaxy code does not distract from the active prototype path
- project docs, backlog, and decisions stay aligned with current product
  direction
- `pnpm check` passes after each completed backlog task when practical
