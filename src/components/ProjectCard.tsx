import React from 'react';
import { ExternalLink, Github, BookOpen, BarChart2, ShoppingBag, Sparkles, Terminal, Layers } from 'lucide-react';
import { Project } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const renderMockup = () => {
    switch (project.mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-200 font-semibold">{project.displayName}</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 99.9% uptime
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">API Latency</div>
                <div className="text-white font-bold text-xs mt-0.5">38ms</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">Throughput</div>
                <div className="text-white font-bold text-xs mt-0.5">14.2k/s</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">Nodes</div>
                <div className="text-cyan-300 font-bold text-xs mt-0.5">64</div>
              </div>
            </div>
            <div className="h-10 w-full flex items-end gap-1 px-1 bg-white/[0.02] rounded border border-white/[0.04]">
              {[35, 55, 45, 75, 60, 90, 70, 95, 80, 100, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/90 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-200 font-semibold">{project.displayName}</span>
              </div>
              <span className="text-slate-400">Cart Sync: Active</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] space-y-1">
                <div className="w-full h-10 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-300 font-bold">
                  SKU-108
                </div>
                <div className="text-slate-200 font-semibold text-[9px]">Mechanical Matrix Pro</div>
                <div className="text-emerald-400">$189.00</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] space-y-1">
                <div className="w-full h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-300 font-bold">
                  SKU-109
                </div>
                <div className="text-slate-200 font-semibold text-[9px]">Ergo Desk Surface</div>
                <div className="text-emerald-400">$340.00</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-300 pt-1">
              <span>Checkout Pipeline: Instant SSL</span>
              <span className="text-emerald-400 font-bold">Ready</span>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-200 font-semibold">{project.displayName}</span>
              </div>
              <span className="text-purple-300">TTFT: &lt; 150ms</span>
            </div>
            <div className="my-2 p-2.5 rounded bg-white/[0.03] border border-white/[0.05] space-y-1.5">
              <div className="text-slate-300 leading-snug">
                <span className="text-purple-400">&gt; Prompt: </span> Generate distributed schema with indexing
              </div>
              <div className="text-slate-400 pl-2 border-l border-purple-500/40 text-[9px]">
                Generated 4 collections, 8 compound indexes, sub-2ms response time verified.
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-slate-500">Vector Recall: Active</span>
              <span className="text-cyan-400 font-semibold">Privacy Mode: ON</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-200 font-semibold">{project.displayName}</span>
              </div>
              <span className="text-amber-400">Offline PWA</span>
            </div>
            <div className="my-2 p-2 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] text-slate-300">
              <p className="text-emerald-400">&#10003; JSON schema validation: Pass</p>
              <p className="text-cyan-400">&#10003; Regex engine: 0.1ms execution</p>
              <p className="text-amber-400">&#10003; Cryptographic verification: Pass</p>
            </div>
            <div className="text-[9px] text-slate-500">
              Zero telemetry · 100% Client-Side Safe
            </div>
          </div>
        );
    }
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111422] border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group">
      <div>
        {/* Preview header */}
        <div className={`relative h-48 w-full bg-gradient-to-br ${project.previewGradient} border-b border-slate-200 dark:border-slate-800 overflow-hidden`}>
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
          <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
            {renderMockup()}
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-4">
          {/* Category & Live Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
              {project.category}
            </span>

            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live App</span>
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            {project.displayName}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 mt-4">
        <button
          type="button"
          onClick={() => {
            soundFx.playClick();
            onOpenCaseStudy(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study</span>
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-600 dark:text-cyan-400 hover:text-slate-950 transition-colors border border-cyan-500/20 cursor-pointer"
              title="Launch Live App"
              aria-label="Launch Live App"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-800 cursor-pointer"
            title="Inspect Source Code"
            aria-label="Inspect Source Code"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
