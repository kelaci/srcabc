import { siteMeta } from "../config/site";
import type { FooterContent, HeaderContent } from "../types/site";

const contactAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const headerContent: HeaderContent = {
  navItems: [
    { href: "#offers", label: "Offers" },
    { href: "#process", label: "Process" },
    { href: "#proof", label: "Public work" },
    { href: "#fit", label: "Fit" },
    { href: "#faq", label: "FAQ" },
  ],
  secondaryAction: { href: "#proof", label: "View proof" },
  contactAction,
};

export const footerContent: FooterContent = {
  summary:
    "Applied research and rapid prototyping for software ideas that are expensive to get wrong.",
  note:
    "A stronger long-term direction than general dev company: narrower positioning, better authority, cleaner sales, and more defensible IP over time.",
  links: [
    { href: "#offers", label: "Offers" },
    { href: "#process", label: "Process" },
    { href: "#proof", label: "Public work" },
    { href: "#contact", label: "Contact" },
  ],
  references: [
    { href: "https://github.com/kelaci/orthos", label: "GitHub - ORTHOS ->" },
    { href: "https://prism.srcabc.com/", label: "Prism ->" },
    { href: "https://lakas.mindig.online/en/", label: "Luxury showcase ->" },
  ],
  contactAction,
};
