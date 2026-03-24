import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onBrowseTemplates: () => void;
  onContactUs: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onBrowseTemplates, onContactUs }) => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-obsidian border border-white/5 p-8 md:p-16 card-shadow shadow-2xl flex flex-col items-center">
          {/* Swirling Background Gradients */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-none">
            <div className="absolute w-[800px] h-[400px] bg-gradient-to-r from-[#A855F7] via-[#D49B44] to-[#A855F7] rounded-[100%] blur-[80px] animate-pulse spin-slow mix-blend-screen" style={{ animationDuration: '8s' }} />
            <div className="absolute w-[600px] h-[300px] bg-gradient-to-r from-[#e2bbfd] to-[#F4B961] blur-[60px] opacity-70 mix-blend-overlay rotate-45" />
          </div>

          <div className="relative z-10 w-full text-center flex flex-col items-center">
            {/* Outline Animated Icon (Pen/Wand) */}
            <div className="mb-6 flex justify-center">
              <Sparkles className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl mx-auto drop-shadow-md">
              Ready to Build Something Amazing?
            </h2>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-white/90 mb-10 max-w-2xl mx-auto drop-shadow">
              Join hundreds of Brands and Businesses who have accelerated their growth with our premium templates. 
              Save weeks of development time and launch faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/templates"
                onClick={() => onBrowseTemplates()}
                className="group px-8 py-3 bg-gradient-to-r from-[#FFD586] to-[#E5A853] text-obsidian rounded-full font-bold text-sm sm:text-base flex items-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-orange-500/20 focus:outline-none"
              >
                Browse Templates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onClick={() => onContactUs()}
                className="px-8 py-3 bg-obsidian/40 backdrop-blur-md text-white border border-white/10 rounded-full font-bold text-sm sm:text-base hover:bg-obsidian/60 transition-all focus:outline-none shadow-xl flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
