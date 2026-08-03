"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-[7.5rem] py-24 md:py-40">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Contacto</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-paper text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tightest mb-8">
                Hablemos de tu próximo proyecto.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-paper-dim text-base md:text-lg leading-relaxed max-w-sm mb-10">
                Disponible para proyectos freelance y colaboraciones. Respondo en menos de 48 horas.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={`mailto:${profile.email}`}
                data-cursor-hover
                className="group inline-flex items-center gap-3 text-paper text-lg md:text-xl border-b border-ink-line hover:border-emerald-bright transition-colors duration-300 pb-1"
              >
                {profile.email}
                <ArrowUpRight className="w-5 h-5 text-emerald-bright group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-expo" />
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-14 flex gap-8">
                <a href={profile.social.behance} className="text-sm text-paper-dim hover:text-emerald-bright transition-colors duration-300">Behance</a>
                <a href={profile.social.instagram} className="text-sm text-paper-dim hover:text-emerald-bright transition-colors duration-300">Instagram</a>
                <a href={profile.social.linkedin} className="text-sm text-paper-dim hover:text-emerald-bright transition-colors duration-300">LinkedIn</a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col justify-center border border-ink-line rounded-2xl p-10 min-h-[380px]"
                >
                  <p className="eyebrow mb-4">Mensaje enviado</p>
                  <p className="text-paper text-xl md:text-2xl font-display leading-snug">
                    Gracias por escribir. Te voy a responder a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <FormField label="Nombre" type="text" placeholder="Tu nombre" required />
                  <FormField label="Email" type="email" placeholder="tu@email.com" required />
                  <FormField
                    label="Mensaje"
                    as="textarea"
                    placeholder="Contame sobre tu proyecto..."
                    required
                  />
                  <button
                    type="submit"
                    data-cursor-hover
                    className="group relative self-start inline-flex items-center gap-3 border border-emerald-dim text-paper px-8 py-4 rounded-full text-sm overflow-hidden mt-2"
                  >
                    <span className="absolute inset-0 bg-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-expo" />
                    <span className="relative">Enviar mensaje</span>
                    <ArrowUpRight className="relative w-4 h-4" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  as = "input",
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  as?: "input" | "textarea";
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  const baseClasses =
    "w-full bg-transparent border-b border-ink-line focus:border-emerald-bright outline-none text-paper text-base py-3 transition-colors duration-300 placeholder:text-paper-dim/60";

  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs text-paper-dim tracking-widest2 uppercase">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
    </label>
  );
}
