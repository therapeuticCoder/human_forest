# Decisions

This file records important project and workflow decisions.

## D-001: Work happens through small agent tasks

Agents should complete one clear task at a time. Larger goals should be split into small backlog items before implementation.

## D-002: Repo-local context is the source of truth

Important project context should live in this repository, not only in chat history, memory, or external task managers.

## D-003: Dependencies require human approval

Agents should ask before adding new packages, services, frameworks, or integrations.

## D-004: This repository is now Human Forest

This repository is the Human Forest prototype, and project documentation should describe the Human Forest product direction rather than inherited project language.

## D-005: Human review is required

Agent changes should be reviewed before they are committed. Git history is the safety rail.

## D-006: Human Forest uses relational-depth language

The product organizes relationships by relational depth. The innermost layer should be called Party, followed by Tribe, Guilds, and Signals.

## D-007: Use React, TypeScript, Vite, Tailwind, and shadcn/ui

Human Forest uses a lightweight front-end stack intended for small, polished, agent-friendly web applications.

## D-008: Prefer simple local front-end apps first

Child projects should avoid auth, databases, analytics, and backend services until there is a clear need.

## D-009: Curator, Timeline, and Galaxy are separate views

Curator, Timeline, and Galaxy should not be treated as side-by-side panes. The active prototype should make Timeline and Curator switchable as separate views. Galaxy may remain in the codebase where reasonable, but it is not the current polish priority.
