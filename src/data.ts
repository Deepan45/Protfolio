export const profile = {
  name: "Deepan Vijayasarathi",
  headline:
    "AI Engineer | Where Business Problems Meet Intelligent Solutions | 7× Hackathon Champion",
  roles: "AI Engineer · Full-Stack Developer · 7× Hackathon Champion",
  location: "Bengaluru, India",
  email: "deepanvijayasarathi32@gmail.com",
  phone: "+91 94437 15670",
  linkedin: "https://linkedin.com/in/deepan-vijayasarathi",
  about:
    "Software Engineer specialising in AI-powered platforms, full-stack development, and secure enterprise solutions. Passionate about building products that solve real business problems through scalable architecture, intelligent automation, and clean engineering practices. Currently contributing to next-generation supply chain planning and demand intelligence platforms at Logility (an Aptean Company), transforming complex data into actionable insights.",
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Hackathons Won", value: "7×" },
  { label: "Companies", value: "4" },
  { label: "Awards", value: "1" },
];

export type WorkedWith = {
  name: string;
  // Drop a logo file into public/logos/worked-with/ with this filename; falls back to the name as text if missing.
  logo: string;
};

// Placeholder list — replace names and drop matching logo files before publishing.
export const workedWith: WorkedWith[] = [
  { name: "Add Startup", logo: "/logos/worked-with/IU.png" },
  { name: "Add Startup", logo: "/logos/worked-with/TM.jpg" },
  { name: "Add Startup", logo: "/logos/worked-with/ED.png" },
  { name: "Add Startup", logo: "/logos/worked-with/DD.png" },
];

export type ExperienceEntry = {
  title: string;
  company: string;
  dates: string;
  duration?: string;
  location: string;
  bullets: string[];
  award?: string;
  // Drop a logo file into public/logos/ with this filename; falls back to initials if missing.
  logo: string;
};

export const experience: ExperienceEntry[] = [
  {
    title: "Engineer – Development AI",
    company: "Logility (Aptean)",
    dates: "Nov 2025 – Present",
    location: "Bengaluru, India (On-site)",
    bullets: [
      "Developed MCP Gateway solutions to enhance communication between AI-driven planning modules and enterprise systems.",
      "Leveraged LLMs and AI agents to improve planning decisions and boost productivity in supply chain workflows.",
      "Designed scalable FastAPI / FastMCP microservices deployed on Azure with reliable CI/CD pipelines.",
    ],
    logo: "/lo.png",
  },
  {
    title: "Developer",
    company: "Aravind Eye Care System",
    dates: "Jun 2024 – Nov 2025",
    duration: "1 yr 6 mos",
    location: "Madurai, India (On-site)",
    bullets: [
      "Developed and maintained enterprise healthcare applications, enhancing the Eyenotes EMR and IHMS platforms.",
      "Built AuroisecureX, a centralised cybersecurity platform, improving enterprise security posture.",
      "Designed secure billing and payment modules using .NET and PostgreSQL, enhancing financial process accuracy.",
      "Created an Accommodation Management System, reducing manual booking errors and improving resource utilisation.",
    ],
    award: "Above & Beyond Award",
    logo: "/AECS_Logo.jpg",
  },
  {
    title: "Software Developer Intern",
    company: "Aravind Eye Care System",
    dates: "Feb 2024 – Jun 2024",
    duration: "5 mos",
    location: "Madurai, India",
    bullets: [
      "Contributed to enterprise healthcare application development under the ASP.NET and Angular stack.",
    ],
    logo: "/AECS_Logo.jpg",
  },
  {
    title: "Software Developer",
    company: "TechMisai Software Solutions",
    dates: "Nov 2023 – Jan 2024",
    duration: "3 mos",
    location: "Madurai, India (Remote)",
    bullets: [
      "Developed and implemented the Inventory Module for a Kitchen Management System using .NET, Angular, and PostgreSQL.",
      "Enhanced application performance and optimised system efficiency within the Inventory Module.",
      "Collaborated with cross-functional teams to maintain and improve client-side features for a seamless user experience.",
    ],
    logo: "/logos/worked-with/TM.jpg",
  },
];

export const education = {
  degree: "Bachelor of Technology – Information Technology",
  school: "KLN College of Engineering, Madurai, India",
  dates: "May 2020 – May 2024",
  relevant:
    "Web Application Development, Mobile Application Development, Information Technology",
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C#",
      ".NET / ASP.NET Web API",
      "React.js",
      "Angular",
    ],
  },
  {
    label: "AI / ML",
    items: [
      "Machine Learning",
      "LLMs",
      "AI Agents",
      "MCP (Model Context Protocol)",
      "Demand Forecasting",
      "DemandAI+",
      "FastAPI / FastMCP",
    ],
  },
  {
    label: "Data & Cloud",
    items: ["PostgreSQL", "Azure", "CI/CD Pipelines", "Microservices Architecture"],
  },
  {
    label: "Domain Expertise",
    items: [
      "Supply Chain Planning",
      "Healthcare Enterprise Systems (EMR/IHMS)",
      "Cybersecurity Platforms",
      "Full-Stack Development",
    ],
  },
];

export type Project = {
  name: string;
  tech: string;
  description: string;
  // Drop a screenshot into public/projects/ with this filename; falls back to a colored placeholder if missing.
  image: string;
  // Optional: drop a video (mp4/webm) into public/projects/ and set this to its path — plays instead of the image when present.
  video?: string;
  // Optional: live demo / production URL.
  demoUrl?: string;
  // Optional: GitHub (or other source) repo URL.
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "EduLanz",
    tech: "Angular, Python",
    description:
      "Gamified skill development, student engagement, and school competition platform.",
    image: "/projects/edulanz1.png",
  },
  {
    name: "Social Nova",
    tech: "Angular, Python, RAG, Agent Workflows, MCP",
    description:
      "AI-powered social intelligence, sentiment analysis, and competitive intelligence platform.",
    image: "/projects/sales.png",
  },
  {
    name: "B2P CRM",
    tech: "Next.js, React, Python",
    description: "Lead qualification, WhatsApp automation, demo booking, and CRM platform.",
    image: "/projects/crm.png",
  },
  {
    name: "FoodQR",
    tech: "PHP, Laravel",
    description: "QR-based restaurant ordering, menu management, and billing platform.",
    image: "/projects/rq.png",
  },
  {
    name: "CRM Outreach",
    tech: "Python, Automation",
    description:
      "Sales outreach, prospect management, and lead engagement automation platform.",
    image: "/projects/outreach.png",
  },
  {
    name: "CallAgent",
    tech: "Python, LLMs, Voice AI",
    description: "AI-powered voice calling, lead qualification, and customer support agent.",
    image: "/projects/callagent.jpg",
  },
  {
    name: "WhatsApp SaaS",
    tech: "Python, APIs",
    description: "Multi-tenant WhatsApp automation, chatbot, and campaign management platform.",
    image: "/projects/whatsapp-saas.jpg",
  },
  {
    name: "LMS Platform",
    tech: "Angular, .NET, PostgreSQL",
    description: "Learning Management System for course delivery, assessments, and student tracking.",
    image: "/projects/lms-platform.jpg",
  },
  {
    name: "Samaya",
    tech: "Angular, Python",
    description: "Kitchen management, inventory tracking, and order workflow platform.",
    image: "/projects/samaya.png",
  },
  {
    name: "E-Commerce Platform",
    tech: "Angular, .NET",
    description: "Online shopping, inventory, payment, and order management system.",
    image: "/projects/e-commerce-platform.jpg",
  },
  {
    name: "IHMS",
    tech: "Angular, .NET, PostgreSQL",
    description:
      "Integrated Hospital Management System for patient records, appointments, billing, and administration.",
    image: "/projects/ihms.jpg",
  },
  {
    name: "Agentic Ethereum Hackathon India",
    tech: "Python, Ethereum, AI Agents",
    description:
      "AI-powered blockchain solution leveraging autonomous agents and smart contracts.",
    image: "/projects/agentic-ethereum-hackathon-india.jpg",
  },
  {
    name: "Safe",
    tech: "Angular, .NET, PostgreSQL",
    description:
      "Cybersecurity, Identity Management, Single Sign-On (SSO), and audit logging platform.",
    image: "/projects/safe.jpg",
  },
  {
    name: "Battery Management System",
    tech: "Python, Angular, PostgreSQL",
    description:
      "Battery monitoring, predictive maintenance, analytics, and reporting solution, with video support.",
    image: "/projects/ob.png",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Deepan consistently demonstrated exceptional problem-solving skills and a strong understanding of business needs. His ability to build practical AI and automation solutions helped improve efficiency and deliver measurable results. He is reliable, proactive, and always focused on creating value.",
    name: "Udhaya Prakash",
    role: "Co-Founder · Digitechzo",
  },
  {
    quote:
      "Deepan played a key role in the success of the Samaya Kitchen Management System. He took ownership of critical features, worked closely with clients to understand their requirements, and ensured smooth delivery throughout the project. His technical expertise, ownership mindset, and dedication made a significant impact on the project's success.",
    name: "Dhivakaran",
    role: "Co-Founder · Techmisai",
  },
  {
    quote:
      "Deepan has been a dependable technical partner in delivering AI-driven products and automation solutions. His expertise in AI engineering, system integrations, and scalable application development helped transform ideas into production-ready solutions. His commitment to quality, innovation, and team success makes him someone I highly recommend.",
    name: "Anoop",
    role: "Co-Founder · Get Founds Technologies",
  },
];

// Drop image files into public/hero/ with these exact names (jpg/png/webp all fine).
export const heroImages: string[] = ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg"];
