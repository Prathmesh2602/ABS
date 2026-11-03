import * as React from "react";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { ClientsEmblemsStrip } from "@/components/sections/ClientsEmblemsStrip";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Solutions — Portals, Admissions & Exams | ABS",
  description:
    "Explore ABS software solutions for centralized student admissions (CAP), university exams, teacher recruitment, college grants, and government portals.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Solutions" }]} />
      </div>

      {/* Interactive Bento Solutions Grid with Filters */}
      <SolutionsGrid />

      {/* Institutional Trust & Apex State Emblems */}
      <ClientsEmblemsStrip />

      {/* Executive CTA */}
      <FinalCTAExecutive />
    </div>
  );
}
