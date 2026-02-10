import React from 'react';
import { ArrowRight, Sparkles, Users, Star, Zap } from 'lucide-react';
import { heroImage } from '@/data/templates';

interface HeroSectionProps {
  onBrowseTemplates: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBrowseTemplates }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Website Templates</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up stagger-1">
            Buy Stunning Websites{' '}
            <span className="gradient-text">& grow your Brand</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up stagger-2">
            Premium Website templates with beautiful designs, clean code, and everything you need to launch your next <b className="gradient-text">Brand</b> in hours, not weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <button
              onClick={onBrowseTemplates}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Templates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('demo-reel')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold text-lg hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Watch Demos
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-up stagger-4">
            {/* <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">500+</strong> happy customers
              </span>
            </div> */}

            {/* <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">4.9/5</strong> rating
              </span>
            </div> */}

            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">20+</strong> premium templates
              </span>
            </div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-80 opacity-50 hover:opacity-80 transition-opacity">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-40 bg-card rounded-xl border border-border shadow-xl transform rotate-6" />
            <div className="absolute top-4 left-4 w-64 h-40 bg-card rounded-xl border border-border shadow-xl transform -rotate-3" />
            <div className="relative w-64 h-40 bg-gradient-to-br from-primary to-accent rounded-xl shadow-2xl flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
