import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { categories, allTags } from '@/data/templates';
import { Badge } from '@/components/ui/badge';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
  resultCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  priceRange,
  onPriceRangeChange,
  onClearFilters,
  resultCount,
  sortBy,
  onSortChange
}) => {
  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTags.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000 || sortBy !== 'default';

  return (
    <div className="space-y-6">
      {/* Search and Category Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nav-gray" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card-bg border border-white/5 rounded-xl text-white placeholder:text-nav-gray focus:outline-none focus:ring-2 focus:ring-solar-gold/50 focus:border-solar-gold transition-all"
            aria-label="Search templates"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-nav-gray" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 lg:gap-8 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide items-center px-4 font-medium text-nav-gray text-sm md:text-base">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold ${
                selectedCategory === category
                  ? 'active-category'
                  : 'hover:text-white'
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags and Price Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 text-sm text-nav-gray mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Tags:
          </span>
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold ${
                selectedTags.includes(tag)
                  ? 'bg-solar-gold text-obsidian'
                  : 'bg-white/5 text-nav-gray hover:bg-white/10'
              }`}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-nav-gray">Price:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
              className="w-16 px-2 py-1.5 bg-card-bg border border-white/5 rounded-lg text-sm text-center text-white focus:outline-none focus:ring-2 focus:ring-solar-gold/50"
              aria-label="Minimum price"
            />
            <span className="text-nav-gray">-</span>
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-16 px-2 py-1.5 bg-card-bg border border-white/5 rounded-lg text-sm text-center text-white focus:outline-none focus:ring-2 focus:ring-solar-gold/50"
              aria-label="Maximum price"
            />
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-nav-gray whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-1.5 bg-card-bg border border-white/5 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-solar-gold/50"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Results Count and Clear */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-nav-gray">
          Showing <span className="font-semibold text-white">{resultCount}</span> templates
        </p>
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-sm text-solar-gold hover:text-solar-gold/80 transition-colors focus:outline-none focus-visible:underline"
          >
            <X className="w-4 h-4" />
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
