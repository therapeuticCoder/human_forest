import type { TimelineFilter } from "@/types/humanForest";

type TimelineTabsProps = {
  activeFilter: TimelineFilter;
  onFilterChange: (filter: TimelineFilter) => void;
};

const filters: { label: string; value: TimelineFilter }[] = [
  { label: "All", value: "all" },
  { label: "Pod", value: "pod" },
  { label: "Tribe", value: "tribe" },
  { label: "Guilds", value: "guild" },
  { label: "Signals", value: "signal" },
];

export function TimelineTabs({
  activeFilter,
  onFilterChange,
}: TimelineTabsProps) {
  return (
    <div
      aria-label="Timeline filters"
      className="grid grid-cols-5 gap-1 rounded-lg border border-white/10 bg-slate-950/45 p-1"
      role="tablist"
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            aria-selected={isActive}
            className={`rounded-md px-2 py-2 text-xs font-medium transition ${
              isActive
                ? "bg-white/12 text-white shadow-[0_0_24px_rgba(94,234,212,0.12)]"
                : "text-slate-400 hover:bg-white/6 hover:text-slate-100"
            }`}
            onClick={() => onFilterChange(filter.value)}
            role="tab"
            type="button"
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
