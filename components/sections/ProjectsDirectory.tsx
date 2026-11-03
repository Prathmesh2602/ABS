"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCaseStudy, ProjectCategory } from "@/types";
import { ArrowUpRight, Sparkles, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectsDirectoryProps {
  projects: ProjectCaseStudy[];
}

const CATEGORIES: Array<{ id: "ALL" | ProjectCategory; label: string }> = [
  { id: "ALL", label: "All Projects" },
  { id: "AI & Emerging Tech", label: "AI & Emerging Tech" },
  { id: "State Admissions & CAP", label: "State Admissions & CAP" },
  { id: "University ERP & Health", label: "University ERP & Health" },
  { id: "Government & Grants", label: "Government Governance & Grants" },
  { id: "Enterprise & Comms", label: "Enterprise ERP & Comms" },
];

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<"ALL" | ProjectCategory>("ALL");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProjects = React.useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sector.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, projects]);

  const getCategoryCount = (catId: "ALL" | ProjectCategory) => {
    if (catId === "ALL") return projects.length;
    return projects.filter((p) => p.category === catId).length;
  };

  return (
    <div className="space-y-10">
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/90 pb-6">
        {/* Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-[#0a192f] text-white shadow-sm ring-1 ring-[#0a192f]"
                    : "bg-white text-slate-600 hover:text-[#0a192f] hover:bg-slate-50 border border-slate-200/90"
                )}
              >
                {cat.id === "AI & Emerging Tech" && (
                  <Sparkles
                    className={cn(
                      "w-3.5 h-3.5",
                      isSelected ? "text-[#f59e0b]" : "text-[#d97706]"
                    )}
                  />
                )}
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full text-[11px] font-mono transition-colors",
                    isSelected
                      ? "bg-[#ff6201] text-white font-bold"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by keyword..."
            className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200/90 focus:border-[#ff6201] focus:outline-none focus:ring-1 focus:ring-[#ff6201] text-[#0a192f] placeholder:text-slate-400 transition-colors"
          />
        </div>
      </div>

      {/* Projects Directory Grid (Clean, minimalist, gentle on eyes — matching homepage style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project) => {
          return (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-white hover:bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff6201] group-hover:via-[#fbbf24] group-hover:to-[#0284c7] transition-all duration-300" />

              <div>
                {/* Top Row: Authentic Client Emblem & Sleek Redirection Circle */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      {project.portalLogo ? (
                        <Image
                          src={project.portalLogo}
                          alt={project.clientShortName}
                          width={40}
                          height={40}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600">
                          {project.clientShortName.slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-600 truncate max-w-[170px] block">
                        {project.clientShortName}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.isAIEnabled && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        <span>AI Ready</span>
                      </span>
                    )}

                    {/* Top-Right Sleek Redirection Arrow (Homepage reference style) */}
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/80 text-slate-500 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>

                {/* Minimal, Airy Briefing (Clean Slate Text, No Heavy Blocks) */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Row: Key Metric Badge & Explore Architecture Link */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                {project.metrics && project.metrics.length > 0 ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50/90 border border-orange-200/80 text-xs">
                    <span className="font-bold text-[#ea580c] font-mono">
                      {project.metrics[0].value}
                    </span>
                    <span className="text-slate-600 text-[11px] truncate max-w-[130px]">
                      {project.metrics[0].label}
                    </span>
                  </div>
                ) : (
                  <div className="text-[11px] font-medium text-slate-500">
                    {project.jurisdiction || "State System"}
                  </div>
                )}

                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#ea580c] group-hover:text-[#ff6201] transition-colors shrink-0">
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 font-medium">No projects found matching "{searchQuery}".</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("ALL");
            }}
            className="mt-3 text-xs font-bold text-[#ff6201] hover:underline cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
