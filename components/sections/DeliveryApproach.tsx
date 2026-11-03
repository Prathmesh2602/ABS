import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookOpen, Laptop, Activity, Headphones, UserCheck, FileCheck } from "lucide-react";

export function DeliveryApproach() {
  const steps = [
    {
      number: "01",
      title: "Study Government Rules & Circulars",
      description: "We carefully study department rules, reservation quotas, and official procedures so there are never any legal questions later.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Design Clean & Fast Pages",
      description: "We make simple, uncluttered pages that open fast on mobile phones, even in small towns and villages with slow internet.",
      icon: Laptop,
    },
    {
      number: "03",
      title: "Test with Heavy Rush Logins",
      description: "We test the portal with lakhs of simulated logins at the exact same minute so the server never crashes on the final day.",
      icon: Activity,
    },
    {
      number: "04",
      title: "Live Monitoring on Important Days",
      description: "Our technical team monitors the portal live 24/7 during application rounds, choice locking, and result announcements.",
      icon: Headphones,
    },
    {
      number: "05",
      title: "Train Officers & Provide Helplines",
      description: "We train department staff with hands-on practice and provide phone and email helpline support to answer student doubts.",
      icon: UserCheck,
    },
    {
      number: "06",
      title: "Keep Clear Digital Audit Trails",
      description: "Every single seat allotment, fee payment, and approval is saved permanently and ready for official government audits.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          badgeVariant="azure"
          title="How We Deliver Projects On Time Without Glitches"
          description="From studying department circulars to handling peak admission rush, our simple step-by-step approach ensures calm, reliable delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#0284c7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/80">
                      Step {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0a192f] group-hover:bg-[#0a192f] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#0284c7] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
