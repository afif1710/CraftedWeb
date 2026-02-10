import React from 'react';
import { TrendingUp, Users, Star, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    // {
    //   icon: Users,
    //   value: '500+',
    //   label: 'Happy Customers',
    //   description: 'Developers trust our templates'
    // },
    // {
    //   icon: Star,
    //   value: '4.9/5',
    //   label: 'Average Rating',
    //   description: 'Based on customer reviews'
    // },
    {
      icon: Zap,
      value: '10x',
      label: 'Faster Development',
      description: 'Compared to starting from scratch'
    },
    {
      icon: TrendingUp,
      value: '20+',
      label: 'Premium Templates',
      description: 'And growing every month'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPDATED CLASSNAMES BELOW:
           1. grid-cols-1: Stacked on mobile (better readability)
           2. sm:grid-cols-2: Side-by-side on tablet/desktop
           3. max-w-3xl mx-auto: Limits width and centers the group perfectly
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;