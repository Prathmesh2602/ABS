import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy" | "teal" | "gold" | "azure" | "orange";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  as?: "button" | "span";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      href,
      as,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer rounded-xl";

    const variants = {
      primary:
        "bg-[#0a192f] text-white hover:bg-[#0f2444] focus-visible:ring-[#0a192f] shadow-sm hover:shadow-md border border-[#0a192f]",
      secondary:
        "bg-[#f8fafc] text-[#0a192f] hover:bg-[#e2e8f0] focus-visible:ring-[#0a192f] border border-[#e2e8f0]",
      outline:
        "border border-slate-300 bg-transparent text-[#0a192f] hover:bg-slate-100 hover:border-slate-400 focus-visible:ring-[#0a192f]",
      ghost:
        "bg-transparent text-[#334155] hover:bg-[#f1f5f9] hover:text-[#0a192f] focus-visible:ring-[#0a192f]",
      navy:
        "bg-[#060d1a] text-white hover:bg-[#0a192f] focus-visible:ring-[#38bdf8] shadow-md border border-slate-700",
      azure:
        "bg-[#0284c7] text-white hover:bg-[#0369a1] focus-visible:ring-[#0284c7] shadow-sm",
      gold:
        "bg-[#e8b206] text-[#0a192f] hover:bg-[#d97706] hover:text-white focus-visible:ring-[#e8b206] shadow-sm",
      orange:
        "bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#ea580c] text-white shadow-[0_8px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_12px_28px_rgba(234,88,12,0.5)] hover:scale-105 active:scale-95 border-0",
      teal:
        "bg-[#0284c7] text-white hover:bg-[#0369a1] focus-visible:ring-[#0284c7] shadow-sm", // mapped to brand azure
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2 min-h-[44px]", // Minimum 44px touch target
      lg: "h-13 px-7 text-base gap-2.5 min-h-[48px]",
    };

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    const mergedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    // If an href is supplied, render a Next.js Link directly (avoids <a><button> nesting)
    if (href) {
      return (
        <Link
          href={href}
          className={mergedClassName}
          onClick={props.onClick as any}
        >
          {content}
        </Link>
      );
    }

    // If as="span" is specified, render a span (valid inside external <Link> components)
    if (as === "span") {
      return (
        <span
          className={mergedClassName}
          onClick={props.onClick as any}
        >
          {content}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={mergedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
