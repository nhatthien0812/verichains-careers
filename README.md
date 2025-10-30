# Verichains Careers Portal

A production-ready Next.js 15 careers portal for Verichains, featuring Substack RSS integration, modern UI with Framer Motion animations, and a dark security-tech aesthetic.

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS 4** (with custom Verichains theme)
- **shadcn/ui** (component library)
- **Framer Motion** (animations)
- **rss-parser** (Substack feed integration)
- **pnpm** (package manager)

## 📁 Project Structure

```
verichains-careers/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── subscribe/          # Subscribe page
│   │   ├── jobs/               # Jobs listing
│   │   │   └── [slug]/         # Job detail pages
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── header.tsx          # Sticky navigation header
│   │   ├── footer.tsx          # Footer with offices & socials
│   │   ├── job-card.tsx        # Individual job card
│   │   ├── job-list.tsx        # Job listings grid
│   │   ├── subscribe-cta.tsx   # Subscribe call-to-action
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/                    # Utilities
│   │   ├── rss.ts              # RSS feed parser
│   │   ├── mockData.ts         # Fallback mock data
│   │   └── utils.ts            # Helper functions
│   ├── config/                 # Configuration
│   │   └── site.ts             # Site configuration
│   └── styles/
│       └── globals.css         # Global styles & theme
└── components.json             # shadcn/ui config
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#0E76FD` (Blue)
- **Background**: `#0B1020` (Dark Navy)
- **Muted**: `#9AA4B2` (Gray)
- **Accent**: `#22C55E` (Green)

### Typography
- **Primary Font**: Inter
- **Secondary Font**: Be Vietnam Pro

### Features
- Dark mode by default
- Glass morphism cards
- Smooth animations with Framer Motion
- Responsive grid layout
- Modern security-tech aesthetic

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.9.0 (recommended)
- pnpm >= 10.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Type checking
pnpm typecheck
```

The application will be available at `http://localhost:3000`.

## 📄 Pages

- **/** - Home page with hero, intro, and job listings
- **/jobs** - All job openings
- **/jobs/[slug]** - Individual job detail page (links to Substack)
- **/about** - Mission, values, and company culture
- **/subscribe** - Subscribe to Substack newsletter CTA

## 🔌 RSS Integration

The site fetches job postings from the Verichains Substack RSS feed:
- **Feed URL**: `https://verichains.substack.com/feed`
- **Revalidation**: 60 seconds
- **Fallback**: Mock data if RSS feed is unavailable

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure deployment
4. Set the production domain to `careers.verichains.io`

### Environment Variables

No environment variables required for basic functionality.

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## 🎯 Features

- ✅ Server-side RSS feed fetching
- ✅ Automatic revalidation (60s)
- ✅ SEO optimized with metadata
- ✅ Responsive design
- ✅ Dark theme with glass morphism
- ✅ Smooth animations
- ✅ Type-safe with TypeScript
- ✅ Accessible UI components
- ✅ Production-ready setup

## 🔗 Links

- **Substack**: https://verichains.substack.com
- **Main Site**: https://verichains.io
- **Careers Portal**: https://careers.verichains.io (production)

## 📧 Contact

For questions or issues, please contact the Verichains team.

---

Built with ❤️ by the Verichains team
