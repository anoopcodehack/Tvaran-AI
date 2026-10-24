export type Role = "athlete" | "coach";

export interface AthleteProfile {
  id: string;
  name: string;
  email: string;
  sport: string;
  position: string;
  level: "High School" | "Collegiate" | "Semi-Pro" | "Professional" | "Academy";
  height: string;
  weight: string;
  age: number;
  wingspan: string;
  verticalJump: string;
  sprint40yd: string;
  assignedCoach: string;
  avatarUrl: string;
}

export interface DrillSession {
  id: string;
  drillName: string;
  category: "Mobility & Strength" | "Speed & Agility" | "Explosive Power" | "Technique";
  date: string;
  reps: number;
  formScore: number; // 0 - 100%
  avgKneeAngle: number;
  cadenceRpm: number;
  status: "Optimal" | "Sub-Optimal" | "Needs Correction";
  feedback: string;
  videoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: "Milestone" | "Personal Record" | "Scouting Radar" | "Consistency";
  date: string;
  description: string;
  progress: number; // 0 - 100
  metricLabel: string;
  isUnlocked: boolean;
  iconName: string;
}

export interface CoachReviewItem {
  id: string;
  athleteName: string;
  athleteSport: string;
  drillName: string;
  submissionDate: string;
  aiFormScore: number;
  flaggedDefect?: string;
  status: "Pending" | "Reviewed" | "Needs Retake";
  coachNotes?: string;
}

export interface Point2D {
  x: number;
  y: number;
  label?: string;
}
