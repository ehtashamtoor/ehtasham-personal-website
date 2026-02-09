import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Consultancy } from "@/components/sections/Consultancy";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/data/metadata";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ehtasham Toor",
  jobTitle: "Full-Stack MERN & Agentic AI Developer",
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "LangChain",
    "LangGraph",
    "MongoDB",
    "NestJS",
    "FastAPI",
    "Python",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <TechStack />
        <Consultancy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
