import { siteMeta } from "../config/site";
import type { FaqItem, StructuredData } from "../types/site";

interface StructuredDataOptions {
  description?: string;
  faqItems?: FaqItem[];
  breadcrumbItems?: { name: string; url: string }[];
}

const today = new Date().toISOString().slice(0, 10);

const toStructuredAnswerText = (answer: FaqItem["answer"]) =>
  Array.isArray(answer) ? answer.join("\n\n") : answer;

const absoluteUrl = (path: string) => new URL(path, siteMeta.url).href;

export const buildDefaultStructuredData = (
  options: StructuredDataOptions = {}
): StructuredData[] => {
  const description = options.description ?? siteMeta.description;
  const organizationId = `${siteMeta.url}/#organization`;
  const founderId = `${siteMeta.url}/#founder`;
  const websiteId = `${siteMeta.url}/#website`;
  const webpageId = `${siteMeta.url}/#webpage`;
  const founderSameAs = siteMeta.founder.sameAs?.filter(Boolean);
  const schemas: StructuredData[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: siteMeta.siteName,
      url: siteMeta.url,
      email: siteMeta.email,
      telephone: siteMeta.telephone,
      description,
      founder: { "@id": founderId },
      sameAs: siteMeta.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteMeta.url}/#professional-service`,
      name: siteMeta.siteName,
      url: siteMeta.url,
      email: siteMeta.email,
      telephone: siteMeta.telephone,
      description,
      areaServed: "Worldwide",
      serviceType: [
        "Research sprint",
        "Prototype sprint",
        "System blueprint",
        "End-to-end build",
        "Advisory retainer",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: siteMeta.email,
        telephone: siteMeta.telephone,
        contactType: "sales",
        availableLanguage: ["English"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": founderId,
      name: siteMeta.founder.name,
      jobTitle: siteMeta.founder.jobTitle,
      image: absoluteUrl(siteMeta.founder.image),
      knowsLanguage: siteMeta.founder.knowsLanguage,
      worksFor: { "@id": organizationId },
      ...(founderSameAs?.length ? { sameAs: founderSameAs } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteMeta.siteName,
      url: siteMeta.url,
      description,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: siteMeta.url,
      name: siteMeta.defaultPageTitle,
      description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      dateModified: today,
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
          text: toStructuredAnswerText(item.answer),
        },
      })),
    });
  }

  return schemas;
};
