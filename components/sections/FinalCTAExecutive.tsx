"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTAExecutive() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/80 text-slate-900 relative overflow-hidden border-t border-slate-200/90">
      
      {/* Solid Vector Graphics Background (Zero Dots, Secondary/Tertiary Colors) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[380px] opacity-25"
          viewBox="0 0 1100 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 C300,260 800,20 1100,160 L1100,0 L0,0 Z"
            fill="url(#finalCtaGrad)"
          />
          <defs>
            <linearGradient id="finalCtaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        {/* Solid Geometric Accent Blocks */}
        <div className="absolute top-16 -left-12 w-64 h-64 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-200/50 -rotate-12" />
        <div className="absolute -bottom-20 -right-12 w-72 h-72 rounded-3xl bg-gradient-to-tl from-sky-500/15 via-blue-500/10 to-transparent border border-sky-200/50 rotate-12" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Eyebrow Pill */}
        <span className="text-xs sm:text-sm font-bold text-[#ea580c] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200/90 inline-flex items-center gap-2 mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#ff6201]" />
          <span>Institutional Partnership &amp; Advisory</span>
        </span>

        {/* Punchy Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0a192f] leading-[1.12]">
          Ready to Accelerate Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c]">
            Digital Infrastructure?
          </span>
        </h2>

        {/* 2-Sentence Value Prop */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
          Consult directly with our principal software architects. We will demonstrate live concurrency stress tests, rule validation engines, and custom deployment blueprints for your department.
        </p>

        {/* Action Buttons with White Text on CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#ea580c] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(234,88,12,0.35)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule Executive Demo</span>
            <ArrowRight className="w-4 h-4 stroke-[3] text-white" />
          </Link>
          
          <Link
            href="/work"
            className="w-full sm:w-auto min-w-[210px] px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0a192f] border border-slate-300 font-bold text-sm sm:text-base shadow-xs hover:border-slate-400 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore All Case Studies</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
