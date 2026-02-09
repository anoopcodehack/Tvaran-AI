"use client";

import { useState } from "react";
import Link from "next/link";
import { FiUser, FiMail, FiLock, FiTrash2, FiArrowLeft } from "react-icons/fi";

type Language =
  | "hi"
  | "en"
  | "bn"
  | "te"
  | "mr"
  | "ta"
  | "ur"
  | "gu"
  | "kn"
  | "ml";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [accountVisibility, setAccountVisibility] =
    useState<"public" | "private">("public");
  const [language, setLanguage] = useState<Language>("en");

  const handleSaveProfile = () => alert("Profile saved successfully!");
  const handlePasswordChange = () => {
    alert("Password updated successfully!");
    setPassword("");
  };
  const handleDeleteAccount = () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This cannot be undone."
      )
    ) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 p-6 flex flex-col gap-8 items-center">
      <h1 className="text-4xl font-bold text-gray-800 animate-fadeIn">
        ⚙️ Settings
      </h1>

      {/* Profile Card */}
      <section className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl transform transition-transform hover:scale-105 duration-500">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FiUser /> Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div className="relative">
            <label className="flex items-center gap-2 mb-1 font-medium">
              <FiMail /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border px-3 py-2 rounded-xl"
            />
          </div>
        </div>
        <button
          onClick={handleSaveProfile}
          className="mt-4 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transition"
        >
          Save Profile
        </button>
      </section>

      {/* Password Card */}
      <section className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl transform transition-transform hover:scale-105 duration-500">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Password</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            onClick={handlePasswordChange}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transition"
          >
            Update Password
          </button>
        </div>
      </section>

      {/* Notifications & Preferences */}
      <section className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl transform transition-transform hover:scale-105 duration-500">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
          Notifications & Preferences
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center mb-4">
          {["email", "sms", "push"].map((type) => (
            <div key={type} className="flex items-center gap-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications[type as keyof typeof notifications]}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      [type]:
                        !notifications[type as keyof typeof notifications],
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-500 transition-all"></div>
                <span className="ml-3 text-gray-700 capitalize">
                  {type} notifications
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium">Theme</label>
            <select
              value={theme}
              onChange={(e) =>
                setTheme(e.target.value as "light" | "dark")
              }
              className="w-full px-3 py-2 border rounded-xl"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Account Visibility
            </label>
            <select
              value={accountVisibility}
              onChange={(e) =>
                setAccountVisibility(
                  e.target.value as "public" | "private"
                )
              }
              className="w-full px-3 py-2 border rounded-xl"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Language</label>
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as Language)
              }
              className="w-full px-3 py-2 border rounded-xl"
            >
              <option value="hi">हिंदी (Hindi)</option>
              <option value="en">English</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="ur">اردو (Urdu)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="ml">മലയാളം (Malayalam)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl transform transition-transform hover:scale-105 duration-500">
        <h2 className="text-2xl font-semibold text-red-600 mb-4 flex items-center gap-2">
          <FiTrash2 /> Danger Zone
        </h2>
        <button
          onClick={handleDeleteAccount}
          className="px-6 py-3 bg-red-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transition"
        >
          Delete Account
        </button>
      </section>

      <Link
        href="/dashboard"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-white-600 to-purple-600 text-white rounded-full font-semibold shadow-2xl hover:scale-110 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 animate-bounceSlow"
      >
        <FiArrowLeft /> Back to Dashboard
      </Link>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounceSlow {
          animation: bounceSlow 2s infinite;
        }
      `}</style>
    </div>
  );
}

