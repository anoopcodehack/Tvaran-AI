"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear local/session storage
    localStorage.clear();
    sessionStorage.clear();

    // If you use cookies for auth, clear them here
    // Example (if you set cookies in middleware or API):
    // document.cookie = "token=; Max-Age=0; path=/;";

    // Redirect to login page
    router.replace("/login");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow">
        <p className="text-gray-700">Logging out...</p>
      </div>
    </div>
  );
}
