"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ArchitectureSlide {
  id: string;
  number: string;
  title: string;
  summary: string;
  image: string;
  link: string;
}

const ARCHITECTURES: ArchitectureSlide[] = [
  // 01. Centralized Online Admissions (CAP)
  {
    id: "admissions-cap",
    number: "01",
    title: "Centralized Online Admissions (CAP)",
    summary:
      "Single-window merit counseling and automated seat allotment matrix conducting multi-round counseling for 12 Lakh+ candidates annually.",
    image: "/images/arch_admissions_team.jpg",
    link: "/work/state-cet-cell",
  },

  // 02. Paperless Government Files (E-Office)
  {
    id: "paperless-egov",
    number: "02",
    title: "Paperless Secretariat & E-Office",
    summary:
      "Eliminates slow physical files through cryptographic DSC token approvals, auditing ₹2,400+ Crore in departmental college grants.",
    image: "/images/arch_egov_team.jpg",
    link: "/work/dhe-grant-in-aid",
  },

  // 03. Time-Locked Exam Security Vault
  {
    id: "exam-vault",
    number: "03",
    title: "Time-Locked Exam Security Vault",
    summary:
      "Confidential question papers stay locked under 256-bit encryption until 15 minutes before exam start, opening only via biometric authorization.",
    image: "/images/arch_exam_team.jpg",
    link: "/work/secured-paper-delivery",
  },

  // 04. AI Document Reader & Grants Intelligence
  {
    id: "ai-grants",
    number: "04",
    title: "AI Document Reader & Grants Intelligence",
    summary:
      "Bilingual OCR and generative AI that parses scanned government circulars and automates salary bill verification across 22 districts.",
    image: "/images/arch_ai_grants.jpg",
    link: "/work/custom-govt-llm",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 70 : -70,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 70 : -70,
    opacity: 0,
  }),
};

export function CorePillars() {
  const [[page, direction], setPage] = React.useState<[number, number]>([0, 0]);

  const currentIndex = ((page % ARCHITECTURES.length) + ARCHITECTURES.length) % ARCHITECTURES.length;
  const current = ARCHITECTURES[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden border-b border-slate-200/90">
      
      {/* ========================================================================= */}
      {/* Attractive Solid Vector Graphics (Secondary & Tertiary Palette)           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Top Sweeping Solid Multi-Color Ribbon Wave */}
        <svg
          className="absolute -top-10 left-0 w-full h-80 sm:h-96"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="solidGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6201" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="solidGradAzure" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="solidGradEmerald" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Layer 1: Emerald/Teal Solid Wave */}
          <path
            d="M0,0 L1440,0 L1440,160 C1180,240 920,130 680,210 C440,290 200,160 0,220 Z"
            fill="url(#solidGradEmerald)"
          />
          {/* Layer 2: Azure/Indigo Solid Wave */}
          <path
            d="M0,0 L1440,0 L1440,220 C1240,140 1020,280 780,200 C520,120 260,260 0,180 Z"
            fill="url(#solidGradAzure)"
          />
          {/* Layer 3: Warm Orange/Amber Solid Ribbon */}
          <path
            d="M0,0 L1440,0 L1440,140 C1120,260 840,90 560,220 C320,130 140,210 0,140 Z"
            fill="url(#solidGradOrange)"
          />
        </svg>

        {/* Bottom Sweeping Solid Multi-Color Wave */}
        <svg
          className="absolute -bottom-10 left-0 w-full h-80 sm:h-96"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="solidGradIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="solidGradTeal" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0a192f" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Layer 1: Slate/Teal Bottom Solid Wave */}
          <path
            d="M0,380 L1440,380 L1440,160 C1200,240 960,110 720,200 C480,290 240,150 0,230 Z"
            fill="url(#solidGradTeal)"
          />
          {/* Layer 2: Indigo/Azure Bottom Solid Ribbon */}
          <path
            d="M0,380 L1440,380 L1440,210 C1260,130 1000,270 740,180 C460,90 220,240 0,160 Z"
            fill="url(#solidGradIndigo)"
          />
        </svg>

        {/* Solid Floating Geometric Shapes */}
        {/* Top-Right: Solid Orange & Amber Angle Block */}
        <div className="absolute top-20 -right-8 w-44 h-32 rounded-3xl bg-gradient-to-br from-orange-500/20 via-amber-400/25 to-orange-400/15 border-2 border-orange-300/40 rotate-12 shadow-lg hidden md:block" />
        
        {/* Top-Left: Solid Azure & Indigo Diamond Block */}
        <div className="absolute top-28 -left-10 w-36 h-36 rounded-3xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-sky-400/15 border-2 border-sky-300/40 -rotate-12 shadow-lg hidden md:block" />
        
        {/* Bottom-Right: Solid Emerald & Teal Prism */}
        <div className="absolute bottom-20 -right-6 w-36 h-36 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-emerald-400/15 border-2 border-emerald-300/40 rotate-45 shadow-lg hidden md:block" />
        
        {/* Bottom-Left: Solid Royal Indigo & Slate Navy Block */}
        <div className="absolute bottom-16 -left-8 w-40 h-32 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-slate-900/15 border-2 border-indigo-300/40 rotate-6 shadow-lg hidden md:block" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* Section Header: Single-line Title, Clean Light Theme                     */}
        {/* ========================================================================= */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6201]" />
            <span>Core Public Technology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight leading-tight sm:whitespace-nowrap">
            Core Digital Architectures
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
            Explore core software systems built to power public examinations, college admissions, and paperless state secretariats.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Carousel Container with Left & Right Toggle Arrows                        */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Previous Toggle Arrow (Left of Carousel) */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous Architecture"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#0a192f] hover:text-[#ff6201] hover:border-orange-300 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-[#ff6201] group-hover:-translate-x-0.5 transition-all" />
          </button>

          {/* Next Toggle Arrow (Right of Carousel) */}
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next Architecture"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#0a192f] hover:text-[#ff6201] hover:border-orange-300 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 group-hover:text-[#ff6201] group-hover:translate-x-0.5 transition-all" />
          </button>

          {/* Main Sliding Carousel Card (Clean Full Image + Minimal Text) */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Left Column: Clean Photorealistic Indian Software Team Image (No Overlays) */}
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Right Column: Minimal Clean Text & Action Button */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight leading-tight">
                      {current.title}
                    </h3>

                    {/* Short Realistic Summary */}
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {current.summary}
                    </p>
                  </div>

                  {/* Bottom Action Button & Slide Indicators */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={current.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a192f] text-white text-xs sm:text-sm font-bold hover:bg-[#ff6201] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
                    >
                      <span>View Architecture Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* Slide Dots */}
                    <div className="flex items-center gap-1.5">
                      {ARCHITECTURES.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            const diff = idx - currentIndex;
                            paginate(diff);
                          }}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === currentIndex
                              ? "w-7 bg-[#ff6201]"
                              : "w-2 bg-slate-200 hover:bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
