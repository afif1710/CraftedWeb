import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'templates', label: 'Templates' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Go to homepage"
          >
            <img 
              src="/Logo.png" 
              alt="CraftedWeb Studio" 
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 filter brightness-110 contrast-110"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  currentPage === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Unified Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('templates')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Templates
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav 
            className="md:hidden mt-4 p-4 bg-card rounded-2xl border border-border shadow-xl animate-fade-up"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    currentPage === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('templates');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-center hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Browse Templates
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
