import React, { useState, useEffect } from 'react';
import { Sparkles, Calculator, ArrowRight, CheckCircle, RefreshCw, Users, Eye, TrendingUp, DollarSign } from 'lucide-react';

interface AiCampaignPlannerProps {
  onSelectServiceAndContact: (service: string, budget: string) => void;
}

export const AiCampaignPlanner: React.FC<AiCampaignPlannerProps> = ({ onSelectServiceAndContact }) => {
  const [category, setCategory] = useState('Lifestyle & Fashion');
  const [budgetAmount, setBudgetAmount] = useState<number>(1000000); // Default ₹10 Lakhs
  const [channels, setChannels] = useState<string[]>(['Instagram Reels', 'YouTube Shorts']);
  const [objective, setObjective] = useState('Brand Awareness & Virality');
  const [isCalculating, setIsCalculating] = useState(false);

  // Rate benchmark per creator in INR
  const MIN_RATE = 30000; // ₹30,000
  const MAX_RATE = 50000; // ₹50,000

  // Format INR currency
  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(val % 10000000 === 0 ? 0 : 2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(val % 100000 === 0 ? 0 : 1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // Format large numbers for reach/impressions
  const formatNumberShort = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return `${num}`;
  };

  // Math calculation logic
  const creatorBudget = Math.round(budgetAmount * 0.80); // 80% allocated to direct creator payouts
  const minCreators = Math.max(1, Math.floor(creatorBudget / MAX_RATE)); // at ₹50K
  const maxCreators = Math.max(1, Math.floor(creatorBudget / MIN_RATE)); // at ₹30K
  const avgCreators = Math.round((minCreators + maxCreators) / 2);

  const minReach = minCreators * 65000;
  const maxReach = maxCreators * 130000;
  const minEngagement = Math.round(minCreators * 3500);
  const maxEngagement = Math.round(maxCreators * 8500);

  const estimatedRoi = (3.4 + (budgetAmount >= 2500000 ? 0.9 : 0.4)).toFixed(1);

  const availableChannels = ['Instagram Reels', 'YouTube Shorts', 'X / Twitter Trends', 'OOH Billboards', 'Experiential Events'];
  const budgetPresets = [
    { label: '₹3L', value: 300000 },
    { label: '₹5L', value: 500000 },
    { label: '₹10L', value: 1000000 },
    { label: '₹25L', value: 2500000 },
    { label: '₹50L', value: 5000000 },
    { label: '₹1 Cr', value: 10000000 },
  ];

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      if (channels.length > 1) {
        setChannels(channels.filter(item => item !== ch));
      }
    } else {
      setChannels([...channels, ch]);
    }
  };

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 400);
  };

  const formattedBudgetString = `${formatINR(budgetAmount)} (₹30K - ₹50K / Creator Rate)`;

  return (
    <div className="bg-[#111217] border border-[#f5bd5e]/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(197,146,55,0.15)] text-[#ebe1d6]">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-[#f5bd5e]/10 border border-[#f5bd5e]/40 text-[#f5bd5e]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              AI Creator & ROI Campaign Calculator
            </h3>
            <p className="font-outfit text-xs text-[#d3c4b1] mt-0.5">
              Calibrated at <span className="text-[#f5bd5e] font-semibold">₹30,000 – ₹50,000</span> per verified creator deliverable.
            </p>
          </div>
        </div>
      </div>

      {/* Creator Benchmark Badge */}
      <div className="p-3.5 rounded-xl bg-[#f5bd5e]/10 border border-[#f5bd5e]/30 text-xs font-outfit text-[#f7de98] mb-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#f5bd5e] animate-pulse" />
          <span className="font-bold">STANDARD RATE BENCHMARK:</span>
          <span>₹30,000 – ₹50,000 per Creator</span>
        </div>
        <span className="text-[#d3c4b1] text-[11px]">80% Budget &rarr; Direct Creator Payouts</span>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Industry Category */}
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

        {/* Primary Campaign Goal */}
        <div>
          <label className="block font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1] mb-2">
            Primary Campaign Objective
          </label>
          <select
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#f5bd5e] focus:outline-none"
          >
            <option>Brand Awareness & Virality</option>
            <option>Direct Conversions & Sales Lift</option>
            <option>Regional Market Penetration</option>
            <option>Event & Product Launch Hype</option>
          </select>
        </div>
      </div>

      {/* Total Campaign Budget Section */}
      <div className="mb-6 p-4 rounded-xl bg-[#050505] border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <label className="font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1]">
            Total Campaign Budget (₹)
          </label>
          <span className="font-cinzel text-lg font-bold text-[#f5bd5e]">
            {formatINR(budgetAmount)}
          </span>
        </div>

        {/* Budget Presets */}
        <div className="flex flex-wrap gap-2 mb-4">
          {budgetPresets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => {
                setBudgetAmount(preset.value);
                handleRecalculate();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-outfit font-semibold transition-all ${
                budgetAmount === preset.value
                  ? 'bg-[#f5bd5e] text-[#050505] shadow-[0_0_12px_rgba(245,189,94,0.4)]'
                  : 'bg-white/5 border border-white/10 text-[#d3c4b1] hover:border-white/30'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Range Slider & Manual Input */}
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={100000}
            max={10000000}
            step={50000}
            value={budgetAmount}
            onChange={(e) => {
              setBudgetAmount(Number(e.target.value));
            }}
            className="w-full accent-[#f5bd5e] cursor-pointer"
          />
          <div className="relative shrink-0 w-36">
            <span className="absolute left-3 top-2.5 text-xs text-[#d3c4b1]">₹</span>
            <input
              type="number"
              min={50000}
              max={50000000}
              step={10000}
              value={budgetAmount}
              onChange={(e) => setBudgetAmount(Math.max(0, Number(e.target.value)))}
              className="w-full bg-white/5 border border-white/15 rounded-lg pl-7 pr-3 py-1.5 text-xs text-white focus:border-[#f5bd5e] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Channels Selection */}
      <div className="mb-6">
        <label className="block font-outfit text-xs font-semibold uppercase tracking-wider text-[#d3c4b1] mb-2">
          Target Channels & Media Touchpoints
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

      {/* Recalculate CTA */}
      <button
        onClick={handleRecalculate}
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
            <span>UPDATE AI BLUEPRINT PROJECTIONS</span>
          </>
        )}
      </button>

      {/* Results Output */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#050505] border border-[#f5bd5e]/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] animate-fadeIn">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <span className="font-outfit text-xs tracking-[0.2em] font-bold uppercase text-[#f5bd5e]">
            PROJECTED CAMPAIGN OUTCOMES
          </span>
          <span className="text-[11px] font-outfit text-[#d3c4b1]">
            Based on {formatINR(budgetAmount)} Budget
          </span>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {/* Creators Count */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase font-outfit text-[#d3c4b1]">Creators Onboarded</span>
              <Users className="w-3.5 h-3.5 text-[#f5bd5e]" />
            </div>
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#f7de98] mt-1">
              {minCreators} – {maxCreators}
            </span>
            <span className="text-[9px] text-[#d3c4b1]/80 mt-1">@ ₹30K - ₹50K / creator</span>
          </div>

          {/* Reach / Impressions */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase font-outfit text-[#d3c4b1]">Est. Reach</span>
              <Eye className="w-3.5 h-3.5 text-[#f5bd5e]" />
            </div>
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#f7de98] mt-1">
              {formatNumberShort(minReach)} – {formatNumberShort(maxReach)}
            </span>
            <span className="text-[9px] text-[#d3c4b1]/80 mt-1">Organic Impressions</span>
          </div>

          {/* Engagement */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase font-outfit text-[#d3c4b1]">Interactions</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#f5bd5e]" />
            </div>
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#f7de98] mt-1">
              {formatNumberShort(minEngagement)} – {formatNumberShort(maxEngagement)}
            </span>
            <span className="text-[9px] text-[#d3c4b1]/80 mt-1">Likes, Shares & Comments</span>
          </div>

          {/* ROI Multiplier */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase font-outfit text-[#d3c4b1]">Target Impact</span>
              <DollarSign className="w-3.5 h-3.5 text-[#f5bd5e]" />
            </div>
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#f5bd5e] mt-1">
              {estimatedRoi}x ROI
            </span>
            <span className="text-[9px] text-[#d3c4b1]/80 mt-1">Expected Ad Spend Return</span>
          </div>
        </div>

        {/* Budget Allocation Breakdown */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-outfit text-[#d3c4b1]">Direct Creator Payouts (80%)</span>
            <span className="font-bold text-[#f7de98]">{formatINR(creatorBudget)} ({minCreators}–{maxCreators} Creators @ ₹30K-₹50K)</span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex">
            <div className="bg-gradient-to-r from-[#f7de98] to-[#f5bd5e] h-full" style={{ width: '80%' }} />
            <div className="bg-[#c59237] h-full" style={{ width: '12%' }} />
            <div className="bg-white/30 h-full" style={{ width: '8%' }} />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-[#d3c4b1]">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#f5bd5e]" />
              <span>80% Creator Payouts</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#c59237]" />
              <span>12% Licensing & Rights</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span>8% Paid Boost</span>
            </div>
          </div>
        </div>

        {/* Strategy Summary */}
        <p className="font-outfit text-xs text-[#d3c4b1] mb-4 leading-relaxed">
          Strategy tailored for <span className="text-white font-semibold">{category}</span> aimed at <span className="text-white font-semibold">{objective}</span>. Incorporates <span className="text-[#f5bd5e] font-semibold">{avgCreators} vetted creators</span> across {channels.join(', ')} with full content usage rights and performance optimization.
        </p>

        {/* Deliverable Checkpoints */}
        <div className="space-y-1.5 mb-6">
          <div className="flex items-center space-x-2 text-xs text-[#d3c4b1]">
            <CheckCircle className="w-3.5 h-3.5 text-[#f5bd5e] shrink-0" />
            <span>Dedicated Reels/Shorts per creator @ ₹30,000 – ₹50,000 baseline rate</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#d3c4b1]">
            <CheckCircle className="w-3.5 h-3.5 text-[#f5bd5e] shrink-0" />
            <span>Cross-platform story amplification & trackable bio links included</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#d3c4b1]">
            <CheckCircle className="w-3.5 h-3.5 text-[#f5bd5e] shrink-0" />
            <span>Plixora AI real-time tracking dashboard & sentiment reporting</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSelectServiceAndContact(category, formattedBudgetString)}
          className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-[#f5bd5e] hover:text-[#050505] text-[#f7de98] font-outfit font-bold text-xs tracking-widest transition-all border border-[#f5bd5e]/40 flex items-center justify-center space-x-2 shadow-md"
        >
          <span>LAUNCH THIS {formatINR(budgetAmount)} CAMPAIGN WITH PLIXORA</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

