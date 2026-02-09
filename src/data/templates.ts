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
    description: 'A cutting-edge SaaS dashboard template featuring advanced typography and fluid data visualizations.',
    longDescription: 'TypoFlux is a premium SaaS dashboard explicitly designed for data-heavy applications. It combines advanced typographic hierarchies with fluid animations to create a seamless user experience. Perfect for analytics platforms, CRM systems, and administrative interfaces.',
    category: 'SaaS',
    tags: ['React', 'Tailwind', 'Dashboard', 'Typography'],
    demoVideoUrl: 'https://www.youtube.com/embed/4Rpn-H9VO_4?rel=0&modestbranding=1',
    poster: 'src/images/Typoflux1.png',
    screenshots: [
      'src/images/Typoflux1.png',
      'src/images/Typoflux2.png',
      'src/images/Typoflux3.png',
      'src/images/Typoflux4.png'
    ],
    gumroadUrl: null,
    features: ['Advanced Typography', 'Data Visualization', 'Fluid Animations', 'Dark Theme Support', 'Responsive Layouts', 'Recharts Integration'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Ocean Themed Portfolio',
    slug: 'ocean-themed-portfolio',
    price: 49,
    description: 'Serene and deep blue portfolio template perfect for digital artists and marine enthusiasts.',
    longDescription: 'Dive into creativity with the Ocean Themed Portfolio. Its calming blue palette and wave-like transitions provide a unique backdrop for your work. Ideal for photographers, illustrators, and anyone wanting to showcase their depths.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', 'Blue', 'Creative'],
    demoVideoUrl: 'https://www.youtube.com/embed/9fh2vovJH5U?rel=0&modestbranding=1',
    poster: 'src/images/OceanPortfolio1.png',
    screenshots: [
      'src/images/OceanPortfolio1.png',
      'src/images/OceanPortfolio2.png',
      'src/images/OceanPortfolio3.png',
      'src/images/OceanPortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['Ocean Color Palette', 'Wave Animations', 'Gallery Grid', 'About Me Section', 'Contact Form', 'Mobile Responsive'],
    isFeatured: true
  },
  {
    id: '3',
    title: 'Nexus Website',
    slug: 'nexus-website',
    price: 99,
    description: 'A central hub for e-commerce, designed to connect high-tech products with modern consumers.',
    longDescription: 'Nexus Website is the ultimate connection point for your digital store. Featuring a futuristic design and robust shopping features, it acts as a central hub for all your e-commerce needs. Great for tech stores, gadget shops, and digital downloads.',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', 'Tech', 'Futuristic'],
    demoVideoUrl: 'https://www.youtube.com/embed/-_WNYEnyyJw?rel=0&modestbranding=1',
    poster: 'src/images/Nexus1.png',
    screenshots: [
      'src/images/Nexus1.png',
      'src/images/Nexus2.png',
      'src/images/Nexus3.png',
      'src/images/Nexus4.png'
    ],
    gumroadUrl: null,
    features: ['Central Hub Layout', 'Product Grid', 'Cart System', 'Tech Aesthetic', 'User Accounts', 'Fast Loading'],
    isFeatured: true
  },
  {
    id: '4',
    title: 'Neon Themed Website',
    slug: 'neon-themed-website',
    price: 39,
    description: 'Electrifying landing page template with glowing accents and night-mode aesthetics.',
    longDescription: 'Stand out in the dark with the Neon Themed Website. This template uses vibrant neon colors against a deep black background to create an electrifying effect. Perfect for nightlife events, music promotions, or bold startup launches.',
    category: 'Landing Page',
    tags: ['React', 'Landing Page', 'Neon', 'Dark Mode'],
    demoVideoUrl: 'https://www.youtube.com/embed/jbKMlXEMOVo?rel=0&modestbranding=1',
    poster: 'src/images/Neon1.png',
    screenshots: [
      'src/images/Neon1.png',
      'src/images/Neon2.png',
      'src/images/Neon3.png',
      'src/images/Neon4.png'
    ],
    gumroadUrl: null,
    features: ['Glowing Effects', 'Dark Background', 'High Contrast', 'Animated Sections', 'Event Schedule', 'Ticket Booking'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Kinetic Cards',
    slug: 'kinetic-cards',
    price: 69,
    description: 'Dynamic business template emphasizing motion and interaction through card-based layouts.',
    longDescription: 'Kinetic Cards brings your business content to life. Using a dynamic card sorting and shuffling system, it presents services and case studies in an interactive way. Ideal for creative agencies, marketing firms, and interactive presentations.',
    category: 'Business',
    tags: ['React', 'Business', 'Interactive', 'Motion'],
    demoVideoUrl: 'https://www.youtube.com/embed/yzBFytExlmA?rel=0&modestbranding=1',
    poster: 'src/images/KineticCards1.png',
    screenshots: [
      'src/images/KineticCards1.png',
      'src/images/KineticCards2.png',
      'src/images/KineticCards3.png',
      'src/images/KineticCards4.png'
    ],
    gumroadUrl: null,
    features: ['Interactive Cards', 'Motion Effects', 'Service Showcase', 'Team Section', 'Testimonials', 'Contact Forms'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Jungle Themed Portfolio',
    slug: 'jungle-themed-portfolio',
    price: 29,
    description: 'Lush and vibrant portfolio template inspired by nature and wild aesthetics.',
    longDescription: 'Unleash your wild side with the Jungle Themed Portfolio. Featuring lush green tones, organic shapes, and a fresh layout, it\'s perfect for nature photographers, environmental activists, or anyone who wants a fresh, organic look.',
    category: 'Personal',
    tags: ['React', 'Portfolio', 'Nature', 'Green'],
    demoVideoUrl: 'https://www.youtube.com/embed/1MOoFgKQjww?rel=0&modestbranding=1',
    poster: 'src/images/JunglePortfolio1.png',
    screenshots: [
      'src/images/JunglePortfolio1.png',
      'src/images/JunglePortfolio2.png',
      'src/images/JunglePortfolio3.png',
      'src/images/JunglePortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['Organic Design', 'Green Color Palette', 'Blog Section', 'Gallery Layout', 'About the Author', 'Social Media Integration'],
    isFeatured: false
  },
  {
    id: '7',
    title: 'Holo Timeline',
    slug: 'holo-timeline',
    price: 89,
    description: 'Futuristic SaaS dashboard focused on temporal data and holographic history visualization.',
    longDescription: 'Holo Timeline reshapes how you view time-based data. With a holographic interface and specialized timeline components, it is ideal for project management tools, history archives, or future-tech dashboards.',
    category: 'SaaS',
    tags: ['React', 'Dashboard', 'Timeline', 'Holographic'],
    demoVideoUrl: 'https://www.youtube.com/embed/4n3g2sP-VdQ?rel=0&modestbranding=1',
    poster: 'src/images/Holotimeline1.png',
    screenshots: [
      'src/images/Holotimeline1.png',
      'src/images/Holotimeline2.png',
      'src/images/Holotimeline3.png',
      'src/images/Holotimeline4.png'
    ],
    gumroadUrl: null,
    features: ['Holographic UI', 'Timeline Components', 'Gantt Chart View', 'Data Filtering', 'Event Logging', 'Dark Mode'],
    isFeatured: true
  },
  {
    id: '8',
    title: 'Gym Agency Website',
    slug: 'gym-agency-website',
    price: 59,
    description: 'High-energy business template for fitness agencies, gyms, and personal trainers.',
    longDescription: 'Pump up your online presence with the Gym Agency Website. Designed for fitness professionals, it features energetic layouts, class schedules, trainer profiles, and membership sign-up forms. Get your clients moving!',
    category: 'Business',
    tags: ['React', 'Business', 'Fitness', 'Gym'],
    demoVideoUrl: 'https://www.youtube.com/embed/rRYCpvl7j3k?rel=0&modestbranding=1',
    poster: 'src/images/Gym1.png',
    screenshots: [
      'src/images/Gym1.png',
      'src/images/Gym2.png',
      'src/images/Gym3.png',
      'src/images/Gym4.png'
    ],
    gumroadUrl: null,
    features: ['Class Schedules', 'Trainer Profiles', 'Membership Plans', 'BMI Calculator', 'Gallery', 'Contact/Location'],
    isFeatured: false
  },
  {
    id: '9',
    title: 'Galaxy Themed Portfolio',
    slug: 'galaxy-themed-portfolio',
    price: 129,
    description: 'Out-of-this-world portfolio template featuring space aesthetics and starry animations.',
    longDescription: 'Take your work to the stars with the Galaxy Themed Portfolio. This immersive template uses parallax starry backgrounds, planet motifs, and deep space colors to showcase your projects. Perfect for game designers, sci-fi artists, and dreamers.',
    category: 'Portfolio',
    tags: ['React', 'Portfolio', 'Space', 'Galaxy'],
    demoVideoUrl: 'https://www.youtube.com/embed/68CVi85fpAY?rel=0&modestbranding=1',
    poster: 'src/images/GalaxyPortfolio1.png',
    screenshots: [
      'src/images/GalaxyPortfolio1.png',
      'src/images/GalaxyPortfolio2.png',
      'src/images/GalaxyPortfolio3.png',
      'src/images/GalaxyPortfolio4.png'
    ],
    gumroadUrl: null,
    features: ['Starry Background', 'Parallax Scrolling', 'Project Constellations', 'Cosmic Colors', 'About Mission', 'Contact Station'],
    isFeatured: true
  },
  {
    id: '10',
    title: "Chef's Portfolio",
    slug: 'chefs-portfolio',
    price: 19,
    description: 'Tasteful portfolio template designed for chefs, culinary experts, and food bloggers.',
    longDescription: 'Serve up a visual feast with Chef\'s Portfolio. This template focuses on high-quality food photography and elegant typography to showcase your culinary creations. Ideal for chefs, recipe developers, and restaurant owners.',
    category: 'Personal',
    tags: ['React', 'Portfolio', 'Food', 'Chef'],
    demoVideoUrl: 'https://www.youtube.com/embed/mTv88T36tU0?rel=0&modestbranding=1',
    poster: 'src/images/Chef1.png',
    screenshots: [
      'src/images/Chef1.png',
      'src/images/Chef2.png',
      'src/images/Chef3.png',
      'src/images/Chef4.png'
    ],
    gumroadUrl: null,
    features: ['Recipe Gallery', 'Menu Display', 'Reservation Form', 'Bio Section', 'Testimonials', 'Social Links'],
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
    price: 29,
    description: 'A mouth-watering template designed for bistros, cafes, and fine dining establishments.',
    longDescription: 'Serve up a great first impression with this dedicated Restaurant template. It features a categorized digital menu, an OpenTable reservation integration hook, and a location finder. The aesthetic focuses on high-quality food photography and elegant typography.',
    category: 'Business',
    tags: ['React', 'Restaurant', 'Food', 'Hospitality'],
    demoVideoUrl: 'https://www.youtube.com/embed/DbESf56gIBI?rel=0&modestbranding=1',
    poster: 'src/images/Restaurant1.png',
    screenshots: [
      'src/images/Restaurant1.png',
      'src/images/Restaurant2.png',
      'src/images/Restaurant3.png',
      'src/images/Restaurant4.png'
    ],
    gumroadUrl: null,
    features: ['Digital Menu', 'Reservation System', 'Photo Gallery', 'Location Map', 'Chef Bio', 'Event Calendar'],
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
    price: 29,
    description: 'An immersive booking template for travel agencies, tour operators, and tourism boards.',
    longDescription: 'Take your customers on a journey before they even book. This template features large hero video backgrounds, a powerful destination search engine, and detailed itinerary layouts. It handles tour packages, pricing tiers, and customer reviews seamlessly.',
    category: 'Business',
    tags: ['React', 'Travel', 'Booking', 'Tourism'],
    demoVideoUrl: 'https://www.youtube.com/embed/035W8A-3Gxg?rel=0&modestbranding=1',
    poster: 'src/images/Travel1.png',
    screenshots: [
      'src/images/Travel1.png',
      'src/images/Travel2.png',
      'src/images/Travel3.png',
      'src/images/Travel4.png'
    ],
    gumroadUrl: null,
    features: ['Destination Search', 'Itinerary Timeline', 'Booking Engine', 'Interactive Maps', 'Weather Widget', 'Reviews'],
    isFeatured: false
  },
  {
    id: '25',
    title: 'Velvet Commerce',
    slug: 'velvet-commerce',
    price: 29,
    description: 'A trendy, fashion-forward e-commerce template for clothing brands and boutiques.',
    longDescription: 'Velvet Commerce is designed to sell style. With a layout that resembles a fashion editorial, it supports lookbooks, size guides, and advanced product filtering. The mobile experience is optimized for swiping and quick add-to-cart actions.',
    category: 'E-commerce',
    tags: ['React', 'Fashion', 'Clothing', 'Retail'],
    demoVideoUrl: 'https://www.youtube.com/embed/A94wIkKF4OM?rel=0&modestbranding=1',
    poster: 'src/images/Velvet1.png',
    screenshots: [
      'src/images/Velvet1.png',
      'src/images/Velvet2.png',
      'src/images/Velvet3.png',
      'src/images/Velvet4.png'
    ],
    gumroadUrl: null,
    features: ['Lookbook Layout', 'Size Guide Modal', 'Product Filtering', 'Quick View', 'Instagram Feed', 'Cart Drawer'],
    isFeatured: false
  },
  {
    id: '26',
    title: 'Wedding Agency Website',
    slug: 'wedding-agency-website',
    price: 29,
    description: 'A romantic and organized template for wedding planners and event coordinators.',
    longDescription: 'Help couples plan their big day with style. This Wedding Agency template includes portfolio galleries for past events, service packages for different budgets, and specific inquiry forms. It uses a soft color palette and elegant fonts to set the romantic mood.',
    category: 'Business',
    tags: ['React', 'Wedding', 'Events', 'Planning'],
    demoVideoUrl: 'https://www.youtube.com/embed/aSzpXZH0NVM?rel=0&modestbranding=1',
    poster: 'src/images/Wedding1.png',
    screenshots: [
      'src/images/Wedding1.png',
      'src/images/Wedding2.png',
      'src/images/Wedding3.png',
      'src/images/Wedding4.png'
    ],
    gumroadUrl: null,
    features: ['Portfolio Gallery', 'Service Tiers', 'Consultation Form', 'Testimonials', 'Vendor List', 'Event Timeline'],
    isFeatured: false
  }
];

export const categories = ['All', 'SaaS', 'Portfolio', 'E-commerce', 'Landing Page', 'Business', 'Personal'] as const;

export const allTags = [...new Set(templates.flatMap(t => t.tags))];

export const heroImage = 'https://d64gsuwffb70l.cloudfront.net/697f345016ddabc5c5663713_1769944230275_19bf04de.jpg';