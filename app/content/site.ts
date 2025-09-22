export const site = {
  name: "Chaitanya Kumar Pola",
  role: "Full-Stack Developer | MERN | Java | Python",
  location: "Bobbili, Andhra Pradesh • Open to full-time and remote opportunities",
  email: "polachaitu@gmail.com",
  github: "https://github.com/chaitu-ux",
  linkedin: "https://linkedin.com/in/chaitu-pola",
  summary:
    "MCA graduate and Full-Stack Developer with hands-on experience building production-ready applications using the MERN stack. Developed 2+ scalable web applications with 15+ REST API endpoints, serving real-world use cases in mobility and sports domains. Proven ability to deliver end-to-end solutions from concept to deployment, with expertise in modern development practices and collaborative workflows.",
  photo: "/profile.jpg", // place your image in /public/profile.jpg (jpg/png/webp)
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  imageAlt?: string;
};

export const skills: string[] = [
  "React",
  "React Router",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Vite",
  "Python",
  "Java",
  "Git",
  "GitHub",
];

export const projects: Project[] = [
  {
    title: "Scan2Ride – QR‑Based Mobility Sharing Platform",
    description:
      "Full‑stack MERN app for student safety: parents track buses in real time and receive instant onboard/offboard notifications via QR‑scanned ID cards. Secure REST API (15+ endpoints) with JWT Auth; Google Maps for live location; responsive UI with 20+ reusable React components.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Google Maps API"],
    liveUrl: "",
    repoUrl: "https://github.com/chaitu-ux/Scan2Ride",
    image: "/projects/scan2ride-dashboard.jpg",
    imageAlt: "Scan2Ride dashboard showing live attendance, bus tracking, and scanner status with real-time metrics",
  },
  {
    title: "Sports Hub – Interactive Sports Platform",
    description:
      "Dynamic React SPA with sections for events, teams, and player stats across 10+ pages. Client‑side routing with React Router; interactive UI (carousels, galleries). Modular architecture with 40+ reusable components; CSS Modules for scoped styling.",
    tags: ["React", "React Router", "SPA", "CSS Modules"],
    liveUrl: "https://scan2ride.vercel.app/",
    repoUrl: "https://github.com/chaitu-ux/sports_website",
    image: "/projects/sports-hub-screenshot.jpg",
    imageAlt: "Sports Hub website homepage featuring baseball player and navigation menu with modern sports design",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    company: "Technical Hub, Aditya University",
    role: "Project Intern (Full Stack Development)",
    period: "June 2023 – July 2023",
    details: [
      "Led development of SCAN2RIDE platform in Project Space 7.0, simulating enterprise-level development environment",
      "Architected and implemented 15+ REST API endpoints with JWT authentication, reducing security vulnerabilities by 90%",
      "Collaborated with cross-functional team of 5 developers using Agile methodologies and Git workflows",
      "Delivered production-ready application with real-time tracking features using Google Maps API integration",
    ],
  },
  {
    company: "Skill Dzire (AICTE Approved)",
    role: "Artificial Intelligence Intern",
    period: "May 2023 – June 2023",
    details: [
      "Completed intensive 6-week AI/ML program covering machine learning algorithms, data preprocessing, and model evaluation",
      "Built and deployed 3 AI models with 85%+ accuracy for classification and prediction tasks",
      "Gained expertise in Python libraries including TensorFlow, Pandas, and NumPy for data science applications",
    ],
  },
];

export type Achievement = {
  title: string;
  description: string;
  metric?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Full-Stack Application Development",
    description: "Successfully delivered 2 production-ready applications with modern tech stack",
    metric: "2+ Projects"
  },
  {
    title: "API Development Excellence",
    description: "Designed and implemented secure REST APIs with comprehensive authentication",
    metric: "15+ Endpoints"
  },
  {
    title: "Real-time Integration",
    description: "Integrated Google Maps API for live location tracking and notifications",
    metric: "100% Uptime"
  },
  {
    title: "Component Architecture",
    description: "Built reusable React component library for scalable frontend development",
    metric: "40+ Components"
  }
];


