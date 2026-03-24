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
  onContact: (template: Template) => void;
  onNavigate: (page: string) => void;
  prevTemplate?: Template;
  nextTemplate?: Template;
}

const TemplateDetail: React.FC<TemplateDetailProps> = ({ 
  template, 
  onBack,
  onQuickView,
  onSelectTemplate, 
  onBuy, 
  onContact,
  onNavigate,
  prevTemplate,
  nextTemplate
}) => {
  const [showEmailOption, setShowEmailOption] = useState(false);

  const relatedTemplates = templates
    .filter(t => t.id !== template.id && t.category === template.category)
    .slice(0, 3);





  return (
    <div className="min-h-screen pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-10 relative z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-solar-gold hover:text-solar-gold/80 transition-all focus:outline-none focus-visible:underline shrink-0 group/back cursor-pointer py-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover/back:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-bold text-lg">Back to Templates</span>
            <span className="sm:hidden font-bold text-lg">Back</span>
          </button>

          <div className="flex items-center gap-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <button
              onClick={() => prevTemplate && onSelectTemplate(prevTemplate)}
              disabled={!prevTemplate}
              className="flex items-center gap-1.5 px-4 py-2 bg-card-bg border border-white/10 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-0 disabled:pointer-events-none group/nav hover:border-solar-gold/50 hover:shadow-lg hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4 group-hover/nav:-translate-x-0.5 transition-transform" />
              Previous
            </button>
            <button
              onClick={() => nextTemplate && onSelectTemplate(nextTemplate)}
              disabled={!nextTemplate}
              className="flex items-center gap-1.5 px-4 py-2 bg-card-bg border border-white/10 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-0 disabled:pointer-events-none group/nav hover:border-solar-gold/50 hover:shadow-lg hover:bg-white/5"
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
              <h2 className="text-2xl font-serif text-white mb-4">Demo Video    <span className="text-solar-gold">(ID # {template.id})</span></h2>
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
              <h2 className="text-2xl font-serif text-white mb-4">Screenshots</h2>
              <ScreenshotGallery
                screenshots={template.screenshots}
                title={template.title}
              />
            </div>

            {/* Long Description */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">About This Template</h2>
              <p className="text-muted-foreground leading-relaxed">
                {template.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-serif text-white mb-4">Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {template.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-card-bg rounded-xl border border-white/5"
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
              <h2 className="text-2xl font-serif text-white mb-4">Frequently Asked Questions</h2>
              <div 
                className="bg-card-bg rounded-xl border border-white/5 p-6 hover:border-solar-gold/40 transition-all cursor-pointer group"
                onClick={() => onNavigate('faq')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-solar-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-solar-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-solar-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 group-hover:text-solar-gold transition-colors">
                      Have questions about this template?
                    </h3>
                    <p className="text-sm text-nav-gray">
                      Check our comprehensive <span className="text-solar-gold underline decoration-dotted underline-offset-4">FAQ section</span> for details on licensing, support, and updates.
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
              <div className="bg-card-bg rounded-3xl border border-white/5 p-6 card-shadow shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium text-solar-gold uppercase tracking-wider">
                    {template.category}
                  </p>
                  <span className="text-[10px] font-black text-white tracking-widest bg-white/10 px-2.5 py-1 rounded shadow-md border border-white/5">
                    TEMPLATE ID: #{template.id.padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-serif text-white mb-2 leading-tight">
                  {template.title}
                </h1>

                {/* Description */}
                <p className="text-nav-gray mb-4">
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
                  <span className="text-4xl font-bold text-white">${template.price}</span>
                  <span className="text-nav-gray">USD</span>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => onBuy(template)}
                  className="btn-wipe w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all focus:outline-none"
                >
                  <div className="btn-label-gold">
                    <ShoppingCart className="w-5 h-5" />
                    Buy with Gumroad — ${template.price}
                  </div>
                  <div className="btn-label-white">
                    <ShoppingCart className="w-5 h-5" />
                    Buy with Gumroad — ${template.price}
                  </div>
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
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="w-4 h-4 text-green-500" />
                      Get Zip file instantly
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      Free setup guide in the file
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
                <h3 className="text-2xl font-serif text-white">Licensing Options</h3>
                
                {/* Standard License */}
                <div className="bg-card-bg rounded-xl border border-solar-gold/20 p-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 bg-solar-gold/10 rounded-bl-xl">
                    <Check className="w-4 h-4 text-solar-gold" />
                  </div>
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    Standard License
                    <Badge variant="secondary" className="text-xs bg-white/5 text-white">
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
                      <li key={i} className="flex items-center gap-2 text-sm text-nav-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-solar-gold/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusive License */}
                <div className="bg-card-bg rounded-xl border border-white/5 p-4 relative overflow-hidden group hover:border-[#F472B6]/50 transition-colors">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    Exclusive License
                    <Badge variant="outline" className="text-xs border-[#F472B6] text-[#F472B6]">
                     ${template.price * 10}
                    </Badge>
                  </h4>
                  <ul className="mt-3 space-y-2 mb-4">
                    {[
                      "Template removed from store",
                      "Full ownership transfer",
                      "Re-distribute or edit as much as you like",
                      "Contact required"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-nav-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F472B6]/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onContact({ ...template, title: `${template.title} (Exclusive License)` })}
                    className="w-full py-2 px-4 bg-white/5 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
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
            <h2 className="text-4xl font-serif text-white mb-8 text-center">Related Templates</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {templates
                .filter(t => t.category === template.category && t.id !== template.id)
                .slice(0, 3)
                .map((t) => (
                  <TemplateCard
                    key={t.id}
                    template={t}
                    onQuickView={onQuickView}
                    onSelect={onSelectTemplate}
                    onBuy={onBuy}
                    onContact={onContact}
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
