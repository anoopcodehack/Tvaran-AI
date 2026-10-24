import Link from "next/link";
import { FiActivity, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <FiActivity size={18} />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                TVARAN<span className="text-blue-600">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Edge-native computer vision platform powering automated athletic motion tracking, kinematic form validation, and talent scouting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Athletes</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/athlete/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
              <li><Link href="/athlete/dashboard/record" className="hover:text-blue-600">Record AI Drill</Link></li>
              <li><Link href="/athlete/dashboard/report" className="hover:text-blue-600">Kinematic Reports</Link></li>
              <li><Link href="/athlete/dashboard/achievement" className="hover:text-blue-600">PRs & Milestones</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Coaches & Scouts</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/coach/dashboard" className="hover:text-blue-600">Coach Dashboard</Link></li>
              <li><Link href="/coach/athletes" className="hover:text-blue-600">Athlete Roster</Link></li>
              <li><Link href="/coach/reviews" className="hover:text-blue-600">AI Video Reviews</Link></li>
              <li><Link href="/signup" className="hover:text-blue-600">Join as Coach</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Technology</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><span className="text-slate-500">In-Browser Edge AI</span></li>
              <li><span className="text-slate-500">MediaPipe 33-Point Pose</span></li>
              <li><span className="text-slate-500">Vector Joint Mathematics</span></li>
              <li><span className="text-slate-500">Zero Cloud Latency</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TVARAN AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/anoopcodehack/Tvaran-AI" target="_blank" className="hover:text-slate-700 transition">
              <FiGithub size={16} />
            </Link>
            <Link href="#" className="hover:text-slate-700 transition">
              <FiTwitter size={16} />
            </Link>
            <Link href="#" className="hover:text-slate-700 transition">
              <FiLinkedin size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
