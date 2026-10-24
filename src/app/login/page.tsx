"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiActivity, FiUser, FiShield, FiArrowRight, FiLock, FiMail } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (roleToSet: "athlete" | "coach") => {
    localStorage.setItem("role", roleToSet);
    localStorage.setItem("isLoggedIn", "true");
    if (roleToSet === "coach") {
      router.push("/coach/dashboard");
    } else {
      router.push("/athlete/dashboard");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase().includes("coach")) {
      handleLogin("coach");
    } else {
      handleLogin("athlete");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition">
              <FiActivity size={22} />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              TVARAN<span className="text-blue-500">AI</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-slate-100">Sign in to your Portal</h1>
          <p className="text-xs text-slate-400">
            Access automated computer vision performance telemetry.
          </p>
        </div>

        {/* 1-Click Fast Demo Logins for Reviewers */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 shadow-md">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
            ⚡ Quick Recruiter & Evaluator Access
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleLogin("athlete")}
              className="px-3 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <FiUser size={14} />
              <span>Enter as Athlete</span>
            </button>
            <button
              type="button"
              onClick={() => handleLogin("coach")}
              className="px-3 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              <FiShield size={14} />
              <span>Enter as Coach</span>
            </button>
          </div>
        </div>

        {/* Standard Form */}
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-4 shadow-xl">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="email"
                placeholder="athlete@tvaran.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/25 transition flex items-center justify-center gap-2"
          >
            <span>Sign In</span>
            <FiArrowRight size={14} />
          </button>

          <div className="pt-2 text-center text-xs text-slate-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline font-bold">
              Sign Up
            </Link>
          </div>
        </form>

        <div className="text-center">
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
