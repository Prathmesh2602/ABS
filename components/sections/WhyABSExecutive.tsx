import * as React from "react";
import { ShieldCheck, Server, Scale, Clock, Users, Zap, Sparkles } from "lucide-react";

export function WhyABSExecutive() {
  const guarantees = [
    {
      icon: Server,
      title: "Zero Freeze Peak Concurrency",
      metric: "0 Crashes",
      highlight: "12 Lakh+ Students Simultaneously",
      tag: "Stress-Tested Capacity",
      iconBg: "bg-orange-50 text-[#ff6201] border-orange-200",
    },
    {
      icon: Scale,
      title: "100% Constitutional Quota Fidelity",
      metric: "Zero Disputes",
      highlight: "Strict Government Roster Compliance",
      tag: "Audit & Court Proof",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      icon: ShieldCheck,
      title: "Air-Gapped Government Cloud",
      metric: "100% Private",
      highlight: "Zero Third-Party Cloud Data Leakage",
      tag: "CERT-In & State Ready",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    },
    {
      icon: Users,
      title: "Live On-Site Launch Command",
      metric: "24/7 Presence",
      highlight: "Engineers Beside Officers on Result Days",
      tag: "20+ Years Track Record",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 text-slate-900 relative overflow-hidden border-b border-slate-200/90">
      
      {/* Solid Vector Graphics Background (Zero Dots, Secondary/Tertiary Colors) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 -right-24 w-[700px] h-[380px] opacity-25"
          viewBox="0 0 700 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C200,240 450,40 700,180 L700,0 L0,0 Z"
            fill="url(#whyGoldAzureGrad)"
          />
          <defs>
            <linearGradient id="whyGoldAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-200/50 -rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Context + Visual Certification Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
                <span>The ABS Guarantee</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a192f] leading-[1.15]">
                Why State Governments Trust Us When Results Matter Most
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                When lakhs of students log in simultaneously, our core digital architectures deliver flawless seat allocations with zero crashes and zero legal disputes.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Proof Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-orange-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Top Icon Medallion & Metric Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${g.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-[#0a192f] shadow-xs">
                        {g.metric}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0a192f] leading-snug group-hover:text-[#ff6201] transition-colors">
                      {g.title}
                    </h3>
                    
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {g.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
