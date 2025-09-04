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
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="gradient-text mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get to know the person behind the code and discover what drives my passion for technology.
        </p>
      </div>

      <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        {/* Profile Image */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            {site.photo ? (
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                <img
                  src={site.photo}
                  alt={site.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                  {site.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello! I'm {site.name.split(' ')[0]}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {site.summary}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating digital solutions that make a real impact. 
              Whether it's building responsive web applications, designing intuitive user interfaces, 
              or solving complex backend challenges, I love turning ideas into reality through code.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Fast Learner</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Quick to adapt to new technologies and frameworks
              </p>
            </div>

            <div className="p-4 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Team Player</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Collaborative approach with strong communication skills
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Problem Solver</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Analytical mindset with creative solutions
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Detail Oriented</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Meticulous attention to code quality and user experience
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <a href="/contact" className="button-primary">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            What I'm Looking For
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full-Time Roles</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Software Developer positions where I can grow and contribute
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Remote Work</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Flexible remote opportunities with global teams
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth Opportunities</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Companies that invest in learning and development
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


