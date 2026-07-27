# Cómo agregar una plantilla nueva

Todo el catálogo vive en un solo archivo: `plantillas.js`. Agregar una plantilla nueva **no requiere tocar ningún `.jsx`** — la galería, el detalle, la página por estilo, el Home y el sitemap se actualizan solos porque todos leen de aquí.

## Pasos

1. Abre `src/data/plantillas.js`.
2. Copia un objeto existente dentro del arreglo `PLANTILLAS` y pégalo al final, antes del `]` de cierre.
3. Cambia los valores:
   - `id`: siguiente número disponible, formato `ax-###` (ver más abajo).
   - `nombre`: el nombre de la plantilla (se muestra tal cual en la galería y el detalle).
   - `estilo`: debe ser uno de los `id` que ya existen en `ESTILOS` (`elegante`, `moderno`, `floral`, `minimalista`, `romantico`, `nocturno`, `tropical`, `vintage`). Si necesitas un estilo nuevo, agrégalo primero al arreglo `ESTILOS`.
   - `eventos`: uno o más `id` de `EVENTOS` (`boda`, `xv`, `babyshower`, `cumpleanos`). Puede aplicar a varios eventos a la vez.
   - `paletaPrincipal` / `paletaSecundaria`: colores hex de referencia, se muestran como swatches en el detalle.
   - `tipografiaTitulo` / `tipografiaCuerpo`: nombres de fuente de referencia (texto libre, no cambian la tipografía real del sitio, son informativos para el cliente).
   - `portada`: imagen principal, se usa en la card de la galería y como primera vista del detalle.
   - `galeria`: arreglo de 2–3 imágenes (incluye la portada como primera).
   - `disponibleEn`: normalmente `['esencial', 'premium', 'experiencia']` — todas las plantillas están disponibles en los 3 paquetes.
   - `destacada`: `true` si quieres que aparezca en la sección "Explora nuestros estilos" del Home (se muestran máximo 4 destacadas).
   - `descripcion`: una línea corta, se usa en la card, el detalle y el JSON-LD de SEO.
4. Guarda el archivo. Corre `npm run dev` y revisa `/plantillas` para confirmar que aparece.
5. Antes de subir a producción corre `npm run build` — el sitemap se regenera solo (`prebuild` corre `scripts/generate-sitemap.mjs`, que lee este mismo archivo).

## Convención de `id`

- Formato `ax-###`, tres dígitos, incremental: `ax-001`, `ax-002`, ... `ax-013`.
- El `id` es **inmutable una vez publicado** — se usa en el mensaje de WhatsApp que recibe el fundador (`ref: ax-00X`), así sabe exactamente qué plantilla vio el cliente. No reutilices ni renumeres ids existentes.

## Especificación de imágenes

Mientras no haya diseños reales del fundador, se usan fotos de stock de Unsplash como placeholder (ver sección siguiente). Cuando lleguen los diseños reales:

- **Proporción:** vertical, 4:5 para `portada`, 9:19 para las vistas dentro del marco de celular (mismo aspect ratio que una pantalla de teléfono).
- **Tamaño recomendado:** 800–1200px de ancho. No hace falta más resolución — se muestran en tarjetas pequeñas y en un marco de celular de ~280px.
- **Formato:** JPG o WebP. WebP si el peso es una preocupación (mejor compresión a igual calidad visual).
- **Peso máximo:** 200KB por imagen. Si el diseño real pesa más, comprímelo antes de subirlo (TinyPNG, Squoosh, etc.) — el sitio no tiene backend que optimice imágenes automáticamente.
- **Dónde alojarlas:** si son fotos de Unsplash, usa la URL directa con parámetros `?w=800&q=75` (ya es el patrón de las 12 plantillas actuales). Si son diseños reales del fundador, súbelas a `public/imagenes/plantillas/` y referencia la ruta local (`/imagenes/plantillas/ax-013-portada.jpg`) en vez de una URL externa.

## Agregar un estilo o evento nuevo

- Estilo nuevo: agrega un objeto a `ESTILOS` con `id`, `nombre` y `descripcion`. Para que la página `/plantillas/:estilo` tenga contenido SEO propio, agrega también un campo `textoSeo` de 130–150 palabras (mismo patrón que los 8 estilos existentes) — si lo omites, la página funciona igual pero sin ese párrafo.
- Evento nuevo: agrega un objeto a `EVENTOS` con `id`, `nombre` e `icono` (debe ser un nombre de ícono válido de `lucide-react`, ya usado en `PlantillaDetalle.jsx` vía el mapa `ICONOS`).
