import React, { useState } from 'react';
import { JobOpening } from '../types';
import { JOB_OPPORTUNITIES } from '../data/cbmData';
import { MapPin, IndianRupee, Briefcase, ArrowRight, Building2, Check } from 'lucide-react';

interface JobOpportunitiesProps {
  onApplyForJob: (job: JobOpening) => void;
}

export const JobOpportunities: React.FC<JobOpportunitiesProps> = ({
  onApplyForJob,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const locations = ['All', 'Bangalore', 'Mumbai', 'Remote', 'Hyderabad', 'Pune'];

  const filteredJobs = JOB_OPPORTUNITIES.filter((job) => {
    if (selectedFilter === 'All') return true;
    return job.location.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <section id="jobs" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
              Placement Support & Careers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
              Latest Job Opportunities
            </h2>
            <p className="text-[#64748B] text-base mt-3 leading-relaxed">
              Explore active job openings from our 350+ corporate hiring partners looking for trained CBM Academy graduates.
            </p>
          </div>

          {/* Location Filters */}
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedFilter(loc)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  selectedFilter === loc
                    ? 'bg-[#072B57] text-white border-[#072B57]'
                    : 'bg-white text-[#64748B] border-[#E5E7EB] hover:border-[#072B57]/30 hover:text-[#072B57]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="cbm-card p-6 flex flex-col justify-between bg-white rounded-xl border border-[#E5E7EB] hover:border-[#072B57]/30 transition-all duration-200"
            >
              <div>
                {/* Company & Type */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#072B57]">
                    <Building2 className="w-4 h-4 text-[#FF6B00]" />
                    <span>{job.companyName}</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#F8FAFC] text-[#64748B] px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                    {job.jobType}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-[#072B57] mb-4 leading-snug">
                  {job.title}
                </h3>

                {/* Details List */}
                <div className="space-y-2.5 text-xs font-medium text-[#64748B] mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#072B57] shrink-0" />
                    <span className="text-[#1E293B]">{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-[#072B57] font-bold">{job.salary}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#072B57] shrink-0" />
                    <span>Experience: {job.experienceLevel}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.skillsRequired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold bg-[#F8FAFC] text-[#072B57] px-2 py-0.5 rounded border border-[#E5E7EB]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <div>
                <button
                  onClick={() => onApplyForJob(job)}
                  className="cbm-btn-primary w-full py-2.5 text-sm font-semibold justify-center"
                  id={`apply-job-btn-${job.id}`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#072B57] text-white flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#072B57]">Are you a Hiring Partner or Company?</h4>
              <p className="text-xs text-[#64748B]">Hire verified, job-ready digital marketing and AI graduates directly from CBM Academy.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cbm-btn-secondary py-2.5 px-5 text-sm whitespace-nowrap"
            id="hiring-partner-contact-btn"
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
};
