import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

const IndexNew2 = () => {
  // Fun facts data
  const allFunFacts = [
    { emoji: "📚", text: "I collect library cards from every place I've lived" },
    { emoji: "🎤", text: "I love public speaking (weirdo)" },
    { emoji: "🏔️", text: "I once backpacked for a month straight in the Rocky Mountains" },
    { emoji: "🌍", text: "I grew up living with 56 exchange students from 16 different countries" },
    { emoji: "🗣️", text: "I minored in Linguistics & love languages" },
    { emoji: "✈️", text: "So far, I've visited 35 countries and 23 states"},
    { emoji: "🇹🇭", text: "I'm currently learning to speak Thai. It is very hard." },
    { emoji: "🎨", text: "I fell in love with design because I get to work on interdisciplinary problems" },
    { emoji: "🌱", text: "I've been a climate activist for over 10 years" },
    { emoji: "⛰️", text: "I climbed the highest mountain in the continental US – twice!" },
    { emoji: "👽", text: "If you want to talk for hours abour Sci Fi Books, I'm your gal" },
    { emoji: "☕️", text: "I've never had a cup of coffee" },
    { emoji: "👯‍♀️", text: "I was voted 'most talkative' in my high school yearbook" },
    { emoji: "🏰", text: "My most memorable workshop was hosted in the attic of a Polish Castle" },
    { emoji: "🚗", text: "A video I made in second grade went viral on YouTube, and I used the ad revenue to buy my first car" }
  ];
  
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
  
  const renderFactCard = (
    fact: typeof displayedFacts[number],
    index: number
  ) => {
    const isFlipped = flippedCards.has(index);
    return (
      <div
        key={`fact-${index}`}
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
            minHeight: "220px",
          }}
        >
          <div
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex items-center justify-center backface-hidden px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              position: "absolute",
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              isolation: "isolate",
              willChange: "backdrop-filter",
            }}
          >
            <span className="text-white/90 font-hagrid font-medium text-3xl text-center">
              flip me 👀
            </span>
          </div>
          <div
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              zIndex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
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
  };

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
  const HERO_ZOOM_RANGE = 0.25; // Hero section uses 25% of scroll range (0 to 0.25) to reach MAX_SCALE
  const HERO_EXIT_RANGE = 0.4; // Hero section uses 40% of scroll range to zoom completely off screen
  const ABOUT_ME_VISIBLE_RANGE = 0.6; // About me section is fully visible at 60% of scroll
  const ABOUT_ME_EXIT_RANGE = 0.9; // About me section uses 90% of scroll range to zoom completely off screen

  const [scale, setScale] = useState(0.5); // Temporary initial state, will be set in useEffect
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollVelocityRef = useRef(0);
  const lastScrollTimeRef = useRef(Date.now());
  const minScaleRef = useRef(0.5); // Will be set to calculated initial scale
  const isAutoScrollingRef = useRef(false);
  const autoScrollAnimationRef = useRef<number | null>(null);

  useEffect(() => {
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
      // Scale content to fit within available width with some margin
      const calculatedScale = (availableWidth * 0.95) / contentWidth;
      return Math.min(MAX_SCALE, Math.max(0.1, calculatedScale)); // Clamp between 0.1 and MAX_SCALE
    };

    // Initialize: start at minimum zoom (content aligned with navigation margins)
    // Scroll down → zoom in (scale increases, content gets larger)
    // This initial scale is the MIN_SCALE - content cannot zoom out further than this
    let accumulatedScroll = 0; // Start at 0 = minimum zoom
    const initialScale = calculateInitialScale();
    minScaleRef.current = initialScale; // Store as the true minimum scale
    let targetScale = initialScale; // Start at calculated scale
    let currentScale = initialScale;
    setScale(initialScale); // Ensure initial state is aligned with margins
    setScrollProgress(0); // Progress bar starts at 0%
    setIsInitialized(true); // Mark as initialized to enable transitions
    let animationFrameId: number;

    // Smooth easing function
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    // Update scale with smooth animation
    const updateScale = () => {
      const diff = targetScale - currentScale;
      if (Math.abs(diff) > 0.001) {
        // Smooth interpolation - use larger step for faster response
        currentScale += diff * 0.15;
        setScale(currentScale);
        animationFrameId = requestAnimationFrame(updateScale);
      } else {
        currentScale = targetScale;
        setScale(currentScale);
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
        setScrollProgress(currentProgress);
        
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
        } else {
          // After about me exits, stay at ABOUT_ME_EXIT_SCALE
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

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Calculate scroll delta (normalize for different devices)
      const delta = e.deltaY;
      // Scroll down = positive delta = zoom in (increase scale)
      // Scroll up = negative delta = zoom out (decrease scale)
      const normalizedDelta = Math.sign(delta) * Math.min(Math.abs(delta), 100);
      
      // If user manually scrolls while auto-scrolling, cancel auto-scroll to allow manual control
      if (isAutoScrollingRef.current) {
        isAutoScrollingRef.current = false;
        if (autoScrollAnimationRef.current) {
          cancelAnimationFrame(autoScrollAnimationRef.current);
          autoScrollAnimationRef.current = null;
        }
      }
      
      // If scrolling down and we're at the start (or very close to start), trigger auto-scroll
      // Auto-scroll only goes to about me section, not all the way to testimonials
      if (normalizedDelta > 0 && accumulatedScroll < 50) {
        startAutoScroll();
        return;
      }
      
      // Update accumulated scroll: scroll down (positive delta) increases accumulatedScroll
      // Scroll up (negative delta) decreases accumulatedScroll
      accumulatedScroll += normalizedDelta;
      accumulatedScroll = Math.max(0, Math.min(accumulatedScroll, SCROLL_RANGE));
      
      
      // Calculate scroll progress (0 to 1)
      const progress = accumulatedScroll / SCROLL_RANGE;
      setScrollProgress(progress);
      
      // Hero section zoom: 
      // 0 to 0.25: zoom from MIN_SCALE to MAX_SCALE
      // 0.25 to 0.4: continue zooming from MAX_SCALE to HERO_EXIT_SCALE (zooms off screen)
      // 0.4 to 0.6: about me section is visible at scale 1
      // 0.6 to 0.9: zoom past about me section from scale 1 to ABOUT_ME_EXIT_SCALE
      // After 0.9: testimonials section is revealed
      const MIN_SCALE = minScaleRef.current;
      if (progress <= HERO_ZOOM_RANGE) {
        // First phase: zoom from MIN_SCALE to MAX_SCALE
        const heroProgress = progress / HERO_ZOOM_RANGE;
        targetScale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * easeOutCubic(heroProgress);
      } else if (progress <= HERO_EXIT_RANGE) {
        // Second phase: continue zooming from MAX_SCALE to HERO_EXIT_SCALE to zoom off screen
        const exitProgress = (progress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE);
        targetScale = MAX_SCALE + (HERO_EXIT_SCALE - MAX_SCALE) * easeOutCubic(exitProgress);
      } else if (progress <= ABOUT_ME_VISIBLE_RANGE) {
        // Third phase: about me section is visible at scale 1
        targetScale = 1;
      } else if (progress <= ABOUT_ME_EXIT_RANGE) {
        // Fourth phase: zoom past about me section from scale 1 to ABOUT_ME_EXIT_SCALE
        const aboutMeProgress = (progress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
        targetScale = 1 + (ABOUT_ME_EXIT_SCALE - 1) * easeOutCubic(aboutMeProgress);
      } else {
        // After about me exits, stay at ABOUT_ME_EXIT_SCALE
        targetScale = ABOUT_ME_EXIT_SCALE;
      }
      targetScale = Math.max(MIN_SCALE, Math.min(ABOUT_ME_EXIT_SCALE, targetScale));
      
      // Always restart animation to ensure smooth updates in both directions
      // Cancel any existing animation and start fresh
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = 0; // Reset before starting new animation
      updateScale();

      // Track scroll velocity for momentum
      const now = Date.now();
      const timeDelta = now - lastScrollTimeRef.current;
      if (timeDelta > 0) {
        scrollVelocityRef.current = normalizedDelta / timeDelta;
      }
      lastScrollTimeRef.current = now;
    };

    // Touch support for mobile
    let touchStartDistance = 0;
    let touchStartScale = minScaleRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
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
      if (e.touches.length === 2) {
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
        } else {
          // Fourth phase: scale maps to ABOUT_ME_VISIBLE_RANGE to ABOUT_ME_EXIT_RANGE
          const aboutMeProgress = (targetScale - 1) / (ABOUT_ME_EXIT_SCALE - 1);
          progress = ABOUT_ME_VISIBLE_RANGE + aboutMeProgress * (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE);
        }
        accumulatedScroll = progress * SCROLL_RANGE;
        setScrollProgress(progress);
        
        // Always restart animation to ensure smooth updates
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
        updateScale();
      }
    };

    // Prevent default scroll behavior
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    // Add event listeners
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("scroll", preventScroll, { passive: false });

    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("scroll", preventScroll);
      document.body.style.overflow = "";
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (autoScrollAnimationRef.current) {
        cancelAnimationFrame(autoScrollAnimationRef.current);
      }
    };
  }, []);

  // Mouse-responsive effect for Memoji
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!memojiRef.current) return;
      
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
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{ touchAction: "none" }}
      >
        <ShaderGradientCanvas style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <ShaderGradient
            animate="on"
            brightness={1.1}
            cAzimuthAngle={60}
            cDistance={7.1}
            cPolarAngle={90}
            cameraZoom={16.25}
            color1="#000037"
            color2="#84089d"
            color3="#000057"
            envPreset="dawn"
            grain="on"
            lightType="3d"
            positionX={0}
            positionY={-0.15}
            positionZ={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="sphere"
            uAmplitude={1.4}
            uDensity={1.5}
            uFrequency={5.5}
            uSpeed={0.4}
            uStrength={0.6}
            wireframe={false}
          />
        </ShaderGradientCanvas>
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
            // Hero never fades out - stays visible and zooms out of frame
            opacity: 1,
            transition: isInitialized 
              ? `transform 0.1s ease-out, z-index 0s ${scrollProgress > HERO_EXIT_RANGE ? '0.3s' : '0s'}` 
              : "none",
            pointerEvents: scrollProgress > HERO_EXIT_RANGE ? 'none' : 'auto',
          }}
        >
          <div
            ref={contentRef}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full"
          >
            {/* Text Content - Left Side */}
            <div 
              className="flex-1 max-w-2xl text-left md:text-left"
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
                <span className="text-[#6A7B9F]">Hi, I'm Lexi</span>
                <br />
                <span className="text-[#6A7B9F] text-2xl md:text-3xl lg:text-4xl font-normal">
                  a social impact technologist
                </span>
              </h1>
              <p className="text-[#A0AEC0] text-base md:text-lg leading-relaxed mt-6">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                    className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="mailto:lexirohrer@gmail.com"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Gmail.png`}
                    alt="Gmail"
                    className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
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
                    className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
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
                    className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
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

            {/* Memoji - Right Side */}
            <div 
              ref={memojiRef}
              className="flex-shrink-0"
              style={{
                // Move image right as zoom increases to push it completely off screen
                // Also add mouse-responsive transform
                transform: scrollProgress > HERO_ZOOM_RANGE
                  ? `translateX(${window.innerWidth * 1.5 * ((scrollProgress - HERO_ZOOM_RANGE) / (HERO_EXIT_RANGE - HERO_ZOOM_RANGE))}px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: scrollProgress > HERO_ZOOM_RANGE 
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
                  transform: `rotate(${mousePosition.x * 0.1}deg)`,
                }}
              />
            </div>
            </div>
        </div>
        
        {/* About Me Section - Middle layer, appears after hero, then zooms past to reveal testimonials */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            // About me section starts at scale 1 and stays visible, then zooms to ABOUT_ME_EXIT_SCALE and moves right to exit completely
            transform: scrollProgress > ABOUT_ME_VISIBLE_RANGE
              ? `scale(${1 + (ABOUT_ME_EXIT_SCALE - 1) * ((scrollProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE))}) translateX(${window.innerWidth * 1.5 * ((scrollProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE))}px)`
              : `scale(1) translateX(0px)`,
            transformOrigin: "20% center", // Focus on left side to push content right
            transition: isInitialized ? "transform 0.1s ease-out, opacity 0.3s ease-out" : "none",
            willChange: scrollProgress > HERO_EXIT_RANGE && scrollProgress <= ABOUT_ME_VISIBLE_RANGE ? "auto" : "transform",
            // Increased z-index separation: about me stays in front (z-index 30) until completely off screen, then moves behind (z-index 1)
            zIndex: scrollProgress > HERO_EXIT_RANGE && scrollProgress <= ABOUT_ME_EXIT_RANGE ? 30 : scrollProgress > ABOUT_ME_EXIT_RANGE ? 1 : 10,
            // About me fades in after hero exits, stays fully visible until ABOUT_ME_VISIBLE_RANGE, then fades out as it exits
            opacity: scrollProgress > HERO_EXIT_RANGE && scrollProgress <= ABOUT_ME_VISIBLE_RANGE
              ? 1
              : scrollProgress > ABOUT_ME_VISIBLE_RANGE && scrollProgress <= ABOUT_ME_EXIT_RANGE
              ? Math.max(0, 1 - ((scrollProgress - ABOUT_ME_VISIBLE_RANGE) / (ABOUT_ME_EXIT_RANGE - ABOUT_ME_VISIBLE_RANGE)))
              : 0,
            pointerEvents: scrollProgress > HERO_EXIT_RANGE && scrollProgress <= ABOUT_ME_EXIT_RANGE ? 'auto' : 'none',
          }}
        >
            <div 
              className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-hagrid text-left">about me</h2>
            <div className="space-y-4 text-white/90 leading-relaxed text-justify">
              <p className="text-lg">
                I design experiences that create positive social impact. As a Fulbright fellow, I most recently used participatory design to make sure Smart City tech solves real problems for Bangkok residents.
              </p>
              <p className="text-lg">
                Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities. If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or doing Thai flashcards on the elliptical.
              </p>            
              <p className="text-lg">
                If you're working on a social impact problem and need a UX consultant, book a time to chat or reach out at lexirohrer@gmail.com
              </p>
            </div>
            
            {/* Fun Facts - 3 Cards in Row on Desktop, Stacked on Mobile */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-6" style={{ isolation: "isolate" }}>
              {displayedFacts
                .slice(0, 3)
                .map((fact, index) => (
                  <div key={`wrapper-${index}`} className="flex-1" style={{ isolation: "isolate" }}>
                    {renderFactCard(fact, index)}
                  </div>
                ))}
            </div>
            
            {/* Shuffle Button - Full Width */}
            <button
              onClick={shuffleFacts}
              className="w-full mt-6 py-4 px-6 rounded-3xl transition-all duration-200 flex items-center justify-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02]"
              aria-label="Shuffle facts"
            >
              <img
                src={`${import.meta.env.BASE_URL}Shuffle_Icon.svg`}
                alt="Shuffle"
                className="w-6 h-6 drop-shadow-lg"
                loading="lazy"
              />
              <span className="text-white/90 font-hagrid font-medium text-xl">shuffle</span>
            </button>
            </div>
        </div>
        
        {/* Testimonials Section - Back layer (lowest z-index), appears after zooming past about me */}
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            transform: `scale(1)`, // Testimonials stay at normal size
            transformOrigin: "center center",
            transition: isInitialized ? "opacity 0.3s ease-out" : "none",
            willChange: "opacity",
            // Testimonials stay far behind (z-index 1) until about me is completely off screen, then move to front (z-index 10)
            zIndex: scrollProgress > ABOUT_ME_EXIT_RANGE ? 10 : 1,
            // Only start fading in after about me is completely off screen (at ABOUT_ME_EXIT_RANGE)
            opacity: scrollProgress > ABOUT_ME_EXIT_RANGE 
              ? Math.min(1, (scrollProgress - ABOUT_ME_EXIT_RANGE) / (1 - ABOUT_ME_EXIT_RANGE)) 
              : 0,
            pointerEvents: scrollProgress > ABOUT_ME_EXIT_RANGE ? 'auto' : 'none',
          }}
        >
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-hagrid text-center w-full">what it's like to work with me</h2>
            <div className="relative w-full min-h-[380px] flex items-center justify-center pb-12">
              {/* Navigation Buttons */}
              <button
                onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                className="absolute left-0 md:left-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeTestimonial === 0}
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Card Container */}
              <div className="relative w-full h-full flex items-center justify-center overflow-visible">
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
                className="absolute right-0 md:right-8 z-50 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeTestimonial === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="text-white/60 text-xs uppercase tracking-wider">
            Scroll to zoom
          </div>
          <div className="mt-2 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
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

export default IndexNew2;
