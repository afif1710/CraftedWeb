import React from 'react';
import { Layers, Briefcase, ShoppingBag, Rocket, Building2, User } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      name: 'SaaS',
      icon: Layers,
      count: 3,
      description: 'Dashboard & app templates',
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Portfolio',
      icon: User,
      count: 2,
      description: 'Showcase your work',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'E-commerce',
      icon: ShoppingBag,
      count: 2,
      description: 'Online store solutions',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Landing Page',
      icon: Rocket,
      count: 4,
      description: 'High-converting pages',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Business',
      icon: Building2,
      count: 2,
      description: 'Corporate websites',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Personal',
      icon: Briefcase,
      count: 1,
      description: 'Blogs & personal sites',
      color: 'from-indigo-500 to-violet-600'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect template for your project type
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="group relative bg-card rounded-2xl border border-border p-6 text-left hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    {/* <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {category.count}
                    </span> */}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
