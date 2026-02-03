"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [role, setRole] = useState<"athlete" | "coach" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certificate, setCertificate] = useState<File | null>(null);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation ONLY for coach
    if (role === "coach" && !certificate) {
      alert("Please upload your coaching certificate for verification.");
      return;
    }

    // Demo form data (API later)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role!);
    if (certificate) formData.append("certificate", certificate);

    // 🔥 COACH-ONLY REDIRECT
    if (role === "coach") {
  router.push("/coach/dashboard");
  return;
} else if (role === "athlete") {
  router.push("/dashboard");
  return;
}



    // Demo alert
    alert(
      `Signing up ${name} as ${role} with email: ${email}${
        certificate ? " (Certificate uploaded)" : ""
      }`
    );

    // Reset form
    setName("");
    setEmail("");
    setPassword("");
    setCertificate(null);
    setRole(null);
  };

 return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        {!role ? (
          // Step 1: Choose role
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Sign Up for TVARAN</h1>
            <p className="mb-4 text-gray-600">Please select your role:</p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setRole("athlete")}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Athlete
              </button>

              <button
                onClick={() => setRole("coach")}
                className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
              >
                Coach
              </button>
            </div>

            <Link href="/" className="block mt-6 text-gray-400 hover:underline">
              Back to Home
            </Link>
          </div>
        ) : (
          // Step 2: Signup form
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </h1>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {role === "coach" && (
                <div>
                  <label className="block mb-1 font-medium">
                    Upload Coaching Certificate
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={(e) =>
                      setCertificate(
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                    className="w-full border px-3 py-2 rounded-lg"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Only PDF, JPG, or PNG accepted.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>

            <button
              onClick={() => setRole(null)}
              className="block mt-4 mx-auto text-gray-400 hover:underline"
            >
              Back to Role Selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}