import { siteMeta } from "../../config/site";
import type { HomePageData } from "../../types/site";

const emailAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const homePageData: HomePageData = {
  hero: {
    eyebrow: "Applied research & systems prototyping studio",
    titleLead: "Software ideas that are expensive to get",
    titleAccent: "wrong.",
    intro: siteMeta.description,
    primaryAction: emailAction,
    secondaryAction: { href: "#proof", label: "See public work" },
    signalLabel: "What you buy",
    signalItems: [
      "Research sprint",
      "Working prototype",
      "System blueprint",
      "Founder / CTO advisory",
    ],
    metrics: [
      {
        label: "Positioning",
        title: "Research → Prototype → Transfer",
        description:
          "A clear path from ambiguity to a sharper decision, a working asset, and a buildable next step.",
      },
      {
        label: "Why it works",
        title: "Evidence before scale.",
        description:
          "Best for risky ideas, new technical bets, and premium digital experiences where guessing would be expensive.",
      },
      {
        label: "Proof model",
        title: "Public R&D + shipped demos.",
        description:
          "Open research, browser-based tools, and polished technical storytelling.",
      },
    ],
    statusChips: ["Founder-led", "High-signal engagements"],
    panelLabel: "Core model",
    panelTitle: "Research-led delivery.",
    panelKicker: "Applied research first. Elegant execution second. Commodity work never.",
    panelCopy:
      "Senior judgment, direct execution, and no agency-style delivery fog. SRCABC is not a generic development shop, and not a pure think tank. The studio is strongest when a project needs sharp technical judgment, a convincing working demo, and a final recommendation the client can actually build on.",
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
        icon: "S",
        title: "System thinking",
        description:
          "Architecture, interface boundaries, constraints, tradeoffs, and build-ready next steps.",
      },
      {
        icon: "N",
        title: "Narrative polish",
        description:
          "Premium presentation for stakeholder alignment, investor demos, and product storytelling.",
      },
    ],
    panelNote:
      "early product bets, AI features with unclear UX or architecture, premium technical showcases, internal tools that need strategic clarity, and R&D-heavy concepts that must become legible to buyers, investors, or internal stakeholders.",
  },
  offers: {
    eyebrow: "What you can buy",
    title: "Productized offers instead of vague consulting.",
    description:
      "Four focused offers — from the first validation step to ongoing strategic closeness. Each one is designed to produce a clearer decision, a faster validation loop, and a more persuasive technical asset.",
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
          "Clarify the space, frame the bet, and identify where the real technical or product risk actually sits — before committing serious resources.",
        meta: ["1–2 weeks", "Best first step"],
        kinds: ["all", "early"],
        bullets: [
          "Competitive and technical landscape",
          "Risk map, decision criteria, and benchmark plan",
          "Clear recommendation memo for founders or leads",
          "Ideal before committing to architecture or roadmap",
        ],
      },
      {
        title: "Prototype Sprint",
        description:
          "Build a working proof that makes the opportunity, the user experience, and the technical shape clear to decision-makers.",
        meta: ["3–6 weeks", "Highest leverage"],
        kinds: ["all", "early", "build"],
        emphasis: true,
        bullets: [
          "Interactive proof-of-concept or technical demonstrator",
          "Measured evidence, not vanity outputs",
          "Designed for stakeholder buy-in and next-step clarity",
          "Strong fit for AI tools, interactive products, and novel workflows",
        ],
      },
      {
        title: "System Blueprint",
        description:
          "Turn a validated concept into something a product or engineering team can continue building with confidence.",
        meta: ["4–8 weeks", "Transfer-ready"],
        kinds: ["all", "build"],
        bullets: [
          "Architecture outline, interfaces, constraints, and tradeoffs",
          "Implementation path with sequencing recommendations",
          "Handover package for an internal team or external partner",
          "Strong fit for products leaving R&D mode",
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
          "Review of vendor choices, product directions, and prototypes",
          "Research memos and strategic sparring on demand",
          "Best after an initial sprint, prototype, or system blueprint",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Operating model",
    title: "Research → Prototype → Transfer",
    description:
      "This is the operating spine of the studio. It keeps the work out of two common traps: vague innovation consulting on one side, commodity implementation on the other.",
    steps: [
      {
        index: "01",
        label: "Research",
        title: "Frame the bet.",
        description:
          "Map the opportunity, challenge the assumptions, and decide what deserves to be measured instead of merely discussed.",
        bullets: [
          "Landscape and comparable solutions",
          "Failure modes and unknowns",
          "Decision memo with options and tradeoffs",
        ],
      },
      {
        index: "02",
        label: "Prototype",
        title: "Make it tangible.",
        description:
          "Build the minimum working artifact that reveals the truth: what works, what breaks, and what stakeholders finally understand once they can interact with it.",
        bullets: [
          "Working concept or browser-based demonstrator",
          "UX and technical constraints made visible",
          "Evidence instead of slideware",
        ],
      },
      {
        index: "03",
        label: "Transfer",
        title: "Hand over cleanly.",
        description:
          "Package the result so an internal team, product organization, or future engineering partner can move from prototype to real build without guesswork.",
        bullets: [
          "System blueprint and next-step architecture",
          "Implementation notes and sequencing",
          "Clear recommendation: scale, refine, or stop",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Public proof",
    title: "Show the work. Then ask for trust.",
    description:
      "A new studio should not lead with inflated claims. It should lead with visible evidence. These public references support the positioning more strongly than generic agency language ever could.",
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
          "A live, browser-based technical product. It shows that complex technical logic can become a real user-facing tool — not just a research note.",
        meta: ["Browser tool", "Prototype craft"],
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
      "A strong position gets stronger when it is selective. The goal is not to say yes to every brief. The goal is to become the obvious choice for a narrow class of high-value problems.",
    cards: [
      {
        label: "Great fit",
        title: "High-stakes, unclear, or unusually visible work.",
        bullets: [
          "New product bets with architecture uncertainty",
          "AI features where UX, workflow, and system shape are still unresolved",
          "Interactive technical demos for founders, investors, or enterprise buyers",
          "R&D-heavy concepts that need convincing proof and a cleaner story",
          "Premium digital experiences where taste and technical clarity both matter",
        ],
      },
      {
        label: "Not the main lane",
        title: "Commodity implementation and endless delivery.",
        bullets: [
          "Generic staffing replacement or low-margin ticket work",
          "Large maintenance-heavy projects without a research or prototype angle",
          "Feature-factory work where speed matters more than judgment",
          "Projects that need a large retained delivery team instead of founder-level thinking",
          "Vague innovation briefs with no decision, proof, or business outcome attached",
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
        label: "Model",
        question: "Is this a research studio or a development studio?",
        answer: [
          "Both, but in a specific order: research first, prototype second, transfer third.",
          "The point is not to become a full-service agency. The point is to reduce uncertainty fast, make the right thing tangible, and hand over a sharper next step.",
        ],
      },
      {
        label: "Scope",
        question: "Do you build production systems end to end?",
        answer: [
          "Not as the default model.",
          "SRCABC usually works up to validation, prototype, and build-ready architecture. From there, the production build can be continued by an internal team or a trusted engineering partner.",
          "We can support the handover, review key decisions, and stay close to the build — but we do not sell large-scale commodity delivery.",
        ],
      },
      {
        label: "Buyers",
        question: "Who usually buys this kind of work?",
        answer: [
          "Founders and CTOs facing expensive architecture decisions.",
          "Product leaders who need a persuasive interactive demo for investors, enterprise buyers, or internal stakeholders.",
          "Engineering teams trying to move an R&D-heavy concept toward something concrete enough to build, fund, or stop with confidence.",
        ],
      },
      {
        label: "Commercial",
        question: "Why is this model stronger long-term than a generic agency?",
        answer: [
          "A generic agency sells capacity.",
          "SRCABC sells judgment.",
          "The work is narrower, faster, and closer to the real decision: what should be built, what should be tested, what should be handed over, and what should be stopped before it becomes expensive.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Final CTA",
    title: "Bring the risky idea. Leave the vague brief behind.",
    description:
      "The strongest first conversation is usually about a technical decision, a product bet, or a demo that needs to exist before anyone can commit real budget. That is the lane SRCABC is built for.",
    pills: [
      "Founder-led conversations",
      "No inflated claims",
      "Built for high-signal work",
    ],
    primaryAction: emailAction,
    copyButtonLabel: "Copy email",
    copyAnnouncement: `${siteMeta.email} copied to clipboard.`,
  },
};
