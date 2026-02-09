"use client";

import { useState } from "react";
import { FiAward, FiSearch, FiFilter, FiTrendingUp, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
import type { ReactNode, ChangeEvent } from "react";

interface Achievement {
  id: number;
  title: string;
  date: string;
  category: "Personal" | "Team" | "Milestone";
  description: string;
  progress: number;
}

type CategoryFilter = "All" | "Personal" | "Team" | "Milestone";

export default function AchievementPage() {
  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Completed First Project",
      date: "2025-01-15",
      category: "Personal",
      description:
        "Successfully delivered the first major project, showcasing strong problem-solving and time management skills.",
      progress: 100,
    },
    {
      id: 2,
      title: "100+ Users Reached",
      date: "2025-03-10",
      category: "Milestone",
      description:
        "Achieved 100+ active users milestone, validating the project's impact and user adoption.",
      progress: 75,
    },
    {
      id: 3,
      title: "Team Collaboration Award",
      date: "2025-06-20",
      category: "Team",
      description:
        "Recognized for outstanding collaboration and teamwork on a cross-functional innovation project.",
      progress: 100,
    },
    {
      id: 4,
      title: "Top Performer of the Month",
      date: "2025-08-05",
      category: "Personal",
      description:
        "Awarded top performer for exceeding targets and demonstrating leadership in project delivery.",
      progress: 50,
    },
    {
      id: 5,
      title: "Launched New Feature",
      date: "2025-09-01",
      category: "Milestone",
      description:
        "Successfully launched a new feature that enhanced platform engagement by 40%.",
      progress: 90,
    },
  ];

  // Filtered list
  const filteredAchievements = achievements.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "All" || a.category === categoryFilter)
  );

  // Summary analytics
  const total = achievements.length;
  const completed = achievements.filter((a) => a.progress === 100).length;
  const averageProgress = Math.round(
    achievements.reduce((acc, cur) => acc + cur.progress, 0) / total
  );

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value as CategoryFilter);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <FiAward className="text-yellow-500" /> Achievements Dashboard
        </h1>
      </div>

      {/* Analytics Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard
          icon={<FiTrendingUp className="text-blue-500" />}
          label="Total Achievements"
          value={total}
        />
        <SummaryCard
          icon={<FiAward className="text-green-500" />}
          label="Completed"
          value={`${completed}/${total}`}
        />
        <SummaryCard
          icon={<FiClock className="text-yellow-500" />}
          label="Average Progress"
          value={`${averageProgress}%`}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search achievements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <FiFilter className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          >
            <option value="All">All Categories</option>
            <option value="Personal">Personal</option>
            <option value="Team">Team</option>
            <option value="Milestone">Milestone</option>
          </select>
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredAchievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4"
            style={{
              borderTopColor:
                achievement.category === "Personal"
                  ? "#3b82f6"
                  : achievement.category === "Team"
                  ? "#22c55e"
                  : "#facc15",
            }}
          >
            <h2 className="text-xl font-bold mb-2">{achievement.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
            <p className="text-gray-600 text-sm mb-4">
              {achievement.description}
            </p>

            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                achievement.category === "Personal"
                  ? "bg-blue-100 text-blue-800"
                  : achievement.category === "Team"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {achievement.category}
            </span>

            {/* Progress Section */}
            <div className="mt-5">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-800 font-semibold">
                  {achievement.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No achievements found 🚀
        </p>
      )}
    </div>
  );
}

function SummaryCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-4"
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
}
