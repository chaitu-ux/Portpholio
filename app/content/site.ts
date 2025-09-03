export const site = {
  name: "Chaitanya Kumar Pola",
  role: "Full-Stack Developer | MERN | Java | Python",
  location: "Bobbili, Andhra Pradesh • Open to full-time and remote opportunities",
  email: "polachaitu@gmail.com",
  github: "https://github.com/chaitu-ux",
  linkedin: "https://linkedin.com/in/chaitu-pola",
  summary:
    "Detail-oriented MCA graduate with a strong foundation in full-stack MERN development. Passionate about building scalable software solutions and solving complex problems to contribute to impactful projects. Seeking an entry-level Software Developer role to apply technical skills in a dynamic team environment.",
  photo: "/profile.jpg", // place your image in /public/profile.jpg (jpg/png/webp)
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
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
  },
  {
    title: "Sports Hub – Interactive Sports Platform",
    description:
      "Dynamic React SPA with sections for events, teams, and player stats across 10+ pages. Client‑side routing with React Router; interactive UI (carousels, galleries). Modular architecture with 40+ reusable components; CSS Modules for scoped styling.",
    tags: ["React", "React Router", "SPA", "CSS Modules"],
    liveUrl: "",
    repoUrl: "https://github.com/chaitu-ux/sports_website",
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
      "Participated in Project Space 7.0 simulating real‑world development.",
      "Collaborated on SCAN2RIDE across the SDLC using FSD methodologies.",
      "Used industry‑standard tools and workflows.",
    ],
  },
  {
    company: "Skill Dzire (AICTE Approved)",
    role: "Artificial Intelligence Intern",
    period: "May 2023 – June 2023",
    details: [
      "Completed a six‑week internship focusing on AI core concepts and practice.",
      "Gained foundational skills in AI principles and emerging technologies.",
    ],
  },
];


