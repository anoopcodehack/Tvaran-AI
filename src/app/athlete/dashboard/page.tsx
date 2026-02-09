"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBarChart2,
  FiAward,
  FiCalendar,
  FiTrendingUp,
  FiClipboard,
} from "react-icons/fi";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [assignmentFile, setAssignmentFile] = useState<File | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAssignmentFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (assignmentFile) {
      alert(`Uploaded: ${assignmentFile.name}`);
      setAssignmentFile(null);
    } else {
      alert("Please select a file to upload!");
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, newItem.trim()]);
    setNewItem("");
    setShowModal(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`backdrop-blur-md bg-white/70 shadow-xl transition-all duration-500 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span
            className={`text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${
              !sidebarOpen && "hidden"
            }`}
          >
            Dashboard
          </span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded hover:bg-gray-200 transition"
          >
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2 px-2">
          {[
            { href: "/", label: "Home", icon: FiHome },
            { href: "/dashboard/profile", label: "Profile", icon: FiUser },
            { href: "/dashboard/setting", label: "Settings", icon: FiSettings },
            {
              href: "/dashboard/achievement",
              label: "Achievement",
              icon: FiAward,
            },
            { href: "/dashboard/report", label: "Reports", icon: FiBarChart2 },
          ].map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all"
            >
              <Icon size={20} />
              <span className={`${!sidebarOpen && "hidden"} font-medium`}>
                {label}
              </span>
            </Link>
          ))}

          <Link
            href="/dashboard/logout"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-100 mt-auto transition"
          >
            <FiLogOut size={20} />
            <span className={`${!sidebarOpen && "hidden"} font-medium`}>
              Logout
            </span>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="backdrop-blur-md bg-white/70 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, <span className="text-blue-600">Athlete!</span>
          </h1>
          <Link
  href="/dashboard/add-item"
  className="px-4 py-2 bg-gradient-to-r from-white-600 to-purple-600 text-white rounded-lg shadow hover:opacity-90 transition flex items-center justify-center"
>
  + Add Item
</Link>

        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {/* Card */}
            <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <FiCalendar className="text-blue-600" size={24} />
                <h2 className="font-bold text-lg">Upcoming Events</h2>
              </div>
              <p className="text-gray-600">
                View all upcoming competitions and training sessions.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <FiTrendingUp className="text-green-600" size={24} />
                <h2 className="font-bold text-lg">Performance Stats</h2>
              </div>
              <p className="text-gray-600">
                Track your progress, metrics, and achievements over time.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <FiUser className="text-purple-600" size={24} />
                <h2 className="font-bold text-lg">Coach Insights</h2>
              </div>
              <p className="text-gray-600">
                Get personalized feedback and training tips from your coach.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 col-span-full hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-3">
                <FiClipboard className="text-orange-600" size={24} />
                <h2 className="font-bold text-lg">Upload Your Assignment</h2>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 mb-3 w-full border rounded px-3 py-2"
              />
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Added Item List */}
          {items.length > 0 && (
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 animate-fade-in">
              <h2 className="font-bold text-xl mb-4">Added Items</h2>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform scale-100 animate-fade-in">
              <h2 className="text-xl font-bold mb-4">Add New Item</h2>
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item name"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddItem}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded hover:opacity-90 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
