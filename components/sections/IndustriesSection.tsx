"use client";

import * as React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import {
  ArrowUpRight,
  Landmark,
  GraduationCap,
  FileCheck,
  Users,
  Wrench,
  Sparkles,
} from "lucide-react";

const industryIcons = {
  "government-public-sector": Landmark,
  "higher-education": GraduationCap,
  "examination-authorities": FileCheck,
  "recruitment-workforce": Users,
  "skill-vocational": Wrench,
};

// Short 1-sentence impact taglines
const sectorSummaries: Record<string, string> = {
  "government-public-sector": "Paperless e-office, digital signatures, and public grant fund audits.",
  "higher-education": "Unified student lifecycle from online admissions to degree convocations.",
  "examination-authorities": "State-wide CET entrance registration with zero server crashes.",
  "recruitment-workforce": "Constitutional reservation quota enforcement with audit-proof merit lists.",
  "skill-vocational": "Digital accreditation and monthly financial audits for vocational colleges.",
};

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/90">
      
      {/* Solid Vector Graphics Background (Zero Dots, Secondary/Tertiary Colors) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Solid Azure & Sky Ribbon Wave */}
        <svg
          className="absolute -top-12 -left-20 w-[680px] h-[360px] opacity-25"
          viewBox="0 0 680 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,180 C180,60 380,240 680,100 L680,0 L0,0 Z"
            fill="url(#indAzureGrad)"
          />
          <defs>
            <linearGradient id="indAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        {/* Solid 3D Geometric Indigo & Emerald Accent Plates */}
        <div className="absolute top-28 -right-14 w-60 h-60 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent border border-indigo-200/50 rotate-12" />
        <div className="absolute -bottom-20 -left-12 w-64 h-64 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-200/50 -rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Institutional Impact by Sector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
            Find the Right Solution for Your Industry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Purpose-built digital architectures trusted across state secretariats, university directorates, and examination councils.
          </p>
        </div>

        {/* Clean, Minimal Bento Grid with Redirection Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industriesData.map((ind) => {
            const Icon = industryIcons[ind.slug as keyof typeof industryIcons] || Landmark;
            const summary = sectorSummaries[ind.slug] || ind.description;

            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative rounded-2xl p-6 sm:p-7 bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Top Subtle Orange Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff6201] group-hover:via-[#fbbf24] group-hover:to-[#0284c7] transition-all duration-300" />

                <div>
                  {/* Top Row: Category Icon & Sleek Redirection Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 text-[#0284c7] group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 text-slate-400 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-xl font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                    {ind.title}
                  </h3>

                  {/* Subtitle Badge */}
                  <p className="text-xs font-bold text-sky-600 mt-1 uppercase tracking-wide">
                    {ind.subtitle}
                  </p>

                  {/* Short 1-Sentence Summary */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                    {summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
