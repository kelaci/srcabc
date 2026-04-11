import { siteMeta } from "../../config/site";
import type { HomePageData } from "../../types/site";

const emailAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const homePageData: HomePageData = {
  hero: {
    eyebrow: "Applied research systems studio",
    titleLead: "Software ideas that are expensive to get",
    titleAccent: "wrong.",
    intro: siteMeta.description,
    primaryAction: emailAction,
    secondaryAction: { href: "#proof", label: "See public work" },
    signalLabel: "What you buy:",
    signalItems: [
      "Research sprint",
      "Working prototype",
      "System blueprint",
      "Founder / CTO advisory",
    ],
    metrics: [
      {
        label: "Positioning",
        title: "Research -> Prototype -> Transfer",
        description:
          "A clear path from ambiguity to a usable decision and a working asset.",
      },
      {
        label: "Why it works",
        title: "Evidence before scale",
        description:
          "Great for risky ideas, new technical bets, or premium digital experiences.",
      },
      {
        label: "Proof model",
        title: "Public R&D + shipped demos",
        description:
          "Open research, browser-based tools, and polished narrative execution.",
      },
    ],
    statusChips: ["Founder-led", "High-signal engagements"],
    panelLabel: "Core model",
    panelTitle: "Research-led delivery.",
    panelKicker: "Applied research first. Beautiful execution second. Commodity work never.",
    panelCopy:
      "This is not a generic dev shop and not a pure think tank. SRCABC is strongest when the project needs sharp technical judgment, a convincing demo, and a final recommendation the client can actually build on.",
    coreCards: [
      {
        icon: "R",
        title: "Research depth",
        description:
          "Landscape mapping, benchmark framing, technical risk decomposition, system reasoning.",
      },
      {
        icon: "P",
        title: "Prototype craft",
        description:
          "Interactive demos and working proofs that reduce uncertainty fast.",
      },
      {
        icon: "S",
        title: "System thinking",
        description:
          "Architecture, interface boundaries, constraints, and build-ready next steps.",
      },
      {
        icon: "N",
        title: "Narrative polish",
        description:
          "Premium presentation for stakeholder alignment, investor demos, and product storytelling.",
      },
    ],
    panelNote:
      "early product bets, AI features with unclear UX or architecture, premium technical showcases, internal tools that need strategic clarity, and R&D-heavy concepts that must become legible to buyers or stakeholders.",
  },
  offers: {
    eyebrow: "What you can buy",
    title: "Productized offers instead of vague consulting.",
    description:
      "The site should not sell smartness. It should sell a sharper decision, a faster validation loop, and a more persuasive output. These four offers give the business a clean ladder from first engagement to long-term advisory.",
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
          "Clarify the space, frame the bet, and identify where the real technical or product risk actually sits.",
        meta: ["1-2 weeks", "Best first step"],
        kinds: ["all", "early"],
        bullets: [
          "competitive and technical landscape",
          "risk map, decision criteria, benchmark plan",
          "clear recommendation memo for founders or leads",
          "ideal before committing to architecture or roadmap",
        ],
      },
      {
        title: "Prototype Sprint",
        description:
          "Build a working proof that makes the opportunity, the UX, and the technical shape legible to decision-makers.",
        meta: ["3-6 weeks", "Highest leverage"],
        kinds: ["all", "early", "build"],
        emphasis: true,
        bullets: [
          "interactive proof-of-concept or technical demonstrator",
          "measure what matters, not vanity outputs",
          "designed for stakeholder buy-in and next-step clarity",
          "great for AI tools, interactive products, and novel workflows",
        ],
      },
      {
        title: "System Blueprint",
        description:
          "Turn the validated concept into something a product team or engineering team can continue building with confidence.",
        meta: ["4-8 weeks", "Transfer-ready"],
        kinds: ["all", "build"],
        bullets: [
          "architecture outline, interfaces, constraints, and tradeoffs",
          "implementation path with sequencing recommendations",
          "handover package for internal team or external partner",
          "good for products leaving R&D mode",
        ],
      },
      {
        title: "Advisory Retainer",
        description:
          "Stay close to major product and architecture choices without carrying a full-time senior R&D lead.",
        meta: ["Monthly", "Selective"],
        kinds: ["all", "ongoing"],
        bullets: [
          "ongoing decision support for founders and engineering leads",
          "review of vendor choices, product directions, and prototypes",
          "research memos and strategic sparring on demand",
          "best after an initial sprint or prototype",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Operating model",
    title: "Research -> Prototype -> Transfer",
    description:
      "This is the long-term spine of the company. It protects you from becoming either a vague innovation consultant or a commodity implementation shop.",
    steps: [
      {
        index: "01",
        label: "Research",
        title: "Frame the bet.",
        description:
          "Map the opportunity, pressure-test assumptions, and decide what deserves to be measured instead of merely discussed.",
        bullets: [
          "landscape and comparable solutions",
          "failure modes and unknowns",
          "decision memo with options and tradeoffs",
        ],
      },
      {
        index: "02",
        label: "Prototype",
        title: "Make it tangible.",
        description:
          "Build the minimum artifact that reveals the truth: what works, what breaks, and what stakeholders finally understand once they can interact with it.",
        bullets: [
          "working concept or browser-based demonstrator",
          "UX and technical constraints made visible",
          "evidence instead of slideware",
        ],
      },
      {
        index: "03",
        label: "Transfer",
        title: "Hand over cleanly.",
        description:
          "Package the result so an internal team, product org, or future engineering partner can move from prototype to real build without guesswork.",
        bullets: [
          "system blueprint and next-step architecture",
          "implementation notes and sequencing",
          "clear recommendations for scale or stop",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Public proof",
    title: "Show the work. Then ask for trust.",
    description:
      "A new studio should not lead with inflated claims. It should lead with visible evidence. These public references support the long-term positioning far better than generic agency language ever could.",
    items: [
      {
        title: "ORTHOS",
        description:
          "A public research repo and architecture playground. This is the credibility layer: structured documentation, experimental thinking, technical depth, and a visible commitment to ideas that go beyond trend-chasing.",
        meta: ["Open source", "R&D authority"],
        link: { href: "https://github.com/kelaci/orthos", label: "Open repository ->" },
      },
      {
        title: "Prism",
        description:
          "A live browser-based technical product. This proves the studio can turn complex technical logic into an actual user-facing artifact, not just research notes.",
        meta: ["Browser tool", "Prototype craft"],
        link: { href: "https://prism.srcabc.com/", label: "Open project ->" },
      },
      {
        title: "Luxury Property Showcase",
        description:
          "A polished, high-trust digital experience. This is the evidence that SRCABC can package technology into something stakeholders actually want to look at, share, and buy through.",
        meta: ["Premium showcase", "Narrative execution"],
        link: { href: "https://lakas.mindig.online/en/", label: "View experience ->" },
      },
    ],
  },
  fit: {
    eyebrow: "Where this wins",
    title: "Best fit - and what to avoid.",
    description:
      "A long-term position gets stronger when it is selective. The goal is not to say yes to every brief. The goal is to become the obvious choice for a narrow class of high-value problems.",
    cards: [
      {
        label: "Great fit",
        title: "High-stakes, unclear, or unusually visible work.",
        bullets: [
          "new product bets with architecture uncertainty",
          "AI features where UX, workflow, and system shape are still unresolved",
          "interactive technical demos for founders, investors, or enterprise buyers",
          "R&D-heavy concepts that need a convincing proof and a cleaner story",
          "premium digital experiences where taste and technical clarity both matter",
        ],
      },
      {
        label: "Not the main lane",
        title: "Commodity implementation and endless delivery.",
        bullets: [
          "generic staffing replacement or low-margin ticket work",
          "large maintenance-heavy projects without a research or prototype angle",
          "feature factories where speed matters more than thinking",
          "projects that need a big retained team instead of founder-level judgment",
          "vague innovation briefs with no decision, proof, or business outcome attached",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions a serious buyer will actually ask.",
    description:
      "This section helps the site behave more like a sales asset and less like a moodboard.",
    items: [
      {
        label: "Model",
        question: "Is this a research studio or a development studio?",
        answer:
          "Both, but in a specific order: research first, prototype second, transfer third. The point is not to become a full-service agency. The point is to reduce uncertainty fast, make the right thing tangible, and hand over a sharper next step.",
      },
      {
        label: "Scope",
        question: "Do you build production systems end to end?",
        answer:
          "The strongest position is not we do everything. SRCABC can take a concept far enough to validate it, de-risk it, and specify it cleanly. For full production scale, the best move is often a handoff to the client team or a dedicated build partner.",
      },
      {
        label: "Buyers",
        question: "Who usually buys this kind of work?",
        answer:
          "Founders, product leaders, CTOs, and engineering leads who are facing a meaningful technical choice and need something stronger than advice but lighter than staffing a whole team.",
      },
      {
        label: "Commercial",
        question: "Why is this model stronger long-term than a generic agency?",
        answer:
          "Because it builds authority, not just utilization. Public R&D, visible prototypes, and productized offers create a moat. Over time, the studio can compound its own frameworks, benchmark logic, and reusable system knowledge instead of reselling hours alone.",
      },
    ],
  },
  contact: {
    eyebrow: "Final CTA",
    title: "Bring the risky idea. Keep the vague brief at home.",
    description:
      "The strongest first conversation is usually about a technical decision, a product bet, or a demo that needs to exist before anyone can commit real budget. That is the lane this site should convert for.",
    pills: [
      "Founder-led conversations",
      "No inflated proof claims",
      "Built for high-signal work",
    ],
    primaryAction: emailAction,
    copyButtonLabel: "Copy email",
    copyAnnouncement: `${siteMeta.email} copied to clipboard.`,
  },
};
