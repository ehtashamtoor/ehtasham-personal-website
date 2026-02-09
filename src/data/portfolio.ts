import type {
  PersonalInfo,
  SocialLink,
  Skill,
  Experience,
  Project,
  Service,
  Consultancy,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ehtasham Toor",
  title: "Full-Stack MERN & Agentic AI Developer",
  tagline: "Building intelligent full-stack solutions that solve real problems",
  bio: "An adept developer with 2+ years of expertise across the MERN stack and Agentic AI. Driven by a love for solving intricate problems, I thrive in competitive environments, always seeking fresh challenges. With a focus on delivering excellence and creating seamless user experiences, I am prepared to innovate and deliver exceptional solutions.",
  location: "Pakistan",
  email: "ehtashamtoor50@gmail.com",
  phone: "+92 301 8648980",
  availability: "Available for freelance & full-time",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/ehtashamtoor",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ehtasham-toor-3865b317b",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:ehtashamtoor50@gmail.com",
    label: "Email",
  },
  {
    platform: "whatsapp",
    url: "https://wa.me/+923018648980",
    label: "WhatsApp",
  },
  {
    platform: "facebook",
    url: "#",
    label: "Facebook",
  },
  {
    platform: "instagram",
    url: "#",
    label: "Instagram",
  },
];

export const heroRoles = [
  "Full-Stack MERN Developer",
  "Agentic AI Developer",
  "Next.js Specialist",
  "Tech Consultant",
];

export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Material UI", icon: "mui" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "FastAPI", icon: "fastapi" },
  ],
  Database: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
  ],
  "AI / ML": [
    { name: "Python", icon: "python" },
    { name: "LangChain", icon: "langchain" },
    { name: "LangGraph", icon: "langgraph" },
    { name: "Openai Agents SDK", icon: "openai-agents-sdk" },
  ],
  DevOps: [
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "Vercel", icon: "vercel" },
    { name: "Figma", icon: "figma" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "texagon-BED",
    role: "Software Engineer",
    company: "Texagon",
    companyUrl: "https://netixsol.com",
    period: { start: "Sep 2025", end: "Present" },
    type: "full-time",
    description: "Working on AI powered solutions for the businesses",
    achievements: [
      "Built Agentic AI applications using Openai Agents SDK for autonomous intelligent workflows",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "LangGraph",
      "Openai Agents SDK",
      "Python",
      "Supabase",
    ],
  },
  {
    id: "netixsol-lead",
    role: "Software Engineer (Team Lead)",
    company: "Netixsol",
    companyUrl: "https://netixsol.com",
    period: { start: "Aug 2024", end: "Jul 2025" },
    type: "full-time",
    description:
      "Led development of AI-powered platforms using Next.js SSR/SSG and LangGraph Agentic AI systems.",
    achievements: [
      "Leveraged Next.js for server-side rendering and static site generation, enhancing performance and SEO",
      "Built Agentic AI applications using LangGraph for autonomous intelligent workflows",
      "Led team in delivering Stat GPT and SkillMatch platforms end-to-end",
    ],
    technologies: ["Next.js", "NestJS", "LangGraph", "Python", "MongoDB"],
  },
  {
    id: "netixsol-ase",
    role: "Associate Software Engineer",
    company: "Netixsol",
    companyUrl: "https://netixsol.com",
    period: { start: "Feb 2024", end: "Aug 2024" },
    type: "full-time",
    description:
      "Worked on multiple frameworks and led the SkillMatch recruitment platform development.",
    achievements: [
      "Worked on multiple frameworks including NestJS and Next.js",
      "Led the SkillMatch Website — a platform for the recruitment process",
      "Built scalable backend APIs with NestJS and MongoDB",
    ],
    technologies: ["NestJS", "Next.js", "MongoDB", "REST APIs", "Tailwind"],
  },
  {
    id: "netixsol-intern",
    role: "MERN Intern",
    company: "Netixsol",
    companyUrl: "https://netixsol.com",
    period: { start: "Jul 2023", end: "Dec 2023" },
    type: "internship",
    description:
      "Built REST APIs and collaborated on projects using the full MERN stack.",
    achievements: [
      "Built REST APIs in MongoDB, Node.js, and Express",
      "Learned and applied Tailwind CSS and Material UI for responsive UIs",
      "Mastered Next.js by building full-stack projects",
    ],
    technologies: ["MongoDB", "Node.js", "Express", "Next.js", "Tailwind"],
  },
  {
    id: "gamica-intern",
    role: "Junior Developer Intern",
    company: "GamicaCloud",
    period: { start: "Nov 2022", end: "Jan 2023" },
    type: "internship",
    description:
      "Developed and maintained web applications using React.js and related technologies.",
    achievements: [
      "Developed and maintained web applications using React.js",
      "Implemented responsive design ensuring cross-browser compatibility",
      "Built UIs using Tailwind, Material UI, and Bootstrap",
      "Learned Node.js, Express, and MongoDB fundamentals",
    ],
    technologies: ["React", "Tailwind", "Bootstrap", "Node.js", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    id: "buildai",
    title: "BuildAI",
    subtitle: "Making Agents",
    description:
      "A platform for creating, customizing, and deploying AI assistants tailored to business needs. Built multi-channel integration support, conversation management, and sentiment analysis features enabling businesses to automate customer support and lead generation at scale.",
    image: "/images/projects/buildai-image.png",
    technologies: [
      "Next.js",
      "NestJS",
      "Tailwind",
      "FAST API",
      "Supabase",
      "Openai Agents SDK",
      "Python",
    ],
    liveUrl: "https://agent.buildaierc.com/",
    category: "ai",
    featured: true,
  },
  {
    id: "statgpt",
    title: "Stat GPT",
    subtitle: "AI-Powered Sports Intelligence",
    description:
      "A conversational sports chatbot that answers user queries about NBA, AFL, AFLW, UFC, and Cricket. Built using LangGraph as an SQL agent that provides real-time insights on sports games.",
    image: "/images/projects/statgpt_image.png",
    technologies: ["Python", "LangChain", "LangGraph", "PostgreSQL", "FastAPI"],
    liveUrl: "https://stage.statbreak.com/stat-gpt",
    category: "ai",
    featured: true,
  },
  {
    id: "skillmatch",
    title: "SkillMatch",
    subtitle: "AI Recruitment Platform",
    description:
      "Led development of a smart hiring platform for HR teams. Built backend workflows enabling job posting, AI-generated assessments, and automated CV scoring based on job descriptions.",
    image: "/images/projects/skillmatch-image.png",
    technologies: [
      "Next.js",
      "NestJS",
      "REST API",
      "Tailwind",
      "MongoDB",
      "AI",
      "Python",
    ],
    liveUrl: "https://www.skillmatch.tech",
    category: "ai",
    featured: false,
  },
  // {
  //   id: "netflix-clone",
  //   title: "Netflix Clone",
  //   subtitle: "Streaming Platform UI",
  //   description:
  //     "A full-featured Netflix clone with seamless streaming experience, movie trailers fetched from API, authentication, and responsive design across all devices.",
  //   image: "/images/projects/netflix.png",
  //   technologies: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Recoil"],
  //   liveUrl: "https://netflix-clone-main-alpha.vercel.app/login",
  //   githubUrl: "https://github.com/ehtashamtoor/Netflix-clone-main",
  //   category: "fullstack",
  //   featured: false,
  // },
  // {
  //   id: "covid-tracker",
  //   title: "Covid 19 Tracker",
  //   subtitle: "Data Visualization Dashboard",
  //   description:
  //     "In-depth COVID-19 statistics with total cases, recovered cases, and deaths for each country. Features dynamic bar graphs showing virus spread, recovery trends, and data over time.",
  //   image: "/images/projects/covidapp.png",
  //   technologies: ["React", "REST API", "Chart.js"],
  //   liveUrl: "https://covid19trracker.surge.sh/",
  //   githubUrl: "https://github.com/ehtashamtoor/covid19tracker/",
  //   category: "frontend",
  //   featured: false,
  // },
  // {
  //   id: "expense-tracker",
  //   title: "Expense Tracker",
  //   subtitle: "Financial Management App",
  //   description:
  //     "Monitor your balance, track expenses and income effortlessly. Add transactions with intuitive input fields for a smarter approach to managing your money.",
  //   image: "/images/projects/expenseTracker.png",
  //   technologies: ["React", "Redux"],
  //   liveUrl: "https://exxpense-manageer.surge.sh/",
  //   githubUrl: "https://github.com/ehtashamtoor/expense-manager",
  //   category: "frontend",
  //   featured: false,
  // },
  {
    id: "coinflip",
    title: "Coin Flip Design",
    subtitle: "Modern UI Design",
    description:
      "A comprehensive travel booking platform design with flights, hotels, and rental cars booking along with curated recommendations for popular destinations.",
    image: "/images/projects/coinflip.png",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://coin-flip-jade.vercel.app/",
    githubUrl: "https://github.com/ehtashamtoor/CoinFLip",
    category: "frontend",
    featured: false,
  },
];

export const services: Service[] = [
  {
    id: "mern-development",
    title: "Full-Stack MERN Development",
    description:
      "End-to-end web applications built with MongoDB, Express, React, and Node.js, Nestjs, Postgresql etc From MVP to production-ready platforms with scalable architecture.",
    icon: "code",
    features: [
      "Custom web application development",
      "REST API design and implementation",
      "Database architecture and optimization",
      "Performance optimization with SSR/SSG",
      "Responsive, accessible UI development",
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Development",
    description:
      "Intelligent AI-powered solutions using Agentic Frameworks like Openai Agents SDK, LangGraph, Langchain. Transform your business processes with autonomous AI agents that think, plan, and execute.",
    icon: "brain",
    features: [
      "Custom AI agent development",
      "LangChain / LangGraph / Openai Agents SDK integration",
      "Conversational AI chatbots",
      "AI-powered automation workflows",
      "RAG pipelines and knowledge bases",
    ],
  },
];

export const consultancy: Consultancy = {
  headline: "Have a Business Idea?",
  subheadline: "Let's turn your vision into a technical reality.",
  description:
    "I offer strategic technical consultation to help entrepreneurs and businesses validate ideas, choose the right tech stack, and build scalable solutions. From initial concept to architecture planning — let's build something great together.",
  offerings: [
    {
      title: "Idea Validation",
      description: "Technical feasibility analysis for your business concept",
      icon: "lightbulb",
    },
    {
      title: "Architecture Planning",
      description: "Scalable system design tailored to your requirements",
      icon: "layout",
    },
    {
      title: "Tech Stack Advisory",
      description: "Choosing the right tools for your specific use case",
      icon: "layers",
    },
    {
      title: "MVP Strategy",
      description: "Roadmap from concept to minimum viable product",
      icon: "rocket",
    },
  ],
  cta: { text: "Book a Free Consultation", href: "#contact" },
};

export const stats = {
  yearsExperience: "2+",
  projectsDelivered: "8+",
  githubRepos: "22+",
  technologiesUsed: "15+",
};
