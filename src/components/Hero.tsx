import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs text-slate-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
            {PORTFOLIO_DATA.personal.availability}
          </span>
        </div>

        {/* Name Header */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
            {PORTFOLIO_DATA.personal.name}
          </h1>

          {/* Subtitle Role */}
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
            <span>{PORTFOLIO_DATA.personal.title}</span>
          </div>

          {/* Supporting Paragraph */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            {PORTFOLIO_DATA.personal.headline}
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 hover:brightness-110 shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Quick Social Links */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.05] hover:border-cyan-400/30 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.05] hover:border-cyan-400/30 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            aria-label="Send direct email"
            className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.05] hover:border-cyan-400/30 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-xs text-slate-400 font-mono">
            {PORTFOLIO_DATA.personal.location}
          </span>
        </div>

        {/* Mini interactive terminal card showcasing tech stack */}
        <div className="mt-14 w-full max-w-2xl bg-slate-950/70 border border-white/[0.08] rounded-xl p-4 sm:p-5 text-left font-mono text-xs shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-500 text-[11px]">mbq-stack.config.ts</span>
            </div>
            <span className="text-[10px] text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> production-ready
            </span>
          </div>

          <div className="space-y-1 text-slate-300">
            <p className="text-slate-500">
              <span className="text-purple-400">const</span> developer = &#123;
            </p>
            <p className="pl-4">
              <span className="text-sky-300">name</span>: <span className="text-emerald-300">"{PORTFOLIO_DATA.personal.name}"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">role</span>: <span className="text-emerald-300">"Full-Stack Engineer & Builder"</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">coreStack</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"PostgreSQL"</span>],
            </p>
            <p className="pl-4">
              <span className="text-sky-300">mindset</span>: <span className="text-emerald-300">"Clean code, seamless UX, scalable architectures"</span>
            </p>
            <p className="text-slate-500">&#125;;</p>
          </div>
        </div>
      </div>
    </section>
  );
};
