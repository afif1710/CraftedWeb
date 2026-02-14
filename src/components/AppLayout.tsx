import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Template } from "@/data/templates";
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
    // You might want to use the template info later, e.g. to pre-fill a form
    console.log("Buying template:", template.title); 
    setCurrentPage("contact");
  };

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
              onCategoryChange={(cat) => {
                setSelectedCategory(cat);
                localStorage.setItem('craftedweb_selected_category', cat);
              }}
              onPageChange={(p) => {
                setSelectedPage(p);
                localStorage.setItem('craftedweb_selected_page', p.toString());
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
      />
    </div>
  );
};

export default AppLayout;
