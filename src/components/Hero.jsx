import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Sparkles, MapPin, GraduationCap, Code2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Academic Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300 shadow-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>B.Tech First Year • Computer Science Core</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                <span className="block">{personalInfo.name}</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-3xl sm:text-5xl lg:text-6xl capitalize">
                  {personalInfo.role}
                </span>
              </h1>
            </div>

            {/* Tagline Subtitle */}
            <p className="text-base sm:text-xl font-medium text-slate-700 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500 flex-shrink-0" />
              <span>{personalInfo.tagline}</span>
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed bg-slate-100/60 dark:bg-white/5 p-4 rounded-2xl border border-slate-200/60 dark:border-white/5">
              "{personalInfo.aboutShort}"
            </p>

            {/* Location & College Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 font-medium">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                {personalInfo.college}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/5 font-medium">
                <MapPin className="w-4 h-4 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Call To Action Buttons (View My Projects & Contact Me) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Strip */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                title={`GitHub: ${personalInfo.githubHandle}`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                title={`LinkedIn: ${personalInfo.linkedinHandle}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                title={`Email: ${personalInfo.email}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Outer decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-35 animate-pulse-glow" />

              {/* Main Profile Card */}
              <div className="relative rounded-3xl p-6 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-6">
                {/* Profile Visual Monogram */}
                <div className="relative mx-auto w-32 h-32 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-1 shadow-lg shadow-indigo-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <div className="text-4xl font-display font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-200">
                      DK
                    </div>
                    <span className="text-[10px] tracking-widest text-indigo-300 mt-1 uppercase font-mono">
                      CS CORE
                    </span>
                    <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none" />
                  </div>
                </div>

                {/* Identity Text */}
                <div className="text-center space-y-1">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {personalInfo.college}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalInfo.location}
                  </p>
                </div>

                {/* Info Stats Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5 text-center"
                    >
                      <div className="text-sm sm:text-base font-bold font-display text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge 1: Web Developer */}
              <div className="absolute -top-4 -left-6 sm:-left-8 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-white/10 flex items-center space-x-2.5 animate-float">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="pr-1 text-left">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">Web Developer</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Modern UI & React</span>
                </div>
              </div>

              {/* Floating Badge 2: CS Student */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-white/10 flex items-center space-x-2.5 animate-float [animation-delay:2s]">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="pr-1 text-left">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">CS Core Student</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">JECRC University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
