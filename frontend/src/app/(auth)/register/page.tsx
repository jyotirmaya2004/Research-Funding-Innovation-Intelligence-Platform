"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { authStorage } from "@/lib/auth";
import { UserRole } from "@/types/user";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawRole = searchParams.get("role") as UserRole;
  const initialRole: UserRole = (rawRole && rawRole !== "administrator") ? rawRole : "researcher";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [designation, setDesignation] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState<UserRole>(initialRole);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const roleParam = searchParams.get("role") as UserRole;
    if (roleParam && roleParam !== "administrator") {
      setRole(roleParam);
    }
  }, [searchParams]);

  const roles = [
    { value: "researcher", label: "Researcher", desc: "Academic & Scientific R&D", code: "01" },
    { value: "startup_founder", label: "Startup Founder", desc: "Commercial & Deep-Tech", code: "02" },
    { value: "innovation_manager", label: "Innovation Manager", desc: "TTO & IP Portfolio", code: "03" },
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await api.post("/auth/register", {
        full_name: fullName,
        email,
        password,
        phone: phone || undefined,
        institution: institution || undefined,
        designation: designation || undefined,
        country: country || undefined,
        role,
      });

      if (response.data?.success) {
        // Auto login on successful registration
        const loginResp = await api.post("/auth/login", {
          email,
          password,
        });

        if (loginResp.data?.success) {
          const { access_token, refresh_token, user } = loginResp.data.data;
          authStorage.setTokens(access_token, refresh_token);
          authStorage.setUser(user);
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      }
    } catch (err: any) {
      const msg = err.response?.data?.error?.message || "Registration failed. Please check your inputs.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl w-full space-y-6 sm:space-y-8 hairline-card p-6 sm:p-10 border border-white/[0.08] bg-[#0c0e11]/90 backdrop-blur-xl">
      <div className="text-center space-y-3">
        <Link href="/" className="inline-flex items-center justify-center w-10 h-10 rounded border border-white/[0.15] bg-white/[0.03] mx-auto hover:border-emerald-400/50 transition-colors">
          <span className="font-mono text-xs font-bold text-emerald-400">NX</span>
        </Link>
        <div className="space-y-1">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            PROVISIONING PROTOCOL // INITIALIZATION
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Deploy Your Nexora Node
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
          Configure your institutional intelligence profile to unlock calibrated grant radars and IP defense telemetry.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded border border-rose-500/30 bg-rose-500/10 text-rose-300 font-mono text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-5">
        {/* Row 1: Full Name */}
        <div>
          <Input
            label="Full Name *"
            placeholder="Dr. Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Institutional Email Address *"
            type="email"
            placeholder="jane.doe@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <Input
            label="Contact Telemetry (Phone)"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Row 3: Password & Organization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Cryptographic Password *"
            type="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
          />

          <Input
            label="Organization / Institute"
            placeholder="Stanford / DeepTech Lab"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
          />
        </div>

        {/* Row 4: Designation & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Designation / Title"
            placeholder="Associate Professor / Founder"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          <Input
            label="Jurisdiction / Country"
            placeholder="United States"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        {/* Role Selector */}
        <div className="space-y-2 pt-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            Select Clearance &amp; Stakeholder Role
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {roles.map((r) => {
              const isSelected = role === r.value;
              return (
                <button
                  type="button"
                  key={r.value}
                  onClick={() => setRole(r.value as UserRole)}
                  className={`p-4 rounded border text-left transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-emerald-400/[0.08] border-emerald-400/60 ring-1 ring-emerald-400/30"
                      : "bg-[#111419] border-white/[0.08] hover:border-white/[0.18]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-[10px] text-neutral-500">ROLE // {r.code}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                  </div>
                  <div className="mt-2">
                    <div className={`text-xs font-semibold ${isSelected ? "text-emerald-300" : "text-white"}`}>
                      {r.label}
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-snug">{r.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 mt-4 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-[#0b0d10] bg-white hover:bg-neutral-200 transition-all duration-150 disabled:opacity-50 shadow-[0_0_24px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <span>PROVISIONING WORKSPACE...</span>
          ) : (
            <>
              <span>PROVISION NEXORA WORKSPACE</span>
              <span className="text-xs">↗</span>
            </>
          )}
        </button>
      </form>

      <div className="text-center font-mono text-[11px] text-neutral-500 pt-4 border-t border-white/[0.06]">
        Existing clearance?{" "}
        <Link href="/login" className="text-emerald-400 hover:underline">
          Authenticate here
        </Link>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e2e2e6] hairline-grid flex items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 lunar-nebula z-0" />
      <div className="relative z-10 w-full flex justify-center">
        <Suspense fallback={<div className="text-neutral-400 font-mono text-xs">Loading registration...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
