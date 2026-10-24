"use client";

import { useState } from "react";
import {
  FiCheckSquare,
  FiVideo,
  FiAlertTriangle,
  FiCheckCircle,
  FiSend,
  FiPlay,
} from "react-icons/fi";
import { INITIAL_COACH_REVIEWS } from "@/lib/mockData";
import { CoachReviewItem } from "@/types";

export default function CoachReviewsPage() {
  const [reviews, setReviews] = useState<CoachReviewItem[]>(INITIAL_COACH_REVIEWS);
  const [selectedReview, setSelectedReview] = useState<CoachReviewItem>(reviews[0]);
  const [coachNote, setCoachNote] = useState("");
  const [gradedSuccess, setGradedSuccess] = useState(false);

  const handleGrade = (newStatus: "Reviewed" | "Needs Retake") => {
    const updated = reviews.map((r) =>
      r.id === selectedReview.id
        ? { ...r, status: newStatus, coachNotes: coachNote || "Grade verified by Head Coach." }
        : r
    );
    setReviews(updated);
    setSelectedReview({
      ...selectedReview,
      status: newStatus,
      coachNotes: coachNote || "Grade verified by Head Coach.",
    });
    setGradedSuccess(true);
    setTimeout(() => setGradedSuccess(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <FiCheckSquare className="text-indigo-400" />
          <span>AI Video Review & Kinematic Audit Queue</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Review 33-point skeletal landmark tracks and approve athlete milestone telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submissions List */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Pending Queue ({reviews.length})
          </h2>

          <div className="space-y-2">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                onClick={() => {
                  setSelectedReview(rev);
                  setCoachNote(rev.coachNotes || "");
                }}
                className={`p-4 rounded-xl border transition cursor-pointer ${
                  selectedReview.id === rev.id
                    ? "bg-indigo-600/20 border-indigo-500 shadow-sm"
                    : "bg-slate-800/60 border-slate-700/80 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">{rev.athleteName}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      rev.status === "Reviewed"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : rev.status === "Needs Retake"
                        ? "bg-rose-500/20 text-rose-300"
                        : "bg-amber-500/20 text-amber-300"
                    }`}
                  >
                    {rev.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{rev.drillName}</p>
                <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400">
                  <span>{rev.submissionDate}</span>
                  <span className="font-bold text-emerald-400">AI Score: {rev.aiFormScore}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player & Biomechanical Audit Console */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-6">
            {/* Visual Simulated Drill Video Screen */}
            <div className="relative bg-slate-950 rounded-xl overflow-hidden min-h-[300px] flex flex-col items-center justify-center p-6 border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 mb-3 animate-pulse">
                <FiPlay size={24} className="ml-1" />
              </div>
              <p className="text-sm font-bold text-white mb-1">
                Playback: {selectedReview.drillName}
              </p>
              <p className="text-xs text-slate-400">
                Athlete: {selectedReview.athleteName} • AI Form Score: {selectedReview.aiFormScore}%
              </p>

              {/* Landmark HUD Overlay simulation */}
              <div className="absolute top-4 left-4 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-emerald-400">
                SKELETAL OVERLAY: SYNCHRONIZED
              </div>
            </div>

            {/* AI Diagnostics details */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">AI Kinematic Breakdown</h3>
              {selectedReview.flaggedDefect ? (
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 flex items-center gap-2">
                  <FiAlertTriangle className="shrink-0" size={16} />
                  <span>Flagged by Vision Engine: {selectedReview.flaggedDefect}</span>
                </div>
              ) : (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                  <FiCheckCircle className="shrink-0" size={16} />
                  <span>Zero mechanical anomalies detected. Symmetrical knee and hip hinge vectors.</span>
                </div>
              )}
            </div>

            {/* Coach Feedback Editor */}
            <div className="space-y-3 pt-4 border-t border-slate-700/60">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Coach Notes & Remedial Protocol
              </label>
              <textarea
                rows={3}
                value={coachNote}
                onChange={(e) => setCoachNote(e.target.value)}
                placeholder="Enter customized feedback for the athlete..."
                className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleGrade("Reviewed")}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <FiCheckCircle size={14} />
                    <span>Approve & Verify Telemetry</span>
                  </button>

                  <button
                    onClick={() => handleGrade("Needs Retake")}
                    className="px-4 py-2.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <FiAlertTriangle size={14} />
                    <span>Request Drill Retake</span>
                  </button>
                </div>

                {gradedSuccess && (
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 animate-fadeIn">
                    <FiCheckCircle /> Review updated!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
