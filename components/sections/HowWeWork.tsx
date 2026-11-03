"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Users,
  CheckCircle2,
} from "lucide-react";

export function HowWeWork() {
  const pillars = [
    {
      number: "01",
      title: "Statutory Rule Mapping",
      subtitle: "Constitutional & Roster Compliance",
      description: "We encode complex government reservation quotas, merit tie-breakers, and statutory rules directly into deterministic software.",
      icon: Cpu,
      accent: "bg-orange-50 text-[#ff6201] border-orange-200/80",
    },
    {
      number: "02",
      title: "Air-Gapped Private Deployment",
      subtitle: "State Data Center Security",
      description: "Software operates 100% within private government clouds, secured by CERT-In audited protocols with zero external leakage.",
      icon: ShieldCheck,
      accent: "bg-sky-50 text-[#0284c7] border-sky-200/80",
    },
    {
      number: "03",
      title: "Live On-Site Launch Command",
      subtitle: "Mission-Critical Operational Guard",
      description: "Our principal software engineers sit directly beside state officers on result publication days to guarantee zero-defect execution.",
      icon: Users,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/90">
      
      {/* Solid Vector Graphics Background (Zero Dots, Secondary Color Accents) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -right-16 w-[640px] h-[340px] opacity-20"
          viewBox="0 0 640 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C200,140 450,40 640,160 L640,0 Z"
            fill="url(#howWorkAzureGrad)"
          />
          <defs>
            <linearGradient id="howWorkAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-20 -left-12 w-64 h-64 rounded-3xl bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent border border-orange-200/50 -rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 50/50 Human Collaboration + Methodology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Resolution Photo of Indian Software Architects in Collaboration */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <Image
                src="/images/indian_architects_planning.jpg"
                alt="Indian software architects and engineering leadership planning digital architecture"
                fill
                className="object-cover object-center"
              />

              {/* Ambient Bottom Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 via-transparent to-transparent" />

              {/* Floating Verified Experience Badge */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0a192f]">
                    20+ Years Continuous Partnership
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    Zero Judicial Reversals Across 2 Decades
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Level Overview of How ABS Operates */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>Our Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
              How We Deliver Zero-Downtime Governance Technology
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              A battle-tested engineering process honed across two decades of high-stakes state deployments.
            </p>

            {/* 3 Streamlined Briefing Cards (Zero Jargon Bloat) */}
            <div className="mt-8 space-y-4">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.number}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className={`w-11 h-11 rounded-xl ${p.accent} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors">
                          {p.title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {p.number}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Link to Implementation Roadmap */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] hover:text-[#ff6201] transition-colors group"
              >
                <span>Explore Live State Deployments</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
