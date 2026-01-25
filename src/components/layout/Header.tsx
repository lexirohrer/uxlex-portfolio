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
      location.pathname === to
        ? "font-bold"
        : "font-medium opacity-80 hover:opacity-100"
    } transition-colors duration-200`;

  const menuButtonLabel = isMenuOpen ? "Close menu" : "Open menu";

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-center pt-4 px-4 sm:px-6 md:px-8">
      {/* Frosted glass floating navigation bar */}
      <div className="w-full max-w-7xl mx-auto">
        <div 
          className="relative rounded-2xl backdrop-blur-xl border transition-all duration-300"
          style={{
            background: location.pathname === "/" && !isScrolledPastHero
              ? 'rgba(255, 255, 255, 0.1)'
              : theme === 'dark'
              ? 'rgba(26, 16, 63, 0.6)'
              : 'rgba(255, 255, 255, 0.7)',
            borderColor: location.pathname === "/" && !isScrolledPastHero
              ? 'rgba(255, 255, 255, 0.2)'
              : theme === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
            {/* Logo on the left */}
            <Link 
              to="/" 
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="Home"
            >
              <span 
                className={`text-xl font-bold font-hagrid transition-colors duration-200 ${
                  location.pathname === "/" && !isScrolledPastHero
                    ? "text-white"
                    : "text-black dark:text-[#EAE8F3]"
                }`}
              >
                uxlex
              </span>
            </Link>

            {/* Navigation links on the right - Desktop */}
            <nav
              className="hidden md:flex gap-1 items-center"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${linkClasses(link.to)} px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    location.pathname === link.to
                      ? 'bg-white/20 dark:bg-white/10'
                      : 'hover:bg-white/10 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${linkBase} p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors md:hidden`}
              aria-label={menuButtonLabel}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu - Frosted glass dropdown */}
          {isMenuOpen && (
            <div 
              className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border backdrop-blur-xl z-[999]"
              style={{
                background: theme === 'dark'
                  ? 'rgba(26, 16, 63, 0.9)'
                  : 'rgba(255, 255, 255, 0.9)',
                borderColor: theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              <nav className="flex flex-col gap-1 py-2 px-2" aria-label="Mobile Primary">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`${linkClasses(
                      link.to
                    )} px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      location.pathname === link.to
                        ? 'bg-white/20 dark:bg-white/10'
                        : 'hover:bg-white/10 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
