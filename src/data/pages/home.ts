import { siteMeta } from "../../config/site";
import type { HomePageData } from "../../types/site";

const emailAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const homePageData: HomePageData = {
  hero: {
    eyebrow: "Applied research, rapid prototyping, and end-to-end delivery.",
    titleLead: "Software ideas that are expensive to get",
    titleAccent: "wrong.",
    intro: siteMeta.description,
    primaryAction: { href: "#proof", label: "See public work" },
    secondaryAction: emailAction,
    signalLabel: "What you buy",
    signalItems: [
      "Research sprint",
      "Working prototype",
      "System blueprint",
      "End-to-end execution",
    ],
    metrics: [
      {
        label: "Positioning",
        title: "Research → Prototype → Blueprint → Build",
        description:
          "A clear path from ambiguity to a sharper decision, a working asset, and a fully scalable production system.",
      },
      {
        label: "Why it works",
        title: "Evidence before scale.",
        description:
          "Best for risky ideas, new technical bets, and premium digital experiences where guessing would be expensive.",
      },
    ],
    statusChips: ["Founder-led engagements"],
    panelLabel: "Core model",
    panelTitle: "Applied research first. Elegant execution second. Commodity work never.",
    panelKicker: "",
    panelCopy:
      "Senior judgment, direct execution, and no agency-style delivery fog. SRCABC is not a generic development shop, and not a pure think tank. The studio is strongest when a project needs sharp technical judgment, a convincing working demo, and a partner who can take responsibility for the final end-to-end build.",
    coreCards: [
      {
        icon: "R",
        title: "Research depth",
        description:
          "Landscape mapping, benchmark framing, technical risk decomposition, and system-level reasoning.",
      },
      {
        icon: "P",
        title: "Prototype craft",
        description:
          "Interactive demos and working proofs that reduce uncertainty fast.",
      },
      {
        icon: "A",
        title: "Architecture & Blueprint",
        description:
          "System design, interface boundaries, scalability constraints, and build-ready foundations.",
      },
      {
        icon: "E",
        title: "End-to-End Execution",
        description:
          "Turning validated concepts into scalable, production-ready digital ecosystems.",
      },
    ],
    panelNote:
      "early product bets, AI integrations with unclear UX or architecture, premium technical showcases, internal tools that need strategic clarity, and complex systems that demand flawless delivery.",
  },
  offers: {
    eyebrow: "What you can buy",
    title: "Clear engagements instead of vague consulting.",
    description:
      "From the first validation step to full-scale execution and ongoing strategic closeness. Each phase is designed to produce a clearer decision and a more robust asset.",
    tabs: [
      { id: "all", label: "All" },
      { id: "early", label: "Early validation" },
      { id: "build", label: "Build direction" },
      { id: "ongoing", label: "Ongoing support" },
    ],
    items: [
      {
        title: "Research Sprint",
        description:
          "Clarify the space, frame the bet, and identify where the real technical or product risk actually sits—before committing serious resources.",
        meta: ["1–2 weeks", "Best first step"],
        kinds: ["all", "early"],
        bullets: [
          "Competitive and technical landscape",
          "Risk map and decision criteria",
          "Executive recommendation memo",
        ],
      },
      {
        title: "Prototype Sprint",
        description:
          "Build a working proof that makes the opportunity, the user experience, and the technical shape clear to decision-makers.",
        meta: ["3–6 weeks", "Maximum impact"],
        kinds: ["all", "early", "build"],
        emphasis: true,
        bullets: [
          "Interactive proof-of-concept (PoC)",
          "Measured evidence, not just vanity metrics",
          "Designed specifically for stakeholder and investor buy-in",
        ],
      },
      {
        title: "System Blueprint",
        description:
          "Turn a validated concept into a robust technical plan that guarantees a flawless final build.",
        meta: ["4–8 weeks", "Solid foundations"],
        kinds: ["all", "build"],
        bullets: [
          "Architecture outline, interfaces, and tradeoffs",
          "Implementation sequencing recommendations",
        ],
      },
      {
        title: "End-to-End Build",
        description:
          "Based on validated blueprints, we build the scalable, live product. From coding to infrastructure and ecosystem integration, we carry the project to the finish line.",
        meta: ["Months", "Full execution"],
        kinds: ["all", "build"],
        bullets: [
          "Stable, production-level software development",
          "Full ecosystem design and implementation",
          "Turnkey delivery",
        ],
      },
      {
        title: "Advisory Retainer",
        description:
          "Stay close to major product and architecture choices without hiring a full-time senior R&D lead.",
        meta: ["Monthly", "Selective"],
        kinds: ["all", "ongoing"],
        bullets: [
          "Ongoing decision support for founders and engineering leads",
          "Review of vendor choices and product directions",
          "Strategic sparring on demand",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Operating model",
    title: "Research → Prototype → Blueprint → Build",
    description:
      "This is the operating spine of the studio. It keeps the work out of two common traps: vague innovation consulting on one side, and blind commodity implementation on the other.",
    steps: [
      {
        index: "01",
        label: "Research",
        title: "Frame the bet.",
        description:
          "Map the opportunity, challenge the assumptions, and decide what deserves to be measured instead of merely discussed.",
        bullets: [
          "Landscape and comparable solutions",
          "Failure modes and risk mapping",
          "Decision memo before writing the first line of code",
        ],
      },
      {
        index: "02",
        label: "Prototype",
        title: "Make it tangible.",
        description:
          "Build the minimum working artifact that reveals the truth: what works, what breaks, and what stakeholders finally understand once they can interact with it.",
        bullets: [
          "Browser-based demonstrators and proofs-of-concept",
          "UX and technical constraints made visible",
          "Evidence instead of slide decks",
        ],
      },
      {
        index: "03",
        label: "Blueprint",
        title: "Design for scale.",
        description:
          "Turn the validated concept into a robust technical architecture. No guesswork, just a clear path to a stable business system.",
        bullets: [
          "Architecture outline, interfaces, and constraints",
          "Implementation path and resource sequencing",
        ],
      },
      {
        index: "04",
        label: "Build",
        title: "End-to-end delivery.",
        description:
          "Once the concept is proven, we build the final product. We handle the full product development life cycle, integrate it into your existing systems, and deliver a sustainable digital ecosystem.",
        bullets: [
          "Production-grade software engineering",
          "Ecosystem integration and deployment",
          "Turnkey solution delivery",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Public proof",
    title: "Show the work. Then ask for trust.",
    description:
      "A new studio should not lead with inflated claims. It should lead with visible evidence.",
    items: [
      {
        title: "ORTHOS",
        description:
          "A public research repo and architecture playground. This is the credibility layer: structured documentation, experimental thinking, technical depth, and a visible commitment to ideas beyond trend-chasing.",
        meta: ["Open source", "R&D authority"],
        link: { href: "https://github.com/kelaci/orthos", label: "Open repository →" },
      },
      {
        title: "PRISM",
        description:
          "A live, browser-based technical product. It shows that complex technical logic can become a real, scalable, user-facing tool — not just a research note.",
        meta: ["Browser tool", "Production craft"],
        link: { href: "https://prism.srcabc.com/", label: "Open project →" },
      },
      {
        title: "NOTABOT",
        description:
          "A next-generation CAPTCHA and bot detection system. It demonstrates deep expertise in browser environment analysis, timing heuristics, and protecting public interfaces against automated abuse.",
        meta: ["Security", "Bot detection"],
        link: { href: "https://notabot.srcabc.com/", label: "View notabot →" },
      },
    ],
  },
  fit: {
    eyebrow: "Where this wins",
    title: "Best fit — and what to avoid.",
    description:
      "A strong position gets stronger when it is selective. The goal is to become the obvious choice for a narrow class of high-value problems and complex deliveries.",
    cards: [
      {
        label: "Great fit",
        title: "High-stakes, unclear, or unusually visible work.",
        bullets: [
          "Complex product delivery where you want validation, architecture, and execution in one reliable hand.",
          "New product bets with architecture uncertainty.",
          "AI features where workflow and system shape are still unresolved.",
          "Premium digital experiences where taste, scalability, and technical clarity all matter.",
        ],
      },
      {
        label: "Not the main lane",
        title: "Commodity implementation.",
        bullets: [
          "Generic staffing replacement or low-margin ticket work (\"we need two more devs\").",
          "Large maintenance-heavy projects without a research or modernization angle.",
          "Feature-factory work where speed matters more than judgment.",
          "Vague innovation briefs with no decision or business outcome attached.",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions a serious buyer will actually ask.",
    description: "",
    items: [
      {
        label: "Scope",
        question: "Do you build production systems end-to-end?",
        answer: [
          "Yes. If we have jointly proven the concept's viability during the research and prototype phases, we take full responsibility for executing the final software, integrating it, and delivering a sustainable digital ecosystem.",
          "We don't design for the drawer.",
        ],
      },
      {
        label: "Model",
        question: "Is this a research studio or a development studio?",
        answer: [
          "Both, but in a strict order: research first, prototype second, architecture third, and full execution last.",
          "We never code blindly. We reduce uncertainty, prove the concept, and then deliver without compromise.",
        ],
      },
      {
        label: "Buyers",
        question: "Who usually buys this kind of work?",
        answer: [
          "Founders, CEOs, and investors who don't want cookie-cutter solutions.",
          "Leaders who need a scalable, reliable system and know that starting a build blindly costs magnitudes more than proper validation.",
        ],
      },
      {
        label: "Commercial",
        question: "Why is this model stronger long-term than a generic agency?",
        answer: [
          "Because we don't separate technical consulting from execution.",
          "Agencies often just execute a specification. We validate the concept from a business and risk perspective first, and then take responsibility for building the entire digital ecosystem.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Final CTA",
    title: "Bring the risky idea. Leave the vague brief behind.",
    description:
      "The strongest first conversation is usually about a technical decision, a complex ecosystem build, or a product bet that needs validation before anyone commits real capital. That is the lane SRCABC is built for.",
    pills: [
      "Founder-led conversations",
      "No inflated claims",
      "Built for high-signal work and end-to-end delivery",
    ],
    primaryAction: emailAction,
    copyButtonLabel: "Copy email",
    copyAnnouncement: `${siteMeta.email} copied to clipboard.`,
  },
};
