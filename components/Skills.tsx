"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-[7.5rem] py-24 md:py-32 bg-ink-soft/40">
      <div className="max-w-container mx-auto">
        <Reveal>
          <p className="eyebrow mb-6">Software & Herramientas</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-paper text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tightest mb-16 max-w-xl">
            Con qué trabajo
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <div className="py-5 border-b border-ink-line">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-paper text-base md:text-lg font-display">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-paper-dim">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-px bg-ink-line w-full relative overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 h-px bg-emerald-bright"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
