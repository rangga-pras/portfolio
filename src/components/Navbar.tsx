import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
                  ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md outline outline-1 outline-blue-600' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between h-12 px-4">
        {/* Logo */}
        <div className="cursor-pointer" onClick={handleLogoClick}>
          <img src="/assets/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-5 items-center relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 rounded-xl shadow-md mt-2 px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      )}
    </nav>
  );
}
