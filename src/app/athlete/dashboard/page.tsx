"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiVideo,
  FiTrendingUp,
  FiAward,
  FiZap,
  FiActivity,
  FiArrowRight,
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
} from "react-icons/fi";
import { getSavedDrills, getSavedProfile } from "@/lib/mockData";
import { DrillSession, AthleteProfile } from "@/types";

export default function AthleteDashboardPage() {
  const [drills, setDrills] = useState<DrillSession[]>([]);
  const [profile, setProfile] = useState<AthleteProfile | null>(null);

  useEffect(() => {
    setDrills(getSavedDrills());
    setProfile(getSavedProfile());
  }, []);

  const totalSessions = drills.length;
  const avgScore =
    totalSessions > 0
      ? Math.round(drills.reduce((acc, d) => acc + d.formScore, 0) / totalSessions)
      : 92;

  return (
    <div className="space-y-8">
      {/* Welcome & Readiness Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Athletic Readiness: Peak Performance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Welcome back, {profile?.name || "Alex"}! ⚡
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            Your biomechanical consistency is up <strong className="text-emerald-400">+8%</strong> this week.
            Coach Vance scheduled a <b>Squat Depth & Cadence</b> verification drill.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-3">
          <Link
            href="/athlete/dashboard/record"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2 transition hover:scale-[1.02]"
          >
            <FiVideo size={16} />
            <span>Launch AI Camera</span>
          </Link>
          <Link
            href="/athlete/dashboard/report"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition flex items-center gap-2"
          >
            <span>View Kinematics</span>
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Avg Form Score</span>
            <FiActivity className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{avgScore}%</p>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <FiTrendingUp size={13} /> +3.2% vs baseline
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Vertical Jump PR</span>
            <FiZap className="text-amber-500" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {profile?.verticalJump || "32.4 in"}
          </p>
          <p className="text-xs text-slate-500">Camera-timed flight</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">40-Yard Dash</span>
            <FiClock className="text-indigo-600" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">
            {profile?.sprint40yd || "4.38 s"}
          </p>
          <p className="text-xs text-blue-600 font-semibold">Laser-validated</p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Drills Analyzed</span>
            <FiAward className="text-emerald-600" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{totalSessions}</p>
          <p className="text-xs text-slate-500">Verified sessions</p>
        </div>
      </div>

      {/* Main Content Grid: Recent Sessions & Coach Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Drill Sessions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Biomechanical Drills</h2>
              <p className="text-xs text-slate-500">Session telemetry evaluated on-device</p>
            </div>
            <Link
              href="/athlete/dashboard/report"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>Full Analytics</span>
              <FiArrowRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {drills.slice(0, 4).map((drill) => (
              <div key={drill.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{drill.drillName}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        drill.status === "Optimal"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {drill.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {drill.date} • {drill.reps} Reps • Knee Angle: {drill.avgKneeAngle}°
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-700">Form Score</span>
                    <p
                      className={`text-base font-black ${
                        drill.formScore >= 90 ? "text-emerald-600" : "text-amber-500"
                      }`}
                    >
                      {drill.formScore}%
                    </p>
                  </div>
                  <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${drill.formScore >= 90 ? "bg-emerald-500" : "bg-amber-500"}`}
                      style={{ width: `${drill.formScore}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coach Insights & Assigned Protocol */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span>Coach Marcus Vance's Note</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              "Great drive off the starting blocks on Tuesday. Make sure your hip hinge depth during warm-up squats
              reaches full 90-degree parallel so your glutes engage before explosive drive."
            </p>
            <div className="pt-2">
              <Link
                href="/athlete/dashboard/record"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition"
              >
                <FiVideo size={14} />
                <span>Verify Squat Form Now</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-200/60 rounded-2xl p-6 space-y-3">
            <h4 className="text-sm font-bold text-blue-950 flex items-center gap-2">
              <FiAward className="text-blue-600" />
              <span>Next PR Target</span>
            </h4>
            <p className="text-xs text-blue-900/80">
              Complete 2 more sessions with &gt;95% form score to unlock the <b>Biomechanics Master</b> milestone badge!
            </p>
            <div className="w-full bg-blue-200/60 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
