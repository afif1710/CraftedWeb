
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import License from "./pages/License";
import NotFound from "./pages/NotFound";
import Analytics from "./components/Analytics";
import { lazy, Suspense } from "react";

const LeadFinder = lazy(() => import("./pages/LeadFinder"));
const leadFinderPage = (page: "overview" | "privacy" | "terms") => (
  <Suspense fallback={<div className="min-h-screen bg-obsidian p-8 text-nav-gray" role="status">Loading Lead Finder information…</div>}>
    <LeadFinder page={page} />
  </Suspense>
);

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Analytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/templates" element={<Index initialPage="templates" />} />
            <Route path="/template/:slug" element={<Index initialPage="template-detail" />} />
            <Route path="/contact" element={<Index initialPage="contact" />} />
            <Route path="/about" element={<Index initialPage="about" />} />
            <Route path="/how-it-works" element={<Index initialPage="how-it-works" />} />
            <Route path="/license" element={<License />} />
            <Route path="/lead-finder" element={leadFinderPage("overview")} />
            <Route path="/lead-finder/privacy" element={leadFinderPage("privacy")} />
            <Route path="/lead-finder/terms" element={leadFinderPage("terms")} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
