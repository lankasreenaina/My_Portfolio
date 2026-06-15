"use client";

import { motion } from "framer-motion";
import { BookOpen, Map, Database, Calendar } from "lucide-react";
import { researchExperience } from "@/data/portfolioData";

export default function Research() {
  if (!researchExperience) return null;

  return (
    <section id="research" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-primary-accent uppercase mb-2">
            Academic Contributions
          </h2>
          <div className="h-[2px] w-12 bg-primary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Research Experience
          </h3>
        </div>

        {/* Research Internship Display Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Card Accent Ambient Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl blur-lg opacity-5 group-hover:opacity-10 transition duration-300" />

          {/* Core Card Container */}
          <div className="relative border border-border-custom bg-card-bg/25 rounded-2xl p-6 sm:p-8 space-y-6 glow-card">
            
            {/* Header: Title, Institution & Duration */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border-custom/40 pb-5">
              <div>
                <span className="text-[10px] font-bold text-primary-accent uppercase tracking-widest block mb-1.5">
                  Internship
                </span>
                <h4 className="text-xl font-bold text-text-main group-hover:text-primary-accent transition-colors duration-200">
                  {researchExperience.role}
                </h4>
                <p className="text-sm text-text-muted mt-1 font-semibold">{researchExperience.institution}</p>
              </div>

              <div className="flex items-center space-x-2 text-text-muted text-xs bg-card-bg/40 border border-border-custom px-3 py-1.5 rounded-lg w-fit">
                <Calendar size={13} className="text-primary-accent" />
                <span>{researchExperience.duration}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Detailed narrative */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-text-muted text-sm leading-relaxed">
                  {researchExperience.description}
                </p>
              </div>

              {/* Research Focus pillars */}
              <div className="lg:col-span-4 bg-card-bg/40 border border-border-custom/50 rounded-xl p-4 space-y-3">
                <h5 className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Key Domains Explored</h5>
                <ul className="space-y-2.5">
                  <li className="text-xs text-text-muted flex items-center space-x-2">
                    <Database size={13} className="text-secondary-accent shrink-0" />
                    <span>Neo4j Graph Database</span>
                  </li>
                  <li className="text-xs text-text-muted flex items-center space-x-2">
                    <Map size={13} className="text-primary-accent shrink-0" />
                    <span>Knowledge Graphs</span>
                  </li>
                  <li className="text-xs text-text-muted flex items-center space-x-2">
                    <BookOpen size={13} className="text-secondary-accent shrink-0" />
                    <span>Citation Networks</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
