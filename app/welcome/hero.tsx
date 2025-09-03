import { site } from "../content/site";

export function Hero() {
  return (
    <section className="container-prose pt-24 pb-12 animate-fade-in-up">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-medium text-primary-600">Hello, I'm</p>
          <h1>{site.name}</h1>
          <p>{site.role} — {site.summary}</p>
          <div className="flex gap-3 pt-2">
            <a href="/projects" className="button-primary">View Projects</a>
            <a href="/contact" className="tag">Contact</a>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          {site.photo ? (
            <div className="h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full border border-gray-300 dark:border-gray-700 shadow overflow-hidden">
              <img
                src={site.photo}
                alt={site.name}
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          ) : (
            <div className="card h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64" />
          )}
        </div>
      </div>
    </section>
  );
}


