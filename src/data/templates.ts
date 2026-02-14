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
    price: 79,
    description: 'A kinetic typography studio website with bold motion design and creative agency aesthetics.',
    longDescription: 'TypoFlux showcases exceptional kinetic typography and motion design. Built for creative studios and motion designers, it features bold headline animations, project showcases, and a dark modern aesthetic that puts your creative work front and center. Perfect for design agencies, motion graphics studios, and creative professionals.',
    category: 'Portfolio',
    tags: ['React', 'Tailwind', 'Portfolio', 'Typography', 'Motion Design'],
    demoVideoUrl: 'https://www.youtube.com/embed/4Rpn-H9VO_4?rel=0&modestbranding=1',
    poster: 'src/images/Typoflux1.png',
    screenshots: [
      'src/images/Typoflux1.png',
      'src/images/Typoflux2.png',
      'src/images/Typoflux3.png',
      'src/images/Typoflux4.png'
    ],
    gumroadUrl: null,
    features: ['Kinetic Typography', 'Project Showcase Grid', 'Smooth Animations', 'Dark Theme', 'Portfolio Sections', 'Sound Toggle'],
    isFeatured: false
  },
  {
    id: '2',
    title: 'Ocean Themed Portfolio',
    slug: 'ocean-themed-portfolio',
    price: 49,
    description: 'Interactive underwater exploration portfolio with immersive 3D navigation and ocean-themed aesthetics.',
    longDescription: 'Dive into a unique portfolio experience with Ocean Themed Portfolio. Featuring interactive underwater navigation, depth meters, coordinate tracking, and immersive jellyfish animations. Perfect for game developers, 3D artists, interactive designers, and creative professionals seeking a memorable showcase.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', '3D', 'Interactive', 'Gaming'],
    demoVideoUrl: 'https://www.youtube.com/embed/9fh2vovJH5U?rel=0&modestbranding=1',
    poster: 'src/images/OceanPortfolio1.png',
    screenshots: [
      'src/images/OceanPortfolio1.png',
      'src/images/OceanPortfolio2.png',
      'src/images/OceanPortfolio3.png',
      'src/images/OceanPortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['Interactive 3D Navigation', 'Depth Tracking', 'Coordinate System', 'Underwater Aesthetics', 'Ambient Animations', 'Project Exploration'],
    isFeatured: false
  },
  {
    id: '3',
    title: 'Nexus Website',
    slug: 'nexus-website',
    price: 99,
    description: 'Modern SaaS landing page template with clean design, featuring product showcases and pricing sections.',
    longDescription: 'Nexus Website delivers a professional SaaS platform presentation. With its futuristic cyan accents, clean layout, and compelling "Build the Future Today" messaging, it\'s perfect for next-generation platforms, collaboration tools, and innovative tech products. Features comprehensive navigation and conversion-focused design.',
    category: 'Landing Page',
    tags: ['React', 'SaaS', 'Landing Page', 'Tech', 'Modern'],
    demoVideoUrl: 'https://www.youtube.com/embed/-_WNYEnyyJw?rel=0&modestbranding=1',
    poster: 'src/images/Nexus1.png',
    screenshots: [
      'src/images/Nexus1.png',
      'src/images/Nexus2.png',
      'src/images/Nexus3.png',
      'src/images/Nexus4.png'
    ],
    gumroadUrl: null,
    features: ['Hero Section', 'Feature Showcase', 'Pricing Section', 'Clean Navigation', 'CTA Buttons', 'Responsive Design'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'Neon Themed Website',
    slug: 'neon-themed-website',
    price: 39,
    description: 'Stunning neon-chrome landing page with gradient text effects and modern dark aesthetics.',
    longDescription: 'NeonChrome makes a bold statement with vibrant rainbow gradient text effects against a deep navy background. Featuring animated particles, custom mouse cursor, and glowing neon typography. Ideal for creative agencies, tech startups, music promotions, gaming platforms, and any brand wanting an electrifying first impression.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Neon', 'Gradient', 'Dark Mode'],
    demoVideoUrl: 'https://www.youtube.com/embed/jbKMlXEMOVo?rel=0&modestbranding=1',
    poster: 'src/images/Neon1.png',
    screenshots: [
      'src/images/Neon1.png',
      'src/images/Neon2.png',
      'src/images/Neon3.png',
      'src/images/Neon4.png'
    ],
    gumroadUrl: null,
    features: ['Rainbow Gradient Text', 'Particle Effects', 'Custom Cursor', 'Dark Theme', 'Smooth Scrolling', 'Modern Navigation'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Kinetic Cards',
    slug: 'kinetic-cards',
    price: 69,
    description: 'Motion-first card interface system with fluid animations and interactive UI elements.',
    longDescription: 'Kinetic Cards revolutionizes UI interaction with cards that morph, reveal, and respond with stunning fluid animations. Built for accessibility and performance, this template showcases features and products with dynamic visual storytelling. Perfect for SaaS platforms, product showcases, interactive portfolios, and innovative web experiences.',
    category: 'Landing Page',
    tags: ['React', 'SaaS', 'Interactive', 'Motion', 'UI Kit'],
    demoVideoUrl: 'https://www.youtube.com/embed/yzBFytExlmA?rel=0&modestbranding=1',
    poster: 'src/images/KineticCards1.png',
    screenshots: [
      'src/images/KineticCards1.png',
      'src/images/KineticCards2.png',
      'src/images/KineticCards3.png',
      'src/images/KineticCards4.png'
    ],
    gumroadUrl: null,
    features: ['Morphing Card Animations', 'Fluid Interactions', 'Modern Navigation', 'Feature Showcase', 'Product Grid', 'Case Studies'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Jungle Themed Portfolio',
    slug: 'jungle-themed-portfolio',
    price: 29,
    description: 'Immersive 3D jungle exploration game-style portfolio with interactive navigation.',
    longDescription: 'Experience a unique portfolio presentation with Jungle-themed interactive exploration. Navigate through a 3D forest environment with WASD controls, discover project areas, and explore content in an engaging game-like interface. Perfect for game developers, 3D artists, interactive designers, and creative professionals wanting to stand out.',
    category: 'Portfolio',
    tags: ['React', '3D', 'Gaming', 'Interactive', 'WebGL'],
    demoVideoUrl: 'https://www.youtube.com/embed/1MOoFgKQjww?rel=0&modestbranding=1',
    poster: 'src/images/JunglePortfolio1.png',
    screenshots: [
      'src/images/JunglePortfolio1.png',
      'src/images/JunglePortfolio2.png',
      'src/images/JunglePortfolio3.png',
      'src/images/JunglePortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['3D Environment', 'WASD Navigation', 'Interactive Exploration', 'Game-Style Interface', 'Location Tracking', 'Sound Controls'],
    isFeatured: false
  },
  {
    id: '7',
    title: 'Holo Timeline',
    slug: 'holo-timeline',
    price: 89,
    description: 'Digital agency website focused on building transformative digital experiences with timeline showcase.',
    longDescription: 'HoloTimeline showcases your agency\'s work through a compelling narrative. Featuring an award-winning digital agency presentation with emphasis on strategy to execution, stunning digital products, and business results. Includes timeline of success, case studies, and service offerings. Perfect for digital agencies, consultancies, and creative studios.',
    category: 'Business',
    tags: ['React', 'Agency', 'Portfolio', 'Business', 'Digital'],
    demoVideoUrl: 'https://www.youtube.com/embed/4n3g2sP-VdQ?rel=0&modestbranding=1',
    poster: 'src/images/Holotimeline1.png',
    screenshots: [
      'src/images/Holotimeline1.png',
      'src/images/Holotimeline2.png',
      'src/images/Holotimeline3.png',
      'src/images/Holotimeline4.png'
    ],
    gumroadUrl: null,
    features: ['Agency Showcase', 'Case Studies', 'Service Timeline', 'Team Profiles', 'Video Showreel', 'Contact Integration'],
    isFeatured: false
  },
  {
    id: '8',
    title: 'Gym Agency Website',
    slug: 'gym-agency-website',
    price: 59,
    description: 'Elite fitness training facility website with powerful branding and transformation-focused design.',
    longDescription: 'FORGE presents a premium fitness facility with elite training positioning. Featuring bold "Forge Your Strongest Self" messaging, trainer profiles, program showcases, transformation stories, and state-of-the-art equipment highlights. Perfect for luxury gyms, personal training studios, CrossFit boxes, and elite fitness facilities.',
    category: 'Business',
    tags: ['React', 'Business', 'Fitness', 'Gym', 'Premium'],
    demoVideoUrl: 'https://www.youtube.com/embed/rRYCpvl7j3k?rel=0&modestbranding=1',
    poster: 'src/images/Gym1.png',
    screenshots: [
      'src/images/Gym1.png',
      'src/images/Gym2.png',
      'src/images/Gym3.png',
      'src/images/Gym4.png'
    ],
    gumroadUrl: null,
    features: ['Bold Hero Section', 'Trainer Showcase', 'Program Details', 'Transformation Gallery', 'Video Story', 'Membership CTA'],
    isFeatured: false
  },
  {
    id: '9',
    title: 'Galaxy Themed Portfolio',
    slug: 'galaxy-themed-portfolio',
    price: 129,
    description: 'Space-themed interactive portfolio with immersive starfield and launch-style presentation.',
    longDescription: 'Galactic Atlas offers an extraordinary portfolio experience. Navigate through an interactive space environment with animated starfield, spacecraft silhouettes, and a dramatic "Launch Into Space" CTA. Features customizable portfolio sections titled "Your Name\'s Interactive Portfolio". Perfect for sci-fi artists, game developers, space enthusiasts, and creatives seeking cosmic impact.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', 'Space', 'Galaxy', 'Interactive'],
    demoVideoUrl: 'https://www.youtube.com/embed/68CVi85fpAY?rel=0&modestbranding=1',
    poster: 'src/images/GalaxyPortfolio1.png',
    screenshots: [
      'src/images/GalaxyPortfolio1.png',
      'src/images/GalaxyPortfolio2.png',
      'src/images/GalaxyPortfolio3.png',
      'src/images/GalaxyPortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['Animated Starfield', 'Interactive Launch CTA', 'Spacecraft Graphics', 'Cosmic Theme', 'Portfolio Sections', 'Scroll Prompts'],
    isFeatured: false
  },
  {
    id: '10',
    title: "Chef's Portfolio",
    slug: 'chefs-portfolio',
    price: 19,
    description: 'Michelin-starred chef portfolio with elegant food photography and culinary artistry presentation.',
    longDescription: 'Laurent Dubois presents fine dining excellence through sophisticated web design. Features stunning food photography with bokeh effects, elegant serif typography, "Three Michelin Stars" prestige badge, and sections for creations, press & awards, and products. Perfect for celebrity chefs, Michelin-starred restaurants, culinary artists, and gourmet food businesses.',
    category: 'Personal',
    tags: ['React', 'Portfolio', 'Food', 'Chef', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/mTv88T36tU0?rel=0&modestbranding=1',
    poster: 'src/images/Chef1.png',
    screenshots: [
      'src/images/Chef1.png',
      'src/images/Chef2.png',
      'src/images/Chef3.png',
      'src/images/Chef4.png'
    ],
    gumroadUrl: null,
    features: ['Luxury Food Photography', 'Elegant Typography', 'Achievement Badges', 'Creation Gallery', 'Press Section', 'Product Showcase'],
    isFeatured: false
  },
  {
    id: '11',
    title: 'Cascade Website',
    slug: 'cascade-website',
    price: 79,
    description: 'Corporate business template featuring smooth, cascading layouts and professional flow.',
    longDescription: 'Cascade Website brings a sense of flow and professionalism to your corporate presence. With cascading content sections and a clean, structured layout, it guides visitors naturally through your story. Perfect for consulting firms, law offices, and corporate agencies.',
    category: 'Business',
    tags: ['React', 'Business', 'Corporate', 'Professional'],
    demoVideoUrl: 'https://www.youtube.com/embed/tO0M3U4wEbc?rel=0&modestbranding=1',
    poster: 'src/images/Cascade1.png',
    screenshots: [
      'src/images/Cascade1.png',
      'src/images/Cascade2.png',
      'src/images/Cascade3.png',
      'src/images/Cascade4.png'
    ],
    gumroadUrl: null,
    features: ['Cascading Layout', 'Service Showcase', 'Team Profiles', 'Client Logos', 'Case Studies', 'Contact Info'],
    isFeatured: false
  },
  {
    id: '12',
    title: 'Blueprint Website',
    slug: 'blueprint-website',
    price: 29,
    description: 'Structural landing page template ideal for architecture, construction, and planning phases.',
    longDescription: 'Lay the foundation for success with Blueprint Website. Its design mimics architectural precision with grid lines, technical fonts, and a clean blue-and-white aesthetic. Best for construction companies, architects, and engineering firms launching a new project.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Architecture', 'Construction'],
    demoVideoUrl: 'https://www.youtube.com/embed/cGe36VqawNQ?rel=0&modestbranding=1',
    poster: 'src/images/Blueprint1.png',
    screenshots: [
      'src/images/Blueprint1.png',
      'src/images/Blueprint2.png',
      'src/images/Blueprint3.png',
      'src/images/Blueprint4.png'
    ],
    gumroadUrl: null,
    features: ['Grid Layout', 'Blueprints Aesthetic', 'Project Timeline', 'Team Grid', 'Quote Request', 'Mobile Friendly'],
    isFeatured: false
  },
  {
    id: '13',
    title: 'Aurora Website',
    slug: 'aurora-website',
    price: 29,
    description: 'Vibrant landing page capturing the beauty of northern lights for colorful brand introductions.',
    longDescription: 'Light up the web with Aurora Website. Using mesmerizing color gradients inspired by the northern lights, this landing page is sure to capture attention. Excellent for creative apps, art events, or any brand that loves color.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Colorful', 'Aurora'],
    demoVideoUrl: 'https://www.youtube.com/embed/7bP5PsICXBY?rel=0&modestbranding=1',
    poster: 'src/images/Aurora1.png',
    screenshots: [
      'src/images/Aurora1.png',
      'src/images/Aurora2.png',
      'src/images/Aurora3.png',
      'src/images/Aurora4.png'
    ],
    gumroadUrl: null,
    features: ['Gradient Backgrounds', 'Smooth Transitions', 'Feature Highlights', 'Newsletter Signup', 'Responsive', 'Modern UI'],
    isFeatured: false
  },
  {
    id: '14',
    title: 'Aura Bloom',
    slug: 'aura-bloom',
    price: 29,
    description: 'Soft and organic landing page template for wellness brands and natural products.',
    longDescription: 'Breathe life into your brand with Aura Bloom. Its soft, organic design and blooming animations create a sense of growth and wellness. Perfect for health products, yoga studios, and eco-friendly brands.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Wellness', 'Organic'],
    demoVideoUrl: 'https://www.youtube.com/embed/4yvElG9buvg?rel=0&modestbranding=1',
    poster: 'src/images/AuraBloom1.png',
    screenshots: [
      'src/images/AuraBloom1.png',
      'src/images/AuraBloom2.png',
      'src/images/AuraBloom3.png',
      'src/images/AuraBloom4.png'
    ],
    gumroadUrl: null,
    features: ['Soft Colors', 'Bloom Animations', 'Testimonials', 'Product Showcase', 'FAQ Section', 'Contact'],
    isFeatured: false
  },
  {
    id: '15',
    title: 'Atelier',
    slug: 'atelier',
    price: 29,
    description: 'Sophisticated portfolio for craftspeople, artists, and bespoke makers.',
    longDescription: 'Welcome to your digital workshop. Atelier is crafted for those who craft. With a focus on textures, detail, and craftsmanship, it effectively displays your handmade goods or artistic services. Suitable for artisans, sculptors, and boutique makers.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', 'Artisan', 'Craft'],
    demoVideoUrl: 'https://www.youtube.com/embed/Yarh7R1JTeQ?rel=0&modestbranding=1',
    poster: 'src/images/Atelier1.png',
    screenshots: [
      'src/images/Atelier1.png',
      'src/images/Atelier2.png',
      'src/images/Atelier3.png',
      'src/images/Atelier4.png'
    ],
    gumroadUrl: null,
    features: ['Gallery Grid', 'Detail Zoom', 'Artist Bio', 'Process Section', 'Shop Links', 'Contact'],
    isFeatured: false
  },
  {
    id: '16',
    title: 'Artisan Tote',
    slug: 'artisan-tote',
    price: 29,
    description: 'Niche e-commerce template specifically designed for selling single product lines or handmade collections.',
    longDescription: 'Carry your sales further with Artisan Tote. This shop template is tailored for small batch goods and single-product focus sites. It includes storytelling elements to weave the narrative of your product. Ideal for bag makers, leather workers, and boutique brands.',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', 'Boutique', 'Handmade'],
    demoVideoUrl: 'https://www.youtube.com/embed/qu_f3sqE3-I?rel=0&modestbranding=1',
    poster: 'src/images/ArtisanTote1.png',
    screenshots: [
      'src/images/ArtisanTote1.png',
      'src/images/ArtisanTote2.png',
      'src/images/ArtisanTote3.png',
      'src/images/ArtisanTote4.png'
    ],
    gumroadUrl: null,
    features: ['Single Product Focus', 'Storytelling Layout', 'Cart', 'Image Zoom', 'Specs Section', 'Simple Checkout'],
    isFeatured: false
  },
  {
    id: '17',
    title: 'Prism Light Studio',
    slug: 'prism-light-studio',
    price: 29,
    description: 'A vibrant, portfolio-centric template designed for creative studios, photographers, and visual artists.',
    longDescription: 'Prism Light Studio is all about visual impact. Designed for photographers and digital artists, this template features a masonry grid gallery, lightbox integration, and a dark-mode aesthetic that makes colors pop. It includes dedicated sections for service packages and booking inquiries.',
    category: 'Portfolio',
    tags: ['React', 'Photography', 'Studio', 'Creative'],
    demoVideoUrl: 'https://www.youtube.com/embed/jrxGGBneAw4?rel=0&modestbranding=1',
    poster: 'src/images/PrismLight1.png',
    screenshots: [
      'src/images/PrismLight1.png',
      'src/images/PrismLight2.png',
      'src/images/PrismLight3.png',
      'src/images/PrismLight4.png'
    ],
    gumroadUrl: null,
    features: ['Masonry Gallery', 'Lightbox Support', 'Service Packages', 'Booking Form', 'Dark Mode', 'Responsive Grid'],
    isFeatured: false
  },
  {
    id: '18',
    title: 'Prism Website',
    slug: 'prism-website',
    price: 29,
    description: 'A versatile, multi-purpose corporate template suitable for SaaS startups and tech companies.',
    longDescription: 'Prism Website offers a clean, professional foundation for any business. With a focus on clarity and conversion, it features pricing tables, feature breakdowns, and a robust blog section. The geometric design language conveys stability and modern innovation.',
    category: 'Business',
    tags: ['React', 'SaaS', 'Corporate', 'Startup'],
    demoVideoUrl: 'https://www.youtube.com/embed/MDuIKTb3SQo?rel=0&modestbranding=1',
    poster: 'src/images/Prism1.png',
    screenshots: [
      'src/images/Prism1.png',
      'src/images/Prism2.png',
      'src/images/Prism3.png',
      'src/images/Prism4.png'
    ],
    gumroadUrl: null,
    features: ['Pricing Tables', 'Feature Grid', 'Testimonials Carousel', 'Contact Form', 'Blog Layout', 'SEO Optimized'],
    isFeatured: false
  },
  {
    id: '19',
    title: 'Restaurant Website',
    slug: 'restaurant-website',
    price: 49,
    description: 'Upscale fine dining restaurant website with elegant ambiance and culinary art presentation.',
    longDescription: 'Maison Lumière embodies fine dining excellence. Features warm candlelit atmosphere, elegant menu presentations, reservation booking, and a sophisticated design that highlights seasonal flavors and timeless techniques. Includes gallery, about section, and contact information. Perfect for upscale restaurants, bistros, fine dining establishments, and culinary experiences.',
    category: 'Business',
    tags: ['React', 'Restaurant', 'Business', 'Food', 'Fine Dining'],
    demoVideoUrl: 'https://www.youtube.com/embed/DbESf56gIBI?rel=0&modestbranding=1',
    poster: 'src/images/Restaurant1.png',
    screenshots: [
      'src/images/Restaurant1.png',
      'src/images/Restaurant2.png',
      'src/images/Restaurant3.png',
      'src/images/Restaurant4.png'
    ],
    gumroadUrl: null,
    features: ['Elegant Design', 'Menu Showcase', 'Reservation System', 'Gallery Section', 'About Restaurant', 'Contact Info'],
    isFeatured: false
  },
  {
    id: '20',
    title: 'Soft UI Pro',
    slug: 'soft-ui-pro',
    price: 29,
    description: 'A premium admin dashboard template featuring a trendy neumorphic design style.',
    longDescription: 'Soft UI Pro brings the neumorphism trend to admin dashboards. Soft shadows, rounded corners, and gradients make data visualization easy on the eyes. Ideal for SaaS backends, analytics platforms, or user management systems requiring a modern touch.',
    category: 'SaaS',
    tags: ['React', 'Dashboard', 'Admin', 'UI Kit'],
    demoVideoUrl: 'https://www.youtube.com/embed/mIEMKgZpWl0?rel=0&modestbranding=1',
    poster: 'src/images/SoftUI1.png',
    screenshots: [
      'src/images/SoftUI1.png',
      'src/images/SoftUI2.png',
      'src/images/SoftUI3.png',
      'src/images/SoftUI4.png'
    ],
    gumroadUrl: null,
    features: ['Neumorphic Design', 'Analytics Charts', 'User Tables', 'Notification System', 'Profile Settings', 'Auth Pages'],
    isFeatured: false
  },
  {
    id: '21',
    title: 'Spectra',
    slug: 'spectra',
    price: 29,
    description: 'A high-energy digital agency template with bold typography and vibrant animations.',
    longDescription: 'Spectra is built for agencies that want to stand out. With bold color contrasts and smooth scroll animations, it captures attention immediately. It includes detailed case study layouts, team member profiles, and a high-converting project inquiry form.',
    category: 'Business',
    tags: ['React', 'Agency', 'Creative', 'Business'],
    demoVideoUrl: 'https://www.youtube.com/embed/88K7qy6z560?rel=0&modestbranding=1',
    poster: 'src/images/Spectra1.png',
    screenshots: [
      'src/images/Spectra1.png',
      'src/images/Spectra2.png',
      'src/images/Spectra3.png',
      'src/images/Spectra4.png'
    ],
    gumroadUrl: null,
    features: ['Case Studies', 'Animated Hero', 'Team Section', 'Client Logo Grid', 'Contact Form', 'Smooth Scroll'],
    isFeatured: false
  },
  {
    id: '22',
    title: 'Story Canvas',
    slug: 'story-canvas',
    price: 29,
    description: 'A minimalist blog and magazine template tailored for writers and storytellers.',
    longDescription: 'Story Canvas puts your words front and center. This distraction-free template is perfect for personal blogs, news sites, or editorial portfolios. It features excellent typography, estimated reading times, and author bios to help build a connection with readers.',
    category: 'Personal',
    tags: ['React', 'Blog', 'Editorial', 'Minimal'],
    demoVideoUrl: 'https://www.youtube.com/embed/nlzX0zs2Gf8?rel=0&modestbranding=1',
    poster: 'src/images/StoryCanvas1.png',
    screenshots: [
      'src/images/StoryCanvas1.png',
      'src/images/StoryCanvas2.png',
      'src/images/StoryCanvas3.png',
      'src/images/StoryCanvas4.png'
    ],
    gumroadUrl: null,
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
    poster: 'src/images/TimelessElegance1.png',
    screenshots: [
      'src/images/TimelessElegance1.png',
      'src/images/TimelessElegance2.png',
      'src/images/TimelessElegance3.png',
      'src/images/TimelessElegance4.png'
    ],
    gumroadUrl: null,
    features: ['High-Res Zoom', 'Wishlist', 'Request Price', 'Elegant Layout', 'Brand Story', 'Cart Sidebar'],
    isFeatured: false
  },
  {
    id: '24',
    title: 'Travel Agency Website',
    slug: 'travel-agency-website',
    price: 99,
    description: 'Award-winning luxury travel agency website with elegant search functionality and destination showcases.',
    longDescription: 'Wanderlust delivers a premium travel booking experience. Features impressive 4.9/5 rating from 2,500+ reviews, multi-city office presence, advanced search with destination/date/guest filters, and compelling statistics (50+ destinations, 15k+ travelers, 98% satisfaction, 14 years experience). Perfect for luxury travel agencies, tour operators, and bespoke travel services.',
    category: 'Business',
    tags: ['React', 'Business', 'Travel', 'Booking', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/035W8A-3Gxg?rel=0&modestbranding=1',
    poster: 'src/images/Travel1.png',
    screenshots: [
      'src/images/Travel1.png',
      'src/images/Travel2.png',
      'src/images/Travel3.png',
      'src/images/Travel4.png'
    ],
    gumroadUrl: null,
    features: ['Advanced Search', 'Destination Gallery', 'Review System', 'Multi-Location', 'Statistics Display', 'Booking CTA'],
    isFeatured: false
  },
  {
    id: '25',
    title: 'Velvet Commerce',
    slug: 'velvet-commerce',
    price: 149,
    description: 'Premium 3D product configurator for luxury furniture with real-time material customization.',
    longDescription: 'Velvet Commerce revolutionizes online furniture shopping with an interactive 3D product configurator. Features real-time material selection (Burgundy Velvet, fabrics, patterns), adjustable roughness/sheen/tint controls, multiple camera angles, and dynamic lighting presets (Studio Softbox, Warm Sunset, Cool Exhibition). Perfect for luxury furniture stores, interior design shops, custom manufacturing, and premium e-commerce.',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', '3D', 'Configurator', 'Luxury'],
    demoVideoUrl: 'https://www.youtube.com/embed/A94wIkKF4OM?rel=0&modestbranding=1',
    poster: 'src/images/Velvet1.png',
    screenshots: [
      'src/images/Velvet1.png',
      'src/images/Velvet2.png',
      'src/images/Velvet3.png',
      'src/images/Velvet4.png'
    ],
    gumroadUrl: null,
    features: ['3D Product Viewer', 'Material Selector', 'Lighting Controls', 'Camera Angles', 'Customization Panel', 'Price Display'],
    isFeatured: false
  },
  {
    id: '26',
    title: 'Wedding Agency Website',
    slug: 'wedding-agency-website',
    price: 79,
    description: 'Elegant wedding photography portfolio with romantic storytelling and cinematic presentation.',
    longDescription: 'Eternal Moments captures love stories with elegance and grace. Features beautiful sunset imagery, romantic tagline "Capturing Love, One Frame at a Time", portfolio gallery, pricing packages, and booking information. Showcases elegant wedding photography and cinematic videography. Perfect for wedding photographers, videographers, event documentation, and romantic services.',
    category: 'Personal',
    tags: ['React', 'Portfolio', 'Photography', 'Wedding', 'Events'],
    demoVideoUrl: 'https://www.youtube.com/embed/aSzpXZH0NVM?rel=0&modestbranding=1',
    poster: 'src/images/Wedding1.png',
    screenshots: [
      'src/images/Wedding1.png',
      'src/images/Wedding2.png',
      'src/images/Wedding3.png',
      'src/images/Wedding4.png'
    ],
    gumroadUrl: null,
    features: ['Romantic Design', 'Portfolio Gallery', 'Service Packages', 'Testimonials', 'Booking Form', 'Blog Section'],
    isFeatured: false
  }
];

export const categories = ['All', 'SaaS', 'Portfolio', 'E-commerce', 'Landing Page', 'Business', 'Personal'] as const;

export const allTags = [...new Set(templates.flatMap(t => t.tags))];

export const heroImage = 'https://d64gsuwffb70l.cloudfront.net/697f345016ddabc5c5663713_1769944230275_19bf04de.jpg';