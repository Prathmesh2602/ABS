"use client";

import * as React from "react";
import { Star } from "lucide-react";

interface Milestone {
  id: number;
  year: string;
  milestone: string;
  title: string;
  points: string[];
  color: "orange" | "blue";
}

export function TimelineMilestones() {
  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2004",
      milestone: "Milestone 1",
      title: "Foundation in Pune",
      points: [
        "Established headquarters in Pune, Maharashtra.",
        "Digitizing state departments & apex directorates.",
      ],
      color: "orange",
    },
    {
      id: 2,
      year: "2010",
      milestone: "Milestone 2",
      title: "Centralized Admissions (CAP)",
      points: [
        "Maharashtra's single-window CAP online portal.",
        "Automated constitutional reservation counseling.",
      ],
      color: "blue",
    },
    {
      id: 3,
      year: "2016",
      milestone: "Milestone 3",
      title: "Encrypted Exam Vaults",
      points: [
        "End-to-end encrypted question paper vaults.",
        "Biometric verification & zero-leak proctoring.",
      ],
      color: "orange",
    },
    {
      id: 4,
      year: "2020",
      milestone: "Milestone 4",
      title: "Statewide Recruitment",
      points: [
        "High-concurrency government recruitment engines.",
        "Statewide merit rosters with 100% legal compliance.",
      ],
      color: "blue",
    },
    {
      id: 5,
      year: "2026+",
      milestone: "Milestone 5",
      title: "Private AI & Governance",
      points: [
        "Air-gapped bilingual Marathi/English LLMs.",
        "Paperless grant tracking for ₹2,400+ Cr budgets.",
      ],
      color: "orange",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/90 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-2 font-mono">
            Evolution &amp; Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a192f] tracking-tight">
            Timelines and Milestones
          </h2>
          <div className="w-16 h-1 bg-[#ea580c] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Over two decades of proven digital architectures engineered for high-stakes public governance.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: Alternating Horizontal Timeline (Ref Image) */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative py-6">
          {/* Dual-tone background panel dividing top and bottom */}
          <div className="relative rounded-3xl border border-slate-200/90 shadow-xs bg-white">
            {/* Top Half Subtle Tint (Peach/Orange tint) */}
            <div className="h-[330px] rounded-t-3xl bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-white" />
            {/* Horizontal Axis Divider Line */}
            <div className="h-1.5 w-full bg-[#cbd5e1] relative z-10" />
            {/* Bottom Half Subtle Tint (Light Slate/Sky tint) */}
            <div className="h-[330px] rounded-b-3xl bg-gradient-to-b from-white via-sky-50/20 to-slate-50/50" />

            {/* Content Overlay Grid (5 columns for 5 milestones) */}
            <div className="absolute inset-0 grid grid-cols-5 z-20">
              {milestones.map((m) => {
                const isTop = m.id % 2 !== 0; // 1, 3, 5 are TOP
                const isOrange = m.color === "orange";

                return (
                  <div key={m.id} className="relative flex flex-col items-center h-full px-2">
                    {/* Node on the Central Horizontal Axis (Height is 661.5px total, axis is at center 330px) */}
                    <div
                      className={`absolute top-[330px] -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md z-30 flex items-center justify-center transition-transform hover:scale-110 ${
                        isOrange ? "bg-[#ea580c]" : "bg-[#0284c7]"
                      }`}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>

                    {isTop ? (
                      /* TOP MILESTONE (1, 3, 5) */
                      <div className="absolute bottom-[338px] inset-x-1.5 flex flex-col items-center pb-1">
                        {/* Milestone Card Content */}
                        <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all text-left">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                              {m.milestone}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#ea580c] font-black text-xs font-mono">
                              {m.year}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-[#0a192f] leading-snug mb-2">
                            {m.title}
                          </h3>
                          <ul className="space-y-1.5">
                            {m.points.map((pt, idx) => (
                              <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-[#ea580c] font-bold text-xs shrink-0 mt-0.5">→</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Connector Line down to the Node */}
                        <div className="flex flex-col items-center mt-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-xs ${
                            isOrange ? "bg-[#ea580c] text-white" : "bg-[#0284c7] text-white"
                          }`}>
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <div className="w-0.5 h-5 bg-slate-300" />
                        </div>
                      </div>
                    ) : (
                      /* BOTTOM MILESTONE (2, 4) */
                      <div className="absolute top-[338px] inset-x-1.5 flex flex-col items-center pt-1">
                        {/* Connector Line up to the Node */}
                        <div className="flex flex-col items-center mb-2">
                          <div className="w-0.5 h-5 bg-slate-300" />
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-xs ${
                            isOrange ? "bg-[#ea580c] text-white" : "bg-[#0284c7] text-white"
                          }`}>
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </div>
                        </div>

                        {/* Milestone Card Content */}
                        <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all text-left">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                              {m.milestone}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] font-black text-xs font-mono">
                              {m.year}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-[#0a192f] leading-snug mb-2">
                            {m.title}
                          </h3>
                          <ul className="space-y-1.5">
                            {m.points.map((pt, idx) => (
                              <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                                <span className="text-[#0284c7] font-bold text-xs shrink-0 mt-0.5">→</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW: Connected Vertical Timeline        */}
        {/* ======================================================== */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8">
          {/* Vertical continuous line */}
          <div className="absolute top-2 bottom-2 left-2.5 sm:left-3.5 w-0.5 bg-slate-200" />

          {milestones.map((m) => {
            const isOrange = m.color === "orange";

            return (
              <div key={m.id} className="relative group">
                {/* Node on Vertical Line */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center ${
                    isOrange ? "bg-[#ea580c] text-white" : "bg-[#0284c7] text-white"
                  }`}
                >
                  <Star className="w-2.5 h-2.5 fill-current" />
                </div>

                {/* Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
                      {m.milestone}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-black border ${
                        isOrange
                          ? "bg-orange-50 border-orange-200 text-[#ea580c]"
                          : "bg-sky-50 border-sky-200 text-[#0284c7]"
                      }`}
                    >
                      {m.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0a192f] mb-2">
                    {m.title}
                  </h3>

                  <ul className="space-y-1.5">
                    {m.points.map((pt, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className={isOrange ? "text-[#ea580c] font-bold" : "text-[#0284c7] font-bold"}>
                          →
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
