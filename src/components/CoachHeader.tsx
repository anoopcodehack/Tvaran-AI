"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiActivity, FiUsers, FiCheckSquare, FiLogOut, FiLayout } from "react-icons/fi";

export default function CoachHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };

  const navLinks = [
    { href: "/coach/dashboard", label: "Coach Hub", icon: FiLayout },
    { href: "/coach/athletes", label: "Athlete Roster", icon: FiUsers },
    { href: "/coach/reviews", label: "AI Video Reviews", icon: FiCheckSquare, badge: "3 Pending" },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/coach/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
            <FiActivity className="text-xl" />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              TVARAN<span className="text-indigo-400">COACH</span>
            </span>
            <span className="block text-[10px] font-semibold text-indigo-300 uppercase tracking-widest">
              Performance Scouting
            </span>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label, icon: Icon, badge }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
                {badge && (
                  <span className="ml-1 text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30 font-bold">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Coach Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-right">
            <div>
              <p className="text-xs font-bold text-white">Coach Marcus Vance</p>
              <p className="text-[10px] text-slate-400">Head of Athletics & Sprint</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-indigo-300 font-bold text-xs">
              MV
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 text-xs font-semibold transition border border-slate-700 hover:border-rose-500/30"
          >
            <FiLogOut size={14} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}
