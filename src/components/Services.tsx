import React from 'react';
import { Code2, Palette, Layers, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "Build fast, scalable, responsive web applications engineered for cross-device performance and high conversions.",
      features: ["Next.js & React SPA/SSR", "Responsive mobile-first layouts", "SEO & Core Web Vitals optimization"],
      icon: <Code2 className="w-5 h-5 text-cyan-500" />
    },
    {
      number: "02",
      title: "UI / UX Development",
      description: "Transform creative designs into polished, interactive interfaces with purposeful micro-animations.",
      features: ["Design system architecture", "Framer Motion micro-interactions", "Accessible WCAG AA standards"],
      icon: <Palette className="w-5 h-5 text-indigo-500" />
    },
    {
      number: "03",
      title: "Full-Stack Solutions",
      description: "Develop complete applications from frontend clients to backend APIs, authentication, and database orchestration.",
      features: ["Node.js & Express REST APIs", "PostgreSQL & Prisma data modeling", "Secure JWT & OAuth 2.0 auth flows"],
      icon: <Layers className="w-5 h-5 text-sky-500" />
    },
    {
      number: "04",
      title: "Performance & Optimization",
      description: "Audit and eliminate frontend bottlenecks, streamline data fetching, and enhance system reliability.",
      features: ["Lighthouse 95+ score targets", "Database query optimization", "Code splitting & asset compression"],
      icon: <Zap className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 relative z-10 border-t dark:border-slate-800/80 border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 font-bold">
              CAPABILITIES
            </span>
            <span className="text-slate-500 dark:text-slate-400">Core Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Delivering robust end-to-end engineering from initial system design to high-fidelity frontend execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-all">
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm text-slate-400 font-semibold group-hover:text-cyan-500 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
