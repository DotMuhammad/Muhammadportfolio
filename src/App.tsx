import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FlagshipProject } from './components/FlagshipProject';
import { Projects } from './components/Projects';
import { CreativeLab } from './components/CreativeLab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { CliTerminal } from './components/CliTerminal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { soundFx } from './utils/sound';
import { Project } from './data/portfolio';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.isEnabled());
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCliOpen, setIsCliOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Sync dark class on document html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Global keyboard shortcuts (Cmd+K, etc.)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in form inputs
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName)) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playClick();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 't' && !e.metaKey && !e.ctrlKey) {
        soundFx.playClick();
        setIsCliOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleToggleSound = () => {
    const next = soundFx.toggle();
    setSoundEnabled(next);
  };

  return (
    <div className="relative min-h-screen dark:bg-[#090a0f] bg-[#f4f5f8] dark:text-slate-100 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300 overflow-x-hidden">
      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Desktop-only Custom Cursor */}
      <CustomCursor />

      {/* Ambient Gradient Backdrop */}
      <AnimatedBackground />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenCli={() => setIsCliOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <FlagshipProject onOpenCaseStudy={(p) => setSelectedCaseStudy(p)} />
        <Projects onOpenCaseStudy={(p) => setSelectedCaseStudy(p)} />
        <CreativeLab />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenCli={() => setIsCliOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Modals & Drawers */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCli={() => setIsCliOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onToggleSound={handleToggleSound}
        soundEnabled={soundEnabled}
      />

      <CliTerminal
        isOpen={isCliOpen}
        onClose={() => setIsCliOpen(false)}
        onOpenResume={() => {
          setIsCliOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
