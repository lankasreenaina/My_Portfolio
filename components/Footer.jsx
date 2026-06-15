"use client";

import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-bg-main border-t border-border-custom/30 text-center text-xs text-text-muted">
      <div className="max-w-6xl mx-auto px-6 space-y-2">
        <p>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-[10px] text-text-muted/60">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
