import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowCta(window.scrollY > 500);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 bg-obsidian/80 backdrop-blur-md ${
        isScrolled
          ? 'py-3 shadow-lg'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Go to homepage"
          >
            <img 
              src="/Logo.png" 
              alt="CraftedWeb Studio" 
              className="h-14 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter brightness-125 contrast-125 saturate-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id === 'home' ? '/' : `/${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                  currentPage === item.id || (item.id === 'templates' && currentPage === 'template-detail')
                    ? 'text-white border-b-2 border-solar-gold'
                    : 'text-nav-gray hover:text-white'
                }`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* CTA Button - Dynamic Visibility */}
            <button
              onClick={() => onNavigate('templates')}
              className={`hidden sm:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FFD586] to-[#E5A853] text-obsidian rounded-full font-bold text-sm hover:brightness-110 hover:text-white transition-all duration-500 transform ${
                showCta 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
              } focus:outline-none`}
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
                <Link
                  key={item.id}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-all focus:outline-none ${
                    currentPage === item.id || (item.id === 'templates' && currentPage === 'template-detail')
                      ? 'text-white bg-white/5 border border-solar-gold'
                      : 'text-nav-gray hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onNavigate('templates');
                  setIsMobileMenuOpen(false);
                }}
                className={`mt-2 px-4 py-3 bg-gradient-to-r from-[#FFD586] to-[#E5A853] text-obsidian rounded-xl font-bold text-center hover:brightness-110 hover:text-white transition-all duration-500 transform ${
                  showCta 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2 pointer-events-none text-transparent'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
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
