import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume | Portfolio" },
    { name: "description", content: "Preview and download my resume (PDF)" },
  ];
}

export default function Resume() {
  return (
    <main className="container-prose py-16">
      <div className="text-center mb-6 animate-fade-in-up">
        <h1 className="gradient-text mb-2">Resume</h1>
        <p className="text-gray-600 dark:text-gray-300">Preview below or download the PDF.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6 animate-slide-fade-up">
        <a
          href="/resume.pdf"
          download
          className="button-gradient animate-button-gradient ring-pulse inline-flex items-center gap-2 rounded-md"
          aria-label="Download Resume PDF"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <span>Download PDF</span>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3h7v7"/>
            <path d="M5 19 21 3"/>
            <path d="M5 12v7h7"/>
          </svg>
          <span>Open in new tab</span>
        </a>
      </div>

      <div className="card animate-slide-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="relative w-full" style={{ paddingTop: '141.4%' }}>
          <iframe
            title="Resume PDF preview"
            src="/resume.pdf#view=FitH"
            className="absolute inset-0 w-full h-full rounded-md"
          />
        </div>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">If the preview doesn't load, use the buttons above to download or open.</p>
      </div>
    </main>
  );
}


