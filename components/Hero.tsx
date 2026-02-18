
import React, { useEffect, useState } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Architecting Operations.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-20 pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent" />
        <div className="w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#FF6B00] to-transparent mx-auto" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Ready for the next scale-up</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
          Manlio A. Ruiz<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5BFF] to-[#FF6B00] font-mono">
            {displayText}<span className="animate-pulse">_</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Bridging the gap between industrial grit and strategic financial intelligence. 
          Pivoting from high-stakes operations to the forefront of <span className="text-white font-medium">AI & Tech scalability</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#experience"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 group transition-all hover:bg-[#2E5BFF] hover:text-white"
          >
            VIEW JOURNEY
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#impact"
            className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:bg-white/5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
          >
            THE TECH BRIDGE
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Profile Image - Placeholder (User asked to use their image) */}
      <div className="mt-20 relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#2E5BFF] to-[#FF6B00] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-white/20 glass-card">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=640&auto=format&fit=crop" 
            alt="Manlio A. Ruiz"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};
