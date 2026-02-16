import type { Route } from "./+types/home";
import { Hero } from "../welcome/hero";
import { site } from "../content/site";
import About from "./about";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Achievements from "./achievements";
import Certifications from "./certifications";
import Contact from "./contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${site.name} — ${site.role}` },
    { name: "description", content: site.summary },
  ];
}

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="certifications" className="scroll-mt-24">
        <Certifications />
      </section>

      <section id="achievements" className="scroll-mt-24">
        <Achievements />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </>
  );
}
