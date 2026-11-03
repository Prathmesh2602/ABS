import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import {
  ShieldCheck,
  Building2,
  Lock,
  ArrowRight,
  CheckCircle2,
  Server,
  Sparkles,
  MapPin,
  Scale,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ABS — 20+ Years Building Government Portals & Student Systems",
  description:
    "Learn about Analytica Business Solutions (ABS), headquartered in Pune, Maharashtra. 20+ years of proven delivery in government portals, centralized admissions, and university exam systems.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2004",
      title: "Foundation in Pune",
      desc: "Established in Maharashtra with a dedicated mission to computerize state government departments and apex university directorates.",
    },
    {
      year: "2010",
      title: "First Centralized Admissions (CAP)",
      desc: "Pioneered Maharashtra's single-window online admission and automated constitutional reservation counseling system.",
    },
    {
      year: "2018",
      title: "Statewide Recruitment Portals",
      desc: "Engineered high-concurrency recruitment engines processing tens of thousands of government vacancies with zero legal disputes.",
    },
    {
      year: "2026+",
      title: "Private AI & Digital Governance",
      desc: "Pioneering air-gapped bilingual LLMs, time-locked exam security vaults, and paperless grant disbursement for state secretariats.",
    },
  ];

  const pillars = [
    {
      icon: Server,
      title: "Zero Freeze Peak Concurrency",
      metric: "0 Crashes",
      highlight: "Tuned for 12+ Lakh students submitting choices simultaneously without timeouts or server crashes.",
      iconBg: "bg-orange-50 text-[#ff6201] border-orange-200",
    },
    {
      icon: Scale,
      title: "100% Statutory Quota Fidelity",
      metric: "Zero Disputes",
      highlight: "Strict encoding of state reservation quotas, horizontal reservations, and merit tie-breakers with zero judicial reversals.",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      icon: ShieldCheck,
      title: "Air-Gapped Private Cloud",
      metric: "100% Private",
      highlight: "Operates exclusively within state data centers with CERT-In compliance and zero third-party cloud data leakage.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    },
    {
      icon: Users,
      title: "Live On-Site Launch Command",
      metric: "24/7 Presence",
      highlight: "Principal software engineers sit directly beside government officers on result days to ensure zero-defect execution.",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Solid Vector Graphics Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -left-20 w-[720px] h-[380px] opacity-25"
          viewBox="0 0 720 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,180 C200,60 420,240 720,100 L720,0 L0,0 Z"
            fill="url(#aboutGoldAzureGrad)"
          />
          <defs>
            <linearGradient id="aboutGoldAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-48 -right-16 w-72 h-72 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-200/50 rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10">
        <Breadcrumbs items={[{ label: "About ABS" }]} />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/90">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>Two Decades of Public Sector Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a192f] tracking-tight leading-[1.12]">
              Building Zero-Downtime Platforms for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c]">
                India’s Apex Institutions
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              Headquartered in Pune, Analytica Business Solutions (ABS) designs mission-critical online admission engines, secure university exam vaults, digital recruitment systems, and public grant audit architectures trusted across Maharashtra, Haryana, and Jharkhand.
            </p>
          </div>
        </section>

        {/* Executive Leadership & Engineering Command (50/50 Human Centric Layout) */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Indian Technology Leadership Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
                <Image
                  src="/images/about_indian_leadership.jpg"
                  alt="Senior Indian Technology Leadership & Systems Architecture at ABS Pune"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0a192f]">
                      Pune Headquarters, Maharashtra
                    </div>
                    <div className="text-xs text-slate-500 font-mono">
                      Serving Apex Government Bodies Since 2004
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Overview & Governance Focus */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-2">
                Executive Purpose &amp; Capability
              </span>

              <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight leading-tight">
                Engineering Public Trust into Deterministic Code
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                When state governments release examination results or open centralized admissions, millions of families depend on uninterrupted server availability. At ABS, our engineering ethos is founded on three non-negotiable standards:
              </p>

              <div className="mt-8 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0 mt-0.5">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a192f]">
                      Constitutional &amp; Statutory Precision
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      We encode complex reservation rosters (SC, ST, OBC, EWS, SEBC, orphan, and horizontal quotas) directly into deterministic logic that survives judicial scrutiny.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a192f]">
                      Sovereign Perimeter Defense
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      All citizen and institutional data is deployed strictly within state government data centers and private clouds, adhering to CERT-In guidelines with zero third-party leakages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars of Engineering Discipline */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              Our Architectural Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              Why Public Institutions Rely on ABS
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Deterministic architectures engineered for zero-defect execution during peak state operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-orange-400 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${p.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-[#0a192f] shadow-2xs">
                        {p.metric}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {p.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-2">
              Evolution &amp; Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              Two Decades of Continuous Innovation
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Key milestones across our history of building digital infrastructure for public governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-orange-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] to-[#ea580c]">
                    {m.year}
                  </span>
                  <h3 className="text-base font-bold text-[#0a192f] mt-3 leading-snug">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proven Scale Numbers */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#0f294a] to-[#0a192f] text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-8 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                Verified Scale &amp; Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 tracking-tight">
                Numbers from Live Platforms in Continuous Production
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-700/80 relative z-10">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#f59e0b]">20+ Years</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Judicial &amp; Public Trust</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#38bdf8]">12 Lakh+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Candidates Processed Annually</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#38bdf8]">1,200+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Colleges &amp; Testing Centers</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">₹2,400 Cr+</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Grants &amp; Salaries Audited</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Executive Call to Action */}
      <FinalCTAExecutive />
    </div>
  );
}
