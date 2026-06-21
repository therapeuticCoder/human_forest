import { Map as MapIcon } from "lucide-react";

import {
  activityActors,
  humanForestActivities,
  mockNowIso,
} from "@/data/humanForestMockData";
import type { HumanForestActivity } from "@/types/humanForest";

import { TimelineCard } from "./TimelineCard";

const actorsById = new Map(activityActors.map((actor) => [actor.id, actor]));

function getActivityLayer(activity: HumanForestActivity) {
  return actorsById.get(activity.actorId)?.layer;
}

function formatActivityTime(publishedAt: string) {
  const now = new Date(mockNowIso).getTime();
  const published = new Date(publishedAt).getTime();
  const minutesAgo = Math.max(0, Math.round((now - published) / 60000));

  if (minutesAgo < 1) {
    return "Now";
  }

  if (minutesAgo < 60) {
    return `${minutesAgo}m`;
  }

  if (minutesAgo < 24 * 60) {
    return `${Math.round(minutesAgo / 60)}h`;
  }

  if (minutesAgo < 48 * 60) {
    return "Yesterday";
  }

  return `${Math.round(minutesAgo / (24 * 60))}d`;
}

export function TimelinePanel() {
  const partyActivities = humanForestActivities
    .filter((activity) => getActivityLayer(activity) === "party")
    .slice(0, 2);
  const tribeActivities = humanForestActivities
    .filter((activity) => getActivityLayer(activity) === "tribe")
    .slice(0, 2);
  const guildActivities = humanForestActivities
    .filter((activity) => getActivityLayer(activity) === "guild")
    .slice(0, 1);
  const signalActivities = humanForestActivities
    .filter((activity) => getActivityLayer(activity) === "signal")
    .slice(0, 3);

  return (
    <aside className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950/55 p-4 pt-20">
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
        {partyActivities.map((activity) => (
          <TimelineCard
            key={activity.id}
            activity={activity}
            actor={actorsById.get(activity.actorId)!}
            time={formatActivityTime(activity.publishedAt)}
          />
        ))}

        <div className="grid gap-2">
          {[...tribeActivities, ...guildActivities].map((activity) => (
            <TimelineCard
              key={activity.id}
              activity={activity}
              actor={actorsById.get(activity.actorId)!}
              size="compact"
              time={formatActivityTime(activity.publishedAt)}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {signalActivities.map((activity) => (
            <TimelineCard
              key={activity.id}
              activity={activity}
              actor={actorsById.get(activity.actorId)!}
              size="mini"
              time={formatActivityTime(activity.publishedAt)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end border-t border-white/10 pt-3">
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/25 bg-emerald-200/10 px-3 py-2 text-sm font-medium text-emerald-100 shadow-[0_0_30px_rgba(52,211,153,0.12)] transition hover:bg-white/12"
          type="button"
        >
          <MapIcon aria-hidden="true" className="h-4 w-4" />
          Field Map
        </button>
      </div>
    </aside>
  );
}
