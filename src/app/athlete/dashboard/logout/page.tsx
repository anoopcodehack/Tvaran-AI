"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("role");
      localStorage.removeItem("isLoggedIn");
    }
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center animate-pulse">
        <FiCheckCircle size={24} />
      </div>
      <p className="text-sm font-bold text-slate-700">Signing out from TVARAN AI...</p>
    </div>
  );
}
