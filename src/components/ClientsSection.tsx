import React, { useState, useEffect } from 'react';

interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  outlined?: boolean; // Set to true to add a 2px golden outline
}

// ─────────────────────────────────────────────────────────────────────────────
// To add a new logo: just drop the image file into the /assets/ folder and
// add a matching entry below.
// To add a golden outline to ANY logo, simply add: outlined: true
// ─────────────────────────────────────────────────────────────────────────────

const clientsList: BrandItem[] = [
  { id: 'pears', name: 'Pears', logoUrl: '/assets/Pears.png', outlined: true },
  { id: 'vaseline', name: 'Vaseline', logoUrl: '/assets/vaseline.png' },
  { id: 'surfexcel', name: 'Surf Excel', logoUrl: '/assets/surfexcel.png' },
  { id: 'skyyvodka', name: 'SKYY Vodka', logoUrl: '/assets/skyyvodka.png' },
  { id: 'rapido', name: 'Rapido', logoUrl: '/assets/rapido.png' },
  { id: 'nuego', name: 'Nuego', logoUrl: '/assets/nuego.png' },
  { id: 'legacy', name: 'Legacy', logoUrl: '/assets/legacy.png' },
  { id: 'sony', name: 'Sony', logoUrl: '/assets/sony.png' },
  { id: 'honda', name: 'Honda', logoUrl: '/assets/honda.png' },
  { id: 'havells', name: 'Havells', logoUrl: '/assets/havells.png' },
  { id: 'tvs', name: 'TVS', logoUrl: '/assets/tvs.png' },
  { id: 'teasme', name: "Tea'sme", logoUrl: '/assets/teasme.png' },
  { id: 'navcci', name: 'Navcci', logoUrl: '/assets/navcci.png' },
  { id: 'mansion', name: 'Mansion', logoUrl: '/assets/mansion.png' },
  { id: 'chaichilam', name: 'Chai Chilam', logoUrl: '/assets/chaichilam.png' },
];

const mediaPartners: BrandItem[] = [
  { id: 'dainik-jagran', name: 'Dainik Jagran', logoUrl: '/assets/dainik-jagran.png' },
  { id: 'hindustan', name: 'Hindustan', logoUrl: '/assets/hindustan.png' },
  { id: 'amar-ujala', name: 'Amar Ujala', logoUrl: '/assets/amar-ujala.png' },
  { id: 'radical', name: 'Radical', logoUrl: '/assets/radical.png' },
  { id: 'times-of-india', name: 'Times of India', logoUrl: '/assets/times-of-india.png' },
  { id: 'hindustan-times', name: 'Hindustan Times', logoUrl: '/assets/hindustan-times.png' },
];

const oohPartners: BrandItem[] = [
  { id: 'elex', name: 'Elex OOH', logoUrl: '/assets/elex.png' },
  { id: 'times-ooh', name: 'Times OOH', logoUrl: '/assets/times-ooh.png' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Pre-check which logo files actually exist by attempting to load them.
// Returns only the brands whose image loaded successfully.
// ─────────────────────────────────────────────────────────────────────────────
function useAvailableBrands(brands: BrandItem[]): BrandItem[] {
  const [available, setAvailable] = useState<BrandItem[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      const results = await Promise.all(
        brands.map(
          (brand) =>
            new Promise<BrandItem | null>((resolve) => {
              const img = new Image();
              img.onload = () => resolve(brand);
              img.onerror = () => resolve(null);
              img.src = brand.logoUrl;
            })
        )
      );
      if (!cancelled) {
        setAvailable(results.filter((b): b is BrandItem => b !== null));
      }
    }

    check();
    return () => { cancelled = true; };
  }, [brands]);

  return available;
}

// ─────────────────────────────────────────────────────────────────────────────
// Logo box: fixed height of 30px, width auto-matches the logo's aspect ratio.
// ─────────────────────────────────────────────────────────────────────────────
const LOGO_HEIGHT = 35; // px

const BrandLogo: React.FC<{ brand: BrandItem }> = ({ brand }) => (
  <div
    className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110"
    style={{ height: LOGO_HEIGHT }}
  >
    <img
      src={brand.logoUrl}
      alt={brand.name}
      className={`h-full w-auto object-contain ${brand.outlined ? 'logo-gold-outline' : ''}`}
      draggable={false}
    />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Centered logo grid – uses flexbox-wrap so items auto-center regardless of
// how many are present (1, 2, 6, etc.).
// ─────────────────────────────────────────────────────────────────────────────
const LogoGrid: React.FC<{ brands: BrandItem[] }> = ({ brands }) => {
  if (brands.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-20">
      {brands.map((brand) => (
        <BrandLogo key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export const ClientsSection: React.FC = () => {
  const availableClients = useAvailableBrands(clientsList);
  const availableMedia = useAvailableBrands(mediaPartners);
  const availableOoh = useAvailableBrands(oohPartners);

  // Marquee needs enough items to scroll; triplicate the verified ones
  const marqueeClients =
    availableClients.length > 0
      ? [...availableClients, ...availableClients, ...availableClients]
      : [];

  // Use static centered layout when there are too few logos to scroll
  const useMarquee = availableClients.length >= 4;

  return (
    <section id="clients" className="py-24 bg-[#08080a] text-[#ebe1d6] border-y border-white/10 relative overflow-hidden">
      {/* Ambient Gold Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#f5bd5e]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center">

        {/* Header Badge */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="h-px w-10 bg-[#f5bd5e]/40" />
          <span className="font-outfit text-xs tracking-[0.25em] font-bold text-[#f5bd5e] border border-[#f5bd5e]/40 px-6 py-2.5 rounded-full bg-[#111217] shadow-[0_0_20px_rgba(245,189,94,0.15)] uppercase">
            OUR PRESTIGIOUS NETWORK
          </span>
          <div className="h-px w-10 bg-[#f5bd5e]/40" />
        </div>

        {/* ══════════════════════════════════════════ */}
        {/* 1. OUR CLIENTS                            */}
        {/* ══════════════════════════════════════════ */}
        {availableClients.length > 0 && (
          <div className="w-full mb-20 overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-widest text-white uppercase relative inline-block">
                OUR CLIENTS
                <span className="block h-0.5 w-full bg-gradient-to-r from-transparent via-[#f5bd5e] to-transparent mt-2" />
              </h2>
              <p className="font-outfit text-xs text-[#d3c4b1] mt-2">
                Trusted by industry leaders across FMCG, Automotive, Entertainment &amp; Lifestyle
              </p>
            </div>

            {useMarquee ? (
              /* Scrolling marquee for 4+ logos */
              <div className="relative w-full overflow-hidden py-6">
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#08080a] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#08080a] to-transparent z-20 pointer-events-none" />

                <div className="animate-marquee flex items-center gap-10 sm:gap-20">
                  {marqueeClients.map((brand, idx) => (
                    <div
                      key={`${brand.id}-${idx}`}
                      className="shrink-0 flex items-center justify-center"
                    >
                      <BrandLogo brand={brand} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Centered static layout for 1-3 logos */
              <div className="py-6">
                <LogoGrid brands={availableClients} />
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════════════════════ */}
        {/* 2. MEDIA PARTNERS                         */}
        {/* ══════════════════════════════════════════ */}
        {availableMedia.length > 0 && (
          <div className="w-full mb-16">
            <div className="text-center mb-10">
              <h2 className="font-cinzel text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase relative inline-block">
                MEDIA PARTNERS
                <span className="block h-0.5 w-full bg-gradient-to-r from-transparent via-[#f5bd5e] to-transparent mt-2" />
              </h2>
            </div>

            <LogoGrid brands={availableMedia} />
          </div>
        )}

        {/* ══════════════════════════════════════════ */}
        {/* 3. OOH PARTNERS                           */}
        {/* ══════════════════════════════════════════ */}
        {availableOoh.length > 0 && (
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="font-cinzel text-xl sm:text-2xl font-extrabold tracking-widest text-white uppercase relative inline-block">
                OOH PARTNERS
                <span className="block h-0.5 w-full bg-gradient-to-r from-transparent via-[#f5bd5e] to-transparent mt-2" />
              </h2>
            </div>

            <LogoGrid brands={availableOoh} />
          </div>
        )}

      </div>
    </section>
  );
};
