import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { GuildPlane as GuildPlaneType } from "@/types/humanForest";

type GuildPlaneProps = {
  plane: GuildPlaneType;
};

const toneClasses: Record<GuildPlaneType["tone"], string> = {
  cyan: "border-cyan-200/28 bg-cyan-300/7 text-cyan-100 shadow-[0_0_60px_rgba(34,211,238,0.12)]",
  green:
    "border-emerald-200/25 bg-emerald-300/7 text-emerald-100 shadow-[0_0_64px_rgba(52,211,153,0.13)]",
  violet:
    "border-violet-200/22 bg-violet-300/7 text-violet-100 shadow-[0_0_58px_rgba(167,139,250,0.11)]",
};

export function GuildPlane({ plane }: GuildPlaneProps) {
  const style = {
    left: `${plane.x}%`,
    top: `${plane.y}%`,
    width: `${plane.width}%`,
    height: `${plane.height}%`,
    transform: `translate(-50%, -50%) rotate(${plane.rotation}deg)`,
  } satisfies CSSProperties;

  return (
    <div
      className={cn(
        "absolute z-10 rounded-full border backdrop-blur-[1px]",
        toneClasses[plane.tone],
      )}
      style={style}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em]">
        {plane.label}
      </div>
    </div>
  );
}
