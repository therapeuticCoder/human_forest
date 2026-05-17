import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppShell } from "@/components/layout/AppShell";
import { EmptyState } from "@/components/layout/EmptyState";

export function App() {
  return (
    <AppShell>
      <section className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          Agent-ready React starter
        </Badge>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            Calm React Starter
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A clean, domain-neutral starting point for small React applications
            built with TypeScript, Vite, Tailwind, shadcn/ui, and supervised
            agentic workflows.
          </p>
        </div>
      </section>

      <Separator />

      <EmptyState
        title="Start with one small feature"
        description="Edit src/app/App.tsx or add a focused backlog task for Codex. Keep the first change small, reviewable, and easy to understand."
        action={<Button>Ready to build</Button>}
      />
    </AppShell>
  );
}
