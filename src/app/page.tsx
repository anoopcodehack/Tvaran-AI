"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100">

      {/* Animated Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 top-[-100px] left-[-100px] animate-blob"></div>
      <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 top-[200px] right-[-150px] animate-blob animation-delay-2000"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 bottom-[-100px] left-[50px] animate-blob animation-delay-4000"></div>

      {/* Header */}
      <header className="px-6 lg:px-12 h-20 flex items-center justify-between shadow-sm relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <img src="/AI.jpg" alt="TVARAN AI" width={50} height={50} className="rounded-full" />
          <span className="text-xl font-bold text-indigo-700">TVARAN</span>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="/dashboard">
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:scale-105 transform transition">
              Get Started
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative z-10">
        <section className="py-24 lg:py-32 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 animate-fadeIn">
              Unlock Your Athletic Potential with AI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl animate-fadeIn delay-500">
              TVARAN AI uses computer vision to assess your skills, providing fair, remote analysis to help you get discovered.
            </p>
            <div className="flex gap-4 animate-fadeIn delay-1000">
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transform transition shadow-lg">
                  Upload Your Video
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative animate-fadeIn delay-1500">
            <img
              src="/hero.png"
              alt="Hero"
              className="w-full rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-3000"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-indigo-700 animate-fadeIn">Fair and Unbiased Skill Assessment</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg animate-fadeIn delay-500">
              Showcase your talent and get noticed by scouts and coaches worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Video Uploads",
                desc: "Upload performance videos easily from any device.",
              },
              {
                title: "AI-Powered Analysis",
                desc: "Get objective, data-driven feedback on technique and speed.",
              },
              {
                title: "Detailed Reports",
                desc: "Identify strengths and areas for improvement with clear reports.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition transform"
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700">Giving Every Athlete an Equal Chance</h2>
            <p className="mt-4 text-gray-700 text-lg">
              TVARAN AI was founded on the belief that talent is everywhere, but opportunity is not. Our mission is to level the playing field in sports recruiting.
            </p>
          </div>
          <div className="animate-fadeIn delay-500">
            <img src="/about.png" alt="About" className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition transform" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-6 lg:px-12 border-t bg-white">
        <p className="text-sm text-gray-600">&copy; 2025 TVARAN AI. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="#" className="text-sm text-gray-600 hover:underline">Terms</Link>
          <Link href="#" className="text-sm text-gray-600 hover:underline">Privacy</Link>
        </nav>
      </footer>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
      `}</style>
    </div>
  );
}
