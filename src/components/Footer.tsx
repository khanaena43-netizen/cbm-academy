import React from 'react';
import { NavigationTab } from '../types';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    const targetEl = document.getElementById(tab);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#072B57] text-white pt-16 pb-12 border-t border-[#072B57]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center font-bold shadow-xs">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                CBM <span className="text-[#FF6B00]">ACADEMY</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              CBM Academy is a premier digital marketing and generative AI training institute dedicated to building job-ready marketing leaders through hands-on campaign execution.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF6B00] transition-colors flex items-center justify-center text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('course')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Course Modules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  About CBM Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('certificate')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Certificate Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Jobs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation & Careers</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => handleLinkClick('jobs')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Job Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('blogs')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Blogs & AI Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#FF6B00] transition-colors text-left"
                >
                  Contact & Campus Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenApplyModal}
                  className="text-[#FF6B00] font-bold hover:underline transition-colors text-left"
                >
                  Apply Online Now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Academy Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>Tech Hub Towers, Koramangala, Bangalore, KA - 560095</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>admissions@cbmacademy.edu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 CBM Academy. All rights reserved. Handcrafted for excellence.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Admission</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#FF6B00] text-white transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
