"use client";

export default function CoachDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Coach Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage athletes, review performance, and provide feedback
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
          + Add Athlete
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Athletes", value: "12" },
          { label: "Videos Reviewed", value: "38" },
          { label: "Pending Reviews", value: "5" },
          { label: "Avg Performance Score", value: "82%" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Athlete Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Assigned Athletes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-gray-600">Athlete</th>
                <th className="py-2 text-gray-600">Sport</th>
                <th className="py-2 text-gray-600">Last Score</th>
                <th className="py-2 text-gray-600">Status</th>
                <th className="py-2 text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Aman Verma",
                  sport: "Football",
                  score: "85%",
                  status: "Reviewed",
                },
                {
                  name: "Rohit Kumar",
                  sport: "Athletics",
                  score: "78%",
                  status: "Pending",
                },
                {
                  name: "Neha Singh",
                  sport: "Cricket",
                  score: "90%",
                  status: "Reviewed",
                },
              ].map((athlete, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-3 font-medium">{athlete.name}</td>
                  <td className="py-3">{athlete.sport}</td>
                  <td className="py-3">{athlete.score}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        athlete.status === "Reviewed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {athlete.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="text-indigo-600 font-semibold hover:underline">
                      View Analysis
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">
            AI Performance Insights
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Sprint acceleration improved by 12%</li>
            <li>• Footwork consistency needs improvement</li>
            <li>• Fatigue detected in final drills</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">
            Coach Actions
          </h2>
          <div className="flex flex-col gap-3">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Review New Videos
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Send Feedback
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Schedule Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
