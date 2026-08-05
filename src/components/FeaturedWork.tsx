import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FEATURED_CASE_STUDIES } from '../data/content';
import { CaseStudy, ModalType } from '../types';

interface FeaturedWorkProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenModal: (type: ModalType) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenCaseStudy, onOpenModal }) => {
  return (
    <section id="work" className="py-24 lg:py-36 bg-[#111111] text-[#ebe1d6] relative px-6 sm:px-8 lg:px-12 border-t border-b border-white/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                FEATURED WORK
              </span>
              <div className="h-px w-12 bg-[#f5bd5e]/30" />
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.18]">
              Work that<br />
              creates <span className="liquid-gold-text font-playfair italic font-bold">impact.</span>
            </h2>
          </div>

          <button
            onClick={() => onOpenModal('services')}
            className="group flex items-center space-x-4 font-outfit text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-[#d3c4b1] hover:text-[#f5bd5e] transition-all"
          >
            <span>VIEW ALL WORK</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 text-[#f5bd5e]" />
          </button>
        </div>

        {/* 3 Featured Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onClick={() => onOpenCaseStudy(study)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#1a160e] cursor-pointer ambient-glow hover:shadow-[0_0_60px_rgba(197,146,55,0.3)] transition-all duration-500 border border-white/10 hover:border-[#f5bd5e]/50"
            >
              {/* Background Image */}
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Top Right Glass Badge */}
              <div className="absolute top-5 right-5 glass-surface px-3.5 py-1.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-3 group-hover:translate-x-0 shadow-lg">
                <span className="font-outfit text-[11px] font-bold tracking-widest text-[#f5bd5e]">
                  {study.badgeMetric}
                </span>
              </div>

              {/* Card Bottom Details */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-outfit text-xs uppercase tracking-widest text-[#f5bd5e] font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {study.category}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-[#f7de98] transition-colors">
                  {study.title}
                </h3>
                <p className="font-outfit text-xs sm:text-sm text-[#d3c4b1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2">
                  {study.subtitle}
                </p>

                <div className="mt-3 flex items-center space-x-2 text-xs font-outfit text-[#f5bd5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-semibold">
                  <span>EXPLORE CASE STUDY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
