"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Users,
  Building2,
  Lock,
  BarChart3,
} from "lucide-react";

type PortalKey = "ai_llm" | "cet" | "exam_vault" | "haryana";

export function HeroSection() {
  const [activeTab, setActiveTab] = React.useState<PortalKey>("ai_llm");

  const portals: Record<
    PortalKey,
    {
      id: PortalKey;
      tabLabel: string;
      title: string;
      simpleExplanation: string;
      stat: string;
      statLabel: string;
      logo: string;
      client: string;
      url: string;
      slug: string;
      highlight: string;
      details: Array<{ label: string; value: string }>;
    }
  > = {
    ai_llm: {
      id: "ai_llm",
      tabLabel: "AI Document Assistant",
      title: "AI That Reads Government Letters & Drafts Replies",
      simpleExplanation:
        "Reads scanned Marathi and English letters, summarizes long files, and drafts official replies according to government rules.",
      stat: "75% Faster",
      statLabel: "Drafting speed for officers",
      logo: "/brand/portals/logo_govt_llm.svg",
      client: "State Secretariats & District Offices",
      url: "ai.abs-solutions.in/secretariat",
      slug: "custom-govt-llm",
      highlight: "AI ENABLED",
      details: [
        { label: "Language Support", value: "Marathi & English" },
        { label: "Data Safety", value: "Private Government Server" },
        { label: "Source Verification", value: "Links back to original paper" },
      ],
    },
    cet: {
      id: "cet",
      tabLabel: "State College Admissions",
      title: "Online College Admissions for Lakhs of Students",
      simpleExplanation:
        "Students apply online, choose preferred colleges, and get merit-based seats for Engineering, MBA, and Pharmacy without queues.",
      stat: "12 Lakh+",
      statLabel: "Students admitted smoothly yearly",
      logo: "/brand/portals/seal_maharashtra.svg",
      client: "Government of Maharashtra (State CET Cell)",
      url: "cetcell.mahacet.org",
      slug: "state-cet-cell",
      highlight: "STATE FLAGSHIP",
      details: [
        { label: "Colleges Connected", value: "600+ Institutes" },
        { label: "Admission Rounds", value: "Multi-Round CAP Allotment" },
        { label: "Quota Accuracy", value: "100% Rules Compliant" },
      ],
    },
    exam_vault: {
      id: "exam_vault",
      tabLabel: "Secure Exam Papers",
      title: "Digital Question Papers with Timed Locks",
      simpleExplanation:
        "Question papers stay locked and encrypted. They can only be opened 15 minutes before the exam with password and biometric scan.",
      stat: "Zero Leaks",
      statLabel: "Recorded across all exams",
      logo: "/brand/portals/logo_blockchain_vault.svg",
      client: "State Universities & Exam Boards",
      url: "exam-vault.abs-solutions.in",
      slug: "secured-paper-delivery",
      highlight: "TAMPER-PROOF",
      details: [
        { label: "Unlock Timing", value: "15 mins before exam start" },
        { label: "Biometric Check", value: "Center Superintendent OTP" },
        { label: "Audit Trail", value: "Every print logged in real time" },
      ],
    },
    haryana: {
      id: "haryana",
      tabLabel: "Haryana State Statistics",
      title: "State Economic & Population Reports Portal",
      simpleExplanation:
        "Collects growth, population, and agricultural numbers across all 22 districts to prepare the state's annual economic report.",
      stat: "22 Districts",
      statLabel: "United into one simple dashboard",
      logo: "/brand/portals/seal_haryana.svg",
      client: "Planning Department, Govt. of Haryana",
      url: "esaharyana.gov.in",
      slug: "desa-haryana-statistics",
      highlight: "GOVT ANALYTICS",
      details: [
        { label: "District Coverage", value: "All 22 Haryana Districts" },
        { label: "Time Saved", value: "3 Months in Survey Publishing" },
        { label: "Login Access", value: "Single Sign-on for Officers" },
      ],
    },
  };

  const current = portals[activeTab];

  return (
    <section className="relative bg-white text-[#0a192f] pt-12 pb-16 lg:pt-18 lg:pb-22 border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear, Simple Words & High-Sober Style */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-5 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              <span>Trusted Technology Partner for Governments &amp; Universities</span>
            </div>

            {/* Simple, Natural Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0a192f] leading-[1.2]">
              Simple, Reliable Software for{" "}
              <span className="text-[#0284c7]">Government Portals</span>,{" "}
              <span>College Admissions</span> &amp;{" "}
              <span className="text-[#b45309] bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 inline-flex items-center gap-1">
                AI Assistants
                <Sparkles className="w-3.5 h-3.5 text-[#e8b206]" />
              </span>
            </h1>

            {/* Simple, Easy Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We design websites and portals that state departments and universities use every day. From helping lakhs of students apply to colleges without errors, to using AI that reads and drafts government letters, our software is fast, easy to use, and never crashes.
            </p>

            {/* Clean, Non-Gimmicky Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link href="/work">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-[#0a192f] hover:bg-[#0f2444] text-white border-0 shadow-xs"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#e8b206]" />}
                >
                  See What We Have Built
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-[#0a192f] border-slate-300 hover:bg-slate-50"
                >
                  Talk to Our Team
                </Button>
              </Link>
            </div>

            {/* 4 Quiet, Minimal Stat Blocks */}
            <div className="mt-10 pt-6 border-t border-slate-100 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-[#0a192f]">12 Lakh+</div>
                <div className="text-xs text-slate-500 mt-0.5">Students admitted yearly</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#0284c7]">67,000+</div>
                <div className="text-xs text-slate-500 mt-0.5">Teachers recruited</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#b45309]">₹2,400 Cr+</div>
                <div className="text-xs text-slate-500 mt-0.5">College grants checked</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-emerald-700">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Tested under heavy rush</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Minimal, Sober Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
              {/* Sober Browser Frame Bar */}
              <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 font-mono text-[11px] text-slate-500 truncate max-w-[180px]">
                    https://{current.url}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                  {current.highlight}
                </span>
              </div>

              {/* Minimal Portal Card Header with Logo */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src={current.logo}
                      alt={current.client}
                      width={40}
                      height={40}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0284c7] block">
                      {current.client}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0a192f] leading-snug">
                      {current.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Simple Explanation in Plain English */}
              <div className="p-5 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {current.simpleExplanation}
                </p>

                {/* Quiet Key Feature List */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  {current.details.map((item) => (
                    <div key={item.label} className="flex justify-between text-xs py-0.5">
                      <span className="text-slate-500">{item.label}:</span>
                      <span className="font-semibold text-slate-800">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Quiet Metric Highlight Box */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">{current.statLabel}</span>
                    <span className="text-lg font-black text-[#0a192f]">{current.stat}</span>
                  </div>
                  <Link
                    href={`/work/${current.slug}`}
                    className="text-xs font-bold text-[#0284c7] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Minimal Tabs at Bottom */}
              <div className="p-3 bg-slate-50/80 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                  Click to switch live portals:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(Object.keys(portals) as PortalKey[]).map((key) => {
                    const item = portals[key];
                    const isSelected = activeTab === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveTab(key)}
                        className={`p-2 rounded-lg text-left text-[11px] font-bold transition-all cursor-pointer truncate ${
                          isSelected
                            ? "bg-[#0a192f] text-white shadow-xs"
                            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {item.tabLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
