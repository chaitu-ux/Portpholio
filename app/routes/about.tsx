import type { Route } from "./+types/about";
import { site } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Portfolio" },
    { name: "description", content: "Learn more about my journey, passion for technology, and what drives me as a developer" },
  ];
}

export default function About() {
  return (
    <main className="container-prose py-16">
      <div className="relative text-center mb-12 animate-slide-fade-up">
        <div className="absolute -z-10 left-1/2 -translate-x-1/2 top-8 h-12 w-72 rounded-full bg-gradient-to-r from-primary-600 via-fuchsia-500 to-accent-500 opacity-15 blur-2xl pointer-events-none" />
        <h1 className="gradient-text mb-3">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {site.summary}
        </p>
      </div>

      {/* Focused content without photo */}
      <section className="grid gap-8 md:grid-cols-3">
        <article className="md:col-span-2 card animate-slide-fade-up">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hello! I'm {site.name.split(' ')[0]}</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I craft modern, accessible web experiences with React, TypeScript, and clean UI systems. I care about
            performance, clarity, and thoughtful interactions that feel effortless. I enjoy collaborating with teams
            and turning complex requirements into elegant, maintainable solutions.
          </p>
        </article>

        <aside className="card animate-slide-fade-up hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.05s' }}>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Facts</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Based in: Remote-first</li>
            <li>Frontend: React, React Router, Tailwind</li>
            <li>Backend: Node.js, Express</li>
            <li>Tools: Git, Vite, Netlify</li>
          </ul>
        </aside>
      </section>

      {/* Highlights minimal and on-theme */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Fast Learner', color: 'primary' },
          { title: 'Team Player', color: 'accent' },
          { title: 'Problem Solver', color: 'green' },
          { title: 'Detail Oriented', color: 'purple' },
        ].map((item, i) => (
          <div key={item.title} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 animate-slide-fade-up hover:-translate-y-1 hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${0.08 * i}s` }}>
            <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Consistent and reliable in delivery.</p>
          </div>
        ))}
      </section>

      <div className="text-center mt-12 animate-slide-fade-up" style={{ animationDelay: '0.2s' }}>
        <a href="/contact" className="button-gradient animate-button-gradient ring-pulse rounded-md px-6 py-3 inline-flex items-center gap-2">
          Let's Work Together
        </a>
      </div>
    </main>
  );
}


