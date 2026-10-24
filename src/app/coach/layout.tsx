import CoachHeader from "@/components/CoachHeader";

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <CoachHeader />
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-10">
        {children}
      </main>
    </div>
  );
}
