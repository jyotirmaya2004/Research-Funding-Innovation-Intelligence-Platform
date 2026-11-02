import Link from "next/link";
import { ArrowRight, Sparkles, Search, Cpu, Award, Shield, FileText, Layers, Database, Compass } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  const modules = [
    {
      index: "01",
      title: "Funding Radar",
      subtitle: "NSF & Horizon Europe Grant Discovery Engine",
      status: "Active Signal",
      category: "CAPITAL DISCOVERY",
      href: "/funding",
      statusColor: "bg-emerald-400 live-pulse",
    },
    {
      index: "02",
      title: "Patent Landscape",
      subtitle: "AI Clustering & Prior-Art Defense Fencing",
      status: "Defensive Vector",
      category: "IP DEFENSE",
      href: "/patents",
      statusColor: "bg-emerald-400 live-pulse",
    },
    {
      index: "03",
      title: "Technology Intelligence",
      subtitle: "Whitespace Discovery & Commercial Gap Engine",
      status: "Expanding Mesh",
      category: "DEEP-TECH",
      href: "/technology-intelligence",
      statusColor: "bg-cyan-400 cyan-pulse",
    },
    {
      index: "04",
      title: "Commercialization Hub",
      subtitle: "TRL 1-9 Venture Roadmap & Spin-off Pipeline",
      status: "Operational",
      category: "VENTURE ACCELERATION",
      href: "/commercialization",
      statusColor: "bg-emerald-400 live-pulse",
    },
    {
      index: "05",
      title: "Research Gap Engine",
      subtitle: "Semantic Literature & Novelty Indexing",
      status: "Live Sync",
      category: "SCIENCE INTELLIGENCE",
      href: "/research-intelligence",
      statusColor: "bg-emerald-400 live-pulse",
    },
    {
      index: "06",
      title: "Executive Reporting",
      subtitle: "Automated Audit, Compliance & Grant Dossiers",
      status: "Verified Node",
      category: "GOVERNANCE & AUDIT",
      href: "/reports",
      statusColor: "bg-emerald-400 live-pulse",
    },
  ];

  const roles = [
    {
      title: "Researcher",
      role: "researcher",
      badge: "Academic & R&D",
      index: "01",
      description: "Discover high-match non-dilutive grant solicitations, benchmark paper novelty, and map prior-art whitespace.",
      icon: Search,
    },
    {
      title: "Startup Founder",
      role: "startup_founder",
      badge: "Venture & Tech",
      index: "02",
      description: "Analyze competitor patent claims, model commercialization pathways, and secure syndicate venture capital.",
      icon: Cpu,
    },
    {
      title: "Innovation Manager",
      role: "innovation_manager",
      badge: "TTO & Enterprise",
      index: "03",
      description: "Audit university IP portfolios, calculate multi-factor TRL maturity, and structure corporate licensing agreements.",
      icon: Award,
    },
    {
      title: "Administrator",
      role: "administrator",
      badge: "Governance",
      index: "04",
      description: "Audit role-based cryptographic access, monitor continuous data pipelines, and verify global compliance telemetry.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#e2e2e6] relative overflow-hidden hairline-grid flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
      {/* Ambient Lunar Nebula Background */}
      <div className="pointer-events-none fixed inset-0 lunar-nebula z-0" />

      {/* Top Navigation Bar (Editorial Minimal Bar) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0d10]/85 backdrop-blur-md border-b border-white/[0.08]">
        <div className="flex justify-between items-center w-full px-5 md:px-8 py-3.5 max-w-7xl mx-auto">
          {/* Monogram + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-7 h-7 flex items-center justify-center border border-white/[0.15] rounded bg-white/[0.04] group-hover:border-emerald-400/50 transition-colors">
              <span className="text-[11px] font-mono font-bold text-emerald-400 tracking-tighter">NX</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-sm md:text-base font-bold uppercase tracking-widest text-white">
                NEXORA
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] uppercase text-neutral-400 tracking-widest border border-white/[0.1] px-1.5 py-0.5 rounded">
                SYS // 04.2
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Cluster */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-neutral-400">
            <a href="#intelligence" className="hover:text-emerald-400 transition-colors">
              01 // Intelligence
            </a>
            <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
              02 // Disciplines
            </a>
            <a href="#scoring" className="hover:text-emerald-400 transition-colors">
              03 // 5-Pillars
            </a>
            <a href="#methodology" className="hover:text-emerald-400 transition-colors">
              04 // Methodology
            </a>
          </nav>

          {/* Right Trailing Controls */}
          <div className="flex items-center gap-4">
            {/* Live System Node */}
            <div className="hidden lg:flex items-center gap-2 border border-white/[0.1] px-3 py-1 rounded-full bg-white/[0.02]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 live-pulse" />
              </span>
              <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                System Live
              </span>
            </div>

            {/* Terminal Access CTA */}
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white hover:text-[#0b0d10] transition-all duration-200 px-4 py-1.5 font-mono text-[11px] tracking-wider text-white group"
            >
              <span>Terminal Access</span>
              <span className="text-xs transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="relative z-10 pt-28 md:pt-36 flex-1">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-24">
          <div className="max-w-4xl">
            {/* Eyebrow Tag */}
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-400 flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
              <span>INNOVATION &amp; VENTURE STUDIO</span>
              <span className="text-neutral-600">—</span>
              <span className="text-neutral-400">ORBITAL INTELLIGENCE</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.08]">
              We turn deep research into funded breakthroughs.
            </h1>

            {/* Supporting Editorial Prose */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10">
              Nexora orchestrates scientific breakthrough intelligence, automated grant architecture, and competitive IP clustering for world-class research institutes, founders, and national laboratories.
            </p>

            {/* Primary Action Cluster */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#0b0d10] text-sm font-medium hover:bg-neutral-200 shadow-[0_0_24px_rgba(6,182,212,0.25)] transition-all duration-150"
              >
                <span>Explore the Intelligence Suite</span>
                <span className="font-mono text-xs">↗</span>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors text-sm font-medium group"
              >
                <span>Access Platform Terminal</span>
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Real-Time Studio Telemetry Ticker Strip */}
          <div className="mt-16 sm:mt-20 pt-6 pb-6 border-y border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Active Capital Monitored
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                $48.2B
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Patent Vectors Indexed
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                1.4M+
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Academic Labs Connected
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                320+
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                Win Probability Rating
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-emerald-400 tracking-tight">
                78.4%
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE MODULE INDEX (Hamol Inspired Project List) */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/[0.08]" id="intelligence">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                01 — 06 / CAPABILITIES &amp; PROTOCOLS
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                The Modular Intelligence Engine
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              A unified computational suite deployed across institutional incubators, grant offices, and deep-tech venture creation studios.
            </p>
          </div>

          {/* Interactive Stacked Rows */}
          <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
            {modules.map((mod) => (
              <Link
                key={mod.index}
                href={mod.href}
                className="group py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-180 hover:bg-[#161b22] rounded-sm cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="font-mono text-sm text-neutral-500 group-hover:text-emerald-400 transition-colors">
                    {mod.index}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-heading text-lg sm:text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {mod.title}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-400">
                      {mod.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${mod.statusColor}`} />
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {mod.status}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/[0.1] bg-white/[0.02] text-neutral-400 uppercase tracking-wider">
                    {mod.category}
                  </span>
                  <span className="font-mono text-base text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* STUDIO DISCIPLINES (Architectural 3-Column Grid) */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/[0.08]" id="disciplines">
          <div className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              FOUNDATIONAL PILLARS
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Studio Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {/* Discipline 01 */}
            <div className="py-10 px-6 md:px-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  [DISCIPLINE // 01]
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">Discovery</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Identifying unmet scientific needs, high-yield commercial hypotheses, and latent technology gaps before peer-group consensus.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-500 uppercase">Weekly Input</span>
                <span className="font-mono text-xs text-white font-medium">12,000+ Pre-prints</span>
              </div>
            </div>

            {/* Discipline 02 */}
            <div className="py-10 px-6 md:px-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  [DISCIPLINE // 02]
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">Architecture</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Structuring defensible intellectual property topologies, prior-art collision shields, and multi-jurisdictional licensing frameworks.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-500 uppercase">Collision Shield</span>
                <span className="font-mono text-xs text-emerald-400 font-medium">99.2% Accuracy</span>
              </div>
            </div>

            {/* Discipline 03 */}
            <div className="py-10 px-6 md:px-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                  [DISCIPLINE // 03]
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">Capital Allocation</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Connecting laboratory breakthroughs with targeted non-dilutive federal grants, institutional endowments, and deep-tech venture syndicates.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-neutral-500 uppercase">Capital Deployed</span>
                <span className="font-mono text-xs text-white font-medium">$820M+ Syndicated</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5-PILLAR INNOVATION SCORING FORMULA */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/[0.08]" id="scoring">
          <div className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              COMPOSITE EVALUATION FRAMEWORK
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              5-Pillar Innovation Matrix
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="hairline-card p-5 space-y-2">
              <div className="font-mono text-[10px] text-neutral-500 uppercase">Weight</div>
              <div className="font-heading text-3xl font-bold text-emerald-400">30%</div>
              <div className="text-xs font-semibold text-white">Research Novelty</div>
              <div className="text-[11px] text-neutral-400 leading-snug">Semantic citation distance &amp; theoretical divergence.</div>
            </div>

            <div className="hairline-card p-5 space-y-2">
              <div className="font-mono text-[10px] text-neutral-500 uppercase">Weight</div>
              <div className="font-heading text-3xl font-bold text-cyan-400">20%</div>
              <div className="text-xs font-semibold text-white">Patent Strength</div>
              <div className="text-[11px] text-neutral-400 leading-snug">Claim density, prior-art freedom to operate, &amp; defensibility.</div>
            </div>

            <div className="hairline-card p-5 space-y-2">
              <div className="font-mono text-[10px] text-neutral-500 uppercase">Weight</div>
              <div className="font-heading text-3xl font-bold text-emerald-400">15%</div>
              <div className="text-xs font-semibold text-white">Tech Maturity</div>
              <div className="text-[11px] text-neutral-400 leading-snug">Deterministic TRL 1–9 progression heuristic modeling.</div>
            </div>

            <div className="hairline-card p-5 space-y-2">
              <div className="font-mono text-[10px] text-neutral-500 uppercase">Weight</div>
              <div className="font-heading text-3xl font-bold text-amber-400">20%</div>
              <div className="text-xs font-semibold text-white">Market Potential</div>
              <div className="text-[11px] text-neutral-400 leading-snug">TAM expansion, whitespace saturation, &amp; venture velocity.</div>
            </div>

            <div className="hairline-card p-5 space-y-2 col-span-2 sm:col-span-1">
              <div className="font-mono text-[10px] text-neutral-500 uppercase">Weight</div>
              <div className="font-heading text-3xl font-bold text-purple-400">15%</div>
              <div className="text-xs font-semibold text-white">Funding Relevance</div>
              <div className="text-[11px] text-neutral-400 leading-snug">Algorithmic alignment with NSF, Horizon, DARPA mandates.</div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY FLOW (3-Step Schematic Workflow) */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/[0.08]" id="methodology">
          <div className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              METHODOLOGY / SYSTEM FLOW
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              From Laboratory Hypothesis to Defensible Venture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div className="hairline-card p-8 flex flex-col justify-between group">
              <div>
                <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-6 flex items-center justify-between">
                  <span>PHASE 01 — DETECT</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-medium text-white mb-3">Find the right problem</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Continuous indexing of grant solicitations, DARPA/NSF mandates, and academic publications to identify commercially viable friction points before peer groups converge.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-neutral-500">
                STEP_INDEX // 001
              </div>
            </div>

            {/* Step 02 */}
            <div className="hairline-card p-8 flex flex-col justify-between group">
              <div>
                <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-6 flex items-center justify-between">
                  <span>PHASE 02 — FORMULATE</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-medium text-white mb-3">Model the defensibility</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Algorithmic IP synthesis, prior-art landscape benchmarking, and automated grant dossier compilation matching agency selection heuristics with 99.2% accuracy.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-neutral-500">
                STEP_INDEX // 002
              </div>
            </div>

            {/* Step 03 */}
            <div className="hairline-card p-8 flex flex-col justify-between group">
              <div>
                <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-6 flex items-center justify-between">
                  <span>PHASE 03 — COMMERCIALIZE</span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-medium text-white mb-3">Scale into venture</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Formation of high-conviction spin-outs, non-dilutive capital allocation, corporate licensing pipelines, and onboarding into tier-1 venture syndicates.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-neutral-500">
                STEP_INDEX // 003
              </div>
            </div>
          </div>
        </section>

        {/* STAKEHOLDER ROLES */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 border-t border-white/[0.08]">
          <div className="mb-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
              WORKSPACE TAILORING
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Supported Stakeholder Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.role}
                  className="hairline-card p-6 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded border border-white/[0.12] bg-white/[0.03] flex items-center justify-center text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] uppercase text-neutral-400 border border-white/[0.08] px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-[10px] text-neutral-500">ROLE // {item.index}</div>
                      <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06] mt-4">
                    <Link
                      href={`/register?role=${item.role}`}
                      className="font-mono text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center justify-between group"
                    >
                      <span>INITIALIZE WORKSPACE</span>
                      <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CUSTOM CTA SECTION (Matching Exact User Requirements) */}
        <CtaSection />
      </main>

      {/* MONOLITHIC EDITORIAL FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#0b0d10] py-12 relative z-10" id="archive">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 flex items-center justify-center border border-white/[0.15] rounded bg-white/[0.03]">
                <span className="font-mono text-[11px] font-bold text-emerald-400">NX</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white uppercase">
                Nexora
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase text-neutral-400">
              <a href="#intelligence" className="hover:text-emerald-400 transition-colors">
                Intelligence Engine
              </a>
              <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                Disciplines
              </a>
              <a href="#scoring" className="hover:text-emerald-400 transition-colors">
                5-Pillar Scoring
              </a>
              <Link href="/login" className="hover:text-emerald-400 transition-colors">
                Terminal Access
              </Link>
              <Link href="/register" className="hover:text-emerald-400 transition-colors">
                Deploy Lab
              </Link>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-neutral-500 font-mono text-[11px]">
            <p>
              &copy; 2026 Nexora Intelligence Studio. Architectural Systems &amp; Algorithmic Capital Allocation.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">● ONLINE</span>
              <span>LATENCY // 14ms</span>
              <span>·</span>
              <span>BUILD // 8940.b</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
