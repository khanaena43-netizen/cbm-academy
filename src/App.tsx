/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab, CourseModule, JobOpening, BlogPost } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CourseSection } from './components/CourseSection';
import { AIToolsSection } from './components/AIToolsSection';
import { JobOpportunities } from './components/JobOpportunities';
import { CertificateVerification } from './components/CertificateVerification';
import { BlogsSection } from './components/BlogsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { ApplyModal } from './components/ApplyModal';
import { BrochureModal } from './components/BrochureModal';
import { ModuleDetailModal } from './components/ModuleDetailModal';
import { BlogReaderModal } from './components/BlogReaderModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');

  // Modal States
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [prefilledCourseForApply, setPrefilledCourseForApply] = useState<string>('');

  const handleOpenApplyModal = (courseName?: string) => {
    if (courseName) {
      setPrefilledCourseForApply(courseName);
    } else {
      setPrefilledCourseForApply('Executive AI-Powered Digital Marketing Masterclass');
    }
    setIsApplyModalOpen(true);
  };

  const handleApplyForJob = (job: JobOpening) => {
    handleOpenApplyModal(`Job Application: ${job.title} at ${job.companyName}`);
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenApplyModal={() => handleOpenApplyModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero
            onOpenApplyModal={() => handleOpenApplyModal()}
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
            onExploreCourses={() => {
              setActiveTab('course');
              const courseEl = document.getElementById('course');
              if (courseEl) courseEl.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>

        {/* Why Choose CBM */}
        <WhyChooseUs />

        {/* Course Section */}
        <CourseSection
          onSelectModule={(module) => setSelectedModule(module)}
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* AI Tools Grid */}
        <AIToolsSection />

        {/* Job Opportunities */}
        <JobOpportunities
          onApplyForJob={(job) => handleApplyForJob(job)}
        />

        {/* Certificate Verification */}
        <CertificateVerification />

        {/* Blogs Section */}
        <BlogsSection
          onSelectBlog={(blog) => setSelectedBlog(blog)}
        />

        {/* About Section */}
        <AboutSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenApplyModal={() => handleOpenApplyModal()}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        prefilledCourse={prefilledCourseForApply}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        onApplyNow={() => handleOpenApplyModal()}
      />

      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onApplyForModule={(moduleTitle) => handleOpenApplyModal(moduleTitle)}
      />

      <BlogReaderModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
}
