import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  variant?: "default" | "muted" | "navy" | "outline";
}

export function Card({
  className,
  hoverEffect = false,
  variant = "default",
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white border border-[#e2e8f0] shadow-[0_2px_10px_-2px_rgba(15,23,42,0.05)]",
    muted: "bg-[#f4f7fb] border border-[#e2e8f0]",
    navy: "bg-[#0a1329] text-white border border-[#1e293b] shadow-xl",
    outline: "bg-transparent border border-[#cbd5e1]",
  };

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300 relative overflow-hidden",
        variants[variant],
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-[0_20px_35px_-10px_rgba(15,30,61,0.08)] hover:border-[#cbd5e1]",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-4 flex flex-col space-y-1.5", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold tracking-tight text-[#0f172a]", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-[#475569] leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0 text-[#334155]", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 pt-0 flex items-center border-t border-[#f1f5f9] mt-auto", className)}
      {...props}
    />
  );
}
