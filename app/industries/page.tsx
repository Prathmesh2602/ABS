import * as React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Work With — Government & Universities | ABS",
  description:
    "Software solutions tailored for State Government Departments, CET Cells, Universities, and Teacher Recruitment Boards in Maharashtra and India.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Sectors & Industries" }]} />
      </div>

      {/* High-Impact Visual Industry Section (LSInextGen Style) */}
      <IndustriesSection />

      {/* Executive Call to Action */}
      <FinalCTAExecutive />
    </div>
  );
}
