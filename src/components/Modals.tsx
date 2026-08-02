import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
import { ModalType, CaseStudy, ContactFormData } from '../types';
import { SERVICES_LIST } from '../data/content';
import { AiCampaignPlanner } from './AiCampaignPlanner';

interface ModalsProps {
  activeModal: ModalType;
  selectedCaseStudy: CaseStudy | null;
  initialServiceSelection?: string;
  onClose: () => void;
  onSubmitContact: (data: ContactFormData) => void;
  onSelectServiceAndContact: (service: string, budget: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  selectedCaseStudy,
  initialServiceSelection,
  onClose,
  onSubmitContact,
  onSelectServiceAndContact,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: initialServiceSelection || 'Influencer Marketing',
    budget: '₹5L - ₹15L',
    message: '',
  });

  useEffect(() => {
    if (initialServiceSelection) {
      setFormData((prev) => ({ ...prev, service: initialServiceSelection }));
    }
  }, [initialServiceSelection]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitContact(formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Influencer Marketing',
      budget: '₹5L - ₹15L',
      message: '',
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-[#f5bd5e]/30 text-[#ebe1d6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#f5bd5e] hover:bg-[#f5bd5e] hover:text-[#050505] transition-all text-[#d3c4b1]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. About Us Modal */}
        {activeModal === 'about' && (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                ABOUT PLIXORA GLOBAL
              </span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-4">
              360° AI-Powered Media & Creator Ecosystem
            </h3>
            <p className="font-outfit text-sm text-[#d3c4b1] leading-relaxed mb-6">
              We bridge brands, creators, communities, and government initiatives with data-backed execution and artistic storytelling. By uniting cutting-edge digital analytics with physical, on-ground media networks, we deliver unmatched reach across India and global markets.
            </p>

            <div className="p-6 rounded-xl bg-[#f5bd5e]/10 border-l-4 border-[#f5bd5e] mb-6">
              <h4 className="font-cinzel text-lg font-bold text-[#f7de98] mb-2">
                OUR VISION
              </h4>
              <p className="font-outfit text-xs text-[#d3c4b1] leading-relaxed">
                To become the world's premier media ecosystem empowering creators, elevating iconic brands, and collaborating with government bodies to preserve culture, drive tourism, and build meaningful digital connections.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  onClose();
                  onSubmitContact({
                    fullName: '',
                    email: '',
                    phone: '',
                    service: 'General Inquiry',
                    budget: '₹5L - ₹15L',
                    message: 'Inquiring about Plixora Global partnership',
                  });
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-md"
              >
                GET IN TOUCH WITH OUR LEADERSHIP &rarr;
              </button>
            </div>
          </div>
        )}

        {/* 2. All Services Modal */}
        {activeModal === 'services' && (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                OUR FULL CAPABILITIES
              </span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-6">
              Integrated Online-to-Offline Media Suite
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SERVICES_LIST.map((srv) => (
                <div key={srv.id} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#f5bd5e]/40 transition-colors">
                  <span className="font-outfit text-xs font-bold text-[#f5bd5e]">{srv.number}.</span>
                  <h4 className="font-cinzel text-base font-bold text-white mt-1 mb-1">{srv.title}</h4>
                  <p className="font-outfit text-xs text-[#d3c4b1] leading-relaxed">{srv.shortDesc}</p>
                </div>
              ))}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#f5bd5e]/40 transition-colors">
                <span className="font-outfit text-xs font-bold text-[#f5bd5e]">06.</span>
                <h4 className="font-cinzel text-base font-bold text-white mt-1 mb-1">Talent & Artist Management</h4>
                <p className="font-outfit text-xs text-[#d3c4b1] leading-relaxed">
                  Direct management and exclusive brand pairing for top Tier-1 digital stars, singers, and actors.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectServiceAndContact('Full Service Ecosystem', '₹15L - ₹50L');
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-md"
            >
              REQUEST COMPREHENSIVE BRAND PROPOSAL &rarr;
            </button>
          </div>
        )}

        {/* 3. Case Study Breakdown Modal */}
        {activeModal === 'case-study' && selectedCaseStudy && (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                CASE STUDY BREAKDOWN
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedCaseStudy.title}
            </h3>
            <p className="font-outfit text-sm text-[#f5bd5e] mb-6">
              {selectedCaseStudy.subtitle}
            </p>

            {/* Metrics Banner */}
            <div className="p-4 rounded-xl bg-[#f5bd5e]/15 border border-[#f5bd5e] text-[#f7de98] font-outfit font-bold text-sm text-center mb-6">
              ⚡ {selectedCaseStudy.metrics}
            </div>

            <div className="mb-6">
              <h4 className="font-outfit text-xs uppercase font-semibold text-[#d3c4b1] tracking-wider mb-2">
                Executive Strategy Overview
              </h4>
              <p className="font-outfit text-sm text-[#d3c4b1] leading-relaxed">
                {selectedCaseStudy.description}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-outfit text-xs uppercase font-semibold text-[#d3c4b1] tracking-wider mb-3">
                Verified Campaign Highlights
              </h4>
              <div className="space-y-2">
                {selectedCaseStudy.results.map((res, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#d3c4b1]">
                    <CheckCircle className="w-4 h-4 text-[#f5bd5e] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectServiceAndContact(selectedCaseStudy.title, '₹15L - ₹50L');
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-md"
            >
              LAUNCH SIMILAR CAMPAIGN FOR YOUR BRAND &rarr;
            </button>
          </div>
        )}

        {/* 4. Contact / Inquiry Modal */}
        {activeModal === 'contact' && (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                LET'S CONNECT
              </span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
              Start Your Brand Journey
            </h3>
            <p className="font-outfit text-xs text-[#d3c4b1] mb-6">
              Transmit your campaign brief directly to our strategy team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                  >
                    <option value="Influencer Marketing">01. Influencer Marketing</option>
                    <option value="Brand Campaigns">02. Brand Campaigns</option>
                    <option value="Events & Activations">03. Events & Activations</option>
                    <option value="Offline Media">04. Offline Media</option>
                    <option value="Tourism & Govt. Campaigns">05. Tourism & Govt. Campaigns</option>
                    <option value="General Inquiry">General Inquiry / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                  >
                    <option>₹2L - ₹5L</option>
                    <option>₹5L - ₹15L</option>
                    <option>₹15L - ₹50L</option>
                    <option>₹50L+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-outfit text-xs font-semibold text-[#d3c4b1] uppercase tracking-wider mb-1">
                  Campaign Goals / Project Brief *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand goals, timeline, and key target metrics..."
                  className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg pt-4"
              >
                <Send className="w-4 h-4 text-[#050505]" />
                <span>SUBMIT INQUIRY TO STRATEGY TEAM</span>
              </button>
            </form>
          </div>
        )}

        {/* 5. AI Campaign Planner Modal */}
        {activeModal === 'ai-planner' && (
          <div>
            <AiCampaignPlanner onSelectServiceAndContact={onSelectServiceAndContact} />
          </div>
        )}
      </div>
    </div>
  );
};
