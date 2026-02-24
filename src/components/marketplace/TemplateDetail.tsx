import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Check, ChevronDown, ChevronUp, Mail, Shield, RefreshCw, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Template, templates } from '@/data/templates';
import { Badge } from '@/components/ui/badge';
import VideoEmbedLite from './VideoEmbedLite';
import ScreenshotGallery from './ScreenshotGallery';
import TemplateCard from './TemplateCard';

interface TemplateDetailProps {
  template: Template;
  onBack: () => void;
  onQuickView: (template: Template) => void;
  onSelectTemplate: (template: Template) => void;
  onBuy: (template: Template) => void;
  onNavigate: (page: string) => void;
  prevTemplate: Template | null;
  nextTemplate: Template | null;
}

const TemplateDetail: React.FC<TemplateDetailProps> = ({ 
  template, 
  onBack,
  onQuickView,
  onSelectTemplate, 
  onBuy, 
  onNavigate,
  prevTemplate,
  nextTemplate
}) => {
  const [showEmailOption, setShowEmailOption] = useState(false);

  const relatedTemplates = templates
    .filter(t => t.id !== template.id && t.category === template.category)
    .slice(0, 3);





  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-10 relative">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:underline shrink-0 group/back"
          >
            <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-medium">Back to Templates</span>
            <span className="sm:hidden font-medium">Back</span>
          </button>

          <div className="flex items-center gap-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <button
              onClick={() => prevTemplate && onSelectTemplate(prevTemplate)}
              disabled={!prevTemplate}
              className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-xl text-sm font-semibold text-foreground transition-all disabled:opacity-0 disabled:pointer-events-none group/nav hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5"
            >
              <ChevronLeft className="w-4 h-4 group-hover/nav:-translate-x-0.5 transition-transform" />
              Previous
            </button>
            <button
              onClick={() => nextTemplate && onSelectTemplate(nextTemplate)}
              disabled={!nextTemplate}
              className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-xl text-sm font-semibold text-foreground transition-all disabled:opacity-0 disabled:pointer-events-none group/nav hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5"
            >
              Next
              <ChevronRight className="w-4 h-4 group-hover/nav:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="w-20 sm:w-32" /> {/* Spacer to maintain layout balance */}
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Media */}
          <div className="lg:col-span-3 space-y-8">
            {/* Video */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Demo Video    <span className="text-primary">(ID # {template.id})</span></h2>
              <VideoEmbedLite
                videoUrl={template.demoVideoUrl}
                poster={template.poster}
                title={template.title}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Click to watch a 1-2 minute walkthrough of this template
              </p>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Screenshots</h2>
              <ScreenshotGallery
                screenshots={template.screenshots}
                title={template.title}
              />
            </div>

            {/* Long Description */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">About This Template</h2>
              <p className="text-muted-foreground leading-relaxed">
                {template.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {template.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
              <div 
                className="bg-card rounded-xl border border-primary/20 p-6 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-all cursor-pointer group"
                onClick={() => onNavigate('faq')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      Have questions about this template?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Check our comprehensive <span className="text-primary underline decoration-dotted underline-offset-4">FAQ section</span> for details on licensing, support, and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              {/* Main Card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">
                    {template.category}
                  </p>
                  <span className="text-[10px] font-black text-white tracking-widest bg-gradient-to-r from-primary to-accent px-2.5 py-1 rounded shadow-md shadow-primary/30 border border-white/10">
                    TEMPLATE ID: #{template.id.padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {template.title}
                </h1>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-foreground">${template.price}</span>
                  <span className="text-muted-foreground">USD</span>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => onBuy(template)}
                  className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Want to buy?
                </button>

                {/* Alternative Payment */}
                {/* <div className="mt-4">
                  <button
                    onClick={() => setShowEmailOption(!showEmailOption)}
                    className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    Prefer to pay via email/invoice?
                  </button>
                  {showEmailOption && (
                    <div className="mt-3 p-4 bg-muted rounded-xl text-sm">
                      <p className="text-muted-foreground mb-2">
                        Send an email to <strong className="text-foreground">craftedwebstudio@gmail.com</strong> with:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Template name: {template.title}</li>
                        <li>Your preferred payment method</li>
                      </ul>
                    </div>
                  )}
                </div> */}

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="w-4 h-4 text-green-500" />
                      Get Zip file within a day
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      Free setup guide 
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-green-500" />
                      Initial bug fixes for 1 day
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-green-500" />
                      Email Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Licensing Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Licensing Options</h3>
                
                {/* Standard License */}
                <div className="bg-card rounded-xl border border-primary/20 p-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 bg-primary/10 rounded-bl-xl">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    Standard License
                    <Badge variant="secondary" className="text-xs">
                      ${template.price}
                    </Badge>
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Use for one (1) project",
                      "Non-exclusive",
                      "Full customization",
                      "No resale"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusive License */}
                <div className="bg-card rounded-xl border border-border p-4 relative overflow-hidden group hover:border-accent/50 transition-colors">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    Exclusive License
                    <Badge variant="outline" className="text-xs border-accent text-accent">
                     ${template.price * 10}
                    </Badge>
                  </h4>
                  <ul className="mt-3 space-y-2 mb-4">
                    {[
                      "Template removed from store",
                      "Full ownership transfer",
                      "Contact required"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onBuy({ ...template, title: `${template.title} (Exclusive License)` })}
                    className="w-full py-2 px-4 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Contact for Exclusive
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTemplates.map((t) => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  onQuickView={onQuickView}
                  onSelect={onSelectTemplate}
                  onBuy={onBuy}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateDetail;
