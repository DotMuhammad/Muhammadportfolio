import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Download, Github, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const specialties = PORTFOLIO_DATA.personal.specialties;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [specialties.length]);

  const scrollTo = (id: string) => {
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (md:col-span-7) */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1
                id="hero-main-heading"
                className="text-[clamp(2.4rem,7.5vw,4.8rem)] md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08] break-words"
              >
                <span className="block font-bold">
                  {PORTFOLIO_DATA.personal.firstName}{' '}
                  <span className="font-normal text-slate-400 dark:text-slate-500">
                    {PORTFOLIO_DATA.personal.lastName}
                  </span>
                </span>
                <span className="block font-extrabold tracking-tight mt-1 leading-snug text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-400 min-h-[1.4em]">
                  {specialties[currentSpecialtyIndex]}
                </span>
              </h1>

              {/* Tagline bullet line */}
              <div className="text-sm sm:text-base md:text-lg font-mono text-cyan-700 dark:text-cyan-400 font-semibold flex flex-wrap items-center gap-2 pt-1">
                <span>{PORTFOLIO_DATA.personal.taglineLine1}</span>
                <span>•</span>
                <span>{PORTFOLIO_DATA.personal.availability}</span>
              </div>
            </div>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
              {/* View My Work */}
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="min-h-[44px] px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] hover:shadow-cyan-500/35"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Contact Me */}
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="min-h-[44px] px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300/90 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] hover:border-cyan-500/40"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>

              {/* Download Resume & GitHub */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    onOpenResume();
                  }}
                  className="flex-1 sm:flex-none min-h-[44px] px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] hover:border-cyan-500/40 shadow-xs"
                >
                  <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Download Resume</span>
                </button>

                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="min-w-[44px] min-h-[44px] p-3.5 rounded-xl bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 hover:border-cyan-500/40 shadow-xs"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-lg border-t border-slate-200 dark:border-slate-800/80 font-mono text-xs">
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  {PORTFOLIO_DATA.personal.stats.publicRepos}
                </span>
                <span className="text-slate-500 dark:text-slate-400">Public Repos</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 dark:text-white">Active</span>
                <span className="text-slate-500 dark:text-slate-400">GitHub Presence</span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-xl font-bold text-slate-900 dark:text-white">
                  {PORTFOLIO_DATA.personal.stats.commitment}
                </span>
                <span className="text-slate-500 dark:text-slate-400">Commitment</span>
              </div>
            </div>

            {/* Mobile Portrait View */}
            <div className="flex md:hidden justify-center items-center pt-4 pb-2 my-2">
              <PortraitCard className="w-[75vw] max-w-[320px]" />
            </div>
          </div>

          {/* Right Column (md:col-span-5 Desktop) */}
          <div className="hidden md:flex md:col-span-5 items-center justify-center relative mt-8 md:mt-0">
            <PortraitCard className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[390px] xl:max-w-[420px]" />
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-14 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-mono">
          <span className="text-[10px] tracking-widest uppercase">Explore Works</span>
          <div className="animate-bounce">
            <ChevronDown className="w-4 h-4 text-cyan-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

// High-fidelity Developer Portrait Card matching reference Ww
const PortraitCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative aspect-[4/5] group ${className}`}>
      {/* Ambient Pulsing Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-violet-500/20 dark:from-cyan-500/20 dark:via-blue-500/15 dark:to-indigo-500/20 rounded-3xl lg:rounded-[2.25rem] blur-2xl group-hover:blur-3xl group-hover:opacity-100 opacity-25 dark:opacity-70 transition-all duration-700 pointer-events-none" />

      {/* Frame Container */}
      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden border border-slate-200/90 dark:border-cyan-500/30 shadow-lg dark:shadow-cyan-950/40 transition-all duration-500 ease-out md:group-hover:scale-[1.02] md:group-hover:-translate-y-1 bg-gradient-to-br from-[#0c101d] via-[#090c15] to-[#121729] ring-1 ring-black/5 dark:ring-white/10 flex flex-col justify-between p-6 select-none">
        {/* Top Header in Card */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
            <span className="font-mono text-[11px] text-cyan-300 font-bold">MBQ.STUDIO</span>
          </div>
          <span className="font-mono text-[10px] text-slate-400">NODE // ACTIVE</span>
        </div>

        {/* Center Graphic */}
        <div className="relative my-auto flex flex-col items-center text-center space-y-4 py-4 z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
              <Sparkles className="w-10 h-10 animate-pulse text-cyan-300" />
            </div>
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 font-bold">
              VERIFIED
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.fullName}
            </h3>
            <p className="text-xs text-cyan-300/80 font-mono">
              Full-Stack Architect
            </p>
          </div>

          <div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 font-mono text-[10px] text-slate-300 text-left space-y-1">
            <div className="flex justify-between text-slate-500 border-b border-white/[0.06] pb-1">
              <span>CORE ARCHITECTURE</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <p className="text-cyan-300 pt-0.5">&gt; React 19 • Next.js • TypeScript</p>
            <p className="text-indigo-300">&gt; Node.js • Express • PostgreSQL</p>
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-[10px] font-mono text-slate-400 z-10">
          <span>{PORTFOLIO_DATA.personal.location}</span>
          <span className="text-emerald-400 font-bold">100% Available</span>
        </div>

        {/* Glass reflection gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/[0.03] to-white/[0.04] pointer-events-none" />
      </div>
    </div>
  );
};
