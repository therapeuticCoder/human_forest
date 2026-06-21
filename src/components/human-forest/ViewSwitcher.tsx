import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HumanForestView = "timeline" | "curator";

type ViewSwitcherProps = {
  activeView: HumanForestView;
  onViewChange: (view: HumanForestView) => void;
};

const viewOptions: { label: string; value: HumanForestView }[] = [
  { label: "Timeline", value: "timeline" },
  { label: "Curator", value: "curator" },
];

export function ViewSwitcher({ activeView, onViewChange }: ViewSwitcherProps) {
  return (
    <div
      aria-label="Human Forest view"
      className="inline-flex rounded-lg border border-white/10 bg-slate-950/70 p-1 shadow-[0_0_30px_rgba(15,23,42,0.28)]"
      role="group"
    >
      {viewOptions.map((option) => {
        const isActive = option.value === activeView;

        return (
          <Button
            key={option.value}
            aria-pressed={isActive}
            className={cn(
              "border-transparent bg-transparent text-slate-300 hover:bg-white/10 hover:text-white",
              isActive &&
                "border-emerald-200/25 bg-emerald-200/10 text-emerald-100 shadow-[0_0_24px_rgba(52,211,153,0.12)]",
            )}
            onClick={() => onViewChange(option.value)}
            size="sm"
            type="button"
            variant="ghost"
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
