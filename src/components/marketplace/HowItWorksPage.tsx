import React from 'react';
import { Search, Eye, ShoppingCart, Download, Code, Rocket, ArrowRight } from 'lucide-react';

interface HowItWorksPageProps {
  onBrowseTemplates: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBrowseTemplates }) => {
  const steps = [
    {
      icon: Search,
      title: 'Browse Templates',
      description: 'Explore our collection of premium templates. Filter by category, tech stack, or price to find exactly what you need.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Preview & Demo',
      description: 'Watch detailed video demos and browse screenshots. See exactly what you\'re getting before you buy.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'Purchase Securely',
      description: 'Buy with confidence through Gumroad. Secure payment processing with instant access to your purchase.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Download,
      title: 'Download Instantly',
      description: 'Get immediate access to the complete source code. Download includes all components, assets, and documentation.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Customize & Build',
      description: 'Modify the template to match your brand. Clean, well-documented code makes customization easy.',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      icon: Rocket,
      title: 'Launch Your Project',
      description: 'Deploy your new website and go live. Our templates are optimized for performance and SEO from day one.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const benefits = [
    {
      title: 'Save Weeks of Development',
      description: 'Skip the tedious setup and boilerplate. Start with a production-ready foundation.'
    },
    {
      title: 'Professional Design',
      description: 'Every template is crafted with attention to detail, following modern design principles.'
    },
    {
      title: 'Clean, Maintainable Code',
      description: 'Well-structured codebase with TypeScript, proper patterns, and comprehensive documentation.'
    },
    {
      title: 'Lifetime Updates',
      description: 'Get free updates forever. We continuously improve our templates based on feedback.'
    },
    {
      title: 'Responsive & Accessible',
      description: 'Mobile-first design with proper accessibility features built in from the start.'
    },
    {
      title: 'SEO Optimized',
      description: 'Semantic HTML, meta tags, and performance optimizations for better search rankings.'
    }
  ];

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From browsing to launching, here's everything you need to know about 
            getting started with our premium templates.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl border border-border p-6 hover-lift"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Choose Our Templates?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Browse our collection and find the perfect template for your next project.
          </p>
          <button
            onClick={onBrowseTemplates}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Browse Templates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
