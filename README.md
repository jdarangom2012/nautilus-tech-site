# 🌊 Nautilus Tech
Sitio web oficial de la startup Nautilus Tech

🌐 https://nautilustech.co

## Tecnologías
- HTML + TailwindCSS + JavaScript
- Hosting: GitHub Pages (dominio personalizado)
- Integraciones: Formspree, Netlify Forms, Power BI

## Estructura del proyecto
- /css, /js, /img, index.html, sitemap.xml, robots.txt, CNAME

## Desarrollos destacados
- 🧩 InduGestor — Plataforma MES modular
- 🚗 AutoInventory — Sistema para concesionarios
- 🤖 PeluBot — Asistente IA vía WhatsApp

## Publicación (GitHub Pages)
1) Subir a GitHub en la rama main (raíz del proyecto).
2) En Settings → Pages: Branch: main, Folder: / (root).
3) Crear archivo `CNAME` con: `nautilustech.co`.
4) Configurar DNS del dominio:
   - A @ 185.199.108.153
   - A @ 185.199.109.153
   - A @ 185.199.110.153
   - A @ 185.199.111.153
   - CNAME www <tuusuario>.github.io
5) En Settings → Pages: setear dominio `nautilustech.co` y activar Enforce HTTPS.

## SEO y seguridad
- Redirección automática a HTTPS y no-www: `js/redirect.js` incluido en `index.html`.
- `robots.txt` y `sitemap.xml` disponibles en la raíz.
- Metadatos: canonical, og:url, twitter:url, keywords y descripción.

## Formulario de contacto
- Principal: Formspree (placeholder hasta tener ID real).
- Alternativa: Netlify Forms listo para activar.

## Desarrollo local
```bash
npm install
npm run dev   # watch
npm run build # producción
```

© 2025 Nautilus Tech — Todos los derechos reservados.



