"use client";

import Link from "next/link";
import {
  FiUsers,
  FiVideo,
  FiAlertTriangle,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import { INITIAL_COACH_REVIEWS } from "@/lib/mockData";

export default function CoachDashboardPage() {
  const pendingCount = INITIAL_COACH_REVIEWS.filter((r) => r.status === "Pending").length;

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Collegiate & Academy Scouting Active</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coach Intelligence Hub 📋
          </h1>
          <p className="text-sm text-slate-400 max-w-xl">
            Review edge-calculated athlete kinematics, audit flagged movement defects, and assign
            tailored form-correction drills.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/coach/reviews"
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition"
          >
            <FiVideo size={16} />
            <span>Review Video Queue ({pendingCount})</span>
          </Link>
          <Link
            href="/coach/athletes"
            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-700 transition flex items-center gap-2"
          >
            <FiUsers size={16} />
            <span>View All Athletes</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Assigned Athletes</span>
            <FiUsers className="text-indigo-400" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-white">16</p>
          <p className="text-xs text-indigo-400 font-semibold">3 Elite Sprint Qualifiers</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">AI Drills Audited</span>
            <FiVideo className="text-blue-400" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-white">68</p>
          <p className="text-xs text-emerald-400 font-semibold">94% Zero-Defect Rate</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Pending Reviews</span>
            <FiAlertTriangle className="text-amber-400" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-amber-400">{pendingCount}</p>
          <p className="text-xs text-slate-400">Requires Coach Evaluation</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Avg Team Form</span>
            <FiActivity className="text-emerald-400" size={20} />
          </div>
          <p className="text-3xl font-extrabold text-emerald-400">89.4%</p>
          <p className="text-xs text-slate-400">High Mechanical Consistency</p>
        </div>
      </div>

      {/* Main Grid: Pending Submissions & Flagged Biomechanics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Submissions Queue */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Recent Athlete Submissions</h2>
              <p className="text-xs text-slate-400">Pose estimations processed on athlete devices</p>
            </div>
            <Link
              href="/coach/reviews"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              <span>Review Queue</span>
              <FiArrowRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-slate-700/60">
            {INITIAL_COACH_REVIEWS.map((rev) => (
              <div key={rev.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{rev.athleteName}</span>
                    <span className="text-xs text-slate-400 font-medium">({rev.athleteSport})</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        rev.status === "Reviewed"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : rev.status === "Needs Retake"
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {rev.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{rev.drillName}</p>
                  <p className="text-[11px] text-slate-400">{rev.submissionDate}</p>
                  {rev.flaggedDefect && (
                    <p className="text-xs text-amber-300 flex items-center gap-1 pt-1 font-medium">
                      <FiAlertTriangle size={12} /> {rev.flaggedDefect}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400">AI Score</span>
                    <p className="text-base font-black text-white">{rev.aiFormScore}%</p>
                  </div>
                  <Link
                    href="/coach/reviews"
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
                  >
                    Audit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coach Tactical Action Panel */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FiShield className="text-indigo-400" />
              <span>Injury Prevention Radar</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI detected minor right knee valgus during <b>Marcus Sterling's</b> deceleration cut.
              Recommend assigning hip abductor and gluteus medius activation drills before Friday's scrimmage.
            </p>
            <div className="pt-2">
              <Link
                href="/coach/reviews"
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition"
              >
                <span>Provide Athlete Feedback</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 space-y-3">
            <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400" />
              <span>Scout Telemetry Export</span>
            </h4>
            <p className="text-xs text-slate-400">
              Generate standardized JSON / PDF kinematic cards for regional and national combine scouts.
            </p>
            <button
              onClick={() => alert("Scouting card exported to clipboard & PDF telemetry format.")}
              className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 transition"
            >
              Export Combined Roster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
