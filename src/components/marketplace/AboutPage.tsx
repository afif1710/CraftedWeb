import React from "react";
import { Sparkles, Users, Award, Heart, Code, Zap } from "lucide-react";
import { templates } from "@/data/templates";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const slideshowImages = templates.map((t) => {
    if (t.id === '9' && t.screenshots[1]) return t.screenshots[1];
    if (t.id === '15' && t.screenshots[2]) return t.screenshots[2];
    if (t.id === '19' && t.screenshots[2]) return t.screenshots[2];
    return t.poster;
  }).filter(Boolean);
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const stats = [
    { value: "20+", label: "Templates" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Custom-Made" },
  ];

  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description:
        "Every template is built with clean, maintainable code following best practices and modern patterns.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We prioritize customer satisfaction with responsive support and continuous improvements based on feedback.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Our templates are optimized for speed and performance, ensuring the best user experience.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every detail, from design to documentation to customer service.",
    },
  ];

  return (
    <section className="relative py-24 min-h-screen bg-obsidian overflow-hidden">
      {/* ── Ambient background glow blobs ── */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[15%] right-0 w-[500px] h-[500px] bg-solar-gold/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[55%] left-[20%] w-[400px] h-[400px] bg-violet-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-7xl font-serif text-white mb-8">
              Our Story.
            </h1>
            <h2 className="text-2xl font-sans text-white font-medium mb-12 tracking-tight">
              Building the Future of Web <br /> Development with Soul.
            </h2>
            <div className="space-y-6 text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
              <p>
                CraftedWeb was born to reduce the struggles of Brands and
                Businesses choosing the layout and design of their website. Now
                with the help of CraftedWeb anyone can build websites
                with their own inspirations and have
                a fully responsive website with minimal effort.
              </p>
              <p>
                As developers ourselves, we understand the value of starting
                with a solid foundation. That's why we create templates that
                aren't just beautiful—they're built with the same care and
                attention we'd give to our own projects.
              </p>
              <p>
                Every template is crafted with clean architecture, comprehensive
                documentation, and a focus on developer experience. We believe
                that great tools should get out of your way and let you focus on
                what matters: building something amazing.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in group">
            <div className="aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10 bg-[#0D0D12]">
              {/* Premium Cross-fading Slideshow */}
              {slideshowImages.map((src, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-6 ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
                    <img 
                      src={src} 
                      alt={`Template Preview ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}

              {/* Overlays for premium look */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-obsidian/60 via-transparent to-obsidian/20" />
              <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
              <div className="absolute inset-0 z-20 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
              
              {/* Progress Indicator Dots */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slideshowImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeSlide ? 'w-8 bg-solar-gold' : 'w-1.5 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Background Orbs to maintain context */}
            <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-solar-gold/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-40 text-center animate-fade-up stagger-2 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="text-5xl md:text-6xl font-serif mb-3"
                style={{
                  background: 'linear-gradient(180deg, #F4B961 0%, #D4983B 60%, #8B6914 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(244,185,97,0.35))',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-up stagger-3">
          <h2 className="text-xl font-serif text-white text-center mb-16 opacity-70">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div
                  className="relative rounded-[2rem] p-8 h-full flex items-start gap-6 transition-all duration-500 overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg, rgba(30,28,40,1) 0%, rgba(20,18,28,1) 40%, rgba(25,22,35,1) 100%)',
                    border: '1px solid rgba(139,92,246,0.12)',
                    boxShadow: '0 8px 50px -15px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.03)',
                  }}
                >
                  {/* Internal gradient haze */}
                  <div className="absolute top-0 right-0 w-40 h-32 bg-purple-500/[0.08] rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-500/[0.12] transition-all" />
                  <div className="absolute bottom-0 left-0 w-32 h-28 bg-solar-gold/[0.05] rounded-full blur-[50px] pointer-events-none group-hover:bg-solar-gold/[0.08] transition-all" />

                  <div
                    className="relative z-10 hidden sm:flex shrink-0 w-16 h-16 rounded-2xl items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(139,92,246,0.08) 100%)',
                      border: '1px solid rgba(244,185,97,0.18)',
                      boxShadow: '0 0 25px rgba(244,185,97,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    <value.icon className="w-8 h-8 text-solar-gold" strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <value.icon className="sm:hidden w-6 h-6 text-solar-gold" strokeWidth={1.5} />
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Banner */}
        <div className="max-w-5xl mx-auto mb-32 animate-fade-up stagger-4">
          <div 
            className="relative rounded-[3rem] p-12 md:p-16 text-center overflow-hidden group shadow-2xl"
            style={{
              background: 'linear-gradient(160deg, rgba(26,24,37,1) 0%, rgba(13,12,21,1) 100%)',
              border: '1px solid rgba(139,92,246,0.15)',
              boxShadow: '0 40px 100px -30px rgba(0,0,0,0.8), 0 0 40px rgba(139,92,246,0.05)',
            }}
          >
            {/* Elegant internal ambient glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/[0.08] rounded-full blur-[120px] pointer-events-none group-hover:bg-purple-600/[0.12] transition-all duration-700" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-solar-gold/[0.06] rounded-full blur-[120px] pointer-events-none group-hover:bg-solar-gold/[0.1] transition-all duration-700" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 
                className="text-4xl md:text-5xl font-serif mb-8 tracking-tight"
                style={{
                  background: 'linear-gradient(180deg, #F4B961 0%, #D4983B 60%, #8B6914 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 15px rgba(244,185,97,0.2))',
                }}
              >
                Our Mission
              </h3>
              <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed">
                To empower Brands and Businesses with <span className="text-white">premium website templates</span> that save time, reduce frustration, and help bring ideas to life faster than ever before.
              </p>
            </div>
            
            {/* Subtle top gloss line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>
        </div>

        {/* Contact CTA Link */}
        <div className="text-center py-20 border-t border-white/5">
           <p className="text-lg md:text-xl font-sans text-white/60">
             <span className="text-solar-gold/80 hover:text-solar-gold transition-colors cursor-pointer" onClick={() => onNavigate?.('contact')}>Contact Us</span> to discuss your custom project or <br/>if you want to buy templates manually in case gumroad is not available in your region. 🔗
           </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
