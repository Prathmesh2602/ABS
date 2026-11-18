import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/navigation";
import { ShieldCheck, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060d1a] text-slate-400 border-t border-slate-800">
      {/* Top Pre-Footer Bar */}
      <div className="border-b border-slate-800/80 py-8 bg-[#0a192f]/80">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#0284c7]/20 border border-[#0284c7]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="!text-white font-extrabold text-base sm:text-lg flex items-center gap-2">
                <span>Trusted IT Partner for Governments &amp; Universities</span>
                <span className="text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-400/30 px-2.5 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI Ready
                </span>
              </h4>
              <p className="text-sm text-slate-300 mt-1">
                Over 20 years building dependable portals for State CET Cell, School Education, Higher Education, and State Universities.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#ea580c] text-white font-bold text-sm shadow-[0_8px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_12px_28px_rgba(234,88,12,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Main Directory */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block p-2.5 rounded-2xl bg-white shadow-md hover:opacity-95 transition-opacity"
              aria-label="Analytica Business Solutions Home"
            >
              <Logo className="h-9 sm:h-10 md:h-11" />
            </Link>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-sm font-normal">
              Analytica Business Solutions (ABS) builds simple, reliable digital portals, college admission systems, and AI document assistants for state departments and universities across India.
            </p>
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Survey No. 33/6, NANDADEEP RESIDENCY, Behind Ichhapurti Ganesh Mandir, Dattanagar Road, Ambegaon BK, Pune – 411046
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e8b206] shrink-0" />
                <a
                  href="mailto:sales@analyticabs.co.in"
                  className="hover:text-white transition-colors"
                >
                  sales@analyticabs.co.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-1.5">
                  <a
                    href="tel:+917020705227"
                    className="hover:text-white transition-colors"
                  >
                    +91 7020 705 227
                  </a>
                  <span className="text-slate-500">/</span>
                  <a
                    href="tel:+918888823824"
                    className="hover:text-white transition-colors"
                  >
                    +91 8888 823 824
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-3.5">
              <h4 className="!text-white text-xs sm:text-sm font-black uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>© 2026 Analytica Business Solutions (ABS). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">STQC &amp; GIGW Compliance</span>
            <span className="hover:text-white cursor-pointer transition-colors">Zero-Trust Architecture</span>
            <span className="hover:text-white cursor-pointer transition-colors">Data Privacy &amp; Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
