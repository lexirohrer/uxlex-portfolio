import React, { useEffect, useRef, useState, startTransition } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const projects = [
  {
    href: "/case-study/quickbooks-onboarding",
    title: "QuickBooks Onboarding",
    description: "Leading the design effort to streamline onboarding for small business owners",
    tools: ["Figma", "Figjam", "Usertesting.com", "Google Suite", "37% metric bump"],
    image: "QB cover.png",
    imageDark: "QB_cover_dark.png",
    imageAlt: "QuickBooks Onboarding"
  },
  {
    href: "/case-study/muvmi-tuk-tuks",
    title: "MuvMi electric Tuk Tuks",
    description: "Co-designed sustainable mobility options with Thai tourists and citizens",
    tools: ["Figma", "User Research", "Co-design", "Prototyping", "Workshop Facilitation"],
    image: "MuvMi cover.png",
    imageDark: "MuvMi cover.png",
    imageAlt: "MuvMi Electric Tuk Tuk"
  },
  {
    href: "/case-study/bridgebox-disaster-response",
    title: "BridgeBox Disaster Response System",
    description: "Overhauled the UI for a climate disaster communication in rural Thailand",
    tools: ["Figma", "Participatory Design", "User Research", "AI/ML", "Workshop Facilitation", "AI for social good"],
    image: "BBX cover.png",
    imageDark: "BBX cover.png",
    imageAlt: "BridgeBox Disaster Response"
  },
  {
    href: "/case-study/fuse-chrome-extension",
    title: "Fuse Google Chrome Extension",
    description: "Designed a second brain for researchers making sense of information",
    tools: ["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"],
    image: "Fuse cover.png",
    imageDark: "Fuse cover.png",
    imageAlt: "Fuse Chrome Extension"
  }
];

const Projects = () => {
  const isMobile = useIsMobile();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const memojiRef = useRef<HTMLDivElement>(null);
  
  // Mouse-responsive Memoji state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Zoom and scroll constants
  const MAX_SCALE = 2;
  const HERO_EXIT_SCALE = 8;
  const PROJECT_EXIT_SCALE = 6;
  const SCROLL_RANGE = 10000; // Increased to slow down scrolling and add more pause time
  
  // Hero section ranges - takes up 1/5 of scroll (20%)
  const HERO_ZOOM_RANGE = 0.1; // 0-10% zoom in
  const HERO_EXIT_RANGE = 0.2; // 10-20% zoom out and exit
  
  // Project sections: each project gets equal space after hero
  // Projects start at 20% and each gets 20% of scroll range (4 projects = 80%)
  const PROJECT_START = 0.2;
  const PROJECT_SIZE = 0.2; // Each project gets 20% of scroll (0.2 = 20%)
  
  const [scale, setScale] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const minScaleRef = useRef(0.5);
  const accumulatedScrollRef = useRef(0);
  
  // Snap tracking
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Flick detection for hero section
  const scrollVelocityRef = useRef(0);
  const lastWheelTimeRef = useRef(Date.now());
  const lastWheelDeltaRef = useRef(0);
  
  useEffect(() => {
    if (isMobile) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    
    const calculateInitialScale = () => {
      const viewportWidth = window.innerWidth;
      const headerPadding = viewportWidth >= 768 ? 32 : viewportWidth >= 640 ? 24 : 16;
      const availableWidth = viewportWidth - (headerPadding * 2);
      const contentWidth = content.scrollWidth;
      
      if (!contentWidth || contentWidth === 0 || !isFinite(contentWidth)) {
        return 0.8;
      }
      
      const calculatedScale = (availableWidth * 0.95) / contentWidth;
      const clampedScale = Math.min(MAX_SCALE, Math.max(0.1, calculatedScale));
      
      if (!isFinite(clampedScale) || clampedScale <= 0) {
        return 0.8;
      }
      
      return clampedScale;
    };
    
    let accumulatedScroll = 0;
    accumulatedScrollRef.current = 0;
    
    let initialScale = 1;
    let targetScale = initialScale;
    let currentScale = initialScale;
    
    try {
      const calculatedScale = calculateInitialScale();
      if (calculatedScale > 0 && calculatedScale <= MAX_SCALE && isFinite(calculatedScale)) {
        initialScale = calculatedScale;
        targetScale = calculatedScale;
        currentScale = calculatedScale;
      }
    } catch (error) {
      console.warn('Failed to calculate initial scale:', error);
    }
    
    minScaleRef.current = initialScale;
    setScale(initialScale);
    setScrollProgress(0);
    
    const recalculateScale = () => {
      try {
        const newScale = calculateInitialScale();
        if (newScale !== initialScale && isFinite(newScale) && newScale > 0) {
          minScaleRef.current = newScale;
          targetScale = newScale;
          currentScale = newScale;
          setScale(newScale);
        }
      } catch (error) {
        console.warn('Failed to recalculate scale:', error);
      }
    };
    
    requestAnimationFrame(() => {
      requestAnimationFrame(recalculateScale);
    });
    
    setIsInitialized(true);
    let animationFrameId: number;
    
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };
    
    const updateScale = () => {
      const diff = targetScale - currentScale;
      if (Math.abs(diff) > 0.001) {
        currentScale += diff * 0.15;
        startTransition(() => {
          setScale(currentScale);
        });
        animationFrameId = requestAnimationFrame(updateScale);
      } else {
        currentScale = targetScale;
        startTransition(() => {
          setScale(currentScale);
        });
        animationFrameId = 0;
      }
    };
    
    // Extract scale calculation to avoid duplication
    const calculateScaleFromProgress = (progress: number): number => {
      const MIN_SCALE = minScaleRef.current;
      
      if (progress <= HERO_ZOOM_RANGE) {
        const heroProgress = progress / HERO_ZOOM_RANGE;
        return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * easeOutCubic(heroProgress);
      } else if (progress <= HERO_EXIT_RANGE) {
        const exitProgress = (progress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE);
        return MAX_SCALE + (HERO_EXIT_SCALE - MAX_SCALE) * easeOutCubic(exitProgress);
      } else {
        // After hero exit, projects zoom continuously
        const projectProgress = (progress - HERO_EXIT_RANGE) / (1 - HERO_EXIT_RANGE);
        const newTargetScale = 1 - (projectProgress * 0.3);
        return Math.max(0.7, Math.min(1, newTargetScale));
      }
    };
    
    // Calculate project snap points (centers of each project's pause zone)
    const getProjectSnapPoints = (): number[] => {
      const heroEnd = HERO_EXIT_RANGE; // 0.2
      const projectCarouselStart = heroEnd;
      const projectCarouselRange = 1.0 - projectCarouselStart; // 0.8
      const numProjects = projects.length;
      const projectSize = 1.0 / numProjects; // 0.25 per project
      
      const snapPoints: number[] = [];
      for (let i = 0; i < numProjects; i++) {
        const projectStart = projectCarouselStart + (i * projectSize * projectCarouselRange);
        // Snap point is the middle of the project range (center of pause zone)
        const snapPoint = projectStart + (projectSize * projectCarouselRange * 0.5);
        snapPoints.push(snapPoint);
      }
      return snapPoints;
    };
    
    // Get the snap point for project 1 (QuickBooks)
    const getProject1SnapPoint = (): number => {
      const heroEnd = HERO_EXIT_RANGE; // 0.2
      const projectCarouselStart = heroEnd;
      const projectCarouselRange = 1.0 - projectCarouselStart; // 0.8
      const projectSize = 1.0 / projects.length; // 0.25 per project
      
      const projectStart = projectCarouselStart + (0 * projectSize * projectCarouselRange);
      // Snap point is the middle of project 1's range
      return projectStart + (projectSize * projectCarouselRange * 0.5);
    };
    
    // Find nearest project snap point
    const findNearestSnapPoint = (progress: number): number => {
      const snapPoints = getProjectSnapPoints();
      let nearest = progress;
      let minDistance = Infinity;
      
      // Check project snap points
      for (const snapPoint of snapPoints) {
        const distance = Math.abs(progress - snapPoint);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = snapPoint;
        }
      }
      
      // Also consider hero start (0) if we're in hero section
      if (progress < HERO_EXIT_RANGE) {
        const heroDistance = Math.abs(progress - 0);
        if (heroDistance < minDistance) {
          nearest = 0;
        }
      }
      
      return nearest;
    };
    
    // Animate to a specific progress point (for snapping)
    const animateToProgress = (targetProgress: number, duration: number = 600) => {
      const startProgress = accumulatedScrollRef.current / SCROLL_RANGE;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(1, elapsed / duration);
        // Ease-out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - t, 3);
        
        const currentProgress = startProgress + (targetProgress - startProgress) * eased;
        const currentScroll = currentProgress * SCROLL_RANGE;
        
        accumulatedScrollRef.current = currentScroll;
        accumulatedScroll = currentScroll;
        
        startTransition(() => {
          setScrollProgress(currentProgress);
        });
        
        const newTargetScale = calculateScaleFromProgress(currentProgress);
        targetScale = Math.max(minScaleRef.current, Math.min(HERO_EXIT_SCALE, newTargetScale));
        
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(updateScale);
        }
        
        if (t < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };
    
    // Update scroll position and scale - single source of truth
    // This ensures consistent state management and prevents glitches
    const updateScrollPosition = (delta: number) => {
      const currentScroll = accumulatedScrollRef.current;
      const newScroll = Math.max(0, Math.min(SCROLL_RANGE, currentScroll + delta));
      
      // Only update if change is significant to avoid micro-updates and jitter
      // Reduced threshold from 0.5 to 0.1 to improve sensitivity for small scrolls
      if (Math.abs(newScroll - currentScroll) < 0.1) return;
      
      // Clear any pending snap timeout
      if (snapTimeoutRef.current !== null) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }
      
      // Update ref first (single source of truth)
      accumulatedScrollRef.current = newScroll;
      accumulatedScroll = newScroll; // Keep local var in sync for compatibility
      
      const progress = newScroll / SCROLL_RANGE;
      
      // Update progress state (batched in transition)
      startTransition(() => {
        setScrollProgress(progress);
      });
      
      // Update scale based on progress
      const newTargetScale = calculateScaleFromProgress(progress);
      targetScale = Math.max(minScaleRef.current, Math.min(HERO_EXIT_SCALE, newTargetScale));
      
      // Start scale animation if not already running
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateScale);
      }
      
      // Schedule snap-to-project after scroll stops (debounced)
      // Only snap if we're in the project carousel area
      if (progress >= HERO_EXIT_RANGE) {
        // Clear existing timeout
        if (snapTimeoutRef.current !== null) {
          clearTimeout(snapTimeoutRef.current);
        }
        
        // Set new timeout to snap after scroll stops
        snapTimeoutRef.current = setTimeout(() => {
          const finalProgress = accumulatedScrollRef.current / SCROLL_RANGE;
          const nearestSnap = findNearestSnapPoint(finalProgress);
          const snapDistance = Math.abs(finalProgress - nearestSnap);
          
          // Only snap if we're far enough from a snap point (more than 5% of scroll range)
          // This prevents snapping when user is already close to a project center
          if (snapDistance > 0.05) {
            animateToProgress(nearestSnap, 600);
          }
          snapTimeoutRef.current = null;
        }, 150); // Wait 150ms after last scroll event
      }
    };
    
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = accumulatedScrollRef.current;
      const currentProgress = currentScroll / SCROLL_RANGE;
      
      // Bounds checking - prevent scrolling beyond limits
      if (currentScroll >= SCROLL_RANGE && e.deltaY > 0) return;
      if (currentScroll <= 0 && e.deltaY < 0) return;
      
      e.preventDefault();
      
      // Detect flicks in hero section (only when scrolling down)
      const isInHeroSection = currentProgress < HERO_EXIT_RANGE;
      const isScrollingDown = e.deltaY > 0;
      
      if (isInHeroSection && isScrollingDown) {
        // Calculate scroll velocity to detect flicks
        const now = Date.now();
        const timeDelta = Math.max(1, now - lastWheelTimeRef.current);
        const deltaY = Math.abs(e.deltaY);
        
        // Calculate instantaneous velocity
        const instantaneousVelocity = deltaY / timeDelta;
        
        // Update velocity tracking with exponential moving average
        if (timeDelta < 50) {
          scrollVelocityRef.current = scrollVelocityRef.current * 0.5 + instantaneousVelocity * 0.5;
        } else {
          scrollVelocityRef.current = instantaneousVelocity;
        }
        
        // Update tracking
        lastWheelTimeRef.current = now;
        lastWheelDeltaRef.current = e.deltaY;
        
        // Detect flick: velocity > 15 deltaY/ms
        const isFlick = scrollVelocityRef.current > 15;
        
        if (isFlick) {
          // Clear any pending snap timeout
          if (snapTimeoutRef.current !== null) {
            clearTimeout(snapTimeoutRef.current);
            snapTimeoutRef.current = null;
          }
          
          // Immediately snap to project 1 (QuickBooks)
          const project1Snap = getProject1SnapPoint();
          animateToProgress(project1Snap, 600);
          return; // Don't process normal scroll, just snap
        }
      } else {
        // Reset velocity tracking when not in hero section or scrolling up
        scrollVelocityRef.current = 0;
      }
      
      const scrollSpeed = 5;
      const delta = e.deltaY * scrollSpeed;
      
      updateScrollPosition(delta);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable) {
        return;
      }
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        
        const scrollSpeed = 100;
        const delta = e.key === 'ArrowDown' ? scrollSpeed : -scrollSpeed;
        
        updateScrollPosition(delta);
      }
    };
    
    container.setAttribute('tabindex', '-1');
    container.focus();
    
    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    
    // Handle wheel events when container is not focused (catch initial scrolls)
    // Only fire if target is outside container AND container is not focused
    // This prevents double-handling of wheel events
    const handleWindowWheel = (e: WheelEvent) => {
      const target = e.target as Node;
      if (!container.contains(target) && document.activeElement !== container) {
        handleWheel(e);
      }
    };
    window.addEventListener("wheel", handleWindowWheel, { passive: false });
    
    const preventScroll = (e: Event) => {
      if (accumulatedScrollRef.current < SCROLL_RANGE) {
        e.preventDefault();
      }
    };
    container.addEventListener("scroll", preventScroll, { passive: false });
    
    // Update body scroll state based on scroll position
    const updateBodyScroll = () => {
      if (accumulatedScrollRef.current >= SCROLL_RANGE) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = "hidden";
      }
    };
    
    // Initial body scroll state
    updateBodyScroll();
    
    // Pause animations when tab is hidden
    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };
    
    window.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      // Cleanup event listeners
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", preventScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWindowWheel);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      
      // Cleanup snap timeout
      if (snapTimeoutRef.current !== null) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }
      
      // Cleanup animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Reset body overflow
      document.body.style.overflow = "";
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (scrollProgress > HERO_EXIT_RANGE) {
      setMousePosition({ x: 0, y: 0 });
    }
  }, [scrollProgress]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!memojiRef.current) return;
      
      if (scrollProgress > HERO_EXIT_RANGE) {
        return;
      }
      
      const rect = memojiRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      setMousePosition({
        x: x * 15,
        y: y * 15,
      });
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const memojiElement = memojiRef.current;
    if (memojiElement) {
      memojiElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (memojiElement) {
        memojiElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [scrollProgress]);
  
  // Project carousel animation: Projects move right to left and scale up as user scrolls
  // Animation completes over 3000px of scroll (SCROLL_RANGE)
  // Pattern matches Figma prototype: projects transition with blur, scale, and position changes
  const getProjectCarouselTransform = (projectIndex: number) => {
    // Animation pattern: Projects move right to left and scale up as user scrolls
    // Each project has overlapping phases with the next project
    
    // Key points:
    // - 0%: Proj 1 centered (scale 1.0), Proj 2 background (scale 0.75, blurred, offset right)
    // - 12.5%: Proj 1 exiting (scale 1.5, x: -663), Proj 2 transitioning (scale 0.85, blur reducing)
    // - 25%: Proj 1 off screen (scale 2.0), Proj 2 centered (scale 1.0), Proj 3 background (scale 0.75)
    
    const projectWidths = [1326.882, 1095, 886.735, 886.735];
    const projectWidth = projectWidths[projectIndex];
    
    // Map scroll progress to project carousel progress (0-1.0)
    // Projects animation happens after hero section (20% of scroll)
    const heroEnd = HERO_EXIT_RANGE; // 0.2
    const projectCarouselStart = heroEnd; // Projects start after hero
    const projectCarouselRange = 1.0 - projectCarouselStart; // 0.8 (80% of scroll for projects)
    
    // Normalize scroll progress to project carousel progress (0-1.0)
    const projectProgress = scrollProgress < projectCarouselStart 
      ? 0 
      : (scrollProgress - projectCarouselStart) / projectCarouselRange;
    
    let scale = 1.0;
    let translateX = 0;
    let blur = 0;
    let zIndex = 1;
    
    // Linear function (no easing)
    const linear = (t: number) => t;
    
    // Stack-based positioning system
    // Fixed positions: Position 1 (centered), Position 2, Position 3, Position 4 (furthest back)
    // All upcoming projects are always visible in their stack positions
    // Projects move through positions sequentially: 4 → 3 → 2 → 1 → exit
    
    // Stack position definitions - increased scale differences and offsets for more z-index "space"
    // More dramatic size differences and horizontal separation creates more visual depth
    const stackPositions = [
      { scale: 2.5, translateX: -window.innerWidth * 1.5, blur: 0, zIndex: 1, opacity: 0 }, // Position 0: Off screen (scaled up and moved left)
      { scale: 1.0, translateX: 0, blur: 0, zIndex: 10, opacity: 1 }, // Position 1: Centered
      { scale: 0.7, translateX: 300, blur: 5, zIndex: 9, opacity: 0.5 }, // Position 2: Behind center, offset 300px right (was 0.8 scale, 200px)
      { scale: 0.5, translateX: 600, blur: 8, zIndex: 8, opacity: 0.4 }, // Position 3: Further back, offset 600px right (was 0.6 scale, 400px)
      { scale: 0.3, translateX: 900, blur: 12, zIndex: 7, opacity: 0 }, // Position 4: Furthest back, offset 900px right (was 0.4 scale, 600px)
    ];
    
    // Each project gets 25% of the project carousel range
    // Adjust timing to add longer pauses when projects are centered
    const projectStart = projectIndex * 0.25;
    const projectEnd = (projectIndex + 1) * 0.25;
    // Redistribute timing for more space between projects:
    // 0.03 = transition in (3%), 0.19 = pause zone (19%), 0.03 = transition out (3%)
    // Longer transitions create more visual separation between projects
    const projectCenter = projectStart + 0.03; // Transition happens in first 3% of range (was 2%)
    const projectPauseEnd = projectEnd - 0.03; // Pause ends 3% before range ends (was 2%) - longer transition zones
    
    // Calculate which position this project should be in
    // When Project 1 is at position 1, Projects 2,3,4 are at positions 2,3,4
    // As we scroll, projects move forward through positions
    
    let currentPosition = 0; // Default: off screen
    
    if (projectProgress <= projectStart) {
      // At or before this project's range starts
      if (projectIndex === 0) {
        // Project 1: starts at position 1 (centered)
        currentPosition = 1;
      } else {
        // Other projects: should be visible in their initial stack positions
        // When Project 1 is at position 1, Project 2 is at position 2, etc.
        currentPosition = projectIndex + 1;
      }
    } else if (projectProgress < projectCenter) {
      // First half: transitioning forward through positions
      // Project 1 should stay centered during this phase (no transition yet)
      if (projectIndex === 0) {
        // Project 1: stays centered during transition phase (will pause later)
        currentPosition = 1;
      } else {
        // Other projects: moving from their initial position to the next position forward
        // Project 2: position 2 → position 1
        // Project 3: position 3 → position 2
        // Project 4: position 4 → position 3
        const progress = (projectProgress - projectStart) / (projectCenter - projectStart);
        const eased = linear(progress);
        const fromPosition = projectIndex + 1; // Starting position
        const toPosition = projectIndex; // Target position
        const fromPos = stackPositions[fromPosition];
        const toPos = stackPositions[toPosition];
        scale = fromPos.scale + (toPos.scale - fromPos.scale) * eased;
        translateX = fromPos.translateX + (toPos.translateX - fromPos.translateX) * eased;
        blur = fromPos.blur + (toPos.blur - fromPos.blur) * eased;
        const opacity = fromPos.opacity + (toPos.opacity - fromPos.opacity) * eased;
        zIndex = Math.round(fromPos.zIndex + (toPos.zIndex - fromPos.zIndex) * eased);
        return { scale, translateX, blur, zIndex, opacity };
      }
    } else if (projectProgress < projectEnd) {
      // Second half: at target position or exiting
      // All projects (including Project 1) should have a pause zone when centered
      if (projectProgress < projectPauseEnd) {
        // Extended pause zone: stay centered longer
        currentPosition = 1; // Centered (paused)
      } else {
        // Exiting phase: scale up and move off left side
        if (projectIndex < 3) {
          // Projects 1-3: exit
          const exitProgress = (projectProgress - projectPauseEnd) / (projectEnd - projectPauseEnd);
          const eased = linear(exitProgress);
          const fromPos = stackPositions[1];
          const toPos = stackPositions[0];
          scale = fromPos.scale + (toPos.scale - fromPos.scale) * eased;
          translateX = fromPos.translateX + (toPos.translateX - fromPos.translateX) * eased;
          blur = fromPos.blur + (toPos.blur - fromPos.blur) * eased;
          const opacity = fromPos.opacity + (toPos.opacity - fromPos.opacity) * eased;
          zIndex = Math.round(fromPos.zIndex + (toPos.zIndex - fromPos.zIndex) * eased);
          return { scale, translateX, blur, zIndex, opacity };
        } else {
          // Project 4: at position 1 (centered, stays there)
          currentPosition = 1;
        }
      }
    } else {
      // After this project's range
      if (projectIndex < 3) {
        currentPosition = 0; // Off screen
      } else {
        currentPosition = 1; // Project 4 stays centered
      }
    }
    
    // Apply the stack position properties
    const position = stackPositions[currentPosition];
    scale = position.scale;
    translateX = position.translateX;
    blur = position.blur;
    zIndex = position.zIndex;
    const opacity = position.opacity;
    
    return { scale, translateX, blur, zIndex, opacity };
  };
  
  if (isMobile) {
    return (
      <>
        <div className="min-h-screen bg-[#0A0520]">
          <Header />
          
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
            <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto w-full">
              <div className="flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}Memoji.png`}
                  alt="Lexi Memoji"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
              
              <div className="flex-1 max-w-2xl text-center">
                <h1 className="font-hagrid text-4xl md:text-5xl font-bold leading-tight mb-4">
                  <span className="text-white">Hi, I'm Lexi</span>
                  <br />
                  <span className="text-white text-2xl md:text-3xl font-normal">
                    a social impact technologist
                  </span>
                </h1>
                <p className="text-white text-base md:text-lg leading-relaxed mt-6">
                  This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
                </p>
                <div className="mt-8 w-full flex items-center justify-between md:justify-start md:gap-4">
                  <a
                    href="https://www.linkedin.com/in/alexandra-rohrer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                      alt="LinkedIn"
                      className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="eager"
                    />
                  </a>
                  <a
                    href="mailto:lexirohrer@gmail.com"
                    className="group flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}Gmail.png`}
                      alt="Gmail"
                      className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="eager"
                    />
                  </a>
                  <a
                    href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}Calendar.png`}
                      alt="Calendar"
                      className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="eager"
                    />
                  </a>
                  <a
                    href="https://uxlex.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}Substack.png`}
                      alt="Substack"
                      className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="eager"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Project Sections */}
          {projects.map((project, index) => {
            const imageSrc = project.image === "QB cover.png" 
              ? project.imageDark 
              : project.image;
            
            return (
              <section key={index} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
                <div className="w-full max-w-6xl mx-auto">
                  <Link to={project.href} className="block w-full group">
                    <div className="relative rounded-3xl border border-white/30 border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99]">
                      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
                        <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center p-6 lg:p-10`}>
                          <img
                            src={`${import.meta.env.BASE_URL}${imageSrc}`}
                            className="w-full h-full max-h-[400px] object-contain"
                            alt={project.imageAlt}
                          />
                        </div>
                        
                        <div className={`relative order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center p-8 lg:p-12`}>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-hagrid group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {project.tools && project.tools.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool, toolIndex) => (
                                <span
                                  key={toolIndex}
                                  className="bg-white/30 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 border-white/10"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
  
  // Desktop: Zoom-based scroll system with stacked projects
  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{ touchAction: "none", zIndex: 1 }}
      >
        <Header />
        
        {/* Hero Section */}
        <div
          ref={heroSectionRef}
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "45% center",
            willChange: "transform",
            zIndex: scrollProgress > HERO_EXIT_RANGE ? 1 : 50,
            opacity: scrollProgress > HERO_EXIT_RANGE ? 0 : 1,
            visibility: scrollProgress > HERO_EXIT_RANGE ? 'hidden' : 'visible',
            transition: isInitialized 
              ? `transform 0.1s ease-out, opacity 0.3s ease-out, visibility 0s ${scrollProgress > HERO_EXIT_RANGE ? '0.3s' : '0s'}, z-index 0s ${scrollProgress > HERO_EXIT_RANGE ? '0.3s' : '0s'}` 
              : "none",
            pointerEvents: scrollProgress > HERO_EXIT_RANGE ? 'none' : 'auto',
          }}
        >
          <div
            ref={contentRef}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full"
          >
            <div 
              ref={memojiRef}
              className="flex-shrink-0 order-1 md:order-2"
              style={{
                transform: scrollProgress > HERO_EXIT_RANGE
                  ? 'translate(0px, 0px)'
                  : scrollProgress > HERO_ZOOM_RANGE
                  ? `translateX(${window.innerWidth * 1.5 * ((scrollProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE))}px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: scrollProgress > HERO_EXIT_RANGE
                  ? 'transform 0.3s ease-out'
                  : scrollProgress > HERO_ZOOM_RANGE 
                  ? 'transform 0.1s ease-out' 
                  : 'transform 0.3s ease-out',
                willChange: 'transform',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}Memoji.png`}
                alt="Lexi Memoji"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transition-transform duration-300"
                loading="eager"
                style={{
                  transform: scrollProgress <= HERO_EXIT_RANGE 
                    ? `rotate(${mousePosition.x * 0.1}deg)`
                    : 'rotate(0deg)',
                }}
              />
            </div>

            <div 
              className="flex-1 max-w-2xl text-left md:text-left order-2 md:order-1"
              style={{
                transform: scrollProgress > HERO_ZOOM_RANGE
                  ? `translateX(${-window.innerWidth * 1.5 * ((scrollProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE))}px)`
                  : 'translateX(0px)',
                transition: 'transform 0.1s ease-out',
                willChange: 'transform',
              }}
            >
              <h1 className="font-hagrid text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Hi, I'm Lexi</span>
                <br />
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">
                  a social impact technologist
                </span>
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed mt-6">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
              <div className="mt-8 w-full flex items-center justify-between md:justify-start md:gap-4">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="mailto:lexirohrer@gmail.com"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Gmail.png`}
                    alt="Gmail"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Calendar.png`}
                    alt="Calendar"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://uxlex.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Substack.png`}
                    alt="Substack"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Carousel - Full cards (image + text) animating during scroll */}
        {scrollProgress >= HERO_EXIT_RANGE && (() => {
          // Find which project is currently centered (focused)
          let currentCenteredIndex = -1;
          for (let i = 0; i < projects.length; i++) {
            const transform = getProjectCarouselTransform(i);
            // Consider a project centered if it's close to center (translateX near 0) and has high z-index
            if (Math.abs(transform.translateX) < 50 && transform.zIndex >= 9 && transform.scale > 0.9) {
              currentCenteredIndex = i;
              break;
            }
          }
          
          return projects.map((project, index) => {
          const imageSrc = project.image === "QB cover.png" && theme === 'dark' 
            ? project.imageDark 
            : project.image;
          
            const carouselTransform = getProjectCarouselTransform(index);
            
            // Determine if this project is currently centered
            const isCentered = index === currentCenteredIndex;
            
            // For upcoming projects (behind the current one), override with stack positioning
            let finalTranslateX = carouselTransform.translateX;
            let finalScale = carouselTransform.scale;
            let finalBlur = carouselTransform.blur;
            let finalZIndex = carouselTransform.zIndex;
            let finalOpacity = carouselTransform.opacity;
            
            if (!isCentered && index > currentCenteredIndex && currentCenteredIndex >= 0) {
              // This is an upcoming project - calculate its position in the stack
              // Increased scale differences and offsets for more z-index "space"
              const stackPosition = index - currentCenteredIndex; // 1, 2, 3, etc.
              
              // Progressive offset to create card stack effect - each card offset more to the right
              // Increased offsets and scale differences create more visual separation
              finalTranslateX = stackPosition * 300; // 300px offset per card (was 200px) - more horizontal separation
              finalBlur = 3 + (stackPosition * 2); // Progressive blur: 5px, 8px, 12px (was 3px flat)
              finalScale = 1 - (0.3 * stackPosition); // Scale down by 0.3 per position (was 0.2) - more dramatic size difference
              finalZIndex = 10 - stackPosition; // Lower z-index for cards further back
              finalOpacity = stackPosition > 2 ? 0 : 0.5 - (stackPosition * 0.1); // Progressive opacity: 0.5, 0.4, 0.3 (was 0.6 flat)
            } else if (!isCentered && index < currentCenteredIndex) {
              // Past projects - scale up and move off left side (already handled by carousel transform)
              // Keep the carousel transform values
            }
            
            // Don't render if opacity is 0 (unless it's a stacked upcoming project)
            if (finalOpacity === 0 && !(index > currentCenteredIndex && currentCenteredIndex >= 0)) {
              return null;
            }
            
            // Only allow pointer events when card is centered
            const isInteractive = isCentered;
          
          return (
            <div
              key={index}
              className="fixed inset-0 flex items-center"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translateX(${finalTranslateX}px) scale(${finalScale})`,
                transformOrigin: 'center center',
                // Remove blur from container - blur is now applied to inner content only
                filter: 'none',
                WebkitFilter: 'none',
                zIndex: finalZIndex,
                opacity: finalOpacity,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform, filter, opacity',
                pointerEvents: isInteractive ? 'auto' : 'none',
                width: '100%',
              }}
            >
              {/* Match Header structure: padding on outer container, max-w-7xl on inner */}
              <div className="w-full px-4 sm:px-6 md:px-8">
                <div className="w-full max-w-7xl mx-auto">
                  <Link to={project.href} className="block w-full group">
                    {/* Glassmorphic card with backdrop blur to see projects behind */}
                    {/* Card outline stays sharp, but content inside gets blurred when in background */}
                    {/* Match testimonials card styling with layered backgrounds for better opacity */}
                    {/* Make focused card completely opaque */}
                    <div 
                      className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[0.99] w-full border border-white/30"
                      style={{
                        backgroundColor: isCentered ? "rgba(10, 5, 32, 1)" : "rgba(10, 5, 32, 0.2)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                      }}
                    >
                      {/* Layered backgrounds like testimonials for better opacity */}
                      {/* Make layered backgrounds fully opaque when card is centered */}
                      <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl ${isCentered ? 'bg-[#0A0520]' : 'bg-[#0A0520]/20'}`}></div>
                      <div className={`absolute inset-0 rounded-3xl ${isCentered ? 'bg-white/40' : 'bg-white/20'}`}></div>
                      {/* Inner content wrapper - blur this when card is in background */}
                      {/* Apply blur to inner content only, keeping card border sharp */}
                      <div 
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]"
                        style={{
                          filter: finalBlur > 0 ? `blur(${finalBlur}px)` : 'none',
                          WebkitFilter: finalBlur > 0 ? `blur(${finalBlur}px)` : 'none',
                        }}
                      >
                      <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center p-6 lg:p-10`}>
                        <img
                          src={`${import.meta.env.BASE_URL}${imageSrc}`}
                          className="w-full h-full max-h-[400px] object-contain"
                          alt={project.imageAlt}
                          loading="lazy"
                        />
                      </div>
                      
                      <div className={`relative order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center p-8 lg:p-12`}>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-hagrid group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {project.tools && project.tools.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="bg-white/30 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 border-white/10"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          );
          });
        })()}
        
        {/* Scroll indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/60 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
