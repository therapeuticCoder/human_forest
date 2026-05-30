import { useMemo, useState } from "react";

import { timelinePosts } from "@/data/humanForest";
import type { TimelineFilter } from "@/types/humanForest";

import { TimelineCard } from "./TimelineCard";
import { TimelineTabs } from "./TimelineTabs";

export function TimelinePanel() {
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>("all");

  const visiblePosts = useMemo(() => {
    if (activeFilter === "all") {
      return timelinePosts;
    }

    return timelinePosts.filter((post) => post.layer === activeFilter);
  }, [activeFilter]);

  return (
    <aside className="flex min-h-0 flex-col border-t border-white/10 bg-slate-950/55 p-4 lg:h-screen lg:border-l lg:border-t-0">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/60">
          Timeline
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          Not everything matters the same.
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          The same stream, weighted by closeness, layer, and field condition.
        </p>
      </div>

      <div className="mt-5">
        <TimelineTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <div className="mt-4 grid gap-3 overflow-y-auto pr-1 lg:min-h-0 lg:flex-1">
        {visiblePosts.map((post) => (
          <TimelineCard key={post.id} post={post} />
        ))}
      </div>
    </aside>
  );
}
