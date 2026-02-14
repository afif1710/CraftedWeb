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
  resultCount
}) => {
  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTags.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000;

  return (
    <div className="space-y-6">
      {/* Search and Category Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            aria-label="Search templates"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
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
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Tags:
          </span>
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                selectedTags.includes(tag)
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
              aria-pressed={selectedTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Price:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
              className="w-16 px-2 py-1.5 bg-card border border-border rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Minimum price"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-16 px-2 py-1.5 bg-card border border-border rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Maximum price"
            />
          </div>
        </div>
      </div>

      {/* Results Count and Clear */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{resultCount}</span> templates
        </p>
        
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors focus:outline-none focus-visible:underline"
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
