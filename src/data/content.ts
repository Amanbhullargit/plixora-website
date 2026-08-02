import { ServiceItem, CaseStudy, ClientLogo } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuApywX5uaQx4h6Q4kSHp-miA9yg--fQZG_UogvPpNtKFb4tJ3j-MQob_2VDFkxYqS2sQDIRLDZzpuDHIPx3IL-JzOYvDrsf8cQOqcoMcHG5qz7K_q8_qpkwLQFA4nd1QQLM8rtdBp8AkfMdJCmWdg7d1MrkqA5PYbsj-ew8BPHolvoTBN0mAv897YEqyzdgwqrCOIi1cxfD78zz396Z1RUfc8e-WLwQVFTGAajwdA-7eyYi_FkpjdA4tIOjpOwX-VzeighjiZPiXAg";

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'influencer-marketing',
    number: '01',
    title: 'Influencer Marketing',
    shortDesc: 'Data-driven creator discovery, campaign storytelling, content calendars, and transparent ROI reporting across top digital platforms.',
    fullDesc: 'We connect global and domestic brands with Tier-1 celebrities, macro creators, and hyper-local micro influencers. Our AI matchmaker engine analyzes audience demographics, fake follower ratios, and sentiment trends to maximize campaign engagement.',
    features: [
      'Multi-platform Creator Matchmaking (Instagram, YouTube, X)',
      'Contracting, Licensing & Usage Rights Management',
      'Real-time Engagement & Conversion Analytics',
      'Hyper-targeted Regional & Vernacular Outreach'
    ]
  },
  {
    id: 'brand-campaigns',
    number: '02',
    title: 'Brand Campaigns',
    shortDesc: 'AI-backed audience sentiment analysis, trend forecasting, long-term brand ambassador programs, and high-converting UGC campaigns.',
    fullDesc: 'From high-concept digital films to viral user-generated content (UGC) waves, we engineer multi-channel brand transformations that build genuine emotional affinity and sustainable brand recall.',
    features: [
      '360° Creative Campaign Direction & Production',
      'Brand Ambassador Strategy & Talent Pairing',
      'Generative AI Content Optimization',
      'Cross-channel Distribution Blueprinting'
    ]
  },
  {
    id: 'events-activations',
    number: '03',
    title: 'Events & Activations',
    shortDesc: 'Influencer-driven footfall campaigns, celebrity & artist booking, VIP PR management, and on-ground brand integrations.',
    fullDesc: 'We bridge digital virality with physical experiences. Plixora Global crafts experiential arenas, influencer red-carpet summits, pop-up installations, and mega-concert brand activations that command live and viral attention.',
    features: [
      'On-ground Experiential Design & Fabrication',
      'Exclusive VIP Creator Lounges & Live Broadcast Studios',
      'Celebrity Artist Booking & Stage Management',
      'Live Event Digital Amplification & Hashtag Trends'
    ]
  },
  {
    id: 'offline-media',
    number: '04',
    title: 'Offline Media',
    shortDesc: 'Pan-India hoardings, billboards, transit airport/metro screens, newspaper jacketing, and synchronized online + offline branding.',
    fullDesc: 'Dominating high-visibility physical spaces across prime metros and tier-2 corridors. We blend traditional Out-Of-Home (OOH) media with digital QR engagement to track real-world conversions.',
    features: [
      'Prime Billboard & Digital OOH Screen Inventory',
      'Airport, Metro & Rail Transit Dominance',
      'Synchronized Online-to-Offline (O2O) Attribution',
      'Print Media Front-page Jacketing & Press Relations'
    ]
  },
  {
    id: 'tourism-govt',
    number: '05',
    title: 'Tourism & Govt. Campaigns',
    shortDesc: 'Official government collaborations for cultural heritage storytelling, spiritual tourism promotion, and multilingual regional content execution.',
    fullDesc: 'Trusted by state tourism boards and government bodies to execute large-scale cultural expeditions, heritage site promotions, and socio-economic awareness drives reaching millions of citizens.',
    features: [
      'Multilingual Regional Creator Expeditions',
      'Heritage & Cultural Preservation Storytelling',
      'State & Central Govt. Compliance & Public Relations',
      'High-impact Cinematic Video Documentaries'
    ]
  }
];

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'coca-cola',
    client: 'Coca-Cola',
    title: 'Coca-Cola',
    subtitle: 'Brand Refresh & Creator Activation',
    badgeMetric: '2.4M IMPRESSIONS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEab1jgDLYGgbxcBhVlFwjSoq6z_kz6YgBLw3V16WLCuaGG6OelpfyaAXAiz73pX-QqA8cHgHEY1_rSWP98fVLTZRCmAbLWHbBcKw7aVrrfMc3r6M0tqMpPPWHusI7hRkAEsXYtAQKcVtbWr5QL2GWcfOBkY1PsNmktxGIHIhWks_9dmvyTiRZ5wwQ5dOuYXAarPhYdw1Cdp1ph7SC7fPBR8Vg0IW_oCQrOnTYXtGqGcsE9LnRO3TaKEqx8TxNHXj0DH387e4bptQ',
    metrics: '2.4M Impressions | 3.2x Engagement Lift | 120+ Creators',
    description: 'We orchestrated a nationwide AI-enhanced visual challenge where top lifestyle and food creators showcased cinematic beverage moments. By pairing macro influencers with micro regional storytellers, the brand achieved record-breaking organic shares and retail conversions.',
    results: [
      'Over 2.4 Million Organic Impressions in 14 days',
      '120+ Top Tier creators producing high-speed cinematic reels',
      '320% boost in brand mention volume across Instagram & TikTok',
      'Highest customer engagement score for Q3 product launch'
    ],
    category: 'Beverage & Lifestyle'
  },
  {
    id: 'heritage-tourism',
    client: 'Heritage Tourism',
    title: 'Heritage Tourism',
    subtitle: 'Govt. Influencer Expedition',
    badgeMetric: '50+ CREATORS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Chv9VdZUxPUAmwP6JDWaBqwrlkgUeL3O1UbORO0DleXg7Ab6w_cp9j-Ui3iyw2QUsg7CWwn635EHQ1O1UdQ870mLPFbyCqFCGXn6kphbN80Wyo26R3DDEDtseMyGJPW64ABtmQUBcCU3aFnoPRV83PAY_aXUzq6Y88oNlIrT-y1GgXeSpCzhY1ds-o7gISuMCjhlxZTviNzHNuaBGQFzv0Kyb-rjo2PeQpG6WzgX6XVq0V3fCYy-BPzlSbsyOW0i9oxYL1JaMCs',
    metrics: '45% Increase in Tourism Inquiries | 25+ Regional Languages | 8M Video Views',
    description: 'In collaboration with state tourism boards, Plixora Global deployed 50+ travel storytellers to document lesser-known heritage sites, palaces, and cultural festivals. The campaign utilized drone cinematography and AI-translated voiceovers to captivate travelers globally.',
    results: [
      '50+ Creators deployed across 12 historic cities',
      '45% spike in direct government portal tourism inquiries',
      'Multilingual localization into 8 Indian languages and English',
      'Recognized by Ministry of Cultural Affairs for media innovation'
    ],
    category: 'Tourism & Government'
  },
  {
    id: 'live-creator-arena',
    client: 'Live Creator Arena',
    title: 'Live Creator Arena',
    subtitle: 'Offline Mega-Event',
    badgeMetric: '15K ATTENDEES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASyqFOjAgFV5TYFbGYf4EJ9VKjl5zHNs6Qti5DN96hvuZNqC0PjI3tuCBtWTe25XnQY42fJCP-r3b4pGY8LqufIVeDKWwsT_JETzucOvVd6ADmPibqMue8q3wIFEMfl4ezuFSwmKeLYvUXrKdD5pgSRZVn1N5uymunglUkTy1TsQHTakLDQfuoIa1FSKWNnmoObQxtW2Rbl5UQ64ce2euC0Y2K7r_T1JixFjtC9mgq9pISHzCbGWKKHuYqKwQI0wwbHUXNCzvR9Sw',
    metrics: '15,000+ Live Footfall | 50M+ Event Reach | 40+ VIP Celebrities',
    description: 'Plixora Global managed end-to-end creator integrations for one of India\'s premier live entertainment arenas. From exclusive VIP creator lounges and live broadcasting booths to artist PR management, we turned an offline concert into a trending digital phenomenon.',
    results: [
      '15,000+ sold-out physical arena audience',
      'Trending #1 nationwide on social channels during live stream',
      '40+ celebrity appearances integrated seamlessly into sponsor booths',
      'Sponsor sales ROI exceeded 4.5x target budget'
    ],
    category: 'Events & Activations'
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'coca-cola', name: 'Coca-Cola', styleClass: 'font-playfair font-bold text-2xl sm:text-3xl tracking-tight text-white/90 hover:text-[#f5bd5e]' },
  { id: 'mamaearth', name: 'mamaearth', styleClass: 'font-outfit font-semibold text-xl sm:text-2xl tracking-wide lowercase text-white/90 hover:text-[#f5bd5e]' },
  { id: 'boat', name: 'boAt', styleClass: 'font-inter font-black italic text-2xl sm:text-4xl tracking-tighter text-white/90 hover:text-[#f5bd5e]' },
  { id: 'zee', name: 'ZEE', styleClass: 'font-cinzel font-black text-xl sm:text-2xl bg-white text-black px-3 py-1 rounded-full hover:bg-[#f5bd5e]' },
  { id: 'samsung', name: 'SAMSUNG', styleClass: 'font-inter font-bold text-xl sm:text-2xl tracking-widest uppercase text-white/90 hover:text-[#f5bd5e]' },
  { id: 'puma', name: 'PUMA', styleClass: 'font-inter font-extrabold italic text-2xl sm:text-3xl tracking-tight text-white/90 hover:text-[#f5bd5e]' },
  { id: 'dhvone', name: 'DHVONE MEDIA', styleClass: 'font-playfair font-semibold text-lg sm:text-xl tracking-wider text-white/80 hover:text-[#f5bd5e]' },
  { id: 'laqshya', name: 'LAQSHYA MEDIA', styleClass: 'font-cinzel font-semibold text-lg sm:text-xl tracking-wider text-white/80 hover:text-[#f5bd5e]' }
];
