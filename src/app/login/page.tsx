"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const router = useRouter();

  // Auto-redirect if already logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("isLoggedIn") === "true") {
        router.push("/dashboard");
      }

      // Generate particles safely AFTER mount
      const generated = Array.from({ length: 30 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 20,
      }));

      setParticles(generated);
    }
  }, [router]);

 
const handleLogin = () => {
  // TEMP DEMO LOGIC — replace with API later
  if (email.includes("coach")) {
    localStorage.setItem("role", "coach");
    router.push("/coach/dashboard");
  } else {
    localStorage.setItem("role", "athlete"); // 🔴 THIS WAS MISSING
    router.push("/athlete/dashboard");
  }
};

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 animate-gradient-slow opacity-40"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => {
          const dx = (p.x - mousePos.x) * 0.02;
          const dy = (p.y - mousePos.y) * 0.02;

          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 animate-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                top: `${p.y + dy}px`,
                left: `${p.x + dx}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
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

      {/* Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 300% 300%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes floatParticle {
          0% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(10px, -20px); opacity: 0.4; }
          100% { transform: translate(0, 0); opacity: 0.2; }
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
