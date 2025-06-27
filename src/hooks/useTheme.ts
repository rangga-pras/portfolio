import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const updateTheme = useCallback((dark: boolean) => {
    document.documentElement.classList[dark ? 'add' : 'remove']('dark');
  }, []);

  useEffect(() => {
    updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark, updateTheme]);

  return { isDark, setIsDark };
}
