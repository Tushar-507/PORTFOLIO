import stockdzImage from '../assets/stockdz.png';
import hangmanImage from '../assets/hangman.png';
import portfolioImage from '../assets/prt.png';
import googleAiCert from '../assets/google-ai-certificate.png';
import tcsIonCert from '../assets/tcs-ion-cert.jpg';
import ibmWebCert from '../assets/ibm-web-cert.jpg';
import codsoftCert from '../assets/codsoft-cert.jpg';

// ============================================================
// portfolioData.js — Centralized configuration for TUSHAR's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "TUSHAR",
  firstName: "TUSHAR",
  brandName: "TUSHAR",
  title: "Software Developer",
  location: "",
  phone: "",
  emails: {
    primary: "2377tushar10brssis@gmail.com",
    secondary: "",
  },
  summary:
    "A software developer focused on thoughtful digital experiences, clean interfaces, and dependable engineering.",
  resumeUrl: "Tushar_Resume_2026.pdf",
};

export const socialLinks = {
  github: "https://github.com/Tushar-507",
  linkedin: "https://www.linkedin.com/in/tushar-8053ba332",
  whatsapp: "https://wa.me/919773964938",
  instagram: "https://www.instagram.com/_tushar__020",
  tiktok: "https://www.tiktok.com/@tushar_codes",
  discord: null,
};

export const heroContent = {
  greeting: "Hi, I'm TUSHAR",
  titleHighlight: "Web Developer",
  rotatingTitles: [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Developer",
  ],
  subtitle:
    "I build considered digital experiences with a clean, modern point of view.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "View Resume", href: "Tushar_Resume_2026.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm <span class="text-slate-900 text-xl font-black mx-1 tracking-wide uppercase">Tushar</span>, a passionate Computer Science and Engineering student currently pursuing my B.Tech from Accurate Institute of Management and Technology, Greater Noida. I'm interested in Full Stack Development and enjoy building modern, responsive, and user-friendly web applications. I'm continuously improving my skills in frontend and backend technologies while exploring new tools and technologies to turn ideas into practical digital solutions. I'm also passionate about problem-solving and learning through real-world projects.`,
  techStack: ["Java", "Spring Boot", "MERN Stack"],
};

export const skillsContent = {
  badge: "MY PROCESS",
  heading: "How I Build",
  description:
    "From a simple idea to a polished digital experience — I combine development, design, and creative thinking at every stage.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the idea, the problem, and what the final experience should achieve. I break the idea into clear goals before writing code.",
      keywords: ["Idea", "Goals", "Requirements"],
      icon: "understand",
    },
    {
      number: "02",
      title: "Design",
      text: "I shape the experience before building it — thinking about layout, visual hierarchy, interactions, and responsive behavior. I use tools like Figma to explore and refine the interface.",
      keywords: ["UI/UX", "Figma", "Layout", "Interaction"],
      icon: "design",
    },
    {
      number: "03",
      title: "Build",
      text: "I turn the design into a real product using modern web technologies. I focus on clean structure, responsive interfaces, reusable components, and solving problems along the way.",
      keywords: ["Frontend", "Backend", "Components", "Code"],
      icon: "build",
    },
    {
      number: "04",
      title: "Refine",
      text: "After the first version works, I test, improve, polish the details, and make the experience feel smoother. I care about performance, responsiveness, animations, and the small details that make a product feel complete.",
      keywords: ["Testing", "Performance", "Animation", "Polish"],
      icon: "refine",
    },
  ],
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "React.js", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "MongoDB Compass", level: 85 },
        { name: "Claude", level: 80 },
        { name: "Codex", level: 75 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
        { name: "Software Engineering", level: 84 }
      ]
    }
  ]
};

// Brand New Content Creation Data
export const contentCreation = {
  badge: "CREATIVE SIDE",
  heading: "Beyond Code",
  description: "I don't only build digital experiences — I also care about design, motion, visuals, and the details that give an idea its identity.",
  categories: [
    {
      title: "UI/UX Design",
      description: "I enjoy designing clean, modern interfaces where visual hierarchy, usability, and interaction work together. I use design to turn ideas into clear and engaging digital experiences.",
      practice: "DESIGN PRACTICE",
      tools: ["Figma", "UI/UX", "Visual Design"],
      icon: "design"
    },
    {
      title: "Motion & Animation",
      description: "I explore motion and animation to make digital experiences feel more alive. I enjoy working with transitions, timing, visual rhythm, and animated interactions.",
      practice: "MOTION PRACTICE",
      tools: ["After Effects", "Motion Design", "Animation", "Visual Effects"],
      icon: "motion"
    },
    {
      title: "Creative Editing",
      description: "Visual editing is another part of my creative workflow. I enjoy experimenting with composition, transitions, effects, and visual storytelling to give content a stronger identity.",
      practice: "EDITING PRACTICE",
      tools: ["Photoshop", "After Effects", "Creative Editing", "Visual Composition"],
      icon: "editing"
    },
    {
      title: "3D & Visualization",
      description: "I also explore 3D modeling, rendering, and visualization, combining technical thinking with visual creativity to build detailed and expressive scenes.",
      practice: "3D PRACTICE",
      tools: ["3D Modeling", "Rendering", "Visualization"],
      icon: "three-dimensional"
    },
    {
      title: "Code × Design",
      description: "I like working at the intersection of development and visual design — building functional products while paying attention to the interaction, motion, and details that make them feel polished.",
      practice: "MY APPROACH",
      tools: ["Web Development", "UI/UX", "Animation", "Creative Problem Solving"],
      icon: "code-design"
    }
  ]
};

// Beyond Code journey data
export const leadershipList = [
  {
    category: "CERTIFICATION",
    title: "AI Fundamentals",
    description: "Successfully completed the AI Fundamentals course authorized by Google and offered through Coursera. Gained foundational knowledge in artificial intelligence concepts and applications.",
    label: "GOOGLE • COURSERA",
    date: "Aug 19, 2026",
    link: "/src/assets/google-ai-certificate.png",
    image: googleAiCert,
    motif: "brackets"
  },
  {
    category: "CERTIFICATION",
    title: "Generative AI Essentials",
    description: "Successfully completed the TCS iON Career Edge - Generative AI Essentials course covering Foundations of AI and Machine Learning, Fundamentals of Generative AI, Prompt Engineering, Responsible and Ethical AI, and Real-world Implementation.",
    label: "TCS iON • TATA",
    date: "Jul 25 - Aug 09, 2026",
    link: "/src/assets/tcs-ion-cert.jpg",
    image: tcsIonCert,
    motif: "brackets"
  },
  {
    category: "CERTIFICATION",
    title: "Web Development Fundamentals",
    description: "Successfully completed the Web Development Fundamentals course by IBM SkillsBuild, covering professional excellence in web development concepts and practices.",
    label: "IBM • SKILLSBUILD",
    date: "Jul 07, 2026",
    link: "/src/assets/ibm-web-cert.jpg",
    image: ibmWebCert,
    motif: "brackets"
  },
  {
    category: "CERTIFICATION",
    title: "Web Development Internship",
    description: "Successfully completed 4 weeks of a virtual internship program in Web Development at CodSoft with wonderful remarks, showcasing skills and invaluable contributions to tasks and projects.",
    label: "CODSOFT • VIRTUAL INTERNSHIP",
    date: "Aug 01 - Aug 31, 2026",
    link: "/src/assets/codsoft-cert.jpg",
    image: codsoftCert,
    motif: "brackets"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Accurate Institute of Management and Technology",
    role: "Bachelor of Technology",
    duration: "2023 - PRESENT",
    subtitle: "Computer Science and Engineering",
    skills: ["Pursuing B.Tech in CSE (AKTU)", "Institute: Accurate Institute of Management and Technology", "Location: Greater Noida", "Expected Graduation: 2027"],
    tech: ["Full Stack Development", "Web Development", "Problem Solving"],
    badge: "EDUCATION",
  },
  {
    organization: "Independent",
    role: "Personal Projects",
    duration: "2024 - Present",
    skills: ["Built multiple full-stack web applications", "Implemented UI/UX designs from scratch", "Deployed projects on Vercel and Netlify", "Continuously learning and improving"],
    tech: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Git / GitHub"],
    badge: "PERSONAL",
  },
  {
    organization: "CodSoft",
    role: "Web Development Intern (Virtual)",
    duration: "JUL - AUG (1 MONTH)",
    skills: ["Role: Web Development Intern (Virtual)", "Company: CodSoft", "Duration: July - August (1 Month)", "Completed 3 projects during the internship"],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    badge: "INTERNSHIP",
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Leadership", icon: "leadership", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Public Speaking", icon: "speaking", desc: "Confident stage presence, anchoring summits, and delivering articulate technical ideas." },
  { name: "Team Collaboration", icon: "collaboration", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "communication", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "problem-solving", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "adaptability", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "creativity", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "time", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "stockdz",
    number: "01",
    badge: "Market Interface",
    title: "StockDZ",
    description:
      "StockDZ is a modern web platform focused on presenting and exploring stock-related information through a clean and intuitive interface. The project was designed to provide users with a simple and accessible way to explore market data and interact with financial information.",
    techTags: ["React", "JavaScript", "CSS3"],
    image: stockdzImage,
    links: {
      github: null,
      demo: "#",
    },
    isFlagship: false,
  },
  {
    id: "hangman",
    number: "02",
    badge: "Interactive Game",
    title: "Hangman",
    description:
      "Hangman is an interactive word-guessing game where players try to discover the hidden word before running out of attempts. The project focuses on simple gameplay, responsive interaction, and a clean user experience.",
    techTags: ["JavaScript", "HTML", "CSS3"],
    image: hangmanImage,
    links: {
      github: null,
      demo: "#",
    },
    isFlagship: false,
  },
  {
    id: "coming-soon",
    number: "03",
    badge: "Coming Soon",
    title: "Coming Soon",
    description:
      "Something exciting is in the works. Stay tuned for new projects and creative experiments.",
    techTags: [],
    image: null,
    links: {
      github: null,
      demo: "#",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "IES College of Technology (RGPV)",
  cgpa: "8.35",
  graduation: "2027",
  twelfth: "12th Science – 81%",
  tenth: "10th CBSE – 70%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.35",
  copyright: `© ${new Date().getFullYear()} TUSHAR | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
