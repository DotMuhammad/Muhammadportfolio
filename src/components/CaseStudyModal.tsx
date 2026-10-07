import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Check } from 'lucide-react';
import { Project } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c0f17] border border-white/10 shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>Case Study</span>
            <span>·</span>
            <span>{project.category}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.displayName}
            </h2>
            <p className="mt-2 text-sm text-cyan-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-white font-mono block mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Architecture Problem & Solution */}
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
                The Core Challenge
              </h3>
              <p className="text-slate-400">{project.caseStudy.problem}</p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
                Architectural Solution
              </h3>
              <p className="text-slate-400">{project.caseStudy.idea}</p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
                System Design & Interface Craft
              </h3>
              <p className="text-slate-400">{project.caseStudy.design}</p>
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Key Technical Deliverables
            </h3>
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="pt-2 border-t border-white/[0.06]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Platform</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-all border border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
