import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Layers, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Education & Learning Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Building strong theoretical computer science foundations coupled with modern applied engineering.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                  <Award className="w-3.5 h-3.5" />
                  <span>{educationData.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-medium text-slate-600 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    {educationData.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    {educationData.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    {educationData.period}
                  </span>
                </div>
              </div>

              {/* Institution Emblem */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-800 p-0.5 shadow-lg shadow-indigo-500/20 self-start">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center text-white">
                  <GraduationCap className="w-8 h-8 text-indigo-400 mb-1" />
                  <span className="text-[9px] font-bold tracking-widest text-slate-300">JECRC</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {educationData.description}
              </p>

              {/* Learning Areas */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span>Relevant Learning Areas & Coursework</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {educationData.learningAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-slate-800/70"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
