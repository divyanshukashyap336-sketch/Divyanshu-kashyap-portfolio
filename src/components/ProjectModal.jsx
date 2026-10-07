import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 animate-fade-in my-8">
        {/* Header Ribbon */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Bar */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Full Description / What It Does */}
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.fullDescription || project.whatItDoes}
          </p>

          {/* Key Architectural Highlights */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Features & Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Technologies & Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span>Close Window</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
