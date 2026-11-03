import * as React from "react";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { cn } from "@/lib/utils";

export interface LogoProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "alt"> {
  alt?: string;
  className?: string;
}

/**
 * Universal Brand Logo Component
 * Statically imports `public/logo.png`.
 * Whenever `public/logo.png` is modified or replaced in the folder, Next.js / Turbopack
 * automatically detects the file change, updates the content hash, and reloads it instantly everywhere.
 */
export function Logo({
  alt = "Analytica Business Solutions — Solutions for a Better Tomorrow",
  className,
  priority = false,
  ...props
}: LogoProps) {
  return (
    <Image
      src={logoImg}
      alt={alt}
      priority={priority}
      className={cn("w-auto object-contain", className)}
      {...props}
    />
  );
}
