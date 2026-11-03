"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  GraduationCap,
  Landmark,
  FileCheck2,
  Cpu,
  Lock,
  ShieldCheck,
  Key,
  Sparkles,
  Users,
  Activity,
  TrendingUp,
  CheckCircle2,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type CategoryFilter = "all" | "ai" | "admissions" | "exams" | "governance";

interface PortalVisualCard {
  slug: string;
  title: string;
  category: string;
  clientSeal: string;
  clientName: string;
  metricBadge: string;
  filterType: "ai" | "admissions" | "exams" | "governance";
}

const VISUAL_PORTALS: PortalVisualCard[] = [
  {
    slug: "state-cet-cell",
    title: "MahaCAP Admissions",
    category: "Centralized Admission Rounds",
    clientSeal: "/brand/portals/seal_maharashtra.svg",
    clientName: "Govt. of Maharashtra",
    metricBadge: "12L+ Students",
    filterType: "admissions",
  },
  {
    slug: "secured-paper-delivery",
    title: "Question Paper Vault",
    category: "Time-Locked Biometric Security",
    clientSeal: "/brand/portals/logo_msbte.png",
    clientName: "MSBTE & Universities",
    metricBadge: "Zero Leaks",
    filterType: "exams",
  },
  {
    slug: "custom-govt-llm",
    title: "AI Secretariat Assistant",
    category: "Bilingual OCR & Noting Engine",
    clientSeal: "/brand/portals/logo_govt_llm.svg",
    clientName: "State Secretariats",
    metricBadge: "98.4% Dual OCR",
    filterType: "ai",
  },
  {
    slug: "pavitra-teacher-recruitment",
    title: "PAVITRA Recruitment",
    category: "Merit Roster Allocation",
    clientSeal: "/brand/portals/seal_maharashtra.svg",
    clientName: "School Education Dept",
    metricBadge: "67,000+ Placements",
    filterType: "governance",
  },
  {
    slug: "dhe-grant-in-aid",
    title: "College Grants Assessment",
    category: "Higher Education Fiscal Audit",
    clientSeal: "/brand/portals/seal_maharashtra.svg",
    clientName: "Higher Education Dept",
    metricBadge: "₹2,400 Cr+ Audited",
    filterType: "governance",
  },
  {
    slug: "desa-haryana-statistics",
    title: "State Economic Survey",
    category: "22 District Indicator System",
    clientSeal: "/brand/portals/seal_haryana.svg",
    clientName: "Govt. of Haryana",
    metricBadge: "22 Districts Online",
    filterType: "governance",
  },
];

/* -------------------------------------------------------------------------- */
/* Pure Vector Art Medallions (Zero Wireframe Clutter, Clean & Calming)       */
/* -------------------------------------------------------------------------- */

function AdmissionsGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sky-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-sky-200/40 blur-xl pointer-events-none" />
      
      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-sky-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-sky-300/80 animate-[spin_20s_linear_infinite]" />
        
        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-amber-400 text-slate-900 font-bold text-[10px] flex items-center justify-center shadow-xs">
          #1
        </div>
      </div>
    </div>
  );
}

function ExamVaultGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-amber-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-amber-200/40 blur-xl pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-amber-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-amber-300/80 animate-[spin_25s_linear_infinite]" />

        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#d97706] to-[#f59e0b] text-white flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
          <Lock className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff6201] to-amber-500 text-white flex items-center justify-center shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <Key className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

function AIEngineGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-indigo-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-indigo-200/40 blur-xl pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-indigo-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-indigo-300/80 animate-[spin_20s_linear_infinite]" />

        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#4f46e5] to-[#818cf8] text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
          <Cpu className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-[#ea580c] text-white flex items-center justify-center shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xs font-mono font-bold text-[10px]">
          AI
        </div>
      </div>
    </div>
  );
}

function RecruitmentGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-emerald-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-emerald-200/40 blur-xl pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-emerald-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-emerald-300/80 animate-[spin_25s_linear_infinite]" />

        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#059669] to-[#34d399] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
          <Users className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-xs">
          <Award className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

function GrantsGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-orange-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-orange-200/40 blur-xl pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-orange-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-orange-300/80 animate-[spin_20s_linear_infinite]" />

        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
          <Landmark className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-900 font-bold text-[10px] flex items-center justify-center shadow-xs">
          ₹
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <FileCheck2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}

function EconomicSurveyGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-sky-50/70 to-white select-none">
      <div className="absolute w-32 h-32 rounded-full bg-sky-200/40 blur-xl pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-sky-200/80 flex items-center justify-center" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-sky-300/80 animate-[spin_25s_linear_infinite]" />

        <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-[#06b6d4] text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
          <Activity className="w-7 h-7" />
        </div>

        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xs font-mono font-bold text-[10px]">
          22
        </div>
      </div>
    </div>
  );
}

function getPortalGraphic(slug: string) {
  switch (slug) {
    case "state-cet-cell":
      return <AdmissionsGraphic />;
    case "secured-paper-delivery":
      return <ExamVaultGraphic />;
    case "custom-govt-llm":
      return <AIEngineGraphic />;
    case "pavitra-teacher-recruitment":
      return <RecruitmentGraphic />;
    case "dhe-grant-in-aid":
      return <GrantsGraphic />;
    case "desa-haryana-statistics":
      return <EconomicSurveyGraphic />;
    default:
      return <AdmissionsGraphic />;
  }
}

export function LivePortalsGallery() {
  const [filter, setFilter] = React.useState<CategoryFilter>("all");

  const filterTabs = [
    { id: "all", label: "All Portals", icon: Layers },
    { id: "ai", label: "AI & OCR", icon: Cpu },
    { id: "admissions", label: "Admissions", icon: GraduationCap },
    { id: "exams", label: "Exam Security", icon: FileCheck2 },
    { id: "governance", label: "State Governance", icon: Landmark },
  ];

  const filteredPortals = VISUAL_PORTALS.filter((p) => {
    if (filter === "all") return true;
    return p.filterType === filter;
  });

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/90 relative overflow-hidden">
      {/* Solid Vector Graphics Background (Clean ribbons, zero dots) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -right-16 w-[640px] h-[340px] opacity-20"
          viewBox="0 0 640 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C200,140 450,40 640,160 L640,0 Z"
            fill="url(#portalsAzureGrad)"
          />
          <defs>
            <linearGradient id="portalsAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute bottom-10 -left-12 w-56 h-56 rounded-3xl bg-gradient-to-tr from-orange-500/15 via-amber-500/10 to-transparent border border-orange-200/50 -rotate-12" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>Verified Portals in Daily Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
              Active State Portals &amp; Systems
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal leading-relaxed">
              Mission-critical digital architectures engineered for state secretariats and universities.
            </p>
          </div>

          <Button
            href="/work"
            variant="outline"
            size="md"
            className="bg-white hover:bg-slate-50 border-slate-300 text-[#0a192f] text-xs font-bold shadow-xs shrink-0 self-start md:self-end"
            rightIcon={<ArrowRight className="w-3.5 h-3.5 text-[#ff6201]" />}
          >
            Explore All Portals
          </Button>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as CategoryFilter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#0a192f] text-white shadow-md ring-2 ring-[#ff6201]/40"
                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Clean, High-Prestige Platform Cards (Pure Vector Artwork, Zero Wireframe Forms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPortals.map((portal) => (
            <Link
              key={portal.slug}
              href={`/work/${portal.slug}`}
              className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff6201] group-hover:via-[#fbbf24] group-hover:to-[#0284c7] transition-all duration-300 z-10" />

              {/* Card Header: Client Seal + Client Name + Live Dot + Redirection Arrow */}
              <div className="p-5 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/90 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                    <Image
                      src={portal.clientSeal}
                      alt={portal.clientName}
                      width={22}
                      height={22}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 block truncate">
                      {portal.clientName}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>PRODUCTION LIVE</span>
                    </span>
                  </div>
                </div>

                {/* Sleek Top-Right Redirection Arrow */}
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Aesthetic Vector Art Medallion (Zero Wireframe Forms or Tiny Text) */}
              <div className="h-44 w-full overflow-hidden border-y border-slate-100">
                {getPortalGraphic(portal.slug)}
              </div>

              {/* Card Footer: Portal Title + Category + Key Impact Metric */}
              <div className="p-5 pt-4 bg-white flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug truncate">
                    {portal.title}
                  </h3>
                  <span className="text-xs text-slate-500 block truncate mt-0.5">
                    {portal.category}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-lg bg-orange-50 border border-orange-200/80 text-xs font-bold text-[#ea580c] whitespace-nowrap shrink-0 shadow-2xs">
                  {portal.metricBadge}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
