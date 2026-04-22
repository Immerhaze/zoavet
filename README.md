<div align="center">
Zóavet
Modern Marketing Site for a Veterinary Clinic
A fast, mobile-first website built with Astro — designed to turn clinic visitors into booked appointments.
🔗 Live Site · 🛠 Stack
</div>

✨ Overview
Zóavet is the official marketing website for a veterinary clinic. The goal was simple: a clean, trustworthy digital presence that loads instantly, looks at home on mobile, and makes it obvious how to contact or book an appointment.
Built with Astro for maximum performance — zero client-side JavaScript where none is needed, full control over what ships to the browser, and perfect Lighthouse scores.

📸 Screenshots

![landing hero with CTA](https://github.com/Immerhaze/zoavet/blob/master/public/screenshots/1.png) — landing hero with CTA

![Team](https://github.com/Immerhaze/zoavet/blob/master/public/screenshots/2.png) — Team section

![Services](https://github.com/Immerhaze/zoavet/blob/master/public/screenshots/3.png) — Services

![Contact](https://github.com/Immerhaze/zoavet/blob/master/public/screenshots/4.png) — Contact options

![FQA](https://github.com/Immerhaze/zoavet/blob/master/public/screenshots/5.png) — fqa

🎯 Features

Static-first architecture — Astro ships zero JS by default, resulting in sub-second loads.
Services catalog — presenting every veterinary service offered with clean, scannable cards.
Mobile-first layout — optimized for the majority of veterinary traffic (mobile users).
Accessible navigation — semantic HTML, keyboard-friendly, ARIA where appropriate.
Brand-consistent design — based on the clinic's official brand board.
SEO-optimized — meta tags, Open Graph, structured data ready.

🛠 Tech Stack
LayerTechnologyFrameworkAstroLanguageTypeScript / JavaScriptStylingTailwind CSSHostingVercel
🏗 Why Astro?
Astro was the right choice for a marketing site because:

Content-driven: the site is mostly static content — services, about, contact. Astro's zero-JS-by-default philosophy wins here over a full SPA/SSR framework.
Islands architecture: I can still add interactive components (booking widget, image gallery) as isolated islands without shipping a full React bundle.
Performance by default: no hydration overhead, minimal CSS, automatic optimizations.
Developer experience: Astro components feel like familiar HTML + templating, making it easy to iterate on design.

🚀 Getting Started
bash# Clone and install
git clone https://github.com/Immerhaze/zoavet.git
cd zoavet
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build
📂 Project Structure
zoavet/
├── public/              # Static assets (brand board, images)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   └── pages/           # File-based routing
├── astro.config.mjs     # Astro + Tailwind config
└── tailwind.config.mjs  # Tailwind theme
📈 Status
✅ In production at zoavet.vercel.app.
👤 Author
Nicolas Romero — Frontend / Full-Stack Developer
Portfolio · LinkedIn · GitHub

<div align="center">
<sub>Built with ❤ in Viña del Mar, Chile</sub>
</div>