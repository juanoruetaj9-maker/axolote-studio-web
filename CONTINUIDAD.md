# Axolote Studio — Estado y continuidad del proyecto

> **Para Claude / Chat de Proyectos:** este archivo es el contexto completo para retomar el trabajo. Léelo entero antes de continuar. El usuario es **Juan**. Responde en español.

---

## 1. Qué es
**Axolote Studio** — sitio web de marketing del estudio creativo digital del sureste mexicano (bodas, XV años, branding, landing pages). Solo frontend, sin backend ni base de datos: es un sitio estático + demos interactivas de portafolio.

- **Stack:** React 19 + Vite 8 + Tailwind CSS v4 + React Router v7 + framer-motion.
- **Dev local:** `npm run dev` → http://localhost:5173

## 2. Diseño actual (Dark Luxury Studio — junio 2026)
El usuario dio carta blanca completa para rediseñar sin restricciones de paleta ni logo.

- Fondo void: `#080808` · Superficie elevada: `#0D0D0D` / `#111111`
- **Acento principal: `#FF2D78`** (rosa eléctrico, confirmado) · hover `#E0155F`
- Contraste claro: `#F5F5F2` · Texto primario `#FFFFFF` · Texto muted `#666`/`#444`/`#555`
- Tipografía: **Syne 800** (headings/navbar/números) + **Manrope 400/500** (body) + Manrope 600 uppercase tracking (labels)
- Navbar flotante `top-4 left-4 right-4` pill, footer horizontal minimal, hero full-viewport, ticker rosa de alto impacto, portafolio en grayscale que satura en hover

## 3. Estado actual (al 2026-07-15)

- ✅ Sitio completo: Home, Servicios, Portafolio, Proceso, Nosotros, Contacto.
- ✅ Demos de portafolio interactivas: Invitaciones, Landing Pages, Branding, + 4 proyectos individuales (Boda Mariana&Diego, XV Isabella, Graduación Emmanuel, Arq. Roberto Díaz).
- ✅ Redesign Dark Luxury Studio aplicado.
- ✅ **Fix — countdown de invitaciones** (2026-07-15): 4 páginas (Mariana, Isabella, Emmanuel, Demo Invitaciones) duplicaban un hook de countdown que se congelaba en `00:00:00:00` sin limpiar el `setInterval` cuando la fecha objetivo ya había pasado. Se extrajo a `src/hooks/useCountdown.js` (única fuente, limpia el interval al expirar). Verificado con build + lint + prueba en navegador.
- ✅ **Dependencia agregada:** `framer-motion` (^12.41.0).
- 🔍 **Auditoría de seguridad/código (2026-07-15):** sin secrets ni API keys expuestos (sitio 100% estático, sin `.env`). Hallazgos menores no críticos y no arreglados aún:
  - `src/pages/Contacto.jsx` — el campo "Tu nombre *" no tiene validación real (`required` o chequeo al enviar); el link de WhatsApp queda activo aunque el campo esté vacío.
  - Las imágenes de portafolio/demos usan stock de Unsplash (no son fotos reales de clientes) — no es bug de código, pero vale la pena que Juan lo sepa antes de mostrarlo como pitch real.

## 4. Infraestructura / accesos
- **Repo GitHub (privado):** https://github.com/juanoruetaj9-maker/axolote-studio-web (rama `main`)
- Sin Supabase, sin variables de entorno, sin deploy conocido documentado aquí — si ya está en Vercel/Netlify, anotar la URL la próxima vez que se toque.

## 5. Puesta en marcha en una máquina nueva
```bash
git clone https://github.com/juanoruetaj9-maker/axolote-studio-web.git
cd axolote-studio-web
npm install
npm run dev
```
No requiere `.env` — no hay backend ni claves.

## 6. Estructura rápida
- `src/pages/` — Home, Servicios, Portafolio, Proceso, Nosotros, Contacto, DemoInvitaciones, DemoLandingPages, DemoBranding, y los 4 `Proyecto*.jsx` de portafolio individual.
- `src/components/` — `Navbar`, `Footer`, `DemoBanner` (CTA de WhatsApp en las demos), `MusicPlayerMock`, `FloatingWhatsApp`.
- `src/hooks/useCountdown.js` — hook compartido de cuenta regresiva (usado por las 4 páginas con countdown de evento).
- `src/data/` — datos estáticos de proyectos/portafolio.

## 7. Próximo paso al retomar
1. ✅ Sitio + demos + redesign dark luxury.
2. ✅ Fix del countdown congelado.
3. **Pendiente (opcional, no crítico):** validar el campo de nombre en el formulario de contacto antes de habilitar el link de WhatsApp.
4. **Pendiente (decisión de Juan):** reemplazar las fotos de stock de Unsplash por fotografía real si el portafolio se va a usar en pitches reales a clientes.
5. **Siguiente** — definir con Juan qué sigue: deploy a producción (si no existe ya), más proyectos de portafolio, o ajustes de contenido/copy.
