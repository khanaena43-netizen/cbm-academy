import React from 'react';
import { UserCheck, Laptop, Briefcase, Award } from 'lucide-react';
import { WHY_CHOOSE_CBM } from '../data/cbmData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#072B57]" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#072B57]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#072B57]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#072B57]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[#072B57]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
            Why Choose CBM Academy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Designed for Real-World Career Success
          </h2>
          <p className="text-[#64748B] text-base mt-3 leading-relaxed">
            We focus on practical execution, direct mentorship, and live industry workflows to build job-ready digital marketing professionals.
          </p>
        </div>

        {/* Four Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_CBM.map((item) => (
            <div
              key={item.id}
              className="cbm-card p-6 flex flex-col items-start bg-white rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#072B57]/20 transition-all duration-200"
            >
              {/* Simple outline icon container */}
              <div className="w-12 h-12 rounded-xl bg-[#072B57]/5 flex items-center justify-center mb-5">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#072B57] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
