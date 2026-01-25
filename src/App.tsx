import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GlassCursor from "@/components/ui/GlassCursor";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

// Lazy load all pages for code splitting
const IndexNew = lazy(() => import("./pages/IndexNew"));
const IndexNew2 = lazy(() => import("./pages/IndexNew2"));
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
        {/* ShaderGradient - Global background for entire site */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", isolation: "isolate" }}>
          <ShaderGradientCanvas style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
            <ShaderGradient
              animate="on"
              axesHelper="off"
              brightness={1.2}
              cAzimuthAngle={180}
              cDistance={4.51}
              cPolarAngle={90}
              cameraZoom={1}
              color1="#1E3363"
              color2="#402445"
              color3="#614A55"
              destination="onCanvas"
              embedMode="off"
              envPreset="city"
              format="gif"
              fov={50}
              frameRate={10}
              gizmoHelper="hide"
              grain="on"
              lightType="3d"
              pixelDensity={1.7}
              positionX={0}
              positionY={0}
              positionZ={0}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.1}
              rotationX={0}
              rotationY={0}
              rotationZ={0}
              shader="defaults"
              type="waterPlane"
              uAmplitude={1}
              uDensity={0.7}
              uFrequency={5.5}
              uSpeed={0.4}
              uStrength={2.5}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </div>
        <GlassCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<IndexNew2 />} />
              <Route path="/hello2" element={<IndexNew />} />
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
