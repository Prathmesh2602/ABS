"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export function HeroExecutive() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates (-1 to +1) for smooth parallax tracking
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

  // Handle Mouse Movement for Real-Time Subtle Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normX = (clientX / rect.width - 0.5) * 2;
    const normY = (clientY / rect.height - 0.5) * 2;

    setMouseOffset({ x: normX, y: normY });
    setCursorPos({ x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Micro-interaction Animation Variants for Site Load/Reload
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: 0.42,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Executive Hero Section"
      className="relative bg-white text-slate-900 min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-end overflow-hidden border-b border-slate-200/90 select-none pt-14 sm:pt-18 lg:pt-20 pb-0"
    >
      {/* ========================================================================= */}
      {/* 1. SOLID GRAPHICAL SHAPES IN GOLDEN GRADIENTS ON PLAIN WHITE BACKGROUND  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Top Sweeping Solid Metallic Gold Ribbon Wave */}
        <svg
          className="absolute -top-12 left-0 w-full h-80 sm:h-96 opacity-40"
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroWhiteGold1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#d97706" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="heroWhiteGold2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="url(#heroWhiteGold1)"
          />
          <path
            d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,202.7C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#heroWhiteGold2)"
          />
        </svg>

        {/* Solid Top-Right 3D Geometric Gold Plate */}
        <div className="absolute -top-24 -right-16 w-88 h-88 rounded-3xl bg-gradient-to-br from-amber-400/25 via-yellow-300/20 to-amber-500/10 border-2 border-amber-300/40 rotate-12 shadow-[0_20px_50px_rgba(245,158,11,0.12)]" />
        
        {/* Solid Bottom-Left Gold Accent Plate */}
        <div className="absolute -bottom-28 -left-20 w-96 h-96 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-yellow-200/15 to-transparent border-2 border-amber-300/35 -rotate-12 shadow-[0_20px_50px_rgba(217,119,6,0.1)]" />

        {/* Bottom Gold Swell Wave */}
        <svg
          className="absolute -bottom-10 left-0 w-full h-44 opacity-25"
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,220L1360,220C1280,220,1120,220,960,220C800,220,640,220,480,220C320,220,160,220,80,220L0,220Z"
            fill="url(#heroWhiteGold1)"
          />
        </svg>

        {/* Subtle Ambient Golden Spotlight on Mouse Move */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 w-[550px] h-[550px] rounded-full blur-3xl opacity-25 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(251,191,36,0.08) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN TWO-COLUMN HERO CONTENT (MINIMAL & ATTRACTIVE)                    */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end w-full">
          
          {/* ======================================================================= */}
          {/* LEFT COLUMN: TITLE (BOLD & ANIMATED), PARA, AND CTA (Comfortably Padded) */}
          {/* ======================================================================= */}
          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            style={{
              transform: `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 4}px, 0)`,
              transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            className="lg:col-span-6 flex flex-col items-start text-left pb-12 sm:pb-16 lg:pb-24 pt-6"
          >
            
            {/* Short, Bold Headline with Staggered Word Load Animation */}
            <motion.h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black tracking-tight text-[#0a192f] leading-[1.12]">
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                Next-Gen
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                AI &amp;
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                Scalable
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                Digital
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                Systems
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-3 sm:mr-3.5">
                for
              </motion.span>
              <motion.span
                variants={wordVariants}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#ea580c] relative"
              >
                Public Institutions
              </motion.span>
            </motion.h1>

            {/* Paragraph (Clean, Authoritative Context with Load Animation) */}
            <motion.p
              variants={paragraphVariants}
              className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal"
            >
              For over two decades, Analytica Business Solutions has designed and delivered resilient AI solutions and digital architectures for public institutions. We specialize in zero-downtime platforms, strict statutory compliance, and institutional data security.
            </motion.p>

            {/* CTA Button with Load Animation and Micro-Interactions */}
            <motion.div
              variants={ctaVariants}
              className="mt-8 sm:mt-9 flex items-center"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#ea580c] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(234,88,12,0.35)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.5)] transition-shadow duration-200 cursor-pointer"
                >
                  <span className="drop-shadow-xs">Schedule Executive Briefing</span>
                  <ArrowRight className="w-4 h-4 stroke-[3] text-white group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* ======================================================================= */}
          {/* RIGHT COLUMN: ENLARGED CUTOUT OF ENGINEERS TOUCHING BOTTOM OF HERO      */}
          {/* ======================================================================= */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative flex flex-col items-center justify-end self-end pb-0 overflow-visible"
          >
            
            <div
              style={{
                transform: `translate3d(${mouseOffset.x * -6}px, ${mouseOffset.y * -4}px, 0)`,
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="relative w-full max-w-[780px] lg:max-w-[880px] xl:max-w-[960px] flex items-end justify-center"
            >
              {/* Solid Golden Gradient Graphic Frame / Backdrop Behind Image */}
              <div className="absolute bottom-10 w-[420px] sm:w-[550px] h-[420px] sm:h-[550px] rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/25 to-amber-500/10 blur-3xl pointer-events-none" />
              
              {/* Solid Rotated Gold Architectural Rhombus Frame */}
              <div className="absolute bottom-14 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-3xl border-2 border-amber-400/40 rotate-12 bg-gradient-to-br from-amber-400/15 via-yellow-200/20 to-orange-400/10 pointer-events-none shadow-[0_20px_50px_rgba(245,158,11,0.15)]" />
              
              {/* Secondary Concentric Gold Frame */}
              <div className="absolute bottom-18 w-[340px] sm:w-[430px] h-[340px] sm:h-[430px] rounded-3xl border border-amber-500/30 -rotate-6 pointer-events-none" />

              {/* Enlarged Cutout of Indian Software Engineers Rising Taller Towards Top, Touching Bottom Edge */}
              <Image
                src="/images/hero_engineers_cutout.png"
                alt="Analytica Business Solutions Software Engineers Collaborating"
                width={1050}
                height={784}
                priority
                className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(217,119,6,0.2)] select-none pointer-events-none origin-bottom scale-120 sm:scale-130 lg:scale-135 xl:scale-145 block -mb-px"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
