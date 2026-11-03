import * as React from "react";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, ShieldCheck, Clock, Sparkles, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ABS — Talk to Our Maharashtra & Pan-India Team",
  description:
    "Get in touch with Analytica Business Solutions (ABS) in Pune, Maharashtra. Discuss portals for student admissions, university exams, teacher recruitments, or government workflow.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Solid Vector Graphics Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -right-20 w-[680px] h-[360px] opacity-25"
          viewBox="0 0 680 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C180,140 420,40 680,160 L680,0 Z"
            fill="url(#contactGoldGrad)"
          />
          <defs>
            <linearGradient id="contactGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-64 -left-16 w-72 h-72 rounded-3xl bg-gradient-to-tr from-sky-500/15 via-blue-500/10 to-transparent border border-sky-200/50 -rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 z-10">
        <Breadcrumbs items={[{ label: "Contact ABS" }]} />

        {/* Section Header */}
        <section className="py-12 sm:py-16 border-b border-slate-200/90">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
              <span>Institutional Partnership &amp; Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0a192f] tracking-tight leading-[1.12]">
              Schedule an Executive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c]">
                Technical Consultation
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
              Consult directly with our principal software architects. We provide live concurrency stress tests, statutory quota rule audits, and custom air-gapped deployment blueprints for state secretariats and universities.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Form Wrapper */}
          <div className="lg:col-span-7">
            <div className="p-1 sm:p-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a192f] mb-2">
                Departmental Requirements
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Tell us about your upcoming admission cycle, exam delivery, or governance workflow requirements.
              </p>
              
              <Suspense
                fallback={
                  <div className="p-12 rounded-2xl bg-white border border-slate-200 text-center text-sm text-slate-500">
                    Loading consultation form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Right Column: Office Coordinates & Trust Dossier */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-6 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#0284c7]" />

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Headquarters &amp; Engineering Center
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] mt-1">
                  Analytica Business Solutions
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-[#ff6201] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a192f]">Pune Operations Center</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Pune, Maharashtra 411005, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a192f]">Executive Mailbox</div>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">
                      contact@analyticabusinesssolutions.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a192f]">Secretariat Direct Desk</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      +91 (020) 2553-XXXX (Mon–Fri 09:30–18:30 IST)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs text-emerald-700 bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/80">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">State data confidentiality, NDAs &amp; CERT-In compliance guaranteed</span>
              </div>
            </div>

            {/* Engagement Timeline Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 space-y-5">
              <h4 className="text-base font-bold text-[#0a192f] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff6201]" />
                <span>Executive Engagement Protocol</span>
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-bold text-sky-700 shrink-0 mt-0.5">
                    24h
                  </span>
                  <div>
                    <strong className="text-[#0a192f]">Architect Review:</strong> Principal software engineer reviews technical scope and schedules briefing.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-bold text-amber-700 shrink-0 mt-0.5">
                    48h
                  </span>
                  <div>
                    <strong className="text-[#0a192f]">Live System Demonstration:</strong> Interactive demonstration of admission, exam vault, or AI OCR engine.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-bold text-emerald-700 shrink-0 mt-0.5">
                    Day 5
                  </span>
                  <div>
                    <strong className="text-[#0a192f]">Deployment Blueprint:</strong> Deliver complete architectural schema, capacity sizing, and rollout timeline.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
