"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";
import { personalInfo, education } from "@/data/portfolioData";

export default function About() {
  const interests = [
    "Full Stack Engineering",
    "Artificial Intelligence",
    "Machine Learning & CV",
    "Cloud Architecture",
    "Software Systems"
  ];

  return (
    <section id="about" className="py-20 bg-bg-main relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-primary-accent uppercase mb-2">
            About Me
          </h2>
          <div className="h-[2px] w-12 bg-primary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            My Engineering Background
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Short Bio & Personal Direction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-xl font-semibold text-text-main">
              A passionate developer exploring the intersections of Web Apps, Cloud, and Machine Learning.
            </h4>
            
            <p className="text-text-muted leading-relaxed">
              I am a Computer Science Engineering student at VIT Chennai (Class of 2027) who enjoys turning complex problems into clean, practical digital products. My technical interest spans full-stack application development, deploying AI/ML vision models, and exploring cloud infrastructures.
            </p>

            <p className="text-text-muted leading-relaxed">
              Through hands-on projects, rigorous academic courses, and self-directed learning, I strive to write modular, performant code. I am committed to continuous improvement, exploring new technologies, and preparing for opportunities where I can contribute to high-impact development.
            </p>

            {/* Interest Tags */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-text-main mb-3">Core Domains of Interest:</h5>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-card-bg border border-border-custom text-text-muted hover:text-primary-accent hover:border-primary-accent/40 px-3 py-1.5 rounded-lg transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Structured Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Card Ambient Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl blur-lg opacity-10 group-hover:opacity-15 transition duration-300" />
              
              {/* Core Education Container */}
              <div className="relative glass border border-border-custom rounded-2xl p-6 sm:p-8 space-y-6 glow-card bg-card-bg/40">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-accent/10 rounded-xl text-primary-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">Education</h4>
                    <p className="text-xs text-text-muted">VIT Chennai Campus</p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-border-custom/50 pt-4">
                  
                  {/* College Name & Degree */}
                  <div>
                    <h5 className="font-semibold text-text-main text-sm">{education.college}</h5>
                    <p className="text-xs text-text-muted mt-1 leading-normal">
                      {education.degree}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    
                    {/* CGPA */}
                    <div className="flex items-center space-x-2">
                      <Award size={16} className="text-secondary-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Current CGPA</p>
                        <p className="text-sm font-semibold text-text-main">{education.cgpa} / 10</p>
                      </div>
                    </div>

                    {/* Graduation Year */}
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-primary-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Graduation</p>
                        <p className="text-sm font-semibold text-text-main">{personalInfo.graduationYear}</p>
                      </div>
                    </div>

                  </div>

                  {/* Core Coursework List */}
                  <div className="pt-2">
                    <div className="flex items-center space-x-2 mb-2 text-text-main">
                      <BookOpen size={14} className="text-primary-accent" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Key Coursework</span>
                    </div>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {education.coursework.map((course, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-center space-x-1.5">
                          <span className="w-1 h-1 bg-secondary-accent rounded-full" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
