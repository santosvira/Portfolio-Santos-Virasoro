"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-[7.5rem] py-24 md:py-32">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Proyectos destacados</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-paper text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tightest max-w-xl">
                Trabajo seleccionado
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm text-paper-dim hover:text-emerald-bright transition-colors duration-300"
            >
              Ver todos los proyectos
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.08}
              className={project.size === "large" ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <a
      href="#"
      data-cursor-hover
      className="group block"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-ink-soft ${
          project.size === "large" ? "aspect-[16/8]" : "aspect-[4/5] md:aspect-[16/12]"
        }`}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
        <div className="absolute inset-0 bg-emerald/0 group-hover:bg-emerald/10 transition-colors duration-500 ease-expo" />

        <div className="absolute top-5 left-5 flex items-center gap-3">
          <span className="font-mono text-xs text-paper bg-ink/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ink-line">
            {project.category}
          </span>
        </div>

        <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-ink/60 backdrop-blur-sm border border-ink-line flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400 ease-expo">
          <ArrowUpRight className="w-4 h-4 text-paper" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="font-display font-medium text-paper text-xl md:text-2xl mb-2">
            {project.title}
          </h3>
          <p className="text-paper-dim text-sm max-w-md mb-4 hidden md:block">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-paper-dim border border-ink-line px-2.5 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
