export const siteConfig = {
  name: "NelviusGrey Tech",
  tagline: "Technology for Change. Systems for the Future.",
  url: "https://nelviusgrey.com.ng",
  address: "08, Oseni Liadi Street, Okota Isolo, Lagos, Nigeria",
  phone: ["09035308940", "09043708371"],
  email: {
    founder: "nelson@nelviusgreytech.com.ng",
    support: "support@nelviusgreytech.com.ng",
  },
  founder: {
    name: "Ighere G. Nelson",
    title: "Founder / Chief Innovation Technologist",
  },
  links: {
    companyLinkedIn: "https://www.linkedin.com/company/nelviusgrey-tech",
    founderLinkedIn: "https://www.linkedin.com/in/nelson-ighere-581103237/",
    whatsapp: "https://wa.me/2349035308940",
    privacyPolicy:
      "https://drive.google.com/uc?export=download&id=1F_l1xKGyJmTpD3BT6Q9EdZmlke64Oiqb",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type IconName =
  | "Code2"
  | "Network"
  | "BarChart3"
  | "Leaf"
  | "HeartHandshake"
  | "Workflow"
  | "Building2"
  | "Globe2"
  | "Wheat"
  | "ShieldCheck"
  | "Landmark"
  | "BrainCircuit"
  | "ServerCog"
  | "Sparkles"
  | "LineChart"
  | "Gauge"
  | "Map"
  | "FileText";

export const trustPoints = [
  "Web & App Development",
  "Data Systems & Dashboards",
  "Climate-Tech & GIS Solutions",
  "NGO / Humanitarian MIS",
  "Business Automation",
  "IT Infrastructure Advisory",
] as const;

export const stats = [
  { value: 8, suffix: "+", label: "solution domains" },
  { value: 6, suffix: "", label: "core service lines" },
  { value: 24, suffix: "/7", label: "support mindset" },
  { value: 1, suffix: "", label: "mission-led studio" },
] as const;

export const services = [
  {
    title: "Website & Web App Development",
    icon: "Code2" satisfies IconName,
    summary:
      "Modern, responsive, fast, and professional websites and web applications for brands, businesses, organizations, and institutions.",
    deliverables: [
      "Corporate websites",
      "Landing pages",
      "Web apps",
      "Admin dashboards",
      "Portals",
      "Booking/contact systems",
      "SEO-ready websites",
    ],
  },
  {
    title: "Custom IT Infrastructure & Digital Systems",
    icon: "Network" satisfies IconName,
    summary:
      "Digital operating systems that help organizations coordinate work, capture data, document processes, and scale with confidence.",
    deliverables: [
      "Workflow systems",
      "Internal tools",
      "Data collection systems",
      "Reporting infrastructure",
      "Cloud-ready architectures",
      "System planning and documentation",
    ],
  },
  {
    title: "Data Analytics, Dashboards & Reporting",
    icon: "BarChart3" satisfies IconName,
    summary:
      "Clear insight layers that turn raw records into dashboards, reports, monitoring views, and decision-support tools.",
    deliverables: [
      "KPI dashboards",
      "Data cleaning and structuring",
      "Excel/Google Sheets automation",
      "Power BI / Python dashboards",
      "Executive reports",
      "Monitoring and evaluation dashboards",
    ],
  },
  {
    title: "Climate-Tech, GIS & Environmental Solutions",
    icon: "Leaf" satisfies IconName,
    summary:
      "Climate, carbon, emissions, geospatial, sustainability, and environmental intelligence concepts for organizations working on transition and resilience.",
    deliverables: [
      "Climate dashboards",
      "GIS-enabled platforms",
      "Emissions tracking tools",
      "MRV/dMRV concepts",
      "Climate-risk visualization",
      "Sustainability reporting support",
      "Location intelligence tools",
    ],
  },
  {
    title: "NGO, Humanitarian & Social Impact Systems",
    icon: "HeartHandshake" satisfies IconName,
    summary:
      "Human-centered digital tools for program visibility, beneficiary tracking, reporting, data collection, and field operations.",
    deliverables: [
      "Beneficiary management systems",
      "Case management tools",
      "Program dashboards",
      "M&E reporting tools",
      "Training/capacity-building support",
      "Data collection forms",
      "Impact reporting systems",
    ],
  },
  {
    title: "Business Automation & Digital Transformation",
    icon: "Workflow" satisfies IconName,
    summary:
      "Smart workflows that reduce manual work, improve operations, and give teams cleaner ways to serve customers and manage records.",
    deliverables: [
      "Process automation",
      "Invoice and receipt systems",
      "CRM-style tools",
      "Digital forms",
      "Document generation",
      "Reporting workflows",
      "AI-assisted business tools",
    ],
  },
] as const;

export const whyChooseUs = [
  "Sector-aware technology design",
  "Practical and scalable systems",
  "Clean user experience",
  "Data-driven thinking",
  "Innovation-first approach",
  "Built for real-world users",
] as const;

export const processSteps = [
  {
    title: "Discover",
    text: "We clarify the problem, users, workflows, constraints, data realities, and business outcomes.",
  },
  {
    title: "Design",
    text: "We translate the brief into information architecture, interface flows, technical direction, and delivery priorities.",
  },
  {
    title: "Build",
    text: "We develop the working system with responsive interfaces, clean code, and maintainable structure.",
  },
  {
    title: "Test",
    text: "We review performance, responsiveness, content, accessibility, data states, and user journeys.",
  },
  {
    title: "Launch",
    text: "We prepare the product for production, deployment, analytics, SEO, documentation, and operational handover.",
  },
  {
    title: "Improve",
    text: "We support iteration, reporting, automation, new modules, and continuous improvement after launch.",
  },
] as const;

export const values = [
  "Innovation with purpose",
  "Excellence in execution",
  "Practical problem-solving",
  "Trust and transparency",
  "Human-centered technology",
  "Sustainable impact",
] as const;

export const projects = [
  {
    title: "Climate-Tech Platform Support",
    category: "Climate-Tech / Data Systems",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Support for climate finance and emissions-alignment tools, including portfolio analysis, reporting workflows, and climate intelligence concepts.",
    tags: ["Climate intelligence", "Emissions", "Reporting"],
  },
  {
    title: "NGO Beneficiary Management System",
    category: "NGO / Social Impact",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    description:
      "A digital system concept for managing caregivers, beneficiaries, program records, and impact reporting.",
    tags: ["Beneficiary data", "Program records", "Impact"],
  },
  {
    title: "Invoice and Receipt Generator",
    category: "Business Automation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    description:
      "A lightweight business tool designed to help entrepreneurs and small businesses generate invoices and receipts more efficiently.",
    tags: ["Automation", "SME tools", "Documents"],
  },
  {
    title: "Data Dashboards and Reports",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Decision-support dashboards and reporting templates for organizations that need clearer insight from their data.",
    tags: ["Dashboards", "KPI reporting", "Data clarity"],
  },
  {
    title: "Corporate Website Development",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modern websites and digital presence solutions for brands, SMEs, consultants, and professional organizations.",
    tags: ["Web design", "SEO", "Brand systems"],
  },
] as const;

export const solutionAreas = [
  {
    title: "Business & SME Technology",
    icon: "Building2" satisfies IconName,
    description:
      "Digital systems that help small and growing organizations present themselves professionally, manage operations, and make better decisions.",
    problems: ["Manual records", "Weak digital presence", "Unclear reporting", "Slow customer workflows"],
    helps: "We design practical web platforms, internal tools, dashboards, document systems, and automation workflows.",
    examples: ["Corporate websites", "Invoice systems", "Simple CRMs", "Booking and contact portals"],
  },
  {
    title: "Climate and Environmental Technology",
    icon: "Globe2" satisfies IconName,
    description:
      "Technology support for climate, carbon, environmental monitoring, GIS, emissions analysis, and sustainability reporting concepts.",
    problems: ["Fragmented climate data", "Hard-to-read reports", "Weak geospatial visibility", "Limited MRV structure"],
    helps: "We shape dashboards, data models, map-enabled experiences, and reporting tools that make climate work more usable.",
    examples: ["Climate dashboards", "GIS platforms", "Emissions tools", "Risk visualization"],
  },
  {
    title: "Agriculture and Food Systems",
    icon: "Wheat" satisfies IconName,
    description:
      "Digital tools for farmer programs, food systems, agribusiness records, extension support, monitoring, and supply-chain visibility.",
    problems: ["Low field data quality", "Limited farmer visibility", "Manual aggregation", "Weak program reporting"],
    helps: "We support structured data capture, dashboards, beneficiary records, mobile-friendly forms, and analytics workflows.",
    examples: ["Farmer registries", "Program dashboards", "Geo-tagged records", "Training support systems"],
  },
  {
    title: "Social Impact and NGO Technology",
    icon: "HeartHandshake" satisfies IconName,
    description:
      "Systems for organizations that need cleaner beneficiary management, reporting, M&E visibility, and community program operations.",
    problems: ["Scattered beneficiary records", "Slow impact reporting", "Poor data confidence", "Difficult field coordination"],
    helps: "We create human-centered tools that organize programs, cases, activities, indicators, and reporting evidence.",
    examples: ["Beneficiary systems", "M&E dashboards", "Case tools", "Digital intake forms"],
  },
  {
    title: "Humanitarian and Development Systems",
    icon: "ShieldCheck" satisfies IconName,
    description:
      "Resilient information systems for organizations working across humanitarian, development, and institution-facing programs.",
    problems: ["Urgent reporting needs", "Limited visibility", "Multi-location coordination", "Data protection concerns"],
    helps: "We help teams design structured, secure, and field-aware systems for program records and decision support.",
    examples: ["Program MIS", "Response dashboards", "Training portals", "Evidence registers"],
  },
  {
    title: "Government and Institutional Digital Transformation",
    icon: "Landmark" satisfies IconName,
    description:
      "Advisory and implementation support for institutions that need reliable, documented, and user-centered digital services.",
    problems: ["Legacy processes", "Complex approvals", "Poor user experience", "Disconnected data"],
    helps: "We support discovery, interface design, workflow mapping, documentation, and platform implementation.",
    examples: ["Service portals", "Data collection systems", "Admin dashboards", "Workflow modernization"],
  },
  {
    title: "Data, AI and Automation",
    icon: "BrainCircuit" satisfies IconName,
    description:
      "Structured data and intelligent workflow support for organizations that want to reduce repetition and act on better insight.",
    problems: ["Repetitive tasks", "Messy spreadsheets", "Weak analytics", "Slow reporting cycles"],
    helps: "We build clean data structures, dashboard logic, automation flows, and AI-assisted tools where they fit the workflow.",
    examples: ["KPI dashboards", "Data cleaning", "AI-assisted tools", "Automated reports"],
  },
  {
    title: "Digital Infrastructure and Advisory",
    icon: "ServerCog" satisfies IconName,
    description:
      "Technical planning and infrastructure support for organizations that need systems that are maintainable, documented, and ready to grow.",
    problems: ["Unclear architecture", "Undocumented systems", "Scaling concerns", "Poor operational handover"],
    helps: "We help define cloud-ready architecture, workflows, documentation, deployment plans, and support structures.",
    examples: ["System blueprints", "Cloud planning", "Technical documentation", "Platform advisory"],
  },
] as const;

export const insightCategories = [
  "All",
  "AI",
  "Startups",
  "Climate-Tech",
  "FinTech",
  "Cybersecurity",
  "Software",
  "Digital Transformation",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export const fallbackArticles = [
  {
    title: "How intelligent digital infrastructure is reshaping African business operations",
    source: "NelviusGrey Insights",
    publishedAt: "2026-07-02T00:00:00.000Z",
    description:
      "A practical look at the systems, dashboards, workflows, and automation patterns helping organizations operate with more clarity.",
    url: siteConfig.url,
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    category: "Digital Transformation",
    isPlaceholder: true,
  },
  {
    title: "Why climate-tech products need better data design, not just better dashboards",
    source: "NelviusGrey Insights",
    publishedAt: "2026-07-01T00:00:00.000Z",
    description:
      "Climate systems become more useful when data structures, field realities, and reporting needs are designed together.",
    url: siteConfig.url,
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    category: "Climate-Tech",
    isPlaceholder: true,
  },
  {
    title: "The next wave of SME automation will be simple, focused, and workflow-first",
    source: "NelviusGrey Insights",
    publishedAt: "2026-06-28T00:00:00.000Z",
    description:
      "Small teams need tools that remove friction from invoices, records, customer workflows, reports, and recurring decisions.",
    url: siteConfig.url,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    category: "Software",
    isPlaceholder: true,
  },
] as const;

export const serviceImages = {
  web: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  systems: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  data: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  climate: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
} as const;
