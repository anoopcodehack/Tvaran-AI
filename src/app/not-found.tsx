import Link from "next/link";
import { FiActivity, FiHome, FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-blue-500/20">
        <FiActivity size={32} />
      </div>
      <h1 className="text-6xl font-black tracking-tight text-white mb-2">404</h1>
      <h2 className="text-xl font-bold text-slate-200 mb-3">Telemetry Route Not Found</h2>
      <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-8 leading-relaxed">
        The kinematic coordinate or route you requested doesn't exist or was moved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md shadow-blue-500/25"
        >
          <FiHome size={14} />
          <span>Back to Homepage</span>
        </Link>
        <Link
          href="/athlete/dashboard"
          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-2 border border-slate-700"
        >
          <span>Athlete Dashboard</span>
          <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
