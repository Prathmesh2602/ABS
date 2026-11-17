import * as React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#0a192f] text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle brand ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-xs font-semibold text-amber-300 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/60 inline-flex items-center gap-1.5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Get in Touch With Us</span>
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Planning a Portal, Admission System, or AI Helper for Your Department?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
          Talk directly with our senior software team. We can show you working demos of our live portals, explain how they handle heavy student rush, and help you plan your requirements with zero pressure.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Button
            href="/contact"
            variant="gold"
            size="lg"
            className="min-w-[200px] text-[#0a192f] font-bold shadow-xs hover:bg-amber-400"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#0a192f]" />}
          >
            Talk to Our Team
          </Button>
          <Button
            href="/work"
            variant="outline"
            size="lg"
            className="text-white border-slate-600 hover:bg-white/10 hover:border-slate-400 min-w-[180px] font-medium"
          >
            Explore 19 Live Portals
          </Button>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Ambegaon BK, Pune – 411046, Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <a href="mailto:mohan.t@analyticabs.co.in" className="hover:text-white transition-colors">
              mohan.t@analyticabs.co.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <div className="flex items-center gap-1.5">
              <a href="tel:+917020705227" className="hover:text-white transition-colors">
                +91 7020 705 227
              </a>
              <span>/</span>
              <a href="tel:+918888823824" className="hover:text-white transition-colors">
                +91 8888 823 824
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
