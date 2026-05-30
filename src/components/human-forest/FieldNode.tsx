import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";
import type { FieldNode as FieldNodeType } from "@/types/humanForest";

type FieldNodeProps = {
  node: FieldNodeType;
};

const layerClasses: Record<FieldNodeType["layer"], string> = {
  you: "h-24 w-24 border-emerald-200/80 bg-emerald-100/18 text-emerald-50 shadow-[0_0_70px_rgba(94,234,212,0.58)]",
  pod: "h-16 w-16 border-lime-200/70 bg-lime-200/14 text-lime-50 shadow-[0_0_38px_rgba(190,242,100,0.34)]",
  tribe:
    "h-10 w-10 border-sky-200/45 bg-sky-300/10 text-sky-50 shadow-[0_0_24px_rgba(125,211,252,0.2)]",
  signal:
    "h-12 w-12 border-amber-200/75 bg-amber-200/12 text-amber-50 shadow-[0_0_44px_rgba(251,191,36,0.38)]",
};

export function FieldNode({ node }: FieldNodeProps) {
  const style = {
    left: `${node.x}%`,
    top: `${node.y}%`,
  } satisfies CSSProperties;

  return (
    <div
      aria-label={`${node.label}, ${node.layer} node`}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={style}
    >
      <div
        className={cn(
          "grid place-items-center rounded-full border backdrop-blur-md transition-transform duration-300 hover:scale-105",
          layerClasses[node.layer],
        )}
      >
        <span
          className={cn(
            "max-w-[4.75rem] text-center font-medium leading-none",
            node.layer === "you" ? "text-base" : "text-[0.68rem]",
          )}
        >
          {node.label}
        </span>
      </div>
      {node.layer === "signal" ? (
        <span className="absolute left-1/2 top-1/2 -z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/15" />
      ) : null}
    </div>
  );
}
