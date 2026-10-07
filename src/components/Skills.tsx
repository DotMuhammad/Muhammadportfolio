import React, { useState } from 'react';
import { Sparkles, Network, LayoutGrid, Code, Layers, Globe, Palette, Server, Cpu, Database, Boxes, Container, GitBranch, Check } from 'lucide-react';
import { PORTFOLIO_DATA, SkillNode } from '../data/portfolio';
import { soundFx } from '../utils/sound';

export const Skills: React.FC = () => {
  const [viewMode, setViewMode] = useState<'ecosystem' | 'grid'>('ecosystem');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Databases & Cloud', 'Tools & DevOps'];

  const allSkills = PORTFOLIO_DATA.skills;
  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-blue-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Palette': return <Palette className="w-4 h-4 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Server': return <Server className="w-4 h-4 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-rose-400" />;
      case 'Database': return <Database className="w-4 h-4 text-indigo-400" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-teal-400" />;
      case 'Container': return <Container className="w-4 h-4 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-400" />;
      default: return <Code className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden border-t dark:border-slate-800/80 border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & View Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Technology Matrix
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore my technical architecture as an interconnected ecosystem. Hover or tap any node to trace relationships and view implementation depth.
            </p>
          </div>

          {/* Ecosystem vs Grid View Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setViewMode('ecosystem');
              }}
              className={`min-h-[40px] flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                viewMode === 'ecosystem'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Ecosystem Nodes</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setViewMode('grid');
              }}
              className={`min-h-[40px] flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              className={`min-h-[40px] inline-flex items-center justify-center px-3.5 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ecosystem Nodes View */}
        {viewMode === 'ecosystem' ? (
          <div className="rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm dark:shadow-xl relative overflow-hidden">
            {/* Instruction banner */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Hover or click any node to inspect interconnectivity</span>
              </span>
              <span className="hidden sm:inline">Active Nodes: {filteredSkills.length}</span>
            </div>

            {/* Nodes Grid Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill?.id === skill.id;
                const isRelated = selectedSkill?.relations.includes(skill.id);

                return (
                  <div
                    key={skill.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedSkill(isSelected ? null : skill);
                    }}
                    onMouseEnter={() => {
                      soundFx.playHover();
                      setSelectedSkill(skill);
                    }}
                    className={`p-4 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-[1.02]'
                        : isRelated
                        ? 'bg-indigo-500/10 border-indigo-400/50 text-indigo-200 scale-[1.01]'
                        : 'bg-white dark:bg-slate-950/70 border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        {getIcon(skill.iconName)}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 font-semibold">
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm tracking-tight">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {skill.experienceYears}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Details Box */}
            {selectedSkill && (
              <div className="mt-8 p-5 rounded-2xl bg-slate-950/90 border border-cyan-500/30 text-white font-mono text-xs space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                  <span className="text-cyan-400 font-bold text-sm">{selectedSkill.name}</span>
                  <span className="text-emerald-400 font-semibold">{selectedSkill.category} // {selectedSkill.level}</span>
                </div>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  {selectedSkill.description}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 flex flex-wrap gap-2 items-center">
                  <span>Connected Architecture:</span>
                  {selectedSkill.relations.map((rel) => (
                    <span key={rel} className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {rel}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl hover:border-cyan-500/40 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-400/50 transition-colors">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">{skill.category}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Experience: {skill.experienceYears}</span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
