import { siteMeta } from "../../config/site";
import type { HomePageData } from "../../types/site";

const emailAction = {
  href: `mailto:${siteMeta.email}`,
  label: siteMeta.email,
};

export const homePageData: HomePageData = {
  hero: {
    eyebrow: "Usable app fast, market validation, production system",
    titleLead:
      "Call SRCABC when you want to get a real, usable app in front of the market as fast as possible.",
    titleAccent: "",
    intro:
      "In the end the market does the validation — not internal opinions and not presentations. So we build tangible, usable software the fastest way possible and put it in users' hands — in the right order, so the work you invest doesn't go to waste.",
    primaryAction: { href: emailAction.href, label: "Send us your idea" },
    secondaryAction: { href: "#process", label: "The process ↓" },
    signalLabel: "In short:",
    signalItems: [
      "A fast, usable app",
      "Market validation with real users",
      "Blueprint and end-to-end execution",
      "Integration with your existing systems",
    ],
    metrics: [
      {
        label: "First result",
        title: "1–2 weeks",
        description:
          "That's how long it takes to get a working direction and a tangible result in hand — something the market can already judge.",
      },
      {
        label: "Direction",
        title: "4 steps",
        description:
          "Research → Prototype → Blueprint → Build. In exactly that order, with nothing skipped.",
      },
      {
        label: "Contact",
        title: "Founder-led",
        description:
          "László Kenyeres runs the project. No account manager, no handoffs. Work goes straight to the person doing it.",
      },
    ],
    statusChips: ["Founder-led", "No inflated claims"],
    panelLabel: "Method",
    panelTitle: "Research, prototype, blueprint, build.",
    panelKicker: "Because the market does the validation.",
    panelCopy:
      "The market has the final say, not internal opinion. So the goal is a real, usable app as early as possible — one you can put in the hands of live users. But fast doesn't mean dumping a slapped-together, vibe-coded app on the whole market at once: research and the prototype speed things up, while the blueprint and the build make sure the foundations hold and the work doesn't go to waste.",
    coreCards: [
      {
        icon: "search",
        title: "Research",
        subtitle: "6–10 customer interviews + market scan",
        description:
          "You find out what's worth putting energy into, and the fastest path to a usable app. Who's the buyer? What do they expect? Where are the risks? Before a single line of code.",
      },
      {
        icon: "play",
        title: "Prototype",
        subtitle: "Interactive demo in the browser",
        description:
          "You get a tangible, usable app in hand — not a presentation, not opinions. Something you can put in front of real users, investors, and early customers — the market delivers the verdict.",
      },
      {
        icon: "grid",
        title: "Blueprint",
        subtitle: "Full architecture + roadmap",
        description:
          "After market feedback, the plan for the final system is drawn up. Foundations that carry the future load, with no later rebuild.",
      },
      {
        icon: "check",
        title: "Build",
        subtitle: "Live system, from zero or onto existing",
        description:
          "On the proven plans, the production system gets built. It fits your existing systems and is handed over as a finished product.",
      },
    ],
    panelNote:
      "a new product idea, a complex system, an AI integration, or an R&D concept — where starting in the wrong order gets expensive.",
  },
  problem: {
    eyebrow: "# diagnosis",
    title: "Most teams wait too long for real market feedback.",
    description:
      "The risk isn't the code — it's that months go by before a real, usable app reaches users. Here's a short diagnosis of what tends to go wrong, and what you can do about it.",
    lines: [
      "Months are spent building before a single real user can try it.",
      "Presentations and internal opinions decide where the market should.",
      "The architecture is set in stone before the market has confirmed anything.",
    ],
    conclusion: "The problem isn't the execution. It's that the market gets to weigh in too late.",
    bullets: [
      "A development sprint kicks off before a real user could try the product.",
      "The architecture sprawls too early, before any market feedback.",
      "Disconnected pieces of code get built that never come together into a usable app.",
      "The R&D phase never reaches a tangible app you can put on the market.",
    ],
  },
  offers: {
    eyebrow: "Offers",
    title: "Concrete work, not vague consulting.",
    description:
      "Every engagement comes with a concrete deliverable, a duration, and a clear scope. You can pick the right starting point.",
    tabs: [
      { id: "all", label: "All" },
      { id: "early", label: "Early validation" },
      { id: "build", label: "Build" },
      { id: "ongoing", label: "Ongoing support" },
    ],
    items: [
      {
        title: "Research Sprint",
        description:
          "Clarify the ground and surface the risks before you commit serious resources.",
        meta: ["1–2 weeks", "Best first step"],
        kinds: ["all", "early"],
        bullets: [
          "Competitive and technical landscape",
          "Executive recommendation and decision criteria",
        ],
      },
      {
        title: "Prototype Sprint",
        description:
          "An interactive demo that lets investors and executives see what the product can do and where the market opportunity is.",
        meta: ["3–6 weeks", "Maximum impact"],
        kinds: ["all", "early", "build"],
        emphasis: true,
        bullets: [
          "Interactive proof-of-concept prototype",
          "Built for investor and enterprise presentations",
        ],
      },
      {
        title: "System Blueprint",
        description:
          "The proven concept becomes a technical plan the final product can be built from without surprises.",
        meta: ["4–8 weeks", "Solid foundations"],
        kinds: ["all", "build"],
        bullets: [
          "Architecture, interfaces, and tradeoffs mapped",
          "Implementation path with sequencing recommendations",
        ],
      },
      {
        title: "End-to-End Build",
        description:
          "On the proven plans, the production product gets built. From code to operations and integration with your existing systems, László Kenyeres carries the whole process.",
        meta: ["Months", "Idea to finished product"],
        kinds: ["all", "build"],
        bullets: [
          "Software engineering that holds up in production",
          "Designing and building the full system",
          "A finished, handed-over system, ready to use",
        ],
      },
      {
        title: "Advisory Retainer",
        description:
          "A steady senior presence at the decisions that matter — as if you had your own experienced CTO on the team.",
        meta: ["Monthly", "Selective"],
        kinds: ["all", "ongoing"],
        bullets: [
          "Review of vendor choices and engineering directions",
          "Research summaries and strategic guidance",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Operating model",
    title: "Research, prototype, blueprint, build.",
    description:
      "Throughout a project the collaboration stays direct, and every step aims to get a real, usable app in front of the market as early as possible. Fast proof, strict documentation, traceable decisions at every stage.",
    steps: [
      {
        index: "01",
        label: "Research",
        title: "Find out what's worth investing in.",
        description:
          "Mapping the opportunity, testing the assumptions, and surfacing the risks — before the first line of code.",
        deliverable: "Market scan + Risk map + Decision memo",
        duration: "1–2 weeks",
        bullets: [
          "Market scan and risk map",
          "Decision-support executive summary",
        ],
      },
      {
        index: "02",
        label: "Prototype",
        title: "Tangible proof.",
        description:
          "We build the minimal, working app that real users can try — the market shows what works in practice and what value it delivers.",
        deliverable: "Interactive demo + User feedback",
        duration: "3–6 weeks",
        bullets: [
          "Browser-based tools and interactive demos",
          "Working proof instead of a presentation",
        ],
      },
      {
        index: "03",
        label: "Blueprint",
        title: "Scalable foundations, no guesswork.",
        description:
          "We draw up the final architecture and the path that turns the concept into a stable business system.",
        deliverable: "Architecture outline + Tech roadmap + Schedule",
        duration: "4–8 weeks",
        bullets: [
          "Architecture outline and technology path",
          "Resource and schedule planning for the final build",
        ],
      },
      {
        index: "04",
        label: "Build",
        title: "A finished system, live in production.",
        description:
          "Once the concept holds, the final software gets built, fits your existing systems, and is handed over as a long-term maintainable system.",
        deliverable: "Live system + Infrastructure + Documentation",
        duration: "project-dependent",
        bullets: [
          "Product development from idea to production code",
          "Building the infrastructure needed for production",
          "Full execution and go-to-market support",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Public work",
    title: "The work first. Trust after.",
    description:
      "A young studio shouldn't lead with promises — it should lead with visible evidence.",
    items: [
      {
        title: "ORTHOS",
        description:
          "A public research repo and architecture sandbox. Structured documentation, experimental thinking, and technical depth.",
        meta: ["Open source", "R&D credibility"],
        link: { href: "https://github.com/kelaci/orthos", label: "Open repository →" },
      },
      {
        title: "Prism",
        description:
          "A live, browser-based technical product. It shows that complex logic can become a real, scalable, user-friendly tool.",
        meta: ["Browser tool", "Production environment"],
        link: { href: "https://prism.srcabc.com/", label: "Open project →" },
      },
      {
        title: "notabot",
        description:
          "A next-generation CAPTCHA and bot-detection system. Browser-environment analysis, timing heuristics, and protection against automated abuse.",
        meta: ["Security", "Bot detection"],
        link: { href: "https://notabot.srcabc.com/", label: "Open notabot →" },
      },
    ],
  },
  fit: {
    eyebrow: "Who should reach out to SRCABC?",
    title: "Good work only happens with focus.",
    description:
      "Not every inquiry fits here. For a well-defined, critical phase and the production build that follows it, SRCABC is the obvious choice.",
    cards: [
      {
        label: "Where the stakes are real",
        title: "When is SRCABC the right choice?",
        bullets: [
          "A complex project where you want everything — from testing the idea to the finished system — in one accountable hand.",
          "A new product idea where the technical architecture is still uncertain.",
          "AI features and deep technical integrations into your existing systems.",
          "A demanding product where technical quality, scalability, and design all matter.",
        ],
      },
      {
        label: "When you just need extra hands",
        title: "When is SRCABC not the right fit?",
        bullets: [
          "General capacity top-up and grinding through routine tasks.",
          "Feature-factory projects where pace matters more than quality and judgment.",
          "Maintenance work with no research, design, or modernization goal.",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "What a serious buyer actually asks.",
    description: "Short answers to the questions that come up before the decision.",
    items: [
      {
        label: "Scope",
        question: "Can a production-ready system get built too?",
        answer: [
          "Yes. If the research and prototype phases prove the concept is viable, the final software gets built, fits your existing systems, and is handed over as a long-term maintainable system. The plans aren't made for the drawer.",
        ],
      },
      {
        label: "Model",
        question: "Is this a research lab or a development studio?",
        answer: [
          "Both, but in a strict order: research, prototype, blueprint, build. The goal is a real, usable app as early as possible, because the market does the validation — not internal opinions. The order is only there so the work you invest doesn't go to waste.",
        ],
      },
      {
        label: "Buyers",
        question: "Who are the typical clients?",
        answer: [
          "Founders, executives, and investors who aren't looking for cookie-cutter solutions. Who need a scalable, reliable system and know that a badly started build costs orders of magnitude more than upfront validation.",
        ],
      },
      {
        label: "Commercial",
        question: "Why is this stronger than a generic agency?",
        answer: [
          "Because the technical consulting isn't separated from the execution. Agencies often just carry out a spec; here the concept is reviewed from a business and risk angle too, and responsibility for building the whole system stays in one hand.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Tell us what you're working on.",
    description:
      "The best first conversation is usually about a technical decision, a risky product assumption, or building a complex system.",
    pills: [
      "Founder-led",
      "No inflated claims",
      "Specialized in critical phases and full execution",
    ],
    person: {
      name: "László Kenyeres",
      photo: "/Kenyeres_Laszlo_256.webp",
      photoAlt: "Portrait of László Kenyeres",
      email: emailAction,
      phone: { href: "tel:+36706518300", label: "+36 70 651 8300" },
    },
  },
};
