import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions";
import { caseStudiesData } from "@/data/case-studies";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Layers,
} from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title} | ABS Enterprise Solutions`,
    description: solution.shortDescription,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  // Cross-reference related case studies
  const relatedProjects = caseStudiesData.filter((cs) =>
    solution.relatedProjects.includes(cs.slug)
  );

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
            fill="url(#solDetailGrad)"
          />
          <defs>
            <linearGradient id="solDetailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-72 -right-16 w-72 h-72 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-200/50 rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: solution.title },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-200/90">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>{solution.categoryTag}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a192f] tracking-tight leading-[1.12]">
              {solution.title}
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl">
              {solution.heroCopy}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={solution.cta.href}
                variant="orange"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
              >
                {solution.cta.label}
              </Button>
              <Button
                href="/solutions"
                variant="outline"
                size="lg"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                All Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Problem Statement & Challenges Solved */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-2">
                Mission Challenges Solved
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight leading-tight">
                Roadblocks Eliminated Through Software
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Manual paper workflows, server timeouts during peak rush, and quota disputes cause public complaints. Our deterministic digital architectures ensure 100% rule fidelity and zero downtime.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {solution.challengesSolved.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/80 w-fit mb-3">
                    CHALLENGE 0{idx + 1}
                  </span>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Standard End-to-End Workflow */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
              Architectural Sequence
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              Standard End-to-End Workflow
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Each phase executes deterministic validation checks before advancing to eliminate systemic failure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflowSteps.map((wf) => (
              <div
                key={wf.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-orange-400 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center text-xs font-mono font-bold mb-4 group-hover:scale-105 transition-transform">
                    0{wf.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                    {wf.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {wf.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Core Capabilities Grid */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-2">
              System Components
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              Built-in System Modules &amp; Compliance Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.capabilities.map((cap) => (
              <div
                key={cap}
                className="p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-md transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0a192f]">
                    {cap}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Battle-tested module configured strictly according to state circulars and quotas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Relevant Projects & Real-World Deployments */}
        {relatedProjects.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
                Live State Deployments
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
                Case Studies Using This Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                        {project.clientShortName}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-sky-700">
                    <span>{project.metrics[0]?.value} {project.metrics[0]?.label}</span>
                    <span className="text-slate-400 group-hover:text-[#ff6201] transition-colors">
                      View Architecture Dossier →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Executive Call to Action */}
      <FinalCTAExecutive />
    </div>
  );
}
