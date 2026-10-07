import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Identify active section on scroll
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(sectionId => {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#090D16]/90 backdrop-blur-md shadow-lg shadow-indigo-500/5 border-b border-slate-200/80 dark:border-white/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-white dark:bg-[#0B0F19] rounded-[10px] flex items-center justify-center font-display font-bold text-lg text-indigo-600 dark:text-indigo-400">
                DK
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                {personalInfo.college}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/80 dark:bg-indigo-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/70 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10"
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 animate-fade-in" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600 animate-fade-in" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              aria-label="Open mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 animate-fade-in">
          <nav className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full inline-flex justify-center items-center space-x-2 px-4 py-2.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
