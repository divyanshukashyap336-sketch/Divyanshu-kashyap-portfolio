import React, { useState } from 'react';
import { Award, Flame, BookOpen, Trophy, PlusCircle, CheckCircle2, Calendar } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const categoryIconMap = {
  Certifications: Award,
  Hackathons: Flame,
  Courses: BookOpen,
  "Awards & Recognition": Trophy
};

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards & Recognition'];

  // Flatten items for 'All' or filter by category
  const displayedItems = selectedCategory === 'All'
    ? achievementsData.flatMap(cat => cat.items.map(item => ({ ...item, categoryName: cat.category })))
    : achievementsData
        .filter(cat => cat.category === selectedCategory)
        .flatMap(cat => cat.items.map(item => ({ ...item, categoryName: cat.category })));

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Milestones & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A growing portfolio of hackathon sprints, online certifications, competitive challenges, and recognitions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedItems.map((item, index) => {
            const CatIcon = categoryIconMap[item.categoryName] || Award;
            return (
              <div
                key={index}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                          {item.categoryName}
                        </span>
                        <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{item.issuer}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Expansion Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-dashed border-indigo-200 dark:border-indigo-800/60 text-center max-w-xl mx-auto flex items-center justify-center space-x-3">
          <PlusCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Easily expandable section ready for upcoming hackathon trophies, certifications, and academic awards.
          </p>
        </div>
      </div>
    </section>
  );
}
