
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/", label: "Hello" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use white text on /home, black elsewhere
  const isHome = location.pathname === "/home";
  const linkBase = isHome ? "text-white" : "text-black";

  const handleNavigation = (to: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== to) {
      navigate(to);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 flex justify-end items-start p-8 pointer-events-none">
      <nav className="flex gap-8 pointer-events-auto" style={{ fontSize: '1rem' }}>
        {navLinks.map(link => (
          <a
            key={link.to}
            href={link.to}
            onClick={(e) => handleNavigation(link.to, e)}
            className={
              linkBase +
              (location.pathname === link.to ? " font-bold" : " font-normal") +
              " transition-all duration-200 hover:opacity-75 cursor-pointer"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
