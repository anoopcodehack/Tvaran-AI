"use client";

import { useState } from "react";
import { FiSettings, FiCheck, FiSliders, FiBell, FiShield, FiLock } from "react-icons/fi";

export default function SettingsPage() {
  const [units, setUnits] = useState<"imperial" | "metric">("imperial");
  const [targetFps, setTargetFps] = useState<"30" | "60">("60");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [coachAlerts, setCoachAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <FiSettings className="text-blue-600" />
          <span>Platform & Vision Engine Settings</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Configure on-device video inference preferences, measurement units, and telemetry synchronization.
        </p>
      </div>

      <div className="space-y-6">
        {/* Computer Vision & Performance Preferences */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FiSliders className="text-blue-600" />
            <span>On-Device Computer Vision Engine</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Measurement System
              </label>
              <select
                value={units}
                onChange={(e) => setUnits(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="imperial">Imperial (Inches, Pounds, 40-yd)</option>
                <option value="metric">Metric (Centimeters, Kilograms, 100m)</option>
              </select>
              <p className="text-[11px] text-slate-400 mt-1.5">
                Affects jump height and sprint distance presentation.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Target Pose Inference Frame Rate
              </label>
              <select
                value={targetFps}
                onChange={(e) => setTargetFps(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="60">60 FPS (Hardware Accelerated WebGL)</option>
                <option value="30">30 FPS (Thermal / Battery Saver Mode)</option>
              </select>
              <p className="text-[11px] text-slate-400 mt-1.5">
                Higher frame rate yields sharper angle calculations during explosive jumps.
              </p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FiBell className="text-blue-600" />
            <span>Coach Telemetry & Notifications</span>
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/70 transition cursor-pointer">
              <div>
                <p className="text-xs font-bold text-slate-800">Coach Feedback Alerts</p>
                <p className="text-[11px] text-slate-500">
                  Notify me when Coach Vance reviews a drill or flags form correction.
                </p>
              </div>
              <input
                type="checkbox"
                checked={coachAlerts}
                onChange={() => setCoachAlerts(!coachAlerts)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100/70 transition cursor-pointer">
              <div>
                <p className="text-xs font-bold text-slate-800">Weekly Biomechanics Digest</p>
                <p className="text-[11px] text-slate-500">
                  Receive an automated kinematic summary of depth consistency and speed PRs.
                </p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={() => setEmailAlerts(!emailAlerts)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md transition hover:scale-[1.02]"
          >
            Save Preferences
          </button>

          {saved && (
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-fadeIn">
              <FiCheck size={16} /> Preferences updated!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
