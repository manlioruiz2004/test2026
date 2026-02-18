
import React from 'react';
import { Cpu, Zap, Activity, Repeat } from 'lucide-react';

const bridges = [
  {
    title: "Industrial Routes to Data Pipelines",
    desc: "Just as I optimized 8 physical routes for 300+ clients, I view AI data ingestion as a logistics problem. Maximizing throughput while minimizing latency is universal.",
    icon: Repeat
  },
  {
    title: "24/7 Ops to High Availability",
    desc: "Managing a multimillion-dollar 24/7 laundry operation taught me that 'downtime' is not an option. This reliability mindset translates directly to SRE and AI inference uptime.",
    icon: Activity
  },
  {
    title: "Financial Rigor for Burn Management",
    desc: "With an accounting degree and CFO experience, I don't just see code; I see cloud spend, GPU costs, and ROI. I build operations that are fiscally sustainable.",
    icon: Zap
  }
];

export const TechBridge: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          The <span className="text-[#2E5BFF]">Industrial</span> to <span className="text-[#FF6B00]">Tech</span> Bridge
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
          "From the Warehouse Floor to the C-Suite" isn't just a tagline—it's a methodology. 
          I bring the discipline of heavy industry and the precision of accounting to the chaotic world of 
          AI scaling and technical operations.
        </p>
        
        <div className="grid gap-6">
          {bridges.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start group">
              <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#2E5BFF]/10 group-hover:border-[#2E5BFF]/30 transition-all">
                <item.icon size={24} className="text-[#2E5BFF]" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-[#2E5BFF] transition-colors">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="aspect-square relative flex items-center justify-center">
          {/* Decorative Rings */}
          <div className="absolute inset-0 border border-white/5 rounded-full animate-pulse" />
          <div className="absolute inset-10 border border-white/10 rounded-full animate-spin [animation-duration:10s]" />
          <div className="absolute inset-20 border border-[#2E5BFF]/20 rounded-full animate-spin [animation-duration:15s]" />
          
          <div className="relative z-10 glass-card p-12 rounded-full w-2/3 aspect-square flex flex-col items-center justify-center text-center">
            <Cpu size={64} className="text-[#FF6B00] mb-6 float" />
            <h3 className="text-2xl font-mono font-bold text-white uppercase tracking-tighter">Ops Architect</h3>
            <p className="text-[10px] font-mono text-slate-500 mt-2">SYSTEMS THINKER</p>
          </div>
        </div>
      </div>
    </div>
  );
};
