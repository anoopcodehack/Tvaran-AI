"use client";

import Link from "next/link";
import { FiMail, FiUser } from "react-icons/fi";

export default function ProfilePage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Animated background shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[200px] right-[-150px] w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-100px] left-[50px] w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Profile card */}
      <div className="relative bg-white shadow-2xl rounded-3xl max-w-2xl w-full overflow-hidden transform transition-transform hover:scale-105 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white flex items-center gap-6">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-white object-cover transition-transform transform hover:scale-110 hover:shadow-xl"
          />
          <div>
            <h1 className="text-3xl font-bold animate-fadeIn">John Doe</h1>
            <p className="flex items-center gap-2 text-indigo-100 mt-2 animate-fadeIn delay-500">
              <FiMail /> johndoe@example.com
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-gray-600 mb-2 flex items-center gap-2"> 
                <FiUser /> Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-600 mb-2 flex items-center gap-2">
                <FiMail /> Email
              </label>
              <input
                type="email"
                defaultValue="johndoe@example.com"
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-6 justify-center md:justify-start">
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-700 transition text-xl font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition text-xl font-semibold"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition text-xl font-semibold"
            >
              Instagram
            </a>
          </div>

          {/* Save button */}
          <button className="w-full md:w-auto block mx-auto md:mx-0 mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
            Save Changes
          </button>

          {/* 🚀 Back to Dashboard button */}
          <Link
            href="/dashboard"
            className="w-full md:w-auto block mx-auto md:mx-0 mt-4 px-8 py-3 bg-white-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 hover:scale-105 hover:shadow-xl transition duration-300 text-center"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
