import type { Route } from "./+types/projects";
import { projects } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Portfolio" },
    { name: "description", content: "Selected projects and case studies" },
  ];
}

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.liveUrl && (
                <a className="button-primary inline-flex" href={p.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {p.repoUrl && (
                <a className="tag inline-flex" href={p.repoUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}


