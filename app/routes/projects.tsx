import type { Route } from "./+types/projects";
import { projects } from "../content/site";
import { ScrollReveal } from "../components/scroll-reveal";

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

      <div className="grid gap-8">
        {projects.map((project, index) => {
          const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
          return (
            <ScrollReveal 
              key={project.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <article className="card group">
                <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                  {/* Project Image */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-800 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 group-hover:shadow-xl transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.imageAlt || `${project.title} screenshot`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center">
                                <div class="text-center">
                                  <div class="w-16 h-16 mx-auto mb-4 bg-black/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                                    <svg class="w-8 h-8 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                  <p class="text-sm font-medium text-gray-800 dark:text-gray-200">${project.title}</p>
                                  <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">Image not available</p>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      {/* Image overlay with description */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {hasLive ? (
                        <a 
                          className="button-primary"
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          Live Demo
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <button 
                          type="button"
                          disabled
                          title="Coming soon"
                          className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-white bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                        >
                          Live Demo (Coming soon)
                        </button>
                      )}

                      {project.repoUrl && (
                        <a 
                          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          View Code
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}

                      {!hasLive && project.repoUrl && (
                        <a 
                          className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 border border-primary-200/60 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                          href={`${project.repoUrl}#readme`} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          Case Study
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
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


