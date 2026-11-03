import { NavigationItem, CTAConfig } from "@/types";

export const siteNavigation: NavigationItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      // AI & Emerging Tech
      {
        label: "AI Document OCR & Letter Drafter",
        href: "/work/custom-govt-llm",
        description: "Bilingual circular scanning, table extraction & formal Secretariat noting drafts.",
        badge: "GenAI",
        category: "AI & Emerging Tech",
      },
      {
        label: "Blockchain Paper Delivery Vault",
        href: "/work/secured-paper-delivery",
        description: "Encrypted exam paper distribution 15 mins before exam; zero question paper leaks.",
        badge: "Zero Leaks",
        category: "AI & Emerging Tech",
      },
      {
        label: "AI Costing & Escrow Engine",
        href: "/work/interior-mitra",
        description: "Algorithmic room estimation and milestone-gated escrow disbursements.",
        badge: "Platform",
        category: "AI & Emerging Tech",
      },

      // State Admissions & Testing
      {
        label: "Centralized Online Admissions (CAP)",
        href: "/solutions/education-admissions",
        description: "Single-window CAP admissions for 12L+ students, E-scrutiny & merit rounds.",
        badge: "12L+ Students",
        category: "Admissions & Recruitment",
      },
      {
        label: "Exam Conduct & QR Hall Tickets",
        href: "/solutions/examination-management",
        description: "Secure center allocation, barcode marks evaluation, and crash-proof result servers.",
        category: "Admissions & Recruitment",
      },
      {
        label: "Teacher Recruitment (PAVITRA)",
        href: "/solutions/recruitment-management",
        description: "100% rule-based merit matching and appointment orders across 67,000+ posts.",
        badge: "67,000+ Placed",
        category: "Admissions & Recruitment",
      },
      {
        label: "Career Aptitude & Counselling",
        href: "/work/career-counselling-psychometric",
        description: "Psychometric profiling and academic pathway mapping for entrance students.",
        category: "Admissions & Recruitment",
      },

      // Governance & Enterprise ERPs
      {
        label: "Government Portals & File Approvals",
        href: "/solutions/digital-governance",
        description: "Paperless Secretariat file routing, digital signatures (DSC) and citizen tracking.",
        category: "Governance & ERPs",
      },
      {
        label: "College Salary Grants (DHE)",
        href: "/solutions/workflow-automation",
        description: "Automated salary assessments and ₹2,400 Cr+ grants for aided colleges.",
        badge: "₹2,400 Cr+",
        category: "Governance & ERPs",
      },
      {
        label: "University & Medical Campus ERPs",
        href: "/work/aums-agri-erp",
        description: "Comprehensive lifecycle ERPs for State Agriculture & AYUSH Medical colleges.",
        category: "Governance & ERPs",
      },
      {
        label: "State Analytics & MIS Dashboards",
        href: "/solutions/mis-data-analytics",
        description: "Real-time socio-economic statistics, district indicators, and Assembly reports.",
        category: "Governance & ERPs",
      },
      {
        label: "Enterprise Supply Chain & Vendor ERP",
        href: "/work/royal-enfield-vendor-erp",
        description: "High-volume automotive vendor management, dispatch tracking and quality gates.",
        category: "Governance & ERPs",
      },
    ],
  },
  {
    label: "Who We Serve",
    href: "/industries",
    children: [
      {
        label: "State Government Secretariats",
        href: "/industries/government-public-sector",
        description: "Digital file movement, departmental approvals, and public welfare portals.",
        badge: "Departments",
        category: "Public Sector",
      },
      {
        label: "State CET Cells & Testing Authorities",
        href: "/industries/examination-authorities",
        description: "Crash-proof registration and CAP counseling for Maha CET Cell and JCECEB.",
        badge: "12L+ Students",
        category: "Public Sector",
      },
      {
        label: "Teacher & Public Recruitment Boards",
        href: "/industries/recruitment-workforce",
        description: "Merit-based candidate matching and court-compliant reservation rosters.",
        badge: "67,000+ Placed",
        category: "Public Sector",
      },
      {
        label: "State Universities & Campuses",
        href: "/industries/higher-education",
        description: "Affiliated college tracking, semester exams, and degree certs across 5L+ students.",
        category: "Education & Healthcare",
      },
      {
        label: "Agricultural Universities (MCAER)",
        href: "/industries/skill-vocational",
        description: "Counseling across 4 state agri universities, PG/Ph.D. admissions, and diploma portals.",
        badge: "4 State Univs",
        category: "Education & Healthcare",
      },
      {
        label: "AYUSH & Medical Colleges",
        href: "/work/ayurvedik-student-erp",
        description: "BAMS and healthcare college ERPs managing clinical rotations and academics.",
        badge: "Healthcare",
        category: "Education & Healthcare",
      },
      {
        label: "Economic & Statistical Directorates",
        href: "/work/desa-haryana-statistics",
        description: "DESA Haryana state indicator monitoring and socio-economic planning data.",
        category: "State Planning",
      },
      {
        label: "Enterprise & Automotive Supply Chains",
        href: "/work/royal-enfield-vendor-erp",
        description: "Tier-1 vendor purchase order synchronization and multi-channel Meghdoot gateways.",
        badge: "Enterprise",
        category: "Enterprise",
      },
    ],
  },
  {
    label: "Projects",
    href: "/work",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const primaryCTA: CTAConfig = {
  label: "Contact ABS Team",
  href: "/contact",
  variant: "primary",
  trackingKey: "header-contact-team",
};

export const footerColumns = [
  {
    title: "Our Solutions",
    links: [
      { label: "AI Document OCR & Letter Drafter", href: "/work/custom-govt-llm" },
      { label: "Online Admissions (CET & CAP)", href: "/solutions/education-admissions" },
      { label: "Blockchain Paper Delivery Vault", href: "/work/secured-paper-delivery" },
      { label: "Teacher Recruitment (PAVITRA)", href: "/solutions/recruitment-management" },
      { label: "College Salary Grants (DHE)", href: "/solutions/workflow-automation" },
      { label: "State Economic Analytics (DESA)", href: "/work/desa-haryana-statistics" },
      { label: "University & Medical ERPs", href: "/work/aums-agri-erp" },
      { label: "Automotive Vendor Management", href: "/work/royal-enfield-vendor-erp" },
    ],
  },
  {
    title: "Who We Work With",
    links: [
      { label: "State Government Secretariats", href: "/industries/government-public-sector" },
      { label: "State Universities & Campuses", href: "/industries/higher-education" },
      { label: "State CET Cells & Testing Authorities", href: "/industries/examination-authorities" },
      { label: "Agricultural Universities (MCAER)", href: "/industries/skill-vocational" },
      { label: "AYUSH & Medical Colleges", href: "/work/ayurvedik-student-erp" },
      { label: "Teacher Recruitment Boards", href: "/industries/recruitment-workforce" },
      { label: "Enterprise & Automotive Supply Chains", href: "/work/royal-enfield-vendor-erp" },
    ],
  },
  {
    title: "Analytica Business Solutions",
    links: [
      { label: "About Our 20+ Year Journey", href: "/about" },
      { label: "19 Live Projects", href: "/work" },
      { label: "Our Delivery Process", href: "/about" },
      { label: "Contact Our Office", href: "/contact" },
    ],
  },
];
