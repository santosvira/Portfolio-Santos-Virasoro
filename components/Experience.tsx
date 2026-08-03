import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-[7.5rem] py-24 md:py-32">
      <div className="max-w-container mx-auto">
        <Reveal>
          <p className="eyebrow mb-6">Experiencia</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-paper text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tightest mb-16 max-w-xl">
            Trayectoria profesional
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.08}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-ink-line last:border-b hover:bg-ink-soft/50 transition-colors duration-500 ease-expo md:px-6 md:-mx-6">
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-emerald-bright">
                    {role.period}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display font-medium text-paper text-lg md:text-xl">
                    {role.role}
                  </h3>
                  <p className="text-paper-dim text-sm mt-1">{role.company}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-paper-dim text-sm md:text-base leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
