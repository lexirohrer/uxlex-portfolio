import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GlassCursor from "@/components/ui/GlassCursor";

// Lazy load all pages for code splitting
const IndexNew = lazy(() => import("./pages/IndexNew"));
const Index = lazy(() => import("./pages/Index"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Resume = lazy(() => import("./pages/Resume"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const FuseCaseStudy = lazy(() => import("./pages/FuseCaseStudy"));
const MuvMiCaseStudy = lazy(() => import("./pages/MuvMiCaseStudy"));
const BridgeBoxCaseStudy = lazy(() => import("./pages/BridgeBoxCaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="text-foreground">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <GlassCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<IndexNew />} />
              <Route path="/home-old" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              
              <Route path="/case-study/quickbooks-onboarding" element={<CaseStudy />} />
              <Route path="/case-study/fuse-chrome-extension" element={<FuseCaseStudy />} />
              <Route path="/case-study/muvmi-tuk-tuks" element={<MuvMiCaseStudy />} />
              <Route path="/case-study/bridgebox-disaster-response" element={<BridgeBoxCaseStudy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
