import React from 'react';
import { 
  Search, Eye, ShoppingCart, Download, MessageSquare, Code, Rocket, ArrowRight,
  Clock, Award, Smartphone, Paintbrush 
} from 'lucide-react';
import { FAQSection } from './FAQSection';
import CTASection from './CTASection';

interface HowItWorksPageProps {
  onBrowseTemplates: () => void;
  onContactUs: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBrowseTemplates, onContactUs }) => {
  const steps = [
    {
      icon: Search,
      title: 'Browse Templates',
      description:
        'Explore our collection of premium website templates. Filter by category, tech stack, or price to quickly find the right fit for your project.',
      color: 'from-blue-500 to-green-500'
    },
    {
      icon: Eye,
      title: 'Preview & Demo',
      description:
        'Watch detailed video demos and browse real screenshots. See exactly how the template looks, feels, and performs before moving forward.',
      color: 'from-yellow-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'Secure Purchase',
      description:
        'Buy via Gumroad for the fastest experience. We also accept manual payments if Gumroad isn\'t available for you—just email us with the template ID.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Download,
      title: 'Instant Delivery',
      description:
        'Gumroad customers get immediate file access. For manual buyers, we send a secure download link containing the full project files once payment is received.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Customize & Build',
      description:
        'Need branding, content updates, or feature changes? We offer fast, professional customization as an optional service. Full custom work is clearly quoted.',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      icon: Rocket,
      title: 'Launch Your Project',
      description:
        'Deploy your website and go live with confidence. Our templates are built for performance and scalability from day one.',
      color: 'from-blue-500 to-indigo-500'
    }
  ];


  const benefits = [
    {
      icon: Clock,
      title: 'Save Weeks of Development',
      description: 'Skip the tedious setup and boilerplate. Start with a production-ready foundation.'
    },
    {
      icon: Award,
      title: 'Professional Design',
      description: 'Every template is crafted with attention to detail, following modern design principles.'
    },
    {
      icon: Code,
      title: 'Clean, Maintainable Code',
      description: 'Well-structured codebase with TypeScript & React.js, proper patterns, and comprehensive documentation.'
    },
    {
      icon: MessageSquare,
      title: 'Free Support',
      description: 'Get free setup guidance and minor bug fixes you face after running locally for the first time.'
    },
    {
      icon: Smartphone,
      title: 'Responsive & Accessible',
      description: 'Mobile-first design with proper accessibility features built in from the start.'
    },
    {
      icon: Paintbrush,
      title: 'Customization Available',
      description: 'Need Customization based on your Brand, content updates, feature changes or SEO optimization? We offer fast, professional customization as an optional service.'
    }
  ];

  return (
    <section className="relative py-24 min-h-screen bg-obsidian overflow-hidden">
      {/* ── Ambient background glow blobs ── */}
      <div className="absolute top-10 right-[5%] w-[500px] h-[500px] bg-purple-700/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] bg-solar-gold/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[60%] right-[15%] w-[450px] h-[450px] bg-violet-600/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 left-[20%] w-[400px] h-[400px] bg-purple-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            How It Works
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            From browsing to launching, here's everything you need to know about 
            getting started with our premium templates.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40 animate-fade-up stagger-1">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative rounded-[2rem] p-9 transition-all duration-500 overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(30,28,40,1) 0%, rgba(20,18,28,1) 40%, rgba(25,22,35,1) 100%)',
                border: '1px solid rgba(139,92,246,0.12)',
                boxShadow: '0 8px 50px -15px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              {/* Internal gradient haze */}
              <div className="absolute top-0 right-0 w-36 h-28 bg-purple-500/[0.07] rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/[0.14] transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-28 h-24 bg-solar-gold/[0.04] rounded-full blur-[40px] pointer-events-none group-hover:bg-solar-gold/[0.08] transition-all duration-700" />
              
              {/* Icon Container */}
              <div
                className="relative z-10 w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(139,92,246,0.06) 100%)',
                  border: '1px solid rgba(244,185,97,0.15)',
                  boxShadow: '0 0 20px rgba(244,185,97,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                <step.icon className="w-7 h-7 text-solar-gold stroke-[1.25px]" />
              </div>

              {/* Title & Desc */}
              <h3 className="relative z-10 text-2xl font-serif text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="relative z-10 text-sm md:text-base text-white/40 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom glow accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Why Choose Our Templates */}
        <div className="mb-40 animate-fade-up stagger-2">
          <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-20 opacity-90">
             Why Choose Our Templates?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-5 group">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(139,92,246,0.05) 100%)',
                    border: '1px solid rgba(244,185,97,0.12)',
                    boxShadow: '0 0 15px rgba(244,185,97,0.04)',
                  }}
                >
                   <benefit.icon className="w-5 h-5 text-solar-gold/80 group-hover:text-solar-gold transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2 tracking-wide group-hover:text-solar-gold/90 transition-colors">{benefit.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-sans">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection 
          onBrowseTemplates={onBrowseTemplates} 
          onContactUs={onContactUs} 
        />
      </div>
    </section>
  );
};

export default HowItWorksPage;
