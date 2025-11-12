import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Hello" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the Hello page (now IndexNew) and if we've scrolled past the hero section
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Use white text on Hello page (now IndexNew) only when not scrolled past hero, otherwise use theme-appropriate colors
  const linkBase =
    location.pathname === "/" && !isScrolledPastHero
      ? "text-white"
      : "text-black dark:text-[#EAE8F3]";

  const linkClasses = (to: string) =>
    `${linkBase} ${
      location.pathname === to ? "font-semibold" : "font-medium"
    } transition-colors duration-200`;

  const menuButtonLabel = isMenuOpen ? "Close menu" : "Open menu";

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
      {/* White gradient for light mode only */}
      <div 
        className="w-full absolute top-0 left-0 h-full dark:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 60%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      {/* No background gradient in dark mode - backdrop blur provides darkening when overlapping */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-4 relative">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${linkBase} p-2 rounded-full matte-3d-button md:hidden`}
              aria-label={menuButtonLabel}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link
              to="/"
              className={`${linkBase} font-semibold text-lg tracking-tight`}
              onClick={() => setIsMenuOpen(false)}
            >
              uxlex
            </Link>
          </div>

          <nav
            className="hidden md:flex gap-6 items-center pointer-events-auto text-base"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClasses(link.to)}
              >
                {link.label}
              </Link>
            ))}
            <div className="hidden" aria-hidden="true">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-[68px] left-4 right-4 rounded-3xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-[#1A103F]/85 shadow-2xl backdrop-blur-xl z-[999]">
            <nav className="flex flex-col gap-1 py-3 max-h-[70vh] overflow-y-auto" aria-label="Mobile Primary">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${linkClasses(
                    link.to
                  )} px-5 py-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="hidden" aria-hidden="true">
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                <span className="sr-only">Theme toggle hidden</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
