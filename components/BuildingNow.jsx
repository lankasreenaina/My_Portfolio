"use client";

import { motion } from "framer-motion";
import { Cpu, Calendar, Milestone, Activity, Layers } from "lucide-react";
import { buildingNow } from "@/data/portfolioData";

export default function BuildingNow() {
  if (!buildingNow) return null;

  // Status color badge selector
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "planning":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "beta":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "live":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      default: // In Development
        return "bg-primary-accent/10 text-primary-accent border-primary-accent/20";
    }
  };

  return (
    <section id="building" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-secondary-accent uppercase mb-2">
            Active Development
          </h2>
          <div className="h-[2px] w-12 bg-secondary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Building Now
          </h3>
        </div>

        {/* Roadmap Card Container */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-accent to-primary-accent rounded-2xl blur-lg opacity-5 group-hover:opacity-10 transition duration-300" />
          
          <div className="relative border border-border-custom bg-card-bg/25 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Header: Title, Status Badge and Progress Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border-custom/40 pb-6">
              <div>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center space-x-1.5 mb-2">
                  <Activity size={12} className="text-secondary-accent" />
                  <span>Ongoing Project</span>
                </span>
                <h4 className="text-2xl font-extrabold text-text-main">{buildingNow.title}</h4>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Status Badge */}
                <div className={`px-3 py-1 rounded-full border text-xs font-semibold w-fit ${getStatusColor(buildingNow.status)}`}>
                  {buildingNow.status}
                </div>

                {/* Progress Bar Container */}
                <div className="w-full sm:w-44 flex flex-col justify-center">
                  <div className="flex items-center justify-between text-[11px] font-bold text-text-muted mb-1.5">
                    <span>Progress</span>
                    <span>{buildingNow.percentComplete}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-border-custom rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${buildingNow.percentComplete}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vision and Tech Stack Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Side: Product Vision */}
              <div className="lg:col-span-8 space-y-4">
                <h5 className="text-sm font-bold text-text-main uppercase tracking-wider flex items-center space-x-2">
                  <Milestone size={14} className="text-primary-accent" />
                  <span>Product Vision</span>
                </h5>
                <p className="text-text-muted text-sm leading-relaxed">
                  {buildingNow.vision}
                </p>
              </div>

              {/* Right Side: Active Tech Stack & Timeline */}
              <div className="lg:col-span-4 bg-card-bg/40 border border-border-custom/50 rounded-xl p-5 space-y-4 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold text-text-muted uppercase tracking-wider flex items-center space-x-2 mb-3">
                    <Layers size={12} className="text-secondary-accent" />
                    <span>Tech Stack</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {buildingNow.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-bg-main border border-border-custom text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-border-custom/40">
                  <Calendar size={14} className="text-primary-accent shrink-0" />
                  <div>
                    <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Release Target</p>
                    <p className="text-xs font-semibold text-text-main">{buildingNow.expectedTimeline}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Planned Features roadmap list */}
            <div className="space-y-4 pt-2">
              <h5 className="text-sm font-bold text-text-main uppercase tracking-wider flex items-center space-x-2">
                <Cpu size={14} className="text-secondary-accent" />
                <span>Planned Features & Milestones</span>
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {buildingNow.plannedFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-border-custom bg-card-bg/10 hover:border-border-custom/80 transition-colors duration-200 space-y-1.5"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-primary-accent rounded-full shrink-0" />
                      <h6 className="font-bold text-xs text-text-main">{feature.title}</h6>
                    </div>
                    <p className="text-[11px] text-text-muted leading-relaxed pl-3">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
