import { useEffect, useState, useRef } from 'react';

const GlassCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const isAnimating = useRef(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      // Start animation if not already running
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }
    };

    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.current.x - prev.x;
        const dy = targetPosition.current.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Stop animating if very close to target
        if (distance < 0.1) {
          isAnimating.current = false;
          return { x: targetPosition.current.x, y: targetPosition.current.y };
        }
        
        // Use higher interpolation factor for smoother, more responsive movement
        // Also use easing based on distance for better feel
        const easing = Math.min(0.35, 0.1 + distance * 0.001);
        const newX = prev.x + dx * easing;
        const newY = prev.y + dy * easing;
        
        requestRef.current = requestAnimationFrame(animate);
        return { x: newX, y: newY };
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isAnimating.current = false;
    };

    // Check if device has touch capability - only show cursor on non-touch devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!hasTouch) {
      window.addEventListener('mousemove', updateCursorPosition, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      isAnimating.current = false;
    };
  }, [isVisible]);

  return (
    <div
      className="glass-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default GlassCursor;

