import { site } from "../content/site";
import { TypingText } from "../components/typing-text";

export function Hero() {
  return (
    <section className="container-prose pt-24 pb-16 min-h-screen flex items-center">
      <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Hello, I'm
            </p>
            <h1 className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {site.name}
            </h1>
            <div className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <TypingText text={site.role} speed={80} delay={1000} />
            </div>
          </div>
          
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {site.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#projects" 
              className="button-primary button-ripple group relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="tag hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {site.github && (
              <a 
                href={site.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-lg bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {site.linkedin && (
              <a 
                href={site.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-lg bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {site.email && (
              <a 
                href={`mailto:${site.email}`}
                className="group p-2 rounded-lg bg-transparent hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-300" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="currentColor" />
                  <path d="M5 8l7 5 7-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="5" y="8" width="14" height="8" rx="2" ry="2" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex items-start justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          {site.photo ? (
            <div className="relative">
              <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full border-4 border-primary-200 dark:border-primary-800 shadow-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                <img
                  src={site.photo}
                  alt={site.name}
                  className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          ) : (
            <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                {site.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


