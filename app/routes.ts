import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("experience", "routes/experience.tsx"),
  route("projects", "routes/projects.tsx"),
  route("skills", "routes/skills.tsx"),
  route("achievements", "routes/achievements.tsx"),
  route("certifications", "routes/certifications.tsx"),
  route("contact", "routes/contact.tsx"),
  route("resume", "routes/resume.tsx"),
] satisfies RouteConfig;
