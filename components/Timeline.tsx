
import React from 'react';
import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "CFO",
    company: "Americas Dust Busters",
    location: "Miami, FL",
    period: "2022 - Present",
    description: "Manages 24/7 operations of a multimillion-dollar corporation with a workforce of over 40 employees. Implemented strategies to modernize traditional practices, resulting in increased employee satisfaction and major production output gains. Driving $250K-$500K in annual revenue growth.",
    tags: ["Operations", "Strategy", "Finance", "Modernization"]
  },
  {
    role: "Route Manager",
    company: "Americas Dust Busters",
    location: "Miami, FL",
    period: "2021 - 2022",
    description: "Managed all eight company routes, personally introducing business services to over 300 customers. Oversaw daytime production, ensuring quality and efficiency in high-volume laundering processes.",
    tags: ["Logistics", "Customer Success", "Production"]
  },
  {
    role: "Son of CEO / Operations Intern",
    company: "Americas Dust Busters",
    location: "Miami, FL",
    period: "2018 - 2021",
    description: "Joined the company at age 14. Mastered the end-to-end industrial laundering process: from separation and hazardous material handling to finishing, ironing, and packaging. Adhered to strict safety and quality standards.",
    tags: ["Fundamentals", "Manual Labor", "Safety Standards"]
  }
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">The Evolution</h2>
        <div className="w-20 h-1 bg-[#2E5BFF] rounded-full" />
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 md:pl-20 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] md:left-[-9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#2E5BFF] z-10 group-hover:scale-125 group-hover:bg-[#2E5BFF] transition-all" />
            
            <div className="glass-card p-6 md:p-8 rounded-3xl transition-all duration-500 hover:translate-x-2 border-white/5 hover:border-[#2E5BFF]/30">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                    {exp.role}
                    {idx === 0 && <span className="text-[10px] bg-[#2E5BFF]/20 text-[#2E5BFF] px-2 py-0.5 rounded-full font-mono uppercase">Current</span>}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-1"><Building2 size={14} /> {exp.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
