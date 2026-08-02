import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="w-full py-24 bg-[#050505] text-[#ebe1d6] border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Glow Wave */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#c59237]/10 rounded-full blur-[140px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Big Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] mb-8">
              Let's build something<br />
              <span className="liquid-gold-text">extraordinary</span> together.
            </h2>
            <p className="font-outfit text-sm text-[#d3c4b1] max-w-md font-light leading-relaxed">
              Partner with India's leading AI-backed creator & media ecosystem for elevated campaign storytelling and guaranteed brand reach.
            </p>
          </div>

          {/* Right Column: Connect Email & Modal CTA */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-md border-b border-white/20 pb-8 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-outfit text-xs tracking-[0.25em] uppercase font-bold text-[#f5bd5e]">
                  LET'S CONNECT
                </span>
                <div className="h-px w-12 bg-[#f5bd5e]/30" />
              </div>

              <a
                href="mailto:contact@plixora.in"
                className="group flex justify-between items-center w-full hover:opacity-80 transition-all py-2"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#f5bd5e]" />
                  <span className="font-outfit text-lg sm:text-2xl text-white group-hover:text-[#f5bd5e] transition-colors font-medium">
                    contact@plixora.in
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 text-[#f5bd5e] transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>

            <button
              onClick={() => onOpenModal('contact')}
              className="w-full max-w-md py-3.5 rounded-full bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(197,146,55,0.3)]"
            >
              TRANSMIT PROJECT BRIEF
            </button>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#d3c4b1] gap-6">
          <p className="font-outfit">
            © 2024 Plixora Global. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-6 sm:gap-8 font-outfit uppercase tracking-widest font-semibold text-[11px]">
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#f5bd5e] transition-colors">Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#f5bd5e] transition-colors">About</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-[#f5bd5e] transition-colors">Services</a></li>
            <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-[#f5bd5e] transition-colors">Work</a></li>
            <li><a href="#clients" onClick={(e) => handleNavClick(e, '#clients')} className="hover:text-[#f5bd5e] transition-colors">Clients</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#f5bd5e] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
