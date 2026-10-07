import React from 'react';
import { GraduationCap, Target, Heart, CheckCircle2, MapPin, BookOpen, Code, Compass } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Background, Interests & Career Goals
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Get to know my academic foundation at JECRC University and my aspirations in tech.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card 1: Background (Left, span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {aboutData.background.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {personalInfo.college} • {personalInfo.location}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {aboutData.background.description}
              </p>

              {/* Academic Highlights */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Academic Focus & Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>Computer Science Core</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>Problem Solving & Algorithms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>Modern Web Fundamentals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span>Programming in C/C++ & Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Career Goals */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {aboutData.careerGoals.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Aspiration & Vision
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {aboutData.careerGoals.description}
              </p>
            </div>
          </div>

          {/* Card 2: Interests Grid (Right, span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 px-2">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-500">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  My Interests
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  What drives my passion for technology and coding
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="group glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-display font-bold text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {interest.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Quote / Note */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-500/20 dark:border-indigo-500/10 flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-indigo-600 text-white flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">
                "Driven by curiosity, building one practical project at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
