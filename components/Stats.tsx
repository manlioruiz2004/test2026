
import React from 'react';
import { Users, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Employees Managed', value: '40+', icon: Users, color: '#2E5BFF' },
  { label: 'Annual Revenue Growth', value: '$500K', icon: TrendingUp, color: '#FF6B00' },
  { label: 'Operational Oversight', value: '24/7', icon: Clock, color: '#2E5BFF' },
  { label: 'GPA Leadership', value: '3.40', icon: ShieldCheck, color: '#FF6B00' },
];

export const Stats: React.FC = () => {
  return (
    <div className="w-full bg-white/5 border-y border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center md:items-start group">
            <stat.icon size={20} className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: stat.color }} />
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-slate-500 whitespace-nowrap">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
