export interface ActionLink {
  href: string;
  label: string;
}

export type NavItem = ActionLink;

export interface AlternateLocale {
  href: string;
  hreflang: string;
  locale: string;
}

export interface SiteMeta {
  title: string;
  titleTemplate: string;
  defaultPageTitle: string;
  description: string;
  email: string;
  telephone: string;
  telephoneDisplay: string;
  url: string;
  siteName: string;
  locale: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
  sameAs: string[];
  alternateLocales?: AlternateLocale[];
  founder: {
    name: string;
    jobTitle: string;
    image: string;
    imageAlt: string;
    knowsLanguage: string[];
    sameAs?: string[];
  };
}

export interface HeaderContent {
  navItems: NavItem[];
  secondaryAction?: ActionLink;
  contactAction: ActionLink;
}

export interface FooterContent {
  summary: string;
  note: string;
  links: NavItem[];
  references: ActionLink[];
  contactAction: ActionLink;
}

export interface HeroMetric {
  label: string;
  title: string;
  description: string;
}

export interface CoreCard {
  icon: "search" | "play" | "grid" | "check";
  title: string;
  subtitle: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  signalLabel: string;
  signalItems: string[];
  metrics: HeroMetric[];
  statusChips: string[];
  panelLabel: string;
  panelTitle: string;
  panelKicker: string;
  panelCopy: string;
  coreCards: CoreCard[];
  panelNote: string;
}

export interface OfferTab {
  id: string;
  label: string;
}

export interface Offer {
  title: string;
  description: string;
  meta: string[];
  kinds: string[];
  emphasis?: boolean;
  bullets: string[];
}

export interface SectionIntroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface OffersSectionContent extends SectionIntroContent {
  tabs: OfferTab[];
  items: Offer[];
}

export interface ProcessStep {
  index: string;
  label: string;
  title: string;
  description: string;
  deliverable: string;
  duration: string;
  bullets: string[];
}

export type ProcessPhase = "research" | "proto" | "arch" | "build";

export interface ProcessSectionContent extends SectionIntroContent {
  steps: ProcessStep[];
}

export interface ProblemSectionContent extends SectionIntroContent {
  lines: string[];
  conclusion: string;
  bullets: string[];
}

export interface ProofItem {
  title: string;
  description: string;
  meta: string[];
  link: ActionLink;
}

export interface ProofSectionContent extends SectionIntroContent {
  items: ProofItem[];
}

export interface FitCard {
  label: string;
  title: string;
  bullets: string[];
}

export interface FitSectionContent extends SectionIntroContent {
  cards: FitCard[];
}

export interface FaqItem {
  label: string;
  question: string;
  answer: string | string[];
}

export interface FaqSectionContent extends SectionIntroContent {
  items: FaqItem[];
}

export interface ContactPerson {
  name: string;
  photo: string;
  photoAlt: string;
  email: ActionLink;
  phone: ActionLink;
}

export interface ContactSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  pills: string[];
  person: ContactPerson;
}

export interface HomePageData {
  hero: HeroContent;
  problem: ProblemSectionContent;
  offers: OffersSectionContent;
  process: ProcessSectionContent;
  proof: ProofSectionContent;
  fit: FitSectionContent;
  faq: FaqSectionContent;
  contact: ContactSectionContent;
}

export type StructuredData = Record<string, unknown>;
