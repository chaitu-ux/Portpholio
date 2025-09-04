import type { Route } from "./+types/projects";
import { projects } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Portfolio" },
    { name: "description", content: "Selected projects and case studies showcasing my development skills" },
  ];
}

export default function Projects() {
  return (
    <main className="container-prose py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="gradient-text mb-4">Featured Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting my skills in full-stack development, 
          problem-solving, and creating impactful solutions.
        </p>
      </div>

      <div className="grid gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <article 
            key={project.title} 
            className={`card group animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              {/* Project Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      Project Screenshot
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="order-1 lg:order-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="tag hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {project.liveUrl && (
                    <a 
                      className="button-primary group/btn" 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <span className="relative z-10">Live Demo</span>
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      className="tag hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="card max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Interested in working together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always excited to take on new challenges and create amazing solutions.
          </p>
          <a href="/contact" className="button-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}


