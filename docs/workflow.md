# Workflow

This repository uses a supervised human-agent workflow.

## Standard agent loop

1. Human selects one task from `BACKLOG.md`.
2. Human creates a Git checkpoint.
3. Agent reads the relevant repo context.
4. Agent completes only the selected task.
5. Agent runs relevant checks.
6. Human reviews the diff.
7. Human commits the change or asks for revision.

## Recommended checkpoint command

If the shell helper exists:

```bash
checkpoint "before agent task T-XXX"
```

Otherwise:

```bash
git add .
git commit -m "before agent task T-XXX"
```

## Prompt pattern

You are working in this repo.

Please complete task T-XXX from `BACKLOG.md`.

Follow `AGENTS.md`.
Keep the change small and reviewable.
Do not complete any other tasks.
Run the relevant checks when finished.

## Task sizing

Good agent tasks are:

small
specific
observable
easy to review
tied to acceptance criteria

Avoid asking an agent to complete vague or sprawling goals in one pass.

## Review checklist

Before committing agent work, check:

Did the agent complete the requested task?
Did the agent avoid unrelated changes?
Did the agent preserve the project style?
Did the agent run or explain relevant checks?
Is the diff small enough to understand?
