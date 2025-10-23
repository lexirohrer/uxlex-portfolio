import React, { useState, useRef } from 'react';

interface SteamParticleProps {
  delay: number;
  duration: number;
  left: number;
  size: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SteamParticle: React.FC<SteamParticleProps> = ({ 
  delay, 
  duration, 
  left, 
  size, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <div
      className="absolute pointer-events-auto cursor-pointer"
      style={{
        left: `${left}%`,
        top: '0',
        width: `${size}px`,
        height: `${size}px`,
        animation: `steam-rise ${duration}s ease-out infinite`,
        animationDelay: `${delay}s`,
        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full rounded-full bg-white/30 backdrop-blur-sm"
        style={{
          animation: isHovered 
            ? `steam-hover 0.6s ease-in-out infinite` 
            : `steam-wiggle ${duration * 0.5}s ease-in-out infinite`,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      />
    </div>
  );
};

interface SteamAnimationProps {
  className?: string;
}

const SteamAnimation: React.FC<SteamAnimationProps> = ({ className = '' }) => {
  const [hoveredParticles, setHoveredParticles] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleParticleEnter = () => {
    setHoveredParticles(prev => prev + 1);
  };

  const handleParticleLeave = () => {
    setHoveredParticles(prev => Math.max(0, prev - 1));
  };

  // Generate steam particles with varying properties
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 3 + Math.random() * 2, // 3-5 seconds
    left: 20 + Math.random() * 60, // 20-80% from left
    size: 8 + Math.random() * 12, // 8-20px
  }));

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 15,
        filter: hoveredParticles > 0 ? 'brightness(1.2)' : 'brightness(1)',
        transition: 'filter 0.3s ease',
      }}
    >
      {particles.map((particle) => (
        <SteamParticle
          key={particle.id}
          delay={particle.delay}
          duration={particle.duration}
          left={particle.left}
          size={particle.size}
          onMouseEnter={handleParticleEnter}
          onMouseLeave={handleParticleLeave}
        />
      ))}
    </div>
  );
};

export default SteamAnimation;
