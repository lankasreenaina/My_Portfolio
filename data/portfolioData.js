// ==========================================
// PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
// ==========================================
// Edit this file to update your personal details, projects, certifications, 
// achievements, and links. No React knowledge required.

// 0. GLOBAL SITE CONFIGURATION
// Centralizes branding, links, and contact parameters for layout and views.
export const siteConfig = {
  siteName: "Lanka Sree Naina",
  siteUrl: "https://sreenaina.dev", // Update to your actual domain after deployment
  email: "sreenainalanka@gmail.com",
  github: "https://github.com/sreenainalanka",
  linkedin: "https://www.linkedin.com/in/lanka-sree-naina",
  leetcode: "https://leetcode.com/u/sreenaina",
};

// 1. PERSONAL INFORMATION
// -----------------------
export const personalInfo = {
  name: siteConfig.siteName,
  role: "Computer Science Engineering Student",
  college: "Vellore Institute of Technology (VIT), Chennai",
  graduationYear: 2027,
  cgpa: "8.61",
  headline: "VIT Chennai'27 | Full Stack Development | AI/ML Enthusiast | AWS Cloud Foundations",
  bio: "I am a Computer Science student passionate about software engineering, full-stack development, artificial intelligence, and cloud technologies. I enjoy building practical solutions, learning new technologies, and continuously improving my technical skills through projects, coursework, and hands-on development.",
  email: siteConfig.email,
  resumeUrl: "/resume/resume.pdf",     // Points to public/resume/resume.pdf
  profileImageUrl: "/profile/profile.jpg", // Points to public/profile/profile.jpg
};

// 2. SOCIAL & CODING LINKS
// -------------------------
export const socialLinks = {
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  leetcode: siteConfig.leetcode,
};

// 3. EDUCATION
// ------------
export const education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  college: "Vellore Institute of Technology (VIT), Chennai",
  cgpa: "8.61",
  duration: "2023 - 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming"
  ]
};

// 4. ENGINEERING JOURNEY
// ----------------------
export const engineeringJourney = [
  {
    year: "2023",
    title: "Joined CSE at VIT Chennai",
    desc: "Began engineering journey, diving deep into computer science fundamentals, logic design, and algorithmic thinking."
  },
  {
    year: "2024",
    title: "Built Programming Foundations",
    desc: "Mastered core programming languages like Java, C, Python, and SQL, and explored the basics of frontend technologies."
  },
  {
    year: "2025",
    title: "Explored Full Stack & AI",
    desc: "Discovered React, FastAPI, Node.js, and modern AI frameworks. Started experimenting with intelligent systems and building interactive web products."
  },
  {
    year: "2026",
    title: "Building Real Projects & Placement Prep",
    desc: "Developing production-oriented software, completing a research internship, and practicing rigorous DSA in preparation for upcoming placements."
  },
  {
    year: "2027",
    title: "Aspiring Software Engineer",
    desc: "Graduating from VIT Chennai, ready to solve real-world problems and add value to engineering teams."
  }
];

// 5. TECHNICAL SKILLS
// ------------------
export const skillCategories = [
  {
    category: "Programming",
    skills: ["Java", "Python", "JavaScript", "SQL", "C"]
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI"]
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "NumPy", "Pandas", "Scikit-Learn", "YOLOv8", "RT-DETR"]
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "AWS", "Vercel"]
  }
];

// 6. PROJECTS
// -----------
// Tip: Set "featured: true" for the project you want to highlight on top (e.g. DentalXNet).
// Toggle "visible: true/false" to show or hide a project.
export const projects = [
  {
    title: "DentalXNet",
    description: "AI-powered dental radiograph analysis platform for automated detection and localisation of dental conditions using YOLOv8 and RT-DETR.",
    tech: ["PyTorch", "FastAPI", "Next.js", "Vercel"],
    githubUrl: "https://github.com/lankasreenaina/DentalXNet", // Update when available
    demoUrl: "https://dental-x-net.vercel.app/", // Update when available
    image: "public\projects\dentalxnet.png", // Reserved file path
    featured: true,
    visible: true,
    status: "Completed",
    order: 1,
    impact: "Accelerates radiograph interpretation by identifying up to 9 primary dental anomalies with 88%+ precision."
  },
  {
    title: "AI Wi-Fi Security & Risk Assessment",
    description: "Machine learning-based network anomaly detection and security assessment platform that analyzes packet features to detect intrusions.",
    tech: ["Python", "FastAPI", "React", "Scikit-learn"],
    githubUrl: "https://github.com/lankasreenaina/Wifi-securtity-and-risk-assessment",
    demoUrl: "#",
    image: "public\projects\wifi-security.png",
    featured: false,
    visible: true,
    status: "Completed",
    order: 2
  },
  {
    title: "Course Feedback System",
    description: "A secure dashboard for students to submit anonymous course evaluations, enabling professors to track sentiment and improve instruction.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    githubUrl: "https://github.com/lankasreenaina/Course-Feedback-System",
    demoUrl: "#",
    image: "", // Empty path will automatically fallback to a beautiful SVG/CSS gradient
    featured: false,
    visible: true,
    status: "Completed",
    order: 3
  },
  {
    title: "College Feedback Classifier",
    description: "An NLP-based text classification tool designed to categorize college student feedback comments into administrative, academic, or facility clusters.",
    tech: ["Python", "NLTK", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/lankasreenaina/College-feedback-classifier",
    demoUrl: "#",
    image: "",
    featured: false,
    visible: true,
    status: "Completed",
    order: 4
  }
];

// 7. BUILDING NOW
// ---------------
// Focus on your major ongoing final-year product.
export const buildingNow = {
  title: "Placement Tracker",
  status: "In Development", // Options: "Planning" | "In Development" | "Beta" | "Live"
  percentComplete: 65,
  vision: "A comprehensive, data-driven placement preparation workspace that allows students to track job applications, manage multiple tailored resumes, run automated ATS compatibility analysis, monitor coding progress (LeetCode sync), and perform mock interviewer assessments.",
  techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  plannedFeatures: [
    { title: "Application Tracking", desc: "Kanban board style tracking for job applications from submission to offer." },
    { title: "ATS Analysis", desc: "Scans resume PDF text against job descriptions to compute ATS matching scores and keyphrase suggestions." },
    { title: "Resume Management", desc: "Keep multiple versions of resumes targeted for different engineering roles." },
    { title: "Coding Dashboard", desc: "Integrates coding problem practice counts, streaks, and focus topics in one dashboard." },
    { title: "Analytics", desc: "Visual graphs mapping application success ratios, response rates, and test schedules." }
  ],
  expectedTimeline: "Q3 2026 (Beta release)"
};

// 8. RESEARCH EXPERIENCE
// ----------------------
export const researchExperience = {
  title: "Research Experience",
  role: "Summer Research Internship Program",
  institution: "VIT Chennai",
  duration: "Summer 2024",
  description: "Worked on Knowledge Graph concepts and Neo4j graph database fundamentals under faculty guidance. Evaluated semantic relationship maps for academic citation networks.",
};

// 9. CERTIFICATIONS
// ------------------
export const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    credentialUrl: "https://www.credly.com", // Update with actual badge link
    image: "/projects/cert-aws.jpg" // Put badge image here if you have one, or keep blank
  },
  {
    title: "IBM Generative AI Explorer",
    issuer: "IBM",
    issueDate: "2024",
    credentialUrl: "#",
    image: ""
  },
  {
    title: "Salesforce Agentblazer Champion",
    issuer: "Salesforce",
    issueDate: "2025",
    credentialUrl: "#",
    image: ""
  }
];

// 10. CURRENT FOCUS / LEARNING & GROWTH
// ------------------------------------
export const currentFocus = [
  {
    topic: "Java & DSA",
    detail: "Solving advanced algorithmic problems on LeetCode; focusing on Graphs, Trees, and DP."
  },
  {
    topic: "Full Stack Development",
    detail: "Diving deeper into Next.js App Router optimization, state management, and cloud APIs."
  },
  {
    topic: "AI / ML Applications",
    detail: "Deploying model inference endpoints using FastAPI, YOLOv8, and custom computer vision pipelines."
  },
  {
    topic: "Systems & Core CS",
    detail: "Reviewing Operating Systems, DBMS design (indexing/transactions), and Computer Network protocols."
  },
  {
    topic: "Placement Preparation",
    detail: "Simulating mock coding tests, studying system design basics, and practicing behavioral interview scenarios."
  }
];

// 11. CONTACT FORM SERVICE
// ------------------------
export const contactConfig = {
  // Use Formspree or Web3Forms.
  // Example for Web3Forms: Obtain a free access key from https://web3forms.com
  // Example for Formspree: Create a form at https://formspree.io and get the endpoint ID
  serviceProvider: "web3forms", // "web3forms" | "formspree" | "simulated"
  accessKey: process.env.NEXT_PUBLIC_CONTACT_KEY || "eff08a63-6376-44c8-b99c-3281825797af", // Accesses Vercel Env Vars or falls back
  simulatedSuccessMessage: "Message sent successfully! (This is a mock send. Set up a Web3Forms key in portfolioData.js to receive actual emails.)"
};
