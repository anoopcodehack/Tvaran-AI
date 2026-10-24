"use client";

import { useRouter } from "next/navigation";
import AIExerciseTracker from "@/components/AIExerciseTracker";
import { FiArrowLeft, FiInfo, FiActivity } from "react-icons/fi";
import Link from "next/link";

export default function RecordDrillPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href="/athlete/dashboard"
              className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition"
            >
              <FiArrowLeft size={14} /> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <FiActivity className="text-blue-600" />
            <span>AI Motion Capture & Drill Assessment</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Real-time skeletal landmark tracking. Place your phone or webcam 6–8 feet away for full-body view.
          </p>
        </div>
      </div>

      {/* Embedded High-Tech AI Camera & Kinematic Analyzer */}
      <AIExerciseTracker
        onSessionSaved={() => {
          setTimeout(() => {
            router.push("/athlete/dashboard/report");
          }, 1200);
        }}
      />

      {/* Coaching Protocol Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <FiInfo className="text-blue-600" /> 1. Full Body Framing
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Ensure your head, hips, knees, and ankles are clearly visible within the camera boundary.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <FiInfo className="text-emerald-600" /> 2. Depth Standards
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Descend until your hip crease breaks below parallel (knee angle &lt; 90°) for optimal rep credit.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-1">
          <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <FiInfo className="text-purple-600" /> 3. Automatic Telemetry
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Repetitions, peak joint angles, and form scores are stored on-device and visible to your coach.
          </p>
        </div>
      </div>
    </div>
  );
}
