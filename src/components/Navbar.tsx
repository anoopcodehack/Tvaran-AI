"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiActivity, FiUser, FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 h-20 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <FiActivity className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-950 to-blue-700 bg-clip-text text-transparent">
              TVARAN<span className="text-blue-600 ml-1">AI</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Edge Biomechanics
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="/#technology" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            Technology
          </Link>
          <Link href="/athlete/dashboard/record" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Test AI Camera
          </Link>
          <Link href="/coach/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
            Coach Portal
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {role ? (
            <Link
              href={role === "coach" ? "/coach/dashboard" : "/athlete/dashboard"}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition shadow-sm"
            >
              <FiUser className="text-blue-400" />
              {role === "coach" ? "Coach Dashboard" : "Athlete Dashboard"}
              <FiArrowRight size={14} />
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Get Started</span>
                <FiArrowRight size={14} />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
