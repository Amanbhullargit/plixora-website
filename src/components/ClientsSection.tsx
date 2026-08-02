import React from 'react';

interface LogoProps {
  className?: string;
}

const CocaColaLogo: React.FC<LogoProps> = ({ className = "h-9" }) => (
  <div className="flex items-center justify-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
      alt="Coca-Cola"
      className={`${className} w-auto max-w-[130px] object-contain transition-transform duration-300 hover:scale-105`}
    />
  </div>
);

const MamaearthLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2.5 ${className}`}>
    <div className="w-7 h-7 rounded-full bg-[#88c040]/20 flex items-center justify-center p-1">
      <svg className="w-5 h-5 text-[#88c040]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.53-.61C9.37 20.73 10.64 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 14h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-outfit font-bold tracking-tight text-xl lowercase leading-none text-white">
        mama<span className="text-[#88c040]">earth</span>
      </span>
      <span className="text-[9px] font-sans text-[#a0c860] tracking-widest uppercase mt-0.5 font-semibold">
        Goodness Inside
      </span>
    </div>
  </div>
);

const BoatLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2.5 ${className}`}>
    <svg className="w-8 h-8" viewBox="0 0 100 100">
      <path d="M20 75 L50 20 L80 75 L50 65 Z" fill="#e50914" />
      <path d="M10 82 L90 82 L80 92 L20 92 Z" fill="#ffffff" />
    </svg>
    <span className="font-inter font-black italic tracking-tighter text-2xl lowercase text-white">
      bo<span className="text-[#e50914] uppercase">A</span>t
    </span>
  </div>
);

const ZeeLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2.5 ${className}`}>
    <div className="bg-gradient-to-tr from-[#ec008c] via-[#fc6767] to-[#ff007f] text-white px-3 py-1 rounded-md font-black font-cinzel text-lg tracking-widest shadow-md">
      ZEE
    </div>
    <span className="font-outfit font-bold text-xs uppercase tracking-widest text-white">
      ENTERTAINMENT
    </span>
  </div>
);

const SamsungLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center justify-center px-4 py-1.5 rounded-full bg-[#1428A0] text-white shadow-md ${className}`}>
    <span className="font-inter font-extrabold tracking-[0.25em] text-sm uppercase">
      SAMSUNG
    </span>
  </div>
);

const PumaLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2 text-white ${className}`}>
    <svg className="w-8 h-8 fill-white" viewBox="0 0 100 100">
      <path d="M85 25 C 75 15, 60 20, 50 30 C 40 40, 30 45, 15 45 C 10 45, 5 48, 5 52 C 5 58, 15 60, 25 55 C 35 50, 45 45, 55 52 C 65 60, 75 65, 85 55 C 90 50, 92 35, 85 25 Z" />
      <circle cx="20" cy="30" r="4" />
    </svg>
    <span className="font-inter font-black italic tracking-tight text-2xl uppercase">
      PUMA
    </span>
  </div>
);

const DhvoneLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
    <svg className="w-7 h-7 text-[#f5bd5e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="font-cinzel font-bold tracking-wider text-base uppercase text-white">
        DHVONE
      </span>
      <span className="text-[8px] font-outfit text-[#f5bd5e] tracking-[0.2em] -mt-1 font-bold">
        MEDIA NETWORK
      </span>
    </div>
  </div>
);

const LaqshyaLogo: React.FC<LogoProps> = ({ className = "h-8" }) => (
  <div className={`flex items-center space-x-2.5 ${className}`}>
    <div className="w-7 h-7 rounded border-2 border-[#FF6600] flex items-center justify-center p-0.5">
      <div className="w-full h-full bg-[#FF6600] rounded-sm flex items-center justify-center">
        <span className="text-white font-black text-xs">L</span>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <span className="font-cinzel font-extrabold tracking-widest text-base uppercase text-white">
        LAQSHYA
      </span>
      <span className="text-[8px] font-outfit text-[#FF6600] tracking-[0.25em] -mt-1 font-bold">
        MEDIA GROUP
      </span>
    </div>
  </div>
);

export const ClientsSection: React.FC = () => {
  const clientsList = [
    { id: 'coca-cola', Component: CocaColaLogo },
    { id: 'mamaearth', Component: MamaearthLogo },
    { id: 'boat', Component: BoatLogo },
    { id: 'zee', Component: ZeeLogo },
    { id: 'samsung', Component: SamsungLogo },
    { id: 'puma', Component: PumaLogo },
    { id: 'dhvone', Component: DhvoneLogo },
    { id: 'laqshya', Component: LaqshyaLogo },
  ];

  return (
    <section id="clients" className="py-20 bg-[#08080a] text-[#ebe1d6] border-y border-white/10 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* Section Pill Badge */}
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-px w-8 bg-[#f5bd5e]/30" />
          <span className="font-outfit text-xs tracking-[0.25em] font-bold text-[#f5bd5e] border border-[#f5bd5e]/30 px-5 py-2 rounded-full glass-surface shadow-md">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <div className="h-px w-8 bg-[#f5bd5e]/30" />
        </div>

        {/* Client Logos Grid / Continuous Stream */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-around min-w-[1000px] gap-8 px-4">
            {clientsList.map(({ id, Component }, idx) => (
              <React.Fragment key={id}>
                <div className="group cursor-pointer py-3 px-4 transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                  <Component />
                </div>
                {idx < clientsList.length - 1 && (
                  <div className="h-8 w-px bg-white/10 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

