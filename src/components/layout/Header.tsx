import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/", label: "Hello" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const location = useLocation();
  // Use white text on /home, black elsewhere
  const isHome = location.pathname === "/home";
  const linkBase = isHome ? "text-white" : "text-black";

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
