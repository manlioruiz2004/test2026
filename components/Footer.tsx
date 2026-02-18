
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2E5BFF] to-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-white">
                M
              </div>
              <span className="font-mono text-xl font-bold tracking-tighter text-white">
                MANLIO<span className="text-[#2E5BFF]">.</span>AR
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              Available for operational leadership roles in AI startups, FinTech firms, 
              and growth-stage technology ventures looking for systems-driven architects.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#2E5BFF] transition-all text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#2E5BFF] transition-all text-slate-400 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B00] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:manlioruiz2022@fau.edu" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                  <Mail size={18} className="text-[#2E5BFF]" />
                  manlioruiz2022@fau.edu
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-[#2E5BFF]" />
                (305)-218-6111
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-[#2E5BFF]" />
                Aventura, FL 33180
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B00] mb-6">Nav</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Tech Bridge</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-[10px] font-mono text-slate-600 uppercase tracking-widest gap-4">
          <p>© 2024 Manlio A. Ruiz. All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
