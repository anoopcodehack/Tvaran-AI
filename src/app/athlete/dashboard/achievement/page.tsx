"use client";

import { useState } from "react";
import {
  FiAward,
  FiSearch,
  FiFilter,
  FiZap,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiLock,
} from "react-icons/fi";
import { INITIAL_ACHIEVEMENTS } from "@/lib/mockData";
import { Achievement } from "@/types";

export default function AchievementPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = INITIAL_ACHIEVEMENTS.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || a.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const total = INITIAL_ACHIEVEMENTS.length;
  const unlocked = INITIAL_ACHIEVEMENTS.filter((a) => a.isUnlocked).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiAward className="text-amber-500" />
            <span>Athletic Achievements & Personal Bests</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Automated milestone verification powered by laser and camera telemetry.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-xs font-bold w-fit">
          <FiAward size={16} className="text-amber-500" />
          <span>{unlocked} of {total} Milestones Unlocked</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search milestones, PRs, or drill badges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <FiFilter className="text-slate-400" size={14} />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Personal Record">Personal Records (PR)</option>
            <option value="Milestone">Milestones</option>
            <option value="Scouting Radar">Scouting Radar</option>
            <option value="Consistency">Consistency</option>
          </select>
        </div>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-2xl border transition relative flex flex-col justify-between ${
              item.isUnlocked
                ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                : "bg-slate-50/70 border-slate-200/60 opacity-80"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    item.category === "Personal Record"
                      ? "bg-blue-50 text-blue-700"
                      : item.category === "Scouting Radar"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {item.category}
                </span>

                <span
                  className={`p-2 rounded-xl text-sm ${
                    item.isUnlocked
                      ? "bg-amber-100 text-amber-700 shadow-xs"
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {item.isUnlocked ? <FiCheckCircle /> : <FiLock />}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">{item.description}</p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500">{item.metricLabel}</span>
                <span className="font-bold text-slate-800">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.isUnlocked
                      ? "bg-gradient-to-r from-amber-400 to-amber-500"
                      : "bg-blue-600"
                  }`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
