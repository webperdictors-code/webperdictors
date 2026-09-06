export const CALENDLY_URL = "https://calendly.com/webperdictors/30min";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export interface TechLogo {
  name: string;
}

export const techStack: TechLogo[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Stripe" },
  { name: "OpenAI" },
  { name: "Supabase" },
  { name: "Tailwind CSS" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "layers" | "wand" | "brain" | "gauge";
  features: string[];
  accent: string;
}

export const services: Service[] = [
  {
    id: "mvp",
    title: "Full-Stack SaaS MVP Development",
    description:
      "From idea to production-ready product. We design, build, and ship complete SaaS applications with auth, billing, and data infrastructure baked in.",
    icon: "layers",
    features: [
      "Auth, billing & multi-tenant architecture",
      "Postgres / Supabase data layer",
      "CI/CD & production deployment",
    ],
    accent: "violet",
  },
  {
    id: "prototyping",
    title: "Rapid Design-to-Code Prototyping",
    description:
      "Pixel-accurate, responsive interfaces built directly from Figma — animated, accessible, and ready to demo to investors in days, not weeks.",
    icon: "wand",
    features: [
      "Figma-to-production handoff",
      "Framer Motion micro-interactions",
      "Design system & component library",
    ],
    accent: "cyan",
  },
  {
    id: "ai",
    title: "AI / OpenAI Integration",
    description:
      "Embed LLM-powered features — copilots, chat, summarization, and agentic workflows — directly into your product with production-grade guardrails.",
    icon: "brain",
    features: [
      "RAG pipelines & vector search",
      "Streaming chat & agent tooling",
      "Prompt evaluation & cost controls",
    ],
    accent: "pink",
  },
  {
    id: "scale",
    title: "Scale & Architecture Optimization",
    description:
      "Already live? We audit, refactor, and re-architect your stack so it holds up under real traffic — performance, cost, and reliability included.",
    icon: "gauge",
    features: [
      "Performance & Core Web Vitals audits",
      "Infra cost optimization",
      "Zero-downtime migrations",
    ],
    accent: "amber",
  },
];

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "flowbase",
    name: "Flowbase",
    tagline: "No-code workflow automation for solo founders",
    metric: "$12k MRR",
    metricLabel: "in 30 days post-launch",
    tags: ["Next.js", "Stripe", "Supabase"],
    color: "from-violet-500/30 to-cyan-500/10",
  },
  {
    id: "pulsecrm",
    name: "PulseCRM",
    tagline: "AI-assisted CRM for indie B2B sales teams",
    metric: "3,200 signups",
    metricLabel: "in first 6 weeks",
    tags: ["React", "OpenAI", "Node.js"],
    color: "from-cyan-500/30 to-pink-500/10",
  },
  {
    id: "shipfast-ai",
    name: "ShipFast AI",
    tagline: "AI content pipeline for e-commerce brands",
    metric: "4.9★ rating",
    metricLabel: "across 180+ reviews",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    color: "from-pink-500/30 to-amber-500/10",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Design",
    description:
      "We map your product vision, users, and success metrics, then translate it into wireframes and a clickable design system.",
  },
  {
    step: "02",
    title: "14-Day Sprint",
    description:
      "Our engineers build your MVP in focused, transparent sprints with daily progress updates — no black boxes, no surprises.",
  },
  {
    step: "03",
    title: "QA & Polish",
    description:
      "Cross-browser testing, performance tuning, and accessibility passes ensure your product feels production-grade from day one.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and hand over a clean codebase — then stick around to help you scale as real users show up.",
  },
];

export interface PricingTier {
  id: string;
  name: string;
  oneTimePrice: string;
  retainerPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter MVP",
    oneTimePrice: "$4,900",
    retainerPrice: "$2,400/mo",
    description: "For solo founders validating an idea fast.",
    features: [
      "1 core user flow, fully built",
      "Auth + database included",
      "Deployed to production",
      "14-day delivery",
    ],
  },
  {
    id: "full-saas",
    name: "Full SaaS Launch",
    oneTimePrice: "$9,900",
    retainerPrice: "$4,800/mo",
    description: "A complete, billable SaaS product ready for users.",
    features: [
      "Full multi-flow application",
      "Stripe billing & subscriptions",
      "Admin dashboard & analytics",
      "AI features on request",
      "30 days post-launch support",
    ],
    popular: true,
  },
  {
    id: "partner",
    name: "Dedicated Tech Partner",
    oneTimePrice: "$18,500",
    retainerPrice: "$8,900/mo",
    description: "An embedded team scaling your product long-term.",
    features: [
      "Dedicated senior engineering pod",
      "Architecture & scale reviews",
      "Weekly roadmap planning",
      "Priority 24h response SLA",
    ],
  },
];

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Lindqvist",
    title: "Founder, Flowbase",
    quote:
      "They shipped our MVP in under two weeks and it was cleaner than what our last agency delivered in three months. Genuinely built like a product team, not a vendor.",
    rating: 5,
    initials: "ML",
  },
  {
    name: "Amara Osei",
    title: "CEO, PulseCRM",
    quote:
      "The communication alone was worth it — daily updates, no ambiguity. We had paying customers within a month of kickoff.",
    rating: 5,
    initials: "AO",
  },
  {
    name: "Daniel Cho",
    title: "Founder, ShipFast AI",
    quote:
      "I've worked with four agencies before this one. This is the first team that actually understood the difference between 'done' and 'launch-ready'.",
    rating: 5,
    initials: "DC",
  },
];
