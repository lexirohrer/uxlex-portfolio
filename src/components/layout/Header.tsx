import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { to: "/portfolio", label: "projects" },
  { to: "/resume", label: "about" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Use light text colors for all pages (site has dark background)
  const linkBase = "text-[#EAE8F3]";

  const linkClasses = (to: string) => {
    // Handle "/portfolio" link being active on both "/" and "/portfolio"
    const isActive = to === "/portfolio" 
      ? (location.pathname === "/" || location.pathname === "/portfolio")
      : location.pathname === to;
    
    return `${linkBase} ${
      isActive
        ? "font-bold"
        : "font-medium opacity-80 hover:opacity-100"
    } transition-colors duration-200`;
  };

  const menuButtonLabel = isMenuOpen ? "Close menu" : "Open menu";

  return (
    <header className="w-full fixed top-0 left-0 z-[100] flex items-center justify-center pt-4 px-4 sm:px-6 md:px-8">
      {/* Frosted glass floating navigation bar */}
      <div className="w-full max-w-7xl mx-auto">
        <div 
          className={`relative transition-all duration-300 ${isMobile ? '' : 'md:rounded-full md:backdrop-blur-xl'}`}
          style={{
            background: isMobile 
              ? 'transparent' 
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isMobile ? 'none' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
            backdropFilter: isMobile ? 'none' : undefined,
            WebkitBackdropFilter: isMobile ? 'none' : undefined,
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 md:justify-between">
            {/* Logo on the left - Hidden on mobile */}
            <Link 
              to="/" 
              className="hidden md:flex items-center gap-2 flex-shrink-0"
              aria-label="Home"
            >
              <span className="text-xl font-normal font-hagrid transition-colors duration-200 text-[#EAE8F3]">
                uxlex.com
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
                  className={`${linkClasses(link.to)} px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                    (link.to === "/portfolio" && (location.pathname === "/" || location.pathname === "/portfolio")) || 
                    (link.to !== "/portfolio" && location.pathname === link.to)
                      ? 'bg-white/10'
                      : 'hover:bg-white/10 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button - Right aligned on mobile */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`${linkBase} p-2 rounded-full hover:bg-white/10 hover:bg-white/5 transition-colors md:hidden ml-auto`}
              aria-label={menuButtonLabel}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu - Frosted glass dropdown */}
          {isMenuOpen && (
            <div 
              className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl backdrop-blur-xl z-[999]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
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
                    )} px-4 py-3 rounded-full transition-all duration-200 cursor-pointer ${
                      (link.to === "/portfolio" && (location.pathname === "/" || location.pathname === "/portfolio")) || 
                      (link.to !== "/portfolio" && location.pathname === link.to)
                        ? 'bg-white/10'
                        : 'hover:bg-white/10 hover:bg-white/5'
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
