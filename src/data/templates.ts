export interface Template {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  longDescription: string;
  category: 'SaaS' | 'Portfolio' | 'E-commerce' | 'Landing Page' | 'Business' | 'Personal';
  tags: string[];
  demoVideoUrl: string;
  poster: string;
  screenshots: string[];
  gumroadUrl: string | null;
  features: string[];
  isFeatured: boolean;
}

export const templates: Template[] = [
  {
    id: '1',
    title: 'TypoFlux',
    slug: 'typoflux',
    price: 59,
    description: 'A kinetic typography studio website with bold motion design and creative agency aesthetics.',
    longDescription: 'TypoFlux showcases exceptional kinetic typography and motion design. Built for creative studios and motion designers, it features bold headline animations, project showcases, and a dark modern aesthetic that puts your creative work front and center. Perfect for design agencies, motion graphics studios, and creative professionals.',
    category: 'SaaS',
    tags: ['React', 'Tailwind', 'Portfolio', 'Typography', 'Motion Design'],
    demoVideoUrl: 'https://www.youtube.com/embed/4Rpn-H9VO_4?rel=0&modestbranding=1',
    poster: '/images/Typoflux1.png',
    screenshots: [
      '/images/Typoflux1.png',
      '/images/Typoflux2.png',
      '/images/Typoflux3.png',
      '/images/Typoflux4.png',
      '/images/Typoflux5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/typoflux',
    features: ['Kinetic Typography', 'Project Showcase Grid', 'Smooth Animations', 'Dark Theme', 'Portfolio Sections', 'Sound Toggle'],
    isFeatured: false
  },
  {
    id: '2',
    title: 'Ocean Themed Portfolio',
    slug: 'ocean-themed-portfolio',
    price: 149,
    description: 'Interactive underwater exploration portfolio with immersive 3D navigation and ocean-themed aesthetics.',
    longDescription: 'Dive into a unique portfolio experience with Ocean Themed Portfolio. Featuring interactive underwater navigation, depth meters, coordinate tracking, and immersive jellyfish animations. Perfect for game developers, 3D artists, interactive designers, and creative professionals seeking a memorable showcase.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', '3D', 'Interactive', 'Gaming'],
    demoVideoUrl: 'https://www.youtube.com/embed/9fh2vovJH5U?rel=0&modestbranding=1',
    poster: '/images/OceanPortfolio3.png',
    screenshots: [
      '/images/OceanPortfolio1.png',
      '/images/OceanPortfolio2.png',
      '/images/OceanPortfolio3.png',
      '/images/OceanPortfolio4.png',
      '/images/OceanPortfolio5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/ocean-themed-portfolio',
    features: ['Interactive 3D Navigation', 'Depth Tracking', 'Coordinate System', 'Underwater Aesthetics', 'Ambient Animations', 'Project Exploration'],
    isFeatured: false
  },
  {
    id: '3',
    title: 'Nexus Website',
    slug: 'nexus-website',
    price: 19,
    description: 'Modern SaaS landing page template with clean design, featuring product showcases and pricing sections.',
    longDescription: 'Nexus Website delivers a professional SaaS platform presentation. With its futuristic cyan accents, clean layout, and compelling "Build the Future Today" messaging, it\'s perfect for next-generation platforms, collaboration tools, and innovative tech products. Features comprehensive navigation and conversion-focused design.',
    category: 'Landing Page',
    tags: ['React', 'SaaS', 'Landing Page', 'Tech', 'Modern'],
    demoVideoUrl: 'https://www.youtube.com/embed/-_WNYEnyyJw?rel=0&modestbranding=1',
    poster: '/images/Nexus1.png',
    screenshots: [
      '/images/Nexus1.png',
      '/images/Nexus2.png',
      '/images/Nexus3.png',
      '/images/Nexus4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/nexus-website',
    features: ['Hero Section', 'Feature Showcase', 'Pricing Section', 'Clean Navigation', 'CTA Buttons', 'Responsive Design'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'Neon Themed Website',
    slug: 'neon-themed-website',
    price: 19,
    description: 'Stunning neon-chrome landing page with gradient text effects and modern dark aesthetics.',
    longDescription: 'NeonChrome makes a bold statement with vibrant rainbow gradient text effects against a deep navy background. Featuring animated particles, custom mouse cursor, and glowing neon typography. Ideal for creative agencies, tech startups, music promotions, gaming platforms, and any brand wanting an electrifying first impression.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Neon', 'Gradient', 'Dark Mode'],
    demoVideoUrl: 'https://www.youtube.com/embed/jbKMlXEMOVo?rel=0&modestbranding=1',
    poster: '/images/Neon1.png',
    screenshots: [
      '/images/Neon1.png',
      '/images/Neon2.png',
      '/images/Neon3.png',
      '/images/Neon4.png',
      '/images/Neon5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/neon-themed-website',
    features: ['Rainbow Gradient Text', 'Particle Effects', 'Custom Cursor', 'Dark Theme', 'Smooth Scrolling', 'Modern Navigation'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Kinetic Cards',
    slug: 'kinetic-cards',
    price: 14.99,
    description: 'Motion-first card interface system with fluid animations and interactive UI elements.',
    longDescription: 'Kinetic Cards revolutionizes UI interaction with cards that morph, reveal, and respond with stunning fluid animations. Built for accessibility and performance, this template showcases features and products with dynamic visual storytelling. Perfect for SaaS platforms, product showcases, interactive portfolios, and innovative web experiences.',
    category: 'Landing Page',
    tags: ['React', 'SaaS', 'Interactive', 'Motion', 'UI Kit'],
    demoVideoUrl: 'https://www.youtube.com/embed/yzBFytExlmA?rel=0&modestbranding=1',
    poster: '/images/KineticCards1.png',
    screenshots: [
      '/images/KineticCards1.png',
      '/images/KineticCards2.png',
      '/images/KineticCards3.png',
      '/images/KineticCards4.png',
      '/images/KineticCards5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/kinetic-cards',
    features: ['Morphing Card Animations', 'Fluid Interactions', 'Modern Navigation', 'Feature Showcase', 'Product Grid', 'Case Studies'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Jungle Themed Portfolio',
    slug: 'jungle-themed-portfolio',
    price: 149,
    description: 'Immersive 3D jungle exploration game-style portfolio with interactive navigation.',
    longDescription: 'Experience a unique portfolio presentation with Jungle-themed interactive exploration. Navigate through a 3D forest environment with WASD controls, discover project areas, and explore content in an engaging game-like interface. Perfect for game developers, 3D artists, interactive designers, and creative professionals wanting to stand out.',
    category: 'Portfolio',
    tags: ['React', '3D', 'Gaming', 'Interactive', 'WebGL'],
    demoVideoUrl: 'https://www.youtube.com/embed/uIZuL6hrw9Y?rel=0&modestbranding=1',
    poster: '/images/JunglePortfolio1.png',
    screenshots: [
      '/images/JunglePortfolio1.png',
      '/images/JunglePortfolio2.png',
      '/images/JunglePortfolio3.png',
      '/images/JunglePortfolio4.png',
      '/images/JunglePortfolio5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/jungle-themed-portfolio',
    features: ['3D Environment', 'WASD Navigation', 'Interactive Exploration', 'Game-Style Interface', 'Location Tracking', 'Sound Controls'],
    isFeatured: false
  },
  {
    id: '7',
    title: 'Holo Timeline',
    slug: 'holo-timeline',
    price: 19,
    description: 'Digital agency website focused on building transformative digital experiences with timeline showcase.',
    longDescription: 'HoloTimeline showcases your agency\'s work through a compelling narrative. Featuring an award-winning digital agency presentation with emphasis on strategy to execution, stunning digital products, and business results. Includes timeline of success, case studies, and service offerings. Perfect for digital agencies, consultancies, and creative studios.',
    category: 'Business',
    tags: ['React', 'Agency', 'Portfolio', 'Business', 'Digital'],
    demoVideoUrl: 'https://www.youtube.com/embed/4n3g2sP-VdQ?rel=0&modestbranding=1',
    poster: '/images/Holotimeline1.png',
    screenshots: [
      '/images/Holotimeline1.png',
      '/images/Holotimeline2.png',
      '/images/Holotimeline3.png',
      '/images/Holotimeline4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/holo-timeline',
    features: ['Agency Showcase', 'Case Studies', 'Service Timeline', 'Team Profiles', 'Video Showreel', 'Contact Integration'],
    isFeatured: false
  },
  {
    id: '8',
    title: 'Gym Agency Website',
    slug: 'gym-agency-website',
    price: 49,
    description: 'Elite fitness training facility website with powerful branding and transformation-focused design.',
    longDescription: 'FORGE presents a premium fitness facility with elite training positioning. Featuring bold "Forge Your Strongest Self" messaging, trainer profiles, program showcases, transformation stories, and state-of-the-art equipment highlights. Perfect for luxury gyms, personal training studios, CrossFit boxes, and elite fitness facilities.',
    category: 'Business',
    tags: ['React', 'Business', 'Fitness', 'Gym', 'Premium'],
    demoVideoUrl: 'https://www.youtube.com/embed/rRYCpvl7j3k?rel=0&modestbranding=1',
    poster: '/images/Gym1.png',
    screenshots: [
      '/images/Gym1.png',
      '/images/Gym2.png',
      '/images/Gym3.png',
      '/images/Gym4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/gym-agency-website',
    features: ['Bold Hero Section', 'Trainer Showcase', 'Program Details', 'Transformation Gallery', 'Video Story', 'Membership CTA'],
    isFeatured: false
  },
  {
    id: '9',
    title: 'Galaxy Themed Portfolio',
    slug: 'galaxy-themed-portfolio',
    price: 99,
    description: 'Space-themed interactive portfolio with immersive starfield and launch-style presentation.',
    longDescription: 'Galactic Atlas offers an extraordinary portfolio experience. Navigate through an interactive space environment with animated starfield, spacecraft silhouettes, and a dramatic "Launch Into Space" CTA. Features customizable portfolio sections titled "Your Name\'s Interactive Portfolio". Perfect for sci-fi artists, game developers, space enthusiasts, and creatives seeking cosmic impact.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', 'Space', 'Galaxy', 'Interactive'],
    demoVideoUrl: 'https://www.youtube.com/embed/68CVi85fpAY?rel=0&modestbranding=1',
    poster: '/images/GalaxyPortfolio1.png',
    screenshots: [
      '/images/GalaxyPortfolio1.png',
      '/images/GalaxyPortfolio2.png',
      '/images/GalaxyPortfolio3.png',
      '/images/GalaxyPortfolio4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/galaxy-themed-portfolio',
    features: ['Animated Starfield', 'Interactive Launch CTA', 'Spacecraft Graphics', 'Cosmic Theme', 'Portfolio Sections', 'Scroll Prompts'],
    isFeatured: false
  },
  {
    id: '10',
    title: "Chef's Portfolio",
    slug: 'chefs-portfolio',
    price: 59,
    description: 'Michelin-starred chef portfolio with elegant food photography and culinary artistry presentation.',
    longDescription: 'Laurent Dubois presents fine dining excellence through sophisticated web design. Features stunning food photography with bokeh effects, elegant serif typography, "Three Michelin Stars" prestige badge, and sections for creations, press & awards, and products. Perfect for celebrity chefs, Michelin-starred restaurants, culinary artists, and gourmet food businesses.',
    category: 'Personal',
    tags: ['React', 'Portfolio', 'Food', 'Chef', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/mTv88T36tU0?rel=0&modestbranding=1',
    poster: '/images/Chef1.png',
    screenshots: [
      '/images/Chef1.png',
      '/images/Chef2.png',
      '/images/Chef3.png',
      '/images/Chef4.png',
      '/images/Chef5.png',
      '/images/Chef6.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/chefs-portfolio',
    features: ['Luxury Food Photography', 'Elegant Typography', 'Achievement Badges', 'Creation Gallery', 'Press Section', 'Product Showcase'],
    isFeatured: false
  },
  {
    id: '11',
    title: 'Cascade Website',
    slug: 'cascade-website',
    price: 39,
    description: 'Corporate business template featuring smooth, cascading layouts and professional flow.',
    longDescription: 'Cascade Website brings a sense of flow and professionalism to your corporate presence. With cascading content sections and a clean, structured layout, it guides visitors naturally through your story. Perfect for consulting firms, law offices, and corporate agencies.',
    category: 'Business',
    tags: ['React', 'Business', 'Corporate', 'Professional'],
    demoVideoUrl: 'https://www.youtube.com/embed/tO0M3U4wEbc?rel=0&modestbranding=1',
    poster: '/images/Cascade1.png',
    screenshots: [
      '/images/Cascade1.png',
      '/images/Cascade2.png',
      '/images/Cascade3.png',
      '/images/Cascade4.png',
      '/images/Cascade5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/cascade-website',
    features: ['Cascading Layout', 'Service Showcase', 'Team Profiles', 'Client Logos', 'Case Studies', 'Contact Info'],
    isFeatured: false
  },
  {
    id: '12',
    title: 'Blueprint Website',
    slug: 'blueprint-website',
    price: 24.99,
    description: 'Structural landing page template ideal for architecture, construction, and planning phases.',
    longDescription: 'Lay the foundation for success with Blueprint Website. Its design mimics architectural precision with grid lines, technical fonts, and a clean blue-and-white aesthetic. Best for construction companies, architects, and engineering firms launching a new project.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Architecture', 'Construction'],
    demoVideoUrl: 'https://www.youtube.com/embed/cGe36VqawNQ?rel=0&modestbranding=1',
    poster: '/images/Blueprint1.png',
    screenshots: [
      '/images/Blueprint1.png',
      '/images/Blueprint2.png',
      '/images/Blueprint3.png',
      '/images/Blueprint4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/blueprint-website',
    features: ['Grid Layout', 'Blueprints Aesthetic', 'Project Timeline', 'Team Grid', 'Quote Request', 'Mobile Friendly'],
    isFeatured: false
  },
  {
    id: '13',
    title: 'Aurora Website',
    slug: 'aurora-website',
    price: 19,
    description: 'Vibrant landing page capturing the beauty of northern lights for colorful brand introductions.',
    longDescription: 'Light up the web with Aurora Website. Using mesmerizing color gradients inspired by the northern lights, this landing page is sure to capture attention. Excellent for creative apps, art events, or any brand that loves color.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Colorful', 'Aurora'],
    demoVideoUrl: 'https://www.youtube.com/embed/7bP5PsICXBY?rel=0&modestbranding=1',
    poster: '/images/Aurora1.png',
    screenshots: [
      '/images/Aurora1.png',
      '/images/Aurora2.png',
      '/images/Aurora3.png',
      '/images/Aurora4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/aurora-website',
    features: ['Gradient Backgrounds', 'Smooth Transitions', 'Feature Highlights', 'Newsletter Signup', 'Responsive', 'Modern UI'],
    isFeatured: false
  },
  {
    id: '14',
    title: 'Aura Bloom',
    slug: 'aura-bloom',
    price: 19,
    description: 'Soft and organic landing page template for wellness brands and natural products.',
    longDescription: 'Breathe life into your brand with Aura Bloom. Its soft, organic design and blooming animations create a sense of growth and wellness. Perfect for health products, yoga studios, and eco-friendly brands.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Wellness', 'Organic'],
    demoVideoUrl: 'https://www.youtube.com/embed/4yvElG9buvg?rel=0&modestbranding=1',
    poster: '/images/AuraBloom1.png',
    screenshots: [
      '/images/AuraBloom1.png',
      '/images/AuraBloom2.png',
      '/images/AuraBloom3.png',
      '/images/AuraBloom4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/aura-bloom',
    features: ['Soft Colors', 'Bloom Animations', 'Testimonials', 'Product Showcase', 'FAQ Section', 'Contact'],
    isFeatured: false
  },
  {
    id: '15',
    title: 'Atelier',
    slug: 'atelier',
    price: 19,
    description: 'Sophisticated portfolio for craftspeople, artists, and bespoke makers.',
    longDescription: 'Welcome to your digital workshop. Atelier is crafted for those who craft. With a focus on textures, detail, and craftsmanship, it effectively displays your handmade goods or artistic services. Suitable for artisans, sculptors, and boutique makers.',
    category: 'E-commerce',
    tags: ['React', 'Portfolio', 'Artisan', 'Craft'],
    demoVideoUrl: 'https://www.youtube.com/embed/Yarh7R1JTeQ?rel=0&modestbranding=1',
    poster: '/images/Atelier1.png',
    screenshots: [
      '/images/Atelier1.png',
      '/images/Atelier2.png',
      '/images/Atelier3.png',
      '/images/Atelier4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/atelier',
    features: ['Gallery Grid', 'Detail Zoom', 'Artist Bio', 'Process Section', 'Shop Links', 'Contact'],
    isFeatured: false
  },
  {
    id: '16',
    title: 'Artisan Tote',
    slug: 'artisan-tote',
    price: 19,
    description: 'Niche e-commerce template specifically designed for selling single product lines or handmade collections.',
    longDescription: 'Carry your sales further with Artisan Tote. This shop template is tailored for small batch goods and single-product focus sites. It includes storytelling elements to weave the narrative of your product. Ideal for bag makers, leather workers, and boutique brands.',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', 'Boutique', 'Handmade'],
    demoVideoUrl: 'https://www.youtube.com/embed/qu_f3sqE3-I?rel=0&modestbranding=1',
    poster: '/images/ArtisanTote1.png',
    screenshots: [
      '/images/ArtisanTote1.png',
      '/images/ArtisanTote2.png',
      '/images/ArtisanTote3.png',
      '/images/ArtisanTote4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/artisan-tote',
    features: ['Single Product Focus', 'Storytelling Layout', 'Cart', 'Image Zoom', 'Specs Section', 'Simple Checkout'],
    isFeatured: false
  },
  {
    id: '17',
    title: 'Prism Light Studio',
    slug: 'prism-light-studio',
    price: 59,
    description: 'A vibrant, portfolio-centric template designed for creative studios, photographers, and visual artists.',
    longDescription: 'Prism Light Studio is all about visual impact. Designed for photographers and digital artists, this template features a masonry grid gallery, lightbox integration, and a dark-mode aesthetic that makes colors pop. It includes dedicated sections for service packages and booking inquiries.',
    category: 'SaaS',
    tags: ['React', 'Photography', 'Studio', 'Creative'],
    demoVideoUrl: 'https://www.youtube.com/embed/HzJbrgK0pMo?rel=0&modestbranding=1',
    poster: '/images/PrismLight1.png',
    screenshots: [
      '/images/PrismLight1.png',
      '/images/PrismLight2.png',
      '/images/PrismLight3.png',
      '/images/PrismLight4.png',
      '/images/PrismLight5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/prism-light-studio',
    features: ['Masonry Gallery', 'Lightbox Support', 'Service Packages', 'Booking Form', 'Dark Mode', 'Responsive Grid'],
    isFeatured: false
  },
  {
    id: '18',
    title: 'Prism Website',
    slug: 'prism-website',
    price: 19,
    description: 'A versatile, multi-purpose corporate template suitable for SaaS startups and tech companies.',
    longDescription: 'Prism Website offers a clean, professional foundation for any business. With a focus on clarity and conversion, it features pricing tables, feature breakdowns, and a robust blog section. The geometric design language conveys stability and modern innovation.',
    category: 'SaaS',
    tags: ['React', 'SaaS', 'Corporate', 'Startup'],
    demoVideoUrl: 'https://www.youtube.com/embed/MDuIKTb3SQo?rel=0&modestbranding=1',
    poster: '/images/Prism1.png',
    screenshots: [
      '/images/Prism1.png',
      '/images/Prism2.png',
      '/images/Prism3.png',
      '/images/Prism4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/prism-website',
    features: ['Pricing Tables', 'Feature Grid', 'Testimonials Carousel', 'Contact Form', 'Blog Layout', 'SEO Optimized'],
    isFeatured: false
  },
  {
    id: '19',
    title: 'Restaurant Website',
    slug: 'restaurant-website',
    price: 59,
    description: 'Upscale fine dining restaurant website with elegant ambiance and culinary art presentation.',
    longDescription: 'Maison Lumière embodies fine dining excellence. Features warm candlelit atmosphere, elegant menu presentations, reservation booking, and a sophisticated design that highlights seasonal flavors and timeless techniques. Includes gallery, about section, and contact information. Perfect for upscale restaurants, bistros, fine dining establishments, and culinary experiences.',
    category: 'Business',
    tags: ['React', 'Restaurant', 'Business', 'Food', 'Fine Dining'],
    demoVideoUrl: 'https://www.youtube.com/embed/DbESf56gIBI?rel=0&modestbranding=1',
    poster: '/images/Restaurant1.png',
    screenshots: [
      '/images/Restaurant1.png',
      '/images/Restaurant2.png',
      '/images/Restaurant3.png',
      '/images/Restaurant4.png',
      '/images/Restaurant5.png',
      '/images/Restaurant6.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/restaurant-website',
    features: ['Elegant Design', 'Menu Showcase', 'Reservation System', 'Gallery Section', 'About Restaurant', 'Contact Info'],
    isFeatured: false
  },
  {
    id: '20',
    title: 'Soft UI Pro',
    slug: 'soft-ui-pro',
    price: 49,
    description: 'A premium admin dashboard template featuring a trendy neumorphic design style.',
    longDescription: 'Soft UI Pro brings the neumorphism trend to admin dashboards. Soft shadows, rounded corners, and gradients make data visualization easy on the eyes. Ideal for SaaS backends, analytics platforms, or user management systems requiring a modern touch.',
    category: 'SaaS',
    tags: ['React', 'Dashboard', 'Admin', 'UI Kit'],
    demoVideoUrl: 'https://www.youtube.com/embed/mIEMKgZpWl0?rel=0&modestbranding=1',
    poster: '/images/SoftUI1.png',
    screenshots: [
      '/images/SoftUI1.png',
      '/images/SoftUI2.png',
      '/images/SoftUI3.png',
      '/images/SoftUI4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/soft-ui-pro',
    features: ['Neumorphic Design', 'Analytics Charts', 'User Tables', 'Notification System', 'Profile Settings', 'Auth Pages'],
    isFeatured: false
  },
  {
    id: '21',
    title: 'Spectra',
    slug: 'spectra',
    price: 19,
    description: 'A high-energy digital agency template with bold typography and vibrant animations.',
    longDescription: 'Spectra is built for agencies that want to stand out. With bold color contrasts and smooth scroll animations, it captures attention immediately. It includes detailed case study layouts, team member profiles, and a high-converting project inquiry form.',
    category: 'Business',
    tags: ['React', 'Agency', 'Creative', 'Business'],
    demoVideoUrl: 'https://www.youtube.com/embed/88K7qy6z560?rel=0&modestbranding=1',
    poster: '/images/Spectra1.png',
    screenshots: [
      '/images/Spectra1.png',
      '/images/Spectra2.png',
      '/images/Spectra3.png',
      '/images/Spectra4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/spectra',
    features: ['Case Studies', 'Animated Hero', 'Team Section', 'Client Logo Grid', 'Contact Form', 'Smooth Scroll'],
    isFeatured: false
  },
  {
    id: '22',
    title: 'Story Canvas',
    slug: 'story-canvas',
    price: 19,
    description: 'A minimalist blog and magazine template tailored for writers and storytellers.',
    longDescription: 'Story Canvas puts your words front and center. This distraction-free template is perfect for personal blogs, news sites, or editorial portfolios. It features excellent typography, estimated reading times, and author bios to help build a connection with readers.',
    category: 'Personal',
    tags: ['React', 'Blog', 'Editorial', 'Minimal'],
    demoVideoUrl: 'https://www.youtube.com/embed/nlzX0zs2Gf8?rel=0&modestbranding=1',
    poster: '/images/StoryCanvas1.png',
    screenshots: [
      '/images/StoryCanvas1.png',
      '/images/StoryCanvas2.png',
      '/images/StoryCanvas3.png',
      '/images/StoryCanvas4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/story-canvas',
    features: ['Clean Typography', 'Author Bio', 'Reading Time', 'Newsletter Signup', 'Category Tags', 'Related Posts'],
    isFeatured: false
  },
  {
    id: '23',
    title: 'Timeless Elegance',
    slug: 'timeless-elegance',
    price: 29,
    description: 'A luxury e-commerce template designed for jewelry, watches, and high-end fashion.',
    longDescription: 'Timeless Elegance exudes sophistication. Built for high-ticket items, this template emphasizes whitespace, serif typography, and high-resolution imagery. It includes a specialized "Request Price" feature and a zoomed-in product view to showcase intricate details.',
    category: 'E-commerce',
    tags: ['React', 'Luxury', 'Fashion', 'Jewelry'],
    demoVideoUrl: 'https://www.youtube.com/embed/GdzSt0nuE_c?rel=0&modestbranding=1',
    poster: '/images/TimelessElegance1.png',
    screenshots: [
      '/images/TimelessElegance1.png',
      '/images/TimelessElegance2.png',
      '/images/TimelessElegance3.png',
      '/images/TimelessElegance4.png',
      '/images/TimelessElegance5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/timeless-elegance',
    features: ['High-Res Zoom', 'Wishlist', 'Request Price', 'Elegant Layout', 'Brand Story', 'Cart Sidebar'],
    isFeatured: false
  },
  {
    id: '24',
    title: 'Travel Agency Website',
    slug: 'travel-agency-website',
    price: 49,
    description: 'Award-winning luxury travel agency website with elegant search functionality and destination showcases.',
    longDescription: 'Wanderlust delivers a premium travel booking experience. Features impressive 4.9/5 rating from 2,500+ reviews, multi-city office presence, advanced search with destination/date/guest filters, and compelling statistics (50+ destinations, 15k+ travelers, 98% satisfaction, 14 years experience). Perfect for luxury travel agencies, tour operators, and bespoke travel services.',
    category: 'Business',
    tags: ['React', 'Business', 'Travel', 'Booking', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/035W8A-3Gxg?rel=0&modestbranding=1',
    poster: '/images/Travel1.png',
    screenshots: [
      '/images/Travel1.png',
      '/images/Travel2.png',
      '/images/Travel3.png',
      '/images/Travel4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/travel-agency-website',
    features: ['Advanced Search', 'Destination Gallery', 'Review System', 'Multi-Location', 'Statistics Display', 'Booking CTA'],
    isFeatured: false
  },
  {
    id: '25',
    title: 'Velvet Commerce',
    slug: 'velvet-commerce',
    price: 49,
    description: 'Premium 3D product configurator for luxury furniture with real-time material customization.',
    longDescription: 'Velvet Commerce revolutionizes online furniture shopping with an interactive 3D product configurator. Features real-time material selection (Burgundy Velvet, fabrics, patterns), adjustable roughness/sheen/tint controls, multiple camera angles, and dynamic lighting presets (Studio Softbox, Warm Sunset, Cool Exhibition). Perfect for luxury furniture stores, interior design shops, custom manufacturing, and premium e-commerce.',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', '3D', 'Configurator', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/A94wIkKF4OM?rel=0&modestbranding=1',
    poster: '/images/Velvet1.png',
    screenshots: [
      '/images/Velvet1.png',
      '/images/Velvet2.png',
      '/images/Velvet3.png',
      '/images/Velvet4.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/velvet-commerce',
    features: ['3D Product Viewer', 'Material Selector', 'Lighting Controls', 'Camera Angles', 'Customization Panel', 'Price Display'],
    isFeatured: false
  },
  {
    id: '26',
    title: 'Wedding Agency Website',
    slug: 'wedding-agency-website',
    price: 59,
    description: 'Elegant wedding photography portfolio with romantic storytelling and cinematic presentation.',
    longDescription: 'Eternal Moments captures love stories with elegance and grace. Features beautiful sunset imagery, romantic tagline "Capturing Love, One Frame at a Time", portfolio gallery, pricing packages, and booking information. Showcases elegant wedding photography and cinematic videography. Perfect for wedding photographers, videographers, event documentation, and romantic services.',
    category: 'Business',
    tags: ['React', 'Portfolio', 'Photography', 'Wedding', 'Events'],
    demoVideoUrl: 'https://www.youtube.com/embed/aSzpXZH0NVM?rel=0&modestbranding=1',
    poster: '/images/Wedding1.png',
    screenshots: [
      '/images/Wedding1.png',
      '/images/Wedding2.png',
      '/images/Wedding3.png',
      '/images/Wedding4.png',
      '/images/Wedding5.png'
    ],
    gumroadUrl: 'https://craftedwebstudio.gumroad.com/l/wedding-agency-website',
    features: ['Romantic Design', 'Portfolio Gallery', 'Service Packages', 'Testimonials', 'Booking Form', 'Blog Section'],
    isFeatured: false
  }
];

export const categories = ['All', 'SaaS', 'Portfolio', 'E-commerce', 'Landing Page', 'Business', 'Personal'] as const;

export const allTags = [...new Set(templates.flatMap(t => t.tags))];

export const heroImage = 'https://d64gsuwffb70l.cloudfront.net/697f345016ddabc5c5663713_1769944230275_19bf04de.jpg';