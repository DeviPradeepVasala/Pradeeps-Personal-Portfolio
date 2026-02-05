# Vasala Devi Pradeep - Portfolio

A stunning, production-ready personal portfolio website featuring scroll-driven animations, glassmorphism design, and dark/light theme support.

## 🚀 Features

- **Scroll-linked Animations**: GSAP ScrollTrigger for smooth reveal effects
- **Interactive UI**: Framer Motion for micro-interactions and transitions
- **Dark/Light Theme**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first, works on all devices (320px+)
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Accessibility**: WCAG AA compliant, semantic HTML, keyboard navigation

## 📁 Sections

1. **Hero**: Animated intro with tagline and CTAs
2. **About**: Personal story and quick stats
3. **Skills**: Interactive skill charts with category filters
4. **Projects**: Filterable portfolio grid with modal case studies
5. **Achievements**: Animated timeline with milestones
6. **Certifications**: Professional credentials display
7. **Contact**: Form and social links

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + Custom Design System
- GSAP (ScrollTrigger)
- Framer Motion
- shadcn/ui components

## 📝 Content Placeholders

Replace the following markers with your actual content:
- `[REPLACE: Your City, Country]` - Contact section location
- `[REPLACE: Your Phone]` - Contact section phone
- Social links URLs in Navigation, Contact, and Footer
- Project details in ProjectsSection.tsx
- Certification details in CertificationsSection.tsx
- Achievement details in AchievementsSection.tsx

## 🎨 Design System

Colors defined in `src/index.css`:
- Primary: Cyan (#06b6d4)
- Secondary: Purple (#8b5cf6)
- Glassmorphism effects with backdrop blur

Typography:
- Display: Space Grotesk
- Body: Inter

## 📦 Getting Started

```bash
npm install
npm run dev
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The `dist` folder is ready for deployment to Vercel, Netlify, or any static host.

## 📄 License

MIT License - Feel free to use and modify for your own portfolio!

---

## Reference & Inspiration

### Top Portfolio Sites Used for Inspiration:
1. **Brittany Chiang** (brittanychiang.com) - Clean layout, smooth scrolling, terminal aesthetic
2. **Josh Comeau** (joshwcomeau.com) - Playful animations, excellent writing, interactive elements
3. **Lee Robinson** (leerob.io) - Minimal design, Next.js showcase, blog integration
4. **Cassie Evans** (cassie.codes) - SVG animations, creative motion design
5. **Bruno Simon** (bruno-simon.com) - 3D portfolio, immersive experience
6. **Robby Leonardi** - Game-style interactive resume
7. **Olaolu Olawuyi** - Modern design, accessibility focus
8. **Adham Dannaway** - Split-screen concept, designer/developer duality

### Key Patterns Adopted:
- Scroll-triggered reveals (all sites)
- Glassmorphism cards (modern trend)
- Gradient text for emphasis (Brittany Chiang)
- Interactive skill visualization (multiple)
- Case study modal approach (Lee Robinson)
- Timeline achievements (LinkedIn-inspired)
