'use client';

import { createContext, useContext, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('theme-latte')
        ? 'light'
        : 'dark';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.remove('theme-dark');
      html.classList.add('theme-latte');
      setTheme('light');
    } else {
      html.classList.remove('theme-latte');
      html.classList.add('theme-dark');
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
