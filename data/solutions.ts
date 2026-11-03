import { Solution } from "@/types";

export const solutionsData: Solution[] = [
  {
    slug: "digital-governance",
    title: "Government Portals & File Approvals",
    shortDescription:
      "Replacing slow paper files with fast online approvals, digital signatures, and transparent citizen service tracking.",
    heroCopy:
      "Making government services and departmental approvals fast, simple, and 100% paperless across state offices.",
    categoryTag: "Government Portals",
    capabilities: [
      "Online file movement and departmental approvals",
      "Digital signatures (DSC) and e-Sign integration",
      "Citizen-facing portals that work smoothly on mobile",
      "Real-time tracking of public scheme funds and subsidies",
      "Secure login roles for field and secretariat officers",
      "Clear, permanent digital records for audit inspections",
    ],
    challengesSolved: [
      "Files getting stuck on desks for months without status updates",
      "Difficulty in tracking records across district and taluka offices",
      "Risk of lost paper files or physical tampering",
      "Delays in releasing welfare benefits to eligible citizens",
    ],
    workflowSteps: [
      { step: 1, title: "Online Application Submission", description: "Citizens or staff fill simple digital forms with instant mobile OTP." },
      { step: 2, title: "Desk Scrutiny & Document Check", description: "Department staff verify uploaded documents online." },
      { step: 3, title: "Officer Approval & Digital Signing", description: "Files move up the ladder for approval with full audit logs." },
      { step: 4, title: "Instant Order & SMS Notification", description: "Final certificate or sanction letter is issued immediately." },
    ],
    relatedProjects: ["dhe-grant-in-aid", "mis-analytics-portal"],
    cta: {
      label: "Discuss a Government Portal",
      href: "/contact?interest=digital-governance",
      variant: "primary",
    },
  },
  {
    slug: "education-admissions",
    title: "Centralized Online Admissions (CET & CAP Rounds)",
    shortDescription:
      "Single-window student application forms, online document checking, merit lists, and multi-round college seat allotment.",
    heroCopy:
      "Fair and transparent college admissions for lakhs of students across Maharashtra with zero delays and zero seat disputes.",
    categoryTag: "College Admissions",
    capabilities: [
      "Single online portal for hundreds of colleges and courses",
      "Automatic calculation of caste, reservation, and category quotas",
      "Centralized Admission Process (CAP Round) seat allotment",
      "Online document scrutiny (E-Scrutiny) by verification centers",
      "College reporting, fee collection, and seat vacancy tracking",
      "Student login for option form choice filling and allotment letters",
    ],
    challengesSolved: [
      "Long physical queues outside colleges during admission season",
      "Disputes and court cases over complex reservation category rules",
      "College seats remaining vacant due to slow offline counseling rounds",
      "Students having to travel to multiple cities for document checks",
    ],
    workflowSteps: [
      { step: 1, title: "Student Registration", description: "Students fill basic details and upload marks and caste certificates." },
      { step: 2, title: "Online E-Scrutiny & Merit List", description: "Officers verify documents online; provisional and final merit lists are declared." },
      { step: 3, title: "Option Form Choice Filling", description: "Students select and rank their preferred colleges and courses." },
      { step: 4, title: "CAP Seat Allotment", description: "Software allocates seats fairly according to merit and reservation rules." },
    ],
    relatedProjects: ["state-cet-cell", "mcaer-admissions", "mpkv-student-lifecycle"],
    cta: {
      label: "See Admissions Portal Demo",
      href: "/contact?interest=education-admissions",
      variant: "primary",
    },
  },
  {
    slug: "examination-management",
    title: "University Exam & Result Management",
    shortDescription:
      "Online exam forms, QR hall tickets, center allotment, on-screen answer sheet checking, and fast marksheets.",
    heroCopy:
      "Secure, smooth examination systems that handle lakhs of students on result day without website crashes.",
    categoryTag: "Exams & Results",
    capabilities: [
      "High-speed student registration and online exam fee collection",
      "Automatic exam center and seat number allocation near students",
      "QR-coded hall tickets with photo and barcode verification",
      "Confidential marks entry and on-screen evaluation integration",
      "Multi-shift score normalization and merit calculation",
      "Fast online marksheets and verified digital degree certificates",
    ],
    challengesSolved: [
      "Websites crashing on the last day of exam form submission or result day",
      "Fake hall tickets and student impersonation issues",
      "Difficulty in assigning nearby exam centers across rural and urban districts",
      "Months of delay in paper checking and declaring semester results",
    ],
    workflowSteps: [
      { step: 1, title: "Exam Form & Fee Payment", description: "Students fill subject forms online with instant payment receipts." },
      { step: 2, title: "Hall Ticket Download", description: "Admit cards generated automatically with QR security and center address." },
      { step: 3, title: "Attendance & Marks Evaluation", description: "Secure evaluation with barcoded secrecy for answer sheets." },
      { step: 4, title: "Fast Online Results", description: "Results declared on high-speed servers with immediate marksheet download." },
    ],
    relatedProjects: ["state-cet-cell"],
    cta: {
      label: "Talk to Examination Solutions Team",
      href: "/contact?interest=examination-management",
      variant: "primary",
    },
  },
  {
    slug: "recruitment-management",
    title: "Staff & Teacher Recruitment (PAVITRA)",
    shortDescription:
      "Online recruitment portal for selecting teachers, professors, and staff based strictly on merit and government reservation rules.",
    heroCopy:
      "Fair, transparent, and legally sound public recruitment that eliminates complaints and issues appointment orders in days.",
    categoryTag: "Teacher Recruitment",
    capabilities: [
      "Roster and vacancy verification across government and aided schools",
      "Multi-stage screening (TET / TAIT exam score integration)",
      "Strict eligibility checks that eliminate manual errors",
      "Double-blind merit matching that pairs candidate rank to eligible school",
      "Transparent public merit lists showing allocation criteria",
      "Automated appointment letters with anti-fraud verification seals",
    ],
    challengesSolved: [
      "Recruitment halted by court cases over reservation quota disputes",
      "Allegations of favoritism or manual tampering in candidate selection",
      "Schools having vacant teacher posts for years due to slow paper scrutiny",
      "Candidates having to travel across multiple districts for inquiries",
    ],
    workflowSteps: [
      { step: 1, title: "School Vacancy Verification", description: "Education officers approve verified school rosters online." },
      { step: 2, title: "Candidate Choice Selection", description: "Qualified candidates select their preferred schools and districts." },
      { step: 3, title: "Merit-Based System Allocation", description: "Computer matches rank and preference with 100% impartiality." },
      { step: 4, title: "Appointment Order Issuance", description: "Instant appointment letters generated with official verification stamp." },
    ],
    relatedProjects: ["pavitra-teacher-recruitment"],
    cta: {
      label: "Learn About Recruitment Portals",
      href: "/contact?interest=recruitment-management",
      variant: "primary",
    },
  },
  {
    slug: "workflow-automation",
    title: "College Salary & Grant Assessment (DHE)",
    shortDescription:
      "Automating salary bill checks, staff rosters, and government grant disbursement for hundreds of aided colleges.",
    heroCopy:
      "Fast, transparent college grant assessment that replaces truckloads of paper bills with clean digital approvals.",
    categoryTag: "College Grants & Salaries",
    capabilities: [
      "Standardized monthly salary bill generation for aided college staff",
      "Accurate calculation of Pay Commission arrears, DA, and deductions",
      "Online hierarchical approval (Principal → Joint Director → Director)",
      "Automated roster verification of sanctioned versus working staff",
      "Treasury payment reconciliation with direct bank credit confirmations",
      "Complete digital paper trail for Accountant General (AG) audits",
    ],
    challengesSolved: [
      "Colleges having to submit heavy physical files every month",
      "Calculation mistakes in complex salary arrears taking months to fix",
      "Risk of excess grant disbursals or payments to non-sanctioned posts",
      "Delay in college professors and non-teaching staff getting monthly salaries",
    ],
    workflowSteps: [
      { step: 1, title: "Monthly Salary Bill Upload", description: "Colleges prepare bills online based on sanctioned staff strength." },
      { step: 2, title: "Joint Directorate Desk Verification", description: "Audit officers check bills against budget allotments online." },
      { step: 3, title: "Sanction Order Issuance", description: "Digital signing of treasury bills with zero manual calculation errors." },
      { step: 4, title: "Direct Bank Credit", description: "Salaries credited directly into staff bank accounts." },
    ],
    relatedProjects: ["dhe-grant-in-aid", "mpkv-student-lifecycle"],
    cta: {
      label: "Automate Institutional Grants",
      href: "/contact?interest=workflow-automation",
      variant: "primary",
    },
  },
  {
    slug: "mis-data-analytics",
    title: "Statewide Education Dashboards & Reports",
    shortDescription:
      "Live charts and district-wise maps showing student admissions, college attendance, and department budgets.",
    heroCopy:
      "Clear, actionable reports and real-time data for department ministers, principal secretaries, and university heads.",
    categoryTag: "State Analytics & MIS",
    capabilities: [
      "Automated collection of student and college data from 3,000+ institutes",
      "Interactive executive dashboards with district and taluka maps",
      "Instant reports for Assembly Questions (Vidhansabha queries)",
      "Early warning alerts for high student dropout or vacant college seats",
      "Budget utilization reports and tracking of Central & State funds",
      "Exportable summary reports in PDF, Excel, and presentation formats",
    ],
    challengesSolved: [
      "Senior officers waiting weeks for basic statistics during Assembly sessions",
      "Inconsistent numbers sent by different colleges in manual Excel sheets",
      "Inability to spot backward districts lacking college facilities",
      "Delays in submitting state education data to Central Ministry portals",
    ],
    workflowSteps: [
      { step: 1, title: "Automatic Data Ingestion", description: "Data synced automatically from colleges and examination portals." },
      { step: 2, title: "Error Checking & Validation", description: "System verifies numbers and flags any duplicate or incorrect entries." },
      { step: 3, title: "Live Dashboard Updates", description: "Key metrics updated in real-time across all 36 Maharashtra districts." },
      { step: 4, title: "Executive Decision Reports", description: "One-click reports ready for cabinet briefings and policy meetings." },
    ],
    relatedProjects: ["mis-analytics-portal", "state-cet-cell"],
    cta: {
      label: "Request MIS Dashboard Demo",
      href: "/contact?interest=mis-data-analytics",
      variant: "primary",
    },
  },
];
