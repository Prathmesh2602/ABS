// PRD Section 21: Frontend Content/Data Model

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  category?: string;
  icon?: string;
  children?: NavigationItem[];
  visibility?: "all" | "desktop" | "mobile";
}

export interface CTAConfig {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "teal";
  trackingKey?: string;
}

export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  heroCopy: string;
  categoryTag: string;
  capabilities: string[];
  workflowSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  challengesSolved: string[];
  relatedProjects: string[]; // Project slugs
  cta: CTAConfig;
}

export interface Industry {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  needs: string[];
  solutions: string[]; // Solution slugs
  projects: string[];  // Project slugs
  statHighlight?: {
    value: string;
    label: string;
  };
}

export interface ProjectMetric {
  value: string;
  label: string;
  context: string;
}

export interface ProjectWorkflowStep {
  step: number;
  title: string;
  detail: string;
}

export type ProjectCategory =
  | "AI & Emerging Tech"
  | "State Admissions & CAP"
  | "University ERP & Health"
  | "Government & Grants"
  | "Enterprise & Comms";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  client: string;
  clientShortName: string;
  sector: string;
  category: ProjectCategory;
  isAIEnabled?: boolean;
  jurisdiction?: string;
  officialUrl?: string;
  portalLogo?: string;
  previewArchetype?: "ai_ocr" | "blockchain_ledger" | "seat_matrix" | "statistical_heatmap" | "academic_logbook" | "telecom_gateway" | "vendor_supply";
  highlightBadge?: string;
  summary: string;
  challenge: string[];
  solution: string[];
  workflow: ProjectWorkflowStep[];
  metrics: ProjectMetric[];
  outcomes: string[];
  media: Array<{
    url: string;
    caption: string;
    type: "image" | "diagram";
  }>;
  relatedSolutions: string[];
  approvalStatus: "approved" | "pending_verification";
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}
