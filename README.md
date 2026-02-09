# CraftedWeb Studio - Premium Website Templates Marketplace

A fast, highly-responsive Jamstack website that showcases and sells premium website templates. Built with React, Vite, and Tailwind CSS.

![CraftedWeb Studio Preview](https://d64gsuwffb70l.cloudfront.net/697f345016ddabc5c5663713_1769944230275_19bf04de.jpg)

## Features

- **Premium UI/UX**: Glassmorphism effects, smooth animations, and modern design
- **Light/Dark Theme**: Toggle between themes with system preference support
- **Video Demos**: Lazy-loaded YouTube embeds (VideoEmbedLite pattern)
- **Responsive Design**: Mobile-first approach with breakpoints at 640/768/1024/1280px
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Fast Performance**: Optimized images, minimal JS, and efficient rendering
- **Filterable Grid**: Search, category, tag, and price filters
- **Pagination**: Handles 50-100+ templates without performance issues

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)
- **Payments**: Gumroad integration
- **Video**: YouTube (unlisted)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/craftedweb_studio.git
cd CraftedWeb Studio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── marketplace/
│   │   ├── Header.tsx          # Navigation with theme toggle
│   │   ├── Footer.tsx          # Multi-column footer with newsletter
│   │   ├── HeroSection.tsx     # Animated hero with CTAs
│   │   ├── TemplateCard.tsx    # Product card component
│   │   ├── TemplatesPage.tsx   # Filterable template grid
│   │   ├── TemplateDetail.tsx  # Full template page
│   │   ├── VideoEmbedLite.tsx  # Lazy YouTube embed
│   │   ├── ScreenshotGallery.tsx # Lightbox gallery
│   │   ├── QuickViewModal.tsx  # Quick preview modal
│   │   ├── FilterBar.tsx       # Search and filters
│   │   ├── DemoReel.tsx        # Featured carousel
│   │   ├── FeaturedGrid.tsx    # Popular templates grid
│   │   ├── TestimonialsSection.tsx
│   │   ├── HowItWorksPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── ui/                     # Reusable UI components
│   └── AppLayout.tsx           # Main layout with routing
├── data/
│   └── templates.ts            # Template data and types
└── index.css                   # Global styles and design tokens
```

## Adding a New Template

### Step 1: Upload Demo Video to YouTube

1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click "Create" → "Upload videos"
3. Upload your 1-2 minute demo video
4. Set visibility to **Unlisted** (not Public, not Private)
5. Copy the video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)

### Step 2: Prepare Images

1. Create a poster image (16:9 aspect ratio, optimized WebP)
2. Create 3-4 screenshots (16:9 aspect ratio, optimized WebP)
3. Upload images to your CDN or public folder

### Step 3: Add Template to Data File

Edit `src/data/templates.ts` and add a new template object:

```typescript
{
  id: '13',                                    // Unique ID
  title: 'Your Template Name',                 // Display title
  slug: 'your-template-name',                  // URL-friendly slug
  price: 49,                                   // Price in USD
  description: 'Short description...',         // 1-2 sentences
  longDescription: 'Detailed description...',  // Full description
  category: 'SaaS',                            // SaaS | Portfolio | E-commerce | Landing Page | Business | Personal
  tags: ['React', 'Tailwind', 'Dashboard'],    // Tech stack and features
  demoVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  poster: 'https://your-cdn.com/poster.webp',
  screenshots: [
    'https://your-cdn.com/screenshot1.webp',
    'https://your-cdn.com/screenshot2.webp',
    'https://your-cdn.com/screenshot3.webp',
    'https://your-cdn.com/screenshot4.webp'
  ],
  gumroadUrl: 'https://gumroad.com/l/your-product',  // or null
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6'
  ],
  isFeatured: false                            // Show in featured section?
}
```

### Step 4: Deploy

Push your changes to trigger automatic deployment:

```bash
git add .
git commit -m "Add new template: Your Template Name"
git push
```

## Template Data Format

| Field             | Type           | Required | Description                                                           |
| ----------------- | -------------- | -------- | --------------------------------------------------------------------- |
| `id`              | string         | Yes      | Unique identifier                                                     |
| `title`           | string         | Yes      | Display name                                                          |
| `slug`            | string         | Yes      | URL-friendly identifier                                               |
| `price`           | number         | Yes      | Price in USD                                                          |
| `description`     | string         | Yes      | Short description (1-2 sentences)                                     |
| `longDescription` | string         | Yes      | Full description for detail page                                      |
| `category`        | string         | Yes      | One of: SaaS, Portfolio, E-commerce, Landing Page, Business, Personal |
| `tags`            | string[]       | Yes      | Array of tags (tech stack, features)                                  |
| `demoVideoUrl`    | string         | Yes      | YouTube watch URL (unlisted)                                          |
| `poster`          | string         | Yes      | Poster image URL (WebP, 16:9)                                         |
| `screenshots`     | string[]       | Yes      | Array of screenshot URLs (3-4 images)                                 |
| `gumroadUrl`      | string \| null | Yes      | Gumroad product URL or null                                           |
| `features`        | string[]       | Yes      | Array of feature strings (6 recommended)                              |
| `isFeatured`      | boolean        | Yes      | Show in featured sections                                             |

## Design System

### Colors

**Light Theme:**

- Primary: Indigo (#6366F1)
- Accent: Cyan (#06B6D4)
- Background: Slate-50
- Foreground: Slate-900

**Dark Theme:**

- Primary: Indigo (#818CF8)
- Accent: Cyan (#22D3EE)
- Background: Slate-950
- Foreground: Slate-100

### Typography

- **Headings**: Sora (Google Fonts)
- **Body**: Inter (Google Fonts)

### Effects

- Glassmorphism panels with backdrop-blur
- Layered shadows for depth
- Smooth entrance animations
- Hover lift effects on cards
- Respects `prefers-reduced-motion`

## Performance Optimizations

1. **VideoEmbedLite**: YouTube iframe only loads on click
2. **Lazy Loading**: Images use `loading="lazy"`
3. **Preconnect**: YouTube domains preconnected
4. **Minimal JS**: Most interactions are CSS-based
5. **Pagination**: Grid shows 9 items per page
6. **Optimized Images**: WebP format with srcset

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings (auto-detected)
4. Deploy

### Environment Variables

No environment variables required for basic setup.

For analytics, add:

- `VITE_GA_ID`: Google Analytics 4 ID
- `VITE_PLAUSIBLE_DOMAIN`: Plausible domain

## License

MIT License - feel free to use this template for your own projects.

## Support

- Email: hello@templatestore.com
- Response time: 24-48 hours

---

Built with care by TemplateStore
