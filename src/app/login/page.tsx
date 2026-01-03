"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const router = useRouter();

  // Auto-redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = () => {
    // ✅ Accept ANY email + password
    if (email.trim() && password.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      router.push("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599058917210-70b58a2ff8e0?auto=format&fit=crop&w=1470&q=80')",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 animate-gradient-slow opacity-40 rounded-lg"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const randomX = Math.random() * window.innerWidth;
          const randomY = Math.random() * window.innerHeight;
          const dx = (randomX - mousePos.x) * 0.02;
          const dy = (randomY - mousePos.y) * 0.02;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 animate-particle"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${randomY + dy}px`,
                left: `${randomX + dx}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Login form */}
      <div className="relative z-10 bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 300% 300%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
        }
        .animate-particle {
          animation-name: floatParticle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
