import React from 'react';
import { X, ExternalLink, ShoppingCart, Check } from 'lucide-react';
import { Template } from '@/data/templates';
import { Badge } from '@/components/ui/badge';
import VideoEmbedLite from './VideoEmbedLite';

interface QuickViewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: (template: Template) => void;
  onBuy: (template: Template) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ 
  template, 
  isOpen, 
  onClose,
  onViewDetails,
  onBuy
}) => {
  if (!isOpen || !template) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBuy = () => {
    onBuy(template);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl border border-border/50 animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Video Section */}
          <div className="p-6 bg-muted/30">
            <VideoEmbedLite
              videoUrl={template.demoVideoUrl}
              poster={template.poster}
              title={template.title}
            />
            
            {/* Screenshots Preview */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {template.screenshots.slice(0, 4).map((screenshot, index) => (
                <div 
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden bg-muted"
                >
                  <img
                    src={screenshot}
                    alt={`${template.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2 pr-10">
              <p className="text-xs font-medium text-primary uppercase tracking-wider">
                {template.category}
              </p>
              <span className="text-[10px] font-black text-white tracking-widest bg-gradient-to-r from-primary to-accent px-2.5 py-1 rounded shadow-md shadow-primary/30 border border-white/10 shrink-0">
                #ID: {template.id.padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h2 id="quick-view-title" className="text-2xl font-bold text-foreground mb-2">
              {template.title}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-foreground">${template.price}</span>
              <span className="text-sm text-muted-foreground">one-time payment</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">
              {template.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {template.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-auto space-y-3">
              <button
                onClick={handleBuy}
                className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy with Gumroad - ${template.price}
              </button>
              
              <button
                onClick={() => onViewDetails(template)}
                className="w-full py-3 px-4 bg-secondary text-secondary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Details
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
