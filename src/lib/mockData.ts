import { AthleteProfile, DrillSession, Achievement, CoachReviewItem } from "@/types";

export const DEFAULT_ATHLETE: AthleteProfile = {
  id: "ath_01",
  name: "Alex Hunter",
  email: "alex.hunter@tvaran.ai",
  sport: "Track & Field (Sprints)",
  position: "100m / 200m Sprinter",
  level: "Collegiate",
  height: "6 ft 1 in (185 cm)",
  weight: "178 lbs (80.7 kg)",
  age: 21,
  wingspan: "74.5 in",
  verticalJump: "32.4 in",
  sprint40yd: "4.38 s",
  assignedCoach: "Coach Marcus Vance",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
};

export const INITIAL_DRILLS: DrillSession[] = [
  {
    id: "drill_01",
    drillName: "Squat Depth & Hip Hinge Biomechanics",
    category: "Mobility & Strength",
    date: "2026-10-22",
    reps: 15,
    formScore: 94,
    avgKneeAngle: 86,
    cadenceRpm: 24,
    status: "Optimal",
    feedback: "Exceptional depth consistency across all reps. Zero knee valgus detected.",
  },
  {
    id: "drill_02",
    drillName: "100m Block Acceleration & Drive Angle",
    category: "Speed & Agility",
    date: "2026-10-20",
    reps: 6,
    formScore: 89,
    avgKneeAngle: 48,
    cadenceRpm: 210,
    status: "Optimal",
    feedback: "High explosive horizontal impulse. Keep head neutral during first 15 meters.",
  },
  {
    id: "drill_03",
    drillName: "Vertical Counter-Movement Jump (CMJ)",
    category: "Explosive Power",
    date: "2026-10-18",
    reps: 8,
    formScore: 92,
    avgKneeAngle: 95,
    cadenceRpm: 18,
    status: "Optimal",
    feedback: "Rapid eccentric-to-concentric transition. Peak jump height reached 32.4 in.",
  },
  {
    id: "drill_04",
    drillName: "Agility Shuttle & Deceleration Mechanics",
    category: "Speed & Agility",
    date: "2026-10-15",
    reps: 10,
    formScore: 78,
    avgKneeAngle: 110,
    cadenceRpm: 45,
    status: "Sub-Optimal",
    feedback: "Slight lateral torso lean on sharp right cut. Focus on core bracing at plant.",
  },
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach_01",
    title: "Sub-4.40s 40-Yard Dash Club",
    category: "Personal Record",
    date: "Oct 2026",
    description: "Laser-timed acceleration milestone recorded at 4.38s with peak knee lift velocity.",
    progress: 100,
    metricLabel: "4.38s PR",
    isUnlocked: true,
    iconName: "Zap",
  },
  {
    id: "ach_02",
    title: "95%+ Biomechanics Master",
    category: "Consistency",
    date: "Oct 2026",
    description: "Achieved over 95% kinematic form accuracy across 20 consecutive squat reps.",
    progress: 95,
    metricLabel: "19/20 Reps",
    isUnlocked: false,
    iconName: "Award",
  },
  {
    id: "ach_03",
    title: "State Scouting Radar Qualifier",
    category: "Scouting Radar",
    date: "Sep 2026",
    description: "Ranked in the top 5% of collegiate sprinters based on AI power-to-weight ratio.",
    progress: 100,
    metricLabel: "Top 5% Rank",
    isUnlocked: true,
    iconName: "Radar",
  },
  {
    id: "ach_04",
    title: "Vertical Jump 30+ Inch Mark",
    category: "Milestone",
    date: "Aug 2026",
    description: "Cleared the 30-inch threshold with verified flight-time camera measurement.",
    progress: 100,
    metricLabel: "32.4 Inches",
    isUnlocked: true,
    iconName: "TrendingUp",
  },
  {
    id: "ach_05",
    title: "Century Session Grinder",
    category: "Milestone",
    date: "In Progress",
    description: "Complete 100 verified AI motion-tracking sessions with zero missed drill cycles.",
    progress: 68,
    metricLabel: "68 / 100 Sessions",
    isUnlocked: false,
    iconName: "Clock",
  },
];

export const INITIAL_COACH_REVIEWS: CoachReviewItem[] = [
  {
    id: "rev_01",
    athleteName: "Alex Hunter",
    athleteSport: "Track & Field",
    drillName: "Squat Depth & Hip Hinge Biomechanics",
    submissionDate: "Today, 11:20 AM",
    aiFormScore: 94,
    status: "Pending",
  },
  {
    id: "rev_02",
    athleteName: "Marcus Sterling",
    athleteSport: "Football (WR)",
    drillName: "Route Cut & Deceleration",
    submissionDate: "Yesterday",
    aiFormScore: 76,
    flaggedDefect: "Excessive outward knee valgus on 2nd cut",
    status: "Needs Retake",
    coachNotes: "Please re-record drill with camera positioned perpendicular to plant foot.",
  },
  {
    id: "rev_03",
    athleteName: "Elena Rostova",
    athleteSport: "Volleyball",
    drillName: "Approach Jump & Arm Swing",
    submissionDate: "2 days ago",
    aiFormScore: 91,
    status: "Reviewed",
    coachNotes: "Clean takeoff and timing. Ready to advance to weighted jump protocols.",
  },
];

// LocalStorage helpers for dynamic user persistence
export function getSavedDrills(): DrillSession[] {
  if (typeof window === "undefined") return INITIAL_DRILLS;
  try {
    const raw = localStorage.getItem("tvaran_drills");
    return raw ? JSON.parse(raw) : INITIAL_DRILLS;
  } catch {
    return INITIAL_DRILLS;
  }
}

export function saveDrillSession(drill: DrillSession): DrillSession[] {
  if (typeof window === "undefined") return [drill, ...INITIAL_DRILLS];
  try {
    const existing = getSavedDrills();
    const updated = [drill, ...existing];
    localStorage.setItem("tvaran_drills", JSON.stringify(updated));
    return updated;
  } catch {
    return [drill, ...INITIAL_DRILLS];
  }
}

export function getSavedProfile(): AthleteProfile {
  if (typeof window === "undefined") return DEFAULT_ATHLETE;
  try {
    const raw = localStorage.getItem("tvaran_athlete_profile");
    return raw ? { ...DEFAULT_ATHLETE, ...JSON.parse(raw) } : DEFAULT_ATHLETE;
  } catch {
    return DEFAULT_ATHLETE;
  }
}

export function saveProfile(profile: Partial<AthleteProfile>): AthleteProfile {
  if (typeof window === "undefined") return DEFAULT_ATHLETE;
  try {
    const current = getSavedProfile();
    const updated = { ...current, ...profile };
    localStorage.setItem("tvaran_athlete_profile", JSON.stringify(updated));
    return updated;
  } catch {
    return DEFAULT_ATHLETE;
  }
}
