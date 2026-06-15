"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-primary-accent uppercase mb-2">
            Credentials
          </h2>
          <div className="h-[2px] w-12 bg-primary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Curriculum Vitae
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Summary & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-xl font-bold text-text-main">
              Review my technical qualifications and career foundations.
            </h4>
            
            <p className="text-text-muted text-sm leading-relaxed">
              My resume outlines my academic timeline at VIT Chennai, full-stack and AI project achievements, and core Computer Science competencies. It details coursework milestones, cloud credentials, and practical application deployments.
            </p>

            <div className="p-4 rounded-xl bg-card-bg/30 border border-border-custom text-xs text-text-muted leading-relaxed">
              <span className="font-semibold text-text-main">Recruiter Info:</span> The resume file is kept up-to-date and optimized for ATS readability. Click "View Resume" to view the digital PDF in your browser, or "Download Resume" to save a local copy.
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* VIEW RESUME BUTTON */}
              {/* REPLACE RESUME FILE HERE:
                  To update your resume PDF:
                  - Put your new file inside "public/resume/resume.pdf"
                  - Keep the filename "resume.pdf" exactly as is
                  - Commit & push! It will redeploy automatically without code edits. */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 text-[#0B0F19] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-primary-accent/10"
              >
                <ExternalLink size={15} />
                <span>View Full Resume</span>
              </a>

              {/* DOWNLOAD RESUME BUTTON */}
              <a
                href={personalInfo.resumeUrl}
                download="Lanka_Sree_Naina_Resume.pdf"
                className="inline-flex items-center space-x-2 border border-border-custom bg-card-bg/20 hover:bg-card-bg/80 text-text-main font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <Download size={15} className="text-text-muted" />
                <span>Download PDF</span>
              </a>

            </div>
          </motion.div>

          {/* Right Side: Skeletal Document Page Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-[1/1.414] rounded-2xl border border-border-custom bg-card-bg/30 p-6 shadow-2xl relative overflow-hidden group hover:border-primary-accent/20 transition-all duration-300">
              
              {/* Background design accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent)]" />
              
              {/* Preview Sheet details */}
              <div className="space-y-4 h-full flex flex-col justify-between select-none">
                
                {/* Header Skeleton */}
                <div className="space-y-1.5 border-b border-border-custom/50 pb-3">
                  <div className="h-4 w-28 bg-text-main/20 rounded" />
                  <div className="h-2.5 w-40 bg-text-muted/20 rounded" />
                  <div className="h-2 w-36 bg-text-muted/10 rounded" />
                </div>

                {/* Body Skeletons */}
                <div className="flex-1 py-4 space-y-4">
                  {/* Education section mockup */}
                  <div className="space-y-1.5">
                    <div className="h-2 w-12 bg-primary-accent/30 rounded" />
                    <div className="h-2 w-full bg-text-muted/10 rounded" />
                    <div className="h-2 w-4/5 bg-text-muted/10 rounded" />
                  </div>

                  {/* Skills section mockup */}
                  <div className="space-y-1.5">
                    <div className="h-2 w-10 bg-primary-accent/30 rounded" />
                    <div className="flex gap-1.5">
                      <div className="h-4 w-12 bg-text-muted/10 rounded" />
                      <div className="h-4 w-16 bg-text-muted/10 rounded" />
                      <div className="h-4 w-10 bg-text-muted/10 rounded" />
                    </div>
                  </div>

                  {/* Projects section mockup */}
                  <div className="space-y-1.5">
                    <div className="h-2 w-14 bg-primary-accent/30 rounded" />
                    <div className="h-2 w-full bg-text-muted/10 rounded" />
                    <div className="h-2 w-11/12 bg-text-muted/10 rounded" />
                  </div>
                </div>

                {/* Footer Blueprint */}
                <div className="border-t border-border-custom/50 pt-3 flex items-center justify-between text-[10px] text-text-muted/30 font-bold">
                  <span>VIT Chennai</span>
                  <span>2027</span>
                </div>

              </div>

              {/* Hover Overlay Visual Action Indicator */}
              <div className="absolute inset-0 bg-[#0B0F19]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-3.5 rounded-full bg-primary-accent/15 text-primary-accent border border-primary-accent/30 mb-2">
                  <FileText size={22} />
                </div>
                <span className="text-xs font-bold text-text-main">Click to View PDF</span>
              </div>

              {/* Action anchor covering card surface */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="View Resume PDF"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
