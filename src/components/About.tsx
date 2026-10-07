import React from 'react';
import { Terminal, FileText, Download, ExternalLink, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal, journey } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold">
              ABOUT // 01
            </span>
            <span className="text-slate-400">Who is Muhammad?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Driven by clean architecture, relentless performance, and editorial feel.
          </h2>
        </div>

        {/* 12-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bio Profile Card */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl opacity-20 dark:opacity-100 group-hover:bg-cyan-500/20 transition-all duration-500" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                    {personal.fullName}
                  </h3>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400">
                    @{personal.handle}
                  </span>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-2 border-cyan-500 pl-4 mb-6">
                {personal.quote}
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                I build digital products that prioritize real user utility, zero bloat, and rock-solid code maintainability. Whether architecting distributed web platforms or fine-tuning micro-interactions, I treat every pixel and API request with deliberate intent.
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800/80 text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                    {personal.stats.publicRepos}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Public Repos
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800/80 text-center">
                  <span className="block text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {personal.stats.liveWebApps}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Live Web Apps
                  </span>
                </div>
              </div>
            </div>

            {/* Resume & GitHub Trigger Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block">
                    Curriculum Vitae / Resume
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                    Direct PDF & ATS specifications
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      onOpenResume();
                    }}
                    className="inline-flex items-center justify-center min-h-[38px] px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-[0.98] gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      onOpenResume();
                    }}
                    className="inline-flex items-center justify-center min-h-[38px] px-3 py-1.5 rounded-xl border border-slate-300/80 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium text-xs transition-all shadow-xs active:scale-[0.98] gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Want to review verified GitHub commits?
                </span>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center justify-center min-h-[38px] px-3 gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <span>Inspect Activity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Engineering with Purpose, Craft, and Resilience
              </h3>
              <p>
                My engineering journey began with an insatiable drive to understand how interactive web systems operate under load. Over the years, that exploration crystallized into a disciplined practice of delivering production-grade web systems with React, Next.js, and TypeScript.
              </p>
              <p>
                I have built full-lifecycle platforms including <strong className="text-slate-900 dark:text-white font-semibold">PulseFlow Analytics</strong>, taking it from an initial telemetry concept to an active, responsive platform with sub-50ms query latencies and modular reporting dashboards.
              </p>
              <p>
                Across every project, I pair architectural rigor—strict typing, modular codebases, clean APIs—with intuitive frontend aesthetics that keep users immersed.
              </p>
            </div>

            {/* Development Journey Timeline */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                Development Journey & Evolution
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {journey.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0 self-start sm:self-auto font-semibold">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm pt-2">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                  <Layers className="w-4 h-4 text-cyan-500" />
                  <span>Cross-Platform Depth</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-normal text-xs sm:text-sm">
                  Fluid in modern React/TypeScript web applications and scalable Node.js backend architectures.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                  <span>Verified & Honest</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-normal text-xs sm:text-sm">
                  Committed to clean codebases, verifiable git histories, and transparent implementation standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
