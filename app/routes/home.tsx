import type { Route } from "./+types/home";
import { Hero } from "../welcome/hero";
import { site } from "../content/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${site.name} — ${site.role}` },
    { name: "description", content: site.summary },
  ];
}

export default function Home() {
  return <Hero />;
}
