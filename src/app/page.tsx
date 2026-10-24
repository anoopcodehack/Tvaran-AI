"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FiActivity,
  FiZap,
  FiShield,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiTrendingUp,
  FiVideo,
  FiEye,
} from "react-icons/fi";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-emerald-400/20 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Next-Gen Edge Computer Vision Engine</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Unlock Athletic Potential with{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                  In-Browser Edge AI
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                TVARAN transforms any webcam or smartphone into an elite motion-capture laboratory.
                Zero server GPU cost, zero video latency, and 100% athlete data privacy.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/athlete/dashboard/record"
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <FiVideo size={18} />
                  <span>Launch Live AI Camera</span>
                  <FiArrowRight size={16} />
                </Link>

                <Link
                  href="/login"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <FiEye size={18} className="text-blue-600" />
                  <span>Explore Demo Portals</span>
                </Link>
              </div>

              {/* Social Proof / Stats Strip */}
              <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-2xl font-black text-blue-600">&lt; 30 ms</p>
                  <p className="text-xs font-semibold text-slate-500">Inference Latency</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-2xl font-black text-emerald-600">33 Points</p>
                  <p className="text-xs font-semibold text-slate-500">Full-Body Skeletal Tracking</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-2xl font-black text-indigo-600">$0.00</p>
                  <p className="text-xs font-semibold text-slate-500">Cloud GPU Server Cost</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <p className="text-2xl font-black text-amber-500">100%</p>
                  <p className="text-xs font-semibold text-slate-500">Athlete Privacy (On-Device)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Preview Card */}
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
                    <FiActivity /> Live Biomechanics Engine
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Instant Kinematic Joint & Form Assessment
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Watch our client-side pose engine calculate knee flexion, hip extension, and spine angle in real time.
                    State-machine rep counters track work cycles while identifying biomechanical flaws like knee valgus or trunk compensation.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-200">
                    <li className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-400 shrink-0" size={18} />
                      <span>Trigonometric angle analysis: θ = arccos( (u·v) / (|u||v|) )</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-400 shrink-0" size={18} />
                      <span>Zero video streaming to cloud; only 5KB JSON telemetry synced</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FiCheckCircle className="text-emerald-400 shrink-0" size={18} />
                      <span>Instant coach alerts for injury prevention and fatigue flags</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/athlete/dashboard/record"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-md transition"
                    >
                      <span>Try the Live Camera Tracker</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Visual Wireframe Preview Mockup */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-inner relative flex flex-col justify-between min-h-[320px]">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                    <span className="font-mono text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      POSE PIPELINE: 60 FPS
                    </span>
                    <span className="text-slate-400 font-mono">FRAME #4821</span>
                  </div>

                  <div className="py-8 flex flex-col items-center justify-center space-y-4">
                    <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center font-black text-3xl text-white shadow-lg shadow-blue-500/30">
                      86°
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                      Optimal Squat Depth Reached
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-center">
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">Cadence</p>
                      <p className="text-base font-extrabold text-white">24 RPM</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">Form Index</p>
                      <p className="text-base font-extrabold text-emerald-400">94%</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-slate-400 font-bold">Rep Count</p>
                      <p className="text-base font-extrabold text-amber-400">15 Reps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">Engineered for Performance</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Complete Tooling for Athletes & Scouts
              </p>
              <p className="text-slate-600 text-base">
                Everything required to digitize athletic testing, from camera detection to coaching rosters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiCpu,
                  title: "WASM / WebGL Edge Vision",
                  desc: "Runs pose models directly on the user device's GPU. No expensive server farms, no video upload timeouts.",
                  color: "blue",
                },
                {
                  icon: FiTrendingUp,
                  title: "Biomechanical Kinematics",
                  desc: "Calculates joint vectors, angular velocity, and mechanical depth. Objectively validates form against sports science standards.",
                  color: "emerald",
                },
                {
                  icon: FiShield,
                  title: "Coach & Scout Hub",
                  desc: "Centralized talent roster. Coaches audit athlete drills, flag movement breakdowns, and track long-term progression.",
                  color: "purple",
                },
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition hover:-translate-y-1 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
