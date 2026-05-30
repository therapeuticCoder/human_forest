import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type {
  HumanForestActivity,
  HumanForestActor,
  HumanForestLayer,
} from "@/types/humanForest";

type TimelineLayer = Exclude<HumanForestLayer, "self">;

type TimelineCardProps = {
  activity: HumanForestActivity;
  actor: HumanForestActor;
  time: string;
  size?: "full" | "compact" | "mini";
};

const cardClasses: Record<TimelineLayer, string> = {
  pod: "border-amber-200/28 bg-amber-200/[0.085] shadow-[0_0_38px_rgba(251,191,36,0.12)]",
  tribe: "border-sky-200/18 bg-sky-200/[0.052]",
  guild:
    "border-violet-200/24 bg-violet-200/[0.065] shadow-[0_0_32px_rgba(167,139,250,0.08)]",
  signal: "border-teal-200/14 bg-teal-200/[0.035] text-slate-400 opacity-85",
};

const badgeClasses: Record<TimelineLayer, string> = {
  pod: "border-amber-200/30 bg-amber-200/12 text-amber-100",
  tribe: "border-sky-200/25 bg-sky-200/10 text-sky-100",
  guild: "border-violet-200/25 bg-violet-200/10 text-violet-100",
  signal: "border-teal-200/18 bg-teal-200/6 text-teal-100/70",
};

function getTimelineLayer(actor: HumanForestActor): TimelineLayer {
  return actor.layer === "self" ? "pod" : actor.layer;
}

export function TimelineCard({
  activity,
  actor,
  time,
  size = "full",
}: TimelineCardProps) {
  const layer = getTimelineLayer(actor);

  return (
    <article
      className={cn(
        "rounded-lg border",
        size === "full" && "p-4",
        size === "compact" && "p-3",
        size === "mini" && "p-2.5",
        cardClasses[layer],
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge
          className={cn(
            "capitalize",
            size === "mini" && "px-1.5 py-0 text-[0.58rem]",
            badgeClasses[layer],
          )}
          variant="outline"
        >
          {layer === "guild" ? "Guilds" : layer}
        </Badge>
        <span className="text-xs text-slate-500">{time}</span>
      </div>
      <div className={cn(size === "full" ? "mt-3" : "mt-2")}>
        <p className="truncate text-xs text-slate-400">{actor.displayName}</p>
        <h2
          className={cn(
            "mt-1 font-semibold text-slate-50",
            layer === "guild" && "uppercase tracking-[0.12em]",
            layer === "signal" && "text-slate-300/80",
            size === "mini" ? "text-xs leading-4" : "text-sm",
          )}
        >
          {activity.title}
        </h2>
        {size === "full" ? (
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {activity.content}
          </p>
        ) : null}
      </div>
    </article>
  );
}
