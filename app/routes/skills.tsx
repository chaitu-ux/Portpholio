import type { Route } from "./+types/skills";
import { skills } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skills | Portfolio" },
    { name: "description", content: "Technical skills and tools I use to build amazing applications" },
  ];
}

// Categorize skills for better organization
const skillCategories = {
  "Frontend": ["React", "React Router", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "Python", "Java"],
  "Database": ["MongoDB", "REST APIs"],
  "Tools": ["Git", "GitHub", "Vite"]
};

export default function Skills() {
  return (
    <main className="container-prose py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="gradient-text mb-4">Technical Skills</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Skills by Category */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
          <div 
            key={category}
            className="card animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              {category}
            </h3>
            <div className="space-y-3">
              {categorySkills.map((skill, skillIndex) => (
                <div 
                  key={skill}
                  className="skills-item flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill}
                  </span>
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All Skills Grid */}
      {/* <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Complete Skill Set
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className="tag hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:scale-105 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}

      {/* Experience Level */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Experience Level
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">React, TypeScript, Modern CSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express, REST APIs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full-Stack</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">End-to-end development</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


