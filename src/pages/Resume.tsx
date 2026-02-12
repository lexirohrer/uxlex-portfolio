
import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { allFunFacts } from "@/data/funFacts";
import { useIsMobile } from "@/hooks/use-mobile";

const Resume = () => {
  const isMobile = useIsMobile();
  const firstSectionRef = useRef<HTMLElement>(null);
  
  // Track which fact indices have been shown
  const shownFactIndicesRef = useRef<Set<number>>(new Set());
  const [shownFactIndices, setShownFactIndices] = useState<Set<number>>(
    shownFactIndicesRef.current
  );
  
  // Initialize with 3 random facts
  const [displayedFacts, setDisplayedFacts] = useState(() => {
    const shuffled = [...allFunFacts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  });
  
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  // Track if cards are rotating (full flip on shuffle)
  const [isRotating, setIsRotating] = useState(false);
  
  // Track card order in stack (last index = top of stack)
  const [cardOrder, setCardOrder] = useState<number[]>(() => 
    allFunFacts.map((_, index) => index)
  );
  
  // Track cards that are animating to the back
  const [animatingToBack, setAnimatingToBack] = useState<Set<number>>(new Set());
  
  // Track animation phase for cards moving to back (0 = sliding away, 1 = sliding back behind)
  const [animationPhase, setAnimationPhase] = useState<Map<number, number>>(new Map());
  
  // Track slide direction for cards moving to back ('top' | 'bottom' | 'left' | 'right')
  const [slideDirection, setSlideDirection] = useState<Map<number, 'top' | 'bottom' | 'left' | 'right'>>(new Map());
  
  // Generate random positions and rotations for scattered card effect
  const [cardPositions, setCardPositions] = useState<Array<{x: number, y: number, rotation: number}>>(() => {
    return allFunFacts.map(() => ({
      x: Math.random() * 120 - 60, // Random x offset between -60px and 60px
      y: Math.random() * 120 - 60, // Random y offset between -60px and 60px
      rotation: (Math.random() - 0.5) * 30 // Random rotation between -15 and 15 degrees
    }));
  });
  
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
  // Track card heights for consistent sizing on mobile
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const cardBackRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Track testimonial card heights for consistent sizing
  const [maxTestimonialHeight, setMaxTestimonialHeight] = useState<number | null>(null);
  const testimonialContentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    {
      text: "Lexi is the definition of a team player – always willing to go the extra mile and contribute to the project's success. She has a strong sense of self-awareness and a desire to learn and grow.",
      author: "Jen Hong",
      title: "Staff Product Designer @ Intuit",
      gradient: "from-pink-500/10 via-transparent to-purple-500/10",
      quoteColor: "text-orange-400"
    },
    {
      text: "Lexi always brings positive energy, proactivity, courage, customer obsession, collaboration, and strong systems thinking to any project she was tasked with. She naturally has a learning mindset and always comes to the table with a strong data-backed POV",
      author: "Womo Iyegha",
      title: "Product Design Leader @ Intuit",
      gradient: "from-indigo-500/10 via-transparent to-blue-500/10",
      quoteColor: "text-purple-400"
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
      gradient: "from-yellow-500/10 via-transparent to-orange-500/10",
      quoteColor: "text-yellow-400"
    },
    {
      text: "Lexi has a drive, fearlessness, and openness to improvement that set her apart and in my personal experience is highly correlated with top levels of achievement and success.",
      author: "Aniket Kittur",
      title: "Cooper-Siegel Chair, Human-Computer Interaction Institute, Carnegie Mellon University",
      gradient: "from-pink-500/10 via-transparent to-purple-500/10",
      quoteColor: "text-orange-400"
    },
    {
      text: "Lexi is one of those very rare designers who not only excels at her craft but also uplifts everyone around her with her proactivity, curiosity, and positivity.",
      author: "Grace Kim",
      title: "UX Research Lead",
      gradient: "from-rose-500/10 via-transparent to-pink-500/10",
      quoteColor: "text-rose-400"
    }
  ];
  
  // Shuffle facts function - selects 3 new random facts
  const shuffleFacts = () => {
    setIsRotating(true);
    
    setTimeout(() => {
      setIsRotating(false);
      
      // Get 3 new random facts
      const shuffled = [...allFunFacts].sort(() => Math.random() - 0.5);
      const newFacts = shuffled.slice(0, 3);
      setDisplayedFacts(newFacts);
      
      // Reset flipped cards
      setFlippedCards(new Set());
    }, 600);
  };
  
  // Toggle flip state of a card and handle stack movement
  const toggleFlip = (index: number) => {
    // For grid layout (3 cards), all cards are interactive
    // For stack layout, only top card is interactive
    if (displayedFacts.length !== 3) {
      const topCardIndex = cardOrder[cardOrder.length - 1];
      if (index !== topCardIndex) {
        return;
      }
    }
    
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      const isCurrentlyFlipped = newSet.has(index);
      
      // For grid layout (3 cards), just flip/unflip without stack animation
      if (displayedFacts.length === 3) {
        if (isCurrentlyFlipped) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      }
      
      // Stack layout behavior (for backward compatibility)
      if (isCurrentlyFlipped) {
        // Card is flipped, clicking again moves it to back of stack
        newSet.delete(index);
        
        // Randomly select slide direction
        const directions: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        
        // Start animation to move card to back
        setAnimatingToBack((prev) => new Set(prev).add(index));
        setAnimationPhase((prev) => new Map(prev).set(index, 0)); // Phase 0: sliding away
        setSlideDirection((prev) => new Map(prev).set(index, randomDirection));
        
        // First phase: slide card away in random direction
        setTimeout(() => {
          setAnimationPhase((prev) => {
            const newMap = new Map(prev);
            newMap.set(index, 1); // Phase 1: sliding back behind
            return newMap;
          });
          
          // Move card to back of stack order
          setCardOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            const cardIndex = newOrder.indexOf(index);
            newOrder.splice(cardIndex, 1);
            newOrder.unshift(index); // Add to front (back of stack)
            return newOrder;
          });
          
          // Second phase: slide card back behind the deck from opposite direction
          setTimeout(() => {
            // Clear animation state
            setAnimatingToBack((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
            setAnimationPhase((prev) => {
              const newMap = new Map(prev);
              newMap.delete(index);
              return newMap;
            });
            setSlideDirection((prev) => {
              const newMap = new Map(prev);
              newMap.delete(index);
              return newMap;
            });
          }, 400); // Time for sliding back
        }, 400); // Time for sliding away
      } else {
        // Flip the card
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
  
  // Measure testimonial card heights to ensure consistent sizing
  useEffect(() => {
    if (testimonialContentRefs.current.length === 0) {
      setMaxTestimonialHeight(null);
      return;
    }
    
    const measureHeights = () => {
      const heights = testimonialContentRefs.current
        .filter(ref => ref !== null)
        .map(ref => {
          // Measure the natural height of the content
          // Create a temporary clone to measure without affecting the original
          const clone = ref!.cloneNode(true) as HTMLElement;
          clone.style.position = 'absolute';
          clone.style.visibility = 'hidden';
          clone.style.height = 'auto';
          clone.style.width = ref!.offsetWidth + 'px';
          document.body.appendChild(clone);
          
          const height = clone.scrollHeight;
          document.body.removeChild(clone);
          
          return height;
        });
      
      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        // Add padding (p-6 sm:p-8 = 24px/32px) - use the larger value for consistency
        setMaxTestimonialHeight(maxHeight + 64); // 32px top + 32px bottom padding
      }
    };
    
    // Delay measurement to ensure cards are rendered
    const timeoutId = setTimeout(measureHeights, 100);
    return () => clearTimeout(timeoutId);
  }, [testimonials]);
  
  const renderFactCard = useCallback((
    fact: typeof displayedFacts[number],
    index: number,
    keyPrefix: string,
    layout: "grid" | "stack" = "grid"
  ) => {
    const isFlipped = flippedCards.has(index);
    
    if (layout === "grid") {
      // Grid layout: simple side-by-side cards that can shrink
      return (
        <div
          key={`${keyPrefix}-${fact.text}`}
          className="relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 h-full overflow-visible"
          style={{ 
            perspective: "1000px",
            width: "100%",
            height: "100%",
            minHeight: "150px"
          }}
          onClick={() => toggleFlip(index)}
        >
          <div
            className={`relative w-full h-full ${isRotating ? "animate-flip-full" : ""}`}
            style={{
              transform: isRotating
                ? undefined
                : isFlipped
                ? `rotateY(180deg)`
                : `rotateY(0deg)`,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              height: "100%",
              minHeight: "150px",
              transition: isRotating ? "none" : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Front of card */}
            <div
              className="absolute inset-0 w-full h-full rounded-3xl flex items-center justify-center backface-hidden px-6"
              style={{
                background: 'rgba(10, 5, 32, 0.3)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
                zIndex: isFlipped ? 0 : 1,
                opacity: isFlipped ? 0 : 1,
                transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <span className="text-[#EAE8F3] text-2xl font-semibold font-hagrid text-center relative z-10">
                what's this? 👀
              </span>
            </div>
            {/* Back of card */}
            <div
              className="absolute inset-0 w-full h-full rounded-3xl flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
              style={{
                background: 'rgba(10, 5, 32, 0.3)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                zIndex: isFlipped ? 1 : 0,
                opacity: isFlipped ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="relative z-10 flex flex-col items-center gap-3">
                <span className="text-4xl md:text-5xl">{fact.emoji}</span>
                <span className="text-[#EAE8F3] text-sm md:text-base leading-relaxed text-center">
                  {fact.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Stack layout (keeping for backward compatibility, but not used in new design)
    const cardHeight = isMobile && maxCardHeight ? `${maxCardHeight}px` : undefined;
    const stackPosition = cardOrder.indexOf(index);
    const isTopCard = stackPosition === cardOrder.length - 1;
    const position = cardPositions[index];
    const isAnimatingToBack = animatingToBack.has(index);
    const zIndex = isAnimatingToBack ? 0 : stackPosition + 1;
    const baseTransform = `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`;
    const phase = animationPhase.get(index) ?? 0;
    const direction = slideDirection.get(index) ?? 'top';
    
    let animationTransform = baseTransform;
    if (isAnimatingToBack) {
      if (phase === 0) {
        let translateX = 0;
        let translateY = 0;
        let rotateZ = 0;
        
        switch (direction) {
          case 'top':
            translateY = -250;
            rotateZ = 5;
            break;
          case 'bottom':
            translateY = 250;
            rotateZ = -5;
            break;
          case 'left':
            translateX = -250;
            rotateZ = -5;
            break;
          case 'right':
            translateX = 250;
            rotateZ = 5;
            break;
        }
        
        animationTransform = `${baseTransform} translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(0.95)`;
      } else {
        let translateX = 0;
        let translateY = 0;
        let rotateZ = 0;
        
        switch (direction) {
          case 'top':
            translateY = 150;
            rotateZ = -2;
            break;
          case 'bottom':
            translateY = -150;
            rotateZ = 2;
            break;
          case 'left':
            translateX = 150;
            rotateZ = 2;
            break;
          case 'right':
            translateX = -150;
            rotateZ = -2;
            break;
        }
        
        animationTransform = `${baseTransform} translateX(${translateX}px) translateY(${translateY}px) translateZ(-200px) scale(0.3) rotateZ(${rotateZ}deg)`;
      }
    }
    
    return (
      <div
        key={`${keyPrefix}-${fact.text}`}
        className={`relative ${isTopCard && !isAnimatingToBack ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default'}`}
        style={{ 
          perspective: "1000px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: animationTransform,
          transformStyle: "preserve-3d",
          zIndex: zIndex,
          width: "280px",
          pointerEvents: isTopCard && !isAnimatingToBack ? 'auto' : 'none',
          opacity: isAnimatingToBack ? (phase === 0 ? 1 : 0.3) : 1,
          transition: isAnimatingToBack 
            ? (phase === 0 
                ? 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out'
                : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in')
            : 'transform 0.5s ease, opacity 0.5s ease',
        }}
        onClick={() => toggleFlip(index)}
      >
        <div
          className={`relative w-full ${isRotating ? "animate-flip-full" : ""}`}
          style={{
            transform: isRotating
              ? undefined
              : isFlipped
              ? `rotateY(180deg) rotate(${position.rotation}deg)`
              : `rotateY(0deg) rotate(${position.rotation}deg)`,
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            minHeight: "240px",
            height: cardHeight || undefined,
            transition: isRotating ? "none" : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full rounded-3xl flex items-center justify-center backface-hidden px-6"
            style={{
              background: 'rgba(10, 5, 32, 0.3)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              position: "absolute",
              zIndex: isFlipped ? 0 : 1,
              opacity: isFlipped ? 0 : 1,
              transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <span className="text-gray-800 font-hagrid font-medium text-3xl text-center relative z-10">
              what's this? 👀
            </span>
          </div>
          <div
            ref={(el) => {
              cardBackRefs.current[index] = el;
            }}
            className="absolute inset-0 w-full h-full rounded-3xl flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
            style={{
              background: 'rgba(10, 5, 32, 0.3)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              zIndex: isFlipped ? 1 : 0,
              opacity: isFlipped ? 1 : 0,
              transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="text-4xl md:text-5xl">{fact.emoji}</span>
              <span className="text-gray-800 text-base leading-relaxed text-center">
                {fact.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }, [flippedCards, isRotating, isMobile, maxCardHeight, cardOrder, cardPositions, animatingToBack, animationPhase, slideDirection]);

  // Set up scroll snap on mount
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.style.scrollSnapType = 'y mandatory';
    htmlElement.style.scrollBehavior = 'smooth';
    // Reduced scroll padding since we removed top padding from main
    htmlElement.style.scrollPaddingTop = '80px';
    
    return () => {
      // Cleanup on unmount
      htmlElement.style.scrollSnapType = '';
      htmlElement.style.scrollBehavior = '';
      htmlElement.style.scrollPaddingTop = '';
    };
  }, []);

  // Center the first section vertically on page load
  useEffect(() => {
    if (firstSectionRef.current) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        firstSectionRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
      }, 100);
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rohrer-Resume.pdf';
    link.download = 'rohrer-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm relative overflow-hidden bg-transparent min-h-screen">
        <Header />
        <main className="px-[120px] pt-0 pb-[100px] max-md:px-10 max-md:pt-0 max-md:pb-[60px] max-sm:px-5 max-sm:pt-0 max-sm:pb-[40px] relative z-10">
          
          {/* About Me Section */}
          <section 
            ref={firstSectionRef}
            className="mb-[120px] pt-[80px]"
            style={{
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                {/* Left Side - Text Content */}
                <div 
                  className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#0A0520]/30 p-8 flex flex-col" 
                  style={{ 
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                >
                  <h2 className="text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">About Lexi</h2>
                  <div className="space-y-4 text-[#EAE8F3]/90 leading-relaxed">
                    <p className="text-base md:text-lg">
                      I design experiences that create positive social impact. Before finding design, I grew up in a home that hosted 56 exchange students from 16 different countries, fostering my love of travel and language learning. As a Fulbright fellow, I most recently used participatory design to make sure Smart City tech solves real problems for Bangkok residents.
                    </p>
                    <p className="text-base md:text-lg">
                      Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities. If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or doing Thai flashcards on the elliptical.
                    </p>
                    <p className="text-base md:text-lg">
                      If you're working on a social impact problem and need a UX consultant, book a time to chat or reach out at lexirohrer@gmail.com
                    </p>
                  </div>
                </div>

                {/* Right Side - Fun Facts Cards (vertical stack on desktop, horizontal on mobile/tablet) */}
                <div className="flex flex-col gap-4 lg:h-full lg:min-h-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:flex-1 lg:min-h-0 overflow-visible">
                    {displayedFacts.map((fact, index) => (
                      <div key={`card-${index}`} className="flex-1 lg:min-h-0 flex overflow-visible" style={{ minHeight: "150px" }}>
                        {renderFactCard(fact, index, "grid", "grid")}
                      </div>
                    ))}
                  </div>
                  {/* Shuffle Button */}
                  <Button
                    onClick={shuffleFacts}
                    className="w-full flex-shrink-0"
                    aria-label="Shuffle facts"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                      />
                    </svg>
                    shuffle
              </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section 
            className="mb-[120px]"
            style={{
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="w-full">
              <div className="relative w-full min-h-[500px] flex items-center justify-center pb-12">
                {/* Navigation Buttons - Desktop: Side, Mobile: Bottom */}
                <button
                  onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                  className="hidden md:block absolute left-2 lg:left-8 z-50 text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 lg:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === 0}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Card Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-visible px-4 md:px-8 lg:px-0">
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
                        className="absolute rounded-3xl p-8 sm:p-10 md:p-12 cursor-pointer w-[95%] sm:w-[600px] md:w-[700px] lg:w-[650px] flex flex-col justify-center"
                        style={{
                          background: 'rgba(10, 5, 32, 0.3)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                          transform,
                          zIndex,
                          opacity,
                          filter,
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          pointerEvents: isActive ? 'auto' : 'none',
                          minHeight: maxTestimonialHeight ? `${maxTestimonialHeight}px` : '400px',
                          height: maxTestimonialHeight ? `${maxTestimonialHeight}px` : 'auto',
                          maxWidth: '700px',
                          width: '100%'
                        }}
                        onClick={() => setActiveTestimonial(index)}
                      >
                        <div 
                          ref={(el) => {
                            testimonialContentRefs.current[index] = el;
                          }}
                          className="relative z-10 flex flex-col gap-6"
                        >
                          <div>
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                              alt="" 
                              className="block hidden w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                              alt="" 
                              className="hidden block w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <p className="text-[#EAE8F3]/90 text-base md:text-2xl leading-relaxed font-hagrid">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="font-semibold text-[#EAE8F3] text-sm md:text-base font-hagrid">{testimonial.author}</p>
                            <p className="text-xs md:text-sm text-[#EAE8F3]/90 font-hagrid">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                  className="hidden md:block absolute right-2 lg:right-8 z-50 text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 lg:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Mobile Navigation Buttons - Below Cards */}
                <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50 mb-4">
                  <button
                    onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                    className="text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={activeTestimonial === 0}
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Dots Indicator - Mobile */}
                  <div className="flex gap-2">
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
                  
                  <button
                    onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                    className="text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={activeTestimonial === testimonials.length - 1}
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Dots Indicator - Desktop */}
                <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-2 z-50">
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

          {/* Resume Section */}
          <section 
            className="mb-[120px]"
            style={{
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="w-full">
              {/* Download Resume Button */}
              <div className="mb-10">
                <Button onClick={handleDownload} className="w-full">
                  <Download size={20} />
                  Download Resume
                </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
                {/* Left Column: Experience, then Education */}
            <div className="space-y-7">
              {/* Experience */}
                  <div 
                className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div>
                  <h2 className="text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Experience</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Fulbright Fellow on Smart City Technology</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">August 2024 - Present</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Lived and worked in Bangkok, Thailand on a year long design & research fellowship. Facilitated 15+ participatory design workshops across 5 NGO, private, and public orgs.</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Product Designer</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Intuit • September 2021 - August 2024</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Designing onboarding experiences to help small business owners set up and use QuickBooks across web and mobile. Leading the design effort to unify and tailor the QuickBooks onboarding experience across geographic regions.</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Design & Communications Director</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Basilica Bio • April 2021 - Present</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Facilitating and participating in environmental justice education workshops. Created Basilica Bio's brand system, communication strategy, and website.</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Human Computer Interaction Research Intern</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Carnegie Mellon University • June 2019 - September 2019</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Designed the onboarding flow for the chrome extension by Dr. Aniket Kittur's lab. Planned, recruited for, and conducted concept tests with users on prospective feature development.</p>
                  </div>
                  </div>
                </div>
              </div>

                  {/* Education */}
                  <div 
                className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div>
                  <h2 className="text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Education</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">B.S. | Human Centered Design & Engineering</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Minor | Linguistics</p>
                    <p className="text-[#EAE8F3]/90 font-medium">University of Washington, Seattle • 2017-2021</p>
                    <p className="text-[#EAE8F3]/90 mt-2">GPA: 3.98</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">UX Certificate in Interaction Design</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Nielsen Norman Group, Vancouver • August 2018</p>
                    <p className="text-[#EAE8F3]/90 mt-2">ID 1025553</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>

                {/* Right Column: Publications, Skills */}
            <div className="space-y-7">
              {/* Publications */}
                  <div 
                className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div>
                  <h2 className="text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Talks, Publications, Patents</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Patent IPR-2412979US: Automatic Onboarding to a Computer Application by Scraping Website Data</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Patent Application, 2024</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Automated system for streamlining user onboarding by extracting relevant business information from websites.</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Mock to Stock: Let's Jam on a Minimum Lovable Product</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Grace Hopper conference, Sept 2023</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Designed and facilitated a workshop guiding 80+ engineers through Intuit's E2E design process.</p>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-semibold">Human Centered Principles for Applying Augmented Reality in Manufacturing</h3>
                    <p className="text-[#EAE8F3]/90 font-medium">Massachusetts Institute of Technology (MIT), January 2019</p>
                    <p className="text-[#EAE8F3]/90 mt-2">Conference presentation accompanying my primary author publication at MIT's Undergraduate Research Technology Conference.</p>
                  </div>
                  </div>
                </div>
              </div>

                  {/* Skills */}
                  <div 
                className="relative rounded-3xl overflow-hidden p-8"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div>
                    <h2 className="text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Skills</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-[#EAE8F3] text-lg font-semibold mb-2">Design & Research</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Figma</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Adobe CC</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Prototyping</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Design Systems</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">User Research</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">User Interviews</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Usability Testing</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">A/B Testing</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-lg font-semibold mb-2">Methods & Strategy</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Design Thinking</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Human-Centered Design</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Service Design</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Design critique</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Storyboarding</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Wireframing</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Content Strategy</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Information Architecture</span>
                  </div>
                  </div>
                  <div>
                    <h3 className="text-[#EAE8F3] text-lg font-semibold mb-2">Collaboration & Analysis</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Cross-functional Collaboration</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Stakeholder Management</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Workshop Facilitation</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Product Strategy</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Data Analysis</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Competitive Analysis</span>
                </div>
              </div>
                      <div>
                    <h3 className="text-[#EAE8F3] text-lg font-semibold mb-2">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Sketch</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">InVision</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Miro</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Notion</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Python</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">HTML/CSS</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">JavaScript</span>
                      </div>
                      </div>
                      <div>
                    <h3 className="text-[#EAE8F3] text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">English (Native)</span>
                      <span className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">Thai (Conversational)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
