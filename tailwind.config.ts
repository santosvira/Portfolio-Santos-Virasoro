import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C", // fondo principal
          soft: "#151517",     // fondo secundario / cards
          line: "#232326",     // bordes / divisores
        },
        paper: {
          DEFAULT: "#F5F5F3", // texto primario (blanco cálido)
          dim: "#8C8C91",      // texto secundario
        },
        emerald: {
          DEFAULT: "#1F5E4A", // acento base
          bright: "#2E8067",  // hover / estados activos
          dim: "#163F32",     // fondos sutiles con acento
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        widest2: "0.18em",
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
        "45": "11.25rem",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        "container": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
