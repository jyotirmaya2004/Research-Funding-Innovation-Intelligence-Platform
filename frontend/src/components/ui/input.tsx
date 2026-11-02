import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400">
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "w-full rounded border bg-[#111419]/90 px-3.5 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 transition-colors focus:outline-none focus:ring-2",
            error
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-white/[0.12] focus:border-emerald-400 focus:ring-emerald-400/20",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs font-mono text-rose-400">{error}</p>}
        {helperText && !error && <p className="text-xs font-mono text-neutral-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

