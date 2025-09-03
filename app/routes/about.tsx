import type { Route } from "./+types/about";
import { site } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Portfolio" },
    { name: "description", content: "About me" },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1>About</h1>
      <p className="mt-4 max-w-3xl">{site.summary}</p>
    </main>
  );
}


