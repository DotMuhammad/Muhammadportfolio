import React from 'react';
import { Terminal, ArrowUp, Volume2, VolumeX, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface FooterProps {
  onOpenCli: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCli, soundEnabled, onToggleSound }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="border-t dark:border-slate-800/80 border-slate-200 bg-white dark:bg-[#07090e] py-12 sm:py-16 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b dark:border-slate-800/80 border-slate-200">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white block font-sans tracking-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {PORTFOLIO_DATA.personal.title}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            <button onClick={() => scrollTo('home')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollTo('skills')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => scrollTo('featured-project')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Spotlight
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollTo('creative-lab')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Creative Lab
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Socials & Easter Egg Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenCli}
              className="p-2 rounded-xl dark:bg-slate-900 bg-slate-100 hover:dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400 border dark:border-slate-800 border-slate-200 transition-colors cursor-pointer"
              title="Open Developer Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onToggleSound}
              className="p-2 rounded-xl dark:bg-slate-900 bg-slate-100 hover:dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400 border dark:border-slate-800 border-slate-200 transition-colors cursor-pointer"
              title="Toggle Audio Feedback"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl dark:bg-slate-900 bg-slate-100 hover:dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400 border dark:border-slate-800 border-slate-200 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl dark:bg-slate-900 bg-slate-100 hover:dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-400 border dark:border-slate-800 border-slate-200 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>
            &copy; 2026 {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="min-h-[40px] inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium dark:bg-slate-900 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 border dark:border-slate-800 border-slate-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
