import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import FuseCaseStudy from "./pages/FuseCaseStudy";
import MuvMiCaseStudy from "./pages/MuvMiCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/home" element={<Home />} />
          <Route path="/case-study/quickbooks-onboarding" element={<CaseStudy />} />
          <Route path="/case-study/fuse-chrome-extension" element={<FuseCaseStudy />} />
          <Route path="/case-study/muvmi-tuk-tuks" element={<MuvMiCaseStudy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
