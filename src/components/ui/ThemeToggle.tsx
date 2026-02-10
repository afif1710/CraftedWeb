import React, { useEffect, useState } from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

type ThemeVariant = 'light' | 'dark' | 'xtract';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  // We use a local state to track the *effective* theme including xtract
  const [currentVariant, setCurrentVariant] = useState<ThemeVariant>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Determine initial state
    const isXtract = document.documentElement.classList.contains('theme-xtract');
    const savedTheme = localStorage.getItem('theme');
    
    if (isXtract) {
      setCurrentVariant('xtract');
    } else if (savedTheme === 'dark') {
      setCurrentVariant('dark');
    } else {
      setCurrentVariant('light');
    }
  }, []);

  const cycleTheme = () => {
    let nextVariant: ThemeVariant;

    if (currentVariant === 'light') {
      nextVariant = 'dark';
    } else if (currentVariant === 'dark') {
      nextVariant = 'xtract';
    } else {
      nextVariant = 'light'; // xtract -> light
    }

    setCurrentVariant(nextVariant);

    if (nextVariant === 'xtract') {
      setTheme('dark'); // Xtract is built on top of dark mode
      document.documentElement.classList.add('theme-xtract');
      localStorage.setItem('craftedweb_theme', 'xtract');
    } else {
      document.documentElement.classList.remove('theme-xtract');
      localStorage.setItem('craftedweb_theme', 'classic'); // or plain 'classic', just not 'xtract'
      setTheme(nextVariant); // 'light' or 'dark'
    }
  };

  if (!mounted) {
    return (
      <button className="p-2.5 rounded-xl bg-card border border-border opacity-50 cursor-pointer">
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={cycleTheme}
      className={`
        p-2.5 rounded-xl border transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${currentVariant === 'xtract'
          ? 'bg-primary/20 border-primary/40 shadow-lg shadow-primary/20'
          : 'bg-card border-border hover:border-primary/50'
        }
      `}
      aria-label="Toggle theme"
      title={`Current theme: ${currentVariant.charAt(0).toUpperCase() + currentVariant.slice(1)}`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            currentVariant === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            currentVariant === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
          }`} 
        />
        <Sparkles 
          className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-300 ${
            currentVariant === 'xtract' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
          }`} 
        />
      </div>
    </button>
  );
};
