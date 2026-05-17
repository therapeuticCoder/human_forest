# Decisions

This file records important project and workflow decisions.

## D-001: Work happens through small agent tasks

Agents should complete one clear task at a time. Larger goals should be split into small backlog items before implementation.

## D-002: Repo-local context is the source of truth

Important project context should live in this repository, not only in chat history, memory, or external task managers.

## D-003: Dependencies require human approval

Agents should ask before adding new packages, services, frameworks, or integrations.

## D-004: This template stays generic

This repository should not include app-specific code, domain-specific content, or assumptions that only apply to one project type.

## D-005: Human review is required

Agent changes should be reviewed before they are committed. Git history is the safety rail.

## D-006: This starter is domain-neutral

This starter should not include therapy tools, clinic content, adulting tools, fantasy UI, or other domain-specific features.

## D-007: Use React, TypeScript, Vite, Tailwind, and shadcn/ui

This starter uses a lightweight front-end stack intended for small, polished, agent-friendly web applications.

## D-008: Prefer simple local front-end apps first

Child projects should avoid auth, databases, analytics, and backend services until there is a clear need.
