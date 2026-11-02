"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sparkles,
  LayoutDashboard,
  Search,
  TrendingUp,
  FileCode2,
  Sliders,
  Briefcase,
  FileText,
  Shield,
  LogOut,
  User as UserIcon,
  BookOpen,
} from "lucide-react";
import { authStorage } from "@/lib/auth";
import { User } from "@/types/user";
import { formatRoleName } from "@/lib/utils";
import NotificationCenter from "@/components/NotificationCenter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = authStorage.getUser();
    if (!currentUser || !authStorage.isAuthenticated()) {
      router.push("/login");
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    authStorage.clearAuth();
    router.push("/login");
  };

  const navItems = [
    { index: "01", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { index: "02", label: "Research Profile", href: "/profile", icon: UserIcon },
    { index: "03", label: "Publications", href: "/publications", icon: BookOpen },
    { index: "04", label: "Funding Radar", href: "/funding", icon: Search, badge: "AI MATCH" },
    { index: "05", label: "Analytics", href: "/research-intelligence", icon: TrendingUp, badge: "VECTORS" },
    { index: "06", label: "Patent Landscape", href: "/patents", icon: FileCode2 },
    { index: "07", label: "Tech Intelligence", href: "/technology-intelligence", icon: Sparkles, badge: "WHITESPACE" },
    { index: "08", label: "5-Pillar Scoring", href: "/scoring", icon: Sliders, badge: "FORMULA" },
    { index: "09", label: "Commercialization", href: "/commercialization", icon: Briefcase },
    { index: "10", label: "Executive Reports", href: "/reports", icon: FileText },
  ];

  if (user?.role === "administrator" || user?.is_superuser) {
    navItems.push({ index: "11", label: "Administration", href: "/admin", icon: Shield, badge: "GOV" });
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0d10] text-neutral-400 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse animate-ping" />
          <span>INITIALIZING NEXORA WORKSPACE TELEMETRY...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0b0d10] text-[#e2e2e6] hairline-grid selection:bg-emerald-500 selection:text-black">
      {/* Sidebar Navigation Rail (Editorial Hamol Studio Layout) */}
      <aside className="w-64 border-r border-white/[0.08] bg-[#0c0e11]/90 backdrop-blur-xl flex flex-col justify-between hidden md:flex z-20">
        <div>
          {/* Logo & Monogram */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-white/[0.08]">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded border border-white/[0.15] bg-white/[0.03] flex items-center justify-center">
                <span className="font-mono text-[10px] font-bold text-emerald-400">NX</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-sm tracking-widest text-white uppercase">
                  NEXORA
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase">v4.2</span>
              </div>
            </Link>

            <span className="relative flex h-2 w-2" title="System Live">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 live-pulse" />
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">
              CONSOLE PROTOCOLS
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded text-xs transition-all duration-150 group ${
                    isActive
                      ? "bg-white/[0.06] text-white border-l-2 border-emerald-400 font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-neutral-500 group-hover:text-emerald-400 transition-colors">
                      {item.index}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-neutral-400"}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && !isActive && (
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/[0.08] text-neutral-500 uppercase">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="p-3 border-t border-white/[0.08]">
          <div className="p-3 rounded border border-white/[0.08] bg-[#111419] flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-7 h-7 rounded border border-white/[0.1] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                <UserIcon className="w-3.5 h-3.5 text-neutral-300" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-medium text-white truncate">{user?.full_name}</p>
                <p className="font-mono text-[10px] text-neutral-500 truncate capitalize">
                  {user ? formatRoleName(user.role) : ""}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-mono text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors border border-transparent hover:border-rose-500/20"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>DISCONNECT TERMINAL</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-white/[0.08] bg-[#0b0d10]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                WORKSPACE //
              </span>
              <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                {user ? formatRoleName(user.role) : "Loading..."}
              </span>
            </div>

            <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-600">|</span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-500">
              ORBITAL NODE US-EAST
            </span>
          </div>

          <div className="flex items-center gap-4">
            <NotificationCenter />
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-white">{user?.full_name}</p>
              <p className="font-mono text-[10px] text-neutral-500">{user?.email}</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
