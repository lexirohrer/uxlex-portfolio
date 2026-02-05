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
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Resume = lazy(() => import("./pages/Resume"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const FuseCaseStudy = lazy(() => import("./pages/FuseCaseStudy"));
const MuvMiCaseStudy = lazy(() => import("./pages/MuvMiCaseStudy"));
const BridgeBoxCaseStudy = lazy(() => import("./pages/BridgeBoxCaseStudy"));
const Projects = lazy(() => import("./pages/Projects"));
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
        {/* ShaderGradient Background - Global background for entire site */}
        <ShaderGradientCanvas style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
          <ShaderGradient
            animate="on"
            axesHelper="on"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.1}
            cAzimuthAngle={180}
            cDistance={3.89}
            cPolarAngle={95}
            cameraZoom={1}
            color1="#290062"
            color2="#00000"
            color3="#210231"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={50}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={0.8}
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
            uAmplitude={0}
            uDensity={1.3}
            uFrequency={5.5}
            uSpeed={0.05}
            uStrength={4}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
        <GlassCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              
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
