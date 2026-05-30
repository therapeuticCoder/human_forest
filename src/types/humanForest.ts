export type FieldLayer = "you" | "pod" | "tribe" | "guild" | "signal";

export type TimelineFilter = "all" | "pod" | "tribe" | "guild" | "signal";

export type FieldNode = {
  id: string;
  label: string;
  layer: Exclude<FieldLayer, "guild">;
  x: number;
  y: number;
};

export type FieldConnection = {
  from: string;
  to: string;
  strength: "primary" | "faint";
};

export type GuildPlane = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  tone: "cyan" | "green" | "violet";
};

export type TimelinePost = {
  id: string;
  layer: Exclude<FieldLayer, "you">;
  source: string;
  time: string;
  title: string;
  body: string;
};
