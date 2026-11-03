import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "navy" | "azure" | "gold" | "teal" | "outline" | "success" | "muted";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    navy: "bg-[#0a192f] text-white border-transparent",
    azure: "bg-sky-50 text-sky-800 border-sky-200",
    gold: "bg-amber-50 text-amber-900 border-amber-200",
    teal: "bg-sky-50 text-sky-800 border-sky-200", // Aliased away from harsh teal to brand sky/azure
    outline: "bg-transparent text-slate-600 border-slate-300",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    muted: "bg-slate-50 text-slate-500 border-slate-200",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
