"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiActivity, FiUser, FiShield, FiArrowRight, FiCheck } from "react-icons/fi";
import { saveProfile } from "@/lib/mockData";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<"athlete" | "coach">("athlete");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState("Track & Field (Sprints)");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("role", role);
    localStorage.setItem("isLoggedIn", "true");

    if (name) {
      saveProfile({
        name,
        email: email || "athlete@tvaran.ai",
        sport,
      });
    }

    if (role === "coach") {
      router.push("/coach/dashboard");
    } else {
      router.push("/athlete/dashboard");
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
          <h1 className="text-xl font-bold text-slate-100">Create your Account</h1>
          <p className="text-xs text-slate-400">
            Join the decentralized athletic talent evaluation network.
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700">
          <button
            type="button"
            onClick={() => setRole("athlete")}
            className={`py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              role === "athlete"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FiUser size={15} />
            <span>I am an Athlete</span>
          </button>

          <button
            type="button"
            onClick={() => setRole("coach")}
            className={`py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
              role === "coach"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FiShield size={15} />
            <span>I am a Coach</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-4 shadow-xl">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Hunter"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="alex@tvaran.ai"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Primary Sport / Discipline
            </label>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Track & Field (Sprints)">Track & Field (Sprints)</option>
              <option value="Football (Wide Receiver / Back)">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Cricket">Cricket (Fast Bowling / Batting)</option>
              <option value="Soccer / Football">Soccer</option>
              <option value="Strength & Conditioning">Strength & Conditioning</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/25 transition flex items-center justify-center gap-2"
          >
            <span>Complete Registration</span>
            <FiArrowRight size={14} />
          </button>

          <div className="pt-2 text-center text-xs text-slate-400">
            Already registered?{" "}
            <Link href="/login" className="text-blue-400 hover:underline font-bold">
              Sign In
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
