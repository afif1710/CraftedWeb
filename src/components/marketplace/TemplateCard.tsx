import React from 'react';
import { Eye, ShoppingCart } from 'lucide-react';
import { Template } from '@/data/templates';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  template: Template;
  onQuickView: (template: Template) => void;
  onSelect: (template: Template) => void;
  onBuy: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onQuickView, onSelect, onBuy }) => {
  return (
    <article 
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift cursor-pointer"
      onClick={() => onSelect(template)}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={template.poster}
          alt={`${template.title} - ${template.category} Website Template Preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(template);
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-foreground hover:bg-white dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Quick view ${template.title}`}
        >
          <Eye className="w-4 h-4" />
          Quick View
        </button>
        
        {/* Featured Badge */}
        {template.isFeatured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
              Featured
            </Badge>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
            <span className="font-semibold text-foreground text-xs sm:text-sm">${template.price} — Standard License</span>
          </div>
        </div>
        
        {/* Watermark */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/40 backdrop-blur-sm rounded text-[10px] text-white/60">
          CraftedWeb
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-primary uppercase tracking-wider">
            {template.category}
          </p>
          <span className="text-[10px] font-black text-white tracking-widest bg-gradient-to-r from-primary to-accent px-1.5 py-0.5 rounded shadow-sm shadow-primary/30 border border-white/10 uppercase">
            ID: #{template.id.padStart(2, '0')}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {template.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {template.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {template.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs px-2 py-0.5 bg-secondary/50"
            >
              {tag}
            </Badge>
          ))}
          {template.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-secondary/50">
              +{template.tags.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBuy(template);
          }}
          className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`Contact to buy ${template.title}`}
        >
          <ShoppingCart className="w-4 h-4" />
          Want to buy?
        </button>
        
        {/* Exclusive Rights Helper */}
        <div className="mt-3 text-center">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onBuy(template);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors text-xs"
          >
            Need exclusive rights? <span className="underline decoration-muted-foreground/50 hover:decoration-foreground">Contact us</span>.
          </button>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
