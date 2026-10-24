"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiBarChart2,
  FiTrendingUp,
  FiActivity,
  FiVideo,
  FiCheckCircle,
  FiAlertTriangle,
  FiFilter,
} from "react-icons/fi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { getSavedDrills } from "@/lib/mockData";
import { DrillSession } from "@/types";

export default function ReportsPage() {
  const [drills, setDrills] = useState<DrillSession[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  useEffect(() => {
    setDrills(getSavedDrills());
  }, []);

  const filtered = drills.filter(
    (d) => filterCategory === "All" || d.category === filterCategory
  );

  const totalDrills = drills.length;
  const optimalCount = drills.filter((d) => d.status === "Optimal").length;
  const avgFormScore =
    totalDrills > 0
      ? Math.round(drills.reduce((acc, cur) => acc + cur.formScore, 0) / totalDrills)
      : 90;
  const avgKneeAngle =
    totalDrills > 0
      ? Math.round(drills.reduce((acc, cur) => acc + cur.avgKneeAngle, 0) / totalDrills)
      : 86;

  // Chart data formatted from drills in reverse chronological order
  const chartData = [...drills].reverse().map((d, index) => ({
    name: `Session ${index + 1}`,
    score: d.formScore,
    angle: d.avgKneeAngle,
    reps: d.reps,
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiBarChart2 className="text-blue-600" />
            <span>Kinematic Telemetry & Performance Reports</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Automated biomechanical metrics captured via in-browser computer vision.
          </p>
        </div>

        <Link
          href="/athlete/dashboard/record"
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 transition w-fit"
        >
          <FiVideo size={14} />
          <span>Record New Session</span>
        </Link>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Form Consistency
          </span>
          <p className="text-3xl font-extrabold text-slate-900">{avgFormScore}%</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <FiCheckCircle size={12} /> {optimalCount} of {totalDrills} Optimal
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Avg Knee Flexion Angle
          </span>
          <p className="text-3xl font-extrabold text-slate-900">{avgKneeAngle}°</p>
          <p className="text-xs text-blue-600 font-semibold">Standard: 80°–90° Parallel</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Kinematic Telemetry
          </span>
          <p className="text-3xl font-extrabold text-slate-900">33 Points</p>
          <p className="text-xs text-slate-500">Full Skeletal Vectors</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Total Sessions
          </span>
          <p className="text-3xl font-extrabold text-slate-900">{totalDrills}</p>
          <p className="text-xs text-slate-500">Verified Sessions</p>
        </div>
      </div>

      {/* Recharts Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Score Progression Curve */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Form Score Progression (%)</h2>
              <p className="text-xs text-slate-500">Session-over-session kinematic quality</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded-lg">
              Target &gt; 90%
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11, fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    color: "#fff",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ fill: "#2563eb", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Knee Flexion Angle Distribution */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Knee Joint Flexion Angle (°)</h2>
              <p className="text-xs text-slate-500">Calculated vector angle at peak contraction</p>
            </div>
            <span className="text-xs font-bold px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg">
              Below 90° = Optimal
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis domain={[0, 140]} tick={{ fontSize: 11, fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    color: "#fff",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="angle" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Filterable Drills Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Drill History & Diagnostics</h2>
            <p className="text-xs text-slate-500">Detailed breakdowns of joint flexion and repetition cadence</p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <FiFilter className="text-slate-400" size={14} />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Mobility & Strength">Mobility & Strength</option>
              <option value="Speed & Agility">Speed & Agility</option>
              <option value="Explosive Power">Explosive Power</option>
              <option value="Technique">Technique</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3">Drill Name</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Volume</th>
                <th className="pb-3">Knee Angle</th>
                <th className="pb-3">Form Score</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">AI Diagnostic Feedback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((drill) => (
                <tr key={drill.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 font-bold text-slate-800">{drill.drillName}</td>
                  <td className="py-4 text-slate-500">{drill.category}</td>
                  <td className="py-4 text-slate-500">{drill.date}</td>
                  <td className="py-4 font-semibold text-slate-700">{drill.reps} reps</td>
                  <td className="py-4 font-mono font-bold text-blue-600">{drill.avgKneeAngle}°</td>
                  <td className="py-4 font-black text-slate-900">{drill.formScore}%</td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[10px] ${
                        drill.status === "Optimal"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                          : "bg-amber-50 text-amber-700 border border-amber-200/50"
                      }`}
                    >
                      {drill.status === "Optimal" ? (
                        <FiCheckCircle size={11} />
                      ) : (
                        <FiAlertTriangle size={11} />
                      )}
                      <span>{drill.status}</span>
                    </span>
                  </td>
                  <td className="py-4 text-slate-600 max-w-xs">{drill.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
