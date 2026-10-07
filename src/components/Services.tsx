import React from 'react';
import { Code2, Palette, Layers, Zap, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            <span>02 · Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            What I Do
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Delivering robust end-to-end engineering from initial system design to high-fidelity frontend execution.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-slate-900/40 border border-white/[0.07] hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-sm text-slate-500 font-semibold group-hover:text-cyan-400 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
