"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiHome,
  FiVideo,
  FiBarChart2,
  FiAward,
  FiUser,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiActivity,
  FiShield,
} from "react-icons/fi";

const NAV_ITEMS = [
  { href: "/athlete/dashboard", label: "Overview", icon: FiHome },
  { href: "/athlete/dashboard/record", label: "Record AI Drill", icon: FiVideo, badge: "AI Live" },
  { href: "/athlete/dashboard/report", label: "Kinematic Reports", icon: FiBarChart2 },
  { href: "/athlete/dashboard/achievement", label: "Achievements & PRs", icon: FiAward },
  { href: "/athlete/dashboard/profile", label: "Athlete Profile", icon: FiUser },
  { href: "/athlete/dashboard/setting", label: "Settings", icon: FiSettings },
];

export default function AthleteSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 text-slate-700 hover:text-blue-600 transition"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-72 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Header */}
        <div>
          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FiActivity className="text-xl" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-slate-900">
                  TVARAN<span className="text-blue-600">AI</span>
                </span>
                <span className="block text-[10px] font-semibold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Athlete Mode
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1.5">
            {NAV_ITEMS.map(({ href, label, icon: Icon, badge }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`text-lg ${isActive ? "text-white" : "text-slate-500"}`} />
                    <span>{label}</span>
                  </div>
                  {badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-emerald-100 text-emerald-700 animate-pulse"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile & Logout Card */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-blue-700 font-bold text-sm">
                AH
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 leading-tight">Alex Hunter</p>
                <p className="text-xs text-slate-500">100m Sprinter</p>
              </div>
            </div>
            <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg" title="Collegiate Verified">
              <FiShield size={16} />
            </span>
          </div>

          <Link
            href="/athlete/dashboard/logout"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition"
          >
            <FiLogOut className="text-lg" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
