import React, { useState } from 'react';
import { Sparkles, Mail, Twitter, Github, Linkedin, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
      { label: 'SaaS Templates', id: 'templates' },
      { label: 'Portfolio Templates', id: 'templates' },
      { label: 'E-commerce Templates', id: 'templates' },
      { label: 'Landing Pages', id: 'templates' },
      { label: 'All Templates', id: 'templates' },
    ],
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'How It Works', id: 'how-it-works' },
      { label: 'Contact', id: 'contact' },
      { label: 'Blog', id: 'home' },
      { label: 'Careers', id: 'home' },
    ],
    support: [
      { label: 'Documentation', id: 'home' },
      { label: 'FAQ', id: 'home' },
      { label: 'License', id: 'home' },
      { label: 'Refund Policy', id: 'home' },
      { label: 'Help Center', id: 'contact' },
    ],
    legal: [
      { label: 'Privacy Policy', id: 'home' },
      { label: 'Terms of Service', id: 'home' },
      { label: 'Cookie Policy', id: 'home' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get notified about new templates
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and never miss a launch.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                  aria-label="Email for newsletter"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Template<span className="text-primary">Store</span>
              </span>
            </button>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Premium website templates for developers and designers. Build faster, launch sooner.
            </p>
            <div className="flex gap-3">
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

          {/* Templates */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Templates</h4>
            <ul className="space-y-3">
              {footerLinks.templates.map((link, index) => (
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
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
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
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
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
          </div>

          {/* Legal */}
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TemplateStore. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                Made with care for developers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
