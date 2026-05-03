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
    { href: "#proof", label: "Public Work" },
    { href: "#fit", label: "Fit" },
    { href: "#faq", label: "FAQ" },
  ],
  contactAction,
};

export const footerContent: FooterContent = {
  summary:
    "Applied research, rapid prototyping, and end-to-end delivery for software ideas that are expensive to get wrong.",
  note:
    "",
  links: [
    { href: "#offers", label: "Offers" },
    { href: "#process", label: "Process" },
    { href: "#proof", label: "Public work" },
    { href: "#contact", label: "Contact" },
  ],
  references: [
    { href: "https://github.com/kelaci/orthos", label: "GitHub — ORTHOS →" },
    { href: "https://prism.srcabc.com/", label: "Prism →" },
    { href: "https://notabot.srcabc.com/", label: "notabot →" },
  ],
  contactAction,
};
