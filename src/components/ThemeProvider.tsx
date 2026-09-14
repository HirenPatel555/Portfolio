'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('hiren-portfolio-theme') as Theme | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setThemeState(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark');
      document.documentElement.classList.add('dark');
    } else {
      setThemeState('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const updateDomTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('hiren-portfolio-theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const setTheme = (newTheme: Theme) => {
    updateDomTheme(newTheme);
  };

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Fallback if browser doesn't support View Transitions API or prefers-reduced-motion is active
    if (
      typeof document === 'undefined' ||
      !('startViewTransition' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      updateDomTheme(nextTheme);
      return;
    }

    // Default to center if event coordinates unavailable
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (e && e.clientX !== undefined && e.clientY !== undefined) {
      x = e.clientX;
      y = e.clientY;
    }

    // Calculate maximum radius to furthest corner of viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const doc = document as unknown as {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition) {
      updateDomTheme(nextTheme);
      return;
    }

    const transition = doc.startViewTransition(() => {
      updateDomTheme(nextTheme);
    });

    transition.ready.then(() => {
      // Full-width liquid wave animation sweeping smoothly down from top navbar to bottom
      const clipPath = [
        'ellipse(160% 0% at 50% 0%)',
        'ellipse(160% 160% at 50% 0%)',
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 1200,
          easing: 'cubic-bezier(0.25, 1, 0.4, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div className={mounted && theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

