import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onBrowseTemplates: () => void;
  onContactUs: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onBrowseTemplates, onContactUs }) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Start Building Today</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Ready to Build Something Amazing?
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of Brands and Businesses who have accelerated their growth with our premium templates. 
              Save weeks of development time and launch faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBrowseTemplates}
                className="group px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-white/90 transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Browse Templates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onContactUs}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Us
              </button>
            </div>

            {/* Trust Text */}
            <p className="mt-8 text-sm text-white/70">
              No subscription required • One-time purchase • Elevate Your Brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
