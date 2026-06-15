"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Award, Cpu } from "lucide-react";
import { projects } from "@/data/portfolioData";

// Custom Github Brand Icon (Replacing deprecated lucide-react brand icon)
const GithubIcon = ({ size = 14 }) => (
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


export default function Projects() {
  // Filter and sort projects dynamically by 'order' attribute
  const visibleProjects = projects
    .filter((p) => p.visible !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
  const featuredProject = visibleProjects.find((p) => p.featured);
  const otherProjects = visibleProjects.filter((p) => !p.featured);

  // Gradient fallback component for projects without custom screenshots
  const GradientFallback = ({ title }) => {
    const initial = title ? title.charAt(0) : "P";
    return (
      <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#111827] via-[#1F2937]/50 to-[#0B0F19] flex items-center justify-center border border-border-custom/40 rounded-xl relative overflow-hidden transition-all duration-300 group-hover:border-primary-accent/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.08),transparent_60%)]" />
        <span className="text-5xl font-black text-primary-accent/20 select-none group-hover:text-primary-accent/30 group-hover:scale-110 transition-all duration-500">
          {initial}
        </span>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-primary-accent uppercase mb-2">
            Projects
          </h2>
          <div className="h-[2px] w-12 bg-primary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Featured Creations
          </h3>
        </div>

        {/* FEATURED PROJECT SECTION */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative group">
              {/* Soft outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-3xl blur-2xl opacity-10 group-hover:opacity-15 transition duration-500" />
              
              {/* Outer container */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-3xl border border-border-custom bg-card-bg/30 hover:border-primary-accent/30 transition-all duration-300">
                
                {/* Left: Project Image representation */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl relative aspect-video w-full flex items-center justify-center bg-card-bg">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      onError={(e) => {
                        // If image fails to load, replace it gracefully
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <GradientFallback title={featuredProject.title} />
                  )}
                  {/* Glowing Featured Badge */}
                  <div className="absolute top-4 left-4 bg-primary-accent/90 text-[#0B0F19] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Featured Project
                  </div>
                </div>

                {/* Right: Project Copy & Info */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h4 className="text-2xl font-bold text-text-main group-hover:text-primary-accent transition-colors duration-200">
                        {featuredProject.title}
                      </h4>
                      {featuredProject.status && (
                        <span className="text-[10px] bg-secondary-accent/10 text-secondary-accent border border-secondary-accent/20 px-2 py-0.5 rounded-md font-semibold">
                          {featuredProject.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-text-muted text-sm mt-3 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Impact Box */}
                    {featuredProject.impact && (
                      <div className="mt-4 p-4 rounded-xl bg-primary-accent/5 border border-primary-accent/10 flex items-start space-x-3">
                        <Cpu className="text-primary-accent shrink-0 mt-0.5" size={16} />
                        <div>
                          <p className="text-xs font-bold text-primary-accent uppercase tracking-wider">Project Impact</p>
                          <p className="text-xs text-text-muted mt-1 leading-relaxed">{featuredProject.impact}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack & Navigation CTAs */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-card-bg border border-border-custom text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-card-bg hover:bg-card-bg/85 border border-border-custom hover:border-primary-accent/40 text-text-main font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                      {featuredProject.demoUrl && featuredProject.demoUrl !== "#" && (
                        <a
                          href={featuredProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 text-[#0B0F19] font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS SECTION */}
        {otherProjects.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
              Other Notable Projects
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col border border-border-custom bg-card-bg/20 rounded-2xl p-5 glow-card group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image/Visual Mockup */}
                  <div className="overflow-hidden rounded-xl aspect-video w-full mb-4 relative flex items-center justify-center bg-card-bg">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <GradientFallback title={project.title} />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-bold text-text-main text-base group-hover:text-primary-accent transition-colors duration-200">
                          {project.title}
                        </h5>
                        {project.status && (
                          <span className="text-[9px] bg-secondary-accent/10 text-secondary-accent border border-secondary-accent/20 px-1.5 py-0.5 rounded font-semibold whitespace-nowrap">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-text-muted text-xs mt-2 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech List & Source Button */}
                    <div className="mt-5 space-y-4 pt-4 border-t border-border-custom/40">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-card-bg/50 text-text-muted border border-border-custom/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center space-x-2.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-card-bg border border-border-custom hover:border-primary-accent/40 rounded-lg text-text-muted hover:text-text-main transition-colors cursor-pointer flex items-center justify-center"
                          title="View Source Code"
                        >
                          <GithubIcon size={14} />
                        </a>
                        {project.demoUrl && project.demoUrl !== "#" && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-card-bg border border-border-custom hover:border-primary-accent/40 rounded-lg text-text-muted hover:text-text-main transition-colors cursor-pointer"
                            title="View Live Demo"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
