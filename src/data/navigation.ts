import { siteMeta } from "../config/site";
import type { FooterContent, HeaderContent } from "../types/site";

const contactAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const headerContent: HeaderContent = {
  navItems: [
    { href: "#offers", label: "Offers" },
    { href: "#process", label: "Method" },
    { href: "#proof", label: "Public work" },
    { href: "#contact", label: "Contact" },
  ],
  secondaryAction: { href: "#process", label: "Process" },
  contactAction,
};

export const footerContent: FooterContent = {
  summary:
    "Testing software ideas, building working prototypes, and shipping the finished system.",
  note:
    "Founder-led. No inflated claims. Specialized in critical phases and full execution.",
  links: [
    { href: "#offers", label: "Offers" },
    { href: "#process", label: "Method" },
    { href: "#proof", label: "Public work" },
    { href: "#contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ],
  references: [
    { href: "https://github.com/kelaci/orthos", label: "GitHub — ORTHOS →" },
    { href: "https://prism.srcabc.com/", label: "Prism →" },
    { href: "https://notabot.srcabc.com/", label: "notabot →" },
  ],
  contactAction,
};
