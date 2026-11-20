import * as React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function ClientsEmblemsStrip() {
  const clients = [
    {
      name: "Government of Maharashtra",
      seal: "/brand/portals/seal_maharashtra.svg",
      department: "State CET Cell & Higher Education",
      badge: "State Mandate",
    },
    {
      name: "Government of Haryana",
      seal: "/brand/portals/seal_haryana.svg",
      department: "Planning & Statistics (DESA)",
      badge: "22 Districts",
    },
    {
      name: "Government of Jharkhand",
      seal: "/brand/portals/seal_jharkhand.svg",
      department: "Combined Entrance (JCECEB)",
      badge: "State Admissions",
    },
    {
      name: "MSBTE Board",
      seal: "/brand/portals/logo_msbte.png",
      department: "Board of Technical Education",
      badge: "High-Security Exams",
    },
    {
      name: "MPKV Rahuri",
      seal: "/brand/portals/logo_mpkv.jpg",
      department: "State Agricultural University",
      badge: "University ERP",
    },
    {
      name: "MCAER Pune",
      seal: "/brand/portals/logo_mcaer.svg",
      department: "Apex Agriculture Council",
      badge: "Apex Regulatory",
    },
    {
      name: "Maharashtra Police",
      seal: "/brand/portals/logo_maha_police.svg",
      department: "Recruitment & Personnel",
      badge: "Merit Roster",
    },
    {
      name: "DTE Maharashtra",
      seal: "/brand/portals/logo_dte.svg",
      department: "Directorate of Technical Education",
      badge: "Vocational Grants",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Solid Vector Graphics Background (Zero Dots) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 right-0 w-[500px] h-[300px] opacity-20"
          viewBox="0 0 500 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C150,120 350,50 500,160 L500,0 Z"
            fill="url(#emblemGoldGrad)"
          />
          <defs>
            <linearGradient id="emblemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-16 -left-10 w-52 h-52 rounded-3xl bg-gradient-to-tr from-sky-500/15 via-blue-500/10 to-transparent border border-sky-200/50 -rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Institutional Trust &amp; Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a192f] tracking-tight">
            Trusted by State Secretariats, Universities &amp; Apex Boards
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Our digital architectures run mission-critical public workflows for apex state bodies across Maharashtra, Haryana, and Jharkhand.
          </p>
        </div>

        {/* High-Credibility Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-orange-400 hover:shadow-lg transition-all duration-300 text-left group"
            >
              {/* Emblem Tile */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 p-2 border border-slate-200/80 shrink-0 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Image
                  src={c.seal}
                  alt={c.name}
                  width={36}
                  height={36}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Text Info + Badge */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <div className="text-sm font-bold text-[#0a192f] truncate group-hover:text-[#ff6201] transition-colors">
                    {c.name}
                  </div>
                </div>
                <div className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {c.department}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>{c.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
