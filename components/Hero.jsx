"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import MouseGlow from "./MouseGlow";

// Custom Brand SVG Icons (Replacing lucide-react brand icons which were deprecated/removed)
const GithubIcon = ({ size = 18 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      const navHeight = 72;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background Spotlight Glow Effect */}
      <MouseGlow />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-accent/10 text-primary-accent text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary-accent/20 w-fit mb-6">
              <span>{personalInfo.college}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-text-main">
              Hi, I'm <span className="text-primary-accent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">{personalInfo.name}</span>
            </h1>

            {/* Core Role Subheading */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-text-main/90">
              {personalInfo.role}
            </h2>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA and Social Actions Row */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* PRIMARY RESUME BUTTON */}
              {/* NOTE: TO UPDATE YOUR RESUME PDF:
                  1. Put your PDF in "public/resume/resume.pdf"
                  2. Make sure it is named exactly "resume.pdf"
                  3. Commit and push. No code modifications needed! */}
              {/* ADD RESUME PDF HERE */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 text-[#0B0F19] font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-primary-accent/10 hover:shadow-primary-accent/20 cursor-pointer"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>

              {/* CONTACT ME BUTTON */}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center space-x-2 border border-border-custom bg-card-bg/25 hover:bg-card-bg/80 text-text-main font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight size={14} className="text-text-muted group-hover:text-text-main" />
              </a>

              {/* SOCIAL BUTTONS */}
              <div className="flex items-center space-x-2.5 ml-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-custom bg-card-bg/10 hover:bg-card-bg/70 hover:border-primary-accent/40 text-text-muted hover:text-text-main transition-all duration-200 cursor-pointer flex items-center justify-center"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border-custom bg-card-bg/10 hover:bg-card-bg/70 hover:border-primary-accent/40 text-text-muted hover:text-text-main transition-all duration-200 cursor-pointer flex items-center justify-center"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center"
          >
            {/* REPLACE PROFILE IMAGE HERE:
                1. Put your professional image in "public/profile/profile.jpg"
                2. Ensure it is named exactly "profile.jpg"
                3. Overwrite the file and push! No coding changes needed. */}
            <div className="relative group max-w-[320px] w-full aspect-square md:aspect-auto md:h-[380px]">
              
              {/* Outer soft ambient gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Frame Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border-custom bg-card-bg shadow-2xl transition-all duration-500 group-hover:border-primary-accent/30 flex items-center justify-center">
                <Image
                  src={personalInfo.profileImageUrl}
                  alt={personalInfo.name}
                  width={380}
                  height={380}
                  priority
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                />
                
                {/* Visual glass overlay grid */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19]/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
