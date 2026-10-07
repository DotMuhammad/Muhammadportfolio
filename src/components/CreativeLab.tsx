import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Play, Pause, RefreshCw, Move, Radio, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, LabItem } from '../data/portfolio';
import { soundFx } from '../utils/sound';

export const CreativeLab: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Interactive particle canvas for lab-3 / lab items
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particlesActive, setParticlesActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = 140);

    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#38bdf8';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';

      // update and draw
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // lines between close nodes
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      if (particlesActive) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particlesActive]);

  const labItems = PORTFOLIO_DATA.creativeLab;
  const filteredItems = filter === 'All'
    ? labItems
    : labItems.filter(item => item.category === filter);

  const categories = ['All', 'UI Experiments', 'Brand & Graphics', 'Motion & Canvas'];

  return (
    <section
      id="creative-lab"
      className="py-16 sm:py-24 relative overflow-hidden border-t dark:border-slate-800/80 border-slate-200/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 font-bold">
                CREATIVE LAB // 03
              </span>
              <span className="text-slate-500 dark:text-slate-400">Experimental Prototypes</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Creative Lab
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Where technical architecture meets visual experimentation. A curated showcase of UI prototypes, brand identities, kinetic motion physics, and canvas algorithms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setFilter(cat);
                }}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lab Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm dark:shadow-xl hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Interactive Simulated Preview */}
                <div className="my-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 p-3 overflow-hidden">
                  {item.id === 'lab-3' ? (
                    <div className="relative">
                      <canvas ref={canvasRef} className="w-full h-28 block" />
                      <div className="absolute top-1 right-1 flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setParticlesActive(!particlesActive)}
                          className="p-1 rounded bg-slate-900/80 text-slate-400 hover:text-white text-[10px]"
                          title="Pause/Play"
                        >
                          {particlesActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  ) : item.id === 'lab-2' ? (
                    <div className="h-28 flex flex-col items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => soundFx.playSuccess()}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        Magnetic Spring Physics
                      </button>
                      <span className="text-[10px] font-mono text-slate-500">Tap to test audio synth feedback</span>
                    </div>
                  ) : item.id === 'lab-5' ? (
                    <div className="h-28 flex items-end justify-center gap-1 px-4 pb-2">
                      {[20, 45, 80, 55, 95, 70, 30, 85, 60, 40, 90, 75, 50, 35, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-amber-500/20 to-amber-400 rounded-t animate-pulse"
                          style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="h-28 flex flex-col justify-between p-2 font-mono text-[10px] text-slate-400">
                      <div className="flex justify-between border-b border-white/[0.08] pb-1">
                        <span className="text-slate-200">MBQ // DESIGN_TOKEN</span>
                        <span className="text-cyan-400">WCAG AA</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 my-1">
                        <div className="p-1 rounded bg-white/[0.04] text-center font-bold text-white">#090a0f</div>
                        <div className="p-1 rounded bg-white/[0.04] text-center font-bold text-cyan-400">#06b6d4</div>
                        <div className="p-1 rounded bg-white/[0.04] text-center font-bold text-violet-400">#8b5cf6</div>
                      </div>
                      <div className="text-[9px] text-slate-500">Fluid clamp type: clamp(1rem, 2.5vw, 1.5rem)</div>
                    </div>
                  )}
                </div>

                {/* Details Accordion */}
                {expandedId === item.id && (
                  <p className="mb-4 text-xs font-mono text-cyan-300 dark:text-cyan-400 p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    {item.details}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setExpandedId(expandedId === item.id ? null : item.id);
                  }}
                  className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{expandedId === item.id ? 'Hide Details' : 'Inspect Specs'}</span>
                </button>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Interactive</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
