import type { Route } from "./+types/certifications";
import { useState } from "react";

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
  const [preview, setPreview] = useState<Cert | null>(null);

  return (
    <main className="container-prose py-16">
      <div className="text-center mb-8">
        <h1 className="gradient-text mb-2">Certifications</h1>
        <p className="text-gray-600 dark:text-gray-300">Add images to <code>/public/certifications</code> and update the list.</p>
      </div>

      {certifications.length === 0 ? (
        <p className="mt-6 text-center">No certifications added yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <article key={c.title} className="card group">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800">
                {c.image ? (
                  <button onClick={() => setPreview(c)} className="w-full h-full">
                    <img src={c.image} alt={c.title} className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300" />
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                    No image
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{c.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.issuer}{c.year ? ` • ${c.year}` : ""}</p>
              <div className="mt-4 flex gap-3">
                {c.link && (
                  <a href={c.link} className="button-primary" target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                )}
                {c.image && (
                  <button onClick={() => setPreview(c)} className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                    Preview
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setPreview(null)}>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-2xl">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{preview.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{preview.issuer}{preview.year ? ` • ${preview.year}` : ""}</p>
                </div>
                <button onClick={() => setPreview(null)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Close">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="aspect-video bg-gray-50 dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800 rounded-lg overflow-hidden">
                {preview.image && (
                  <img src={preview.image} alt={preview.title} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="mt-4 flex justify-end gap-3">
                {preview.link && (
                  <a href={preview.link} className="button-primary" target="_blank" rel="noreferrer">
                    Open in new tab
                  </a>
                )}
                <button onClick={() => setPreview(null)} className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


