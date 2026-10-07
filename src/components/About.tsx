import React from 'react';
import { Code, Server, Layout, CheckCircle2, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            <span>01 · Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {PORTFOLIO_DATA.about.heading}
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            {PORTFOLIO_DATA.about.subheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Competencies highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2.5 text-cyan-300 font-semibold text-sm mb-1.5">
                    {idx === 0 && <Layout className="w-4 h-4 text-cyan-400" />}
                    {idx === 1 && <Server className="w-4 h-4 text-indigo-400" />}
                    {idx === 2 && <Code className="w-4 h-4 text-sky-400" />}
                    {idx === 3 && <Award className="w-4 h-4 text-emerald-400" />}
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Stats & Philosophy Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              {PORTFOLIO_DATA.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering Principles Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/[0.08] backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Guiding Principles
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Clean Architecture:</strong> Modularity, maintainability, and clear separation of concerns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Performance First:</strong> Fast load times, responsive UI interactions, and minimal bundle sizes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Accessible & Inclusive:</strong> Semantic HTML, keyboard accessibility, and contrast compliance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
