import React, { useState, useMemo } from 'react';
import { templates, Template } from '@/data/templates';
import TemplateCard from './TemplateCard';
import FilterBar from './FilterBar';

interface TemplatesPageProps {
  onQuickView: (template: Template) => void;
  onSelectTemplate: (template: Template) => void;
  onBuy: (template: Template) => void;
  onContact: (template: Template) => void;
  initialCategory?: string;
  onCategoryChange?: (category: string) => void;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

const ITEMS_PER_PAGE = 9;

const TemplatesPage: React.FC<TemplatesPageProps> = ({ 
  onQuickView, 
  onSelectTemplate, 
  onBuy, 
  onContact,
  initialCategory = 'All',
  onCategoryChange, 
  initialPage = 1, 
  onPageChange,
  searchQuery,
  onSearchChange,
  selectedTags,
  onTagToggle,
  priceRange,
  onPriceRangeChange,
  onClearFilters
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortBy, setSortBy] = useState('default');
  
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  React.useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery || 
        template.title.toLowerCase().includes(searchLower) ||
        template.description.toLowerCase().includes(searchLower) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;

      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => template.tags.includes(tag));

      // Price filter
      const matchesPrice = template.price >= priceRange[0] && template.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesTags && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      if (sortBy === 'category') {
        const categories = ['SaaS', 'Portfolio', 'E-commerce', 'Landing Page', 'Business', 'Personal'];
        return categories.indexOf(a.category) - categories.indexOf(b.category);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedTags, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTagToggle = (tag: string) => {
    onTagToggle(tag);
    setCurrentPage(1);
    onPageChange?.(1);
  };

  const handleClearFilters = () => {
    onClearFilters();
    setSortBy('default');
    setCurrentPage(1);
    onPageChange?.(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    onCategoryChange?.(category);
    onPageChange?.(1);
  };

  const handleSearchChange = (query: string) => {
    onSearchChange(query);
    setCurrentPage(1);
    onPageChange?.(1);
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    onPriceRangeChange(range);
    setCurrentPage(1);
    onPageChange?.(1);
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            All Templates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of premium website templates. 
            Filter by category, tags, or price to find the perfect fit for your project.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            priceRange={priceRange}
            onPriceRangeChange={handlePriceRangeChange}
            onClearFilters={handleClearFilters}
            resultCount={filteredTemplates.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Top Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <button
              onClick={() => {
                const newPage = prev => Math.max(1, prev - 1);
                setCurrentPage(newPage);
                // Note: since functional update is used, we need the actual value for the callback
                // But simplified:
                const val = Math.max(1, currentPage - 1);
                onPageChange?.(val);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm"
            >
              Previous
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    onPageChange?.(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-9 h-9 rounded-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-card border border-border text-foreground hover:border-primary/50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                const val = Math.min(totalPages, currentPage + 1);
                setCurrentPage(prev => Math.min(totalPages, prev + 1));
                onPageChange?.(val);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-card border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm"
            >
              Next
            </button>
          </div>
        )}

        {/* Templates Grid */}
        {paginatedTemplates.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedTemplates.map((template, index) => (
                <div 
                  key={template.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TemplateCard
                    template={template}
                    onQuickView={onQuickView}
                    onSelect={onSelectTemplate}
                    onBuy={onBuy}
                    onContact={onContact}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    const val = Math.max(1, currentPage - 1);
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    onPageChange?.(val);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm"
                >
                  Previous
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        onPageChange?.(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm ${
                        currentPage === page
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                          : 'bg-card border border-border text-foreground hover:border-primary/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const val = Math.min(totalPages, currentPage + 1);
                    setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    onPageChange?.(val);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-card border border-border text-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-10 h-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplatesPage;
