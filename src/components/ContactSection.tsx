import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'AI-Powered Digital Marketing Course Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#072B57] tracking-tight">
            Contact CBM Academy
          </h2>
          <p className="text-[#64748B] text-base mt-3 leading-relaxed">
            Have questions about our course modules, batch schedules, or placement assistance? Talk directly with our academic counselors.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E5E7EB] space-y-5">
              <h3 className="text-lg font-bold text-[#072B57] border-b border-[#E5E7EB] pb-3">
                Academy Campus Details
              </h3>

              <div className="flex items-start gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#FF6B00] shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#072B57]">Campus Address</p>
                  <p className="text-[#64748B] text-xs leading-relaxed mt-0.5">
                    CBM Academy, Executive Learning Center, 4th Floor, Tech Hub Towers, Koramangala, Bangalore, Karnataka - 560095
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57] shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#072B57]">Phone & WhatsApp</p>
                  <p className="text-[#64748B] text-xs mt-0.5">+91 98765 43210 / +91 80 4567 8900</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#FF6B00] shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#072B57]">Email Address</p>
                  <p className="text-[#64748B] text-xs mt-0.5">admissions@cbmacademy.edu / info@cbmacademy.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#072B57] shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#072B57]">Counseling Hours</p>
                  <p className="text-[#64748B] text-xs mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Google Map Preview Frame */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden p-2 shadow-xs">
              <div className="relative w-full h-52 bg-[#E2E8F0] rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  title="CBM Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.583120150247!2d77.620023!3d12.9300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzE4LjAiTiA3N8KwMzcnMTIuMSJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB] shadow-xs">
              
              <h3 className="text-xl font-bold text-[#072B57] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#64748B] mb-6">
                Fill out the form below and an admissions advisor will reach out within 2 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you for contacting CBM Academy, {formData.name}. Our academic counselor will call you shortly at {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'AI-Powered Digital Marketing Course Inquiry',
                        message: '',
                      });
                    }}
                    className="cbm-btn-secondary text-xs px-4 py-2 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Roy"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                        id="contact-form-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                        id="contact-form-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                        id="contact-form-phone"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1.5">
                        Topic of Interest
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all"
                        id="contact-form-subject"
                      >
                        <option value="AI-Powered Digital Marketing Course Inquiry">AI Digital Marketing Course</option>
                        <option value="Placement Support & Hiring Partnership">Placement & Hiring Partnerships</option>
                        <option value="Corporate Executive Workshop">Corporate Executive Workshop</option>
                        <option value="Certificate Verification Assistance">Certificate Verification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#072B57] mb-1.5">
                      Your Message or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your educational background or any questions regarding batch timings..."
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-sm text-[#1E293B] focus:outline-none focus:border-[#072B57] focus:bg-white transition-all resize-none"
                      id="contact-form-message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="cbm-btn-primary w-full py-3 text-base shadow-xs"
                    id="submit-contact-form-btn"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
