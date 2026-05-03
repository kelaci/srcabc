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
  url: string;
  siteName: string;
  locale: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
  alternateLocales?: AlternateLocale[];
}

export interface HeaderContent {
  navItems: NavItem[];
  secondaryAction: ActionLink;
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
  icon: string;
  title: string;
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
  bullets: string[];
}

export interface ProcessSectionContent extends SectionIntroContent {
  steps: ProcessStep[];
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

export interface ContactSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  pills: string[];
  primaryAction: ActionLink;
  copyButtonLabel: string;
  copyAnnouncement: string;
}

export interface HomePageData {
  hero: HeroContent;
  offers: OffersSectionContent;
  process: ProcessSectionContent;
  proof: ProofSectionContent;
  fit: FitSectionContent;
  faq: FaqSectionContent;
  contact: ContactSectionContent;
}

export type StructuredData = Record<string, unknown>;
