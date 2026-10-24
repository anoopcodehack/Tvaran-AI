"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiUsers,
  FiSearch,
  FiFilter,
  FiActivity,
  FiZap,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const ATHLETES_ROSTER = [
  {
    id: "ath_01",
    name: "Alex Hunter",
    sport: "Track & Field",
    position: "100m / 200m Sprinter",
    score: "94%",
    status: "Active - Peak",
    jump: "32.4 in",
    dash: "4.38s",
    drillsCount: 18,
  },
  {
    id: "ath_02",
    name: "Marcus Sterling",
    sport: "Football",
    position: "Wide Receiver",
    score: "78%",
    status: "Attention Needed",
    jump: "34.1 in",
    dash: "4.45s",
    drillsCount: 24,
  },
  {
    id: "ath_03",
    name: "Elena Rostova",
    sport: "Volleyball",
    position: "Outside Hitter",
    score: "91%",
    status: "Active - Normal",
    jump: "29.8 in",
    dash: "4.82s",
    drillsCount: 15,
  },
  {
    id: "ath_04",
    name: "Devon Reed",
    sport: "Basketball",
    position: "Point Guard",
    score: "88%",
    status: "Active - Normal",
    jump: "36.2 in",
    dash: "4.40s",
    drillsCount: 21,
  },
  {
    id: "ath_05",
    name: "Sarah Jenkins",
    sport: "Track & Field",
    position: "Hurdles / 400m",
    score: "95%",
    status: "Active - Peak",
    jump: "28.5 in",
    dash: "4.62s",
    drillsCount: 19,
  },
];

export default function CoachAthletesPage() {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");

  const filtered = ATHLETES_ROSTER.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.position.toLowerCase().includes(search.toLowerCase());
    const matchesSport = selectedSport === "All" || a.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <FiUsers className="text-indigo-400" />
            <span>Assigned Athletes & Biometrics Roster</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Real-time mechanical health, combine metrics, and drill adherence.
          </p>
        </div>

        <button
          onClick={() => alert("Invite link copied! Share with athletes to register under your coaching roster.")}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition w-fit"
        >
          + Invite Athlete to Roster
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search athletes by name, position, or sport..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <FiFilter className="text-slate-400" size={14} />
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="All">All Sports</option>
            <option value="Track & Field">Track & Field</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleyball</option>
          </select>
        </div>
      </div>

      {/* Roster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ath) => (
          <div
            key={ath.id}
            className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-4 hover:border-slate-600 transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center font-bold text-sm text-indigo-300">
                  {ath.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{ath.name}</h3>
                  <p className="text-xs text-slate-400">{ath.sport} • {ath.position}</p>
                </div>
              </div>

              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  ath.status.includes("Peak")
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : ath.status.includes("Attention")
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                }`}
              >
                {ath.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-700/60 text-center">
              <div className="p-2 rounded-lg bg-slate-900/60">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">Form Avg</span>
                <span className="text-sm font-extrabold text-white">{ath.score}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">Vert Jump</span>
                <span className="text-sm font-extrabold text-amber-400">{ath.jump}</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60">
                <span className="block text-[10px] text-slate-400 font-bold uppercase">40-yd Dash</span>
                <span className="text-sm font-extrabold text-blue-400">{ath.dash}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">{ath.drillsCount} Drills Completed</span>
              <button
                onClick={() => alert(`Opening telemetry card for ${ath.name}`)}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300"
              >
                View Full Dossier →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
