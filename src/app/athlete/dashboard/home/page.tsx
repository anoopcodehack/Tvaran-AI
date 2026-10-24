"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AthleteHomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/athlete/dashboard");
  }, [router]);

  return (
    <div className="p-8 text-center text-slate-500 text-sm">
      Loading Athlete Overview...
    </div>
  );
}
