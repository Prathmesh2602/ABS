"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Landmark,
  Building2,
  Layers,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationItem } from "@/types";

function getCategoryIcon(category: string) {
  switch (category) {
    case "AI & Emerging Tech":
      return <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />;
    case "Admissions & Recruitment":
    case "State Admissions & CAP":
      return <GraduationCap className="w-3.5 h-3.5 text-sky-500 shrink-0" />;
    case "University ERP & Health":
    case "Education & Healthcare":
      return <Building2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />;
    case "Governance & ERPs":
    case "Government & Grants":
    case "Public Sector":
      return <Landmark className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
    case "Enterprise & Comms":
    case "Enterprise":
      return <Layers className="w-3.5 h-3.5 text-orange-500 shrink-0" />;
    case "State Planning":
      return <LineChart className="w-3.5 h-3.5 text-teal-500 shrink-0" />;
    default:
      return <ShieldCheck className="w-3.5 h-3.5 text-[#ff6201] shrink-0" />;
  }
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = React.useState<string | null>("Solutions");
  const [mobileExpandedCategory, setMobileExpandedCategory] = React.useState<{ [key: string]: string | null }>({
    Solutions: "AI & Emerging Tech",
    Projects: "AI & Emerging Tech",
  });
  const [activeSubmenu, setActiveSubmenu] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const getGroupedCategories = (children?: NavigationItem[]) => {
    if (!children) return [];
    const map = new Map<string, NavigationItem[]>();
    for (const child of children) {
      const cat = child.category || "General";
      if (!map.has(cat)) {
        map.set(cat, []);
      }
      map.get(cat)!.push(child);
    }
    return Array.from(map.entries()).map(([category, items]) => ({
      category,
      items,
    }));
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          isScrolled && !mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]/80 py-2 sm:py-2.5"
            : "bg-white border-b border-[#f1f5f9] py-3.5 sm:py-4"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeAllMenus}
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1329] rounded-md px-1 py-0"
            aria-label="Analytica Business Solutions Home"
          >
            <Logo
              priority
              className="h-10 sm:h-11 md:h-12 transition-transform duration-200 group-hover:scale-[1.02]"
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
                const grouped = getGroupedCategories(item.children);
                const currentActiveSubmenu =
                  activeSubmenu[item.label] || grouped[0]?.category || "";
                const activeGroup =
                  grouped.find((g) => g.category === currentActiveSubmenu) ||
                  grouped[0];

                const isProjects = item.label === "Projects";

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      setActiveDropdown(item.label);
                      if (!activeSubmenu[item.label] && grouped[0]) {
                        setActiveSubmenu((prev) => ({
                          ...prev,
                          [item.label]: grouped[0].category,
                        }));
                      }
                    }}
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

                    {/* Grouping Dropdown List Menu and Sub Menus */}
                    {activeDropdown === item.label && (
                      <div
                        className={cn(
                          "absolute top-full pt-2 z-50 origin-top",
                          isProjects
                            ? "left-1/2 -translate-x-[40%] w-[640px] max-w-[calc(100vw-2rem)]"
                            : "left-0 w-[590px] max-w-[calc(100vw-2rem)]"
                        )}
                      >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_22px_65px_-15px_rgba(10,25,47,0.18),0_0_1px_rgba(10,25,47,0.12)] border border-slate-200/90 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-150">
                          {/* Top Brand Signature Gradient Line */}
                          <div className="h-1 w-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#0284c7]" />

                          {/* Connected 2-Pane: List Menu (Left) + Sub Menu (Right) */}
                          <div className="flex divide-x divide-slate-100 min-h-[300px]">
                            {/* LEFT PANE: Grouping Dropdown List Menu (L1 Groups) */}
                            <div className="w-[230px] sm:w-[245px] p-2.5 bg-slate-50/70 flex flex-col justify-between shrink-0">
                              <div>
                                <div className="px-2.5 pt-1 pb-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                  {item.label} Categories
                                </div>

                                <div className="space-y-1">
                                  {grouped.map((g) => {
                                    const isItemActive =
                                      activeGroup?.category === g.category;

                                    return (
                                      <button
                                        key={g.category}
                                        type="button"
                                        onMouseEnter={() =>
                                          setActiveSubmenu((prev) => ({
                                            ...prev,
                                            [item.label]: g.category,
                                          }))
                                        }
                                        onClick={() =>
                                          setActiveSubmenu((prev) => ({
                                            ...prev,
                                            [item.label]: g.category,
                                          }))
                                        }
                                        className={cn(
                                          "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 text-left cursor-pointer group",
                                          isItemActive
                                            ? "bg-white text-[#ff6201] font-bold shadow-xs border border-orange-200/80"
                                            : "text-slate-700 hover:bg-white/80 hover:text-slate-900 border border-transparent"
                                        )}
                                      >
                                        <div className="flex items-center gap-2 min-w-0 pr-1">
                                          {getCategoryIcon(g.category)}
                                          <span className="truncate">
                                            {g.category}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-1 shrink-0 ml-1">
                                          <span
                                            className={cn(
                                              "text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full transition-colors",
                                              isItemActive
                                                ? "bg-orange-50 text-[#ea580c]"
                                                : "bg-slate-200/60 text-slate-500"
                                            )}
                                          >
                                            {g.items.length}
                                          </span>
                                          <ChevronRight
                                            className={cn(
                                              "w-3.5 h-3.5 transition-transform duration-150",
                                              isItemActive
                                                ? "text-[#ff6201] translate-x-0.5"
                                                : "text-slate-400 group-hover:text-slate-600"
                                            )}
                                          />
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Bottom Directory Link */}
                              <div className="pt-2 mt-2 border-t border-slate-200/60 px-1">
                                <Link
                                  href={item.href}
                                  onClick={closeAllMenus}
                                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#ea580c] hover:bg-orange-50/70 transition-colors"
                                >
                                  <span>View All {item.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>

                            {/* RIGHT PANE: Sub Menu (L2 Respective Items for Active Group) */}
                            <div className="flex-1 p-3.5 bg-white flex flex-col justify-between min-w-0">
                              <div>
                                {/* Sub Menu Header */}
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="text-xs font-bold text-[#0a192f] truncate">
                                      {activeGroup?.category}
                                    </span>
                                    <span className="text-[10px] font-medium text-slate-400">
                                      &bull; {activeGroup?.items.length} items
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                                    Sub Menu
                                  </span>
                                </div>

                                {/* Sub Menu Items List */}
                                <div className="space-y-1">
                                  {activeGroup?.items.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={closeAllMenus}
                                      className="flex items-center justify-between p-2 px-2.5 rounded-xl border border-transparent hover:border-orange-200/80 hover:bg-orange-50/40 transition-all duration-150 group text-left"
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#ff6201] group-hover:scale-125 transition-all duration-150 shrink-0" />
                                        <div className="min-w-0">
                                          <span className="text-xs font-semibold text-slate-800 group-hover:text-[#ff6201] transition-colors leading-snug block truncate">
                                            {child.label}
                                          </span>
                                          {child.description && (
                                            <span className="text-[11px] text-slate-400 font-normal line-clamp-1 group-hover:text-slate-600 transition-colors">
                                              {child.description}
                                            </span>
                                          )}
                                        </div>
                                      </div>

                                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                        {child.badge && (
                                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-50 text-[#ea580c] border border-orange-200/70 font-mono">
                                            {child.badge}
                                          </span>
                                        )}
                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#ff6201]" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
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
                  onClick={closeAllMenus}
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

      {/* Mobile Drawer with Grouping List Menus and Expandable Sub Menus */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-x-0 top-[56px] bottom-0 z-40 bg-white flex flex-col overflow-y-auto overscroll-contain border-t border-[#e2e8f0] p-4 sm:p-5 pb-24 shadow-2xl animate-in fade-in duration-200"
          style={{ height: "calc(100dvh - 56px)" }}
        >
          <div className="flex flex-col space-y-3">
            {siteNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedSection === item.label;
              const grouped = getGroupedCategories(item.children);

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
                        <div className="flex items-center gap-2">
                          <span>{item.label}</span>
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {item.children?.length}
                          </span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform text-slate-400",
                            isExpanded && "rotate-180 text-[#ff6201]"
                          )}
                        />
                      </button>

                      {/* Mobile L1 Groups Menu with Expandable L2 Sub Menus */}
                      {isExpanded && (
                        <div className="mt-2.5 pl-2 space-y-2 border-l-2 border-orange-200">
                          {grouped.map((group) => {
                            const isCategoryOpen =
                              mobileExpandedCategory[item.label] === group.category;

                            return (
                              <div
                                key={group.category}
                                className="bg-slate-50/70 rounded-xl overflow-hidden border border-slate-100"
                              >
                                {/* L1 Category Button (Toggles Sub Menu) */}
                                <button
                                  type="button"
                                  onClick={() =>
                                    setMobileExpandedCategory((prev) => ({
                                      ...prev,
                                      [item.label]: isCategoryOpen
                                        ? null
                                        : group.category,
                                    }))
                                  }
                                  className="w-full flex items-center justify-between p-2.5 text-left cursor-pointer"
                                >
                                  <div className="flex items-center gap-2">
                                    {getCategoryIcon(group.category)}
                                    <span className="text-xs font-bold text-[#0a192f] uppercase tracking-wider">
                                      {group.category}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded-full bg-white text-slate-500 border border-slate-200/60">
                                      {group.items.length}
                                    </span>
                                    <ChevronDown
                                      className={cn(
                                        "w-3.5 h-3.5 text-slate-400 transition-transform duration-150",
                                        isCategoryOpen && "rotate-180 text-[#ff6201]"
                                      )}
                                    />
                                  </div>
                                </button>

                                {/* L2 Sub Menu Items */}
                                {isCategoryOpen && (
                                  <div className="p-2 pt-0 space-y-1 border-t border-slate-200/50 bg-white/70">
                                    {group.items.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={closeAllMenus}
                                        className="flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#ff6201] hover:bg-orange-50/50 transition-colors"
                                      >
                                        <div className="flex items-center gap-2 min-w-0 pr-1">
                                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                                          <span className="truncate">
                                            {child.label}
                                          </span>
                                        </div>
                                        {child.badge && (
                                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100/70 text-[#ea580c] shrink-0 font-mono">
                                            {child.badge}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}

                          <Link
                            href={item.href}
                            onClick={closeAllMenus}
                            className="block py-1.5 px-2 text-xs font-bold text-[#ea580c] hover:underline"
                          >
                            Explore All {item.label} &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className="text-base font-bold text-[#0a192f] flex items-center justify-between py-1.5"
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
              onClick={closeAllMenus}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
