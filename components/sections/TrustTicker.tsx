import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Users, Landmark, ShieldCheck, Award } from "lucide-react";

export function TrustTicker() {
  const stats = [
    {
      value: "12 Lakh+",
      label: "Students Admitted Yearly",
      context: "Maharashtra CET Cell",
      href: "/work/state-cet-cell",
      icon: GraduationCap,
      color: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
      accent: "bg-sky-500",
    },
    {
      value: "67,000+",
      label: "Teachers Recruited Fairly",
      context: "PAVITRA Portal",
      href: "/work/pavitra-teacher-recruitment",
      icon: Users,
      color: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
      accent: "bg-amber-500",
    },
    {
      value: "₹2,400 Cr+",
      label: "College Grants Checked",
      context: "Higher Education Dept",
      href: "/work/dhe-grant-in-aid",
      icon: Landmark,
      color: "from-emerald-500/20 to-emerald-600/10 text-emerald-600 border-emerald-300",
      accent: "bg-emerald-500",
    },
    {
      value: "0 Crashes",
      label: "100% Concurrency Rate",
      context: "Tested for Lakhs of Users",
      href: "/solutions/education-admissions",
      icon: ShieldCheck,
      color: "from-orange-500/20 to-orange-600/10 text-[#ff6201] border-orange-300",
      accent: "bg-[#ff6201]",
    },
    {
      value: "20+ Years",
      label: "Public Trust",
      context: "Serving States Since 2004",
      href: "/about",
      icon: Award,
      color: "from-indigo-500/20 to-indigo-600/10 text-indigo-600 border-indigo-300",
      accent: "bg-indigo-500",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 py-8 sm:py-10 relative overflow-hidden">
      {/* Background subtle dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                href={s.href}
                className={`group relative p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                {/* Top: Icon Medallion & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#ff6201] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Number & Labels */}
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight group-hover:text-[#ff6201] transition-colors leading-tight">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-snug">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium leading-snug">
                    {s.context}
                  </div>
                </div>

                {/* Bottom Micro Indicator */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.accent}`} />
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">VERIFIED RECORD</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
