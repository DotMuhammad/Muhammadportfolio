import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, Volume2, VolumeX, FileText, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  onOpenCli: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Creative Lab', href: '#creative-lab', id: 'creative-lab' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCommandPalette,
  onOpenCli,
  isDarkMode,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    soundFx.playClick();
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    soundFx.playClick();
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);
    if (newCount >= 5) {
      setLogoClickCount(0);
      onOpenCli();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#090a0f]/85 bg-white/85 backdrop-blur-xl dark:border-b dark:border-slate-800/80 border-b border-slate-200/80 py-2.5 shadow-lg dark:shadow-black/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogoClick}
            type="button"
            className="group flex items-center gap-2.5 text-slate-900 dark:text-white focus:outline-none rounded px-1 text-left cursor-pointer"
            title="Click logo 5 times to reveal developer terminal"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="leading-none text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white font-sans tracking-wider">
                {PORTFOLIO_DATA.personal.firstName}
              </span>
              <span className="leading-none text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 font-sans tracking-wider mt-0.5">
                {PORTFOLIO_DATA.personal.lastName}
              </span>
            </div>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 dark:bg-slate-900/80 bg-slate-100/90 dark:border-slate-800/80 border border-slate-200 rounded-full px-3 py-1.5 backdrop-blur-md shadow-xs"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-3.5 py-1 text-xs font-medium transition-colors rounded-full ${
                  isActive
                    ? 'dark:text-cyan-300 text-cyan-700 font-semibold'
                    : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 dark:bg-cyan-500/20 bg-cyan-500/25 border dark:border-cyan-500/40 border-cyan-500/40 rounded-full -z-10"
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search / Command Palette (Desktop) */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl dark:bg-slate-900/80 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 border dark:border-slate-800 border-slate-200 text-slate-600 dark:text-slate-400 text-xs font-mono transition-colors cursor-pointer"
            title="Search Commands (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <kbd className="text-[10px] bg-slate-200 dark:bg-slate-800 px-1 rounded border border-slate-300 dark:border-slate-700">⌘K</kbd>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            className="p-2 rounded-xl dark:bg-slate-900/80 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 border dark:border-slate-800 border-slate-200 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute Interface Sound' : 'Enable Interactive Sound'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onToggleTheme();
            }}
            className="p-2 rounded-xl dark:bg-slate-900/80 bg-slate-100 hover:dark:bg-slate-800 hover:bg-slate-200 border dark:border-slate-800 border-slate-200 text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
            title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl dark:bg-slate-900 bg-slate-100 border dark:border-slate-800 border-slate-200 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] dark:bg-[#090a0f]/95 bg-white/95 backdrop-blur-2xl border-b dark:border-slate-800 border-slate-200 p-6 shadow-2xl space-y-4">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t dark:border-slate-800 border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCli();
              }}
              className="px-3.5 py-2.5 rounded-xl dark:bg-slate-900 bg-slate-100 text-slate-700 dark:text-slate-300 font-mono text-xs flex items-center gap-1.5 border dark:border-slate-800 border-slate-200"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>&gt;_ CLI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
