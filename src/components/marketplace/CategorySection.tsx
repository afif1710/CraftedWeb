import React from 'react';
import { Settings, Contact, ShoppingCart, AppWindow, Briefcase, User } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      name: 'SaaS',
      icon: Settings,
      color: 'solar-gold'
    },
    {
      name: 'Portfolio',
      icon: Contact,
      color: 'purple-500' // Matches the purple
    },
    {
      name: 'E-commerce',
      icon: ShoppingCart,
      color: 'solar-gold'
    },
    {
      name: 'Landing Page',
      icon: AppWindow,
      color: 'purple-500'
    },
    {
      name: 'Business',
      icon: Briefcase,
      color: 'solar-gold'
    },
    {
      name: 'Personal',
      icon: User,
      color: 'purple-500'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Browse by Category
          </h2>
        </div>

        {/* Categories Flex Row */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-10 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="group flex flex-col items-center gap-4 focus:outline-none transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                {/* Glowing Dust Effect underneath icon */}
                <div 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 rounded-[100%] blur-[6px] transition-opacity 
                    ${category.color === 'solar-gold' ? 'bg-solar-gold shadow-[0_0_15px_#F4B961]' : 'bg-[#A855F7] shadow-[0_0_15px_#A855F7]'}
                  `} 
                />
                
                {/* Outlined Icon */}
                <category.icon 
                  className={`w-10 h-10 relative z-10 
                    ${category.color === 'solar-gold' ? 'text-solar-gold' : 'text-[#e2bbfd]'}
                  `} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Label */}
              <h3 className="font-medium text-white tracking-wide text-sm mt-2">
                {category.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
