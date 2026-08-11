import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, BookOpen, Clock, Award, Sparkles } from 'lucide-react';
import { COURSE_MODULES } from '../data/cbmData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyNow: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onApplyNow,
}) => {
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadStarted(true);
    
    // Simulate brochure download file generation
    setTimeout(() => {
      const brochureContent = `
==========================================================
CBM ACADEMY - EXECUTIVE AI-POWERED DIGITAL MARKETING BROCHURE
==========================================================
Premier Training Institute for Digital Growth & Generative AI

Course Highlights:
- 100% Practical Campaign Execution
- 12+ Generative AI Tools (ChatGPT, Midjourney, Claude, GA4)
- 350+ Corporate Hiring Partners
- Lifetime Career Alumni Access

Modules Overview:
${COURSE_MODULES.map((m, i) => `\nModule ${i+1}: ${m.title}\nDuration: ${m.duration} | Level: ${m.level}\nTopics: ${m.detailedTopics.join(', ')}`).join('\n')}

Contact CBM Academy Admissions:
Phone: +91 98765 43210 | Email: admissions@cbmacademy.edu
Website: https://cbmacademy.edu
==========================================================
      `;
      const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CBM_Academy_Digital_Marketing_Brochure_2026.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072B57]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#072B57] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
              <FileText className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">CBM Academy Course Brochure 2026</h3>
              <p className="text-xs text-slate-300">Executive AI-Powered Digital Marketing Curriculum</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            id="close-brochure-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top Banner */}
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E5E7EB] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FF6B00] shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#072B57]">Official Syllabus & Career Guide</p>
                <p className="text-[11px] text-[#64748B]">Updated for 2026 Industry Trends & AI Automations</p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="cbm-btn-primary text-xs py-2 px-3.5 whitespace-nowrap shadow-xs"
              id="download-brochure-file-btn"
            >
              <Download className="w-3.5 h-3.5" />
              {downloadStarted ? 'Downloaded!' : 'Download Brochure'}
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg border border-[#E5E7EB] text-center">
              <Clock className="w-4 h-4 text-[#072B57] mx-auto mb-1" />
              <p className="text-xs font-bold text-[#072B57]">16 Weeks</p>
              <p className="text-[10px] text-[#64748B]">Comprehensive Duration</p>
            </div>

            <div className="bg-white p-3 rounded-lg border border-[#E5E7EB] text-center">
              <BookOpen className="w-4 h-4 text-[#FF6B00] mx-auto mb-1" />
              <p className="text-xs font-bold text-[#072B57]">6 Core Modules</p>
              <p className="text-[10px] text-[#64748B]">Hands-on Execution</p>
            </div>

            <div className="bg-white p-3 rounded-lg border border-[#E5E7EB] text-center">
              <Award className="w-4 h-4 text-[#072B57] mx-auto mb-1" />
              <p className="text-xs font-bold text-[#072B57]">4 Certifications</p>
              <p className="text-[10px] text-[#64748B]">CBM + Google + Meta</p>
            </div>
          </div>

          {/* Modules Preview List */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#072B57] mb-3">
              Curriculum Summary Breakdown
            </h4>

            <div className="space-y-3">
              {COURSE_MODULES.map((module, idx) => (
                <div
                  key={module.id}
                  className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E5E7EB] flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold bg-[#072B57] text-white px-2 py-0.5 rounded">
                        Module {idx + 1}
                      </span>
                      <h5 className="text-xs font-bold text-[#072B57]">{module.title}</h5>
                    </div>
                    <p className="text-[11px] text-[#64748B]">{module.shortDescription}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#072B57] shrink-0 bg-white px-2 py-1 rounded border border-[#E5E7EB]">
                    {module.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Toast Notification */}
          {downloadStarted && (
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Brochure downloaded successfully! You can also apply online for upcoming batch seats.</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] p-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="cbm-btn-secondary py-2 px-4 text-xs"
          >
            Close Preview
          </button>

          <button
            onClick={() => {
              onClose();
              onApplyNow();
            }}
            className="cbm-btn-primary py-2 px-5 text-xs"
            id="brochure-modal-apply-btn"
          >
            Apply Now For Seat
          </button>
        </div>

      </div>
    </div>
  );
};
