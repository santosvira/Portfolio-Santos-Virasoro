"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-[7.5rem] pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-emerald/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F5F3 1px, transparent 1px), linear-gradient(90deg, #F5F5F3 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-container mx-auto w-full"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          {profile.title}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-paper leading-[0.95] tracking-tightest text-[clamp(2.75rem,8vw,7.5rem)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-paper-dim text-lg md:text-xl leading-relaxed"
        >
          {profile.statement}
        </motion.p>

        <motion.div variants={item} className="mt-12 flex items-center gap-6">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 border border-emerald-dim text-paper px-7 py-3.5 rounded-full text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-expo" />
            <span className="relative">Ver proyectos</span>
            <ArrowDown className="relative w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300 ease-expo" />
          </a>
          <a
            href="#about"
            className="text-sm text-paper-dim hover:text-paper transition-colors duration-300 border-b border-transparent hover:border-emerald-bright pb-0.5"
          >
            Conocer más
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-[7.5rem] flex items-center gap-3"
      >
        <span className="w-8 h-px bg-ink-line" />
        <span className="eyebrow !text-paper-dim">Scroll</span>
      </motion.div>
    </section>
  );
}
