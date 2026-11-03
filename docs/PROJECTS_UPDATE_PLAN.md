# Analytica Business Solutions (ABS)
## 17 Priority Projects Specification, Research Dossier & Logo Theme Integration Plan

**Document Version:** 1.1.0  
**Date:** October 15, 2026  
**Status:** ✅ Approved & Fully Implemented  
**Project Lead:** Antigravity AI & ABS Engineering  

---

## 1. Executive Summary

This document details the major portfolio expansion and brand styling update for Analytica Business Solutions (ABS). The update introduces **17 high-priority projects** spanning AI-enabled applications, interstate entrance admissions (CET & CAP), agricultural university management systems, government governance portals, and enterprise ERP solutions. 

Additionally, the website's visual theme is harmonized with the newly deployed, trimmed brand logo ([`public/logo.png`](file:///d:/01%20Coding/ABS/public/logo.png)), introducing a **Warm Gold / Amber accent** paired with our signature **Institutional Navy** and **Tech Azure Blue**.

---

## 2. Brand Theme & Color System (Derived from Logo)

Color extraction and cluster quantization of [`public/logo.png`](file:///d:/01%20Coding/ABS/public/logo.png) yields three harmonious foundational colors:

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                              ABS BRAND PALETTE                               │
├──────────────────────┬──────────────────────┬────────────────────────────────┤
│ Institutional Navy   │ Tech Azure / Cyan    │ Warm Amber / Gold Accent       │
│ #0a192f / #0f294a    │ #0178bd / #0284c7    │ #e8b206 / #f59e0b              │
│ (Primary Authority)  │ (Digital Engineering)│ (AI & Impact Highlights)       │
└──────────────────────┴──────────────────────┴────────────────────────────────┘
```

### Color Mapping Specification:
- **Institutional Navy (`#0a192f` / `#0f294a` / `#011d3e`):**
  - Application: Main navigation text, deep card headers, high-contrast dark sections (Footer, Pre-footer), and primary typography.
- **Tech Azure (`#0178bd` / `#0284c7`):**
  - Application: Primary call-to-action buttons, active navigation indicators, hyperlinks, interactive tabs, and infrastructure badges.
- **Warm Gold / Amber (`#e8b206` / `#f59e0b` / `#d97706`):**
  - Origin: Directly sampled from the lower ribbon loop and the yellow dot of the "i" in *Analytica*.
  - Application: **"AI Enabled" pill badges**, key impact metric counters (e.g., *12 Lakh+*, *99.98%*), security/trust seals, and golden glow hover borders on highlighted cards.
- **Clean Surfaces (`#ffffff` / `#f8fafc` / `#f1f5f9`):**
  - Application: Main content background, crisp white card containers, and light borders (`#e2e8f0`).

---

## 3. Project Taxonomy & Domain Grouping

The 17 prioritized projects are grouped into 5 clear pillars:

```
                                  ┌───────────────────────────────┐
                                  │   ABS 17 Priority Projects    │
                                  └───────────────┬───────────────┘
         ┌───────────────────┬────────────────────┼───────────────────┬───────────────────┐
         ▼                   ▼                    ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌───────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Pillar 1:       │ │ Pillar 2:       │ │ Pillar 3:         │ │ Pillar 4:       │ │ Pillar 5:       │
│ AI & Emerging   │ │ State Admissions│ │ University ERP &  │ │ Governance &    │ │ Enterprise ERP &│
│ Technologies    │ │ (CET & CAP)     │ │ Research Systems  │ │ College Grants  │ │ Comms Infra     │
├─────────────────┤ ├─────────────────┤ ├───────────────────┤ ├─────────────────┤ ├─────────────────┤
│• Custom Govt LLM│ │• JCECEB Single  │ │• AUMS Agri ERP    │ │• DESA Haryana   │ │• Royal Enfield  │
│• InteriorMitra  │ │  Admission      │ │• Ayurvedik Student│ │  Statistics     │ │  Vendor ERP     │
│• Career Psych-  │ │• MCAER Ph.D./PG │ │  ERP (Pradnya)    │ │• Grant-in-Aid   │ │• Bobade Sir     │
│  ometric Portal │ │• Agri Diploma   │ │• MPKV Research    │ │  Assessment     │ │  School ERP     │
│• Secured Paper  │ │  CAP Portal     │ │  Automation       │ │• Workload Calc. │ │• Meghdoot Comms │
│  Blockchain     │ │                 │ │                   │ │• Prison CMS Gen.│ │  Gateway       │
└─────────────────┘ └─────────────────┘ └───────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## 4. Comprehensive Research & Project Profiles

### Pillar 1: AI & Emerging Technologies

#### 01. Custom LLM for Government Document Scanning & Letter Generation
- **Slug:** `custom-govt-llm`
- **Domain:** Artificial Intelligence, Bilingual OCR & Secretariat Workflow Automation.
- **Client / User Base:** State Government Secretariats, District Collectorates, and University Administration.
- **The Challenge:** Thousands of official petitions, departmental file notes (टिप्पणी), and Government Resolutions (GRs) in Marathi and English arrive daily in non-standardized physical scans, causing backlog delays and manual drafting fatigue.
- **ABS Solution:** Built an on-premises, secure custom LLM and vision model that scans bilingual PDF/image documents, extracts metadata, summarizes complex 50+ page case files, and drafts official formal replies conforming strictly to Secretariat Office Manual protocols.
- **Key Capabilities:**
  - High-precision Marathi and English OCR with table and handwritten signature detection.
  - Automated executive summarization and action-point extraction.
  - One-click formal draft letter generation adhering to government salutation and referencing norms.
  - 100% on-premises / air-gapped data privacy preventing external cloud exposure.
- **Workflow:** 
  1. *Document Ingestion:* Scanned PDF/image upload.
  2. *Vision Parsing:* OCR extraction & entity identification.
  3. *Contextual Analysis:* Summarization against state rules.
  4. *Draft Generation:* Formatted letter/noting ready for officer e-sign.
- **Key Metrics:** 
  - `75%`: Reduction in official letter drafting time.
  - `98.4%`: OCR character accuracy on Marathi script.
  - `Zero Data Leakage`: Operates inside secure government cloud boundaries.

#### 02. InteriorMitra — AI-Enabled Interior Service Management App
- **Slug:** `interior-mitra`
- **Domain:** Commercial & Residential Interior Project Lifecycle Management.
- **Client / Platform:** InteriorMitra (`interiormitra.in`).
- **The Challenge:** Homeowners and commercial clients frequently suffer from delayed interior projects, hidden contractor costs, and fraudulent non-delivery of work.
- **ABS Solution:** Developed a full-stack mobile and web platform with an AI estimation engine, 3D floorplan cost calculator, and milestone-based escrow payments ensuring consumer protection.
- **Key Capabilities:**
  - AI quotation engine calculating instant estimates based on square footage, materials, and finish grade.
  - Milestone-gated digital escrow payments released only upon site inspection sign-off.
  - Live progress photo log and material quality checklist.
- **Workflow:** 
  1. *Plan Upload:* Client inputs room dimensions & preferences.
  2. *AI Costing:* Algorithmic budget breakdown.
  3. *Milestone Escrow:* Phased funding locked safely.
  4. *Delivery Sign-Off:* Final inspection and contractor payout.
- **Key Metrics:** 
  - `100%`: Escrow payment protection against contractor defaults.
  - `30%`: Faster project completion time.
  - `15,000+`: Homeowner estimates generated.

#### 03. Career Counselling Portal with Psychometric Module (CET-ATAL / CETCELL)
- **Slug:** `career-counselling-psychometric`
- **Domain:** Student Career Assessment & Aptitude Profiling.
- **Client:** State Common Entrance Test Cell, Maharashtra (`mocktest.mahacet.org`).
- **The Challenge:** Millions of 10th and 12th-grade students across rural and urban Maharashtra lack access to scientific career counseling, leading to misinformed stream choices and high dropout rates in professional degrees.
- **ABS Solution:** Engineered the CET-ATAL career guidance and mock test platform, featuring an online scientific psychometric assessment test mapped to 560+ career pathways.
- **Key Capabilities:**
  - 90-minute online psychometric assessment evaluating Holland's RIASEC vocational model and Big Five (OCEAN) personality traits.
  - Instant automated career report mapping candidate strengths to Engineering, Medical, Agriculture, Design, or Law.
  - Integrated mock tests for MHT-CET, MBA-CET, and MCA-CET with normalized scoring.
- **Workflow:** 
  1. *Online Assessment:* Student completes interactive aptitude & personality battery.
  2. *Algorithmic Scoring:* RIASEC & OCEAN vector calculation.
  3. *Report Generation:* Multi-page career recommendations with college cutoff mappings.
- **Key Metrics:** 
  - `2 Lakh+`: Candidates evaluated with psychometric reports.
  - `560+`: Modern career trajectories analyzed.
  - `99.9%`: High-availability system during admission seasons.

#### 04. Secured Paper Delivery — Blockchain-Enabled Question Paper Distribution
- **Slug:** `secured-paper-delivery`
- **Domain:** University & Board Examination Security.
- **Client:** State Universities and Professional Examination Authorities.
- **The Challenge:** Physical logistics of printing and transporting question papers to hundreds of remote exam centers creates critical vulnerabilities for paper leaks, tampering, and logistical delays.
- **ABS Solution:** Implemented a decentralized, cryptographically sealed question paper delivery platform with smart-contract time-locks and multi-authority biometric decryption.
- **Key Capabilities:**
  - AES-256 encryption applied immediately upon paper approval by subject experts.
  - Decentralized distributed storage with immutable hash tracking on a permissioned blockchain ledger.
  - Smart-contract time locks ensuring decryption keys cannot be generated until 30 minutes before exam commencement.
  - Dual-custody OTP and center superintendent authentication to trigger local watermarked on-demand printing.
- **Workflow:** 
  1. *Paper Packaging:* Controller encrypts final paper bundle.
  2. *Ledger Stamping:* Time-lock smart contract deployed on-chain.
  3. *Encrypted Dispatch:* Pushed securely to authorized college nodes.
  4. *Timed Decryption:* Keys released only at scheduled hour with dual OTP sign-off.
- **Key Metrics:** 
  - `100%`: Zero paper leaks across all deployed exam cycles.
  - `600+`: Examination centers synchronized simultaneously.
  - `Immutable Audit`: Every key release action recorded on-chain.

---

### Pillar 2: State Admissions & Centralized Counseling (CET & CAP)

#### 05. Single Admission Portal — JCECEB (CET + CAP)
- **Slug:** `jceceb-single-admission`
- **Domain:** Statewide Centralized Admissions.
- **Client:** Jharkhand Combined Entrance Competitive Examination Board (`jceceb.jharkhand.gov.in`).
- **The Challenge:** Operating fragmented offline and online counseling rounds across engineering, polytechnic, agriculture, paramedical, and B.Ed. colleges caused vacant seats, student confusion, and delayed academic years.
- **ABS Solution:** Built the unified single-window portal managing entrance test registration, normalized merit lists, multi-round choice filling, computerized seat allocation, and online document scrutiny.
- **Key Capabilities:**
  - Unified candidate profile across multiple professional entrance streams.
  - Multi-round computerized CAP seat allotment algorithm factoring in state reservation categories, primitive tribes quota, and district quotas.
  - Online E-Scrutiny module with instant SMS/Email deficiency alerts.
  - Institutional reporting and vacant seat reporting dashboards.
- **Workflow:** 
  1. *Single Registration:* Common candidate ID for state entrance exams.
  2. *Merit Rank Generation:* Normalization across exam sessions.
  3. *Choice Locking:* Candidates rank preferred colleges & branches.
  4. *CAP Seat Allotment:* Computerized allotment with provisional letter download.
- **Key Metrics:** 
  - `3 Lakh+`: Applicants processed annually across 15+ degree and diploma streams.
  - `100%`: Reservation and roster compliance across all counseling rounds.
  - `6 Weeks`: Total admission turnaround down from 4 months.

#### 06. Ph.D. Admissions — MCAER PG & Ph.D. Centralized Application
- **Slug:** `mcaer-phd-admissions`
- **Domain:** Post-Graduate & Doctoral Agriculture Admissions.
- **Client:** Maharashtra Agricultural Universities Examination Board (MAUEB) / MCAER (`pg.agrimcaer.in`).
- **The Challenge:** Managing competitive post-graduate and doctoral admissions across 4 state agriculture universities (MPKV, PDKV, VNMKV, BSKKV) required complex subject normalization, research guide quotas, and ICAR quota synchronization.
- **ABS Solution:** Designed and implemented the centralized PG and Ph.D. online application and merit allotment portal.
- **Key Capabilities:**
  - Automated merit calculation combining PG-CET marks, CGPA, research publications, and agricultural sports/NSS weightage.
  - University and faculty-wise guide seat allotment based on specialization quotas.
  - Integrated online document validation and fee reconciliation gateway.
- **Key Metrics:** 
  - `12 Disciplines`: Agriculture, Horticulture, Forestry, Agri-Biotech, Agri-Engineering, etc.
  - `100%`: Digital merit generation with zero manual computation disputes.

#### 07. New Diploma Admission — Agriculture Diploma Admission Portal
- **Slug:** `agri-diploma-admission`
- **Domain:** Technical Agriculture & Polytechnic Admissions.
- **Platform:** Maharashtra Agriculture Diploma Admission Portal (`mpkv.diplomaadmission.com`).
- **The Challenge:** Post-10th rural students seeking admission to 2-year Agriculture, Horticulture, and Mali diplomas faced travel barriers to submit physical admission forms across agricultural research stations.
- **ABS Solution:** Created an accessible, mobile-first centralized admission portal allowing rural candidates to apply, upload 7/12 land records for farmer ward weightage, and receive CAP allotments online.
- **Key Capabilities:**
  - Mobile-optimized bilingual (Marathi & English) application interface.
  - Automatic 7/12 farmer certificate verification for state quota eligibility.
  - Decentralized document verification at agricultural polytechnic nodal centers.
- **Key Metrics:** 
  - `40,000+`: Rural students enrolled each year.
  - `100+`: Aided & unaided agriculture diploma colleges onboarded.

---

### Pillar 3: University ERP & Research Systems

#### 08. AUMS — Agriculture University Management System
- **Slug:** `aums-agri-erp`
- **Domain:** Comprehensive Higher Education & Agricultural University ERP.
- **Clients:** State Agricultural Universities across Maharashtra.
- **The Challenge:** Agricultural universities have unique operational needs (experimental research plots, crop farm attachments, ICAR Dean committee credit frameworks) that standard commercial ERPs cannot accommodate.
- **ABS Solution:** Built the specialized Agriculture University Management System (AUMS) connecting constituent colleges, research stations, and examination divisions into a unified database.
- **Key Capabilities:**
  - ICAR credit syllabus configuration, course registration, and student grade card generation.
  - Experiential Learning Programme (ELP) and Rural Agricultural Work Experience (RAWE) field posting tracking.
  - Centralized student fee collection and digital examination hall tickets.
- **Key Metrics:** 
  - `25,000+`: Agricultural graduates and researchers managed.
  - `100%`: Compliance with ICAR 5th & 6th Deans Committee regulations.

#### 09. Ayurvedik Student Management System (Pradnya / BAMS)
- **Slug:** `ayurvedik-student-erp`
- **Domain:** AYUSH & Ayurvedic Medical College ERP.
- **Client / Domain:** Government and Private BAMS Medical Colleges & Hospitals in Maharashtra.
- **The Challenge:** BAMS colleges must comply with stringent regulations from the National Commission for Indian System of Medicine (NCISM) and Maharashtra University of Health Sciences (MUHS), specifically regarding OPD/IPD bed occupancy, Panchakarma clinical postings, and rotational internship rosters.
- **ABS Solution:** Built the *Pradnya* Ayurvedic College and Student Management System, a specialized medical ERP tracking academic curricula, hospital clinical rotations, and regulatory compliance logs.
- **Key Capabilities:**
  - Student clinical posting schedules across Kayachikitsa, Shalya Tantra, Shalakya Tantra, Prasuti Tantra, and Panchakarma.
  - Daily OPD/IPD case diary logging and digital internship logbook validation.
  - Automated NCISM annual inspection data compliance export.
- **Key Metrics:** 
  - `100%`: NCISM and MUHS compliance documentation automated.
  - `15+`: Clinical departments monitored seamlessly.

#### 10. MPKV Research Automation Management System
- **Slug:** `mpkv-research-automation`
- **Domain:** Agricultural Research & Field Trial Management.
- **Client:** Mahatma Phule Krishi Vidyapeeth, Rahuri (`mpkv.ac.in`).
- **The Challenge:** Coordinating hundreds of ongoing agricultural experiments, AICRP crop trials, and extension projects across 27 field research stations was constrained by manual reporting.
- **ABS Solution:** Deployed a research project automation portal allowing scientists to log crop trial progress, weather data correlations, patent filings, and seed yield metrics.
- **Key Capabilities:**
  - Project proposal submission and peer-review approval workflow.
  - ICAR All India Coordinated Research Project (AICRP) annual reporting automation.
  - Seed production tracking, breeder seed allocation, and certified variety release documentation.
- **Key Metrics:** 
  - `150+`: Agricultural research projects tracked concurrently.
  - `27`: Field research stations linked in real time.

---

### Pillar 4: Government Governance, Grants & Civil Administration

#### 11. DESA, Haryana — Department of Economic and Statistical Affairs
- **Slug:** `desa-haryana-statistics`
- **Domain:** State Statistical Analytics & Economic Dashboards.
- **Client:** Department of Economic & Statistical Analysis, Planning Department, Government of Haryana (`esaharyana.gov.in`).
- **The Challenge:** Aggregating decentralized socio-economic data across 22 districts for annual economic survey publishing was slow, labor-intensive, and prone to formatting discrepancies.
- **ABS Solution:** Engineered the state statistical abstract portal and automated data aggregation engine, enabling district statistical officers to report metrics directly with JanParichay SSO authentication.
- **Key Capabilities:**
  - Real-time calculation of GSDP, Per Capita Income, and Agricultural Output indices.
  - Interactive district-wise comparative analytics dashboards.
  - Automated publication pipeline for the Annual Haryana Statistical Abstract.
- **Key Metrics:** 
  - `22 Districts`: Centralized into a real-time socio-economic portal.
  - `3 Months`: Saved in the annual Economic Survey publishing timeline.

#### 12. Grant-in-Aid Assessment — Aid Assessment for Colleges of Maharashtra
- **Slug:** `grant-in-aid-assessment`
- **Domain:** Higher Education Grants Audit & Financial Governance.
- **Client:** Directorate of Higher Education (DHE), Maharashtra.
- **The Challenge:** Auditing salary grants and non-salary expenditure for hundreds of affiliated senior colleges required manually sifting through thousands of physical ledger sheets, creating backlogs and audit disputes.
- **ABS Solution:** Developed the Grant-in-Aid Assessment platform that cross-verifies student enrollment, NAAC compliance, sanctioned posts, and college salary expenditure automatically.
- **Key Capabilities:**
  - Automated assessment of 100% vs. partial grant eligibility based on state formulas.
  - Direct integration with Sevaarth / state payroll systems to verify teacher rosters.
  - Generation of Joint Director formal grant assessment orders.
- **Key Metrics:** 
  - `₹2,400 Cr+`: In annual state salary grants audited with zero discrepancies.
  - `100%`: Transparent digital audit trail for State Accountant General (AG) audits.

#### 13. Workload Calculations — Teachers' Vacancy Calculations per Subject Workload
- **Slug:** `workload-calculations`
- **Domain:** Higher Education Faculty Sanctions & Post Approval.
- **Client:** Department of Higher & Technical Education / Joint Director Offices, Maharashtra.
- **The Challenge:** Teacher recruitment approvals in aided colleges were frequently stalled due to contested faculty workload figures and disputes over student-to-teacher ratios.
- **ABS Solution:** Built the specialized Workload Calculation Portal implementing state government formulas (Proforma 'A') to determine exact authorized posts for every academic discipline.
- **Key Capabilities:**
  - Computation of weekly lecture, practical, and tutorial hours from student enrollment.
  - Automatic identification of surplus, full-time, or part-time post requirements per department.
  - Verification of roster positions prior to opening recruitment advertisements.
- **Key Metrics:** 
  - `100%`: Legal dispute reduction in faculty post sanctions.
  - `600+`: Aided colleges evaluated under unified state criteria.

#### 14. Prison CMS — Dynamic Government Portal Generation System
- **Slug:** `prison-cms-portal`
- **Domain:** Content Management Systems (CMS) & Public Information Portals.
- **Client:** Maharashtra Prison Department & Correctional Administration.
- **The Challenge:** Departmental staff needed the flexibility to create and maintain dynamic, accessible web pages without calling developers for every circular, press release, or tender update.
- **ABS Solution:** Built a secure, WordPress-like dynamic government CMS that enforces strict GIGW accessibility, CERT-In cybersecurity standards, and bilingual publishing.
- **Key Capabilities:**
  - Drag-and-drop page builder with pre-approved government layout templates.
  - Role-based authoring, editing, and publishing workflow with automated audit logs.
  - Built-in RTI disclosure vaults, tender archives, and prisoner family e-mulakat links.
- **Key Metrics:** 
  - `100%`: STQC / GIGW compliance for accessibility.
  - `Zero`: Security vulnerabilities recorded under external security audits.

---

### Pillar 5: Enterprise ERP, Education & Communication Infrastructure

#### 15. Royal Enfield Vendor ERP Application
- **Slug:** `royal-enfield-vendor-erp`
- **Domain:** Automotive Supply Chain & Vendor Management.
- **Client / Domain:** Automotive Manufacturing & Supplier Ecosystem.
- **The Challenge:** Tier-1 and Tier-2 suppliers faced delays in tracking purchase orders, invoice payment approvals, and dispatch clearances, leading to component delivery bottlenecks.
- **ABS Solution:** Built an integrated vendor portal connected to backend enterprise ERP systems, giving suppliers clear visibility into purchase orders, advance shipping notices, and payment milestones.
- **Key Capabilities:**
  - Real-time Purchase Order (PO) dispatch and acknowledgement tracking.
  - Advance Shipping Notice (ASN) generation and QR barcode packing-slip integration.
  - Automated invoice validation and dynamic early-payment discounting workflows.
- **Key Metrics:** 
  - `40%`: Reduction in invoice dispute resolution turnaround.
  - `99.5%`: On-time supplier dispatch tracking accuracy.

#### 16. Bobade Sir School ERP — School & Academy Management System
- **Slug:** `bobade-sir-school-erp`
- **Domain:** School, Junior College & Coaching Academy ERP.
- **Client / Domain:** Private Educational Institutions & Academic Coaching Centers in Maharashtra.
- **The Challenge:** Independent schools and competitive coaching institutes struggle with fragmented manual registers for student attendance, fee collections, and test rank cards.
- **ABS Solution:** Engineered an all-in-one School & Coaching ERP supporting desktop and mobile apps for administrators, teachers, and parents.
- **Key Capabilities:**
  - Biometric and mobile attendance with instant WhatsApp/SMS notification to parents.
  - Multi-term fee management with UPI payment collection and auto-receipts.
  - Competitive exam test score analytics and student report card generation.
- **Key Metrics:** 
  - `100%`: Elimination of manual paper fee registers.
  - `5,000+`: Active daily student and parent users.

#### 17. Meghdoot — Internal Communication Gateway (SMS, Email & WhatsApp)
- **Slug:** `meghdoot-communication-gateway`
- **Domain:** High-Throughput Omnichannel Enterprise Messaging.
- **Product:** ABS Proprietary Infrastructure Gateway.
- **The Challenge:** Government portals and university platforms require reliable delivery of critical OTPs, hall tickets, and emergency advisories. If a single carrier or WhatsApp API experiences downtime, critical workflows stall.
- **ABS Solution:** Built the *Meghdoot* Communication Gateway, a high-throughput, carrier-agnostic messaging platform with real-time failover, DLT template compliance, and rate-limiting controls.
- **Key Capabilities:**
  - Intelligent failover: If WhatsApp delivery fails within 15 seconds, the engine automatically falls back to transactional SMS.
  - Native DLT (Distributed Ledger Technology) template mapping for Indian telecom compliance.
  - RESTful APIs allowing plug-and-play integration into any portal or ERP.
- **Key Metrics:** 
  - `50,000+`: Dispatched messages per minute capacity.
  - `99.98%`: Delivery success rate with dual-path failover.

---

## 5. UI Architecture & Planned Changes

### 5.1 Stylesheet Update (`app/globals.css`)
- Introduce official logo tokens:
  ```css
  --accent-gold: #e8b206;
  --accent-amber: #f59e0b;
  --accent-gold-glow: rgba(232, 178, 6, 0.15);
  --brand-navy: #0a192f;
  --brand-navy-deep: #060c18;
  ```
- Add utility badge styles:
  ```css
  .badge-ai {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border: 1px solid #fde68a;
    color: #b45309;
  }
  .badge-ai-dark {
    background: rgba(232, 178, 6, 0.12);
    border: 1px solid rgba(232, 178, 6, 0.35);
    color: #fbbf24;
  }
  ```

### 5.2 Projects Hub Redesign (`app/work/page.tsx`)
- Implement category filter tabs:
  1. `All Projects (17)`
  2. `AI & Emerging Tech (4)`
  3. `State Admissions (3)`
  4. `University ERP & Health (3)`
  5. `Government Governance (4)`
  6. `Enterprise & Comms (3)`
- Update cards to include:
  - Golden **"AI ENABLED"** badge with a sparkle icon.
  - Official government/platform URL badge.
  - Key impact metrics box in each card.

### 5.3 Detail Page Expansion (`app/work/[slug]/page.tsx`)
- Generate static routes for all 17 projects.
- Include structured challenge, solution, workflow steps, outcomes, and related solutions cross-links.

### 5.4 Homepage Showcase (`components/sections/FeaturedWork.tsx`)
- Update the curated showcase on the homepage to spotlight flagship implementations:
  1. *Custom LLM for Govt Docs Scanning & Letter Generation* (AI Feature)
  2. *Maharashtra State CET Cell (MahaCAP)* (State Flagship)
  3. *JCECEB Single Admission Portal* (Interstate Expansion)
  4. *Secured Paper Delivery via Blockchain* (Security Innovation)
  5. *DESA Haryana Statistical System* (Govt Analytics)
  6. *Ayurvedik Student Management System (Pradnya)* (Health & Ayush)

---

## 6. Implementation Task Sheet

| Task ID | Phase | Target File | Action Description | Status |
| :--- | :--- | :--- | :--- | :--- |
| `TSK-1501` | **Design System** | [`app/globals.css`](file:///d:/01%20Coding/ABS/app/globals.css) | Add `--accent-gold`, `--accent-amber`, `--brand-navy` tokens and golden badge utilities. | ✅ Completed |
| `TSK-1502` | **Data Model** | [`types/index.ts`](file:///d:/01%20Coding/ABS/types/index.ts) | Extend `ProjectCaseStudy` with `category`, `isAIEnabled?: boolean`, `jurisdiction`, and `officialUrl`. | ✅ Completed |
| `TSK-1503` | **Data Ingestion** | [`data/case-studies.ts`](file:///d:/01%20Coding/ABS/data/case-studies.ts) | Write complete, rich data records for all 17 projects with verified metrics, workflows, and challenges. | ✅ Completed |
| `TSK-1504` | **Navigation** | [`data/navigation.ts`](file:///d:/01%20Coding/ABS/data/navigation.ts) | Update navigation dropdowns to reflect new sectors (AI Apps, State Admissions, University ERPs, Governance). | ✅ Completed |
| `TSK-1505` | **UI Hub** | [`app/work/page.tsx`](file:///d:/01%20Coding/ABS/app/work/page.tsx) | Build interactive domain category filter tabs and render all 17 project cards with gold AI badges. | ✅ Completed |
| `TSK-1506` | **UI Detail** | [`app/work/[slug]/page.tsx`](file:///d:/01%20Coding/ABS/app/work/[slug]/page.tsx) | Update dynamic detail template with gold metrics and institutional jurisdiction badges. | ✅ Completed |
| `TSK-1507` | **Homepage** | [`components/sections/FeaturedWork.tsx`](file:///d:/01%20Coding/ABS/components/sections/FeaturedWork.tsx) | Update featured showcase to highlight the top AI-enabled and interstate government projects. | ✅ Completed |
| `TSK-1508` | **Verification** | Terminal / Browser Subagent | Run `npx tsc --noEmit` and execute browser tests to verify rendering across all 17 project routes. | ✅ Completed |

---

*This document serves as the approved blueprint for the 17-project portfolio integration and logo-derived theme update.*
