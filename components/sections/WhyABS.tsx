import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Server, Scale, Clock, CheckCircle2, Sparkles } from "lucide-react";

export function WhyABS() {
  const differentiators = [
    {
      title: "Never Freezes When Lakhs Log In Together",
      description:
        "When exam results come out or the admission deadline is minutes away, lakhs of students open the site at the exact same second. Our servers stay fast, smooth, and never crash.",
      proof: "Over 12 Lakh students admitted every year through State CET Cell with zero downtime.",
      icon: Server,
    },
    {
      title: "100% Fair Seat Allotment by Government Rules",
      description:
        "We program every caste category, reservation rule, and quota strictly according to government circulars. Every student gets the exact seat they deserve by pure merit.",
      proof: "Proven across hundreds of admission rounds with zero seat disputes or court issues.",
      icon: Scale,
    },
    {
      title: "20+ Years of Direct Experience with State Bodies",
      description:
        "We have spent over twenty years working on the ground with state secretariats, testing cells, and universities across Maharashtra, Haryana, and Jharkhand.",
      proof: "Long-term technology partner for State CET Cell, Higher Education, and State Universities.",
      icon: Clock,
    },
    {
      title: "Safe on Private Government Servers",
      description:
        "Sensitive citizen files and exam papers never leave government protection. Our AI assistants and digital question vaults run on secure, private systems.",
      proof: "Meets official government security standards (CERT-In compliant) with full audit logs.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Trust ABS"
          badgeVariant="azure"
          title="Why Governments & Universities Trust Us"
          description="When lakhs of student futures and state government rules are at stake, departmental officers rely on Analytica Business Solutions for software that simply works."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-[#0a192f] flex items-center justify-center mb-4 group-hover:bg-[#0a192f] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a192f] group-hover:text-[#0284c7] transition-colors leading-snug">
                    {diff.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{diff.proof}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
