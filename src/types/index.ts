export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "facebook" | "instagram" | "whatsapp";
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: { start: string; end: string };
  type: "full-time" | "internship" | "contract";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "fullstack" | "ai" | "frontend";
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ConsultancyOffering {
  title: string;
  description: string;
  icon: string;
}

export interface Consultancy {
  headline: string;
  subheadline: string;
  description: string;
  offerings: ConsultancyOffering[];
  cta: { text: string; href: string };
}

export interface NavLink {
  label: string;
  href: string;
}
