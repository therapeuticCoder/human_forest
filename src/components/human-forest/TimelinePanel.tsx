import { Map } from "lucide-react";

import { timelinePosts } from "@/data/humanForest";

import { TimelineCard } from "./TimelineCard";

export function TimelinePanel() {
  const podPosts = timelinePosts
    .filter((post) => post.layer === "pod")
    .slice(0, 2);
  const tribePosts = timelinePosts
    .filter((post) => post.layer === "tribe")
    .slice(0, 2);
  const guildPosts = timelinePosts
    .filter((post) => post.layer === "guild")
    .slice(0, 1);
  const signalPosts = timelinePosts
    .filter((post) => post.layer === "signal")
    .slice(0, 3);

  return (
    <aside className="relative flex min-h-0 flex-col overflow-hidden border-t border-white/10 bg-slate-950/55 p-4 lg:h-screen lg:border-l lg:border-t-0">
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

      <div className="mt-5 grid gap-3 overflow-y-auto pb-4 pr-1 lg:min-h-0 lg:flex-1">
        {podPosts.map((post) => (
          <TimelineCard key={post.id} post={post} />
        ))}

        <div className="grid gap-2">
          {[...tribePosts, ...guildPosts].map((post) => (
            <TimelineCard key={post.id} post={post} size="compact" />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {signalPosts.map((post) => (
            <TimelineCard key={post.id} post={post} size="mini" />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end border-t border-white/10 pt-3">
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/25 bg-emerald-200/10 px-3 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.12)] transition hover:bg-white/12"
          type="button"
        >
          <Map aria-hidden="true" className="h-4 w-4" />
          Field Map
        </button>
      </div>
    </aside>
  );
}
