import React from 'react';

interface PlixoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PlixoraLogo: React.FC<PlixoraLogoProps> = ({ className = '', size = 'md' }) => {
  const heightMap = {
    sm: 'h-11',
    md: 'h-16 sm:h-20',
    lg: 'h-24 sm:h-28',
    xl: 'h-36 sm:h-44',
  };

  return (
    <div className={`inline-flex items-center justify-center ${className || heightMap[size] || 'h-16'}`}>
      <svg
        viewBox="0 0 560 380"
        className="h-full w-auto filter drop-shadow-[0_4px_16px_rgba(217,155,38,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Authentic Metallic Gold Multi-stop Gradient */}
          <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FFF4BC" />
            <stop offset="20%" stopColor="#F5C05E" />
            <stop offset="45%" stopColor="#D89A2B" />
            <stop offset="70%" stopColor="#F9E09C" />
            <stop offset="90%" stopColor="#C38E32" />
            <stop offset="100%" stopColor="#8A5A12" />
          </linearGradient>

          {/* Light Bevel Highlight Gradient */}
          <linearGradient id="gold-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B37D1E" stopOpacity="0.3" />
          </linearGradient>

          {/* Crescent Arc Shading */}
          <linearGradient id="arc-grad-top" x1="10%" y1="100%" x2="90%" y2="0%">
            <stop offset="0%" stopColor="#B88322" />
            <stop offset="35%" stopColor="#FDE68A" />
            <stop offset="70%" stopColor="#D99B26" />
            <stop offset="100%" stopColor="#F5BD5E" />
          </linearGradient>

          <linearGradient id="arc-grad-bottom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C59237" />
            <stop offset="40%" stopColor="#FFF2A8" />
            <stop offset="75%" stopColor="#D99B26" />
            <stop offset="100%" stopColor="#7A4E0B" />
          </linearGradient>
        </defs>

        {/* --- TOP SWEEPING CRESCENT ORBIT ARCS --- */}
        {/* Main Thick Tapered Crescent Arc */}
        <path
          d="M 105 152 C 145 92, 230 72, 315 90 C 335 94, 350 102, 362 110 C 342 98, 320 88, 290 84 C 215 74, 142 96, 112 145 C 109 148, 107 150, 105 152 Z"
          fill="url(#arc-grad-top)"
        />

        {/* Inner Parallel Thin Sweep */}
        <path
          d="M 132 128 C 172 88, 245 78, 310 94 C 255 82, 185 92, 142 125 Z"
          fill="url(#gold-metallic)"
          opacity="0.9"
        />

        {/* Orbiting Satellite Sphere */}
        <circle cx="348" cy="138" r="10.5" fill="url(#gold-metallic)" />
        <circle cx="346" cy="136" r="4" fill="#FFF9DF" opacity="0.6" />

        {/* --- MAIN BRAND NAME: PLIXORA --- */}
        <g fill="url(#gold-metallic)">
          {/* P */}
          <path d="M 12 172 H 58 C 76 172, 88 181, 88 197 C 88 213, 76 222, 58 222 H 30 V 262 H 12 V 172 Z M 30 187 V 207 H 56 C 66 207, 70 203, 70 197 C 70 191, 66 187, 56 187 H 30 Z" />

          {/* L */}
          <path d="M 98 172 H 116 V 246 H 154 V 262 H 98 V 172 Z" />

          {/* I */}
          <path d="M 166 172 H 184 V 262 H 166 V 172 Z" />

          {/* X */}
          <path d="M 198 172 H 218 L 243 212 L 268 172 H 288 L 253 217 L 290 262 H 270 L 243 222 L 216 262 H 196 L 233 217 Z" />
        </g>

        {/* --- GLOBE WIREFRAME FOR 'O' (Centered at X=324, Y=217) --- */}
        <g transform="translate(324, 217)">
          {/* Outer Ring */}
          <circle cx="0" cy="0" r="43" stroke="url(#gold-metallic)" strokeWidth="5.5" fill="none" />
          
          {/* Equator & Latitudes */}
          <line x1="-42" y1="0" x2="42" y2="0" stroke="url(#gold-metallic)" strokeWidth="2.5" />
          <ellipse cx="0" cy="0" rx="42" ry="18" stroke="url(#gold-metallic)" strokeWidth="2" fill="none" />
          <ellipse cx="0" cy="0" rx="42" ry="32" stroke="url(#gold-metallic)" strokeWidth="1.5" fill="none" opacity="0.75" />

          {/* Prime Meridian & Longitudes */}
          <line x1="0" y1="-42" x2="0" y2="42" stroke="url(#gold-metallic)" strokeWidth="2.5" />
          <ellipse cx="0" cy="0" rx="18" ry="42" stroke="url(#gold-metallic)" strokeWidth="2" fill="none" />
          <ellipse cx="0" cy="0" rx="32" ry="42" stroke="url(#gold-metallic)" strokeWidth="1.5" fill="none" opacity="0.75" />
        </g>

        <g fill="url(#gold-metallic)">
          {/* R */}
          <path d="M 380 172 H 426 C 444 172, 456 181, 456 196 C 456 209, 446 218, 432 220 L 460 262 H 438 L 414 222 H 398 V 262 H 380 V 172 Z M 398 187 V 207 H 424 C 433 207, 437 203, 437 197 C 437 191, 433 187, 424 187 H 398 Z" />

          {/* A */}
          <path d="M 488 172 H 508 L 548 262 H 527 L 518 240 H 478 L 469 262 H 448 Z M 484 225 H 512 L 498 190 Z" />
        </g>

        {/* --- SUBTITLE: GLOBAL --- */}
        <g fill="url(#gold-metallic)" fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="28" letterSpacing="15">
          <text x="162" y="308">GLOBAL</text>
        </g>

        {/* --- BOTTOM SWEEPING CRESCENT ORBIT ARCS --- */}
        {/* Main Bottom Thick Tapered Crescent Arc */}
        <path
          d="M 88 270 C 130 355, 235 380, 328 352 C 300 366, 210 368, 128 332 C 95 318, 88 285, 88 270 Z"
          fill="url(#arc-grad-bottom)"
        />

        {/* Secondary Inner Bottom Arc */}
        <path
          d="M 112 290 C 145 352, 230 366, 298 344 C 230 358, 155 344, 118 298 Z"
          fill="url(#gold-metallic)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

