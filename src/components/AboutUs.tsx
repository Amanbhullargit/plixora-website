import React from 'react';
import { ArrowRight, Award, Users, TrendingUp, Globe } from 'lucide-react';
import { ModalType } from '../types';

interface AboutUsProps {
  onOpenModal: (type: ModalType) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenModal }) => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#111111] text-[#ebe1d6] relative px-6 sm:px-8 lg:px-12 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column: Heading & Badge */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                ABOUT US
              </span>
              <div className="h-px w-12 bg-[#f5bd5e]/30" />
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.18] tracking-tight">
              We turn ideas<br />
              into <span className="liquid-gold-text font-playfair italic font-bold">movements.</span>
            </h2>
          </div>

          {/* Right Column: Paragraph & Action */}
          <div className="lg:pl-8 border-l-0 lg:border-l border-white/10 flex flex-col justify-between">
            <p className="font-outfit text-base sm:text-lg lg:text-xl text-[#d3c4b1] mb-8 leading-relaxed font-light">
              We are a media and influencer marketing company driven by technology, creativity and strategy. From digital to on-ground, we craft campaigns that build brand love and deliver real results.
            </p>

            <div>
              <button
                onClick={() => onOpenModal('about')}
                className="group flex items-center space-x-4 font-outfit text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#d3c4b1] hover:text-[#f5bd5e] transition-all duration-300"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 text-[#f5bd5e]" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid Highlight Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          <div className="p-6 rounded-2xl glass-surface border border-white/5 flex flex-col items-start hover:border-[#f5bd5e]/30 transition-all">
            <Globe className="w-6 h-6 text-[#f5bd5e] mb-3" />
            <span className="font-cinzel text-3xl lg:text-4xl font-bold text-[#f7de98] mb-1">500M+</span>
            <span className="font-outfit text-xs text-[#d3c4b1] tracking-wider uppercase">Cross-Media Impressions</span>
          </div>

          <div className="p-6 rounded-2xl glass-surface border border-white/5 flex flex-col items-start hover:border-[#f5bd5e]/30 transition-all">
            <Users className="w-6 h-6 text-[#f5bd5e] mb-3" />
            <span className="font-cinzel text-3xl lg:text-4xl font-bold text-[#f7de98] mb-1">1,200+</span>
            <span className="font-outfit text-xs text-[#d3c4b1] tracking-wider uppercase">Verified Creators & Celebrities</span>
          </div>

          <div className="p-6 rounded-2xl glass-surface border border-white/5 flex flex-col items-start hover:border-[#f5bd5e]/30 transition-all">
            <Award className="w-6 h-6 text-[#f5bd5e] mb-3" />
            <span className="font-cinzel text-3xl lg:text-4xl font-bold text-[#f7de98] mb-1">150+</span>
            <span className="font-outfit text-xs text-[#d3c4b1] tracking-wider uppercase">Marquee Global Brands</span>
          </div>

          <div className="p-6 rounded-2xl glass-surface border border-white/5 flex flex-col items-start hover:border-[#f5bd5e]/30 transition-all">
            <TrendingUp className="w-6 h-6 text-[#f5bd5e] mb-3" />
            <span className="font-cinzel text-3xl lg:text-4xl font-bold text-[#f7de98] mb-1">4.8x</span>
            <span className="font-outfit text-xs text-[#d3c4b1] tracking-wider uppercase">Average Brand Campaign ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
