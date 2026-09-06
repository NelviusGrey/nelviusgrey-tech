export const SITE_URL = "https://www.nelviusgreytech.com.ng";

export const siteConfig = {
  name: "NelviusGrey Tech",
  tagline: "Technology for Change. Systems for the Future.",
  shortTagline: "Smart Solutions. Bold Designs.",
  url: SITE_URL,
  legacyUrl: "https://nelviusgreytech.wixsite.com/nelviusgrey-tech",
  address: "No. 8 Oseni Liadi Street, Okota, Isolo, Lagos, Nigeria",
  phone: ["+234 904 370 8371", "+234 903 530 8940"],
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
    facebook: "https://web.facebook.com/people/NelviusGrey-Tech/61554331096325/",
    whatsapp: "https://wa.me/2349043708371",
    privacyPolicy:
      "https://drive.google.com/uc?export=download&id=1F_l1xKGyJmTpD3BT6Q9EdZmlke64Oiqb",
  },
  brand: {
    green: "#00a438",
    logoPath: "/brand/logo-mark.png",
    fullLogoSource: "/images/logo/nelviusgrey-tech-logo.png",
    founderPhoto: "/images/founder/ighere-g-nelson-portrait.png",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
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

export const capabilityTicker = [
  "Digital Products",
  "Data Systems",
  "Business Platforms",
  "GIS",
  "Automation",
  "Social Impact",
  "AI Workflows",
  "Digital Transformation",
] as const;

export const serviceCapabilities = [
  {
    slug: "digital-products-platforms",
    title: "Digital Products and Platforms",
    icon: "Code2" satisfies IconName,
    summary:
      "Websites, portals, applications, and product prototypes designed for real users, real workflows, and long-term maintainability.",
    problems: [
      "Weak digital presence",
      "Manual customer or stakeholder journeys",
      "Unclear product direction",
      "Fragmented public and internal tools",
    ],
    deliverables: [
      "Corporate websites",
      "Web applications",
      "Mobile application concepts",
      "Client portals",
      "Internal platforms",
      "Product prototypes",
    ],
    audience: "Businesses, consultants, SMEs, NGOs, founders, and institutions launching or improving digital products.",
    related: ["UI/UX", "Content systems", "SEO", "Analytics", "Integrations"],
  },
  {
    slug: "data-systems-decision-intelligence",
    title: "Data Systems and Decision Intelligence",
    icon: "BarChart3" satisfies IconName,
    summary:
      "Management information systems, dashboards, and reporting workflows that help organizations turn scattered data into decisions.",
    problems: [
      "Messy spreadsheets",
      "Slow reporting cycles",
      "Limited performance visibility",
      "Data that is collected but not used",
    ],
    deliverables: [
      "Dashboards",
      "Management information systems",
      "Data pipelines",
      "Reporting automation",
      "Analytics platforms",
      "Monitoring systems",
    ],
    audience: "Leadership teams, MEL units, operations teams, programmes, and data-heavy organizations.",
    related: ["Data modelling", "Power BI/Python", "MEL", "Automation", "Executive reporting"],
  },
  {
    slug: "business-operations-platforms",
    title: "Business Operations Platforms",
    icon: "Workflow" satisfies IconName,
    summary: "Internal tools and customer-facing systems that bring approvals, records, service delivery and reporting into one dependable workflow.",
    problems: ["Spreadsheet-heavy approvals", "Scattered customer records", "Unclear service status", "Manual operational reporting"],
    deliverables: ["Operations portals", "Approval workflows", "CRM-like internal tools", "Inventory and service systems", "Operational reporting"],
    audience: "SMEs, professional services firms, trade businesses, education teams and growing operations.",
    related: ["Workflow design", "Portals", "Integrations", "Reporting", "Permissions"],
  },
  {
    slug: "social-impact-mel",
    title: "Social-Impact and MEL Systems",
    icon: "HeartHandshake" satisfies IconName,
    summary:
      "Field-aware programme systems for beneficiary records, case management, surveys, evidence tracking, and impact reporting.",
    problems: [
      "Scattered beneficiary data",
      "Manual programme records",
      "Slow donor or management reporting",
      "Weak field-to-office data flow",
    ],
    deliverables: [
      "Beneficiary databases",
      "Case-management systems",
      "Programme dashboards",
      "Survey workflows",
      "Impact reporting",
      "Field-data systems",
    ],
    audience: "NGOs, CBOs, foundations, humanitarian actors, development programmes, and community initiatives.",
    related: ["MEL", "Beneficiary tracking", "Forms", "Dashboards", "Training support"],
  },
  {
    slug: "ai-workflows-automation",
    title: "AI Workflows and Business Automation",
    icon: "BrainCircuit" satisfies IconName,
    summary:
      "Practical automation and AI-assisted workflows that reduce repetitive work without making teams depend on fragile black boxes.",
    problems: [
      "Repetitive administrative tasks",
      "Manual document handling",
      "Slow internal knowledge retrieval",
      "Reporting that consumes too much team time",
    ],
    deliverables: [
      "Workflow automation",
      "Document processing",
      "Intelligent assistants",
      "Internal knowledge tools",
      "Reporting automation",
      "Practical AI integrations",
    ],
    audience: "SMEs, service businesses, operations teams, founders, admin teams, and organizations ready to improve internal workflows.",
    related: ["Process design", "Data systems", "AI-assisted tools", "Internal platforms", "Reporting"],
  },
  {
    slug: "technology-advisory",
    title: "Digital Transformation and Technology Advisory",
    icon: "ServerCog" satisfies IconName,
    summary:
      "Discovery, strategy, system architecture, and implementation support for organizations modernizing how they work.",
    problems: [
      "Unclear digital strategy",
      "Disconnected tools",
      "Poor technical documentation",
      "Technology investments without adoption",
    ],
    deliverables: [
      "Digital strategy",
      "Product discovery",
      "System architecture",
      "Technical assessments",
      "Process digitisation",
      "Implementation support",
    ],
    audience: "Executives, institutions, programme leaders, growing teams, and organizations planning complex digital work.",
    related: ["Discovery", "Architecture", "Documentation", "Vendor support", "Implementation planning"],
  },
] as const;

export type ServiceCapability = (typeof serviceCapabilities)[number];

const allServiceLandingPages = [
  { slug: "custom-software-development", title: "Custom Software Development Company in Nigeria", description: "Custom software development in Lagos for organisations that need dependable operational tools, portals and workflows.", promise: "Build software around the way your organisation actually works.", problem: "Off-the-shelf tools can leave important processes fragmented, manual or impossible to explain. We turn those workflows into maintainable digital products.", audience: "Growing businesses, NGOs, institutions and teams with a workflow that deserves a clearer system.", capabilities: ["Product discovery", "Workflow modelling", "Web application development", "API and integration planning"], deliverables: ["Internal platforms", "Client portals", "Workflow applications", "Technical documentation"], approach: "We begin with the users, decisions and constraints, then shape a focused product scope, interface system and implementation plan.", relatedWork: [{ label: "ShapBill product", href: "/work/shapbill" }, { label: "Nelvius Bank", href: "/work/nelvius-bank" }] },
  { slug: "web-mobile-app-development", title: "Web and Mobile App Development in Lagos", description: "Web and mobile app development for Nigerian businesses, institutions and founders that need clear, responsive digital products.", promise: "Design and ship digital experiences people can use with confidence.", problem: "A digital product loses value when its navigation, content, performance and next actions do not work together.", audience: "Founders, service businesses, NGOs and institutions launching or improving a web or mobile experience.", capabilities: ["Responsive web apps", "Mobile product UX", "Design systems", "Conversion journeys"], deliverables: ["Marketing websites", "Progressive web experiences", "Mobile product concepts", "Accessible interface patterns"], approach: "We connect brand, content hierarchy and interaction design before implementation, with responsive behaviour treated as a first-class requirement.", relatedWork: [{ label: "Exports Royale", href: "/work/exports-royale" }, { label: "Nelvius Bank", href: "/work/nelvius-bank" }] },
  { slug: "data-systems-decision-intelligence", title: "Data Dashboard and MIS Development in Nigeria", description: "Data systems, dashboards and management information systems that help Nigerian organisations turn scattered records into decisions.", promise: "Make organisational data understandable, owned and useful.", problem: "Dashboards cannot repair unclear definitions, fragmented ownership or reporting workflows that no one trusts.", audience: "Leadership teams, MEL units, operations teams and programmes working with recurring performance data.", capabilities: ["Data modelling", "Dashboard UX", "Reporting workflows", "Decision intelligence"], deliverables: ["MIS platforms", "Executive dashboards", "Indicator libraries", "Reporting automation"], approach: "We clarify definitions and decision moments first, then create the data structures and visual layers that support them.", relatedWork: [{ label: "SBTi temperature scoring", href: "/work/sbti-temperature-scoring-tool" }, { label: "FINZ/FINT platform", href: "/work/finz-fint-climate-finance-platform" }] },
  { slug: "ngo-mel-data-management-systems", title: "NGO Data Management and MEL Systems in Nigeria", description: "NGO data management systems, beneficiary workflows and MEL dashboards designed for field realities in Nigeria.", promise: "Connect field evidence, programme decisions and responsible reporting.", problem: "Paper-heavy records and duplicated spreadsheets make it difficult to see progress, protect context and report honestly.", audience: "NGOs, CBOs, foundations, humanitarian actors and development programmes.", capabilities: ["Beneficiary records", "Case management", "MEL indicators", "Survey and evidence workflows"], deliverables: ["Beneficiary databases", "Programme dashboards", "Field-data forms", "Donor reporting views"], approach: "We map how field teams collect and review information, then design a system that respects permissions, connectivity and reporting needs.", relatedWork: [{ label: "Social development data system", href: "/work/social-development-data-management-system" }] },
  { slug: "climatetech-geospatial-solutions", title: "ClimateTech and GIS Solutions in Nigeria", description: "ClimateTech solutions, GIS monitoring and climate-risk dashboards for organisations working on resilience and environmental intelligence.", promise: "Turn climate and spatial signals into decisions people can act on.", problem: "Maps and emissions data are only useful when teams can interpret uncertainty, exposure, priority and response options.", audience: "Climate teams, finance actors, development organisations and public institutions.", capabilities: ["Climate analytics", "GIS interfaces", "Risk mapping", "MRV workflows"], deliverables: ["Climate dashboards", "Geospatial monitoring", "Portfolio analysis tools", "Environmental reporting views"], approach: "We connect spatial context, indicators and reporting narratives into a system built for the decisions the team must make.", relatedWork: [{ label: "FINZ/FINT platform", href: "/work/finz-fint-climate-finance-platform" }, { label: "Urban heat risk tool", href: "/work/urban-heat-risk-intelligence-tool" }] },
  { slug: "ai-workflow-business-automation", title: "AI Business Automation in Nigeria", description: "Practical AI business automation and workflow design for Nigerian teams that want less repetitive administration and stronger information flow.", promise: "Automate the boring work without outsourcing judgement to a black box.", problem: "Repetitive document, reporting and knowledge tasks consume time while remaining too important to handle carelessly.", audience: "SMEs, operations teams, service businesses, founders and administrative teams.", capabilities: ["Workflow mapping", "Document processing", "Internal knowledge tools", "Reporting automation"], deliverables: ["Automated handoffs", "AI-assisted workflows", "Document pipelines", "Internal assistants"], approach: "We identify high-friction, low-risk tasks first, then introduce automation with review points, clear ownership and sensible fallbacks.", relatedWork: [{ label: "ShapBill product", href: "/work/shapbill" }] },
  { slug: "digital-transformation-technology-advisory", title: "Digital Transformation Consulting in Nigeria", description: "Digital transformation consulting and technology advisory in Lagos for organisations planning complex digital work.", promise: "Make technology investment clearer before implementation begins.", problem: "Disconnected tools and vague strategy make digital projects expensive to adopt and difficult to sustain.", audience: "Executives, institutions, programme leaders and growing teams planning meaningful digital change.", capabilities: ["Digital strategy", "Product discovery", "System architecture", "Technical assessment"], deliverables: ["Discovery reports", "Roadmaps", "Architecture guidance", "Implementation plans"], approach: "We align desired outcomes, existing constraints, user adoption and technical decisions into a practical path forward.", relatedWork: [{ label: "CLIDAFIG digital presence", href: "/work/clidafdig-enterprise-digital-presence" }, { label: "Excel Expert website", href: "/work/excel-expert-cleaning-services" }] },
] as const;
export const serviceLandingPages = allServiceLandingPages.filter((item) => item.slug !== "climatetech-geospatial-solutions");

export function serviceLandingHref(slug: string) {
  const map: Record<string, string> = { "digital-products-platforms": "web-mobile-app-development", "data-systems-decision-intelligence": "data-systems-decision-intelligence", "climatetech-geospatial": "climatetech-geospatial-solutions", "social-impact-mel": "ngo-mel-data-management-systems", "ai-workflows-automation": "ai-workflow-business-automation", "technology-advisory": "digital-transformation-technology-advisory" };
  return `/services/${map[slug] ?? slug}`;
}

export const sectorSolutions = [
  {
    slug: "ngos-development",
    title: "NGOs and Development Organisations",
    challenge: "Development actors need systems that respect field realities while improving evidence, accountability, and programme visibility.",
    painPoints: ["Paper-heavy workflows", "Beneficiary duplication", "Slow MEL reports", "Limited field visibility"],
    solutionTypes: ["Beneficiary systems", "Case tools", "MEL dashboards", "Survey and evidence workflows"],
    workflow: "Design programme records, capture field data, validate entries, monitor indicators, and publish responsible reporting outputs.",
    visual: "Programme lines connecting field records, indicators, and impact evidence.",
    relatedProjects: ["social-development-data-management-system"],
  },
  {
    slug: "agriculture-food",
    title: "Agriculture and Food Systems",
    challenge: "Agriculture programmes need better farmer records, geotagged data, market visibility, and extension-support workflows.",
    painPoints: ["Low field-data quality", "Manual farmer aggregation", "Weak traceability", "Limited programme monitoring"],
    solutionTypes: ["Farmer registries", "Geo-tagged forms", "Training systems", "Agriculture dashboards"],
    workflow: "Capture farmer and activity data, validate it, map production or support patterns, and make decisions visible.",
    visual: "Crop-row contours merging with data trails and location markers.",
    relatedProjects: ["social-development-data-management-system"],
  },
  {
    slug: "financial-services",
    title: "Financial Services and InsurTech",
    challenge: "Financial and insurance teams need credible digital products, data workflows, and customer-facing tools with strong operational logic.",
    painPoints: ["Manual customer workflows", "Limited product prototyping", "Data silos", "Weak reporting interfaces"],
    solutionTypes: ["FinTech prototypes", "Insurance workflows", "Portfolio dashboards", "Client portals"],
    workflow: "Map product logic, define data requirements, build interfaces, and connect teams to decision-support views.",
    visual: "Portfolio cells, scoring lines, and secure digital rails.",
    relatedProjects: ["finz-fint-climate-finance-platform", "sbti-temperature-scoring-tool"],
  },
  {
    slug: "smes-growing-businesses",
    title: "SMEs and Growing Businesses",
    challenge: "Growing businesses need practical systems that reduce manual work and make operations feel more professional.",
    painPoints: ["Manual invoices", "Weak web presence", "Scattered customer records", "Slow admin workflows"],
    solutionTypes: ["Websites", "Automation tools", "Document systems", "CRM-style workflows"],
    workflow: "Clarify the business process, digitize repeatable work, build customer-facing touchpoints, and improve reporting.",
    visual: "An operating dashboard of customers, documents, and simple automations.",
    relatedProjects: ["shapbill", "clidafdig-enterprise-digital-presence"],
  },
  {
    slug: "public-community",
    title: "Public Institutions and Community Programmes",
    challenge: "Institutions need digital services that are understandable, accountable, accessible, and maintainable.",
    painPoints: ["Legacy processes", "Poor service experience", "Limited documentation", "Disconnected records"],
    solutionTypes: ["Service portals", "Institutional MIS", "Workflow modernization", "Public-data dashboards"],
    workflow: "Document the service journey, digitize the core workflow, support staff adoption, and create transparent reporting layers.",
    visual: "Institutional service paths becoming a structured civic operating system.",
    relatedProjects: ["social-development-data-management-system", "urban-heat-risk-intelligence-tool"],
  },
] as const;

export type SectorSolution = (typeof sectorSolutions)[number];

export const processSteps = [
  {
    title: "Understand",
    text: "We study the users, context, data, constraints, decision points, and real operational pressure.",
  },
  {
    title: "Define",
    text: "We turn the discovery into a clear product scope, system logic, data model, and delivery path.",
  },
  {
    title: "Design",
    text: "We design interfaces, workflows, content, and interaction patterns that make the system understandable.",
  },
  {
    title: "Build",
    text: "We develop clean, responsive, maintainable technology with room for iteration and handover.",
  },
  {
    title: "Validate",
    text: "We test usability, data states, accessibility, performance, forms, and the production journey.",
  },
  {
    title: "Improve",
    text: "We support refinement, documentation, reporting, training, and new capabilities after launch.",
  },
] as const;

export const values = [
  "Purpose before novelty",
  "Clarity in complexity",
  "Excellence in execution",
  "Human-centred systems",
  "Trust and transparency",
  "Continuous improvement",
  "Sustainable impact",
] as const;

export const workFilters = [
  "All",
  "Digital Products",
  "Data",
  "Social Impact",
  "Automation",
  "Web Experiences",
] as const;

export type WorkFilter = (typeof workFilters)[number];

const allWorkCases = [
  {
    slug: "finz-fint-climate-finance-platform",
    title: "FINZ/FINT Climate Finance Platform",
    category: "ClimateTech / FinTech / Data Systems",
    filters: ["Climate", "Data", "Digital Products"],
    capabilities: ["Portfolio workflows", "Climate intelligence", "Dashboard concepts"],
    summary:
      "A climate-finance platform direction for aligning financial decision-making with environmental intelligence and structured reporting.",
    context:
      "Financial and climate actors often need to combine technical climate data with portfolio-level workflows that non-specialist teams can navigate.",
    challenge:
      "The challenge is to make emissions, risk, and finance data usable without over-simplifying the complexity behind the analysis.",
    approach:
      "We shape the experience around portfolio intake, scoring logic, review states, and reporting outputs that can be explained and improved.",
    delivered:
      "A working climate-intelligence workspace spanning portfolio intake, SBTi coverage, temperature alignment, financed emissions, scenarios, trajectory analysis, and geospatial risk views.",
    technology: ["Next.js concepts", "Data modelling", "Dashboard UX", "Climate workflow design"],
    lessons:
      "Climate-finance systems need strong data structure and careful explanation as much as visual polish.",
    image: "/images/work/finz-fint/sbti-coverage-light.png",
    gallery: [
      { src: "/images/work/finz-fint/sbti-coverage-light.png", alt: "FINZ/FINT SBTi coverage dashboard in light mode" },
      { src: "/images/work/finz-fint/portfolio-overview-dark.png", alt: "FINZ/FINT portfolio overview in dark mode" },
      { src: "/images/work/finz-fint/scenario-analysis.png", alt: "FINZ/FINT counterparty scenario analysis" },
      { src: "/images/work/finz-fint/geospatial-risk.png", alt: "FINZ/FINT geospatial portfolio risk view" },
    ],
  },
  {
    slug: "sbti-temperature-scoring-tool",
    title: "SBTi Temperature Scoring and Portfolio Analysis Tool",
    category: "Climate Intelligence / Analytics",
    filters: ["Climate", "Data"],
    capabilities: ["Temperature scoring", "Portfolio analysis", "Analytics UI"],
    summary:
      "A decision-support concept for interpreting temperature alignment and portfolio climate signals.",
    context:
      "Climate teams need analytics surfaces that can communicate technical scoring logic to strategy, finance, and reporting stakeholders.",
    challenge:
      "Scoring tools can become opaque when methodology, assumptions, and portfolio segmentation are not made visible.",
    approach:
      "We organize scoring views around explainability, scenario comparison, and reporting-ready outputs.",
    delivered:
      "Analytics interface direction, scoring workflow structure, visual explanation patterns, and dashboard components.",
    technology: ["Analytics UX", "Python-ready data concepts", "Reporting design", "Climate methodology translation"],
    lessons:
      "Decision intelligence improves when assumptions, source data, and visual summaries are designed together.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=82",
  },
  {
    slug: "social-development-data-management-system",
    title: "Social Development Data Management System",
    category: "Social Impact / MEL / Beneficiary Management",
    filters: ["Social Impact", "Data", "Digital Products"],
    capabilities: ["Beneficiary records", "MEL dashboards", "Field-data workflows"],
    summary:
      "A social-development system direction for managing programme records, beneficiaries, indicators, and reporting evidence.",
    context:
      "Social-impact teams often work across field locations, programme staff, beneficiaries, funders, and monitoring requirements.",
    challenge:
      "Programme data can become scattered, duplicated, or difficult to validate when field workflows are not designed into the system.",
    approach:
      "We map records, roles, programme indicators, intake forms, and reporting views around the realities of field teams.",
    delivered:
      "Beneficiary-management structure, MEL dashboard concepts, case records, data collection workflows, and reporting patterns.",
    technology: ["MIS design", "Forms", "Data validation", "MEL dashboards", "Role-based workflows"],
    lessons:
      "Impact systems must respect human context, data protection, and reporting pressure at the same time.",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=82",
  },
  {
    slug: "shapbill",
    title: "ShapBill",
    category: "Business Productivity / Mobile Product",
    filters: ["Digital Products", "Automation"],
    capabilities: ["Invoice workflows", "Mobile product UX", "Document generation"],
    summary:
      "A NelviusGrey product for entrepreneurs and small businesses creating branded invoices, receipts, and customer-ready documents.",
    context:
      "Many small businesses need simple tools that remove admin friction without forcing them into enterprise software complexity.",
    challenge:
      "The tool needs to be fast, understandable, mobile-friendly, and credible enough for real customer-facing documents.",
    approach:
      "We structure the product around repeatable document flows, customer details, item records, and clean export-ready outputs.",
    delivered:
      "A desktop and mobile product experience with invoice and receipt creation, document history, branding tools, reusable stamps, and export workflows.",
    technology: ["Mobile-first UI", "Document generation", "Local business workflows", "Automation"],
    lessons:
      "SME tools work best when they focus on one painful workflow and make it feel effortless.",
    image: "/images/work/shapbill/product-presentation.png",
    gallery: [
      { src: "/images/work/shapbill/product-presentation.png", alt: "ShapBill product and document presentation" },
      { src: "/images/work/shapbill/desktop-dashboard.png", alt: "ShapBill desktop workspace dashboard" },
    ],
  },
  {
    slug: "nelvius-bank",
    title: "Nelvius Bank",
    category: "FinTech / Mobile Product",
    filters: ["Digital Products", "Automation"],
    capabilities: ["Mobile banking UX", "Transaction flows", "Product identity"],
    summary: "A mobile banking product concept focused on approachable everyday account, card, transfer, and payment workflows.",
    context: "Everyday banking products must make sensitive financial actions feel clear, trustworthy, and quick on a small screen.",
    challenge: "The interface needed to balance brand warmth with familiar financial patterns and strong action hierarchy.",
    approach: "We explored onboarding, account overview, transfers, cards, bills, and recent activity as a connected mobile journey.",
    delivered: "Mobile product direction, visual identity application, onboarding screens, account dashboard, card views, and transfer flows.",
    technology: ["Mobile UX", "FinTech workflows", "Design systems", "Product prototyping"],
    lessons: "Financial interfaces earn confidence through clarity, recognizable patterns, and careful information hierarchy.",
    image: "/images/work/nelvius-bank/mobile-presentation.png",
    gallery: [
      { src: "/images/work/nelvius-bank/mobile-presentation.png", alt: "Nelvius Bank mobile product presentation" },
      { src: "/images/work/nelvius-bank/mobile-screens.png", alt: "Nelvius Bank onboarding, dashboard, and transfer screens" },
      { src: "/images/work/nelvius-bank/mobile-features.png", alt: "Nelvius Bank dashboard and cards experience" },
    ],
  },
  {
    slug: "exports-royale",
    title: "Exports Royale",
    category: "Web Experience / Export Business",
    filters: ["Web Experiences", "Digital Products"],
    capabilities: ["Premium web design", "Conversion journey", "Brand presentation"],
    summary: "A premium web presence for a Nigerian export business presenting its produce, standards, process, and quote journey.",
    context: "Export buyers need immediate confidence in product quality, sourcing credibility, standards, and fulfilment capability.",
    challenge: "The website needed to feel distinctly Nigerian and premium while keeping product discovery and quote requests direct.",
    approach: "We combined editorial typography, agricultural atmosphere, trust signals, and a clear commercial navigation system.",
    delivered: "Responsive website direction, premium hero experience, product presentation, trust content, and quote-focused calls to action.",
    technology: ["Responsive web design", "Conversion UX", "Brand systems", "Frontend implementation"],
    lessons: "Premium positioning works best when visual confidence and practical buyer reassurance arrive together.",
    image: "/images/work/exports-royale/homepage.png",
    gallery: [{ src: "/images/work/exports-royale/homepage.png", alt: "Exports Royale premium homepage" }],
  },
  {
    slug: "urban-heat-risk-intelligence-tool",
    title: "Urban Heat Risk Intelligence Tool",
    category: "Climate Risk / Geospatial Analytics",
    filters: ["Climate", "Data"],
    capabilities: ["Heat-risk mapping", "Spatial analytics", "Public-sector dashboards"],
    summary:
      "A geospatial intelligence concept for understanding urban heat exposure, vulnerability, and environmental risk patterns.",
    context:
      "Urban heat risk affects communities, infrastructure, health, agriculture, and planning decisions across rapidly growing cities.",
    challenge:
      "Risk data needs to be interpreted through location, vulnerability, and decision context rather than shown as a static map.",
    approach:
      "We combine map-based exploration, risk layers, community indicators, and reporting narratives into a usable intelligence surface.",
    delivered:
      "Geospatial product direction, dashboard components, risk-layer structure, and public-institution reporting concepts.",
    technology: ["GIS UX", "Risk visualization", "Spatial dashboards", "Climate analytics"],
    lessons:
      "A good map is not just a picture; it is an interface for asking better questions.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=82",
  },
  {
    slug: "excel-expert-cleaning-services",
    title: "Excel Expert Cleaning Services",
    category: "Web Experience / Service Business",
    filters: ["Web Experiences", "Digital Products"],
    capabilities: ["Service-business website", "Booking journey", "Responsive brand experience"],
    summary: "A branded website for a professional cleaning company, designed to introduce the team, explain services, and direct visitors toward booking and contact.",
    context: "A local service business needs to establish trust quickly while making its services and next actions obvious to prospective customers.",
    challenge: "The experience needed to carry the company’s green visual identity, human team imagery, and relaxed brand promise without obscuring booking and contact paths.",
    approach: "We shaped the homepage around clear navigation, a recognizable service promise, visible team photography, and prominent booking and contact actions.",
    delivered: "Responsive homepage concepts, branded hero treatments, service-business navigation, team presentation, booking calls to action, and cookie-consent treatment.",
    technology: ["Responsive web design", "Service UX", "Brand application", "Frontend implementation"],
    lessons: "For service businesses, real people, a direct promise, and an unmistakable booking path do more work than excessive interface complexity.",
    image: "/images/work/excel-expert-cleaning/homepage-green.png",
    gallery: [
      { src: "/images/work/excel-expert-cleaning/homepage-green.png", alt: "Excel Expert Cleaning Services green homepage direction" },
      { src: "/images/work/excel-expert-cleaning/homepage-editorial.png", alt: "Excel Expert Cleaning Services editorial homepage with team and cookie controls" },
    ],
  },
  {
    slug: "clidafdig-enterprise-digital-presence",
    title: "CLIDAFIG Enterprise Digital Presence",
    category: "Web Experience / Business Technology",
    filters: ["Web Experiences", "Digital Products"],
    capabilities: ["Corporate web presence", "Content architecture", "Business credibility"],
    summary:
      "A web-experience direction for presenting a business with clarity, credibility, and a stronger digital operating base.",
    context:
      "Growing businesses need websites that explain what they do, create trust, and support real enquiries.",
    challenge:
      "A business presence can feel generic when the messaging, hierarchy, visuals, and contact paths are not designed together.",
    approach:
      "We shape the page structure, visual tone, service messaging, and enquiry paths around the organization’s actual offer.",
    delivered:
      "Website direction, content hierarchy, responsive interface patterns, and conversion-focused contact flow.",
    technology: ["Next.js", "Responsive UI", "SEO structure", "Content strategy"],
    lessons:
      "A credible digital presence should reduce confusion before it asks for conversion.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=82",
  },
] as const;

const restrictedWorkSlugs = new Set(["finz-fint-climate-finance-platform", "sbti-temperature-scoring-tool", "urban-heat-risk-intelligence-tool"]);
export const workCases = allWorkCases.filter((item) => !restrictedWorkSlugs.has(item.slug));
export type WorkCase = (typeof workCases)[number];

export const workProof: Record<
  string,
  {
    ownership: "NelviusGrey product" | "Client work" | "Platform work" | "Exploratory concept";
    status: "Working product" | "Delivered website" | "Working platform" | "Concept direction";
  }
> = {
  "finz-fint-climate-finance-platform": {
    ownership: "Platform work",
    status: "Working platform",
  },
  shapbill: {
    ownership: "NelviusGrey product",
    status: "Working product",
  },
  "nelvius-bank": {
    ownership: "NelviusGrey product",
    status: "Concept direction",
  },
  "exports-royale": {
    ownership: "Client work",
    status: "Delivered website",
  },
  "excel-expert-cleaning-services": {
    ownership: "Client work",
    status: "Delivered website",
  },
  "sbti-temperature-scoring-tool": {
    ownership: "Platform work",
    status: "Concept direction",
  },
  "social-development-data-management-system": {
    ownership: "Exploratory concept",
    status: "Concept direction",
  },
  "urban-heat-risk-intelligence-tool": {
    ownership: "Exploratory concept",
    status: "Concept direction",
  },
  "clidafdig-enterprise-digital-presence": {
    ownership: "Client work",
    status: "Concept direction",
  },
};

export const projectEntryPaths = [
  {
    label: "Build a digital product",
    description: "Web or mobile products, customer portals and operational applications.",
    service: "Digital Products and Platforms",
  },
  {
    label: "Improve a data system",
    description: "Dashboards, reporting systems, MIS platforms and decision workflows.",
    service: "Data Systems and Decision Intelligence",
  },
  {
    label: "Automate a workflow",
    description: "Practical AI, document flows and repetitive business operations.",
    service: "AI Workflows and Business Automation",
  },
  {
    label: "Redesign a business website",
    description: "Credible, responsive web experiences built around enquiries and growth.",
    service: "Digital Transformation and Technology Advisory",
  },
] as const;

export const insightCategories = [
  "All",
  "Social Impact",
  "Data",
  "AI Automation",
  "Digital Systems",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export const insights = [
  {
    slug: "designing-technology-for-social-impact",
    title: "Designing technology for social impact without losing the human context",
    description:
      "Impact systems work when they are designed around programme realities, field teams, data protection, and evidence that can be trusted.",
    author: "NelviusGrey Tech",
    date: "2026-07-10",
    category: "Social Impact",
    readingTime: "5 min read",
    cover:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=82",
    body: [
      "Social-impact technology is not just software for nonprofit teams. It is an operating layer that connects people, evidence, decisions, and accountability.",
      "A useful system begins by understanding the programme: who collects data, who reviews it, what decisions depend on it, and what risks appear when sensitive records are handled poorly.",
      "The best tools are often quiet. They reduce duplication, improve confidence, protect context, and help teams tell the truth about what is happening in the field.",
    ],
  },
  {
    slug: "making-organisational-data-useful",
    title: "Making organisational data useful before building the dashboard",
    description:
      "Dashboards become valuable when data structure, ownership, definitions, and reporting habits are designed before the visual layer.",
    author: "NelviusGrey Tech",
    date: "2026-07-08",
    category: "Data",
    readingTime: "4 min read",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=82",
    body: [
      "Many teams ask for dashboards when the real need is a better decision system. The visual chart is only the final expression of a deeper data workflow.",
      "Useful data work starts with definitions: what the metric means, where it comes from, who owns it, how often it changes, and which decision it supports.",
      "When these foundations are clear, dashboards become living instruments rather than decorative reports.",
    ],
  },
  {
    slug: "climate-intelligence-for-african-institutions",
    title: "Climate intelligence for African institutions needs context, not just maps",
    description:
      "Climate platforms must connect environmental signals to finance, agriculture, health, infrastructure, and community-level realities.",
    author: "NelviusGrey Tech",
    date: "2026-07-05",
    category: "Climate Intelligence",
    readingTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82",
    body: [
      "Climate intelligence becomes powerful when it is tied to the decisions institutions actually need to make.",
      "A map can show risk, but a system must help teams understand priority, exposure, uncertainty, and response options.",
      "For African contexts, climate tools need to account for local data gaps, institutional capacity, community realities, and the cost of bad assumptions.",
    ],
  },
  {
    slug: "practical-ai-automation-for-smes",
    title: "Practical AI automation for SMEs should begin with boring work",
    description:
      "The strongest automation opportunities are often repetitive workflows that drain time but do not require speculative AI complexity.",
    author: "NelviusGrey Tech",
    date: "2026-07-02",
    category: "AI Automation",
    readingTime: "4 min read",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=82",
    body: [
      "AI should not be added because it sounds impressive. It should be introduced where it can reduce friction, improve consistency, or help people make better use of information.",
      "For SMEs, this often means document preparation, report summaries, internal search, customer response drafts, and clean workflow handoffs.",
      "The goal is not to replace judgement. The goal is to remove unnecessary drag from everyday operations.",
    ],
  },
  {
    slug: "systems-that-survive-beyond-launch",
    title: "Building digital systems that survive beyond launch",
    description:
      "A launch is not the finish line. Durable systems need documentation, ownership, training, measurement, and continuous improvement.",
    author: "NelviusGrey Tech",
    date: "2026-06-30",
    category: "Digital Systems",
    readingTime: "5 min read",
    cover:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=82",
    body: [
      "A system that looks impressive on launch day can still fail if it is difficult to maintain, explain, or improve.",
      "Durability comes from decisions that are often invisible: clear architecture, documented workflows, sensible content models, accessible interfaces, and handover practices.",
      "The best digital systems are built not only for users, but also for the people who must keep them alive.",
    ],
  },
] as const;

export const publicInsights = insights.filter((item) => item.category !== "Climate Intelligence");
export type Insight = (typeof publicInsights)[number];

export const legalContent = {
  privacy: {
    title: "Privacy Policy",
    updated: "July 10, 2026",
    sections: [
      {
        title: "Purpose",
        body: "NelviusGrey Tech collects only the information needed to respond to enquiries, discuss projects, deliver agreed services, and improve our website responsibly.",
      },
      {
        title: "Information we may collect",
        body: "Contact forms may collect your name, work email, phone or WhatsApp number, organisation, project needs, budget range, timeline, and message. We do not request sensitive personal information through the website.",
      },
      {
        title: "How information is used",
        body: "Information is used to reply to enquiries, prepare project conversations, provide requested services, and maintain basic operational records. We do not sell personal information.",
      },
      {
        title: "Third-party services",
        body: "The website may use hosting, email delivery, analytics, map, and external document services. These providers process information according to their own privacy and security practices.",
      },
      {
        title: "Your choices",
        body: "You can contact NelviusGrey Tech to request correction or deletion of information you have provided, subject to legitimate business, legal, or operational requirements.",
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    updated: "July 10, 2026",
    sections: [
      {
        title: "Website use",
        body: "This website is provided to share information about NelviusGrey Tech, its services, selected work directions, insights, and contact options.",
      },
      {
        title: "No unsupported claims",
        body: "Project descriptions may include selected work, solution concepts, and approved public-facing descriptions. They should not be interpreted as guarantees of outcomes, revenue, user numbers, or certifications.",
      },
      {
        title: "Project engagements",
        body: "Any paid work, consulting, or development engagement requires a separate agreement, scope, timeline, deliverables, and payment terms.",
      },
      {
        title: "External links",
        body: "The website may link to third-party platforms such as LinkedIn, Facebook, WhatsApp, Google Drive, maps, and publishers. NelviusGrey Tech is not responsible for external website content or policies.",
      },
      {
        title: "Intellectual property",
        body: "Website content, brand assets, structure, and visual design belong to NelviusGrey Tech unless otherwise stated. Do not copy or reuse without permission.",
      },
    ],
  },
} as const;

export function getWorkCase(slug: string) {
  return workCases.find((item) => item.slug === slug);
}

export function getInsight(slug: string) {
  return publicInsights.find((item) => item.slug === slug);
}
