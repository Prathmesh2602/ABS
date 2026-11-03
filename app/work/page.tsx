import * as React from "react";
import { caseStudiesData } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProjectsDirectory } from "@/components/sections/ProjectsDirectory";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "19 Flagship Government, University & AI Projects — Case Studies | ABS",
  description:
    "Explore ABS systems: State CET Cell admissions, Custom Govt LLM, JCECEB Single Admission, Blockchain Secured Paper Delivery, AUMS, DESA Haryana, and DHE Grant Assessment.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Solid Vector Graphics Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -left-20 w-[680px] h-[360px] opacity-25"
          viewBox="0 0 680 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,180 C180,60 380,240 680,100 L680,0 L0,0 Z"
            fill="url(#workGoldGrad)"
          />
          <defs>
            <linearGradient id="workGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-64 -right-16 w-72 h-72 rounded-3xl bg-gradient-to-br from-sky-500/15 via-blue-500/10 to-transparent border border-sky-200/50 rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10">
        <Breadcrumbs items={[{ label: "Projects" }]} />

        {/* Section Header */}
        <section className="py-12 sm:py-16 border-b border-slate-200/90 mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>19 Live State &amp; Apex Deployments</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a192f] tracking-tight leading-[1.12]">
              Architectural Case Studies &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c]">
                Live Projects
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              Explore our proven digital portfolio: high-concurrency state entrance admissions, air-gapped exam vaults, bilingual Marathi/English AI models, university ERPs, and public grant audit architectures.
            </p>
          </div>
        </section>

        {/* Interactive Projects Directory */}
        <div className="py-6 pb-20">
          <ProjectsDirectory projects={caseStudiesData} />
        </div>
      </div>

      {/* Executive Call to Action */}
      <FinalCTAExecutive />
    </div>
  );
}
