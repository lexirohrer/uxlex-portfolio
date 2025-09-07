import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Hello" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the Hello page and if we've scrolled past the hero section
      if (location.pathname === "/") {
        const heroSection = document.querySelector('[data-hero-section]');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          setIsScrolledPastHero(window.scrollY > heroBottom);
        }
      } else {
        setIsScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Use white text on Hello page only when not scrolled past hero, black text otherwise
  const linkBase = (location.pathname === "/" && !isScrolledPastHero) ? "text-white" : "text-black";

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
      <div 
        className="w-full absolute top-0 left-0 h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      <div className="w-full flex justify-end items-center py-4 px-8 relative">
        <nav className="flex gap-8 pointer-events-auto" style={{ fontSize: '1rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={
                linkBase +
                (location.pathname === link.to ? " font-bold" : " font-normal")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
