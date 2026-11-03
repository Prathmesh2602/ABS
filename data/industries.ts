import { Industry } from "@/types";

export const industriesData: Industry[] = [
  {
    slug: "government-public-sector",
    title: "State Government Departments",
    subtitle: "Digital Portals for Secretariat & District Offices",
    description:
      "Helping state departments move paper files online, disburse public funds, and launch citizen-friendly portals that work easily on mobile phones.",
    needs: [
      "Strict compliance with government IT security and data privacy rules",
      "Fast websites that never crash when thousands of citizens log in together",
      "Clear digital audit trails for departmental inspections and assembly questions",
      "Smooth integration with Aadhaar, DigiLocker, and state payment gateways",
    ],
    solutions: ["digital-governance", "workflow-automation", "mis-data-analytics"],
    projects: ["dhe-grant-in-aid", "mis-analytics-portal"],
    statHighlight: {
      value: "100%",
      label: "Online Tracking",
    },
  },
  {
    slug: "higher-education",
    title: "State Universities & Colleges",
    subtitle: "Centralized Admissions, Exams & Campus ERP",
    description:
      "Connecting hundreds of affiliated colleges under a single university website for student enrollment, semester hall tickets, and fast marksheet results.",
    needs: [
      "Fair, computer-driven seat allotment according to state reservation quotas",
      "Complete student record tracking from first year admission to convocation degree",
      "Fast online verification of student scholarships and college staff grants",
      "Secure student database accessible to all affiliated college principals",
    ],
    solutions: ["education-admissions", "examination-management", "workflow-automation"],
    projects: ["mcaer-admissions", "mpkv-student-lifecycle", "state-cet-cell"],
    statHighlight: {
      value: "5 Lakh+",
      label: "Students Managed",
    },
  },
  {
    slug: "examination-authorities",
    title: "Entrance Testing Authorities & CET Cells",
    subtitle: "Online Application Forms & Zero-Error Seat Allotment",
    description:
      "Conducting state-level entrance examinations and computerized CAP admission counseling for engineering, medical, management, and pharmacy colleges.",
    needs: [
      "Handling huge student rush during the final hours of exam registration",
      "Allocating nearby exam centers to students without manual bias",
      "QR-coded hall tickets with photo and barcode security to stop cheating",
      "Accurate score calculation and instant online marksheet downloads",
    ],
    solutions: ["examination-management", "education-admissions", "mis-data-analytics"],
    projects: ["state-cet-cell"],
    statHighlight: {
      value: "12 Lakh+",
      label: "Students Applied Online",
    },
  },
  {
    slug: "recruitment-workforce",
    title: "Teacher & Staff Recruitment Boards",
    subtitle: "100% Transparent Merit-Based Selection",
    description:
      "Automating teacher recruitment across thousands of schools with zero human interference, ensuring complete legal and reservation quota compliance.",
    needs: [
      "Strict compliance with state constitutional reservation rosters",
      "Automated document checking for lakhs of qualified job applicants",
      "Transparent public merit lists that eliminate complaints and court disputes",
      "Fast generation of verified appointment orders within days",
    ],
    solutions: ["recruitment-management", "workflow-automation"],
    projects: ["pavitra-teacher-recruitment"],
    statHighlight: {
      value: "67,000+",
      label: "Teachers Recruited in Maharashtra",
    },
  },
  {
    slug: "skill-vocational",
    title: "Agricultural Universities & Councils",
    subtitle: "Single-Window Admissions & Specialized Verification",
    description:
      "Managing centralized counseling and farmer-quota document verification across Maharashtra's 4 state agricultural universities.",
    needs: [
      "Online checking of 7/12 land records and farmer weightage certificates",
      "Unified counseling across MPKV Rahuri, PDKV Akola, VNMKV Parbhani, and DBSKKV Dapoli",
      "Live vacancy tracking between multiple counseling rounds",
      "Fast generation of student degree certificates and marksheets",
    ],
    solutions: ["digital-governance", "mis-data-analytics", "workflow-automation"],
    projects: ["mcaer-admissions", "mpkv-student-lifecycle"],
    statHighlight: {
      value: "4",
      label: "State Agri Universities",
    },
  },
];
