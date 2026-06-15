"use client";

import { motion } from "framer-motion";
import { BookOpen, Compass, ChevronRight } from "lucide-react";
import { currentFocus } from "@/data/portfolioData";

export default function CurrentFocus() {
  if (!currentFocus || currentFocus.length === 0) return null;

  return (
    <section id="focus" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-primary-accent uppercase mb-2">
            Learning & Growth
          </h2>
          <div className="h-[2px] w-12 bg-primary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Current Focus
          </h3>
        </div>

        {/* Focus dashboard list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentFocus.map((focus, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col border border-border-custom bg-card-bg/20 rounded-2xl p-5 hover:border-primary-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary-accent/30 to-transparent" />
              
              {/* Card content */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-text-main">
                  <Compass size={14} className="text-primary-accent shrink-0" />
                  <h4 className="font-bold text-sm uppercase tracking-wider">{focus.topic}</h4>
                </div>

                <p className="text-xs text-text-muted leading-relaxed pl-5">
                  {focus.detail}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
