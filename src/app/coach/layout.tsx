import CoachNavbar from "./components/CoachNavbar";

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CoachNavbar />
      <main className="px-6 md:px-12 py-8">{children}</main>
    </>
  );
}
