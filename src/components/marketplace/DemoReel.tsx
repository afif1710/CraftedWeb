import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { templates, Template } from '@/data/templates';

interface DemoReelProps {
  onSelectTemplate: (template: Template) => void;
}

const DemoReel: React.FC<DemoReelProps> = ({ onSelectTemplate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  const featuredTemplates = templates.filter(t => t.isFeatured);

  // return (
  //   <section id="demo-reel" className="py-20 bg-muted/30">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       {/* Header */}
  //       <div className="flex items-end justify-between mb-10">
  //         <div>
  //           <h2 className="text-3xl font-bold text-foreground mb-2">
  //             Featured Templates
  //           </h2>
  //           <p className="text-muted-foreground">
  //             Watch quick demos of our most popular templates
  //           </p>
  //         </div>
          
  //         {/* Navigation Arrows */}
  //         <div className="hidden sm:flex gap-2">
  //           <button
  //             onClick={() => scroll('left')}
  //             disabled={!canScrollLeft}
  //             className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  //             aria-label="Scroll left"
  //           >
  //             <ChevronLeft className="w-5 h-5" />
  //           </button>
  //           <button
  //             onClick={() => scroll('right')}
  //             disabled={!canScrollRight}
  //             className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  //             aria-label="Scroll right"
  //           >
  //             <ChevronRight className="w-5 h-5" />
  //           </button>
  //         </div>
  //       </div>

  //       {/* Carousel */}
  //       <div
  //         ref={scrollRef}
  //         onScroll={checkScroll}
  //         className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
  //         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  //       >
  //         {featuredTemplates.map((template) => (
  //           <button
  //             key={template.id}
  //             onClick={() => onSelectTemplate(template)}
  //             className="group flex-shrink-0 w-80 snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
  //           >
  //             <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
  //               <img
  //                 src={template.poster}
  //                 alt={`${template.title} preview`}
  //                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  //                 loading="lazy"
  //               />
                
  //               {/* Overlay */}
  //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
  //               {/* Play Button */}
  //               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  //                 <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
  //                   <Play className="w-6 h-6 text-slate-900 ml-1" fill="currentColor" />
  //                 </div>
  //               </div>

  //               {/* Price Badge */}
  //               <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg">
  //                 <span className="font-semibold text-foreground">${template.price}</span>
  //               </div>

  //               {/* Info Overlay */}
  //               <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  //                 <h3 className="text-white font-semibold text-lg mb-1">{template.title}</h3>
  //                 <p className="text-white/80 text-sm line-clamp-1">{template.description}</p>
  //               </div>
  //             </div>
  //           </button>
  //         ))}
  //       </div>

  //       {/* Mobile Scroll Hint */}
  //       <p className="sm:hidden text-center text-sm text-muted-foreground mt-4">
  //         Swipe to see more templates
  //       </p>
  //     </div>
  //   </section>
  // );
  return null;
};

export default DemoReel;
