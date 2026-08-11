import React from 'react';
import { CourseModule } from '../types';
import { X, CheckCircle2, Clock, Award, Briefcase, Cpu, ArrowRight } from 'lucide-react';

interface ModuleDetailModalProps {
  module: CourseModule | null;
  onClose: () => void;
  onApplyForModule: (moduleName: string) => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onApplyForModule,
}) => {
  if (!module) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072B57]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#072B57] text-white p-6 flex items-start justify-between gap-4">
          <div>
            <div className="inline-block bg-[#FF6B00] text-white text-[10px] font-bold px-2.5 py-0.5 rounded mb-2 uppercase tracking-wider">
              Detailed Syllabus Overview
            </div>
            <h3 className="text-xl font-bold leading-tight">{module.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            id="close-module-detail-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
                <Clock className="w-3.5 h-3.5 text-[#072B57]" /> Duration
              </div>
              <p className="text-sm font-bold text-[#072B57]">{module.duration}</p>
            </div>

            <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB]">
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
                <Award className="w-3.5 h-3.5 text-[#FF6B00]" /> Proficiency
              </div>
              <p className="text-sm font-bold text-[#072B57]">{module.level}</p>
            </div>

            <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#E5E7EB] sm:col-span-1 col-span-2">
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#072B57]" /> Career Impact
              </div>
              <p className="text-xs font-bold text-[#072B57] truncate">{module.careerOutcome}</p>
            </div>
          </div>

          {/* Module Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#072B57] mb-2">
              Module Overview
            </h4>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {module.shortDescription}
            </p>
          </div>

          {/* Detailed Learning Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#072B57] mb-3">
              Key Topics Covered
            </h4>
            <div className="space-y-2">
              {module.detailedTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs font-medium text-[#1E293B] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E5E7EB]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Tools Covered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#072B57] mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#FF6B00]" />
              Software & AI Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.toolsCovered.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-[#072B57]/5 text-[#072B57] px-3 py-1.5 rounded-lg border border-[#072B57]/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F8FAFC] p-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="cbm-btn-secondary py-2 px-4 text-xs"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onApplyForModule(module.title);
            }}
            className="cbm-btn-primary py-2 px-5 text-xs shadow-xs"
            id="module-modal-apply-btn"
          >
            Enroll in This Module
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
