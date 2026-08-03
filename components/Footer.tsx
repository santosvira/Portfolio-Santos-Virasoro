import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-[7.5rem] py-10 border-t border-ink-line">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-paper-dim">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <p className="font-mono text-xs text-paper-dim">
          Diseñado y desarrollado en {profile.location}
        </p>
      </div>
    </footer>
  );
}
