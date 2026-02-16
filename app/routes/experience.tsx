import type { Route } from "./+types/experience";
import { experience } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Internships & Training | Portfolio" },
    { name: "description", content: "Internships and training programs" },
  ];
}

export default function Experience() {
  return (
    <main className="container-prose py-16">
      <div className="text-center mb-10 animate-slide-fade-up">
        <h1 className="gradient-text mb-2">Internships & Training</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Practical experience aligned with modern web development.
        </p>
      </div>

      {/* Subtle vertical timeline matching theme colors */}
      <ol className="relative ml-4 border-l border-gray-200 dark:border-gray-800 space-y-8">
        {experience.map((e, index) => (
          <li key={e.company} className="relative pl-6 animate-slide-fade-up" style={{ animationDelay: `${index * 0.06}s` }}>
            <span className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary-500 shadow" />
            <article className="card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{e.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{e.company}</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {e.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </main>
  );
}


