import { Link } from "react-router";
import { site } from "../content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="mt-16 relative">
      {/* CTA strip */}
      <div className="container-prose mb-8">
        <div className="card flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-fade-up">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Have a project in mind? Let’s build something great together.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="button-gradient animate-button-gradient rounded-md px-5 py-2 inline-flex items-center gap-2">
              Contact Me
            </Link>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
      {/* Subtle gradient top border */}
      <div className="h-px bg-gradient-to-r from-primary-600 via-fuchsia-500 to-accent-500 opacity-30" />
      <div className="container-prose py-10">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold">
              <span className="text-primary-600">CK</span>
              <span className="text-gray-900 dark:text-white ml-1">Portfolio</span>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Building clean, fast, and accessible web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link to="/#home" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link></li>
              <li><Link to="/#about" className="hover:text-primary-600 dark:hover:text-primary-400">About</Link></li>
              <li><Link to="/#projects" className="hover:text-primary-600 dark:hover:text-primary-400">Projects</Link></li>
              <li><Link to="/#contact" className="hover:text-primary-600 dark:hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><Link to="/resume" className="hover:text-primary-600 dark:hover:text-primary-400">Resume</Link></li>
              <li><a href="/resume.pdf" download className="hover:text-primary-600 dark:hover:text-primary-400">Download PDF</a></li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Connect</h3>
            <div className="flex gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 00-3.162 19.49c.5.09.683-.217.683-.483 0-.237-.009-.868-.013-1.705-2.78.603-3.366-1.34-3.366-1.34-.454-1.154-1.109-1.463-1.109-1.463-.907-.62.07-.607.07-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.832.09-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.688-4.566 4.937.359.31.679.923.679 1.861 0 1.343-.012 2.425-.012 2.754 0 .268.181.58.688.481A10 10 0 0012 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 23h4V7h-4v16zM8 7v16h4v-8.5c0-2.347 3-2.536 3 0V23h4v-9.82c0-5.89-6.5-5.67-7-2.773V7H8z"/></svg>
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="currentColor" />
                  <path d="M5 8l7 5 7-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="5" y="8" width="14" height="8" rx="2" ry="2" fill="none" stroke="white" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <p>© {year} Chaitanya Kumar Pola</p>
          <div className="flex items-center gap-2">
            <a href={`mailto:${site.email}`} className="footer-action inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email
            </a>
            <button onClick={scrollTop} className="footer-action inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors transition-transform duration-200 transform hover:-translate-y-0.5">
              <svg className="w-4 h-4 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/><line x1="12" y1="9" x2="12" y2="21"/></svg>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}


