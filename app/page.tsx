import { HeroExecutive } from "@/components/sections/HeroExecutive";
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

      {/* 02. What We Build & Deliver (Core Capabilities 2x2 Grid with Indian Engineering Photos) */}
      <SolutionsGrid />

      {/* 03. How We Work (50/50 Human Architects Collaboration & 3-Step Deterministic Methodology) */}
      <HowWeWork />

      {/* 04. Who We Serve (Sectors & Client Base with 1-Sentence Summaries) */}
      <IndustriesSection />

      {/* 05. Proven Track Record & Institutional Trust (3 Big Numbers + Apex State Emblems) */}
      <ClientsEmblemsStrip />

      {/* 06. Executive Consultation CTA */}
      <FinalCTAExecutive />
    </main>
  );
}
