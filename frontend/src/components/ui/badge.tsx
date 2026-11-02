import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "purple";
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "primary", children, ...props }) => {
  const variants = {
    primary: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    secondary: "bg-white/[0.04] text-neutral-300 border-white/[0.1]",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    danger: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    purple: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

