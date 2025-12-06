import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "TVARAN",
  description: "Unlock your athletic potential with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md shadow flex items-center px-6 justify-between sticky top-0 z-50">
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-600 tracking-wide hover:scale-105 transition-transform"
          >
            TVARAN
          </Link>

          <nav className="flex gap-6 items-center">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold bg-white-600 text-blue px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              SIGN UP
            </Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-6 md:px-12 py-8 animate-fade-in">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-sm text-gray-600 border-t bg-white/60 backdrop-blur">
          &copy; {new Date().getFullYear()} TVARAN. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
