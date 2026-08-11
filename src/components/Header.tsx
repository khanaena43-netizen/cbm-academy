import React, { useState, useEffect } from 'react';
import { NavigationTab } from '../types';
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenApplyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenApplyModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'course', label: 'Course' },
    { id: 'about', label: 'About' },
    { id: 'certificate', label: 'Certificate Verification' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    
    // Also scroll smoothly to top or section if on single-page view
    const targetEl = document.getElementById(tabId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="cbm-header"
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        isScrolled
          ? 'border-b border-[#E5E7EB] shadow-xs py-3'
          : 'border-b border-[#E5E7EB]/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on left */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="header-logo-button"
          >
            <div className="w-10 h-10 rounded-xl bg-[#072B57] text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-[#FF6B00] transition-colors duration-200">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#072B57] block leading-none">
                CBM <span className="text-[#FF6B00]">ACADEMY</span>
              </span>
              <span className="text-[10px] font-medium text-[#64748B] tracking-wider uppercase block mt-1">
                Digital Marketing & AI Institute
              </span>
            </div>
          </button>

          {/* Menu in center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#FF6B00] bg-[#FF6B00]/5 font-bold'
                      : 'text-[#1E293B] hover:text-[#072B57] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right side Apply Now Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="cbm-btn-primary shadow-xs hover:shadow-sm"
              id="header-apply-now-btn"
            >
              Apply Now
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenApplyModal}
              className="cbm-btn-primary py-2 px-3 text-xs"
              id="mobile-header-apply-btn"
            >
              Apply
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#072B57] hover:bg-[#F8FAFC] border border-[#E5E7EB]"
              aria-label="Toggle menu"
              id="mobile-hamburger-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 mt-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-item-${item.id}`}
                  className={`px-4 py-2.5 text-left text-sm font-semibold rounded-xl flex items-center justify-between ${
                    isActive
                      ? 'text-[#FF6B00] bg-[#FF6B00]/10 font-bold'
                      : 'text-[#1E293B] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6B00]"></span>}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-[#E5E7EB]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="cbm-btn-primary w-full py-3 text-base shadow-xs"
              id="mobile-drawer-apply-btn"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
