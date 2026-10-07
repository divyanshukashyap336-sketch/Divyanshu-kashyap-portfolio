import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#070A12] border-t border-slate-200 dark:border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-100 dark:border-white/5">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[6px] flex items-center justify-center font-display font-bold text-xs text-indigo-600 dark:text-indigo-400">
                  DK
                </div>
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {personalInfo.tagline} • {personalInfo.college}, {personalInfo.location}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
