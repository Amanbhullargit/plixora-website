import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';
import { ModalType } from '../types';

interface HeroProps {
  onOpenModal: (type: ModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#050505]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50 mix-blend-screen scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        {/* Soft dark vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        
        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c59237]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12 md:pt-20">
        <div className="max-w-4xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#f5bd5e]/30 glass-surface mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#f5bd5e]" />
            <span className="font-outfit text-xs tracking-[0.2em] uppercase font-semibold text-[#f7de98]">
              AI-Powered Media & Creator Ecosystem
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[1.08] tracking-tight mb-8 text-[#ebe1d6]">
            Big Ideas.<br />
            Bold Media.<br />
            <span className="liquid-gold-text">Unforgettable Impact.</span>
          </h1>

          {/* Body Description */}
          <p className="font-outfit text-base sm:text-lg lg:text-xl text-[#d3c4b1] max-w-xl mb-12 border-l-2 border-[#f5bd5e]/40 pl-6 leading-relaxed font-light">
            Plixora Global is an AI-powered media & creator ecosystem that connects brands, creators and communities through innovative campaigns and integrated media execution.
          </p>

          {/* Interactive CTA Actions */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="group flex items-center space-x-3 font-outfit text-xs sm:text-sm tracking-[0.2em] font-bold text-[#f5bd5e] hover:text-[#f7de98] transition-all duration-300"
            >
              <span className="border-b-2 border-[#f5bd5e] group-hover:border-[#f7de98] pb-1">
                EXPLORE OUR WORK
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 text-[#f5bd5e]" />
            </a>

            <button
              onClick={() => onOpenModal('ai-planner')}
              className="px-6 py-3 rounded-full border border-[#f5bd5e]/40 glass-surface text-xs font-outfit tracking-widest text-[#f7de98] hover:border-[#f5bd5e] hover:bg-[#f5bd5e]/10 transition-all shadow-[0_0_20px_rgba(197,146,55,0.15)]"
            >
              PLAN A CAMPAIGN WITH AI
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Mouse Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-6 h-10 border-2 border-[#d3c4b1]/40 rounded-full flex justify-center pt-2 hover:border-[#f5bd5e]">
            <div className="w-1.5 h-3 bg-[#f5bd5e] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
