import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Star, Zap } from 'lucide-react';
import { heroImage } from '@/data/templates';

interface HeroSectionProps {
  onBrowseTemplates: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBrowseTemplates }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center overflow-hidden">
      {/* Golden Purple Mixed Ambient Background */}
      <div className="absolute inset-0 z-0 bg-obsidian overflow-hidden pointer-events-none">
        {/* Core Mixed Center Glow */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#8155A8]/20 via-transparent to-[#F4B961]/15 rounded-full blur-[120px]" />
        
        {/* Deep Violet Left Accent */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#4D3373]/30 rounded-full blur-[130px]" />
        
        {/* Soft Gold Right/Bottom Accent */}
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-[#D4983B]/15 rounded-full blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-20 md:pt-60">
        <div className="max-w-4xl mx-auto text-center">


          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 animate-fade-up stagger-1 leading-tight tracking-wide">
            Buy Stunning Website templates <br className="hidden sm:block" /> & grow your Brand
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-nav-gray mb-10 max-w-2xl mx-auto animate-fade-up stagger-2 leading-relaxed">
            Premium Website templates with beautiful designs, clean code, and everything you need to launch your next <b className="text-solar-gold">Brand</b> in hours, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center mb-16 animate-fade-up stagger-3">
            <Link
              to="/templates"
              onClick={() => onBrowseTemplates()}
              className="btn-hero px-10 py-4 font-bold text-lg flex items-center gap-3 focus:outline-none group"
            >
              Browse Templates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-up stagger-4 pt-10">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 outline outline-1 outline-offset-4 outline-solar-gold text-transparent stroke-solar-gold rounded-full p-1" />
              <span className="text-xl font-serif text-white tracking-wide">
                10x Faster Creation.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 outline outline-1 outline-offset-4 outline-solar-gold text-transparent stroke-solar-gold rounded-full p-1" />
              <span className="text-xl font-serif text-white tracking-wide">
                20+ Growing Collection.
              </span>
            </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default HeroSection;
