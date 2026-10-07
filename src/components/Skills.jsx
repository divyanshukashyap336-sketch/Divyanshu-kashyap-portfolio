import React, { useState } from 'react';
import {
  Code2,
  Palette,
  FileCode,
  Terminal,
  Globe,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2,
  Palette,
  FileCode,
  Terminal,
  Globe,
  Zap
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Programming & Core CS', 'Tools & Workflow'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Core technologies and tools I practice as a computer science student and web developer.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="group glass-panel rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${skill.color} p-2.5 text-white shadow-md shadow-indigo-500/15 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/5">
                      {skill.proficiency}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-[11px]">{skill.category}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
