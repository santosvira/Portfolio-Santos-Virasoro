
import Link from "next/link";
import { ArrowLeft, Play, ArrowUpRight } from "lucide-react";

const trabajos = [
  {
    titulo: "Proyecto audiovisual 01",
    descripcion: "Edición de contenido para redes sociales.",
    categoria: "Video Editing",
  },
  {
    titulo: "Proyecto audiovisual 02",
    descripcion: "Contenido audiovisual para plataformas digitales.",
    categoria: "Social Media",
  },
  {
    titulo: "Proyecto audiovisual 03",
    descripcion: "Edición y postproducción de video.",
    categoria: "Postproducción",
  },
];

export default function ArtisumPage() {
  return (
    <main className="min-h-screen bg-[#080a09] text-white">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          SV<span className="text-emerald-400">.</span>
        </Link>

        <Link
          href="/#projects"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition"
        >
          <ArrowLeft size={16} />
          Volver al portfolio
        </Link>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-6">
          Portfolio audiovisual / 2025
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Proyecto <span className="text-emerald-400">Artisum.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Selección de trabajos realizados como editor de video
          freelance para Artisum, entre marzo y septiembre de 2025.
          Edición de contenido audiovisual para clientes y
          plataformas digitales.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {["Premiere Pro", "After Effects", "Video Editing", "Social Media"].map(
            (skill) => (
              <span
                key={skill}
                className="border border-white/15 rounded-full px-4 py-2 text-xs text-gray-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold">
            Trabajos seleccionados
          </h2>
          <span className="text-gray-500 text-sm">
            2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trabajos.map((trabajo, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#101513]"
            >
              <div className="aspect-video bg-black overflow-hidden">
  {index === 0 ? (
    <iframe
      src="https://drive.google.com/file/d/1LiixEc4wQ-LMy4-Vqenu--cslhQhbbhA/preview"
      title="Trabajo audiovisual Artisum 01"
      className="w-full h-full"
      allow="fullscreen"
      allowFullScreen
      loading="lazy"
    />
  ) : (
    <div className="w-full h-full bg-[#17221d] flex items-center justify-center">
      <Play size={40} className="text-emerald-400 opacity-60" />
    </div>
  )}
</div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-emerald-400 text-xs mb-3">
                      {trabajo.categoria}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">
                      {trabajo.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {trabajo.descripcion}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-500"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 mt-20 py-10 text-center text-gray-500 text-sm">
        Santos Virasoro — Portfolio audiovisual
      </footer>
    </main>
  );
}

