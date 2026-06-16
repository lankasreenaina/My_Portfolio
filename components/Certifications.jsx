"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/portfolioData";

export default function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-secondary-accent uppercase mb-2">
            Accreditation
          </h2>
          <div className="h-0.5 w-12 bg-secondary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Certifications
          </h3>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col border border-border-custom bg-card-bg/20 rounded-2xl p-5 glow-card group transition-all duration-300 hover:-translate-y-1"
            >
              
              {/* Badge Visual representation / Fallback */}
              <div className="w-full aspect-video rounded-xl bg-linear-to-br from-[#120E22] to-[#1F1A3A]/30 border border-border-custom/60 flex items-center justify-center relative overflow-hidden mb-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,113,133,0.04),transparent_60%)]" />
                <div className="p-4 rounded-full bg-secondary-accent/5 border border-secondary-accent/10 text-secondary-accent group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck size={28} />
                </div>
              </div>

              {/* Certification metadata */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-text-main text-sm leading-snug group-hover:text-primary-accent transition-colors duration-200">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-text-muted mt-2 font-medium">
                    Issuer: {cert.issuer}
                  </p>
                  <p className="text-[10px] text-text-muted mt-1">
                    Issued: {cert.issueDate}
                  </p>
                </div>

                {/* Verification CTA */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <div className="mt-5 pt-3 border-t border-border-custom/40">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-primary-accent hover:text-primary-accent/80 transition-colors cursor-pointer"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
