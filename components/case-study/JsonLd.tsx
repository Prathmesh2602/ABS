import * as React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Analytica Business Solutions",
    alternateName: "ABS",
    url: "https://abs-solutions.in",
    logo: "https://abs-solutions.in/logo.png",
    description:
      "Specialized government portals, centralized online student admissions, examination management, and teacher recruitment systems across Maharashtra and India.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "technical support and enterprise sales",
      email: "mohan.t@analyticabs.co.in",
      telephone: "+91-7020705227",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Survey No. 33/6, NANDADEEP RESIDENCY, Behind Ichhapurti Ganesh Mandir, Dattanagar Road, Ambegaon BK",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411046",
      addressCountry: "IN",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
