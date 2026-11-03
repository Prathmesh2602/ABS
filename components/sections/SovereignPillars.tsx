"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Brain,
  GraduationCap,
  Users,
  Landmark,
  FileCheck,
  Lock,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Activity,
  FileText,
  Layers,
  Server,
  Scale,
  Key,
  Fingerprint,
  Clock,
  ChevronRight,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type PillarId = "ai-engine" | "admissions-cap" | "paperless-governance" | "exam-security";

interface PillarData {
  id: PillarId;
  number: string;
  shortName: string;
  category: string;
  tagline: string;
  metricBadge: string;
  icon: React.ElementType;
  title: string;
  description: string;
  guarantees: {
    title: string;
    detail: string;
  }[];
  clientProof: {
    name: string;
    badge: string;
    logo: string;
  };
  link: string;
  submodes: [
    { id: string; label: string },
    { id: string; label: string }
  ];
}

const PILLARS: PillarData[] = [
  {
    id: "ai-engine",
    number: "01",
    shortName: "AI Document Intelligence",
    category: "Generative AI & OCR",
    tagline: "Bilingual OCR & Secretariat Notings",
    metricBadge: "98.4% Accuracy",
    icon: Sparkles,
    title: "AI that transcribes scanned Marathi & English files and drafts departmental notings",
    description:
      "Replaces weeks of manual paper scrutiny with instant intelligence. Our models scan high-volume Marathi and English government circulars, extract critical reference numbers and dates, and draft formal secretariat notings (टिप्पणी) ready for officer signatures.",
    guarantees: [
      {
        title: "Dual-Script Bilingual OCR",
        detail: "Transcribes complex physical circulars, tables, and handwritten annotations in Devnagari and English with 98.4% precision.",
      },
      {
        title: "100% Private Air-Gapped Cloud",
        detail: "Zero public cloud leakage. Neural models execute on private state data centers and on-premise government servers.",
      },
      {
        title: "Secretariat Procedure Compliance",
        detail: "Auto-drafts structured Tippani (टिप्पणी) following Maharashtra Manual of Office Procedure conventions.",
      },
    ],
    clientProof: {
      name: "State Secretariats & District Collectorates",
      badge: "In Production",
      logo: "/brand/portals/logo_govt_llm.svg",
    },
    link: "/work/custom-govt-llm",
    submodes: [
      { id: "ocr", label: "1. Scan & OCR Pipeline" },
      { id: "draft", label: "2. Draft Noting Generation" },
    ],
  },
  {
    id: "admissions-cap",
    number: "02",
    shortName: "Centralized Admissions (CAP)",
    category: "Mega Admissions Engine",
    tagline: "12L+ Student Quota & Merit Engine",
    metricBadge: "12L+ Students",
    icon: GraduationCap,
    title: "High-capacity admissions engine allocating seats fairly across hundreds of colleges",
    description:
      "Powers single-window admissions for over 12 Lakh students annually across hundreds of colleges and professional courses (Engineering, MBA, Pharmacy, Agriculture). Eliminates physical queues, multi-city travel, and seat allotment disputes.",
    guarantees: [
      {
        title: "Zero-Crash Concurrency",
        detail: "Stress-tested for peak merit list days with auto-scaling microservices, Redis caching, and zero dropped connections.",
      },
      {
        title: "100% Rule Compliance",
        detail: "Hardcoded constitutional reservation categories, local quotas, and multi-round floating seat allocation logic.",
      },
      {
        title: "Paperless E-Scrutiny",
        detail: "Real-time document verification by designated facilitation centers with instant SMS and email applicant alerts.",
      },
    ],
    clientProof: {
      name: "Maharashtra State CET Cell & JCECEB Jharkhand",
      badge: "Annual Mandate",
      logo: "/brand/portals/seal_maharashtra.svg",
    },
    link: "/solutions/education-admissions",
    submodes: [
      { id: "concurrency", label: "1. Concurrency Telemetry" },
      { id: "quota", label: "2. Quota & Seat Matrix" },
    ],
  },
  {
    id: "paperless-governance",
    number: "03",
    shortName: "Paperless Governance & Grants",
    category: "Fiscal E-Governance",
    tagline: "College Grants & Digital Approvals",
    metricBadge: "₹2,400 Cr+ Audited",
    icon: Landmark,
    title: "Audits college grants and automates administrative file movements without paper",
    description:
      "Transforms multi-month bureaucratic paper trails into automated, traceable digital workflows. Calculates monthly salary assessments, 7th Pay Commission arrears, and direct treasury disbursements for thousands of aided colleges without physical files.",
    guarantees: [
      {
        title: "Automated Grant Reconciliation",
        detail: "Verifies sanctioned faculty versus working staff rolls, auditing over ₹2,400 Cr+ in state grants with zero manual calculation errors.",
      },
      {
        title: "Hierarchical Digital Routing",
        detail: "Direct file escalation from College Principal to Joint Directorate to Director of Higher Education with Aadhaar e-Sign.",
      },
      {
        title: "AG Audit Readiness",
        detail: "Permanent, immutable digital audit trails ready for Accountant General inspections, eliminating lost files.",
      },
    ],
    clientProof: {
      name: "Higher Education Dept (DHE) & State Universities",
      badge: "₹2,400 Cr+ Disbursed",
      logo: "/brand/portals/seal_haryana.svg",
    },
    link: "/solutions/workflow-automation",
    submodes: [
      { id: "hierarchy", label: "1. Hierarchical Approval Flow" },
      { id: "fiscal", label: "2. Fiscal Disbursal Engine" },
    ],
  },
  {
    id: "exam-security",
    number: "04",
    shortName: "Secured Exam Paper Vaults",
    category: "Cryptographic Systems",
    tagline: "Time-Locked Biometric Paper Delivery",
    metricBadge: "Zero Leaks",
    icon: Lock,
    title: "Time-locked cryptographic vaults preventing question paper leaks before exams",
    description:
      "Completely eliminates question paper leaks in high-stakes university and recruitment examinations. Confidential exam papers remain encrypted with military-grade AES-256 and only unlock 15 minutes before the exam starts via dual-biometric authorization.",
    guarantees: [
      {
        title: "15-Minute Time-Lock",
        detail: "Digital vaults open strictly within the authorized window; early decryption is mathematically impossible.",
      },
      {
        title: "Dual Biometric & OTP Verification",
        detail: "Center Superintendent must provide live biometric fingerprint and instant mobile OTP to access and print papers.",
      },
      {
        title: "Tamper-Proof Dynamic Watermarks",
        detail: "Every printed question paper carries unique, micro-coded center identifiers to deter photographic leaks.",
      },
    ],
    clientProof: {
      name: "Autonomous State Universities & Technical Boards",
      badge: "Zero Paper Leaks",
      logo: "/brand/portals/logo_blockchain_vault.svg",
    },
    link: "/work/secured-paper-delivery",
    submodes: [
      { id: "lockdown", label: "1. Encrypted Storage Mode" },
      { id: "unlock", label: "2. 15-Min Biometric Unlock" },
    ],
  },
];

export function CorePillars() {
  const [activePillarId, setActivePillarId] = React.useState<PillarId>("ai-engine");
  const [activeSubmode, setActiveSubmode] = React.useState<string>("ocr");

  // Keep submode in sync when switching pillars
  const handlePillarChange = (id: PillarId) => {
    setActivePillarId(id);
    const pillar = PILLARS.find((p) => p.id === id);
    if (pillar) {
      setActiveSubmode(pillar.submodes[0].id);
    }
  };

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/90 relative overflow-hidden">
      {/* Background Micro-Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* Section Header with Authority & High Contrast                              */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            {/* Live Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0284c7] text-xs sm:text-sm font-bold mb-4 border border-sky-200/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span className="tracking-wider uppercase">What We Build // Core Systems</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] tracking-tight leading-[1.15]">
              Four Core Systems Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0178bd] to-[#d97706]">
                Public Scale &amp; Trust
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Instead of fragile, patchwork departmental IT that fails during rush hours, we build hardened digital platforms that government staff, college principals, and citizens rely on every day.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap lg:flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>12L+ Students Processed Annually</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              <span>98.4% Bilingual OCR Precision</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
              <span>₹2,400 Cr+ College Grants Audited</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Interactive Pillar Selector Tabs (Tactile Segmented Bar)                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            const Icon = pillar.icon;

            return (
              <button
                key={pillar.id}
                onClick={() => handlePillarChange(pillar.id)}
                type="button"
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border relative cursor-pointer ${
                  isActive
                    ? "bg-[#0a192f] border-[#0284c7] shadow-xl text-white ring-2 ring-[#0284c7]/20"
                    : "bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800 shadow-sm"
                }`}
              >
                {/* Top Row: Number & Metric Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-md border ${
                      isActive
                        ? "bg-slate-800 text-sky-400 border-slate-700"
                        : "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    SYSTEM {pillar.number}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#0284c7]/20 text-[#38bdf8] border border-[#0284c7]/40"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {pillar.metricBadge}
                  </span>
                </div>

                {/* Pillar Icon & Name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#0284c7] text-white"
                        : "bg-slate-100 text-slate-700 group-hover:text-[#0284c7]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm sm:text-base font-extrabold leading-snug ${
                        isActive ? "!text-white" : "text-[#0a192f]"
                      }`}
                    >
                      {pillar.shortName}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 truncate max-w-[200px] ${
                        isActive ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* Active Indicator Arrow */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a192f] border-b border-r border-[#0284c7] rotate-45 hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* The Main Interactive System Console (Split View)                          */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-[#0a192f] border border-slate-800 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Backdrops */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0284c7]/20 blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#fbbf24]/15 blur-[130px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* --------------------------------------------------------------------- */}
            {/* LEFT: System Capability Deep Dive & Architectural Commitments          */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* System Index Pill */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800/80">
                    SYSTEM {activePillar.number} OF 04
                  </span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {activePillar.category}
                  </span>
                </div>

                {/* Primary Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold !text-white leading-tight">
                  {activePillar.title}
                </h3>

                {/* Clear Plain-English Description */}
                <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {activePillar.description}
                </p>

                {/* 3 High-Impact Architectural Guarantees */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Architectural Guarantees:
                  </div>

                  <div className="space-y-3.5">
                    {activePillar.guarantees.map((g) => (
                      <div key={g.title} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-bold text-sm sm:text-base text-white">
                            {g.title}:{" "}
                          </span>
                          <span className="text-sm sm:text-base text-slate-300 leading-snug">
                            {g.detail}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Client Seal & Direct CTA Link */}
              <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm">
                    <Image
                      src={activePillar.clientProof.logo}
                      alt={activePillar.clientProof.name}
                      width={32}
                      height={32}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-sky-300 font-semibold">
                      {activePillar.clientProof.badge}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {activePillar.clientProof.name}
                    </div>
                  </div>
                </div>

                <Button
                  href={activePillar.link}
                  variant="gold"
                  size="md"
                  className="text-[#0a192f] font-bold shadow-[0_0_20px_rgba(232,178,6,0.3)] hover:bg-amber-400 text-sm"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#0a192f]" />}
                >
                  Explore System Architecture
                </Button>
              </div>

            </div>

            {/* --------------------------------------------------------------------- */}
            {/* RIGHT: Interactive System Simulator (Dynamic Visual Schematic Canvas) */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-2xl bg-[#060d1a]/95 border border-slate-700/80 p-5 sm:p-7 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                
                {/* Console Bar with Interactive Sub-Mode Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-bold uppercase tracking-wider">
                      SCHEMATIC SIMULATOR
                    </span>
                  </div>

                  {/* 2-Option Interactive Switcher */}
                  <div className="inline-flex rounded-lg bg-slate-900/90 p-1 border border-slate-700">
                    {activePillar.submodes.map((sub) => {
                      const isSubActive = activeSubmode === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => setActiveSubmode(sub.id)}
                          type="button"
                          className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                            isSubActive
                              ? "bg-[#0284c7] text-white shadow-sm font-bold"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ================================================================= */}
                {/* SIMULATOR CONTENT: PILLAR 01 (GENAI & OCR)                        */}
                {/* ================================================================= */}
                {activePillar.id === "ai-engine" && (
                  <div className="space-y-4">
                    {activeSubmode === "ocr" ? (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <FileText className="w-4 h-4 text-sky-400" />
                            <span className="text-xs sm:text-sm font-mono text-slate-200">
                              Input: Circular_GR_2026_WaterSupply.pdf
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            RAW SCAN (300 DPI)
                          </span>
                        </div>

                        {/* Pipeline Node 1 */}
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-sky-300 flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5 text-sky-400" />
                              Bilingual Neural Parser (Devnagari + English)
                            </span>
                            <span className="text-emerald-400 font-mono font-bold">98.4% Confidence</span>
                          </div>
                          {/* Visual progress bar */}
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 w-[98.4%]" />
                          </div>
                        </div>

                        {/* Extracted Metadata Nodes */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Reference Number:</div>
                            <div className="text-white font-bold font-mono mt-0.5 truncate">
                              GR-2026/Grievance/882
                            </div>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Subject Classification:</div>
                            <div className="text-white font-bold mt-0.5 truncate">
                              Water Scheme Sanction
                            </div>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Sanction Amount:</div>
                            <div className="text-amber-300 font-bold font-mono mt-0.5">
                              ₹ 14,80,00,000 /-
                            </div>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Language Matrix:</div>
                            <div className="text-sky-300 font-bold mt-0.5">
                              मराठी + English Dual OCR
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono text-amber-300 font-bold flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              Secretariat Draft Noting (मंत्रालय टिप्पणी)
                            </span>
                            <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                              FORMAT: MOP-1981
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 font-mono leading-relaxed bg-black/40 p-2.5 rounded border border-slate-800">
                            &quot;विषय: ग्रामविकास व जलसंधारण विभागांतर्गत पाणीपुरवठा मंजुरी आदेश.&quot;
                            <br />
                            <span className="text-slate-400">
                              -- 35-page proposal synthesized into 1-page executive noting with statutory budget rule references.
                            </span>
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <div className="text-slate-400 text-[11px] font-mono">Security &amp; Data Privacy:</div>
                            <div className="text-white font-semibold">On-Premises Air-Gapped Inference</div>
                          </div>
                          <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                            0% Data Leakage
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================================================================= */}
                {/* SIMULATOR CONTENT: PILLAR 02 (MASS ADMISSIONS CAP)                */}
                {/* ================================================================= */}
                {activePillar.id === "admissions-cap" && (
                  <div className="space-y-4">
                    {activeSubmode === "concurrency" ? (
                      <div className="space-y-3.5">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Real-Time Concurrent Users:</div>
                            <div className="text-2xl font-extrabold text-sky-400 font-mono mt-1">
                              1,248,320
                            </div>
                            <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                              ● 0 dropped connections
                            </div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                            <div className="text-slate-400 text-[11px] font-mono">Peak Request Rate:</div>
                            <div className="text-2xl font-extrabold text-amber-400 font-mono mt-1">
                              42,500 <span className="text-xs text-slate-400">/sec</span>
                            </div>
                            <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                              ● Auto-scaled across 16 nodes
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-300">Cluster Capacity Utilization</span>
                            <span className="text-emerald-400 font-mono font-bold">34% Load (Headroom: 66%)</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-emerald-400 w-[34%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Edge DDoS &amp; Bot Defense:</span>
                          <span className="text-emerald-400 font-mono font-bold">ACTIVE &amp; HARDENED</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sky-300 font-bold">
                              Deterministic Seat Allotment Matrix
                            </span>
                            <span className="text-emerald-400 font-mono text-[11px]">VERIFIED 100%</span>
                          </div>
                          <div className="space-y-1.5 font-mono text-slate-300 text-xs">
                            <div className="flex justify-between py-1 border-b border-slate-800">
                              <span className="text-slate-400">Merit Normalization:</span>
                              <span className="text-white">Multi-Shift Percentile Engine</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-slate-800">
                              <span className="text-slate-400">Reservation Quotas:</span>
                              <span className="text-white">GOPEN / SC / ST / OBC / SEBC / EWS</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="text-slate-400">Dispute Redressal:</span>
                              <span className="text-emerald-400">Zero Legal Stays / Court Cases</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <div className="text-slate-400 text-[11px] font-mono">E-Scrutiny Verification:</div>
                            <div className="text-white font-semibold">100% Online Document Check</div>
                          </div>
                          <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                            Zero Travel Needed
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================================================================= */}
                {/* SIMULATOR CONTENT: PILLAR 03 (PAPERLESS GOVERNANCE & GRANTS)      */}
                {/* ================================================================= */}
                {activePillar.id === "paperless-governance" && (
                  <div className="space-y-4">
                    {activeSubmode === "hierarchy" ? (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs">
                          <div className="text-slate-400 font-mono text-[11px]">
                            Multi-Tier Digital Escalation:
                          </div>
                          
                          {/* 4 Steps */}
                          <div className="space-y-2 font-mono">
                            <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700">
                              <span className="text-slate-300">1. College Principal</span>
                              <span className="text-emerald-400 text-[11px]">SUBMITTED &amp; e-Signed</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700">
                              <span className="text-slate-300">2. Joint Directorate (Audit)</span>
                              <span className="text-emerald-400 text-[11px]">SCRUTINIZED // PASSED</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700">
                              <span className="text-slate-300">3. Director of Higher Education</span>
                              <span className="text-sky-400 text-[11px]">SANCTION ORDER ISSUED</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700">
                              <span className="text-slate-300">4. Treasury (CMP Disbursal)</span>
                              <span className="text-amber-400 text-[11px]">DIRECT BANK CREDIT</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Aadhaar &amp; DSC Authentication:</span>
                          <span className="text-emerald-400 font-mono font-bold">100% NON-REPUDIABLE</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-amber-300 font-bold">
                              Fiscal Disbursal Engine
                            </span>
                            <span className="text-emerald-400 font-mono text-[11px]">AG-AUDIT COMPLIANT</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="p-2.5 rounded bg-slate-800/60">
                              <div className="text-slate-400 text-[10px]">Annual Grants Audited</div>
                              <div className="text-lg font-bold text-white font-mono">₹ 2,400+ Cr</div>
                            </div>
                            <div className="p-2.5 rounded bg-slate-800/60">
                              <div className="text-slate-400 text-[10px]">Excess Claims Prevented</div>
                              <div className="text-lg font-bold text-emerald-400 font-mono">100% Filtered</div>
                            </div>
                          </div>

                          <div className="text-slate-300 font-mono text-[11px] pt-1">
                            Calculates Pay Commission revisions, DA variations, and roster compliance automatically.
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Physical Paper Files Displaced:</span>
                          <span className="text-sky-400 font-mono font-bold">100% Complete Paperless</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================================================================= */}
                {/* SIMULATOR CONTENT: PILLAR 04 (SECURED EXAM PAPER VAULT)          */}
                {/* ================================================================= */}
                {activePillar.id === "exam-security" && (
                  <div className="space-y-4">
                    {activeSubmode === "lockdown" ? (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-sky-400 font-bold flex items-center gap-1.5">
                              <Lock className="w-3.5 h-3.5 text-sky-400" />
                              AES-256 Multi-Key Question Paper Vault
                            </span>
                            <span className="text-amber-400 font-mono text-[11px] bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                              TIME-LOCKED
                            </span>
                          </div>
                          
                          <div className="p-3 rounded bg-black/50 border border-slate-800 font-mono text-slate-300 text-xs space-y-1">
                            <div>Paper ID: <span className="text-white">ENG_SEM_IV_2026_MECH</span></div>
                            <div>Distributed Centers: <span className="text-white">840 Centers Synced</span></div>
                            <div>Vault Cryptography: <span className="text-emerald-400">Military AES-256 GCM</span></div>
                            <div>Tamper Detection: <span className="text-emerald-400">0 Breaches / Integrity Intact</span></div>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-slate-400">Early Access Window:</span>
                          <span className="text-red-400 font-mono font-bold">CRYPTOGRAPHICALLY BLOCKED</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                              <Fingerprint className="w-3.5 h-3.5 text-emerald-400" />
                              15-Minute Biometric Decryption Window
                            </span>
                            <span className="text-emerald-400 font-mono text-[11px]">ACTIVE UNLOCK</span>
                          </div>

                          <div className="space-y-1.5 font-mono text-slate-300 text-xs">
                            <div className="flex justify-between py-1 border-b border-slate-800">
                              <span className="text-slate-400">Time Window:</span>
                              <span className="text-white font-bold">09:45 AM (T-15 mins to start)</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-slate-800">
                              <span className="text-slate-400">Superintendent Auth:</span>
                              <span className="text-emerald-400">Fingerprint + OTP Match</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="text-slate-400">Dynamic Watermark:</span>
                              <span className="text-sky-300">Center #402 / Unique Serial</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <div className="text-slate-400 text-[11px] font-mono">Leak Defense:</div>
                            <div className="text-white font-semibold">Micro-Tracing Dynamic Forensic QR</div>
                          </div>
                          <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                            Zero Paper Leaks
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Verification Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    CERT-In Verified Framework
                  </span>
                  <span className="text-slate-300">
                    Mission-Critical Public Systems
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* Quick-Scan 4-Pillar Matrix Below the Console                              */}
        {/* ========================================================================= */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            const isCurrent = p.id === activePillarId;

            return (
              <div
                key={p.id}
                onClick={() => handlePillarChange(p.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-white border-[#0284c7] shadow-md ring-1 ring-[#0284c7]/30"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      SYSTEM {p.number}
                    </span>
                    <span className="text-[11px] font-bold text-[#0284c7] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {p.metricBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <h4 className="font-extrabold text-[#0a192f] text-sm sm:text-base leading-snug">
                      {p.shortName}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                  <span>{isCurrent ? "Active in Console" : "Inspect System"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* Direct Link to Complete Solutions Directory                               */}
        {/* ========================================================================= */}
        <div className="mt-12 text-center">
          <Button
            href="/solutions"
            variant="outline"
            size="lg"
            className="text-[#0a192f] border-slate-300 hover:bg-white hover:border-[#0284c7] text-sm sm:text-base font-bold shadow-sm"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#0284c7]" />}
          >
            Browse All 12+ Departmental Solutions &amp; Case Studies
          </Button>
        </div>

      </div>
    </section>
  );
}
