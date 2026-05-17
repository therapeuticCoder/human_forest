import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/layout/EmptyState";
import { PageHeader } from "@/components/layout/PageHeader";

export function App() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Agent-ready React starter"
        title="Calm React Starter"
        description="A clean, domain-neutral starting point for small React applications built with TypeScript, Vite, Tailwind, shadcn/ui, and supervised agentic workflows."
      />

      <Separator />

      <EmptyState
        title="Start with one small feature"
        description="Edit src/app/App.tsx or add a focused backlog task for Codex. Keep the first change small, reviewable, and easy to understand."
        action={<Button>Ready to build</Button>}
      />
    </AppShell>
  );
}
