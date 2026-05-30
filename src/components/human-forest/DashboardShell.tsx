import { RelationshipField } from "./RelationshipField";
import { SidebarNav } from "./SidebarNav";
import { TimelinePanel } from "./TimelinePanel";

export function DashboardShell() {
  return (
    <main className="min-h-screen bg-[#05070d] text-slate-100 lg:h-screen lg:overflow-hidden">
      <div className="grid min-h-screen grid-rows-[auto_minmax(38rem,1fr)_auto] lg:h-screen lg:grid-cols-[16rem_minmax(0,1fr)_24rem] lg:grid-rows-1">
        <SidebarNav />
        <div className="min-h-[38rem] p-3 sm:p-5 lg:h-screen lg:min-h-0">
          <RelationshipField />
        </div>
        <TimelinePanel />
      </div>
    </main>
  );
}
