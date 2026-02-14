import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Template, templates } from "@/data/templates";
import Header from "./marketplace/Header";
import Footer from "./marketplace/Footer";
import HeroSection from "./marketplace/HeroSection";
import DemoReel from "./marketplace/DemoReel";
import FeaturedGrid from "./marketplace/FeaturedGrid";
import TestimonialsSection from "./marketplace/TestimonialsSection";
import CategorySection from "./marketplace/CategorySection";
import StatsSection from "./marketplace/StatsSection";
import CTASection from "./marketplace/CTASection";
import TemplatesPage from "./marketplace/TemplatesPage";
import TemplateDetail from "./marketplace/TemplateDetail";
import HowItWorksPage from "./marketplace/HowItWorksPage";
import AboutPage from "./marketplace/AboutPage";
import ContactPage from "./marketplace/ContactPage";
import QuickViewModal from "./marketplace/QuickViewModal";

type Page =
  | "home"
  | "templates"
  | "template-detail"
  | "how-it-works"
  | "about"
  | "contact";

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [quickViewTemplate, setQuickViewTemplate] = useState<Template | null>(
    null,
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [scrollToId, setScrollToId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    () => localStorage.getItem('craftedweb_selected_category') || 'All'
  );
  const [selectedPage, setSelectedPage] = useState<number>(
    () => Number(localStorage.getItem('craftedweb_selected_page')) || 1
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    if (location.state && (location.state as any).target) {
      setCurrentPage((location.state as any).target);
      // clear state to prevent re-navigation on refresh? 
      // Actually navigate replace might be better, but this simple check works for now.
      // Better to clear it so it doesn't stick
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (!scrollToId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, selectedTemplate]);

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setScrollToId(null);
      } else {
        // Wait for render if element is not immediately available
        const timer = setTimeout(() => {
          const el = document.getElementById(scrollToId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
          setScrollToId(null);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollToId, currentPage]);

  const handleNavigate = (page: string) => {
    if (page === 'faq') {
      setCurrentPage('how-it-works');
      setScrollToId('faq');
      return;
    }

    if (page === 'license') {
      navigate('/license');
      return;
    }

    if (page === "template-detail" && selectedTemplate) {
      setCurrentPage("template-detail");
    } else {
      setCurrentPage(page as Page);
      setSelectedTemplate(null);
    }
  };

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setCurrentPage("template-detail");
  };

  const handleQuickView = (template: Template) => {
    setQuickViewTemplate(template);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewTemplate(null);
  };

  const handleViewDetailsFromQuickView = (template: Template) => {
    handleCloseQuickView();
    handleSelectTemplate(template);
  };

  const handleBackFromDetail = () => {
    setSelectedTemplate(null);
    setCurrentPage("templates");
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    localStorage.setItem('craftedweb_selected_category', category);
    setSelectedPage(1);
    localStorage.setItem('craftedweb_selected_page', '1');
    setCurrentPage("templates");
    setSelectedTemplate(null);
  };

  const handleBuy = (template: Template) => {
    setSelectedTemplate(template);
    setIsQuickViewOpen(false);
    handleNavigate("contact");
  };

  const filteredTemplates = React.useMemo(() => {
    return templates.filter((template) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;

      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery || 
        template.title.toLowerCase().includes(searchLower) ||
        template.description.toLowerCase().includes(searchLower) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => template.tags.includes(tag));

      // Price filter
      const matchesPrice = template.price >= priceRange[0] && template.price <= priceRange[1];

      return matchesCategory && matchesSearch && matchesTags && matchesPrice;
    });
  }, [selectedCategory, searchQuery, selectedTags, priceRange]);

  const currentIdx = selectedTemplate 
    ? filteredTemplates.findIndex(t => t.id === selectedTemplate.id) 
    : -1;
  const prevTemplate = currentIdx > 0 ? filteredTemplates[currentIdx - 1] : null;
  const nextTemplate = currentIdx !== -1 && currentIdx < filteredTemplates.length - 1 
    ? filteredTemplates[currentIdx + 1] : null;

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection
              onBrowseTemplates={() => handleNavigate("templates")}
            />
            <StatsSection />
            <DemoReel onSelectTemplate={handleSelectTemplate} />
            <CategorySection onSelectCategory={handleSelectCategory} />
            <FeaturedGrid
              onQuickView={handleQuickView}
              onSelectTemplate={handleSelectTemplate}
              onViewAll={() => handleNavigate("templates")}
              onBuy={handleBuy}
            />
            <TestimonialsSection />
            <CTASection 
              onBrowseTemplates={() => handleNavigate("templates")} 
              onContactUs={() => handleNavigate("contact")}
            />
          </>
        );

      case "templates":
        return (
          <div className="pt-20">
            <TemplatesPage
              onQuickView={handleQuickView}
              onSelectTemplate={handleSelectTemplate}
              onBuy={handleBuy}
              initialCategory={selectedCategory}
              initialPage={selectedPage}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedTags={selectedTags}
              onTagToggle={(tag) => {
                setSelectedTags(prev => 
                  prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                );
              }}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                localStorage.setItem('craftedweb_selected_category', cat);
              }}
              onPageChange={(p) => {
                setSelectedPage(p);
                localStorage.setItem('craftedweb_selected_page', p.toString());
              }}
              onClearFilters={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTags([]);
                setPriceRange([0, 1000]);
                setSelectedPage(1);
                localStorage.setItem('craftedweb_selected_category', 'All');
                localStorage.setItem('craftedweb_selected_page', '1');
              }}
            />
          </div>
        );

      case "template-detail":
        if (!selectedTemplate) {
          handleNavigate("templates");
          return null;
        }
        return (
          <TemplateDetail
            template={selectedTemplate}
            onBack={handleBackFromDetail}
            onQuickView={handleQuickView}
            onSelectTemplate={handleSelectTemplate}
            onBuy={handleBuy}
            onNavigate={handleNavigate}
            prevTemplate={prevTemplate}
            nextTemplate={nextTemplate}
          />
        );

      case "how-it-works":
        return (
          <div className="pt-20">
            <HowItWorksPage
              onBrowseTemplates={() => handleNavigate("templates")}
            />
          </div>
        );

      case "about":
        return (
          <div className="pt-20">
            <AboutPage />
          </div>
        );

      case "contact":
        return (
          <div className="pt-20">
            <ContactPage onNavigate={handleNavigate} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>{renderPage()}</main>

      <Footer onNavigate={handleNavigate} onSelectCategory={handleSelectCategory} />

      <QuickViewModal
        template={quickViewTemplate}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onViewDetails={handleViewDetailsFromQuickView}
        onBuy={handleBuy}
      />
    </div>
  );
};

export default AppLayout;
