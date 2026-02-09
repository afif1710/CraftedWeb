import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Check, ChevronDown, ChevronUp, Mail, Shield, RefreshCw, Download } from 'lucide-react';
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
}

const TemplateDetail: React.FC<TemplateDetailProps> = ({ 
  template, 
  onBack,
  onQuickView,
  onSelectTemplate,
  onBuy
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showEmailOption, setShowEmailOption] = useState(false);

  const relatedTemplates = templates
    .filter(t => t.id !== template.id && t.category === template.category)
    .slice(0, 3);

  const faqs = [
    {
      question: 'What do I get after purchase?',
      answer: 'You will receive instant access to download the complete source code, including all components, pages, and assets. The package includes documentation and setup instructions.'
    },
    {
      question: 'Can I use this for commercial projects?',
      answer: 'Yes! Our standard license allows you to use the template for one commercial project. For multiple projects, please check our extended license options.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee. If you are not satisfied with your purchase, contact us for a full refund.'
    },
    {
      question: 'How do I get updates?',
      answer: 'All updates are free for life. You will receive email notifications when updates are available, and you can download them from your Gumroad library.'
    },
    {
      question: 'Do you provide support?',
      answer: 'Yes, we provide email support for all customers. We typically respond within 24-48 hours on business days.'
    }
  ];



  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 focus:outline-none focus-visible:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Templates
        </button>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Media */}
          <div className="lg:col-span-3 space-y-8">
            {/* Video */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Demo Video</h2>
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

            {/* FAQ */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              {/* Main Card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
                {/* Category */}
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {template.category}
                </p>

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
                <div className="mt-4">
                  <button
                    onClick={() => setShowEmailOption(!showEmailOption)}
                    className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    Prefer to pay via email/invoice?
                  </button>
                  {showEmailOption && (
                    <div className="mt-3 p-4 bg-muted rounded-xl text-sm">
                      <p className="text-muted-foreground mb-2">
                        Send an email to <strong className="text-foreground">hello@templatestore.com</strong> with:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Template name: {template.title}</li>
                        <li>Your preferred payment method</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="w-4 h-4 text-green-500" />
                      Instant Download
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      Lifetime Updates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-green-500" />
                      Secure Payment
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-green-500" />
                      Email Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <p className="text-foreground italic mb-4">
                  "This template saved me weeks of work. The code quality is exceptional and the design is stunning."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">John Doe</p>
                    <p className="text-xs text-muted-foreground">Startup Founder</p>
                  </div>
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
