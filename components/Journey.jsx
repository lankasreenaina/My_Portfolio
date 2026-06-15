"use client";

import { motion } from "framer-motion";
import { Milestone, Calendar } from "lucide-react";
import { engineeringJourney } from "@/data/portfolioData";

export default function Journey() {
  if (!engineeringJourney || engineeringJourney.length === 0) return null;

  return (
    <section id="journey" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-secondary-accent uppercase mb-2">
            Timeline
          </h2>
          <div className="h-[2px] w-12 bg-secondary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Engineering Journey
          </h3>
        </div>

        {/* Timeline Path Structure */}
        <div className="relative pl-6 sm:pl-8 max-w-3xl border-l border-border-custom/60 space-y-10 ml-4">
          
          {engineeringJourney.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Animated node dot on the timeline axis */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-bg-main bg-border-custom group-hover:bg-primary-accent group-hover:border-primary-accent transition-colors duration-300" />
              
              {/* Year indicator box */}
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary-accent bg-primary-accent/5 border border-primary-accent/15 px-3 py-1 rounded-md mb-3.5">
                <Calendar size={11} />
                <span>{step.year}</span>
              </div>

              {/* Step title & description card */}
              <div className="p-5 rounded-2xl border border-border-custom bg-card-bg/10 hover:bg-card-bg/25 hover:border-primary-accent/25 transition-all duration-300">
                <h4 className="font-bold text-text-main text-base group-hover:text-primary-accent transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
