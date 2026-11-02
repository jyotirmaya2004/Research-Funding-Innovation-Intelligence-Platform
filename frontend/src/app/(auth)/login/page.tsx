"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { authStorage } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.data?.success) {
        const { access_token, refresh_token, user } = response.data.data;
        authStorage.setTokens(access_token, refresh_token);
        authStorage.setUser(user);
        router.push("/dashboard");
      }
    } catch (err: any) {
      const msg = err.response?.data?.error?.message || "Invalid email or password";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e2e2e6] hairline-grid flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 lunar-nebula z-0" />

      <div className="max-w-md w-full relative z-10 space-y-6 hairline-card p-8 sm:p-10 border border-white/[0.08] bg-[#0c0e11]/90 backdrop-blur-xl">
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center justify-center w-10 h-10 rounded border border-white/[0.15] bg-white/[0.03] mx-auto hover:border-emerald-400/50 transition-colors">
            <span className="font-mono text-xs font-bold text-emerald-400">NX</span>
          </Link>
          <div className="space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              TERMINAL ACCESS // v4.2
            </div>
            <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
              Sign in to Nexora
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Enter credentials to authenticate into the intelligence console
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 rounded border border-rose-500/30 bg-rose-500/10 text-rose-300 font-mono text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Institutional Email"
            type="email"
            placeholder="researcher@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            label="Cryptographic Password"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 mt-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-[#0b0d10] bg-white hover:bg-neutral-200 transition-all duration-150 disabled:opacity-50 shadow-[0_0_24px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span>AUTHENTICATING...</span>
            ) : (
              <>
                <span>AUTHENTICATE &amp; ENTER</span>
                <span className="text-xs">↗</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center font-mono text-[11px] text-neutral-500 pt-4 border-t border-white/[0.06]">
          No active clearance?{" "}
          <Link href="/register" className="text-emerald-400 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
