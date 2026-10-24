import { Point2D } from "@/types";

/**
 * Calculates the internal joint angle in degrees between three 2D points.
 * Point B is the vertex (e.g. Knee vertex between Hip A and Ankle C).
 */
export function calculateJointAngle(a: Point2D, b: Point2D, c: Point2D): number {
  const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
  let angle = Math.abs((radians * 180.0) / Math.PI);

  if (angle > 180.0) {
    angle = 360.0 - angle;
  }

  return Math.round(angle);
}

/**
 * Evaluates squat depth quality based on knee angle.
 * Full depth typically reaches 90° or below.
 */
export function evaluateSquatDepth(kneeAngle: number): {
  status: "Optimal" | "Sub-Optimal" | "Needs Correction";
  feedback: string;
  score: number;
} {
  if (kneeAngle <= 85) {
    return {
      status: "Optimal",
      feedback: "Excellent depth (Below parallel). Great glute and quad drive.",
      score: 96,
    };
  } else if (kneeAngle <= 100) {
    return {
      status: "Optimal",
      feedback: "Solid parallel depth reached. Maintain upright torso on ascent.",
      score: 88,
    };
  } else if (kneeAngle <= 125) {
    return {
      status: "Sub-Optimal",
      feedback: "Partial squat. Drive hips deeper before starting concentric drive.",
      score: 72,
    };
  } else {
    return {
      status: "Needs Correction",
      feedback: "Insufficient depth. Check hip mobility and foot stance.",
      score: 55,
    };
  }
}

/**
 * Formats date to a human-readable clean string
 */
export function formatDrillDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}
