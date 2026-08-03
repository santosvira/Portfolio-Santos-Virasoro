import Reveal from "./Reveal";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-[7.5rem] py-24 md:py-48">
      <div className="max-w-container mx-auto">
        <Reveal>
          <p className="eyebrow mb-6">Sobre mí</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display font-semibold text-paper text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-tightest max-w-2xl">
                {about.intro}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-paper-dim text-base md:text-lg leading-relaxed max-w-xl">
                {about.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 pl-6 border-l border-emerald-dim">
                <p className="text-paper text-base md:text-lg leading-relaxed max-w-xl italic">
                  {about.philosophy}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <p className="eyebrow mb-5">Herramientas principales</p>
              <ul className="flex flex-col">
                {about.tools.map((tool, i) => (
                  <li
                    key={tool}
                    className="flex items-center justify-between py-4 border-b border-ink-line group"
                  >
                    <span className="text-paper text-base group-hover:text-emerald-bright transition-colors duration-300">
                      {tool}
                    </span>
                    <span className="font-mono text-xs text-paper-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
