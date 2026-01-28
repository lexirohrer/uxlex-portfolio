import React, { useEffect, useRef, useState, useMemo, useCallback, startTransition } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import AboutMeContent from "@/components/sections/AboutMeContent";
import { allFunFacts } from "@/data/funFacts";
import { useIsMobile } from "@/hooks/use-mobile";

const IndexNew2 = () => {
  const isMobile = useIsMobile();
  
  // Track which fact indices have been shown
  const shownFactIndicesRef = useRef<Set<number>>(new Set([0, 1, 2]));
  const [shownFactIndices, setShownFactIndices] = useState<Set<number>>(
    shownFactIndicesRef.current
  );
  
  // Initialize with first 3 facts
  const [displayedFacts, setDisplayedFacts] = useState(() => 
    allFunFacts.slice(0, 3)
  );
  
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  // Track if cards are rotating (full flip on shuffle)
  const [isRotating, setIsRotating] = useState(false);
  
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
  // Mouse-responsive Memoji state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const memojiRef = useRef<HTMLDivElement>(null);
  
  // About Me scrollable container ref
  const aboutMeScrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Track card heights for consistent sizing on mobile
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const cardBackRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const testimonials = [
    {
      text: "Lexi is the definition of a team player – always willing to go the extra mile and contribute to the project's success. She has a strong sense of self-awareness and a desire to learn and grow.",
      author: "Jen Hong",
      title: "Staff Product Designer @ Intuit",
      gradient: "from-pink-200/20 via-white/10 to-purple-200/20 dark:from-pink-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-orange-300 dark:text-orange-400"
    },
    {
      text: "Lexi always brings positive energy, proactivity, courage, customer obsession, collaboration, and strong systems thinking to any project she was tasked with. She naturally has a learning mindset and always comes to the table with a strong data-backed POV",
      author: "Womo Iyegha",
      title: "Product Design Leader @ Intuit",
      gradient: "from-indigo-200/20 via-white/10 to-blue-200/20 dark:from-indigo-500/10 dark:via-transparent dark:to-blue-500/10",
      quoteColor: "text-purple-300 dark:text-purple-400"
    },
    {
      text: "If they asked me to clean a rocketship with a toothbrush, I'd say yes if Lexi was doing it with me. If I put a design dream team together, she's at the top of my list. 🚀",
      author: "Zip Lehnus",
      title: "Staff Content Designer, Intuit ",
      gradient: "from-purple-200/20 via-white/10 to-purple-200/20 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-purple-300 dark:text-purple-400"
    },
    {
      text: "Lexi's UX expertise made sure our design solutions were grounded in real needs. Her enthusiasm, optimism, and constructive approach made collaboration a joy - I would gladly work with her again.",
      author: "Tanida Disyabut",
      title: "Social Enterprise Founder",
      gradient: "from-yellow-200/20 via-white/10 to-orange-200/20 dark:from-yellow-500/10 dark:via-transparent dark:to-orange-500/10",
      quoteColor: "text-yellow-300 dark:text-yellow-400"
    },
    {
      text: "Lexi has a drive, fearlessness, and openness to improvement that set her apart and in my personal experience is highly correlated with top levels of achievement and success.",
      author: "Aniket Kittur",
      title: "Cooper-Siegel Chair, Human-Computer Interaction Institute, Carnegie Mellon University",
      gradient: "from-pink-200/20 via-white/10 to-purple-200/20 dark:from-pink-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-orange-300 dark:text-orange-400"
    },
    {
      text: "Lexi is one of those very rare designers who not only excels at her craft but also uplifts everyone around her with her proactivity, curiosity, and positivity.",
      author: "Grace Kim",
      title: "UX Research Lead",
      gradient: "from-rose-200/20 via-white/10 to-pink-200/20 dark:from-rose-500/10 dark:via-transparent dark:to-pink-500/10",
      quoteColor: "text-rose-300 dark:text-rose-400"
    }
  ];
  
  // Shuffle facts function
  const shuffleFacts = () => {
    setIsRotating(true);
    
    setTimeout(() => {
      setIsRotating(false);
      
      const prevShownIndices = shownFactIndicesRef.current;
      const unshownIndices = allFunFacts
        .map((_, index) => index)
        .filter(index => !prevShownIndices.has(index));
      
      let newIndices: number[];
      let updatedShownIndices: Set<number>;
      
      if (unshownIndices.length >= 3) {
        const shuffled = [...unshownIndices].sort(() => Math.random() - 0.5);
        newIndices = shuffled.slice(0, 3);
        updatedShownIndices = new Set([...prevShownIndices, ...newIndices]);
      } else {
        const remaining = [...unshownIndices];
        const allIndices = allFunFacts.map((_, index) => index);
        const shuffled = [...allIndices].sort(() => Math.random() - 0.5);
        const additional = shuffled.filter(index => !remaining.includes(index));
        newIndices = [...remaining, ...additional].slice(0, 3);
        updatedShownIndices = new Set(newIndices);
      }
      
      shownFactIndicesRef.current = updatedShownIndices;
      setShownFactIndices(updatedShownIndices);
      setDisplayedFacts(newIndices.map(index => allFunFacts[index]));
      setFlippedCards(new Set());
    }, 600);
  };
  
  // Toggle flip state of a card
  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  
  // Measure card heights on mobile to ensure consistent sizing based on backside content
  useEffect(() => {
    if (!isMobile || cardBackRefs.current.length === 0) {
      setMaxCardHeight(null);
      return;
    }
    
    // Use requestAnimationFrame to ensure DOM is ready
    const measureHeights = () => {
      const heights = cardBackRefs.current
        .filter(ref => ref !== null)
        .map(ref => {
          // Temporarily make it visible and relative to measure natural height
          const originalPosition = ref!.style.position;
          const originalOpacity = ref!.style.opacity;
          const originalZIndex = ref!.style.zIndex;
          const originalTransform = ref!.style.transform;
          
          ref!.style.position = 'relative';
          ref!.style.opacity = '1';
          ref!.style.zIndex = '1';
          ref!.style.transform = 'none';
          
          const height = ref!.scrollHeight;
          
          // Restore original styles
          ref!.style.position = originalPosition;
          ref!.style.opacity = originalOpacity;
          ref!.style.zIndex = originalZIndex;
          ref!.style.transform = originalTransform;
          
          return height;
        });
      
      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        setMaxCardHeight(maxHeight);
      }
    };
    
    // Delay measurement to ensure cards are rendered
    const timeoutId = setTimeout(measureHeights, 100);
    return () => clearTimeout(timeoutId);
  }, [isMobile, displayedFacts]);
  
  const renderFactCard = useCallback((
    fact: typeof displayedFacts[number],
    index: number,
    keyPrefix: string,
    layout: "grid" | "stack" = "grid"
  ) => {
    const isFlipped = flippedCards.has(index);
    const cardHeight = isMobile && maxCardHeight ? `${maxCardHeight}px` : undefined;
    
    return (
      <div
        key={`${keyPrefix}-${fact.text}`}
        className="relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip(index)}
      >
        <div
          className={`relative w-full ${isRotating ? "animate-flip-full" : "transition-transform duration-500"}`}
          style={{
            transform: isRotating
              ? undefined
              : isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)",
            transformStyle: "preserve-3d",
            minHeight: isMobile 
              ? (cardHeight || "180px") // Use measured height or fallback
              : layout === "stack" ? "240px" : "220px",
            height: isMobile && cardHeight ? cardHeight : undefined,
          }}
        >
          <div
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex items-center justify-center backface-hidden px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              position: "absolute",
              zIndex: isMobile ? (isFlipped ? 0 : 1) : 1,
              opacity: isMobile ? (isFlipped ? 0 : 1) : 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              isolation: "isolate",
              willChange: "backdrop-filter",
            }}
          >
            <span className="text-white/90 font-hagrid font-medium text-3xl text-center">
              flip me 👀
            </span>
          </div>
          <div
            ref={(el) => {
              cardBackRefs.current[index] = el;
            }}
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              zIndex: isMobile ? (isFlipped ? 1 : 0) : 1,
              opacity: isMobile ? (isFlipped ? 1 : 0) : 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              isolation: "isolate",
              willChange: "backdrop-filter",
            }}
          >
            <span className="text-4xl md:text-5xl">{fact.emoji}</span>
            <span className="text-white/90 text-base leading-relaxed text-center">
              {fact.text}
            </span>
          </div>
        </div>
      </div>
    );
  }, [flippedCards, isRotating, isMobile, maxCardHeight]);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  // Zoom range: from calculated initial scale (aligned with margins) to scale(2)
  // Start at minimum zoom (content aligned with navigation margins), zoom in as you scroll (scale 2 = zoomed in)
  // Hero section zooms from MIN_SCALE to MAX_SCALE (2), then continues to HERO_EXIT_SCALE to zoom off screen
  // About me section appears after hero zoom and should align with margins
  const MAX_SCALE = 2; // More zoomed IN (larger scale) - matches previous hero zoom levels
  const HERO_EXIT_SCALE = 8; // Scale needed to zoom hero completely off screen (text left, image right)
  const ABOUT_ME_EXIT_SCALE = 6; // Scale needed to zoom past about me section completely off screen
  const SCROLL_RANGE = 3000; // Increased scroll range to accommodate all sections
  
  // Even distribution: Each section gets 33.33% of scroll
  // Hero section: 0-33.33%
  const HERO_ZOOM_RANGE = 0.1667; // Hero zoom: 0-16.67% (first half of hero section)
  const HERO_EXIT_RANGE = 0.3333; // Hero exit: 16.67-33.33% (second half of hero section)
  
  // About Me section: 33.33-66.67%
  const ABOUT_ME_ENTER_START = 0.3333; // About me enter start: when hero exits
  const ABOUT_ME_ENTER_END = 0.4167; // About me enter end: content scrolls into view (33.33-41.67%)
  const ABOUT_ME_VISIBLE_RANGE = 0.5; // About me visible/pause: 41.67-50% (content fully visible, pause for reading)
  const ABOUT_ME_EXIT_RANGE = 0.6667; // About me exit: 50-66.67% (moves to next section)
  
  // Testimonials section: 66.67-100%
  const TESTIMONIALS_VISIBLE_RANGE = 0.8333; // Testimonials visible: 66.67-83.33% (first half of testimonials)
  const TESTIMONIALS_EXIT_RANGE = 1.0; // Testimonials exit: 83.33-100% (second half of testimonials)
  
  // Snap points for sticky sections - snap to where sections are fully visible
  const SNAP_POINTS = [
    0, // Start/hero section
    ABOUT_ME_VISIBLE_RANGE, // About me section fully visible
    TESTIMONIALS_VISIBLE_RANGE, // Testimonials section fully visible
    TESTIMONIALS_EXIT_RANGE // Final section (say hello)
  ];

  const [scale, setScale] = useState(1); // Initial state - will be recalculated in useEffect (start at 1 for visibility)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollVelocityRef = useRef(0);
  const lastScrollTimeRef = useRef(Date.now());
  const minScaleRef = useRef(0.5); // Will be set to calculated initial scale
  const isAutoScrollingRef = useRef(false);
  const autoScrollAnimationRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetScrollProgressRef = useRef(0); // Target progress for snapping
  const currentSectionIndexRef = useRef(0); // Track which section we're currently at
  const isScrollingToSectionRef = useRef(false); // Track if we're animating to a section
  const lastWheelTimeRef = useRef(0); // Track last wheel event time
  const wheelGestureDirectionRef = useRef<'next' | 'prev' | null>(null); // Track direction of current gesture
  const wheelGestureTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const accumulatedScrollRef = useRef(0); // Store accumulated scroll in ref for keyboard handler access
  
  // Cache for getBoundingClientRect() to avoid layout thrashing
  const containerRectCacheRef = useRef<DOMRect | null>(null);
  const containerRectCacheTimeRef = useRef(0);
  const CACHE_DURATION = 100; // Cache for 100ms
  
  // Throttle utility function
  const throttle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return function(this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  useEffect(() => {
    // Only initialize zoom system on desktop
    if (isMobile) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Calculate initial scale to align content with navigation margins
    // This becomes the MIN_SCALE (furthest zoomed out)
    const calculateInitialScale = () => {
      const viewportWidth = window.innerWidth;
      const headerPadding = viewportWidth >= 768 ? 32 : viewportWidth >= 640 ? 24 : 16; // md:px-8, sm:px-6, px-4
      const availableWidth = viewportWidth - (headerPadding * 2);
      const contentWidth = content.scrollWidth;
      
      // Guard against invalid content width - use fallback if content not ready
      if (!contentWidth || contentWidth === 0 || !isFinite(contentWidth)) {
        // Fallback to a reasonable default scale if content not ready
        return 0.8;
      }
      
      // Scale content to fit within available width with some margin
      const calculatedScale = (availableWidth * 0.95) / contentWidth;
      const clampedScale = Math.min(MAX_SCALE, Math.max(0.1, calculatedScale));
      
      // Ensure we have a valid scale
      if (!isFinite(clampedScale) || clampedScale <= 0) {
        return 0.8; // Safe fallback
      }
      
      return clampedScale;
    };

    // Initialize: start at minimum zoom (content aligned with navigation margins)
    // Scroll down → zoom in (scale increases, content gets larger)
    // This initial scale is the MIN_SCALE - content cannot zoom out further than this
    let accumulatedScroll = 0; // Start at 0 = minimum zoom
    accumulatedScrollRef.current = 0; // Initialize ref
    
    // Use a safe default scale initially, then recalculate once content is ready
    // Start with scale 1 to ensure content is visible, then adjust
    let initialScale = 1; // Safe default - ensures visibility
    let targetScale = initialScale;
    let currentScale = initialScale;
    
    // Try to calculate initial scale, but use fallback if content not ready
    try {
      const calculatedScale = calculateInitialScale();
      // Only use calculated scale if it's valid and reasonable
      if (calculatedScale > 0 && calculatedScale <= MAX_SCALE && isFinite(calculatedScale)) {
        initialScale = calculatedScale;
        targetScale = calculatedScale;
        currentScale = calculatedScale;
      }
    } catch (error) {
      console.warn('Failed to calculate initial scale, using default:', error);
      // Keep default of 1
    }
    
    minScaleRef.current = initialScale; // Store as the true minimum scale
    setScale(initialScale); // Ensure initial state is aligned with margins
    setScrollProgress(0); // Progress bar starts at 0%
    currentSectionIndexRef.current = 0; // Start at first section (hero)
    
    // Recalculate scale once content is fully rendered
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
    
    // Wait for next frame to ensure content is rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(recalculateScale);
    });
    
    setIsInitialized(true); // Mark as initialized to enable transitions
    let animationFrameId: number;

    // Smooth easing function
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    // Update scale with smooth animation - optimized to reduce state updates
    const updateScale = () => {
      const diff = targetScale - currentScale;
      if (Math.abs(diff) > 0.001) {
        // Smooth interpolation - use larger step for faster response
        currentScale += diff * 0.15;
        // Batch state updates using startTransition for smoother performance
        startTransition(() => {
        setScale(currentScale);
        });
        animationFrameId = requestAnimationFrame(updateScale);
      } else {
        currentScale = targetScale;
        startTransition(() => {
        setScale(currentScale);
        });
        animationFrameId = 0; // Clear animation frame ID when done
      }
    };

    // Auto-scroll animation that zooms past hero section, stops at about me section
    const startAutoScroll = () => {
      if (isAutoScrollingRef.current || accumulatedScroll >= SCROLL_RANGE) return;
      
      isAutoScrollingRef.current = true;
      const startProgress = accumulatedScroll / SCROLL_RANGE;
      // Auto-scroll only goes to ABOUT_ME_VISIBLE_RANGE (where about me is fully visible)
      // User must manually scroll past the about me section
      const targetProgress = ABOUT_ME_VISIBLE_RANGE;
      const duration = 2500; // 2.5 seconds to reach about me section
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / duration);
        
        // Ease out cubic for smooth deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
        
        accumulatedScroll = currentProgress * SCROLL_RANGE;
        accumulatedScrollRef.current = accumulatedScroll;
        startTransition(() => {
        setScrollProgress(currentProgress);
        });
        
        // Update scale based on progress
        // Hero continues zooming past MAX_SCALE to HERO_EXIT_SCALE to zoom off screen
        // Then about me section zooms from scale 1 to ABOUT_ME_EXIT_SCALE to reveal testimonials
        const MIN_SCALE = minScaleRef.current;
        if (currentProgress <= HERO_ZOOM_RANGE) {
          // First phase: zoom from MIN_SCALE to MAX_SCALE
          const heroProgress = currentProgress / HERO_ZOOM_RANGE;
          targetScale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * easeOutCubic(heroProgress);
        } else if (currentProgress <= HERO_EXIT_RANGE) {
          // Second phase: continue zooming from MAX_SCALE to HERO_EXIT_SCALE to zoom off screen
          const exitProgress = (currentProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE);
          targetScale = MAX_SCALE + (HERO_EXIT_SCALE - MAX_SCALE) * easeOutCubic(exitProgress);
        } else if (currentProgress <= ABOUT_ME_VISIBLE_RANGE) {
          // Third phase: about me section is visible at scale 1
          targetScale = 1;
        } else if (currentProgress <= ABOUT_ME_EXIT_RANGE) {
          // Fourth phase: zoom past about me section from scale 1 to ABOUT_ME_EXIT_SCALE
          const aboutMeProgress = (currentProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
          targetScale = 1 + (ABOUT_ME_EXIT_SCALE - 1) * easeOutCubic(aboutMeProgress);
        } else if (currentProgress <= TESTIMONIALS_VISIBLE_RANGE) {
          // Fifth phase: testimonials section visible at scale 1
          targetScale = 1;
        } else if (currentProgress <= TESTIMONIALS_EXIT_RANGE) {
          // Sixth phase: zoom past testimonials section from scale 1 to ABOUT_ME_EXIT_SCALE
          const testimonialsProgress = (currentProgress - TESTIMONIALS_VISIBLE_RANGE) / (TESTIMONIALS_EXIT_RANGE - TESTIMONIALS_VISIBLE_RANGE);
          targetScale = 1 + (ABOUT_ME_EXIT_SCALE - 1) * easeOutCubic(testimonialsProgress);
        } else {
          // After testimonials exits, stay at ABOUT_ME_EXIT_SCALE
          targetScale = ABOUT_ME_EXIT_SCALE;
        }
        targetScale = Math.max(MIN_SCALE, Math.min(ABOUT_ME_EXIT_SCALE, targetScale));
        
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(updateScale);
        }
        
        if (progress < 1) {
          autoScrollAnimationRef.current = requestAnimationFrame(animate);
        } else {
          isAutoScrollingRef.current = false;
          autoScrollAnimationRef.current = null;
        }
      };
      
      autoScrollAnimationRef.current = requestAnimationFrame(animate);
    };

    // Function to find current section index based on progress
    // This determines which section we're currently closest to
    const findCurrentSectionIndex = (currentProgress: number): number => {
      // Find which section we're closest to
      let closestIndex = 0;
      let minDistance = Math.abs(currentProgress - SNAP_POINTS[0]);
      
      for (let i = 0; i < SNAP_POINTS.length; i++) {
        const distance = Math.abs(currentProgress - SNAP_POINTS[i]);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      
      return closestIndex;
    };
    
    // Function to move to next or previous section
    const moveToSection = (direction: 'next' | 'prev') => {
      if (isScrollingToSectionRef.current) return; // Already animating, ignore
      
      // Update current section index based on actual scroll progress
      const currentProgress = accumulatedScroll / SCROLL_RANGE;
      currentSectionIndexRef.current = findCurrentSectionIndex(currentProgress);
      
      const currentIndex = currentSectionIndexRef.current;
      let targetIndex: number;
      
      if (direction === 'next') {
        targetIndex = Math.min(currentIndex + 1, SNAP_POINTS.length - 1);
      } else {
        targetIndex = Math.max(currentIndex - 1, 0);
      }
      
      // Don't move if already at the target
      if (targetIndex === currentIndex) return;
      
      isScrollingToSectionRef.current = true;
      currentSectionIndexRef.current = targetIndex;
      const targetProgress = SNAP_POINTS[targetIndex];
      
      // Animate to the target section
      animateToProgress(targetProgress);
      // Note: isScrollingToSectionRef is reset in animateToProgress when animation completes
    };
    
    // Function to animate scroll to target progress
    const animateToProgress = (targetProgress: number) => {
      // Cancel any existing scroll animations
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
      
      const startProgress = accumulatedScroll / SCROLL_RANGE;
      const startTime = Date.now();
      const duration = 600; // 600ms animation (slower for less jarring transitions)
      
      let snapAnimationId: number | null = null;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        // Ease out cubic for smooth deceleration
        const eased = 1 - Math.pow(1 - t, 3);
        
        const currentProgress = startProgress + (targetProgress - startProgress) * eased;
        accumulatedScroll = currentProgress * SCROLL_RANGE;
        accumulatedScrollRef.current = accumulatedScroll;
        startTransition(() => {
        setScrollProgress(currentProgress);
        });
        
        // Update scale based on progress
        const MIN_SCALE = minScaleRef.current;
        let newTargetScale = targetScale;
        if (currentProgress <= HERO_ZOOM_RANGE) {
          const heroProgress = currentProgress / HERO_ZOOM_RANGE;
          newTargetScale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * easeOutCubic(heroProgress);
        } else if (currentProgress <= HERO_EXIT_RANGE) {
          const exitProgress = (currentProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE);
          newTargetScale = MAX_SCALE + (HERO_EXIT_SCALE - MAX_SCALE) * easeOutCubic(exitProgress);
        } else if (currentProgress <= ABOUT_ME_VISIBLE_RANGE) {
          newTargetScale = 1;
        } else if (currentProgress <= ABOUT_ME_EXIT_RANGE) {
          const aboutMeProgress = (currentProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
          newTargetScale = 1 + (ABOUT_ME_EXIT_SCALE - 1) * easeOutCubic(aboutMeProgress);
        } else if (currentProgress <= TESTIMONIALS_VISIBLE_RANGE) {
          newTargetScale = 1;
        } else if (currentProgress <= TESTIMONIALS_EXIT_RANGE) {
          const testimonialsProgress = (currentProgress - TESTIMONIALS_VISIBLE_RANGE) / (TESTIMONIALS_EXIT_RANGE - TESTIMONIALS_VISIBLE_RANGE);
          newTargetScale = 1 + (ABOUT_ME_EXIT_SCALE - 1) * easeOutCubic(testimonialsProgress);
        } else {
          newTargetScale = ABOUT_ME_EXIT_SCALE;
        }
        targetScale = Math.max(MIN_SCALE, Math.min(ABOUT_ME_EXIT_SCALE, newTargetScale));
        updateScale();
        
        if (t < 1) {
          snapAnimationId = requestAnimationFrame(animate);
        } else {
          // Animation complete - ensure we're exactly at target and update section index
          accumulatedScroll = targetProgress * SCROLL_RANGE;
          accumulatedScrollRef.current = accumulatedScroll;
          setScrollProgress(targetProgress);
          // Find the section index that matches our target progress
          // Use a small epsilon for floating point comparison
          const targetIndex = SNAP_POINTS.findIndex((point, index) => 
            Math.abs(point - targetProgress) < 0.001
          );
          if (targetIndex !== -1) {
            currentSectionIndexRef.current = targetIndex;
          } else {
            // Fallback: find closest section
          currentSectionIndexRef.current = findCurrentSectionIndex(targetProgress);
          }
          snapAnimationId = null;
          isScrollingToSectionRef.current = false;
        }
      };
      
      snapAnimationId = requestAnimationFrame(animate);
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow normal scrolling once we reach 100% of scroll range
      if (accumulatedScrollRef.current >= SCROLL_RANGE && e.deltaY > 0) {
        // At 100%, allow normal page scrolling - don't prevent default
        return;
      }
      
      // Check if we're in the About Me section and handle regular scrolling first
      const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
      const isInAboutMeScrollablePhase = currentProgress >= ABOUT_ME_ENTER_END && currentProgress <= ABOUT_ME_VISIBLE_RANGE;
      
      if (isInAboutMeScrollablePhase && aboutMeScrollContainerRef.current) {
        const container = aboutMeScrollContainerRef.current;
        const isScrolledToBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5; // 5px threshold
        
        // If scrolling down and not at bottom, scroll the container instead
        if (e.deltaY > 0 && !isScrolledToBottom) {
          e.preventDefault();
          container.scrollTop += e.deltaY;
          return; // Don't advance global scroll progress
        }
        
        // If scrolling up and not at top, scroll the container instead
        if (e.deltaY < 0 && container.scrollTop > 0) {
          e.preventDefault();
          container.scrollTop += e.deltaY;
          return; // Don't advance global scroll progress
        }
        
        // If scrolling down and at bottom, advance to exit phase (ABOUT_ME_EXIT_RANGE)
        if (e.deltaY > 0 && isScrolledToBottom && currentProgress <= ABOUT_ME_VISIBLE_RANGE) {
          e.preventDefault();
          // Advance to exit phase instead of next section
          animateToProgress(ABOUT_ME_EXIT_RANGE);
          return;
        }
        
        // If scrolling up and at top, allow going back to previous section
        // Continue with normal scroll logic below
      }
      
      // Prevent default only when scroll system is active
      e.preventDefault();
      
      // If already animating to a section, ignore all scroll events
      if (isScrollingToSectionRef.current) {
        return;
      }
      
      // Cancel any auto-scroll
      if (isAutoScrollingRef.current) {
        isAutoScrollingRef.current = false;
        if (autoScrollAnimationRef.current) {
          cancelAnimationFrame(autoScrollAnimationRef.current);
          autoScrollAnimationRef.current = null;
        }
      }
      
      // Determine scroll direction
      const delta = e.deltaY;
      const direction = delta > 0 ? 'next' : 'prev';
      const now = Date.now();
      
      // Require a minimum scroll delta to prevent accidental triggers
      const MIN_SCROLL_DELTA = 50; // Minimum pixels of scroll before triggering
      if (Math.abs(delta) < MIN_SCROLL_DELTA) {
        return; // Ignore small scroll movements
      }
      
      // Simplified scroll logic: each distinct scroll gesture moves to next/previous section
      // A new gesture is defined as:
      // 1. More than 800ms since last wheel event (allows trackpad momentum to settle - increased for less sensitivity)
      // 2. OR different direction than last gesture
      const timeSinceLastWheel = now - lastWheelTimeRef.current;
      const isNewGesture = timeSinceLastWheel > 800 || wheelGestureDirectionRef.current !== direction;
      
      if (isNewGesture) {
        // New gesture - clear any pending timeout and start fresh
        if (wheelGestureTimeoutRef.current) {
          clearTimeout(wheelGestureTimeoutRef.current);
          wheelGestureTimeoutRef.current = null;
        }
        
        wheelGestureDirectionRef.current = direction;
        
        // Update current section index based on actual scroll progress before moving
        currentSectionIndexRef.current = findCurrentSectionIndex(currentProgress);
        
        // Move to next or previous section (only once per gesture)
        moveToSection(direction);
        
        // Reset gesture direction after animation completes to allow for new gestures
        // The timeout ensures we don't process multiple wheel events from a single trackpad swipe
        wheelGestureTimeoutRef.current = setTimeout(() => {
          wheelGestureDirectionRef.current = null;
          wheelGestureTimeoutRef.current = null;
        }, 1200); // Reset after 1200ms (longer timeout for less sensitivity)
      }
      // If not a new gesture, ignore the wheel event (part of same trackpad scroll)
      
      lastWheelTimeRef.current = now;
    };

    // Touch support for mobile
    let touchStartDistance = 0;
    let touchStartScale = minScaleRef.current;
    
    // Single-finger swipe tracking (for navigation between sections)
    let singleTouchStartY = 0;
    let singleTouchStartTime = 0;
    const touchScrollThreshold = 100; // Minimum pixels to trigger section change
    const touchScrollMaxTime = 500; // Maximum time (ms) for a swipe gesture

    const handleTouchStart = (e: TouchEvent) => {
      // touchAction: "none" already prevents default, so we can use passive listeners
      // This avoids blocking rendering
      if (!isInitialized) return;
      
      // Check if touch is within the About Me scroll container - if so, allow native scrolling
      if (aboutMeScrollContainerRef.current && e.touches.length === 1) {
        const touch = e.touches[0];
        // Use cached rect or update cache if stale
        const now = Date.now();
        if (!containerRectCacheRef.current || (now - containerRectCacheTimeRef.current) > CACHE_DURATION) {
          containerRectCacheRef.current = aboutMeScrollContainerRef.current.getBoundingClientRect();
          containerRectCacheTimeRef.current = now;
        }
        const containerRect = containerRectCacheRef.current;
        const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
        const isInAboutMeScrollablePhase = currentProgress >= ABOUT_ME_ENTER_END && currentProgress <= ABOUT_ME_VISIBLE_RANGE;
        
        // If touch is within About Me container and we're in scrollable phase, allow native scroll
        if (isInAboutMeScrollablePhase && 
            touch.clientX >= containerRect.left && 
            touch.clientX <= containerRect.right &&
            touch.clientY >= containerRect.top && 
            touch.clientY <= containerRect.bottom) {
          // Don't track this touch for section navigation - let the container handle it
          return;
        }
      }
      
      if (e.touches.length === 1) {
        // Single finger - track for swipe gesture
        singleTouchStartY = e.touches[0].clientY;
        singleTouchStartTime = Date.now();
      } else if (e.touches.length === 2) {
        // Two fingers - pinch to zoom
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        touchStartDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        touchStartScale = currentScale;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Check if touch is within the About Me scroll container - if so, allow native scrolling
      if (aboutMeScrollContainerRef.current && e.touches.length === 1) {
        const touch = e.touches[0];
        // Use cached rect or update cache if stale
        const now = Date.now();
        if (!containerRectCacheRef.current || (now - containerRectCacheTimeRef.current) > CACHE_DURATION) {
          containerRectCacheRef.current = aboutMeScrollContainerRef.current.getBoundingClientRect();
          containerRectCacheTimeRef.current = now;
        }
        const containerRect = containerRectCacheRef.current;
        const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
        const isInAboutMeScrollablePhase = currentProgress >= ABOUT_ME_ENTER_END && currentProgress <= ABOUT_ME_VISIBLE_RANGE;
        
        // If touch is within About Me container and we're in scrollable phase, allow native scroll
        if (isInAboutMeScrollablePhase && 
            touch.clientX >= containerRect.left && 
            touch.clientX <= containerRect.right &&
            touch.clientY >= containerRect.top && 
            touch.clientY <= containerRect.bottom) {
          // Don't prevent default - let the container handle scrolling
          return;
        }
      }
      
      // Only process two-finger pinch gestures
      // Single-finger swipes are handled in touchend to avoid blocking rendering
      if (e.touches.length === 2 && isInitialized) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        
        const scaleChange = currentDistance / touchStartDistance; // Spread fingers = zoom in
        const newScale = touchStartScale * scaleChange;
        
        // Clamp scale - never go below the initial calculated scale
        const MIN_SCALE = minScaleRef.current;
        targetScale = Math.max(MIN_SCALE, Math.min(HERO_EXIT_SCALE, newScale));
        
        // Update accumulated scroll based on scale
        // Reverse calculate progress from scale
        let progress = 0;
        if (targetScale <= MAX_SCALE) {
          // First phase: scale maps to 0 to HERO_ZOOM_RANGE
          const heroProgress = (targetScale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE);
          progress = heroProgress * HERO_ZOOM_RANGE;
        } else if (targetScale <= HERO_EXIT_SCALE) {
          // Second phase: scale maps to HERO_ZOOM_RANGE to HERO_EXIT_RANGE
          const exitProgress = (targetScale - MAX_SCALE) / (HERO_EXIT_SCALE - MAX_SCALE);
          progress = HERO_ZOOM_RANGE + exitProgress * (HERO_EXIT_RANGE - HERO_ZOOM_RANGE);
        } else if (targetScale <= 1) {
          // Third phase: scale 1 maps to HERO_EXIT_RANGE to ABOUT_ME_VISIBLE_RANGE
          progress = HERO_EXIT_RANGE + (ABOUT_ME_VISIBLE_RANGE - HERO_EXIT_RANGE);
        } else if (targetScale <= ABOUT_ME_EXIT_SCALE) {
          // Fourth phase: scale maps to ABOUT_ME_VISIBLE_RANGE to ABOUT_ME_EXIT_RANGE
          const aboutMeProgress = (targetScale - 1) / (ABOUT_ME_EXIT_SCALE - 1);
          progress = ABOUT_ME_VISIBLE_RANGE + aboutMeProgress * (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
        } else {
          // Fifth phase: beyond about me exit, map to testimonials range
          progress = Math.min(1, ABOUT_ME_EXIT_RANGE + (targetScale - ABOUT_ME_EXIT_SCALE) / ABOUT_ME_EXIT_SCALE * (1 - ABOUT_ME_EXIT_RANGE));
        }
        accumulatedScroll = progress * SCROLL_RANGE;
        accumulatedScrollRef.current = accumulatedScroll;
        setScrollProgress(progress);
        
        // Always restart animation to ensure smooth updates
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        updateScale();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isInitialized) return;
      
      if (e.changedTouches.length === 1 && e.touches.length === 0) {
        // Single finger swipe ended - check if it was a navigation swipe
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = singleTouchStartY - touchEndY; // Positive = swipe up, Negative = swipe down
        const deltaTime = Date.now() - singleTouchStartTime;
        
        // Check if we're in the About Me scrollable phase
        const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
        const isInAboutMeScrollablePhase = currentProgress >= ABOUT_ME_ENTER_END && currentProgress <= ABOUT_ME_VISIBLE_RANGE;
        
        // If in About Me scrollable phase, check if content is scrolled to bottom before allowing navigation
        if (isInAboutMeScrollablePhase && aboutMeScrollContainerRef.current) {
          const container = aboutMeScrollContainerRef.current;
          const touch = e.changedTouches[0];
          const containerRect = container.getBoundingClientRect();
          
          // Check if touch was within About Me container
          const isTouchInContainer = touch.clientX >= containerRect.left && 
                                      touch.clientX <= containerRect.right &&
                                      touch.clientY >= containerRect.top && 
                                      touch.clientY <= containerRect.bottom;
          
          if (isTouchInContainer) {
            const isScrolledToBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 5;
            const isScrolledToTop = container.scrollTop <= 5;
            
            // If swiping down (next) and not at bottom, don't navigate - let container scroll
            if (deltaY > 0 && !isScrolledToBottom) {
              return; // Don't navigate, container will handle scroll
            }
            
            // If swiping up (prev) and not at top, don't navigate - let container scroll
            if (deltaY < 0 && !isScrolledToTop) {
              return; // Don't navigate, container will handle scroll
            }
            
            // If swiping down and at bottom, advance to exit phase
            if (deltaY > 0 && isScrolledToBottom && currentProgress <= ABOUT_ME_VISIBLE_RANGE) {
              if (!isScrollingToSectionRef.current) {
                animateToProgress(ABOUT_ME_EXIT_RANGE);
              }
              return;
            }
          }
        }
        
        // Only process if significant swipe (100px) within reasonable time (500ms)
        if (Math.abs(deltaY) > touchScrollThreshold && deltaTime < touchScrollMaxTime) {
          // Don't process if already animating to a section
          if (!isScrollingToSectionRef.current) {
            // Cancel any auto-scroll
            if (isAutoScrollingRef.current) {
              isAutoScrollingRef.current = false;
              if (autoScrollAnimationRef.current) {
                cancelAnimationFrame(autoScrollAnimationRef.current);
                autoScrollAnimationRef.current = null;
              }
            }
            
            // Determine direction: swipe down (finger moves down) = next section, swipe up = previous
            const direction = deltaY > 0 ? 'next' : 'prev';
            
            // Update current section index
            currentSectionIndexRef.current = findCurrentSectionIndex(currentProgress);
            
            // Move to next or previous section
            moveToSection(direction);
          }
        }
      } else if (e.touches.length < 2) {
        // Pinch-to-zoom ended - snap to nearest section
        const currentProgress = accumulatedScroll / SCROLL_RANGE;
        currentSectionIndexRef.current = findCurrentSectionIndex(currentProgress);
        const snapTarget = SNAP_POINTS[currentSectionIndexRef.current];
        
        // Snap to the current section if not already there
        if (Math.abs(snapTarget - currentProgress) > 0.02) {
          animateToProgress(snapTarget);
        }
      }
    };

    // Prevent default scroll behavior only when not at 100% scroll
    const preventScroll = (e: Event) => {
      if (accumulatedScrollRef.current < SCROLL_RANGE) {
        e.preventDefault();
      }
    };

    // Keyboard shortcuts for desktop testing (simulates touch gestures)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys when not typing in an input/textarea
      const target = e.target as HTMLElement;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable) {
        return;
      }
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        
        // Don't process if already animating to a section
        if (isScrollingToSectionRef.current) {
          return;
        }
        
        // Cancel any auto-scroll
        if (isAutoScrollingRef.current) {
          isAutoScrollingRef.current = false;
          if (autoScrollAnimationRef.current) {
            cancelAnimationFrame(autoScrollAnimationRef.current);
            autoScrollAnimationRef.current = null;
          }
        }
        
        // ArrowDown = next section (like swipe down)
        // ArrowUp = previous section (like swipe up)
        const direction = e.key === 'ArrowDown' ? 'next' : 'prev';
        
        // Update current section index based on actual scroll progress
        // Use ref to get current value since handler closure might have stale value
        const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
        currentSectionIndexRef.current = findCurrentSectionIndex(currentProgress);
        
        // Move to next or previous section
        moveToSection(direction);
      }
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    // Use passive listeners for touchstart/touchend - touchAction: "none" handles preventing default
    // This avoids blocking rendering while still allowing our handlers to work
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    container.addEventListener("scroll", preventScroll, { passive: false });
    // Add keyboard listener for desktop testing
    window.addEventListener("keydown", handleKeyDown);
    
    // Set up About Me container touch handlers when it becomes available
    // Use a function to check and attach listeners
    const setupAboutMeTouchHandlers = () => {
      const aboutMeContainer = aboutMeScrollContainerRef.current;
      if (!aboutMeContainer) return null;
      
      const stopPropagation = (e: TouchEvent) => {
        // Use accumulatedScrollRef to get current value
        const currentProgress = accumulatedScrollRef.current / SCROLL_RANGE;
        const isInAboutMeScrollablePhase = currentProgress >= ABOUT_ME_ENTER_END && currentProgress <= ABOUT_ME_VISIBLE_RANGE;
        if (isInAboutMeScrollablePhase) {
          e.stopPropagation(); // Prevent main container handlers from intercepting
        }
      };
      
      aboutMeContainer.addEventListener("touchstart", stopPropagation, { passive: true });
      aboutMeContainer.addEventListener("touchmove", stopPropagation, { passive: true });
      aboutMeContainer.addEventListener("touchend", stopPropagation, { passive: true });
      
      return () => {
        aboutMeContainer.removeEventListener("touchstart", stopPropagation);
        aboutMeContainer.removeEventListener("touchmove", stopPropagation);
        aboutMeContainer.removeEventListener("touchend", stopPropagation);
      };
    };
    
    // Try to set up immediately, and also check periodically until container is available
    let cleanupAboutMeHandlers: (() => void) | null = null;
    const trySetup = () => {
      const cleanup = setupAboutMeTouchHandlers();
      if (cleanup) {
        cleanupAboutMeHandlers = cleanup;
      }
    };
    trySetup();
    // Also check after a short delay in case container renders later
    const setupTimeout = setTimeout(trySetup, 100);

    // Lock body scroll only when scroll system is active
    const updateBodyScroll = () => {
      if (accumulatedScroll >= SCROLL_RANGE) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = "hidden";
      }
    };
    updateBodyScroll();
    
    // Pause animations when tab is hidden to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause all animations when tab is hidden
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        if (autoScrollAnimationRef.current) {
          cancelAnimationFrame(autoScrollAnimationRef.current);
          autoScrollAnimationRef.current = null;
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("scroll", preventScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(setupTimeout);
      if (cleanupAboutMeHandlers) {
        cleanupAboutMeHandlers();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (autoScrollAnimationRef.current) {
        cancelAnimationFrame(autoScrollAnimationRef.current);
      }
      if (wheelGestureTimeoutRef.current) {
        clearTimeout(wheelGestureTimeoutRef.current);
      }
    };
  }, [isMobile]);

  // Reset mouse position when scrolling out of hero section
  useEffect(() => {
    if (scrollProgress > HERO_EXIT_RANGE) {
      // Reset mouse position when outside hero section to prevent glitches
      setMousePosition({ x: 0, y: 0 });
    }
  }, [scrollProgress]);

  // Mouse-responsive effect for Memoji
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!memojiRef.current) return;
      
      // Only apply mouse effect when in hero section (scrollProgress <= HERO_EXIT_RANGE)
      // This prevents glitches when scrolling back up
      if (scrollProgress > HERO_EXIT_RANGE) {
        return;
      }
      
      // Check if we're still in hero section by checking the element's visibility
      const rect = memojiRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return; // Element not visible
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center of Memoji
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      // Apply movement with a multiplier for subtle effect (adjust 15 for more/less movement)
      setMousePosition({
        x: x * 15,
        y: y * 15,
      });
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves
      setMousePosition({ x: 0, y: 0 });
    };

    // Add mouse move listener - will only work when element is visible
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

  // Mobile: Simple scrollable layout
  if (isMobile) {
    return (
      <>
        <div className="min-h-screen bg-[#0A0520]">
          <Header />
          
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
            <div className="flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto w-full">
              {/* Memoji */}
              <div className="flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}Memoji.png`}
                  alt="Lexi Memoji"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>

              {/* Text Content */}
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
                {/* Icons */}
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
                {/* Button */}
                <div className="mt-6 md:mt-8 flex justify-center">
                  <Button
                    asChild
                    className="transform transition-transform duration-300 hover:shadow-xl hover:scale-110 h-12 md:h-16 w-full sm:w-auto"
                  >
                    <a
                      href="/portfolio"
                      className="flex w-full sm:w-auto items-center justify-center gap-3 h-full px-6"
                    >
                      <span>see my work</span>
                      <span aria-hidden="true" className="text-lg">→</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="min-h-screen flex items-start justify-center px-4 sm:px-6 md:px-8 py-20">
            <div className="w-full max-w-4xl mx-auto">
              <AboutMeContent
                renderFactCard={renderFactCard}
                displayedFacts={displayedFacts}
                shuffleFacts={shuffleFacts}
                textColorClass="text-white"
                textSecondaryColorClass="text-white/90"
                cardsContainerClass="flex flex-col md:flex-row gap-3 md:gap-4 mt-6"
                shuffleButtonClass="w-full mt-6 py-4 px-6 rounded-3xl transition-all duration-200 flex items-center justify-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02]"
              />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-hagrid text-center w-full">what it's like to work with me</h2>
              <div className="relative w-full min-h-[380px] flex items-center justify-center pb-12">
                {/* Navigation Buttons */}
                <button
                  onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                  className="absolute left-2 md:left-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === 0}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Card Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-visible px-8 md:px-0">
                  {testimonials.map((testimonial, index) => {
                    const position = index - activeTestimonial;
                    const isActive = index === activeTestimonial;
                    
                    let transform = '';
                    let zIndex = 0;
                    let opacity = 0;
                    let filter = 'blur(0px)';
                    
                    if (isActive) {
                      transform = 'translateX(0px) scale(1) perspective(1000px) rotateY(0deg)';
                      zIndex = 10;
                      opacity = 1;
                      filter = 'blur(0px)';
                    } else if (position > 0) {
                      transform = `translateX(${120 * position}px) scale(${1 - 0.2 * position}) perspective(1000px) rotateY(-8deg)`;
                      zIndex = 10 - position;
                      opacity = position > 2 ? 0 : 0.6;
                      filter = 'blur(3px)';
                    } else if (position < 0) {
                      const absPosition = Math.abs(position);
                      transform = `translateX(${-120 * absPosition}px) scale(${1 - 0.2 * absPosition}) perspective(1000px) rotateY(8deg)`;
                      zIndex = 10 - absPosition;
                      opacity = absPosition > 2 ? 0 : 0.6;
                      filter = 'blur(3px)';
                    }
                    
                    return (
                      <div
                        key={index}
                        className="absolute rounded-3xl border border-white/30 bg-[#0A0520]/20 backdrop-blur-lg p-6 sm:p-8 shadow-2xl cursor-pointer w-[95%] sm:w-[520px] md:w-[600px] lg:w-[700px] min-h-[320px] md:min-h-[360px]"
                        style={{
                          transform,
                          zIndex,
                          opacity,
                          filter,
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          pointerEvents: isActive ? 'auto' : 'none'
                        }}
                        onClick={() => setActiveTestimonial(index)}
                      >
                        <div className="absolute inset-0 bg-[#0A0520]/20 rounded-3xl backdrop-blur-xl"></div>
                        <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl backdrop-blur-sm`}></div>
                        <div className="relative z-10 flex flex-col gap-6">
                          <div className="flex-1">
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                              alt="" 
                              className="block dark:hidden w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                              alt="" 
                              className="hidden dark:block w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <p className="text-white italic text-base md:text-2xl leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="mt-4 flex-shrink-0">
                            <p className="font-semibold text-white text-sm md:text-base">{testimonial.author}</p>
                            <p className="text-xs md:text-sm text-white/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                  className="absolute right-2 md:right-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-white w-6'
                          : 'bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Say Hello Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
            <div className="w-full max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-hagrid">say hello 👋</h2>
              <p className="text-white/90 text-center mb-10 text-lg md:text-xl max-w-3xl mx-auto">
                If you're working on a social impact problem and need a UX consultant, book a time on my calendar or reach out at lexirohrer@gmail.com
              </p>
              
              {/* Contact Icons */}
              <div className="flex flex-row gap-6 items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
                <a
                  href="mailto:lexirohrer@gmail.com"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Gmail.png`}
                    alt="Gmail"
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Calendar.png`}
                    alt="Calendar"
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://uxlex.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Substack.png`}
                    alt="Substack"
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
              </div>
              
              {/* See My Work Button */}
              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  className="transform transition-transform duration-300 hover:shadow-xl hover:scale-110 h-12 md:h-16 w-[328px] md:w-[392px]"
                >
                  <a
                    href="/portfolio"
                    className="flex items-center justify-center gap-3 h-full px-6"
                  >
                    <span>or, see my work</span>
                    <span aria-hidden="true" className="text-lg">→</span>
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  // Desktop: Zoom-based scroll system
  return (
    <>
      {/* Note: ShaderGradient is now in App.tsx to cover entire site */}
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{ touchAction: "none", zIndex: 1 }}
      >
        <Header />
        
        {/* Z-axis layers - sections stacked, scrolling passes through them */}
        {/* Hero Section - Front layer (z-index higher), passes through as you zoom */}
        <div
          ref={heroSectionRef}
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${scale})`,
            // Transform origin targets the gap between text and image
            // Text div ends around 545px, image starts at 602px, gap center ~573px
            // On typical 1280px viewport: 573/1280 = ~45% from left
            transformOrigin: "45% center", // Zoom into the gap between text and image
            willChange: "transform",
            // Increased z-index separation: hero stays in front longer, then moves far behind
            zIndex: scrollProgress > HERO_EXIT_RANGE ? 1 : 50, // Move behind only after completely zoomed off screen
            // Hide hero section when scrolling past it to prevent memoji from appearing in other sections
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
            {/* Memoji - Right Side on desktop, Top on mobile */}
            <div 
              ref={memojiRef}
              className="flex-shrink-0 order-1 md:order-2"
              style={{
                // Move image right as zoom increases to push it completely off screen
                // Only apply mouse-responsive transform when in hero section to prevent glitches
                transform: scrollProgress > HERO_EXIT_RANGE
                  ? 'translate(0px, 0px)' // Reset when outside hero section
                  : scrollProgress > HERO_ZOOM_RANGE
                  ? `translateX(${window.innerWidth * 1.5 * ((scrollProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE))}px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  : `translate(${mousePosition.x}px, ${mousePosition.y}px)`, // Just mouse position when in early hero section
                transition: scrollProgress > HERO_EXIT_RANGE
                  ? 'transform 0.3s ease-out' // Smooth reset when scrolling back up
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
                  // Additional subtle rotation based on mouse position (very subtle)
                  // Only apply when in hero section to prevent glitches
                  transform: scrollProgress <= HERO_EXIT_RANGE 
                    ? `rotate(${mousePosition.x * 0.1}deg)`
                    : 'rotate(0deg)',
                }}
              />
            </div>

            {/* Text Content - Left Side on desktop, Below Memoji on mobile */}
            <div 
              className="flex-1 max-w-2xl text-left md:text-left order-2 md:order-1"
              style={{
                // Move text left as zoom increases to push it completely off screen
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
              {/* Icons - Full width on mobile, normal on desktop */}
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
              {/* Button - On new line */}
              <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                <Button
                  asChild
                  className="transform transition-transform duration-300 hover:shadow-xl hover:scale-110 h-12 md:h-16 w-full sm:w-auto"
                >
                  <a
                    href="/portfolio"
                    className="flex w-full sm:w-auto items-center justify-center gap-3 h-full px-6"
                  >
                    <span>see my work</span>
                    <span aria-hidden="true" className="text-lg">→</span>
                  </a>
                </Button>
              </div>
            </div>
            </div>
        </div>
        
        {/* About Me Section - Middle layer, appears after hero, scrolls into view, then zooms past to reveal testimonials */}
        <div
          className="fixed inset-0 flex items-start justify-center pt-[120px] max-md:pt-[96px] max-sm:pt-[88px]"
          style={{
            // Phase 1: Enter - scroll content up from below screen (ABOUT_ME_ENTER_START to ABOUT_ME_ENTER_END)
            // Phase 2: Visible/Pause - content fully visible (ABOUT_ME_ENTER_END to ABOUT_ME_VISIBLE_RANGE)
            // Phase 3: Exit - zoom and move right to exit (ABOUT_ME_VISIBLE_RANGE to ABOUT_ME_EXIT_RANGE)
            transform: (() => {
              if (scrollProgress <= ABOUT_ME_ENTER_START) {
                // Before enter: content below screen
                return `translateY(${window.innerHeight}px)`;
              } else if (scrollProgress <= ABOUT_ME_ENTER_END) {
                // Enter phase: scroll content up into view
                const enterProgress = (scrollProgress - ABOUT_ME_ENTER_START) / (ABOUT_ME_ENTER_END - ABOUT_ME_ENTER_START);
                const translateY = window.innerHeight * (1 - enterProgress);
                return `translateY(${translateY}px)`;
              } else if (scrollProgress < ABOUT_ME_EXIT_RANGE) {
                // Visible phase: content fully visible and scrollable, no transform
                return undefined;
              } else if (scrollProgress <= ABOUT_ME_EXIT_RANGE) {
                // Exit phase: zoom and move right (only after scrolling to bottom of content)
                const exitProgress = (scrollProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
                return `scale(${1 + (ABOUT_ME_EXIT_SCALE - 1) * exitProgress}) translateX(${window.innerWidth * 1.5 * exitProgress}px)`;
              } else {
                // After exit: off screen
                return `scale(${ABOUT_ME_EXIT_SCALE}) translateX(${window.innerWidth * 1.5}px)`;
              }
            })(),
            transformOrigin: scrollProgress > ABOUT_ME_VISIBLE_RANGE ? "20% center" : undefined, // Only set when transforming during exit
            transition: isInitialized ? "transform 0.1s ease-out, opacity 0.3s ease-out" : "none",
            willChange: scrollProgress > HERO_EXIT_RANGE && scrollProgress <= ABOUT_ME_EXIT_RANGE ? "transform" : "auto",
            // Increased z-index separation: about me stays in front (z-index 30) during enter, visible, and exit phases, then moves behind (z-index 1)
            zIndex: scrollProgress > ABOUT_ME_ENTER_START && scrollProgress <= ABOUT_ME_EXIT_RANGE ? 30 : scrollProgress > ABOUT_ME_EXIT_RANGE ? 1 : 10,
            // Opacity: fade in during enter, fully visible during scrollable phase, fade out during exit
            opacity: (() => {
              if (scrollProgress <= ABOUT_ME_ENTER_START) {
                return 0;
              } else if (scrollProgress <= ABOUT_ME_ENTER_END) {
                // Fade in during enter phase
                const enterProgress = (scrollProgress - ABOUT_ME_ENTER_START) / (ABOUT_ME_ENTER_END - ABOUT_ME_ENTER_START);
                return enterProgress;
              } else if (scrollProgress < ABOUT_ME_EXIT_RANGE) {
                // Fully visible during scrollable phase
                return 1;
              } else if (scrollProgress <= ABOUT_ME_EXIT_RANGE) {
                // Fade out during exit
                const exitProgress = (scrollProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
                return Math.max(0, 1 - exitProgress);
              } else {
                return 0;
              }
            })(),
            pointerEvents: scrollProgress > ABOUT_ME_ENTER_START && scrollProgress <= ABOUT_ME_EXIT_RANGE ? 'auto' : 'none',
          }}
        >
            <div 
              ref={aboutMeScrollContainerRef}
              className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto overflow-y-auto"
              style={{
                maxHeight: 'calc(100vh - 120px)',
                scrollBehavior: 'smooth',
                touchAction: 'pan-y', // Allow vertical scrolling on mobile
                WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
              }}
            >
            <AboutMeContent
              renderFactCard={renderFactCard}
              displayedFacts={displayedFacts}
              shuffleFacts={shuffleFacts}
              textColorClass="text-white"
              textSecondaryColorClass="text-white/90"
              cardsContainerClass="flex flex-col md:flex-row gap-3 md:gap-4 mt-6"
              shuffleButtonClass="w-full mt-6 py-4 px-6 rounded-3xl transition-all duration-200 flex items-center justify-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02]"
            />
            </div>
        </div>
        
        {/* Testimonials Section - Back layer (lowest z-index), appears after zooming past about me */}
        {/* Note: ShaderGradient is in App.tsx at zIndex 0, so it extends behind all sections site-wide */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: scrollProgress > TESTIMONIALS_VISIBLE_RANGE
              ? `scale(${1 + (ABOUT_ME_EXIT_SCALE - 1) * ((scrollProgress - TESTIMONIALS_VISIBLE_RANGE) / (TESTIMONIALS_EXIT_RANGE - TESTIMONIALS_VISIBLE_RANGE))}) translateX(${-window.innerWidth * 1.5 * ((scrollProgress - TESTIMONIALS_VISIBLE_RANGE) / (TESTIMONIALS_EXIT_RANGE - TESTIMONIALS_VISIBLE_RANGE))}px)`
              : `scale(1)`,
            transformOrigin: scrollProgress > TESTIMONIALS_VISIBLE_RANGE ? "80% center" : "center center",
            transition: isInitialized ? "transform 0.1s ease-out, opacity 0.3s ease-out" : "none",
            willChange: scrollProgress > TESTIMONIALS_VISIBLE_RANGE ? "transform" : "opacity",
            backgroundColor: "transparent", // Ensure transparent so gradient shows through
            // Testimonials stay far behind (z-index 1) until about me is completely off screen, then move to front (z-index 10)
            zIndex: scrollProgress > ABOUT_ME_EXIT_RANGE && scrollProgress <= TESTIMONIALS_EXIT_RANGE ? 10 : scrollProgress > TESTIMONIALS_EXIT_RANGE ? 1 : 1,
            // Only start fading in after about me is completely off screen (at ABOUT_ME_EXIT_RANGE)
            opacity: scrollProgress > ABOUT_ME_EXIT_RANGE && scrollProgress <= TESTIMONIALS_VISIBLE_RANGE
              ? Math.min(1, (scrollProgress - ABOUT_ME_EXIT_RANGE) / (TESTIMONIALS_VISIBLE_RANGE - ABOUT_ME_EXIT_RANGE))
              : scrollProgress > TESTIMONIALS_VISIBLE_RANGE && scrollProgress <= TESTIMONIALS_EXIT_RANGE
              ? 1 // Fully visible during the pause (same pattern as about me section)
              : scrollProgress > TESTIMONIALS_EXIT_RANGE
              ? Math.max(0, 1 - ((scrollProgress - TESTIMONIALS_EXIT_RANGE) / (1 - TESTIMONIALS_EXIT_RANGE)))
              : 0,
            pointerEvents: scrollProgress > ABOUT_ME_EXIT_RANGE && scrollProgress <= TESTIMONIALS_EXIT_RANGE ? 'auto' : 'none',
          }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-hagrid text-center w-full">what it's like to work with me</h2>
            <div className="relative w-full min-h-[380px] flex items-center justify-center pb-12 px-4 md:px-0">
              {/* Navigation Buttons - Positioned outside card on mobile to avoid overlap */}
              <button
                onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                className="absolute left-2 md:left-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeTestimonial === 0}
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Card Container */}
              <div className="relative w-full h-full flex items-center justify-center overflow-visible px-8 md:px-0">
                {testimonials.map((testimonial, index) => {
                  const position = index - activeTestimonial;
                  const isActive = index === activeTestimonial;
                  
                  let transform = '';
                  let zIndex = 0;
                  let opacity = 0;
                  let filter = 'blur(0px)';
                  
                  if (isActive) {
                    transform = 'translateX(0px) scale(1) perspective(1000px) rotateY(0deg)';
                    zIndex = 10;
                    opacity = 1;
                    filter = 'blur(0px)';
                  } else if (position > 0) {
                    transform = `translateX(${120 * position}px) scale(${1 - 0.2 * position}) perspective(1000px) rotateY(-8deg)`;
                    zIndex = 10 - position;
                    opacity = position > 2 ? 0 : 0.6;
                    filter = 'blur(3px)';
                  } else if (position < 0) {
                    const absPosition = Math.abs(position);
                    transform = `translateX(${-120 * absPosition}px) scale(${1 - 0.2 * absPosition}) perspective(1000px) rotateY(8deg)`;
                    zIndex = 10 - absPosition;
                    opacity = absPosition > 2 ? 0 : 0.6;
                    filter = 'blur(3px)';
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute rounded-3xl border border-white/30 bg-[#0A0520]/20 backdrop-blur-lg p-6 sm:p-8 shadow-2xl cursor-pointer w-[95%] sm:w-[520px] md:w-[600px] lg:w-[700px] min-h-[320px] md:min-h-[360px]"
                      style={{
                        transform,
                        zIndex,
                        opacity,
                        filter,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                      onClick={() => setActiveTestimonial(index)}
                    >
                      <div className="absolute inset-0 bg-[#0A0520]/20 rounded-3xl backdrop-blur-xl"></div>
                      <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl backdrop-blur-sm`}></div>
                      <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex-1">
                          <img 
                            src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                            alt="" 
                            className="block dark:hidden w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                            loading="lazy"
                          />
                          <img 
                            src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                            alt="" 
                            className="hidden dark:block w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                            loading="lazy"
                          />
                          <p className="text-white italic text-base md:text-2xl leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="mt-4 flex-shrink-0">
                          <p className="font-semibold text-white text-sm md:text-base">{testimonial.author}</p>
                          <p className="text-xs md:text-sm text-white/70">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                className="absolute right-2 md:right-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeTestimonial === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-white w-6'
                        : 'bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator (optional) */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/60 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
        
        {/* Say Hello Section - Final layer, appears after testimonials, lowest z-index */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `scale(1)`,
            transformOrigin: "center center",
            transition: isInitialized ? "opacity 0.3s ease-out" : "none",
            willChange: "opacity",
            backgroundColor: "transparent",
            // Lowest z-index - always behind other sections
            zIndex: 1,
            // Only appear after testimonials section completes (at 100% scroll)
            opacity: scrollProgress >= TESTIMONIALS_EXIT_RANGE
              ? 1
              : 0,
            pointerEvents: scrollProgress >= TESTIMONIALS_EXIT_RANGE ? 'auto' : 'none',
          }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-hagrid">say hello 👋</h2>
            <p className="text-white/90 text-center mb-10 text-lg md:text-xl max-w-3xl mx-auto">
              If you're working on a social impact problem and need a UX consultant, book a time on my calendar or reach out at lexirohrer@gmail.com
            </p>
            
            {/* Contact Icons */}
            <div className="flex flex-row gap-6 items-center justify-center">
              <a
                href="https://www.linkedin.com/in/alexandra-rohrer/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                  alt="LinkedIn"
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
              <a
                href="mailto:lexirohrer@gmail.com"
                className="group flex items-center justify-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}Gmail.png`}
                  alt="Gmail"
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
              <a
                href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}Calendar.png`}
                  alt="Calendar"
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
              <a
                href="https://uxlex.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}Substack.png`}
                  alt="Substack"
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            </div>
            
            {/* See My Work Button */}
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="transform transition-transform duration-300 hover:shadow-xl hover:scale-110 h-12 md:h-16 w-[328px] md:w-[392px]"
              >
                <a
                  href="/portfolio"
                  className="flex items-center justify-center gap-3 h-full px-6"
                >
                  <span>or, see my work</span>
                  <span aria-hidden="true" className="text-lg">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexNew2;
