import type { Route } from "./+types/contact";
import { site } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Portfolio" },
    { name: "description", content: "Get in touch" },
  ];
}

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Contact</h1>
      <div className="mt-4 space-y-2">
        {site.email && (
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        )}
        {site.github && (
          <p>
            GitHub: <a href={site.github} target="_blank" rel="noreferrer">{site.github}</a>
          </p>
        )}
        {site.linkedin && (
          <p>
            LinkedIn: <a href={site.linkedin} target="_blank" rel="noreferrer">{site.linkedin}</a>
          </p>
        )}
      </div>
    </main>
  );
}


