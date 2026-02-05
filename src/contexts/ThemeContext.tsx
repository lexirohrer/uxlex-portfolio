import React, { useEffect } from 'react';

// Site is always in dark mode - this provider just ensures the dark class is applied
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    // Ensure dark class is always applied
    root.classList.remove('light');
    root.classList.add('dark');
  }, []);

  return <>{children}</>;
};

