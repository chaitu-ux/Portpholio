import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { Navbar } from "./ui/navbar";
import { Footer } from "./ui/footer";
import "./app.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Set initial theme before hydration to avoid flash/mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=s? s==='dark': m;var e=document.documentElement;if(isDark){e.classList.add('dark');e.style.colorScheme='dark';e.setAttribute('data-theme','dark');}else{e.classList.remove('dark');e.style.colorScheme='light';e.setAttribute('data-theme','light');}}catch(e){}})();",
          }}
        />
        {/* Theme color for mobile status bar; will be updated dynamically */}
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-950">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: any) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
