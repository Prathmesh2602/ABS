import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 bg-[#f8fafc] flex-1 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-sm font-mono font-bold text-[#0d9488] bg-[#f0fdfa] border border-[#ccfbf1] px-3 py-1 rounded-full uppercase">
          HTTP 404 • Resource Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1329] tracking-tight mt-6">
          System Endpoint Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
          The requested specification or case study may have been updated, relocated, or archived. Use the navigation links below to return to active institutional systems.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg" leftIcon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/solutions" variant="outline" size="lg" leftIcon={<Layers className="w-4 h-4" />}>
            Browse Core Solutions
          </Button>
        </div>
      </div>
    </div>
  );
}
