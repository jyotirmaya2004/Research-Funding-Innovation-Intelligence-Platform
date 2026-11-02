import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaSectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
}

export function CtaSection({
  title = (
    <>
      Let&apos;s build what comes next. <br className="hidden sm:inline" />
      <span className="text-gradient">From Research to Venture</span>
    </>
  ),
  description = "Nexora welcomes research consortia, institutional founders, and national laboratory directorships seeking capital alignment and rapid commercialization.",
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/register",
  secondaryButtonLabel = "Terminal Access",
  secondaryButtonHref = "/login",
}: CtaSectionProps) {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Centered Page Container with Comfortable Side Padding */}
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded border border-white/[0.08] bg-gradient-to-b from-[#111419] to-[#0c0e11] p-8 sm:p-14 lg:p-16 backdrop-blur-xl">
          {/* Subtle Background Glow Elements */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Centered Vertical Stack */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Optional Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.12] bg-white/[0.04] text-xs font-mono text-emerald-400 mb-6 uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-pulse" />
              <span>DISPATCH PROTOCOL // 2026</span>
            </div>

            {/* Large Multi-Line Primary Heading Centered Horizontally */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white leading-tight sm:leading-[1.12] max-w-3xl mx-auto">
              {title}
            </h2>

            {/* Supporting Paragraph Set at Restrained Max Width & Centered */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Single Horizontal Row with Two Balanced Buttons (Never Wrapping) */}
            <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 flex-nowrap">
              {/* Solid Primary Brand Button */}
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-xs sm:text-sm font-medium text-[#0b0d10] bg-white hover:bg-neutral-200 rounded-full shadow-[0_0_24px_rgba(6,182,212,0.25)] transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap gap-2 group"
              >
                <span>{primaryButtonLabel}</span>
                <span className="font-mono text-xs">↗</span>
              </Link>

              {/* Secondary Outlined Button */}
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-xs sm:text-sm font-medium text-white hover:text-white bg-transparent hover:bg-white/[0.06] border border-white/20 hover:border-white/40 rounded-full transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                {secondaryButtonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

