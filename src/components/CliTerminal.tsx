import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface CliTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
}

export const CliTerminal: React.FC<CliTerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Muhammad Bin Qasim Developer Shell v2.6.0</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-amber-400 font-bold">help</span> to view available commands.
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const newEntry: CommandHistory = { command: input, output: null };

    switch (cmd) {
      case 'help':
        newEntry.output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">about</span> — Overview and background</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">skills</span> — Technical proficiencies</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">projects</span> — Key production works</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">contact</span> — Email and social links</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">resume</span> — View printable ATS resume</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">clear</span> — Clear terminal output</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">sudo</span> — Superuser permission check</p>
            <p><span className="text-amber-300 font-mono w-24 inline-block">exit</span> — Close terminal</p>
          </div>
        );
        break;

      case 'about':
        newEntry.output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-bold">{PORTFOLIO_DATA.personal.fullName}</p>
            <p className="text-slate-400">{PORTFOLIO_DATA.personal.title}</p>
            <p className="text-xs leading-relaxed mt-1">{PORTFOLIO_DATA.personal.longBio}</p>
          </div>
        );
        break;

      case 'skills':
        newEntry.output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Core Technical Stack:</p>
            <p className="text-xs">React 19, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS, Docker, Git.</p>
          </div>
        );
        break;

      case 'projects':
        newEntry.output = (
          <div className="space-y-2 text-slate-300">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="text-xs">
                <span className="text-cyan-300 font-bold">{p.displayName}</span>
                <span className="text-slate-500"> — {p.category}</span>
                <p className="text-slate-400">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        newEntry.output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p>Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-cyan-300 underline">{PORTFOLIO_DATA.personal.email}</a></p>
            <p>GitHub: <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PORTFOLIO_DATA.personal.githubUrl}</a></p>
            <p>LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PORTFOLIO_DATA.personal.linkedinUrl}</a></p>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume':
        newEntry.output = <span className="text-emerald-400">Opening printable ATS resume modal...</span>;
        onOpenResume();
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        newEntry.output = <span className="text-rose-400">Permission denied: guest user cannot access root environment.</span>;
        break;

      case 'exit':
        onClose();
        return;

      default:
        newEntry.output = (
          <span className="text-rose-400">
            Command not recognized: "{input}". Type <span className="text-amber-300 font-bold">help</span> for assistance.
          </span>
        );
        break;
    }

    setHistory((prev) => [...prev, newEntry]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Developer Terminal"
      className="fixed inset-x-0 bottom-0 z-50 p-2 sm:p-4 max-h-[80vh] flex justify-center pointer-events-none"
    >
      <div className="w-full max-w-4xl h-96 rounded-2xl bg-[#090c14]/95 border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl pointer-events-auto">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5 ml-3 font-mono text-xs text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash — mbq@developer-machine:~</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 select-text">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span>mbq@developer:~$</span>
                <span className="text-white font-bold">{h.command}</span>
              </div>
              {h.output && <div className="pl-4 py-0.5">{h.output}</div>}
            </div>
          ))}

          {/* Active Command Input */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-cyan-400 pt-1">
            <span>mbq@developer:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white font-mono outline-none border-none p-0 focus:ring-0"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
