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
    <main className="container mx-auto px-4 py-12">
      <h1>Internships & Training</h1>
      <ol className="mt-6 space-y-6">
        {experience.map((e) => (
          <li key={e.company} className="card">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{e.company}</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </main>
  );
}


