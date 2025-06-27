import { useState, useCallback } from 'react';

export function useAnimatedLogo() {
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  const handleLogoClick = useCallback(() => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 3500);
  }, []);

  return { isLogoAnimating, handleLogoClick };
}
