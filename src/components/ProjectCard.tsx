import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle, Sparkles, BarChart2, ShoppingBag, Terminal, X } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render stylized interactive UI mockup for the project preview
  const renderMockup = () => {
    switch (project.mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-200 font-semibold">PulseFlow // Analytics</span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 99.8% uptime
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">API Latency</div>
                <div className="text-white font-bold text-xs mt-0.5">38ms</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">Requests/s</div>
                <div className="text-white font-bold text-xs mt-0.5">14.2k</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-slate-500 text-[9px]">Active Nodes</div>
                <div className="text-cyan-300 font-bold text-xs mt-0.5">64</div>
              </div>
            </div>
            <div className="h-10 w-full flex items-end gap-1.5 px-1 bg-white/[0.02] rounded border border-white/[0.04]">
              {[35, 50, 45, 70, 60, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 rounded-t"
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
                <span className="text-slate-200 font-semibold">Aura // Store Engine</span>
              </div>
              <span className="text-slate-400">Cart (3 items)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] space-y-1">
                <div className="w-full h-10 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-300 font-bold">
                  SKU-091
                </div>
                <div className="text-slate-200 font-semibold text-[9px]">Carbon Fiber Desk</div>
                <div className="text-emerald-400">$289.00</div>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05] space-y-1">
                <div className="w-full h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-300 font-bold">
                  SKU-092
                </div>
                <div className="text-slate-200 font-semibold text-[9px]">Ergo Keypad V2</div>
                <div className="text-emerald-400">$149.00</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-300 pt-1">
              <span>Checkout status: Instant SSL</span>
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
                <span className="text-slate-200 font-semibold">Nova // Neural Workspace</span>
              </div>
              <span className="text-purple-300">Tokens/s: 140</span>
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
              <span className="text-slate-500">Model: Gemini 2.5 Flash</span>
              <span className="text-cyan-400 font-semibold">Export: Markdown</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[10px] text-slate-400 select-none">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-200 font-semibold">Apex // Developer Toolkit</span>
              </div>
              <span className="text-amber-400">Offline PWA</span>
            </div>
            <div className="my-2 p-2 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] text-slate-300">
              <p className="text-emerald-400">&#10003; JSON validation: Schema pass</p>
              <p className="text-cyan-400">&#10003; Regex engine: 0.1ms execution</p>
              <p className="text-amber-400">&#10003; JWT signature: HS256 Verified</p>
            </div>
            <div className="text-[9px] text-slate-500">
              Web Worker memory: 12MB / 0 overhead
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-cyan-500/30 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Visual Mockup Preview Header */}
      <div className={`relative h-48 w-full bg-gradient-to-br ${project.previewGradient} border-b border-white/[0.06] overflow-hidden`}>
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
        
        {/* Render simulated real interface preview */}
        <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
          {renderMockup()}
        </div>

        {/* Hover overlay quick actions */}
        <div className={`absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="px-3.5 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-lg cursor-pointer"
          >
            Project Details
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
            aria-label={`View source code of ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category & Metrics (Zero-pill text styling) */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-mono text-cyan-400">{project.category}</span>
            {project.metrics && (
              <span className="text-[11px] text-slate-400">{project.metrics}</span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack items: clean text with dividers */}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-slate-300 font-mono text-[11px]">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-slate-600" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Card Footer with Details Trigger */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer"
          >
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white p-1 transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white p-1 transition-colors"
              aria-label="Live application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
