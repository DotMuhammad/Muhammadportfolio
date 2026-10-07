import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { soundFx } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { resume } = PORTFOLIO_DATA;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  const handleDownload = () => {
    soundFx.playClick();
    const resumeText = `
${resume.name}
${resume.title}
Email: ${resume.email} | Location: ${resume.location}
GitHub: https://${resume.github} | LinkedIn: https://${resume.linkedin}

SUMMARY:
${resume.summary}

CORE COMPETENCIES:
${resume.coreCompetencies.map(c => `- ${c}`).join('\n')}

EXPERIENCE:
${resume.experience.map(e => `
${e.role} — ${e.company} (${e.period})
${e.points.map(p => `• ${p}`).join('\n')}
`).join('\n')}

EDUCATION:
${resume.education.map(ed => `${ed.degree} — ${ed.institution} (${ed.year})`).join('\n')}

CERTIFICATIONS:
${resume.certifications.map(c => `• ${c}`).join('\n')}
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Muhammad_Bin_Qasim_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-[#0c0f17] border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden my-auto">
        {/* Header Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest">
              Curriculum Vitae / ATS Standard
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">· Verified Candidate Profile</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-xs cursor-pointer"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              aria-label="Close resume dialog"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume-content" className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200">
          {/* Candidate Name & Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 id="resume-dialog-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase font-sans">
                {resume.name}
              </h1>
              <span className="text-xs sm:text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                {resume.title}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono pt-1">
              <a href={`mailto:${resume.email}`} className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{resume.email}</span>
              </a>
              <span>•</span>
              <a href={`https://${resume.github}`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" />
                <span>{resume.github}</span>
              </a>
              <span>•</span>
              <a href={`https://${resume.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                <span>{resume.linkedin}</span>
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{resume.location}</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {resume.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Core Competencies & Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {resume.coreCompetencies.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
              Engineering Experience
            </h2>
            <div className="space-y-6">
              {resume.experience.map((exp, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="font-normal text-slate-500">at {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-600 dark:text-slate-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                Education
              </h2>
              {resume.education.map((ed, i) => (
                <div key={i} className="text-xs space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white">{ed.degree}</div>
                  <div className="text-slate-500">{ed.institution} • {ed.year}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
                Certifications
              </h2>
              <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                {resume.certifications.map((cert, i) => (
                  <li key={i}>• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
