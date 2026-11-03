import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/case-studies";
import { solutionsData } from "@/data/solutions";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ProjectPreviewArchetype } from "@/components/projects/ProjectPreviewArchetypes";
import { CaseStudyQuickNav } from "@/components/case-study/CaseStudyQuickNav";
import { InteractiveWorkflowFlowchart } from "@/components/case-study/InteractiveWorkflowFlowchart";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData.find((cs) => cs.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ABS Case Study & Engineering Dossier`,
    description: project.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudiesData.find((cs) => cs.slug === slug);

  if (!project) {
    notFound();
  }

  // Cross-reference related solutions
  const relatedSolutions = solutionsData.filter((s) =>
    project.relatedSolutions.includes(s.slug)
  );

  // Other case studies
  const otherProjects = caseStudiesData.filter((cs) => cs.slug !== project.slug).slice(0, 2);

  return (
    <div className="py-8 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Projects", href: "/work" },
            { label: project.clientShortName },
          ]}
        />
      </div>

      {/* Interactive Sticky Index & Navigation Bar */}
      <CaseStudyQuickNav officialUrl={project.officialUrl} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Project Hero with Genuine Client Emblem */}
        <div id="overview" className="py-8 lg:py-12 border-b border-[#e2e8f0]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Category, AI Badge, Jurisdiction */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {project.isAIEnabled && (
                  <span className="badge-ai shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>AI ENABLED APPLICATION</span>
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  {project.category}
                </span>
                {project.jurisdiction && (
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>{project.jurisdiction}</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-[1.15]">
                {project.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {project.summary}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  href={`/contact?interest=${project.slug}`}
                  variant="orange"
                  size="lg"
                  className="shadow-[0_4px_20px_rgba(255,98,1,0.35)]"
                  rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                >
                  Discuss a Similar Project
                </Button>
                {project.officialUrl && (
                  <a
                    href={`https://${project.officialUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-[#0a192f] text-sm font-bold hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <span>Launch Portal Reference</span>
                    <ExternalLink className="w-4 h-4 text-[#ff6201]" />
                  </a>
                )}
                <Button href="/work" variant="outline" size="lg" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                  Back to All Projects
                </Button>
              </div>
            </div>

            {/* Authentic Portal Emblem Card */}
            <div className="w-full lg:w-72 shrink-0 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-lg text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-white p-2.5 border border-slate-200 shadow-xs flex items-center justify-center mb-3">
                {project.portalLogo ? (
                  <Image
                    src={project.portalLogo}
                    alt={project.clientShortName}
                    width={84}
                    height={84}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <Building2 className="w-12 h-12 text-[#ff6201]" />
                )}
              </div>
              <div className="text-xs font-bold text-[#0a192f] uppercase tracking-wider">
                {project.clientShortName}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1 line-clamp-2">
                {project.client}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Scale & Impact Metrics Bar */}
        <section id="metrics" className="py-12 border-b border-[#e2e8f0]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ea580c] mb-5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#ff6201]" />
            <span>Verified Operational Impact &amp; Scale</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:border-orange-300 hover:shadow-xs transition-all duration-200"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-[#ff6201]">
                    {metric.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0a192f] mt-1.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Bespoke Interactive UI Archetype Inspection Deck */}
        <section id="preview" className="py-14 border-b border-[#e2e8f0]">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
              Live Software Architecture Preview
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a192f] mt-1">
              Interactive System Inspection Deck
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              High-concurrency data models, validation checks, and operational controls executed by this platform.
            </p>
          </div>

          <div className="max-w-4xl">
            <ProjectPreviewArchetype archetype={project.previewArchetype} title={project.title} />
          </div>
        </section>

        {/* 4. Context & Challenges */}
        <section id="challenges" className="py-14 border-b border-[#e2e8f0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                Institutional Context
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a192f] tracking-tight">
                Why This Solution Was Mandated
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Legacy manual registers, fragmented paper files, and unverified data led to severe processing delays, public litigation, and audit disputes. ABS was commissioned to design a zero-defect, automated platform.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Core Challenges Overcome
              </span>
              <div className="space-y-2.5">
                {project.challenge.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Solution Delivered */}
        <section id="solution" className="py-14 border-b border-[#e2e8f0]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
              Technical Solution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] mt-1 tracking-tight">
              Engineering Architecture Delivered by ABS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.solution.map((solItem, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#ff6201] flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6201]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0a192f]">
                    System Capability 0{idx + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                    {solItem}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Step-by-Step Interactive Workflow */}
        <section id="workflow" className="py-14 border-b border-[#e2e8f0]">
          <InteractiveWorkflowFlowchart workflow={project.workflow} />
        </section>

        {/* 7. Measurable Outcomes */}
        <section id="outcomes" className="py-14 border-b border-[#e2e8f0]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
              Audited Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] mt-1 tracking-tight">
              Institutional Outcomes &amp; Positive Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3 shadow-xs">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Related Portals Navigation */}
        <section className="py-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                Cross-Sector Portfolio
              </span>
              <h2 className="text-2xl font-black text-[#0a192f] mt-1">
                Explore Other Deployed Portals
              </h2>
            </div>
            <Button href="/work" variant="outline" size="sm" className="bg-white border-slate-300 mt-4 sm:mt-0">
              View All 19 Portals
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <div
                key={p.slug}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {p.isAIEnabled && (
                      <span className="badge-ai text-[10px] py-0 px-1.5">
                        <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                        AI
                      </span>
                    )}
                    <span className="text-xs font-bold text-[#ea580c]">
                      {p.clientShortName}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0a192f]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                    {p.summary}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 flex justify-between items-center text-xs font-bold">
                  <span className="font-mono text-[#0a192f]">
                    {p.metrics[0]?.value} {p.metrics[0]?.label}
                  </span>
                  <Link
                    href={`/work/${p.slug}`}
                    className="text-[#ff6201] hover:text-[#ea580c] flex items-center gap-1"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 9. Dedicated Executive Consultation CTA */}
      <FinalCTAExecutive />
    </div>
  );
}
