import * as React from "react";
import { BookOpen, Smartphone, Activity, Headphones, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessSimple() {
  const steps = [
    {
      step: "01",
      icon: BookOpen,
      title: "Statutory Rule Ingestion",
      summary: "Direct mapping of department circulars and reservation quotas.",
      pill: "100% Rule Fidelity",
      color: "from-sky-500/20 to-sky-600/10 text-sky-600 border-sky-300",
    },
    {
      step: "02",
      icon: Smartphone,
      title: "Lightweight Village UX",
      summary: "Built for basic smartphones and remote 3G/4G mobile networks.",
      pill: "Sub-Second Load",
      color: "from-amber-500/20 to-amber-600/10 text-amber-600 border-amber-300",
    },
    {
      step: "03",
      icon: Activity,
      title: "Surge Stress-Testing",
      summary: "Simulated load testing of lakhs of concurrent applicants.",
      pill: "Zero Crash Guarantee",
      color: "from-orange-500/20 to-orange-600/10 text-[#ff6201] border-orange-300",
    },
    {
      step: "04",
      icon: Headphones,
      title: "Live Launch Command",
      summary: "Senior architects stationed live alongside department officers.",
      pill: "24/7 War Room",
      color: "from-emerald-500/20 to-emerald-600/10 text-emerald-600 border-emerald-300",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/90 relative overflow-hidden">
      
      {/* Solid Vector Graphics Background (Zero Dots, Secondary/Tertiary Colors) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -left-20 w-[650px] h-[340px] opacity-20"
          viewBox="0 0 650 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C220,130 420,50 650,150 L650,0 Z"
            fill="url(#procGoldGrad)"
          />
          <defs>
            <linearGradient id="procGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute bottom-16 -right-12 w-60 h-60 rounded-3xl bg-gradient-to-tl from-sky-500/15 via-blue-500/10 to-transparent border border-sky-200/50 rotate-12" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Execution Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
            How We Deliver Mission-Critical Systems on Time
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A disciplined architectural methodology engineered to eliminate launch-day anxiety.
          </p>
        </div>

        {/* Visual Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group p-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Indicator on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff6201] group-hover:via-[#fbbf24] group-hover:to-[#0284c7] transition-all duration-300" />

                <div>
                  {/* Step Number + Duotone Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-3 py-1 rounded-lg border border-orange-200/80 shadow-2xs">
                      PHASE {s.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-[#0284c7] group-hover:text-[#ff6201] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.summary}
                  </p>
                </div>

                {/* Bottom Visual Metric Pill */}
                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-md shadow-2xs group-hover:border-orange-300 transition-colors">
                    {s.pill}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
