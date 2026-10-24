"use client";

import { useState, useEffect } from "react";
import {
  FiUser,
  FiMail,
  FiActivity,
  FiCheck,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { getSavedProfile, saveProfile } from "@/lib/mockData";
import { AthleteProfile } from "@/types";

export default function ProfilePage() {
  const [profile, setProfile] = useState<AthleteProfile>(getSavedProfile());
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setProfile(getSavedProfile());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile(profile);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <FiUser className="text-blue-600" />
          <span>Athletic Identity & Biometrics</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Manage your verified scouting credentials, physical measurements, and performance baselines.
        </p>
      </div>

      {/* Main Profile Card */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Top Identity Banner */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-4 border-white shadow-md flex items-center justify-center text-white text-3xl font-black">
            AH
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200/60 flex items-center gap-1">
                <FiShield size={12} /> {profile.level}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {profile.sport} • {profile.position}
            </p>
            <p className="text-xs text-slate-400">
              Verified Scout ID: <span className="font-mono text-slate-600">TVAR-9921-ATH</span>
            </p>
          </div>
        </div>

        {/* Biometrics & Personal Stats */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <FiActivity className="text-blue-600" />
            <span>Physical Attributes & Baseline Measurements</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Sport & Discipline
              </label>
              <input
                type="text"
                value={profile.sport}
                onChange={(e) => setProfile({ ...profile, sport: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Height
              </label>
              <input
                type="text"
                value={profile.height}
                onChange={(e) => setProfile({ ...profile, height: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Weight
              </label>
              <input
                type="text"
                value={profile.weight}
                onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Wingspan
              </label>
              <input
                type="text"
                value={profile.wingspan}
                onChange={(e) => setProfile({ ...profile, wingspan: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Vertical Jump PR
              </label>
              <input
                type="text"
                value={profile.verticalJump}
                onChange={(e) => setProfile({ ...profile, verticalJump: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                40-Yard Sprint PR
              </label>
              <input
                type="text"
                value={profile.sprint40yd}
                onChange={(e) => setProfile({ ...profile, sprint40yd: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Assigned Head Coach
              </label>
              <input
                type="text"
                value={profile.assignedCoach}
                onChange={(e) => setProfile({ ...profile, assignedCoach: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition hover:scale-[1.02]"
            >
              Save Biometrics
            </button>

            {savedSuccess && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 animate-fadeIn">
                <FiCheck size={16} /> Biometrics saved successfully!
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
