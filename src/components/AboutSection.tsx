import React from 'react';
import { CBM_IMAGES } from '../data/cbmData';
import { Target, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image on one side */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-sm">
                <img
                  src={CBM_IMAGES.about}
                  alt="CBM Academy Campus & Mentors"
                  className="w-full h-auto object-cover rounded-lg aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#072B57] text-white p-4 rounded-xl shadow-md hidden sm:flex flex-col items-start max-w-[220px]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Est. Excellence</p>
                <p className="text-sm font-extrabold mt-1">Transforming Digital Careers Worldwide</p>
              </div>
            </div>
          </div>

          {/* Content on other side */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
              About CBM Academy
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight mb-4">
              Building the Next Generation of AI-Empowered Digital Leaders
            </h2>

            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              CBM Academy is a premier digital marketing and AI training institute dedicated to bridging the gap between theoretical marketing concepts and modern high-ROI industry demands.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              {/* Mission */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#072B57]/5 flex items-center justify-center text-[#072B57]">
                    <Target className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-base font-bold text-[#072B57]">Our Mission</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  To empower professionals and students with job-ready, hands-on digital skills integrated with practical AI workflows.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E7EB] shadow-xs">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#072B57]/5 flex items-center justify-center text-[#072B57]">
                    <Compass className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-base font-bold text-[#072B57]">Our Vision</h3>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  To become the most trusted corporate training institution recognized globally for producing top 1% marketing talent.
                </p>
              </div>

            </div>

            {/* Why CBM Academy Bullets */}
            <div className="space-y-3 mb-8 w-full">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#072B57] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                Why CBM Academy Stands Out
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#1E293B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Curriculum updated quarterly for 2026 AI tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>1-on-1 career coaching & resume teardowns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Live client campaign budgets allocated during training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Lifetime alumni community & job board access</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenApplyModal}
              className="cbm-btn-primary px-6 py-3 text-sm shadow-xs"
              id="about-apply-btn"
            >
              Start Your Journey With Us
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
