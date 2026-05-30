import { fieldConnections, fieldNodes, guildPlanes } from "@/data/humanForest";

import { FieldNode } from "./FieldNode";
import { GuildPlane } from "./GuildPlane";

const nodesById = new Map(fieldNodes.map((node) => [node.id, node]));

export function RelationshipField() {
  return (
    <section
      aria-label="Relationship field"
      className="relative h-full min-h-[38rem] overflow-hidden rounded-lg border border-white/10 bg-slate-950/45 p-5 shadow-[inset_0_0_110px_rgba(20,184,166,0.08)] lg:min-h-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.24),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(132,204,22,0.16),transparent_20%),radial-gradient(circle_at_84%_76%,rgba(251,191,36,0.12),transparent_18%)]" />
      <div className="human-forest-stars absolute inset-0 opacity-65" />

      <div className="relative z-30 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-emerald-100/60">
            Living field
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-semibold text-white sm:text-5xl">
            Not everything matters the same.
          </h1>
        </div>
        <div className="hidden max-w-40 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-right text-xs text-slate-300 md:block">
          Close signals glow brighter. Distant signals stay visible.
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="filament-glow">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {fieldConnections.map((connection) => {
          const from = nodesById.get(connection.from);
          const to = nodesById.get(connection.to);

          if (!from || !to) {
            return null;
          }

          return (
            <line
              key={`${connection.from}-${connection.to}`}
              filter="url(#filament-glow)"
              opacity={connection.strength === "primary" ? 0.58 : 0.23}
              stroke={
                connection.strength === "primary"
                  ? "rgb(167 243 208)"
                  : "rgb(125 211 252)"
              }
              strokeDasharray={
                connection.strength === "primary" ? "0" : "1 2.8"
              }
              strokeLinecap="round"
              strokeWidth={connection.strength === "primary" ? 0.32 : 0.18}
              x1={from.x}
              x2={to.x}
              y1={from.y}
              y2={to.y}
            />
          );
        })}
      </svg>

      {guildPlanes.map((plane) => (
        <GuildPlane key={plane.id} plane={plane} />
      ))}

      {fieldNodes.map((node) => (
        <FieldNode key={node.id} node={node} />
      ))}

      <div className="absolute bottom-5 left-5 z-30 grid grid-cols-2 gap-2 text-xs text-slate-300 sm:grid-cols-4">
        <span className="rounded-full border border-lime-200/20 bg-lime-200/8 px-3 py-1">
          Pod: close
        </span>
        <span className="rounded-full border border-sky-200/20 bg-sky-200/8 px-3 py-1">
          Tribe: wider
        </span>
        <span className="rounded-full border border-violet-200/20 bg-violet-200/8 px-3 py-1">
          Guilds: planes
        </span>
        <span className="rounded-full border border-amber-200/20 bg-amber-200/8 px-3 py-1">
          Signals: edge
        </span>
      </div>
    </section>
  );
}
