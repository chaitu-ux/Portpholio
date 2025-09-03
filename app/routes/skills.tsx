import type { Route } from "./+types/skills";
import { skills } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skills | Portfolio" },
    { name: "description", content: "Technical skills and tools" },
  ];
}

export default function Skills() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Skills</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </main>
  );
}


