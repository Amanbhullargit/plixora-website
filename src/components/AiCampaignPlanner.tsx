import React, { useState } from 'react';
import { Sparkles, Calculator, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';

interface AiCampaignPlannerProps {
  onSelectServiceAndContact: (service: string, budget: string) => void;
}

export const AiCampaignPlanner: React.FC<AiCampaignPlannerProps> = ({ onSelectServiceAndContact }) => {
  const [category, setCategory] = useState('Lifestyle & Fashion');
  const [budget, setBudget] = useState('₹5L - ₹15L');
  const [channels, setChannels] = useState<string[]>(['Instagram Reels', 'YouTube Shorts']);
  const [objective, setObjective] = useState('Brand Awareness & Virality');
  const [isCalculating, setIsCalculating] = useState(false);
  const [planResult, setPlanResult] = useState<{
    impressions: string;
    creatorsCount: string;
    roiMultiplier: string;
    summary: string;
    breakdown: string[];
  } | null>({
    impressions: '1.8M - 3.5M Impressions',
    creatorsCount: '15 - 25 Micro & Macro Storytellers',
    roiMultiplier: '3.4x Expected Return on Ad Spend',
    summary: 'High-energy regional creator blitz paired with 2 Tier-1 anchor celebrities to drive immediate viral hashtag traction.',
    breakdown: [
      '60% Budget in High-performing Micro Lifestyle Creators',
      '25% Budget in 2 Macro Anchor Celebrities',
      '15% Performance Boosting & Paid Amplification'
    ]
  });

  const availableChannels = ['Instagram Reels', 'YouTube Shorts', 'X / Twitter Trends', 'OOH Billboards', 'Experiential Events'];

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      setChannels(channels.filter(item => item !== ch));
    } else {
      setChannels([...channels, ch]);
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    // Simulate smart AI algorithm calculation
    setTimeout(() => {
      let estImp = '2M - 4M Impressions';
      let estCreators = '20 - 35 Verified Storytellers';
      let estRoi = '3.8x Expected Campaign Lift';

      if (budget === '₹15L - ₹50L') {
        estImp = '5M - 12M Impressions';
        estCreators = '40 - 70 Creator Squads + VIPs';
        estRoi = '4.2x Expected Campaign Lift';
      } else if (budget === '₹50L+') {
        estImp = '20M+ Nationwide Reach';
        estCreators = '100+ Creators & Pan-India OOH';
        estRoi = '5.0x Pan-National Impact';
      }

      setPlanResult({
        impressions: estImp,
        creatorsCount: estCreators,
        roiMultiplier: estRoi,
        summary: `Strategic ${category} campaign optimized for ${objective} across ${channels.join(', ')}.`,
        breakdown: [
          `Targeted ${channels.slice(0, 2).join(' & ')} content pipeline`,
          `Verified creator sentiment validation & contract management`,
          `Synchronized digital & offline media amplification`
        ]
      });
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="bg-[#111217] border border-[#f5bd5e]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(197,146,55,0.15)] text-[#ebe1d6]">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 rounded-xl bg-[#f5bd5e]/10 border border-[#f5bd5e]/40 text-[#f5bd5e]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            AI Campaign Blueprinting Engine
          </h3>
          <p className="font-outfit text-xs text-[#d3c4b1]">
            Estimate creator reach, impressions, and optimal channel allocation in real-time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Category & Objective */}
        <div>
          <label className="block font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1] mb-2">
            Industry Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
          >
            <option>Lifestyle & Fashion</option>
            <option>Food & Beverage</option>
            <option>Consumer Tech & Electronics</option>
            <option>Tourism & Cultural Heritage</option>
            <option>Government & Public Relations</option>
          </select>
        </div>

        <div>
          <label className="block font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1] mb-2">
            Budget Range
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
          >
            <option>₹2L - ₹5L</option>
            <option>₹5L - ₹15L</option>
            <option>₹15L - ₹50L</option>
            <option>₹50L+</option>
          </select>
        </div>
      </div>

      {/* Target Channels */}
      <div className="mb-6">
        <label className="block font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1] mb-2">
          Channels & Touchpoints
        </label>
        <div className="flex flex-wrap gap-2">
          {availableChannels.map((ch) => {
            const isSelected = channels.includes(ch);
            return (
              <button
                key={ch}
                type="button"
                onClick={() => toggleChannel(ch)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-outfit transition-all ${
                  isSelected
                    ? 'bg-[#f5bd5e] text-[#050505] font-bold shadow-[0_0_12px_rgba(245,189,94,0.4)]'
                    : 'bg-white/5 border border-white/10 text-[#d3c4b1] hover:border-white/30'
                }`}
              >
                {ch}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={isCalculating}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f7de98] via-[#f5bd5e] to-[#c59237] text-[#050505] font-outfit font-bold text-xs tracking-widest hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg mb-6"
      >
        {isCalculating ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin text-[#050505]" />
            <span>CALCULATING AI PROJECTIONS...</span>
          </>
        ) : (
          <>
            <Calculator className="w-4 h-4 text-[#050505]" />
            <span>GENERATE AI CAMPAIGN BLUEPRINT</span>
          </>
        )}
      </button>

      {/* Results Output */}
      {planResult && (
        <div className="p-5 rounded-xl bg-[#050505] border border-[#f5bd5e]/30 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-center">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <span className="block text-[10px] uppercase font-outfit text-[#d3c4b1]">Est. Reach</span>
              <span className="font-cinzel text-sm sm:text-base font-bold text-[#f7de98]">{planResult.impressions}</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <span className="block text-[10px] uppercase font-outfit text-[#d3c4b1]">Creators Needed</span>
              <span className="font-cinzel text-sm sm:text-base font-bold text-[#f7de98]">{planResult.creatorsCount}</span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <span className="block text-[10px] uppercase font-outfit text-[#d3c4b1]">Target Impact</span>
              <span className="font-cinzel text-sm sm:text-base font-bold text-[#f5bd5e]">{planResult.roiMultiplier}</span>
            </div>
          </div>

          <p className="font-outfit text-xs text-[#d3c4b1] mb-4 leading-relaxed">
            {planResult.summary}
          </p>

          <div className="space-y-1.5 mb-5">
            {planResult.breakdown.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#d3c4b1]">
                <CheckCircle className="w-3.5 h-3.5 text-[#f5bd5e] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onSelectServiceAndContact(category, budget)}
            className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#f5bd5e] hover:text-[#050505] text-[#f7de98] font-outfit font-bold text-xs tracking-widest transition-all border border-[#f5bd5e]/40 flex items-center justify-center space-x-2"
          >
            <span>LAUNCH THIS BLUEPRINT WITH PLIXORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
