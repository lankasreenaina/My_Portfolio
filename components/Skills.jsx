"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Brain, Database } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export default function Skills() {
  // Map icons to categories for visual representation
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "programming":
        return <Code2 className="text-primary-accent" size={20} />;
      case "frontend":
        return <Layout className="text-secondary-accent" size={20} />;
      case "backend":
        return <Server className="text-primary-accent" size={20} />;
      case "ai / ml":
        return <Brain className="text-secondary-accent" size={20} />;
      default:
        return <Database className="text-primary-accent" size={20} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-secondary-accent uppercase mb-2">
            Skills
          </h2>
          <div className="h-[2px] w-12 bg-secondary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Technical Competencies
          </h3>
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((categoryObj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative p-6 rounded-2xl border border-border-custom bg-card-bg/20 glow-card group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-card-bg border border-border-custom group-hover:border-primary-accent/30 transition-all duration-300">
                  {getIcon(categoryObj.category)}
                </div>
                <h4 className="font-bold text-text-main text-base group-hover:text-primary-accent transition-colors duration-300">
                  {categoryObj.category}
                </h4>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {categoryObj.skills.map((skill, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium bg-card-bg/50 border border-border-custom/80 text-text-muted transition-all duration-200 hover:text-text-main hover:bg-card-bg hover:border-border-custom"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
