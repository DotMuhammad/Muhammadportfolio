import React, { useState } from 'react';
import { 
  Code, Layers, Globe, Palette, FileCode, Sparkles, 
  Server, Cpu, Network, Lock, Database, Boxes, 
  Flame, GitBranch, Container, Cloud, Terminal, Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-cyan-400 shrink-0" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Container': return <Container {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      default: return <Code {...props} />;
    }
  };

  const categories = PORTFOLIO_DATA.skillCategories;
  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter((c) => c.name.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <span className="w-6 h-px bg-cyan-400" />
            <span>03 · Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            The programming languages, frameworks, and tools I use to build scalable production applications.
          </p>
        </div>

        {/* Interactive Category Filter Tabs (Zero-pill segmented style) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 border border-white/[0.07] rounded-xl mb-12 w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-400 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(cat.name.toLowerCase())}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === cat.name.toLowerCase()
                  ? 'bg-cyan-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/[0.06] pb-3">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.name}
                </h3>
                <span className="text-xs text-slate-400 mt-1 sm:mt-0">
                  {category.description}
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/30 border border-white/[0.06] hover:border-cyan-400/30 hover:bg-slate-900/60 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-colors">
                          {renderIcon(skill.iconName)}
                        </div>
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-300">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-8">
                      {skill.description}
                    </p>
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
