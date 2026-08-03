"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-expo ${
        scrolled
          ? "border-b border-ink-line bg-ink/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-container items-center justify-between px-6 md:px-12 lg:px-[7.5rem]">
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-[0.08em] text-paper transition-colors duration-300 hover:text-emerald-bright"
        >
          SV<span className="text-emerald-bright">.</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive("")}
                className="relative py-2 text-sm text-paper-dim transition-colors duration-300 hover:text-paper"
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-emerald-bright transition-all duration-300 ease-expo ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center rounded-full border border-emerald-dim px-5 py-2.5 text-sm text-paper transition-all duration-300 ease-expo hover:border-emerald hover:bg-emerald md:inline-flex"
        >
          Hablemos
        </a>
      </nav>
    </motion.header>
  );
}
