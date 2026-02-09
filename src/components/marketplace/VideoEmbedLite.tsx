import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedLiteProps {
  videoUrl: string;
  poster: string;
  title: string;
}

// Extract YouTube video ID from various URL formats
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const VideoEmbedLite: React.FC<VideoEmbedLiteProps> = ({ videoUrl, poster, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = getYouTubeId(videoUrl);

  const handlePlay = () => {
    setIsLoaded(true);
  };

  if (!videoId) {
    return (
      <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
        <p className="text-muted-foreground">Invalid video URL</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 group">
      {/* Preconnect to YouTube for faster loading */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://www.google.com" />
      
      {!isLoaded ? (
        <>
          {/* Poster Image */}
          <img
            src={poster}
            alt={`${title} demo video thumbnail`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 rounded-xl"
            aria-label={`Play ${title} demo video`}
          >
            <div className="relative">
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
              
              {/* Play Button Circle */}
              <div className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/90">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
          
          {/* Video Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-medium opacity-80">Watch Demo</p>
          </div>
          
          {/* Watermark */}
          <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white/70">
            Template by TemplateStore
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={`${title} demo video`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default VideoEmbedLite;
