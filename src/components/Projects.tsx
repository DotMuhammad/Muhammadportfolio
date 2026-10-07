import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Live Apps', 'Full-Stack', 'Frontend', 'AI & Tools'];

  const allProjects = PORTFOLIO_DATA.projects;
  const filteredProjects = allProjects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Live Apps') return Boolean(p.liveUrl);
    if (filter === 'Full-Stack') return p.category === 'Full-Stack';
    if (filter === 'Frontend') return p.category === 'Frontend';
    if (filter === 'AI & Tools') return p.category === 'AI & Tools';
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden border-t dark:border-slate-800/80 border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 font-bold">
                PROJECTS // 02
              </span>
              <span className="text-slate-500 dark:text-slate-400">Engineering Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects & Client Platforms
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              A curated collection of production web platforms, distributed cloud engines, and interactive developer utilities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setFilter(cat);
                }}
                className={`min-h-[40px] px-3.5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
