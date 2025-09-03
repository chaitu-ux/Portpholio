import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Internships" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
  { to: "/certifications", label: "Certifications" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 backdrop-blur">
      <nav className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="text-sm font-semibold">
          <span className="text-primary-600">CK</span> Portfolio
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:underline underline-offset-4 ${isActive ? "text-primary-600" : "text-gray-700 dark:text-gray-200"}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="button-primary"
              rel="noopener"
            >
              Download Resume
            </a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}


