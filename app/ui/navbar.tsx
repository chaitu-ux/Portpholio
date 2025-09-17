import { Link, NavLink } from "react-router";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
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
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:underline underline-offset-4 transition-colors duration-300 ${
                      isActive 
                        ? "text-primary-600 dark:text-primary-400 font-medium" 
                        : "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="button-primary text-xs px-4 py-2"
              rel="noopener"
            >
              Resume
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
        <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800">
          <div className="container-prose py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-lg transition-colors duration-300 ${
                        isActive 
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-medium" 
                          : "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/resume.pdf"
                download
                className="button-primary text-sm px-4 py-2 w-full text-center inline-block"
                rel="noopener"
                onClick={closeMobileMenu}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


