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
      Accelerate Your Research Breakthroughs <br className="hidden sm:inline" />
      into <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Funded Innovations</span>
    </>
  ),
  description = "Connect your scientific publications to matched funding opportunities, analyze competitor patent landscapes, and track commercial readiness in one unified intelligence workspace.",
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/register",
  secondaryButtonLabel = "Sign In",
  secondaryButtonHref = "/login",
}: CtaSectionProps) {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Centered Page Container with Comfortable Side Padding */}
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950/90 p-8 sm:p-14 lg:p-16 backdrop-blur-xl shadow-2xl">
          {/* Subtle Background Glow Elements */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          {/* Centered Vertical Stack */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Optional Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Next-Generation Intelligence for Modern R&D</span>
            </div>

            {/* Large Multi-Line Primary Heading Centered Horizontally */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15] max-w-3xl mx-auto">
              {title}
            </h2>

            {/* Supporting Paragraph Set at Restrained Max Width & Centered */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Single Horizontal Row with Two Balanced Buttons (Never Wrapping) */}
            <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 flex-nowrap">
              {/* Solid Primary Brand Button */}
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap gap-2 group"
              >
                <span>{primaryButtonLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary Outlined Button */}
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700 hover:border-slate-500 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
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
