# Admin Guide: Adding Templates to TemplateStore

This guide explains how to add new templates to the marketplace.

## Quick Start

1. Upload demo video to YouTube (unlisted)
2. Prepare poster and screenshot images
3. Edit `src/data/templates.ts`
4. Commit and push to trigger deployment

---

## Step 1: Create Demo Video

### Recording Tips
- Keep it 1-2 minutes long
- Show the most important features first
- Include: hero section, navigation, key pages, responsive views
- Use screen recording software (OBS, Loom, or QuickTime)
- Resolution: 1920x1080 recommended

### Upload to YouTube

1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **Create** → **Upload videos**
3. Upload your video file
4. Fill in details:
   - Title: `[Template Name] - Demo Video`
   - Description: Brief overview of the template
5. **Important**: Set visibility to **Unlisted**
   - This means only people with the link can view it
   - It won't appear in YouTube search or your channel
6. Click **Save** and copy the video URL

Example URL format:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

---

## Step 2: Prepare Images

### Poster Image (Required)
- Aspect ratio: 16:9
- Recommended size: 1280x720 or 1920x1080
- Format: WebP (preferred) or JPG
- Should show the main hero/landing view
- This is the thumbnail users see before playing the video

### Screenshots (3-4 Required)
- Aspect ratio: 16:9
- Show different pages/sections
- Include: hero, features, pricing, footer, mobile view
- Format: WebP (preferred) or JPG

### Image Hosting Options
1. **CDN** (Recommended): Upload to Cloudflare Images, ImageKit, or similar
2. **Public folder**: Place in `/public/images/templates/[slug]/`
3. **External**: Any publicly accessible URL

---

## Step 3: Add Template Data

Edit `src/data/templates.ts` and add a new object to the `templates` array:

```typescript
{
  id: '13',  // Increment from the last template
  title: 'My New Template',
  slug: 'my-new-template',  // URL-friendly, lowercase, hyphens
  price: 49,
  description: 'A brief 1-2 sentence description that appears on cards.',
  longDescription: 'A longer description with more details about the template. This appears on the detail page. Include key selling points and what makes this template special.',
  category: 'SaaS',  // Must be one of: SaaS | Portfolio | E-commerce | Landing Page | Business | Personal
  tags: ['React', 'Tailwind', 'Dashboard', 'TypeScript'],
  demoVideoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  poster: 'https://your-cdn.com/templates/my-new-template/poster.webp',
  screenshots: [
    'https://your-cdn.com/templates/my-new-template/screenshot-1.webp',
    'https://your-cdn.com/templates/my-new-template/screenshot-2.webp',
    'https://your-cdn.com/templates/my-new-template/screenshot-3.webp',
    'https://your-cdn.com/templates/my-new-template/screenshot-4.webp'
  ],
  gumroadUrl: 'https://gumroad.com/l/my-new-template',
  features: [
    '50+ React Components',
    'Dark & Light Themes',
    'Responsive Design',
    'TypeScript Support',
    'Tailwind CSS',
    'Well Documented'
  ],
  isFeatured: false  // Set to true to show in featured sections
}
```

---

## Step 4: Deploy

```bash
# Stage your changes
git add src/data/templates.ts

# Commit with descriptive message
git commit -m "Add template: My New Template"

# Push to trigger auto-deployment
git push origin main
```

Vercel will automatically rebuild and deploy the site.

---

## Example: Adding a Template

Here's a complete example of adding a new template:

### 1. Video uploaded to YouTube
URL: `https://www.youtube.com/watch?v=abc123xyz`

### 2. Images uploaded to CDN
- Poster: `https://cdn.example.com/developer-portfolio/poster.webp`
- Screenshots:
  - `https://cdn.example.com/developer-portfolio/hero.webp`
  - `https://cdn.example.com/developer-portfolio/projects.webp`
  - `https://cdn.example.com/developer-portfolio/about.webp`
  - `https://cdn.example.com/developer-portfolio/contact.webp`

### 3. Gumroad product created
URL: `https://gumroad.com/l/developer-portfolio`

### 4. Template data added

```typescript
{
  id: '13',
  title: 'Developer Portfolio',
  slug: 'developer-portfolio',
  price: 39,
  description: 'A modern portfolio template designed specifically for developers to showcase their projects and skills.',
  longDescription: 'Developer Portfolio is the perfect way to present your work to potential employers or clients. Features include a project showcase with filtering, skills section with progress indicators, blog integration, and a contact form. Built with React and Tailwind CSS for easy customization.',
  category: 'Portfolio',
  tags: ['React', 'Portfolio', 'Developer', 'Minimal'],
  demoVideoUrl: 'https://www.youtube.com/watch?v=abc123xyz',
  poster: 'https://cdn.example.com/developer-portfolio/poster.webp',
  screenshots: [
    'https://cdn.example.com/developer-portfolio/hero.webp',
    'https://cdn.example.com/developer-portfolio/projects.webp',
    'https://cdn.example.com/developer-portfolio/about.webp',
    'https://cdn.example.com/developer-portfolio/contact.webp'
  ],
  gumroadUrl: 'https://gumroad.com/l/developer-portfolio',
  features: [
    'Project Showcase',
    'Skills Section',
    'Blog Integration',
    'Contact Form',
    'Dark Mode',
    'SEO Optimized'
  ],
  isFeatured: true
}
```

---

## Troubleshooting

### Video not playing?
- Ensure the YouTube video is set to **Unlisted** (not Private)
- Check the URL format matches: `https://www.youtube.com/watch?v=VIDEO_ID`

### Images not loading?
- Verify URLs are publicly accessible
- Check for CORS issues if using external hosting
- Ensure images are in WebP or JPG format

### Template not appearing?
- Check for syntax errors in `templates.ts`
- Ensure the `id` is unique
- Verify the `category` is one of the allowed values

### Build failing?
- Run `npm run build` locally to check for errors
- Check TypeScript types match the Template interface

---

## Best Practices

1. **Consistent naming**: Use lowercase slugs with hyphens
2. **Quality images**: Use high-resolution, optimized WebP images
3. **Compelling descriptions**: Write clear, benefit-focused copy
4. **Accurate tags**: Use relevant tags for better filtering
5. **Feature list**: Include 6 key features that sell the template
6. **Video quality**: Ensure demo videos are clear and professional

---

## Support

If you need help, contact: hello@templatestore.com
