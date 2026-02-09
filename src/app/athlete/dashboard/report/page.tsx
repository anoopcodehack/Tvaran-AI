"use client";

import { FiCheckCircle, FiXCircle, FiFileText, FiArrowLeft, FiTrendingUp, FiBarChart2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ReportsPage() {
  const reports = [
    { id: 1, date: "2025-09-01", attendance: "Present", assignment: "Submitted", credits: 8 },
    { id: 2, date: "2025-09-10", attendance: "Absent", assignment: "Not Submitted", credits: 0 },
    { id: 3, date: "2025-09-20", attendance: "Present", assignment: "Submitted", credits: 10 },
    { id: 4, date: "2025-09-25", attendance: "Present", assignment: "Not Submitted", credits: 6 },
  ];

  // 🔹 Compute analytics
  const total = reports.length;
  const attendancePresent = reports.filter((r) => r.attendance === "Present").length;
  const assignmentsDone = reports.filter((r) => r.assignment === "Submitted").length;
  const avgCredits = (reports.reduce((sum, r) => sum + r.credits, 0) / (total * 10)) * 100;

  // 🔹 Chart data
  const pieData = [
    { name: "Present", value: attendancePresent },
    { name: "Absent", value: total - attendancePresent },
  ];
  const COLORS = ["#34d399", "#f87171"];

  // 🔹 Badge renderer
  const getBadge = (type: string, value: string) => {
    if (type === "attendance") {
      return value === "Present" ? (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
          <FiCheckCircle size={14} /> {value}
        </span>
      ) : (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
          <FiXCircle size={14} /> {value}
        </span>
      );
    }
    if (type === "assignment") {
      return value === "Submitted" ? (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
          <FiFileText size={14} /> {value}
        </span>
      ) : (
        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
          <FiFileText size={14} /> {value}
        </span>
      );
    }
  };

  return (
    <div className="p-6 space-y-10 animate-fade-in">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent drop-shadow">
        📊 Your Performance Reports
      </h1>

      {/* Analytics Summary */}
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center"
        >
          <FiTrendingUp size={28} className="text-green-600" />
          <h3 className="text-lg font-semibold mt-2">Attendance Rate</h3>
          <p className="text-2xl font-bold text-green-700">{((attendancePresent / total) * 100).toFixed(0)}%</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center"
        >
          <FiFileText size={28} className="text-blue-600" />
          <h3 className="text-lg font-semibold mt-2">Assignments Done</h3>
          <p className="text-2xl font-bold text-blue-700">{((assignmentsDone / total) * 100).toFixed(0)}%</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center"
        >
          <FiBarChart2 size={28} className="text-yellow-600" />
          <h3 className="text-lg font-semibold mt-2">Avg Credits</h3>
          <p className="text-2xl font-bold text-yellow-700">{avgCredits.toFixed(0)}%</p>
        </motion.div>
      </div>

      {/* Reports Table */}
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-blue-50 to-purple-50 text-left">
            <tr>
              <th className="px-6 py-3 font-semibold">Date</th>
              <th className="px-6 py-3 font-semibold">Attendance</th>
              <th className="px-6 py-3 font-semibold">Assignment</th>
              <th className="px-6 py-3 font-semibold">Credits</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-t hover:bg-blue-50/40 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">{report.date}</td>
                <td className="px-6 py-4">{getBadge("attendance", report.attendance)}</td>
                <td className="px-6 py-4">{getBadge("assignment", report.assignment)}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 w-40">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${(report.credits / 10) * 100}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                      {report.credits} / 10
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <div className="mt-12 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-700">
          📈 Attendance Distribution
        </h2>
        <div className="h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FiArrowLeft size={18} /> Back to Dashboard
        </a>
      </div>
    </div>
  );
}
