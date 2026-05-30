import { CircleDot, Compass, Orbit, Radio, Sprout, Users } from "lucide-react";

import { navItems } from "@/data/humanForest";

const icons = [Orbit, CircleDot, Users, Sprout, Radio, Compass];

export function SidebarNav() {
  return (
    <aside className="flex min-h-0 flex-col justify-between border-b border-white/10 bg-slate-950/55 p-4 lg:border-b-0 lg:border-r">
      <div>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-200/25 bg-emerald-200/10 text-emerald-100 shadow-[0_0_34px_rgba(16,185,129,0.25)]">
            <Sprout aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Human Forest</p>
            <p className="text-xs text-slate-400">Living attention map</p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="mt-8 grid gap-1">
          {navItems.map((item, index) => {
            const Icon = icons[index] ?? CircleDot;
            const isActive = index === 0;

            return (
              <button
                key={item}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? "border border-emerald-200/20 bg-emerald-200/10 text-emerald-50"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                }`}
                type="button"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {item}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-3">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Field weight
        </p>
        <p className="mt-2 text-sm text-slate-200">
          Closer ties are allowed to take more light.
        </p>
      </div>
    </aside>
  );
}
