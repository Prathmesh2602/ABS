import { HeroExecutive } from "@/components/sections/HeroExecutive";
import { ExecutiveStats } from "@/components/sections/ExecutiveStats";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ClientsEmblemsStrip } from "@/components/sections/ClientsEmblemsStrip";
import { FinalCTAExecutive } from "@/components/sections/FinalCTAExecutive";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 01. Who We Are & Mission (Executive Hero with Indian Engineers Cutout) */}
      <HeroExecutive />

      {/* 02. Verified Scale & Impact Metrics (Stats Placed at Top) */}
      <ExecutiveStats />

      {/* 03. What We Build & Deliver (Enterprise Platforms Built for Public Scale) */}
      <SolutionsGrid />

      {/* 04. How We Work (50/50 Human Architects Collaboration & 3-Step Deterministic Methodology) */}
      <HowWeWork />

      {/* 05. Who We Serve (Sectors & Client Base with 1-Sentence Summaries) */}
      <IndustriesSection />

      {/* 06. Proven Track Record & Institutional Trust (Apex State Emblems) */}
      <ClientsEmblemsStrip />

      {/* 07. Executive Consultation CTA */}
      <FinalCTAExecutive />
    </main>
  );
}
