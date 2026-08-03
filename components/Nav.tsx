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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-[7.5rem] h-20">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tightest text-paper"
        >
          JR<span className="text-emerald-bright">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive("")}
                className="relative text-sm text-paper-dim hover:text-paper transition-colors duration-300 py-2"
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-emerald-bright transition-all duration-300 ease-expo ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-emerald-dim text-sm text-paper px-5 py-2.5 rounded-full hover:bg-emerald hover:border-emerald transition-all duration-300 ease-expo"
        >
          Hablemos
        </a>
      </nav>
    </motion.header>
  );
}
