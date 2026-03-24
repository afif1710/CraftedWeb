import React from 'react';
import { ArrowRight } from 'lucide-react';
import { templates, Template } from '@/data/templates';
import TemplateCard from './TemplateCard';

interface FeaturedGridProps {
  onQuickView: (template: Template) => void;
  onSelectTemplate: (template: Template) => void;
  onViewAll: () => void;
  onBuy: (template: Template) => void;
  onContact?: (template: Template) => void;
}

const FeaturedGrid: React.FC<FeaturedGridProps> = ({ 
  onQuickView, 
  onSelectTemplate,
  onViewAll,
  onBuy,
  onContact
}) => {
  const featuredTemplates = templates.slice(0, 6);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif text-white mb-2">
              Popular Templates
            </h2>
            <p className="text-nav-gray">
              Our most loved templates, ready to help you build something amazing.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="group flex items-center gap-2 text-solar-gold font-medium hover:text-solar-gold/80 transition-colors focus:outline-none focus-visible:underline"
          >
            View all templates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTemplates.map((template, index) => (
            <div 
              key={template.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TemplateCard
                template={template}
                onQuickView={onQuickView}
                onSelect={onSelectTemplate}
                onBuy={onBuy}
                onContact={onContact || (() => {})}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="px-8 py-3 bg-[#262626] border border-white/5 hover:bg-[#333333] text-white/90 text-sm font-semibold rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold"
          >
            Browse All {templates.length} Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
