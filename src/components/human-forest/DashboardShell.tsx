import { RelationshipField } from "./RelationshipField";
import { TimelinePanel } from "./TimelinePanel";

export function DashboardShell() {
  return (
    <main className="min-h-screen bg-[#05070d] text-slate-100 lg:h-screen lg:overflow-hidden">
      <div className="grid min-h-screen grid-rows-[minmax(38rem,1fr)_auto] lg:h-screen lg:grid-cols-[minmax(0,3fr)_minmax(22rem,2fr)] lg:grid-rows-1">
        <div className="min-h-[38rem] p-3 sm:p-5 lg:h-screen lg:min-h-0">
          <RelationshipField />
        </div>
        <TimelinePanel />
      </div>
    </main>
  );
}
