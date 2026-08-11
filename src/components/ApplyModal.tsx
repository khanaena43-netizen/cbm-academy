import React, { useState } from 'react';
import { ApplyFormData } from '../types';
import { X, CheckCircle2, GraduationCap, Send } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledCourse?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  prefilledCourse,
}) => {
  const [formData, setFormData] = useState<ApplyFormData>({
    fullName: '',
    email: '',
    phone: '',
    qualification: 'Graduate / Degree Holder',
    preferredBatch: 'Weekend Live Cohort (Sat - Sun)',
    courseInterest: prefilledCourse || 'Executive AI-Powered Digital Marketing Masterclass',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072B57]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-xl w-full max-w-lg overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#072B57] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Apply Now for Admission</h3>
              <p className="text-xs text-slate-300">CBM Academy | Executive Digital Marketing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            id="close-apply-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#072B57]">Application Submitted!</h4>
              <p className="text-xs text-[#64748B] leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-bold text-[#072B57]">{formData.fullName}</span>. Your application for <span className="font-bold text-[#FF6B00]">{formData.courseInterest}</span> has been received.
              </p>
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E5E7EB] text-left text-xs space-y-1 text-[#1E293B]">
                <p><span className="font-bold text-[#072B57]">Reference ID:</span> CBM-APP-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><span className="font-bold text-[#072B57]">Contact Phone:</span> {formData.phone}</p>
                <p><span className="font-bold text-[#072B57]">Selected Batch:</span> {formData.preferredBatch}</p>
              </div>
              <p className="text-[11px] text-[#64748B]">Our admissions team will contact you within 2 hours to confirm batch seat reservation.</p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="cbm-btn-primary w-full py-2.5 text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                  id="apply-modal-name-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                    id="apply-modal-email-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                    id="apply-modal-phone-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                    Highest Qualification
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                  >
                    <option value="Undergraduate Student">Undergraduate Student</option>
                    <option value="Graduate / Degree Holder">Graduate / Degree Holder</option>
                    <option value="Postgraduate / Master's">Postgraduate / Master's</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Business Owner / Entrepreneur">Business Owner / Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                    Preferred Batch
                  </label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                  >
                    <option value="Weekend Live Cohort (Sat - Sun)">Weekend Cohort (Sat-Sun)</option>
                    <option value="Weekday Evening Cohort (Mon - Thu)">Weekday Evening (Mon-Thu)</option>
                    <option value="Self-Paced Executive Hybrid">Self-Paced Executive Hybrid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                  Selected Program
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.courseInterest}
                  className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs font-bold text-[#072B57] cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1">
                  Additional Notes or Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your career transition or learning targets..."
                  className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="cbm-btn-primary w-full py-3 text-base shadow-xs"
                  id="submit-application-form-btn"
                >
                  <Send className="w-4 h-4 mr-1" />
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
