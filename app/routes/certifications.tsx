import type { Route } from "./+types/certifications";

type Cert = {
  title: string;
  issuer: string;
  year?: string;
  image?: string; // path in /public/certifications
  link?: string;
};

const certifications: Cert[] = [
  // Example entries; replace or extend as you add images/links
  // { title: "JavaScript (Intermediate)", issuer: "HackerRank", year: "2024", image: "/certifications/js-intermediate.png", link: "https://www.hackerrank.com/certificates/..." },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Certifications | Portfolio" },
    { name: "description", content: "Badges and certifications" },
  ];
}

export default function Certifications() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Certifications</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Add your badges to <code>/public/certifications</code> and update this list.</p>

      {certifications.length === 0 ? (
        <p className="mt-6">No certifications added yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((c) => (
            <article key={c.title} className="card">
              {c.image && (
                <img src={c.image} alt={c.title} className="w-full h-40 object-contain" />
              )}
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.issuer}{c.year ? ` • ${c.year}` : ""}</p>
              {c.link && (
                <a href={c.link} className="button-primary mt-4 inline-flex" target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}


