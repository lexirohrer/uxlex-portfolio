import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypewriter = ({ 
  text, 
  speed = 50, 
  delay = 0,
  onComplete 
}: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      // Hide cursor after a short delay
      setTimeout(() => {
        setShowCursor(false);
        onComplete?.();
      }, 1000);
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return { displayedText, isComplete, showCursor };
};
