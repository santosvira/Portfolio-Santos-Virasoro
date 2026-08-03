# Portfolio — Julián Rocca (placeholder)

Sitio de portfolio construido con Next.js 14 (App Router), Tailwind CSS y Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Cómo personalizarlo

1. **Contenido**: todo el texto (nombre, bio, experiencia, proyectos, skills, email) está centralizado en `lib/data.ts`. Reemplazá los valores placeholder por los tuyos — no hace falta tocar los componentes.
2. **Imágenes de proyectos**: cada proyecto en `lib/data.ts` tiene un campo `image` con una URL de Unsplash de placeholder. Reemplazalas por tus propias imágenes:
   - Poné tus archivos en `/public/projects/` y usá rutas relativas (ej: `/projects/aura-app.jpg`), o
   - Usá un servicio externo (Cloudinary, etc.) — si es un dominio nuevo, agregalo en `next.config.js` dentro de `images.remotePatterns`.
3. **Color de acento**: está definido en `tailwind.config.ts` bajo `colors.emerald` (verde esmeralda oscuro). Cambiar esos 3 valores hex actualiza el acento en todo el sitio.
4. **Tipografía**: se carga vía `next/font/google` en `app/layout.tsx` (Space Grotesk para títulos, Inter para texto, JetBrains Mono para detalles). Cambiar de fuente es cuestión de reemplazar el import ahí.
5. **Formulario de contacto**: por ahora el formulario en `components/Contact.tsx` solo simula el envío (`setSent(true)`). Para que envíe emails de verdad, conectalo a un servicio como Resend, Formspree o una API route propia en `app/api/contact/route.ts`.

## Estructura

```
app/
  layout.tsx      → fuentes, metadata, wrapper global
  page.tsx        → ensambla todas las secciones
  globals.css     → estilos base, cursor custom, scrollbar
components/
  Nav.tsx         → navegación fija con blur on scroll
  Hero.tsx        → sección principal con animación secuencial
  About.tsx       → quién sos, filosofía, herramientas
  Experience.tsx  → timeline de experiencia
  Projects.tsx    → grid de proyectos destacados
  Skills.tsx      → software con barras de nivel
  Contact.tsx     → formulario + datos de contacto
  Footer.tsx      → footer minimal
  Reveal.tsx      → wrapper reutilizable de fade-in/slide-up on scroll
  CustomCursor.tsx→ cursor custom (solo desktop)
lib/
  data.ts         → todo el contenido editable del sitio
```

## Deploy

El repo está listo para deployar directo en [Vercel](https://vercel.com) (creadores de Next.js) — conectá el repo y el build se configura solo. También funciona en Netlify o cualquier hosting compatible con Next.js.
