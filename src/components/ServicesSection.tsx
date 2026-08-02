import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ModalType } from '../types';

interface ServicesSectionProps {
  onOpenModal: (type: ModalType, serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#050505] text-[#ebe1d6] relative px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#c59237_0%,transparent_60%)]" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                SERVICES
              </span>
              <div className="h-px w-12 bg-[#f5bd5e]/30" />
            </div>

            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.18] mb-8 text-[#ebe1d6]">
              End-to-end solutions.<br />
              <span className="liquid-gold-text">Online to Offline.</span>
            </h2>

            <p className="font-outfit text-sm sm:text-base text-[#d3c4b1] mb-10 font-light leading-relaxed">
              We engineer full-funnel media ecosystems that seamlessly scale across digital creator channels, live event arenas, and pan-national OOH networks.
            </p>

            <button
              onClick={() => onOpenModal('services')}
              className="hidden lg:flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(197,146,55,0.3)]"
            >
              <span>EXPLORE FULL CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7">
          <div className="flex flex-col border-t border-white/10">
            {SERVICES_LIST.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={service.id}
                  className={`border-b border-white/10 transition-all duration-300 rounded-xl overflow-hidden ${
                    isOpen ? 'bg-[#111111]/80 shadow-[0_0_30px_rgba(197,146,55,0.1)] border-[#f5bd5e]/30 my-3' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-6 px-4 sm:px-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-6 sm:space-x-10">
                      <span className="font-outfit text-xs font-semibold tracking-widest text-[#f5bd5e]/70 group-hover:text-[#f5bd5e]">
                        {service.number}
                      </span>
                      <h3 className={`font-cinzel text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 ${
                        isOpen ? 'text-[#f5bd5e]' : 'text-[#ebe1d6] group-hover:text-[#f5bd5e]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-full border transition-all duration-300 ${
                      isOpen ? 'border-[#f5bd5e] bg-[#f5bd5e]/10 text-[#f5bd5e] rotate-45' : 'border-white/20 text-[#d3c4b1] group-hover:border-[#f5bd5e] group-hover:text-[#f5bd5e]'
                    }`}>
                      <Plus className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-8 pt-2 animate-fadeIn">
                      <p className="font-outfit text-sm sm:text-base text-[#d3c4b1] mb-6 leading-relaxed font-light pl-12 sm:pl-16">
                        {service.fullDesc}
                      </p>

                      <div className="pl-12 sm:pl-16 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-[#d3c4b1]">
                            <CheckCircle2 className="w-4 h-4 text-[#f5bd5e] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pl-12 sm:pl-16 pt-2">
                        <button
                          onClick={() => onOpenModal('contact', service.title)}
                          className="inline-flex items-center space-x-2 text-xs font-outfit font-bold tracking-widest text-[#f5bd5e] hover:text-[#f7de98] transition-colors"
                        >
                          <span>INQUIRE ABOUT THIS SERVICE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-end">
            <button
              onClick={() => onOpenModal('services')}
              className="group flex items-center space-x-4 font-outfit text-xs sm:text-sm tracking-[0.2em] font-bold text-[#f5bd5e] hover:text-[#f7de98] transition-all"
            >
              <span className="border-b border-[#f5bd5e] pb-1">VIEW ALL SERVICES</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
