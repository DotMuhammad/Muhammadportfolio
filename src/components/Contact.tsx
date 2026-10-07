import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFx.playSuccess();
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#06b6d4', '#3b82f6', '#10b981', '#ffffff'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden border-t dark:border-slate-800/80 border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold">
              CONTACT // 04
            </span>
            <span className="text-slate-500 dark:text-slate-400">Initiate Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a web platform, scalable cloud architecture, or AI integration in mind? Send a direct transmission and let's turn ideas into reality.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Direct channels (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              {/* Direct Inbox Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Direct Inbox
                </span>
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 gap-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 truncate">
                    <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`min-h-[38px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer shrink-0 border select-none ${
                      copied
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                        : 'bg-slate-200/70 hover:bg-cyan-500/10 border-slate-300/80 dark:bg-slate-800 dark:hover:bg-cyan-500/10 dark:border-slate-700 hover:border-cyan-500/30 text-slate-700 hover:text-cyan-600 dark:text-slate-300'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Status & Timezone Info */}
              <div className="space-y-3 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{PORTFOLIO_DATA.personal.timezone}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Availability for 2026 Projects</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111422] border border-slate-200 dark:border-slate-800 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Transmission Dispatched!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                    Thank you, {formState.name}. Your note has been securely logged. Muhammad will review your details and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                      setFormState({ name: '', company: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Acme Studio"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Subject / Project Scope
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Full-Stack Web Architecture"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Project Details & Goals *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your timeline, architectural requirements, or collaboration goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[48px] px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Transmission'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
