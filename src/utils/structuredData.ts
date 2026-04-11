import { siteMeta } from "../config/site";
import type { StructuredData } from "../types/site";

interface StructuredDataOptions {
  description?: string;
}

export const buildDefaultStructuredData = (
  options: StructuredDataOptions = {}
): StructuredData[] => {
  const description = options.description ?? siteMeta.description;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteMeta.siteName,
      url: siteMeta.url,
      email: siteMeta.email,
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteMeta.siteName,
      url: siteMeta.url,
      email: siteMeta.email,
      description,
      areaServed: "Worldwide",
      serviceType: [
        "Research sprint",
        "Prototype sprint",
        "System blueprint",
        "Advisory retainer",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: siteMeta.email,
        contactType: "sales",
        availableLanguage: ["English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteMeta.siteName,
      url: siteMeta.url,
      description,
      inLanguage: "en",
    },
  ];
};
