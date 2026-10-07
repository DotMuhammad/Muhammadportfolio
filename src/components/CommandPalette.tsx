import React, { useState, useEffect } from 'react';
import { Search, Home, User, Cpu, Briefcase, Sparkles, Mail, FileText, Volume2, VolumeX, Moon, Sun, Terminal, ExternalLink, X } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenCli: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onToggleSound: () => void;
  soundEnabled: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenCli,
  isDarkMode,
  onToggleTheme,
  onToggleSound,
  soundEnabled,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (id: string) => {
    onClose();
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const commands = [
    {
      id: 'home',
      title: 'Navigate to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-cyan-400" />,
      action: () => scrollTo('home'),
    },
    {
      id: 'about',
      title: 'Navigate to About & Journey',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-blue-400" />,
      action: () => scrollTo('about'),
    },
    {
      id: 'skills',
      title: 'Navigate to Skills Matrix',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => scrollTo('skills'),
    },
    {
      id: 'projects',
      title: 'Navigate to Featured Projects',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      action: () => scrollTo('projects'),
    },
    {
      id: 'creative-lab',
      title: 'Navigate to Creative Lab',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      action: () => scrollTo('creative-lab'),
    },
    {
      id: 'contact',
      title: 'Navigate to Contact & Inquiry',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => scrollTo('contact'),
    },
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        soundFx.playClick();
        onOpenResume();
      },
    },
    {
      id: 'cli',
      title: 'Open Developer Terminal Drawer',
      category: 'Developer',
      shortcut: 'T',
      icon: <Terminal className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        soundFx.playClick();
        onOpenCli();
      },
    },
    {
      id: 'theme',
      title: `Toggle Theme (Currently ${isDarkMode ? 'Dark' : 'Light'})`,
      category: 'Settings',
      shortcut: 'M',
      icon: isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />,
      action: () => {
        soundFx.playClick();
        onToggleTheme();
      },
    },
    {
      id: 'sound',
      title: `Toggle Audio Clicks (Currently ${soundEnabled ? 'Enabled' : 'Muted'})`,
      category: 'Settings',
      icon: soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />,
      action: () => {
        onToggleSound();
      },
    },
    {
      id: 'github',
      title: `Open GitHub Profile (@${PORTFOLIO_DATA.personal.handle})`,
      category: 'External',
      icon: <ExternalLink className="w-4 h-4 text-slate-400" />,
      action: () => {
        onClose();
        window.open(PORTFOLIO_DATA.personal.githubUrl, '_blank', 'noopener,noreferrer');
      },
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#0b0e17] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <kbd className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-400 border border-white/[0.08]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((cmd, idx) => (
              <button
                key={cmd.id}
                type="button"
                onClick={cmd.action}
                onMouseEnter={() => {
                  setSelectedIndex(idx);
                  soundFx.playHover();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                  selectedIndex === idx
                    ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/25'
                    : 'text-slate-300 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-md bg-white/[0.04]">
                    {cmd.icon}
                  </div>
                  <div>
                    <span className="font-medium">{cmd.title}</span>
                    <span className="block text-[10px] text-slate-500 font-mono">{cmd.category}</span>
                  </div>
                </div>
                {cmd.shortcut && (
                  <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-400 border border-white/[0.08]">
                    {cmd.shortcut}
                  </kbd>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-t border-white/[0.06] text-[11px] text-slate-500 font-mono">
          <span>Use ↑ ↓ to navigate</span>
          <span>↵ to execute</span>
        </div>
      </div>
    </div>
  );
};
