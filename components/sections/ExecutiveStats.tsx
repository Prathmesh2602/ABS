"use client";

import * as React from "react";
import { Award, Users, Landmark, Building2 } from "lucide-react";

export function ExecutiveStats() {
  const stats = [
    {
      value: "20+ Years",
      highlight: "Since 2004",
      label: "Continuous Public Trust",
      description: "Two decades of uninterrupted state government partnership with zero judicial reversals.",
      color: "text-[#ea580c]",
      accentBg: "bg-orange-50 border-orange-200/80",
      icon: Award,
    },
    {
      value: "12 Lakh+",
      highlight: "Candidates Annually",
      label: "Processed at Peak Concurrency",
      description: "Single-window centralized admissions (CAP) and merit counseling with zero downtime.",
      color: "text-[#0284c7]",
      accentBg: "bg-sky-50 border-sky-200/80",
      icon: Users,
    },
    {
      value: "₹2,400 Cr+",
      highlight: "Public Funds",
      label: "College Grants & Salaries Audited",
      description: "Automated fiscal compliance and paperless file routing for state higher education institutions.",
      color: "text-emerald-600",
      accentBg: "bg-emerald-50 border-emerald-200/80",
      icon: Landmark,
    },
    {
      value: "1,200+",
      highlight: "Connected Centers",
      label: "Colleges & Testing Facilities",
      description: "Direct statewide network spanning universities, autonomous colleges, and secure test hubs.",
      color: "text-[#d97706]",
      accentBg: "bg-amber-50 border-amber-200/80",
      icon: Building2,
    },
  ];

  return (
    <section className="relative z-20 py-10 sm:py-14 bg-slate-50/80 border-b border-slate-200/90 overflow-hidden">
      {/* Subtle Vector Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-sky-400/10 to-transparent blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200/80 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a192f] font-mono">
              Live Production Provenance &amp; Verified Scale
            </span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Powering Apex State Departments Across Maharashtra, Haryana &amp; Jharkhand
          </span>
        </div>

        {/* 4 Clean Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0a192f] group-hover:text-[#ea580c] transition-colors">
                      {s.value}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${s.accentBg} border flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-[#0a192f]" />
                    </div>
                  </div>

                  <div className="text-sm font-bold text-slate-800 leading-snug">
                    {s.label}
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{s.highlight}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#ea580c] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
