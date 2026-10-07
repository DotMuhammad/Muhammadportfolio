import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            <span>05 · Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Experience & Journey
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            A chronological timeline of my software engineering progression, technical focus areas, and practical development milestones.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div key={item.year} className="relative group">
              {/* Timeline indicator node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-white/[0.07] hover:border-cyan-500/25 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.focus}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, achIdx) => (
                    <div key={achIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Text Divider */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-500 font-mono text-[11px]">Stack:</span>
                  {item.technologies.map((tech, techIdx) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-300 font-mono text-[11px]">{tech}</span>
                      {techIdx < item.technologies.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
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
