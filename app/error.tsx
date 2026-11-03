"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log unexpected errors internally without exposing private stack to user
    console.error("Application boundary caught error:", error);
  }, [error]);

  return (
    <div className="py-24 bg-[#f8fafc] flex-1 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#fef2f2] text-[#ef4444] border border-[#fecaca] flex items-center justify-center mx-auto mb-6 shadow-sm">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono font-bold text-[#ef4444] uppercase tracking-wider">
          Runtime Exception Caught
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0a1329] tracking-tight mt-3">
          Temporary System Interruption
        </h1>
        <p className="mt-4 text-sm text-[#475569] leading-relaxed">
          An unexpected interface state occurred. The error has been contained by our client boundaries. Please retry the transaction or return to the main portal.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => reset()}
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Retry Component
          </Button>
          <Button
            href="/"
            variant="outline"
            size="lg"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
