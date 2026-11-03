"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = React.useState<string | null>("Solutions");

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          mounted && isScrolled && !mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]/80 py-2 sm:py-2.5"
            : "bg-white border-b border-[#f1f5f9] py-3.5 sm:py-4"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1329] rounded-md px-1 py-0"
            aria-label="Analytica Business Solutions Home"
          >
            <Logo
              priority
              className="h-9 sm:h-10 md:h-11 lg:h-12 transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {siteNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                        isActive || activeDropdown === item.label
                          ? "text-[#0a192f] font-bold bg-[#f4f7fb]"
                          : "text-[#475569] hover:text-[#0a192f] hover:bg-[#f8fafc]"
                      )}
                      aria-expanded={activeDropdown === item.label}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180 text-[#0a192f]"
                        )}
                      />
                    </button>

                    {/* Minimal Titles-Only Dropdown Menu (Premium, Attractive & Fully Visible) */}
                    {activeDropdown === item.label && (
                      <div
                        className={cn(
                          "absolute top-full pt-2 z-50 origin-top",
                          item.children && item.children.length > 6
                            ? "left-0 w-[680px] max-w-[calc(100vw-2rem)]"
                            : "left-0 w-[620px] max-w-[calc(100vw-2rem)]"
                        )}
                      >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_22px_65px_-15px_rgba(10,25,47,0.16),0_0_1px_rgba(10,25,47,0.1)] border border-slate-200/90 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
                          
                          {/* Top Brand Signature Gradient Line */}
                          <div className="h-1 w-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#0284c7]" />

                          <div className="p-3">
                            {/* 2-Column Minimal Titles List with Full Text Visibility & Tactile Hover */}
                            <div className="grid grid-cols-2 gap-x-2.5 gap-y-1">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center justify-between p-2.5 px-3 rounded-xl border border-transparent hover:border-orange-200/80 hover:bg-gradient-to-r hover:from-orange-50/80 hover:via-amber-50/30 hover:to-transparent transition-all duration-200 group text-left"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#ff6201] group-hover:scale-125 transition-all duration-200 shrink-0" />
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[#ff6201] transition-colors leading-snug">
                                      {child.label}
                                    </span>
                                  </div>

                                  <div className="w-6 h-6 rounded-lg bg-transparent group-hover:bg-white text-slate-400 group-hover:text-[#ff6201] group-hover:shadow-2xs flex items-center justify-center shrink-0 ml-1.5 transition-all duration-200">
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Refined Bottom Overview Strip */}
                            <div className="mt-3 pt-2.5 border-t border-slate-100 px-3 pb-1 -mx-3.5 -mb-3.5 bg-slate-50/70 rounded-b-2xl flex items-center justify-between">
                              <span className="text-[11px] text-slate-500 font-medium">
                                {item.children?.length} {item.label} Available
                              </span>
                              <Link
                                href={item.href}
                                className="text-xs font-bold text-[#ea580c] hover:text-[#ff6201] flex items-center gap-1.5 transition-colors group py-1"
                              >
                                <span>Explore Complete {item.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-[#0a192f] font-semibold bg-[#f4f7fb]"
                      : "text-[#475569] hover:text-[#0a192f] hover:bg-[#f8fafc]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="orange"
              size="md"
              className="hidden sm:inline-flex shadow-[0_4px_18px_rgba(255,98,1,0.28)] hover:shadow-[0_6px_24px_rgba(255,98,1,0.4)]"
              rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#0f172a] hover:bg-[#f1f5f9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a192f]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-[56px] bottom-0 z-40 bg-white flex flex-col overflow-y-auto overscroll-contain border-t border-[#e2e8f0] p-5 pb-24 shadow-2xl animate-in fade-in duration-200"
          style={{ height: "calc(100dvh - 56px)" }}
        >
          <div className="flex flex-col space-y-3">
            {siteNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedSection === item.label;

              return (
                <div key={item.label} className="border-b border-[#f1f5f9] pb-3">
                  {hasChildren ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedSection(isExpanded ? null : item.label)
                        }
                        className="w-full flex items-center justify-between text-base font-bold text-[#0a192f] py-1.5 text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform text-slate-400",
                            isExpanded && "rotate-180 text-[#ff6201]"
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-2 pl-3 space-y-1 border-l-2 border-orange-200">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-[#ff6201] hover:bg-orange-50/50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-base font-bold text-[#0a192f] flex items-center justify-between py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#e2e8f0] mt-auto space-y-3">
            <Button
              href="/contact"
              variant="orange"
              size="lg"
              className="w-full text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
