"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personalInfo, socialLinks, contactConfig } from "@/data/portfolioData";

// Custom Brand SVG Icons (Replacing lucide-react brand icons)
const GithubIcon = ({ size = 18 }) => (
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

const LinkedinIcon = ({ size = 18 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetcodeIcon = ({ size = 18 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.943l1.132 1.132a1.356 1.356 0 0 0 1.921 0L14.7 4.09a1.375 1.375 0 0 0 0-1.943L13.567.414A1.37 1.37 0 0 0 12.522 0zm-5.051 10.429a1.36 1.36 0 0 0-.96.402l-6.078 6.077a1.373 1.373 0 0 0 0 1.942l4.849 4.849a1.375 1.375 0 0 0 1.943 0l9.777-9.777a1.375 1.375 0 0 0 0-1.943l-1.131-1.132a1.356 1.356 0 0 0-1.921 0L5.132 20.622l-3.877-3.877 5.27-5.271a1.361 1.361 0 0 0 .907-1.045zm11.233.153a1.36 1.36 0 0 0-.96.402l-1.131 1.131a1.375 1.375 0 0 0 0 1.943l1.131 1.132c.536.537 1.407.537 1.943 0l1.131-1.132a1.375 1.375 0 0 0 0-1.943l-1.131-1.131a1.36 1.36 0 0 0-.983-.402z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus("submitting");

    // 1. SIMULATED SUBMISSION (Default/Fallback)
    if (contactConfig.serviceProvider === "simulated" || contactConfig.accessKey.includes("YOUR")) {
      setTimeout(() => {
        setStatus("success");
        setFeedbackMsg(contactConfig.simulatedSuccessMessage);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1000);
      return;
    }

    // 2. LIVE SUBMISSION (Web3Forms or Formspree)
    try {
      let response;
      if (contactConfig.serviceProvider === "web3forms") {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: contactConfig.accessKey,
            ...formData
          })
        });
      } else if (contactConfig.serviceProvider === "formspree") {
        response = await fetch(`https://formspree.io/f/${contactConfig.accessKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        });
      }

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFeedbackMsg("Thank you! Your message has been sent successfully. I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setFeedbackMsg("Something went wrong. Please try again or reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-bg-main relative border-t border-border-custom/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-semibold tracking-wider text-secondary-accent uppercase mb-2">
            Get In Touch
          </h2>
          <div className="h-[2px] w-12 bg-secondary-accent rounded-full mb-4" />
          <h3 className="text-3xl font-bold tracking-tight text-text-main">
            Contact Me
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h4 className="text-lg font-bold text-text-main">Let's connect.</h4>
              <p className="text-xs text-text-muted mt-2 leading-relaxed">
                Whether you have a query about a project, placement internship opportunities, or just want to chat about engineering, feel free to send a message.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl border border-border-custom bg-card-bg/25 text-primary-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Email Address</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-text-main hover:text-primary-accent transition-colors duration-200">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl border border-border-custom bg-card-bg/25 text-secondary-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-text-main">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social coding cards */}
            <div className="space-y-3 pt-2">
              <h5 className="text-[10px] text-text-muted uppercase font-bold tracking-widest">Coding & Professional Networks</h5>
              <div className="flex items-center space-x-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card-bg/20 border border-border-custom hover:border-primary-accent/40 rounded-xl text-text-muted hover:text-text-main transition-colors cursor-pointer flex items-center justify-center"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card-bg/20 border border-border-custom hover:border-primary-accent/40 rounded-xl text-text-muted hover:text-text-main transition-colors cursor-pointer flex items-center justify-center"
                  title="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card-bg/20 border border-border-custom hover:border-primary-accent/40 rounded-xl text-text-muted hover:text-text-main transition-colors cursor-pointer flex items-center justify-center"
                  title="LeetCode"
                >
                  <LeetcodeIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl blur-lg opacity-5 group-hover:opacity-10 transition duration-300" />
              
              <form
                onSubmit={handleSubmit}
                className="relative border border-border-custom bg-card-bg/25 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-text-muted">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-card-bg/50 border border-border-custom focus:border-primary-accent/50 text-text-main text-sm rounded-xl px-4 py-2.5 outline-none transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-text-muted">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full bg-card-bg/50 border border-border-custom focus:border-primary-accent/50 text-text-main text-sm rounded-xl px-4 py-2.5 outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-muted">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry / Internship / Proposal"
                    className="w-full bg-card-bg/50 border border-border-custom focus:border-primary-accent/50 text-text-main text-sm rounded-xl px-4 py-2.5 outline-none transition-colors duration-200"
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-text-muted">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Hello Naina..."
                    className="w-full bg-card-bg/50 border border-border-custom focus:border-primary-accent/50 text-text-main text-sm rounded-xl px-4 py-2.5 outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary-accent hover:bg-primary-accent/90 disabled:bg-primary-accent/40 text-[#0B0F19] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-lg shadow-primary-accent/15"
                >
                  <Send size={14} />
                  <span>{status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}</span>
                </button>

                {/* Form Message Feedback / Toast (Inside card) */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-secondary-accent/10 border border-secondary-accent/20 rounded-xl flex items-start space-x-3 text-secondary-accent"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <p className="text-xs leading-relaxed font-semibold">{feedbackMsg}</p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-semibold"
                    >
                      {feedbackMsg}
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
