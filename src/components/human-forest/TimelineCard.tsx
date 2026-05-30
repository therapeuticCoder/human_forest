import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TimelinePost } from "@/types/humanForest";

type TimelineCardProps = {
  post: TimelinePost;
};

const cardClasses: Record<TimelinePost["layer"], string> = {
  pod: "border-lime-200/24 bg-lime-200/[0.075] shadow-[0_0_36px_rgba(190,242,100,0.08)]",
  tribe: "border-sky-200/18 bg-sky-200/[0.055]",
  guild:
    "border-violet-200/20 bg-violet-200/[0.06] shadow-[0_0_32px_rgba(167,139,250,0.07)]",
  signal:
    "border-amber-200/25 bg-amber-200/[0.07] shadow-[0_0_36px_rgba(251,191,36,0.08)]",
};

const badgeClasses: Record<TimelinePost["layer"], string> = {
  pod: "border-lime-200/25 bg-lime-200/10 text-lime-100",
  tribe: "border-sky-200/25 bg-sky-200/10 text-sky-100",
  guild: "border-violet-200/25 bg-violet-200/10 text-violet-100",
  signal: "border-amber-200/25 bg-amber-200/10 text-amber-100",
};

export function TimelineCard({ post }: TimelineCardProps) {
  return (
    <article className={cn("rounded-lg border p-4", cardClasses[post.layer])}>
      <div className="flex items-center justify-between gap-3">
        <Badge
          className={cn("capitalize", badgeClasses[post.layer])}
          variant="outline"
        >
          {post.layer === "guild" ? "Guilds" : post.layer}
        </Badge>
        <span className="text-xs text-slate-500">{post.time}</span>
      </div>
      <div className="mt-3">
        <p className="text-xs text-slate-400">{post.source}</p>
        <h2 className="mt-1 text-sm font-semibold text-slate-50">
          {post.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{post.body}</p>
      </div>
    </article>
  );
}
