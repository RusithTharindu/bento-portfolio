export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  year: string;
  status: string;
  heading: {
    before: string;
    emphasis: string;
    after: string;
  };
  lede: string;
  actions: string[];
  overview: {
    problem: string;
    approach: string;
  };
  role: string;
  highlights: string[];
  stack: string[];
  glance: Array<[string, string]>;
};

export const projects: Project[] = [
  {
    slug: "nova",
    number: "01",
    title: "Project Nova",
    shortTitle: "Nova",
    description:
      "Real-time collaboration platform with CRDT-backed document sync.",
    tags: ["Next.js", "Node", "WebSocket"],
    year: "2025",
    status: "SHIPPED",
    heading: {
      before: "Project",
      emphasis: "Nova",
      after: "collaborative docs, rebuilt.",
    },
    lede:
      "A real-time collaboration platform for distributed engineering teams - CRDT-backed document sync, sub-50ms presence, offline-first editing. Built from the ground up to outlast the meeting it was made in.",
    actions: ["Live demo", "Source", "Case study"],
    overview: {
      problem:
        "Collaboration tools promise real-time, then fall apart the moment two people edit the same paragraph on a flaky hotel Wi-Fi. We wanted a platform that felt instant, survived disconnects, and never lost a keystroke.",
      approach:
        "We built Nova on a custom Yjs-based CRDT layer with a bespoke WebSocket sync protocol. Every client keeps a full local replica, so editing works offline and merges deterministically when the connection returns.",
    },
    role:
      "Lead engineer - 8 months. Owned the sync protocol, the Next.js client, and the authorization model. Worked alongside one designer and two backend engineers.",
    highlights: [
      "Sub-50ms presence across three regions via edge-deployed WebSocket relays.",
      "Offline-first editing - writes persist to IndexedDB and replay on reconnect.",
      "Conflict-free merges using a lightweight CRDT tuned for prose documents.",
      "50k MAUs in the first quarter post-launch, p95 input latency under 30ms.",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "WebSocket", "Yjs", "Redis", "Postgres"],
    glance: [
      ["Timeline", "Jan 2025 - Aug 2025"],
      ["Team", "4 engineers, 1 designer"],
      ["Users", "50,000+ MAU"],
      ["Latency", "p95 input < 30ms"],
      ["Status", "Live in production"],
    ],
  },
  {
    slug: "atlas",
    number: "02",
    title: "Atlas Ledger",
    shortTitle: "Atlas",
    description:
      "Double-entry accounting engine for multi-tenant fintech workloads.",
    tags: ["Java", "Spring", "Postgres"],
    year: "2023 - 2024",
    status: "LIVE",
    heading: {
      before: "Atlas",
      emphasis: "Ledger",
      after: "correctness at scale.",
    },
    lede:
      "A double-entry accounting engine for multi-tenant fintech workloads. Every debit matches a credit, every transaction is auditable, and every reconciliation run completes before the coffee gets cold.",
    actions: ["Case study", "Architecture doc"],
    overview: {
      problem:
        "Fintech products built on generic ORMs drift out of balance the moment concurrency spikes. We needed a ledger primitive that made double-entry invariants impossible to violate - not a convention, but a hard constraint.",
      approach:
        "Atlas models every financial movement as an immutable, append-only journal entry with paired postings. The database enforces balance at commit time; everything else - statements, reconciliation, reporting - is a projection.",
    },
    role:
      "Backend engineer - 18 months. Built the journaling core, the reconciliation pipeline, and the multi-tenant isolation layer. Shipped the first regulated-market deployment.",
    highlights: [
      "Zero out-of-balance incidents across 12 months and 40M+ postings.",
      "Sub-second end-of-day reconciliation across 200k accounts.",
      "Event-sourced journal with point-in-time replay for audits.",
      "Multi-tenant with row-level isolation and per-tenant rate limits.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Flyway", "Docker"],
    glance: [
      ["Timeline", "Jun 2022 - Dec 2023"],
      ["Team", "3 backend - 1 SRE"],
      ["Throughput", "2.5k postings/sec peak"],
      ["Volume", "40M+ postings"],
      ["Status", "Live in production"],
    ],
  },
  {
    slug: "halcyon",
    number: "03",
    title: "Halcyon UI",
    shortTitle: "Halcyon",
    description:
      "Headless component library - themeable primitives for design systems.",
    tags: ["React", "TS", "OSS"],
    year: "2024",
    status: "OPEN SOURCE",
    heading: {
      before: "Halcyon",
      emphasis: "UI",
      after: "headless primitives.",
    },
    lede:
      "A headless React component library for teams tired of fighting their design system. Accessible by default, unopinionated on styling, composable from the inside out.",
    actions: ["View on GitHub", "Docs", "Playground"],
    overview: {
      problem:
        "Most component libraries force a visual language. Most design systems end up forking them. Halcyon ships the behavior - keyboard nav, focus management, ARIA - and leaves every pixel to you.",
      approach:
        "Inspired by Radix, but smaller and more opinionated about composition. Each primitive is a thin state machine paired with an unstyled DOM shape. Bring your own CSS, Tailwind, or whatever comes next.",
    },
    role:
      "Creator and maintainer. Nights-and-weekends project that grew into the internal design system at two companies. Still actively maintained.",
    highlights: [
      "24 primitives - dialog, menu, combobox, tabs, toast, and more.",
      "WCAG AA keyboard and screen-reader coverage, verified in CI.",
      "Tree-shakeable - import one primitive, ship one primitive.",
      "1.1k GitHub stars, 40+ contributors, weekly npm downloads growing.",
    ],
    stack: ["TypeScript", "React", "Vite", "Vitest", "Storybook", "tsup"],
    glance: [
      ["Started", "Mar 2024"],
      ["Primitives", "24 shipped"],
      ["Stars", "1,100+"],
      ["Bundle", "~6kb per primitive"],
      ["License", "MIT"],
    ],
  },
  {
    slug: "relay",
    number: "04",
    title: "Relay Gateway",
    shortTitle: "Relay",
    description:
      "Edge API gateway with per-tenant rate limits and audit streaming.",
    tags: ["NestJS", "Redis", "K8s"],
    year: "2024",
    status: "INTERNAL",
    heading: {
      before: "Relay",
      emphasis: "Gateway",
      after: "edge API routing.",
    },
    lede:
      "An edge-deployed API gateway with per-tenant rate limits, request signing, and audit streaming. Sits in front of a polyglot service mesh and makes it look like one clean API.",
    actions: ["Architecture", "Internal docs"],
    overview: {
      problem:
        "The platform grew 12 services in a year across three languages. Clients were wiring up different auth schemes for each. We needed one edge - one set of contracts, one audit log, one place to pull the emergency brake.",
      approach:
        "Relay is a NestJS-based gateway running on edge nodes. Incoming traffic is authenticated, rate-limited per tenant, signed for downstream services, and mirrored to a streaming audit log. Configuration is hot-reloaded from a single source.",
    },
    role:
      "Platform engineer - 6 months. Designed the routing and rate-limit model, built the audit pipeline, rolled out across three regions without downtime.",
    highlights: [
      "Per-tenant rate limits with burst credits, backed by Redis.",
      "Audit stream - every request mirrored to Kafka in < 5ms.",
      "Zero-downtime config reload across 14 edge nodes.",
      "p99 overhead under 3ms at 8k req/sec per node.",
    ],
    stack: ["TypeScript", "NestJS", "Redis", "Kafka", "Kubernetes", "Prometheus"],
    glance: [
      ["Timeline", "Sep 2024 - Mar 2025"],
      ["Team", "2 engineers"],
      ["Throughput", "8k req/sec per node"],
      ["Regions", "3 - 14 edge nodes"],
      ["Status", "Internal / live"],
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return undefined;
  }

  return projects[(index + 1) % projects.length];
}
