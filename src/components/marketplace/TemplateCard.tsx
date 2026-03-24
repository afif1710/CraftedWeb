import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { Template } from '@/data/templates';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  template: Template;
  onQuickView: (template: Template) => void;
  onSelect: (template: Template) => void;
  onBuy: (template: Template) => void;
  onContact: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onQuickView, onSelect, onBuy, onContact }) => {
  // Mapping of tailwind color names to hex for the glow
  const colorMap: Record<string, string> = {
    'solar-gold': '#F4B961',
    'blue-500': '#3B82F6',
    'stone-400': '#A8A29E',
    'purple-500': '#A855F7',
    'orange-400': '#FB923C',
    'emerald-500': '#10B981',
    'cyan-400': '#22D3EE',
    'rose-500': '#F43F5E',
    'indigo-500': '#6366F1',
    'amber-600': '#D97706',
    'blue-400': '#60A5FA',
    'indigo-600': '#4F46E5',
    'purple-400': '#C084FC',
    'rose-300': '#FDA4AF',
    'amber-400': '#FBBF24',
    'orange-300': '#FDBA74',
    'violet-500': '#8B5CF6',
    'slate-400': '#94A3B8',
    'red-500': '#EF4444',
    'blue-300': '#93C5FD',
    'fuchsia-500': '#D946EF',
    'stone-300': '#D6D3D1',
    'amber-200': '#FDE68A',
    'sky-500': '#0EA5E9',
    'red-900': '#7F1D1D',
    'pink-200': '#FBCFE8'
  };

  const glowColor = colorMap[template.themeColor] || '#F4B961';
  
  // Format ID with leading zero if needed
  const formattedId = template.id.padStart(2, '0');
  
  // Get first 3 tags
  const displayedTags = template.tags.slice(0, 3);
  const remainingTags = template.tags.length - truncatedTagsCount(template.tags, 3);
  
  function truncatedTagsCount(tags: string[], limit: number) {
    return Math.min(tags.length, limit);
  }

  return (
    <article 
      className="group relative bg-[#0A0A0E] rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 card-shadow cursor-pointer flex flex-col 
      hover:shadow-[0_10px_40px_-10px_var(--glow-opacity)] hover:border-[var(--border-opacity)]"
      style={{ 
        '--theme-color': glowColor,
        '--glow-opacity': `${glowColor}30`,
        '--border-opacity': `${glowColor}50`
      } as React.CSSProperties}
      onClick={() => onSelect(template)}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted m-2 rounded-xl">
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 bg-obsidian/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium text-white hover:bg-obsidian focus:outline-none"
          aria-label={`Quick view ${template.title}`}
        >
          <Eye className="w-4 h-4" />
          Quick View
        </button>
        
        {/* License Badge */}
        <div className="absolute top-2 right-2">
          <div className="bg-obsidian/80 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-white/10">
            <span className="font-bold text-white text-[10px] sm:text-xs">Standard License</span>
          </div>
        </div>
        
        {/* Watermark */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/40 backdrop-blur-sm rounded text-[10px] text-white/60">
          CraftedWeb
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Header: Category & ID */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
            {template.category}
          </span>
          <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-bold text-blue-400">
            ID: #{formattedId}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white transition-colors truncate group-hover:text-[var(--theme-color)]">
            <Link 
              to={`/template/${template.slug}`}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(template);
              }}
              className="text-white hover:text-[var(--theme-color)] transition-colors"
            >
              {template.title}
            </Link>
          </h3>
          <p className="text-sm text-white/40 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {template.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {displayedTags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] text-white/60">
              {tag}
            </span>
          ))}
          {template.tags.length > 3 && (
            <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] text-white/60">
              +{template.tags.length - 3}
            </span>
          )}
        </div>

        {/* Buy Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBuy(template);
          }}
          className="btn-wipe w-full mt-2 py-3.5 rounded-xl font-bold transition-all"
        >
          <div className="btn-label-gold">
            <ShoppingCart className="w-4 h-4" />
            Buy with Gumroad — ${template.price}
          </div>
          <div className="btn-label-white">
            <ShoppingCart className="w-4 h-4" />
            Buy with Gumroad — ${template.price}
          </div>
        </button>

        {/* Footer Link */}
        <p className="text-center text-[10px] text-white/20">
          Need exclusive rights?{' '}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onContact(template);
            }}
            className="text-white/40 hover:text-white transition-colors"
          >
            Contact us.
          </button>
        </p>
      </div>
    </article>
  );
};

export default TemplateCard;
