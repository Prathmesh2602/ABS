import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudiesData } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectPreviewArchetype } from "@/components/projects/ProjectPreviewArchetypes";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Plain-English titles and summaries for the featured homepage showcase
const simpleProjectContent: Record<
  string,
  { title: string; summary: string; category: string }
> = {
  "custom-govt-llm": {
    title: "AI That Reads Government Letters & Drafts Replies",
    summary:
      "Reads scanned Marathi and English letters, pulls out important dates and numbers, and drafts official replies according to rules.",
    category: "AI & Smart Tech",
  },
  "state-cet-cell": {
    title: "Maharashtra State College Admissions (CET Cell)",
    summary:
      "A single online portal for 12+ Lakh students to apply, get documents checked online, and get college seats without queues.",
    category: "College Admissions",
  },
  "secured-paper-delivery": {
    title: "Secure Digital Exam Question Papers",
    summary:
      "Question papers stay locked until 15 minutes before exam time and open only with biometric verification and OTP.",
    category: "Exam Security",
  },
  "desa-haryana-statistics": {
    title: "Haryana State Economic Reports Portal",
    summary:
      "Collects population, farming, and income data across all 22 districts to prepare the state's annual economic report on time.",
    category: "State Analytics",
  },
  "jceceb-single-admission": {
    title: "Jharkhand Combined Entrance Admissions (CET & CAP)",
    summary:
      "Online entrance tests and multi-round seat allotment for Engineering, Medical, and Agriculture colleges across Jharkhand.",
    category: "State Admissions",
  },
  "meghdoot-communication-gateway": {
    title: "Meghdoot: Instant SMS, Email & WhatsApp Alerts",
    summary:
      "Sends instant exam alerts, admission OTPs, and hall tickets to lakhs of students and citizens without delays.",
    category: "Messaging Gateway",
  },
};

export function FeaturedWork() {
  const featuredSlugs = [
    "custom-govt-llm",
    "state-cet-cell",
    "secured-paper-delivery",
    "desa-haryana-statistics",
    "jceceb-single-admission",
    "meghdoot-communication-gateway",
  ];

  const featured = featuredSlugs
    .map((slug) => caseStudiesData.find((p) => p.slug === slug))
    .filter(Boolean) as typeof caseStudiesData;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <SectionHeading
            badge="Live Portals &amp; Projects"
            badgeVariant="azure"
            title="Real Portals Working for Governments &amp; Universities"
            description="Explore our working portals: from helping lakhs of students get college seats to using AI to read and draft government letters."
            align="left"
            className="mb-0 sm:mb-0 max-w-2xl"
          />
          <Link href="/work" className="mt-5 md:mt-0">
            <Button
              variant="outline"
              size="md"
              className="bg-white hover:bg-slate-50 border-slate-300 text-[#0a192f] text-xs font-bold"
              rightIcon={<ArrowRight className="w-3.5 h-3.5 text-[#0284c7]" />}
            >
              See All 18 Live Portals
            </Button>
          </Link>
        </div>

        {/* 6 Minimal, Sober Cards in Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => {
            const copy = simpleProjectContent[project.slug] || {
              title: project.title,
              summary: project.summary,
              category: project.category,
            };

            return (
              <div
                key={project.slug}
                className={cn(
                  "flex flex-col rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 overflow-hidden group",
                  project.isAIEnabled && "border-amber-200/90"
                )}
              >
                {/* Header with Authentic Portal Logo */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white p-1.5 border border-slate-200 shrink-0 flex items-center justify-center">
                      {project.portalLogo ? (
                        <Image
                          src={project.portalLogo}
                          alt={project.clientShortName}
                          width={36}
                          height={36}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full rounded bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-500">
                          {project.clientShortName.slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-[#0284c7] block">
                        {copy.category}
                      </span>
                      <div className="text-xs font-semibold text-slate-700 truncate max-w-[170px]">
                        {project.clientShortName}
                      </div>
                    </div>
                  </div>

                  {project.isAIEnabled ? (
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>AI ENABLED</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-full">
                      {project.jurisdiction?.split("/")[0] || "State Portal"}
                    </span>
                  )}
                </div>

                {/* Card Title & Plain-English Summary */}
                <div className="p-4 pb-2">
                  <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#0284c7] transition-colors leading-snug line-clamp-2">
                    {copy.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                    {copy.summary}
                  </p>
                </div>

                {/* Live Preview Archetype */}
                <div className="px-4 py-2">
                  <ProjectPreviewArchetype archetype={project.previewArchetype} title={copy.title} />
                </div>

                {/* Quiet Metrics Strip */}
                <div className="px-4 py-3 mt-auto bg-slate-50/70 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-2 rounded-lg bg-white border border-slate-200/80">
                        <div className="text-sm font-extrabold text-[#0a192f]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 mt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <Link
                      href={`/work/${project.slug}`}
                      className="font-bold text-[#0a192f] group-hover:text-[#0284c7] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read project details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#0284c7]" />
                    </Link>

                    {project.officialUrl && (
                      <a
                        href={`https://${project.officialUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0284c7] inline-flex items-center gap-1 text-[11px]"
                      >
                        <span className="truncate max-w-[110px]">{project.officialUrl}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
