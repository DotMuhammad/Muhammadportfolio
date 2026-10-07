import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend' | 'AI & Tools'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
              <span className="w-6 h-px bg-cyan-400" />
              <span>04 · Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Full-stack applications and frontend systems engineered with a focus on performance, clarity, and modern architectural standards.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 border border-white/[0.07] rounded-xl self-start md:self-end">
            {(['All', 'Full-Stack', 'Frontend', 'AI & Tools'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === cat
                    ? 'bg-cyan-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for Deep Case Study / Architecture Inspection */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          >
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d18] border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{selectedProject.category}</span>
                <span>·</span>
                <span>{selectedProject.metrics}</span>
              </div>

              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>

              <p className="mt-2 text-sm text-cyan-200/90 font-medium">
                {selectedProject.tagline}
              </p>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Architectural Highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Technical Features & Architecture
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Stack */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-lg"
                  >
                    <span>View Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-colors border border-white/10"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
