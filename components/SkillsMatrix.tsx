
import React from 'react';
import { Target, BarChart3, Settings, ShieldCheck, Zap, Cog } from 'lucide-react';

const categories = [
  {
    title: "Strategic Leadership",
    icon: Target,
    skills: ["Sales Growth", "Operational Leadership", "Team Dynamics", "Strategic Planning"],
    color: "#2E5BFF"
  },
  {
    title: "Financial Intelligence",
    icon: BarChart3,
    skills: ["Cost Optimization", "Accounting (BA)", "Revenue Growth", "Budget Management"],
    color: "#FF6B00"
  },
  {
    title: "Technical Aptitude",
    icon: Cog,
    skills: ["Mechanical Maintenance", "Industrial Repair", "Inventory Systems", "Process Automation"],
    color: "#2E5BFF"
  }
];

export const SkillsMatrix: React.FC = () => {
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Competency Matrix</h2>
        <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Built for High-Complexity Operations</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: `${cat.color}20` }}>
              <cat.icon size={24} style={{ color: cat.color }} />
            </div>
            <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
            <ul className="space-y-4">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Banner */}
      <div className="mt-16 glass-card p-8 rounded-3xl border-l-4 border-l-[#2E5BFF] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-sm font-mono text-[#2E5BFF] uppercase tracking-widest mb-1">Academic Foundation</h4>
          <h3 className="text-xl font-bold">Florida Atlantic University</h3>
          <p className="text-slate-400">Bachelor's in Accounting</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-mono font-bold text-white">3.40 GPA</div>
          <p className="text-xs font-mono text-slate-500 uppercase">Honors Standing</p>
        </div>
      </div>
    </div>
  );
};
