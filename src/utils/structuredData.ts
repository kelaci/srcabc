import { siteMeta } from "../config/site";
import type { FaqItem, StructuredData } from "../types/site";

interface StructuredDataOptions {
  description?: string;
  faqItems?: FaqItem[];
  breadcrumbItems?: { name: string; url: string }[];
}
export const buildDefaultStructuredData = (
  options: StructuredDataOptions = {}
): StructuredData[] => {
  const description = options.description ?? siteMeta.description;
  const schemas: StructuredData[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteMeta.siteName,
      url: siteMeta.url,
      email: siteMeta.email,
      description,
      sameAs: [
        "https://twitter.com/srcabc",
      ],
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
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteMeta.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  if (options.breadcrumbItems && options.breadcrumbItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: options.breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (options.faqItems && options.faqItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: options.faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
};
