import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
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
} from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.title} | Sector Solutions`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  // Cross-reference relevant solutions and case studies
  const relevantSolutions = solutionsData.filter((s) =>
    industry.solutions.includes(s.slug)
  );
  const relevantProjects = caseStudiesData.filter((cs) =>
    industry.projects.includes(cs.slug)
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
            fill="url(#indDetailGrad)"
          />
          <defs>
            <linearGradient id="indDetailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
            { label: "Sectors & Industries", href: "/industries" },
            { label: industry.title },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-200/90">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>Sector Specialization</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a192f] tracking-tight leading-[1.12]">
              {industry.title}
            </h1>

            <p className="mt-3 text-lg font-bold text-sky-600">
              {industry.subtitle}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              {industry.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={`/contact?interest=${industry.slug}`}
                variant="orange"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
              >
                Schedule Technical Consultation
              </Button>
              <Button
                href="/industries"
                variant="outline"
                size="lg"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                All Sectors
              </Button>
            </div>
          </div>
        </section>

        {/* Sectoral Compliance & Requirements */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-2">
              Statutory Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              Key Requirements &amp; State Rules We Support
            </h2>
            <p className="mt-3 text-base text-slate-600">
              How our software deterministic engines handle state resolutions, complex quota calculations, and peak rush.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.needs.map((need, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0a192f]">
                    Mandate 0{idx + 1}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                    {need}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant ABS Solutions */}
        <section className="py-16 sm:py-20 border-b border-slate-200/90">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block mb-2">
              Matching Capability
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
              ABS Solutions Built for This Sector
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relevantSolutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                      {sol.categoryTag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                    {sol.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {sol.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ea580c] group-hover:text-[#ff6201] transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Demonstrated Case Studies */}
        {relevantProjects.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-2">
                Live State Deployments
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
                Case Studies in {industry.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relevantProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                        {p.clientShortName}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {p.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-sky-700">
                    <span>{p.metrics[0]?.value} {p.metrics[0]?.label}</span>
                    <span className="text-slate-400 group-hover:text-[#ff6201] transition-colors">
                      View Deployment Dossier →
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
