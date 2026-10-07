import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10 border-t dark:border-slate-800/80 border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 font-bold">
              JOURNEY // 05
            </span>
            <span className="text-slate-500 dark:text-slate-400">Engineering Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A chronological timeline of software engineering progression and milestones.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-10 border-l border-slate-200 dark:border-slate-800 space-y-12">
          {PORTFOLIO_DATA.journey.map((item) => (
            <div key={item.year} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl hover:border-cyan-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.focus}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400">Stack:</span>
                  {item.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
