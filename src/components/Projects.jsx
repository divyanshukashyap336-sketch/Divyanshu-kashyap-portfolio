import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Projects & Builds
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Practical builds highlighting responsive design, frontend engineering, and clean code.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Project Header Banner */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Decorative background grid and glow */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl group-hover:bg-indigo-500/50 transition-colors" />

                  {/* Top Tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-white border border-white/10">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{project.badge || 'Project'}</span>
                    </span>
                    <span className="text-xs font-mono text-indigo-300">0{index + 1}</span>
                  </div>

                  {/* Title & Category */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-indigo-200 block mt-1 font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* What it does / Description */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      What It Does:
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[4.5rem]">
                      {project.whatItDoes}
                    </p>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center space-x-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub Link & Live Demo */}
              <div className="p-6 pt-0 mt-2 flex flex-col sm:flex-row items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
