import React, { useState } from 'react';
import { Sparkles, Mail, Instagram, Github, Linkedin, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectCategory: (category: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    templates: [
      { label: 'SaaS Templates', id: 'templates', category: 'SaaS' },
      { label: 'Portfolio Templates', id: 'templates', category: 'Portfolio' },
      { label: 'E-com. Templates', id: 'templates', category: 'E-commerce' },
      { label: 'Landing Pages', id: 'templates', category: 'Landing Page' },
      { label: 'Business Templates', id: 'templates', category: 'Business' },
      { label: 'Personal Templates', id: 'templates', category: 'Personal' },
      { label: 'All Templates', id: 'templates', category: 'All' },
    ],
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'How It Works', id: 'how-it-works' },
      { label: 'Contact', id: 'contact' },
      { label: 'Terms & License', id: 'license' },
    ],
    support: [
      { label: 'Documentation', id: 'how-it-works' },
      { label: 'FAQ', id: 'faq' },
      { label: 'Help Center', id: 'contact' },
    ]
    // legal: [
    //   // { label: 'Privacy Policy', id: 'home' },
    //   // { label: 'Terms of Service', id: 'home' },
    //   // { label: 'Cookie Policy', id: 'home' },
    // ],
  };

  const socialLinks = [
    // { icon: Github, label: 'GitHub', href: 'https://github.com/afif1710' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/whitewo_lf404/' },
    // { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-a-710318373/' },
  ];

  return (
    <footer className="bg-card border-t border-border">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-center text-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <img 
                src="/Logo.png" 
                alt="CraftedWeb Studio" 
                className="h-20 md:h-24 w-auto object-contain filter brightness-125 contrast-125 saturate-110"
              />
            </button>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Premium website templates for Brands and Businesses. Just customize with your brand info, build faster, launch sooner. 
            </p>
            <br></br>
            <p className="text-muted-foreground mb-6 max-w-xs">Follow us on...</p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer to push links to the right on large screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Templates */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Templates</h4>
            <ul className="space-y-3">
              {footerLinks.templates.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if ((link as any).category) {
                        onSelectCategory((link as any).category);
                      } else {
                        onNavigate(link.id);
                      }
                    }}
                    className="text-muted-foreground hover:text-pink-500 hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-pink-500 hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-pink-500 hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CraftedWeb Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                Made with passion for all Businesses and Brands
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
