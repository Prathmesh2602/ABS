"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "metrics", label: "Scale & Metrics" },
  { id: "preview", label: "Architecture Deck" },
  { id: "challenges", label: "Challenges" },
  { id: "solution", label: "System Specs" },
  { id: "workflow", label: "Workflow Engine" },
  { id: "outcomes", label: "Audited Results" },
];

export function CaseStudyQuickNav({ officialUrl }: { officialUrl?: string }) {
  const [activeSection, setActiveSection] = React.useState<string>("overview");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-18 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-2xs my-6 transition-all duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        {/* Quick Jump Links */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 hidden md:inline">
            Dossier Index:
          </span>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#0a192f] text-white shadow-xs scale-102"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#0a192f]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Live Portal Launch Link if available */}
        {officialUrl && (
          <a
            href={`https://${officialUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6201] hover:text-[#ea580c] shrink-0 transition-colors"
          >
            <span>Live Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
