'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Search,
  Sliders,
  FileCode2,
  Briefcase,
  TrendingUp,
  FileText,
  Clock,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { authStorage } from '@/lib/auth';
import { User } from '@/types/user';
import { api } from '@/lib/api';
import { formatRoleName } from '@/lib/utils';
import { CommandCenterOverviewResponse } from '@/types/command_center';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [commandData, setCommandData] = useState<CommandCenterOverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchOverview = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await api.get<{ data: CommandCenterOverviewResponse }>('/command-center/overview');
      setCommandData(res.data.data);
    } catch (err: any) {
      console.error('Failed to load command center overview:', err);
      setErrorMsg('Unable to retrieve command center telemetry');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setUser(authStorage.getUser());
    fetchOverview();
  }, [fetchOverview]);

  const featureCards = [
    {
      index: "01",
      title: 'Funding Radar & Matchmaking',
      desc: 'Semantic grant matching engine calculating vector eligibility against active research and patent portfolios.',
      href: '/funding',
      icon: Search,
      badge: 'M2 CAPITAL',
      accent: 'emerald',
    },
    {
      index: "02",
      title: 'Technology & Whitespace Radar',
      desc: 'Cross-domain coverage density and statistical whitespace gap discovery for unpatented innovation niches.',
      href: '/technology-intelligence',
      icon: Sparkles,
      badge: 'M3B WHITESPACE',
      accent: 'cyan',
    },
    {
      index: "03",
      title: '5-Pillar Innovation Scoring',
      desc: 'Multi-factor composite scoring: Novelty (30%), Patent (20%), TRL (15%), Market (20%), Funding (15%).',
      href: '/scoring',
      icon: Sliders,
      badge: 'M3C COMPOSITE',
      accent: 'emerald',
    },
    {
      index: "04",
      title: 'Executive Intelligence Dossier',
      desc: 'Unified decision-grade dossiers with SWOT assessments, 3-phase execution roadmaps, and Markdown exports.',
      href: '/reports',
      icon: FileText,
      badge: 'M4 DOSSIER',
      accent: 'cyan',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      {/* Strategic Command Hero */}
      <div className="relative p-6 sm:p-10 rounded border border-white/[0.08] bg-gradient-to-b from-[#111419] to-[#0c0e11] overflow-hidden">
        {/* Subtle Vignette Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-emerald-400/30 bg-emerald-400/5">
                ● ORBITAL COMMAND CENTER
              </span>
              <span className="font-mono text-[10px] text-neutral-500">
                {commandData?.is_profile_scoped ? 'PROFILE-SCOPED // ACTIVE' : 'GLOBAL PLATFORM INTELLIGENCE'}
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Welcome, {user?.full_name || 'Principal Investigator'}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              {commandData?.role_metrics.role_headline ||
                'Unified innovation discovery, patent IP analysis, grant matchmaking, and translation pipeline.'}
            </p>
          </div>

          {commandData?.role_metrics && (
            <div className="flex flex-col sm:items-end gap-2.5">
              <Link
                href={commandData.role_metrics.focus_action_href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-white text-[#0b0d10] hover:bg-neutral-200 shadow-[0_0_24px_rgba(6,182,212,0.25)] transition group"
              >
                <span>{commandData.role_metrics.recommended_focus_action}</span>
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </Link>
              <span className="font-mono text-[10px] text-neutral-500">
                ROLE CONTEXT: <strong className="text-neutral-300 uppercase">{user ? formatRoleName(user.role) : 'RESEARCHER'}</strong>
              </span>
            </div>
          )}
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-mono flex items-center justify-between">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg(null)} className="text-rose-400 font-bold">×</button>
        </div>
      )}

      {/* Unified Metric Scoreboard (6 Hairline Tiles) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* 1. Innovation Score */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Innovation Score</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-heading text-2xl font-bold text-white">{commandData?.average_innovation_score ?? 0}</span>
            <span className="font-mono text-[9px] text-neutral-600">/ 100</span>
          </div>
          <span className="font-mono text-[9px] text-emerald-400 block">5-PILLAR COMPOSITE</span>
        </div>

        {/* 2. Commercialization Readiness */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Commercial Readiness</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-heading text-2xl font-bold text-cyan-400">{commandData?.average_readiness_score ?? 0}</span>
            <span className="font-mono text-[9px] text-neutral-600">/ 100</span>
          </div>
          <span className="font-mono text-[9px] text-cyan-300 block">MARKET VIABILITY</span>
        </div>

        {/* 3. TRL Maturity */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Maturity Level</span>
          <div className="font-heading text-base font-bold text-white mt-1 truncate">
            {commandData?.dominant_trl_stage || 'TRL 1-9'}
          </div>
          <span className="font-mono text-[9px] text-neutral-500 block">TRL RULE ENGINE</span>
        </div>

        {/* 4. Primary Pathway */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Translation Route</span>
          <div className="font-heading text-xs font-bold text-emerald-400 mt-1 truncate uppercase">
            {commandData?.top_recommended_pathway?.replace(/_/g, ' ') || 'STARTUP SPINOUT'}
          </div>
          <span className="font-mono text-[9px] text-neutral-500 block">PRIORITIZED ACTION</span>
        </div>

        {/* 5. Identified Grant Capital */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Tracked Capital</span>
          <div className="font-heading text-2xl font-bold text-white mt-1">
            ${(((commandData?.total_grant_pool_usd ?? 0) / 1000000)).toFixed(1)}M
          </div>
          <span className="font-mono text-[9px] text-neutral-500 block">
            {commandData?.total_funding_opportunities ?? 0} SOLICITATIONS
          </span>
        </div>

        {/* 6. Papers / Patents */}
        <div className="hairline-card p-4 space-y-1">
          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">Portfolio Scale</span>
          <div className="font-heading text-xl font-bold text-white mt-1">
            {commandData?.total_publications ?? 0}p · {commandData?.total_patents ?? 0}pat
          </div>
          <span className="font-mono text-[9px] text-neutral-500 block">INDEXED CLAIMS</span>
        </div>
      </div>

      {/* Core Workflow Cards (4 Modules in Hamol Studio Style) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            01 — 04 // PROTOCOL WORKFLOWS
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureCards.map((feat) => {
            const Icon = feat.icon;
            return (
              <Link
                key={feat.title}
                href={feat.href}
                className="hairline-card p-5 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-neutral-500 group-hover:text-emerald-400 transition-colors">
                      {feat.index}
                    </span>
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/[0.08] text-neutral-400 uppercase">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-sm font-semibold text-white mt-3 group-hover:text-emerald-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed line-clamp-2">
                    {feat.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-neutral-400 group-hover:text-emerald-400 transition-colors">
                  <span>LAUNCH PROTOCOL</span>
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Two-Column Command Grid: Activity Feed & Upcoming Grant Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3): Live Multi-Stream Activity Feed */}
        <div className="lg:col-span-2 hairline-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <h3 className="font-heading text-sm font-semibold text-white">
                Live Multi-Stream Intelligence Feed
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
              <span className="font-mono text-[10px] text-neutral-500 uppercase">STREAM ONLINE</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {commandData?.recent_activity.map((act) => (
              <div
                key={act.id}
                className="p-3.5 rounded border border-white/[0.06] bg-[#0c0e11] flex items-start justify-between gap-4 hover:border-white/[0.14] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase ${
                      act.activity_type === 'PUBLICATION'
                        ? 'border border-cyan-400/30 text-cyan-400 bg-cyan-400/5'
                        : act.activity_type === 'PATENT'
                        ? 'border border-purple-400/30 text-purple-400 bg-purple-400/5'
                        : 'border border-emerald-400/30 text-emerald-400 bg-emerald-400/5'
                    }`}>
                      {act.badge_label}
                    </span>
                    <span className="text-xs font-medium text-white">{act.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">{act.description}</p>
                </div>
                <Link
                  href={act.action_href}
                  className="shrink-0 p-1.5 rounded border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2] transition-colors"
                >
                  <span className="font-mono text-xs">↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (1/3): Upcoming Grant Deadlines & Whitespace Gaps */}
        <div className="space-y-6">
          {/* Grant Deadlines */}
          <div className="hairline-card p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <h3 className="font-heading text-xs font-semibold text-white flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Upcoming Grant Deadlines
              </h3>
              <Link href="/funding" className="font-mono text-[10px] text-cyan-400 hover:underline">
                VIEW ALL ↗
              </Link>
            </div>

            <div className="space-y-2.5">
              {commandData?.upcoming_grant_deadlines.map((grant) => (
                <div key={grant.id} className="p-3 rounded border border-white/[0.06] bg-[#0c0e11] space-y-1">
                  <div className="text-xs font-medium text-white line-clamp-1">{grant.title}</div>
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                    <span className="text-cyan-400">{grant.agency}</span>
                    <span className="text-emerald-400 font-semibold">
                      {grant.amount ? `$${(grant.amount / 1e6).toFixed(1)}M` : 'OPEN'}
                    </span>
                  </div>
                  {grant.deadline && (
                    <div className="text-[9px] text-neutral-500 font-mono">
                      DEADLINE: {new Date(grant.deadline).toLocaleDateString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Whitespace Candidates */}
          <div className="hairline-card p-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <h3 className="font-heading text-xs font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Discovered Whitespace Gaps
              </h3>
              <Link href="/technology-intelligence" className="font-mono text-[10px] text-emerald-400 hover:underline">
                EXPLORE ↗
              </Link>
            </div>

            <div className="space-y-2">
              {commandData?.top_whitespace_areas.map((ws, idx) => (
                <div key={idx} className="px-3 py-2 rounded border border-white/[0.06] bg-[#0c0e11] text-xs text-neutral-300 font-mono flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse" />
                  <span className="truncate">{ws}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Operational Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded border border-white/[0.08] bg-[#0c0e11] text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Platform Intelligence Hub: <strong className="text-white">100% OPERATIONAL</strong></span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-neutral-500">
          <span>LATENCY // 14ms</span>
          <span>·</span>
          <span>FEED // ARPA-E + NSF + EPO ONLINE</span>
        </div>
      </div>
    </div>
  );
}
