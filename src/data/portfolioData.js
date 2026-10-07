// =============================================================================
// DIVYANSHU KASHYAP - PORTFOLIO CONFIGURATION & DATA
// Edit this file to update your personal details, skills, projects, and contact info!
// =============================================================================

export const personalInfo = {
  // Personal Details
  name: "Divyanshu Kashyap",
  role: "Computer Science student, web developer",
  tagline: "First-Year CS Core Student & Web Developer crafting modern digital experiences",
  college: "JECRC University",
  degree: "B.Tech Computer Science Core (1st Year)",
  location: "Jaipur, Rajasthan, India",
  
  // Exact introduction provided by you
  aboutShort: "I am a btech first year student of jecrc university studying computer science core .",
  
  // Contact & Social Links
  email: "divyanshu.26@jecrcu.edu.in",
  github: "https://github.com/Divyanshu33",
  githubHandle: "Divyanshu33",
  linkedin: "https://www.linkedin.com/in/divyanshu-kashyap",
  linkedinHandle: "Divyanshu Kashyap",

  // Key Quick Highlights
  stats: [
    { label: "Academic Level", value: "B.Tech 1st Year" },
    { label: "Specialization", value: "CS Core" },
    { label: "University", value: "JECRC University" },
    { label: "Location", value: "Jaipur, Rajasthan" }
  ]
};

// =============================================================================
// ABOUT SECTION DATA: Background, Interests, and Career Goals
// =============================================================================
export const aboutData = {
  background: {
    title: "My Background",
    description: "I am a first-year undergraduate student pursuing my Bachelor of Technology (B.Tech) in Computer Science Core at JECRC University, Jaipur, Rajasthan, India. My academic journey is centered around building deep fundamentals in computer science, software engineering principles, and applied problem solving."
  },
  interests: [
    {
      title: "Web Development",
      description: "Designing and developing clean, accessible, and high-performance user interfaces using modern web technologies."
    },
    {
      title: "Core Computer Science",
      description: "Strengthening foundations in data structures, algorithms, object-oriented concepts, and computational problem solving."
    },
    {
      title: "Software Craftsmanship",
      description: "Writing readable, maintainable code and following best practices in version control and project organization."
    },
    {
      title: "Emerging Technologies",
      description: "Actively exploring modern development tools, modern frameworks, and artificial intelligence integration."
    }
  ],
  careerGoals: {
    title: "Career Goals",
    description: "My goal is to evolve into a proficient, impact-driven software developer. I aim to master modern web engineering and core system concepts, collaborate on challenging open-source projects, and build innovative digital solutions that solve real-world problems."
  }
};

// =============================================================================
// SKILLS SECTION DATA
// Grouped by domain so you can easily add, edit, or remove technologies
// =============================================================================
export const skillsData = [
  {
    name: "HTML5",
    category: "Web Development",
    proficiency: "Core",
    description: "Semantic elements, accessible web hierarchy, modern standards.",
    icon: "Code2",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "CSS3",
    category: "Web Development",
    proficiency: "Core",
    description: "Responsive layouts, Flexbox, CSS Grid, media queries, animations.",
    icon: "Palette",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "JavaScript",
    category: "Web Development",
    proficiency: "Core",
    description: "ES6+ syntax, DOM manipulation, asynchronous logic, event handling.",
    icon: "FileCode",
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "Tailwind CSS",
    category: "Web Development",
    proficiency: "Styling",
    description: "Utility-first design, fast prototyping, dark mode theming.",
    icon: "Palette",
    color: "from-sky-500 to-blue-600"
  },
  {
    name: "React",
    category: "Web Development",
    proficiency: "Framework",
    description: "Component architecture, hooks, state management, modern single-page apps.",
    icon: "Globe",
    color: "from-cyan-500 to-indigo-600"
  },
  {
    name: "C / C++",
    category: "Programming & Core CS",
    proficiency: "Academic",
    description: "Data types, memory management, pointers, structured problem solving.",
    icon: "Terminal",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "Python",
    category: "Programming & Core CS",
    proficiency: "Familiar",
    description: "Scripting, algorithm implementations, syntax clarity, and automation.",
    icon: "Terminal",
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Git & GitHub",
    category: "Tools & Workflow",
    proficiency: "Tooling",
    description: "Version control, branching, repository management, and collaboration.",
    icon: "Zap",
    color: "from-purple-500 to-pink-600"
  }
];

// =============================================================================
// PROJECTS SECTION DATA
// Format: [Project name]: [What it does] | [GitHub link] | [Live demo link]
// =============================================================================
export const projectsData = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    whatItDoes: "A modern, ultra-responsive personal portfolio website engineered with React, Vite, and Tailwind CSS. It highlights my academic background at JECRC University, technical skillset, featured projects, and direct contact options with light/dark theme support.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    category: "Web Development",
    githubUrl: "https://github.com/Divyanshu33",
    liveUrl: "#", // Add your live GitHub Pages link here once deployed!
    badge: "Active Project"
  },
  {
    id: "web-development-showcase",
    title: "Web Development Showcase",
    whatItDoes: "A curated web application showcasing responsive UI design, interactive user interfaces, and clean component-driven architecture using modern HTML, CSS, and JavaScript.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web Development",
    githubUrl: "https://github.com/Divyanshu33",
    liveUrl: "#", // Add your live project link here!
    badge: "Featured Build"
  }
];
