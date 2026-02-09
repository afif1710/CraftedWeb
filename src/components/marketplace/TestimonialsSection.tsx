import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Startup Founder',
      avatar: 'SC',
      content: 'These templates saved me weeks of development time. The code quality is exceptional and the design is stunning. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Freelance Developer',
      avatar: 'MT',
      content: 'I\'ve purchased several templates and each one has exceeded my expectations. Clean code, great documentation, and responsive support.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Product Designer',
      avatar: 'EJ',
      content: 'The attention to detail in these templates is incredible. From animations to accessibility, everything is thoughtfully crafted.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Loved by Developers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers who have accelerated their projects with our templates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-6 hover-lift relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <div className="flex -space-x-2">
              {['JD', 'AK', 'MR', 'LS'].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by <strong className="text-foreground">500+</strong> developers worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
