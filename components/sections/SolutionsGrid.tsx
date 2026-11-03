"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CapabilityCard {
  id: string;
  title: string;
  category: string;
  briefing: string;
  metric: string;
  image: string;
  imageAlt: string;
  href: string;
}

export function SolutionsGrid() {
  const capabilities: CapabilityCard[] = [
    {
      id: "admissions",
      title: "Centralized Online Admissions",
      category: "Admissions & Counseling Engine",
      briefing: "Single-window CAP counseling handling 12+ Lakh students annually with zero server crashes.",
      metric: "12 Lakh+ Students",
      image: "/images/cap_admissions_hub.jpg",
      imageAlt: "Indian university admissions counseling center and student onboarding portal",
      href: "/solutions/education-admissions",
    },
    {
      id: "ai-ocr",
      title: "Intelligent Document AI & OCR",
      category: "Generative AI & Extraction",
      briefing: "Bilingual Marathi and English OCR with automated official government noting generation.",
      metric: "98.4% Dual OCR",
      image: "/images/bilingual_ai_ocr_lab.jpg",
      imageAlt: "Indian AI software engineer analyzing bilingual Marathi and English OCR bounding boxes",
      href: "/work/custom-govt-llm",
    },
    {
      id: "exam-vault",
      title: "Encrypted Question Paper Vault",
      category: "Exam Security & Cryptography",
      briefing: "Biometrically secured exam paper delivery 15 minutes prior to commencement with zero leaks.",
      metric: "Zero Paper Leaks",
      image: "/images/exam_vault_security.jpg",
      imageAlt: "Indian cybersecurity architect authenticating encrypted exam vault at biometric terminal",
      href: "/work/secured-paper-delivery",
    },
    {
      id: "egov-grants",
      title: "Digital Governance & Fiscal Audits",
      category: "Secretariat Workflow Automation",
      briefing: "Paperless file routing and digital auditing for ₹2,400+ Crore in aided college grants.",
      metric: "₹2,400 Cr+ Audited",
      image: "/images/state_secretariat_grants.jpg",
      imageAlt: "State government secretary and systems consultant reviewing paperless fiscal grants dashboard",
      href: "/solutions/digital-governance",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200/90">
      
      {/* Solid Vector Graphics Background (Clean ribbons, zero dots) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-12 -left-20 w-[680px] h-[360px] opacity-25"
          viewBox="0 0 680 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,180 C180,60 380,240 680,100 L680,0 L0,0 Z"
            fill="url(#capAzureGrad)"
          />
          <defs>
            <linearGradient id="capAzureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-16 -right-12 w-64 h-64 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-200/50 rotate-12" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight">
            Enterprise Platforms Built for Public Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            High-concurrency digital architectures engineered for state secretariats, university directorates, and recruitment boards.
          </p>
        </div>

        {/* 2x2 Grid of Human-Centric Capability Cards (LSInextGen Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {capabilities.map((cap) => (
            <Link
              key={cap.id}
              href={cap.href}
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ea580c] group-hover:via-[#f59e0b] group-hover:to-[#0284c7] transition-all duration-300 z-10" />

              {/* High-Resolution Photo of Indian Software Engineers & Tech Labs */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={cap.image}
                  alt={cap.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Metric Pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-[#0a192f] text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff6201]" />
                  <span>{cap.metric}</span>
                </div>

                {/* Top-Right Redirection Arrow */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-white/80 text-slate-700 group-hover:bg-[#ff6201] group-hover:text-white group-hover:border-[#ff6201] flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Minimal Briefing Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1.5">
                    {cap.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a192f] group-hover:text-[#ff6201] transition-colors leading-snug">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {cap.briefing}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ea580c] group-hover:text-[#ff6201] transition-colors">
                  <span>Explore Technical Architecture</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
