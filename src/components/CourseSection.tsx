import React from 'react';
import { CourseModule } from '../types';
import { COURSE_MODULES } from '../data/cbmData';
import { Search, Target, Share2, Mail, BarChart3, Cpu, ArrowRight, Clock, Award } from 'lucide-react';

interface CourseSectionProps {
  onSelectModule: (module: CourseModule) => void;
  onOpenApplyModal: () => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({
  onSelectModule,
  onOpenApplyModal,
}) => {
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#FF6B00]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#FF6B00]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#FF6B00]" />;
      case 'Mail':
        return <Mail className="w-6 h-6 text-[#FF6B00]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#FF6B00]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF6B00]" />;
      default:
        return <Search className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="course" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
              Comprehensive Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
              Master Executive Digital Marketing & AI Modules
            </h2>
            <p className="text-[#64748B] text-base mt-3 leading-relaxed">
              Our industry-curated modules cover every core pillar of digital growth, from organic search and paid acquisition to automated analytics and AI execution.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenApplyModal}
              className="cbm-btn-primary px-6 py-3 text-sm shadow-xs"
              id="course-section-apply-btn"
            >
              Enroll in Full Masterclass
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Modern Course Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSE_MODULES.map((module, idx) => (
            <div
              key={module.id}
              className="cbm-card p-6 flex flex-col justify-between bg-white rounded-xl border border-[#E5E7EB] hover:border-[#072B57]/30 transition-all duration-200"
            >
              <div>
                {/* Module Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
                    {getModuleIcon(module.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#072B57] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                    Module 0{idx + 1}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-lg font-bold text-[#072B57] mb-3 leading-snug">
                  {module.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  {module.shortDescription}
                </p>

                {/* Quick Meta Stats */}
                <div className="flex items-center gap-4 text-xs font-semibold text-[#1E293B] mb-6 pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#072B57]" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <Award className="w-3.5 h-3.5 text-[#072B57]" />
                    <span>{module.level}</span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div>
                <button
                  onClick={() => onSelectModule(module)}
                  className="cbm-btn-secondary w-full py-2.5 text-sm font-semibold justify-center"
                  id={`learn-more-btn-${module.id}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
