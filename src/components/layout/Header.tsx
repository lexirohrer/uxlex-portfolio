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
  const { theme, toggleTheme } = useTheme();

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
          <Link
            to="/"
            className={`${linkBase} font-semibold text-lg tracking-tight`}
            onClick={() => setIsMenuOpen(false)}
          >
            uxlex
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${linkBase} p-2 rounded-full matte-3d-button md:hidden`}
              aria-label={menuButtonLabel}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

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
              <button
                onClick={toggleTheme}
                className={`${linkBase} p-2 rounded-full matte-3d-button`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-[#1A103F]/90 shadow-lg backdrop-blur-md">
            <nav className="flex flex-col gap-1 py-3" aria-label="Mobile Primary">
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
              <button
                onClick={toggleTheme}
                className={`${linkBase} mx-5 mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-2 matte-3d-button`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <>
                    <Moon size={18} />
                    <span>Dark mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={18} />
                    <span>Light mode</span>
                  </>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
