export type Service = {
  slug: string;
  title: string;
  category: "Market Intelligence Services" | "Business Consultancy Services";
  summary: string;
  description: string;
  features: string[];
  icon: "search" | "route" | "radar" | "store" | "eye" | "briefcase" | "map";
};

export const services: Service[] = [
  {
    slug: "market-research-data-analysis",
    title: "Market Research & Data Analysis",
    category: "Market Intelligence Services",
    summary: "Research that clarifies market size, customer behavior, pricing, distribution, and category dynamics.",
    description:
      "Quantitative and qualitative research designed to help businesses understand market size, customer behavior, pricing structures, distribution opportunities, and category dynamics.",
    features: [
      "Market research and reports",
      "Retail visibility assessment",
      "Competitive intelligence",
      "Merchandising audit",
      "Retail universe mapping",
      "Mystery shopping"
    ],
    icon: "search"
  },
  {
    slug: "distributor-audit-performance-evaluation",
    title: "Distributor Audit & Performance Evaluation",
    category: "Market Intelligence Services",
    summary: "Independent assessment of distributor capability, coverage, execution, and route-to-market performance.",
    description:
      "Independent assessment of distributor capabilities, operational performance, route-to-market effectiveness, and market execution standards.",
    features: [
      "Coverage verification",
      "Channel performance assessment",
      "Merchandising evaluation",
      "Route-to-market analysis",
      "Marketing campaigns audit"
    ],
    icon: "route"
  },
  {
    slug: "competitor-intelligence",
    title: "Competitor Intelligence",
    category: "Market Intelligence Services",
    summary: "Structured monitoring of pricing, visibility, promotions, launches, and competitive threats.",
    description:
      "Structured competitor monitoring to understand market positioning, pricing movements, promotional activities, visibility execution, and competitive threats.",
    features: [
      "Price benchmarking",
      "Competitor mapping",
      "Visibility tracking",
      "Promotion monitoring",
      "Product launch tracking",
      "Retail execution analysis"
    ],
    icon: "radar"
  },
  {
    slug: "retail-merchandising-audit",
    title: "Retail & Merchandising Audit",
    category: "Market Intelligence Services",
    summary: "In-store execution audits across channels and regions to evaluate visibility and compliance.",
    description:
      "Evaluation of in-store execution standards and retail visibility performance across channels and regions.",
    features: [
      "Product availability",
      "Shelf visibility",
      "Planogram compliance",
      "Promotion execution",
      "Merchandiser product knowledge",
      "Pricing analysis"
    ],
    icon: "store"
  },
  {
    slug: "mystery-shopping",
    title: "Mystery Shopping",
    category: "Market Intelligence Services",
    summary: "Real-customer evaluation of experience, service quality, staff behavior, and operational compliance.",
    description:
      "Professional mystery shopping services that evaluate customer experience, service quality, staff behavior, and operational compliance from a real customer perspective.",
    features: ["Customer experience assessment", "Service quality review", "Staff behavior observation", "Operational compliance checks"],
    icon: "eye"
  },
  {
    slug: "strategy-business-advisory",
    title: "Strategy & Business Advisory",
    category: "Business Consultancy Services",
    summary: "Practical strategies tailored to emerging and complex market realities.",
    description:
      "Practical business strategies tailored to the realities of emerging and complex markets.",
    features: [
      "Strategic advisory",
      "Organizational and operational assessment",
      "Growth strategy",
      "Customer experience strategy",
      "Business plan",
      "Feasibility study"
    ],
    icon: "briefcase"
  },
  {
    slug: "market-entry-expansion-strategy",
    title: "Market Entry & Expansion Strategy",
    category: "Business Consultancy Services",
    summary: "Commercial analysis and local market understanding for entry, expansion, and growth roadmaps.",
    description:
      "Structured commercial analysis and local market understanding to support successful market entry and expansion.",
    features: [
      "Market entry assessment",
      "Go-to-market strategy",
      "Channel strategy",
      "Distribution model design",
      "Commercial feasibility analysis",
      "Territory prioritization",
      "Growth roadmap development"
    ],
    icon: "map"
  }
];

export const featuredServices = services.slice(0, 6);
