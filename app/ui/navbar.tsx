import { Link, useLocation } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { to: "/#home", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#skills", label: "Skills" },
  { to: "/#projects", label: "Projects" },
  { to: "/#certifications", label: "Certifications" },
  { to: "/#achievements", label: "Achievements" },
  { to: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resumeBurst, setResumeBurst] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    // Trigger brief confetti burst
    setResumeBurst(true);
    window.setTimeout(() => setResumeBurst(false), 1600);
  };

  // IntersectionObserver to highlight current section (home page only)
  const isHomePage = useMemo(() => location.pathname === "/", [location.pathname]);
  useEffect(() => {
    if (!isHomePage || typeof window === 'undefined') return;
    const ids = ["home","about","experience","skills","projects","certifications","achievements","contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] }
    );
    elements.forEach((el) => observer.observe(el));
    
    // Fallback: compute active section on scroll for short sections near bottom
    const onScrollFallback = () => {
      const y = 120; // nav offset
      let candidate = elements[0]?.id || "home";
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= y) candidate = el.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) candidate = elements[elements.length - 1]?.id || candidate;
      setActiveSection(candidate);
    };
    window.addEventListener('scroll', onScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollFallback);
    };
  }, [isHomePage]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <nav className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold group">
          <span className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">CK</span>
          <span className="text-gray-900 dark:text-white ml-1">Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const section = item.to.replace("/#", "").replace("/", "");
              const isActive = isHomePage && activeSection === (section || "home");
              return (
                <li key={item.to} className="relative">
                  <Link
                    to={item.to}
                    className={`group relative inline-flex items-center transition-colors duration-300 ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-primary-600 via-fuchsia-500 to-accent-500 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className={`flex items-center gap-3 ${resumeBurst ? "confetti" : ""}`}>
            <ThemeToggle />
            <a
              href="/resume"
              aria-label="Download Resume PDF"
              title="Download Resume (PDF)"
              className="button-gradient animate-button-gradient ring-pulse text-xs px-4 py-2 rounded-md inline-flex items-center gap-2"
              rel="noopener"
              onClick={handleResumeClick}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors duration-300"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800 animate-slide-fade-down">
          <div className="container-prose py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 ${resumeBurst ? "confetti" : ""}`}>
              <a
                href="/resume"
                aria-label="Download Resume PDF"
                title="Download Resume (PDF)"
                className="button-gradient animate-button-gradient ring-pulse text-sm px-4 py-2 w-full text-center inline-flex items-center justify-center gap-2 rounded-md"
                rel="noopener"
                onClick={() => { handleResumeClick(); closeMobileMenu(); }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


