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

  return null;
};

export default StatsSection;