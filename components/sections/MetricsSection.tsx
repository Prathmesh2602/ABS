"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Users, Landmark, ShieldCheck } from "lucide-react";

export function MetricsSection() {
  const metrics = [
    {
      value: "12 Lakh+",
      label: "Students Admitted Online",
      description: "Admitted each year through Maharashtra CET Cell with zero seat errors",
      badge: "State CET Cell",
      link: "/work/state-cet-cell",
      icon: GraduationCap,
    },
    {
      value: "67,000+",
      label: "Teachers Recruited Fairly",
      description: "Recruited for state schools via PAVITRA portal with 100% merit accuracy",
      badge: "School Education",
      link: "/work/pavitra-teacher-recruitment",
      icon: Users,
    },
    {
      value: "₹2,400 Cr+",
      label: "College Grants Checked",
      description: "Audited and released online for aided colleges with clear paper trails",
      badge: "Higher Education",
      link: "/work/dhe-grant-in-aid",
      icon: Landmark,
    },
    {
      value: "100%",
      label: "Never Crashed in Rush",
      description: "Kept running smoothly when lakhs of students checked results together",
      badge: "Tested for Heavy Rush",
      link: "/work/state-cet-cell",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.link}
              className="group bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs hover:border-[#0284c7]/50 hover:shadow-sm transition-all duration-200 block relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0a192f] group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/80">
                  {item.badge}
                </span>
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1 flex items-center justify-between">
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {item.description}
              </p>

              {/* Subtle Hairline Brand Accent on Hover */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-transparent group-hover:bg-[#0284c7] transition-colors" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
