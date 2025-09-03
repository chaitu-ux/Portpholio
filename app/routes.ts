import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("experience", "routes/experience.tsx"),
  route("projects", "routes/projects.tsx"),
  route("skills", "routes/skills.tsx"),
  route("contact", "routes/contact.tsx"),
  route("certifications", "routes/certifications.tsx"),
] satisfies RouteConfig;
