import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ScreenshotGalleryProps {
  screenshots: string[];
  title: string;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-4">
        {/* Main Image */}
        <button
          onClick={() => openLightbox(selectedIndex)}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`View ${title} screenshot ${selectedIndex + 1} in fullscreen`}
        >
          <img
            src={screenshots[selectedIndex]}
            alt={`${title} screenshot ${selectedIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-slate-800/90 p-3 rounded-full">
              <ZoomIn className="w-6 h-6 text-foreground" />
            </div>
          </div>
          {/* Watermark */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded text-xs text-white/70">
            Template by TemplateStore
          </div>
        </button>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden bg-muted transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                index === selectedIndex
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`View screenshot ${index + 1}`}
              aria-current={index === selectedIndex}
            >
              <img
                src={screenshot}
                alt={`${title} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Main Image */}
          <div 
            className="max-w-5xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[selectedIndex]}
              alt={`${title} screenshot ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            {selectedIndex + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenshotGallery;
