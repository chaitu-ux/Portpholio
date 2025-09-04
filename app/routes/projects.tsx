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
        {projects.map((project, index) => (
          <ScrollReveal 
            key={project.title}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 100}
          >
            <article className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
            >
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 group-hover:scale-[1.02] transition-transform duration-500">
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
                              <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p class="text-white text-sm font-medium">${project.title}</p>
                              <p class="text-white/70 text-xs mt-1">Image loading...</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* Image overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium">
                        {project.imageAlt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.repoUrl && (
                    <a 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-lg hover:bg-gray-700 hover:border-primary-500 transition-all duration-300 group/btn" 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-300 group/btn" 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Live Demo
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
          </ScrollReveal>
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


