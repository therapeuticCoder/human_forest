# Human Forest

Human Forest is a local-first React prototype for exploring relationships by
relational depth. It is currently a front-end-only product experiment focused on
three views:

- Curator: a planned layered view for browsing people, communities, and ambient
  signals by closeness.
- Timeline: the currently active chronological view of relationship activity.
- Galaxy: an existing relationship-map experiment that is preserved for now but
  is not the product priority.

The immediate prototype direction is to make the app switchable between Timeline
and Curator. Galaxy code may remain where useful, but new polish should focus on
Curator and Timeline unless the backlog says otherwise.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vitest
- ESLint
- Prettier

## Local development

Install dependencies:

```bash
pnpm install
```

Run the app locally:

```bash
pnpm dev
```

Run the full project check:

```bash
pnpm check
```

Useful focused commands:

```bash
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

## Project structure

```text
src/
  app/
  components/
    human-forest/
    layout/
    ui/
  data/
  lib/
  test/
```

## Agentic workflow

This repo is designed for supervised agentic development. Use one small backlog
task per agent session and read these files before making changes:

- `AGENTS.md`
- `README.md`
- `BACKLOG.md`
- `DECISIONS.md`

The human remains the product owner and reviewer. Keep changes small,
reviewable, and scoped to the active backlog task.
