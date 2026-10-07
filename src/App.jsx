import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek modern dark theme
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        {/* Section 1: Home */}
        <Hero />

        {/* Section 2: About (Background, Interests, Career Goals) */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
