import React from 'react';
import { Download, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CBM_IMAGES, STATS } from '../data/cbmData';

interface HeroProps {
  onOpenApplyModal: () => void;
  onOpenBrochureModal: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenApplyModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-12 md:py-20 overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#072B57]/5 border border-[#072B57]/10 mb-6">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span className="text-xs font-bold text-[#072B57] tracking-wide uppercase">
                Premier Digital Marketing & AI Institute
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-[#072B57] tracking-tight leading-[1.15] mb-6">
              Become Job Ready with <span className="text-[#FF6B00]">AI-Powered</span> Digital Marketing Training
            </h1>

            {/* Short Paragraph */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mb-8">
              Gain practical expertise in search engine optimization, Google Ads, Meta growth strategies, marketing automation, and cutting-edge generative AI tools through live industry project mentorship at CBM Academy.
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>100% Practical Live Projects</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>12+ Generative AI Tools Covered</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Industry Verified Certification</span>
              </div>
            </div>

            {/* Two Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Apply Now Button (Orange) */}
              <button
                onClick={onOpenApplyModal}
                className="cbm-btn-primary px-7 py-3.5 text-base shadow-sm hover:shadow-md"
                id="hero-apply-now-btn"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              {/* Secondary Download Brochure Button */}
              <button
                onClick={onOpenBrochureModal}
                className="cbm-btn-secondary px-7 py-3.5 text-base"
                id="hero-download-brochure-btn"
              >
                <Download className="w-4 h-4 mr-1 text-[#072B57]" />
                Download Brochure
              </button>
            </div>

          </div>

          {/* Right Side Illustration / Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with 12px rounded corner and soft shadow */}
              <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-2 shadow-md">
                <img
                  src={CBM_IMAGES.hero}
                  alt="Students learning digital marketing at CBM Academy"
                  className="w-full h-auto object-cover rounded-lg aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Trust Badge overlay bottom left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-[#E5E7EB] p-3.5 rounded-xl shadow-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] font-extrabold text-sm">
                  94%
                </div>
                <div>
                  <p className="text-xs font-bold text-[#072B57]">Placement Track Record</p>
                  <p className="text-[11px] text-[#64748B]">350+ Hiring Partners</p>
                </div>
              </div>

              {/* Badge overlay top right */}
              <div className="absolute -top-4 -right-4 bg-[#072B57] text-white p-3 rounded-xl shadow-md hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse"></div>
                <span className="text-xs font-bold tracking-wide">Next Batch Starts Soon</span>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip Below Hero */}
        <div className="mt-16 pt-10 border-t border-[#E5E7EB] grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#072B57] tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#64748B] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
