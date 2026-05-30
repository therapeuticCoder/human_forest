import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { GuildPlane as GuildPlaneType } from "@/types/humanForest";

type GuildPlaneProps = {
  plane: GuildPlaneType;
};

const toneClasses: Record<GuildPlaneType["tone"], string> = {
  cyan: "border-cyan-200/34 bg-cyan-300/9 text-cyan-100 shadow-[0_0_70px_rgba(34,211,238,0.14)]",
  green:
    "border-emerald-200/32 bg-emerald-300/9 text-emerald-100 shadow-[0_0_76px_rgba(52,211,153,0.15)]",
  violet:
    "border-violet-200/30 bg-violet-300/9 text-violet-100 shadow-[0_0_68px_rgba(167,139,250,0.13)]",
};

const labelPositionClasses: Record<GuildPlaneType["labelPosition"], string> = {
  top: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
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
        "absolute z-10 rounded-full border backdrop-blur-[1px] before:absolute before:inset-3 before:rounded-full before:border before:border-white/8 before:content-['']",
        toneClasses[plane.tone],
      )}
      style={style}
    >
      <div
        className={cn(
          "absolute z-10 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em]",
          labelPositionClasses[plane.labelPosition],
        )}
      >
        {plane.label}
      </div>
    </div>
  );
}
