import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeVariant?: "default" | "navy" | "azure" | "gold" | "outline" | "teal" | "muted";
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  description,
  align = "center",
  theme = "light",
  className,
  ...props
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-10 sm:mb-14",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      {badge && (
        <Badge
          variant={badgeVariant}
          className="mb-3"
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2]",
          isDark ? "!text-white" : "text-[#0a192f]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "!text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
