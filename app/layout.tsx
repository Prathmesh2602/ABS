import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { OrganizationJsonLd } from "@/components/case-study/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f294a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Analytica Business Solutions (ABS) — Government Portals & Student Admission Systems",
    template: "%s | Analytica Business Solutions (ABS)",
  },
  description:
    "Software and online portal solutions for State Government Departments, State CET Cells, Universities, and Recruitment Boards across Maharashtra and other Indian states.",
  keywords: [
    "Analytica Business Solutions",
    "ABS Pune",
    "Maha CET Cell Admissions",
    "PAVITRA Portal",
    "Maharashtra Government Portals",
    "University Examination Software",
    "Centralized Admissions CAP",
    "Government IT Solutions India",
  ],
  authors: [{ name: "Analytica Business Solutions (ABS)" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Analytica Business Solutions (ABS) — Government Portals & Student Admission Systems",
    description:
      "Reliable software and online portals for student admissions, university exams, teacher recruitment, and government file approvals in Maharashtra and pan-India.",
    url: "https://abs-solutions.in",
    siteName: "Analytica Business Solutions (ABS)",
    images: [
      {
        url: "/logo.png",
        width: 1918,
        height: 820,
        alt: "Analytica Business Solutions (ABS) Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytica Business Solutions (ABS) — Government Portals & Student Admission Systems",
    description:
      "Software and online portal solutions for State Government Departments, State CET Cells, Universities, and Recruitment Boards across Maharashtra and other Indian states.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ffffff] text-[#0f172a]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0a1329] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
