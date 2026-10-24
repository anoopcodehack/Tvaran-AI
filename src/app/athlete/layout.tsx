"use client";

import AthleteSidebar from "@/components/AthleteSidebar";
import Link from "next/link";
import { FiVideo, FiBell } from "react-icons/fi";

export default function AthleteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Persistent Responsive Sidebar */}
      <AthleteSidebar />

      {/* Main Content Pane */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Athlete Top Bar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 px-6 sm:px-10 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-12 lg:pl-0">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 hidden sm:inline-block">
              Collegiate Sprint Division I
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Coach: <strong className="text-slate-700">Marcus Vance</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/athlete/dashboard/record"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <FiVideo size={14} />
              <span>Record Drill</span>
            </Link>

            <button
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition relative"
              title="Notifications"
            >
              <FiBell size={16} />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-2 right-2"></span>
            </button>
          </div>
        </header>

        {/* Page Children Container */}
        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
