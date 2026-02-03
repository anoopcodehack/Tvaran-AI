"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CoachNavbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("role");
    router.push("/login");
  };

  return (
    <header className="h-16 bg-white/90 backdrop-blur shadow flex items-center px-6 justify-between sticky top-0 z-50">
      <Link
        href="/coach/dashboard"
        className="text-2xl font-extrabold text-indigo-600"
      >
        TVARAN · Coach
      </Link>

      <nav className="flex gap-6 items-center">
        <Link href="/coach/dashboard" className="text-sm hover:text-indigo-600">
          Dashboard
        </Link>

        <Link href="/coach/athletes" className="text-sm hover:text-indigo-600">
          Athletes
        </Link>

        <Link href="/coach/reviews" className="text-sm hover:text-indigo-600">
          Reviews
        </Link>

        <button
          onClick={logout}
          className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
