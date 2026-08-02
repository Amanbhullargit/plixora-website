import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { ModalType } from '../types';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#f5bd5e]/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#050505]/40 backdrop-blur-md border-b border-white/5 py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg className="w-full h-full filter drop-shadow-[0_0_8px_rgba(245,189,94,0.4)]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="44" stroke="url(#gold-grad-nav)" strokeWidth="2" strokeDasharray="8 4" />
              <ellipse cx="50" cy="50" rx="36" ry="18" transform="rotate(-25 50 50)" stroke="url(#gold-grad-nav)" strokeWidth="2" />
              <circle cx="50" cy="50" r="10" fill="url(#gold-grad-nav)" />
              <defs>
                <linearGradient id="gold-grad-nav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f7de98" />
                  <stop offset="50%" stopColor="#f5bd5e" />
                  <stop offset="100%" stopColor="#c59237" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xl lg:text-2xl font-bold tracking-tight text-[#f5bd5e]">
              Plixora Global
            </span>
            <span className="text-[10px] tracking-[0.25em] font-outfit uppercase text-[#d3c4b1]/70 font-semibold -mt-1">
              Media & Creators
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-outfit text-xs tracking-[0.2em] uppercase font-semibold">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-300 relative py-1 px-1 ${
                    isActive
                      ? 'text-[#f5bd5e] border-b-2 border-[#f5bd5e]'
                      : 'text-[#d3c4b1] hover:text-[#f5bd5e]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => onOpenModal('ai-planner')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#f5bd5e]/40 glass-surface text-xs font-outfit tracking-widest text-[#f7de98] hover:border-[#f5bd5e] hover:bg-[#f5bd5e]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,189,94,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f5bd5e]" />
            <span>AI CAMPAIGN ESTIMATOR</span>
          </button>
          
          <button
            onClick={() => onOpenModal('contact')}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all shadow-[0_4px_15px_rgba(197,146,55,0.3)] hover:shadow-[0_0_25px_rgba(245,189,94,0.5)]"
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => onOpenModal('ai-planner')}
            className="p-2 rounded-full border border-[#f5bd5e]/30 text-[#f5bd5e] text-xs font-outfit"
            title="AI Planner"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f5bd5e] p-2 rounded-lg border border-[#f5bd5e]/20 hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-[#f5bd5e]/30 px-6 py-6 transition-all animate-fadeIn">
          <ul className="flex flex-col space-y-4 font-outfit text-sm tracking-widest uppercase font-semibold">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-[#d3c4b1] hover:text-[#f5bd5e] py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('ai-planner');
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-[#f5bd5e]/40 text-[#f7de98] font-outfit text-xs font-bold tracking-widest"
            >
              <Sparkles className="w-4 h-4 text-[#f5bd5e]" />
              <span>AI CAMPAIGN ESTIMATOR</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('contact');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest shadow-lg"
            >
              START A CAMPAIGN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
