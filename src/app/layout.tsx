import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TVARAN AI — Edge Athletic Biomechanics & Performance Platform",
  description:
    "Zero-server-cost athletic performance and kinematic motion tracking platform leveraging client-side computer vision.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
