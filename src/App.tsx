
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
