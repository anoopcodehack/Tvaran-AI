# 🏃 TVARAN AI — Edge-Computed Athletic Performance & Biomechanics Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Computer Vision](https://img.shields.io/badge/Computer_Vision-MediaPipe_Pose-FF6F00?style=flat-square&logo=google)](https://developers.google.com/mediapipe)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

**TVARAN AI** is a client-side athletic assessment platform designed to deliver automated, unbiased biomechanical evaluation for athletes and coaches. By leveraging in-browser pose estimation (**MediaPipe / MoveNet**), TVARAN eliminates costly cloud GPU pipelines to perform real-time joint-angle tracking, exercise form validation, and performance analytics with zero latency.

---

## 📌 Problem & Engineering Philosophy

* **The Problem:** Traditional athletic talent identification relies on subjective in-person scouting, expensive motion-capture laboratories, or costly cloud video processing backends with significant latency.
* **The Solution:** Execute pose estimation and kinematic calculations directly on the client machine via WebGL/WASM. Videos never leave the athlete's device unless synchronized for coaching reviews, ensuring total data privacy, zero server processing costs, and real-time millisecond-level feedback.

---

## 🚀 Key Modules & Architecture

```
                                  [ TVARAN ARCHITECTURE ]
                                  
  ┌────────────────┐       ┌────────────────────────┐       ┌──────────────────────┐
  │  Video Input   │ ────> │ In-Browser Pose Engine │ ────> │ Kinematic Calculator │
  │ (Webcam / MP4) │       │ (MediaPipe / MoveNet)  │       │ (Joint Angles & Reps)│
  └────────────────┘       └────────────────────────┘       └──────────┬───────────┘
                                                                       │
                                                                       ▼
  ┌───────────────────┐    ┌─────────────────────────┐      ┌──────────────────────┐
  │  Coach Dashboard  │ <─ │   Cloud Sync / Store    │ <─── │   Athlete Telemetry  │
  │ (Review & Scout)  │    │  (Supabase / Firebase)  │      │  (Accuracy, Cadence) │
  └───────────────────┘    └─────────────────────────┘      └──────────────────────┘
```

### 1. In-Browser Computer Vision Engine
- Real-time 33-point skeletal landmark detection running client-side.
- Zero server compute overhead utilizing WebGL/WASM acceleration.
- Local video processing: upload pre-recorded clips or use live camera feeds.

### 2. Biomechanical Analytics & Form Tracking
- **Angle Tracking:** Calculates real-time joint vectors (e.g., knee flexion, hip hinge, torso lean) using trigonometric vector analysis ($$\theta = \arccos\left(\frac{u \cdot v}{\|u\| \|v\|}\right)$$).
- **Movement Validation:** State-machine rep counters for compound movements (Squats, Push-ups, Vertical Jumps).
- **Metric Scoring:** Form accuracy ratings, cadence, range-of-motion (ROM) percentages, and velocity.

### 3. Dual-Role Role-Based Architecture
- **Athlete Portal:** Session logs, milestone progression, kinematic reports, personal bests.
- **Coach / Scout Portal:** Team rosters, video analysis review, performance flag alerts, centralized metrics.

---

## 🛠️ Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) | Core web architecture, SSR/SSG & dynamic routing |
| **Language** | TypeScript | Strong static typing & predictable contracts |
| **Styling** | Tailwind CSS v4 | Responsive, utility-first design system |
| **Animation** | Framer Motion | Fluid micro-interactions and route transitions |
| **Vision / AI** | MediaPipe Pose / TensorFlow.js | In-browser 2D/3D skeletal landmark detection |
| **Visualizations**| Recharts | Biomechanical trend graphs and radar charts |
| **Persistence** | Supabase (PostgreSQL / Auth) | Athlete telemetry, coach assignments, and auth |

---

## 📁 Repository Structure

```text
huntingcoder/
├── src/
│   ├── app/
│   │   ├── athlete/
│   │   │   └── dashboard/
│   │   │       ├── achievement/  # Athletic milestones & badges
│   │   │       ├── profile/      # Biometrics & personal details
│   │   │       ├── report/       # Kinematic data, ROM & accuracy
│   │   │       ├── setting/      # App preferences & localization
│   │   │       └── page.tsx      # Main athlete overview
│   │   ├── coach/
│   │   │   └── dashboard/        # Athlete roster & scout reviews
│   │   ├── login/                # Role-aware authentication
│   │   ├── signup/               # User onboarding
│   │   ├── layout.tsx            # Global layout shell
│   │   └── page.tsx              # Landing page & system overview
│   └── public/                   # Static assets & iconography
├── next.config.ts                # Turbopack & Next.js config
└── package.json                  # Dependencies & scripts
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js **18.x** or higher
- npm, yarn, or pnpm

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anoopcodehack/Tvaran-AI.git
   cd Tvaran-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🗺️ Engineering Roadmap (Sprint Plan)

- [x] Complete Next.js 16 Responsive UI Architecture & Component Framework.
- [x] Dual-portal routing (Athlete & Coach flows).
- [ ] **Client-Side Pose Estimation:** Integrate `@mediapipe/pose` camera pipeline on the athlete upload route.
- [ ] **Kinematic Logic:** Implement trigonometric joint angle calculations for squats and pushups.
- [ ] **Telemetry Overhaul:** Replace mock data with dynamic kinematic metrics (Knee Angle, Cadence, ROM %, Rep Counter).
- [ ] **Backend Persistence:** Integrate Supabase for athlete telemetry storage and coach-athlete relationship management.

---

## 👤 Author & Maintainer

**Anoop A**
- Portfolio / GitHub: [@anoopcodehack](https://github.com/anoopcodehack)
- Focus: Full-Stack Engineering, In-Browser Edge AI & Web Performance

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
