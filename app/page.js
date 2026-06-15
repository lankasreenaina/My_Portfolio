import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BuildingNow from "@/components/BuildingNow";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import CurrentFocus from "@/components/CurrentFocus";
import Journey from "@/components/Journey";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION (Includes profile photo & cursor glow) */}
      <Hero />

      {/* 2. ABOUT ME SECTION (Personal summary & Education details) */}
      <About />

      {/* 3. TECHNICAL SKILLS SECTION (Domain grouped tags) */}
      <Skills />

      {/* 4. PROJECTS SHOWCASE (Tiered featured YOLOv8/RT-DETR project & grid of others) */}
      <Projects />

      {/* 5. ROADMAP SECTION (Product layout for in-progress Placement Tracker) */}
      <BuildingNow />

      {/* 6. RESEARCH SECTION (Neo4j / Knowledge Graph Internship) */}
      <Research />

      {/* 7. CERTIFICATIONS CARD GRID (AWS, IBM, Salesforce) */}
      <Certifications />

      {/* 8. CURRENT STUDY PATH (Active Learning & Growth topics) */}
      <CurrentFocus />

      {/* 9. ENGINEERING TIMELINE (Chronological timeline from 2023) */}
      <Journey />

      {/* 10. CURRICULUM VITAE PREVIEW (Visual mockup & actions) */}
      <ResumeSection />

      {/* 11. FORM CONTACT & SOCIALS (Formspree/Web3Forms connection) */}
      <Contact />
    </div>
  );
}
