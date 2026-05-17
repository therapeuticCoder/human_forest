# Calm React Starter

A clean, domain-neutral React starter for small, agent-friendly web applications.

Built with:

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Vitest
- ESLint
- Prettier

## Purpose

This starter is designed for projects that should be easy for both humans and coding agents to understand, modify, test, and extend.

It should stay generic. Do not add therapy-specific, business-specific, or app-specific features to this repository.

## Getting started

Install dependencies:

```bash
pnpm install
pnpm dev
pnpm check
```

## Project structure

src/
app/
App.tsx
components/
layout/
ui/
lib/
test/

## Agentic workflow

This repo includes the standard agent-ready files:

AGENTS.md
BACKLOG.md
DECISIONS.md
CHANGELOG.md
docs/project-brief.md
docs/workflow.md

Use one small backlog task per agent session.

## Creating a new project from this starter

Copy or clone this starter into a new project folder.

Then update:

README.md
docs/project-brief.md
package name in package.json
project-specific tasks in BACKLOG.md
project-specific decisions in DECISIONS.md

Keep this starter clean and reusable.
