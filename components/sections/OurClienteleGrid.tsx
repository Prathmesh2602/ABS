"use client";

import * as React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface ClientInstitution {
  name: string;
  seal: string;
  department: string;
  category: string;
}

export function OurClienteleGrid() {
  const clients: ClientInstitution[] = [
    {
      name: "Government of Maharashtra",
      seal: "/brand/portals/seal_maharashtra.svg",
      department: "State CET Cell & Higher Education",
      category: "Apex State Body",
    },
    {
      name: "Government of Haryana",
      seal: "/brand/portals/seal_haryana.svg",
      department: "DESA Planning & Statistics",
      category: "22 Districts",
    },
    {
      name: "Government of Jharkhand",
      seal: "/brand/portals/seal_jharkhand.svg",
      department: "JCECEB Combined Entrance",
      category: "State Admissions",
    },
    {
      name: "MSBTE Board",
      seal: "/brand/portals/logo_msbte.png",
      department: "Board of Technical Education",
      category: "High-Security Exams",
    },
    {
      name: "DTE Maharashtra",
      seal: "/brand/portals/logo_dte.svg",
      department: "Directorate of Technical Education",
      category: "State Directorate",
    },
    {
      name: "MCAER Pune",
      seal: "/brand/portals/logo_mcaer.svg",
      department: "Apex Agriculture Council",
      category: "Apex Regulatory",
    },
    {
      name: "MPKV Rahuri",
      seal: "/brand/portals/logo_mpkv.jpg",
      department: "State Agricultural University",
      category: "University ERP",
    },
    {
      name: "VNMKV Parbhani",
      seal: "/brand/portals/logo_vnmkv.svg",
      department: "Agricultural University",
      category: "State University",
    },
    {
      name: "Maharashtra Police",
      seal: "/brand/portals/logo_maha_police.svg",
      department: "State Police Recruitment",
      category: "Merit Roster",
    },
    {
      name: "Maharashtra Prisons",
      seal: "/brand/portals/logo_maha_prisons.svg",
      department: "Prison Administration",
      category: "Home Department",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/90 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-amber-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-sky-400/10 to-transparent blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Apex Institutional Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight">
            Our Clientele
          </h2>
          <div className="w-16 h-1 bg-[#ea580c] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Trusted by State Secretariats, Higher Education Councils, Police Directorates, and State Universities across India.
          </p>
        </div>

        {/* Clientele Grid: Rows of 4 or 5 (Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group hover:-translate-y-1.5"
            >
              <div className="w-full flex flex-col items-center">
                {/* Emblem / Seal Container */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200/80 p-2.5 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-orange-50/50 transition-all shadow-2xs">
                  <Image
                    src={c.seal}
                    alt={c.name}
                    width={48}
                    height={48}
                    className="max-h-full max-w-full object-contain filter group-hover:contrast-105"
                  />
                </div>

                {/* Institution Name */}
                <h3 className="text-sm font-bold text-[#0a192f] group-hover:text-[#ea580c] transition-colors leading-snug line-clamp-2">
                  {c.name}
                </h3>

                {/* Department */}
                <p className="mt-1.5 text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                  {c.department}
                </p>
              </div>

              {/* Category Pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex justify-center">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60 uppercase tracking-wider group-hover:bg-orange-50 group-hover:text-[#ea580c] group-hover:border-orange-200 transition-colors">
                  {c.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
