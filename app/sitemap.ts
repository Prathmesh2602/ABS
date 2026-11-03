import { MetadataRoute } from "next";
import { solutionsData } from "@/data/solutions";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abs-corporate.example.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // Dynamic Solution routes
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Industry routes
  const industryRoutes: MetadataRoute.Sitemap = industriesData.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Case Study routes
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...solutionRoutes, ...industryRoutes, ...caseStudyRoutes];
}
