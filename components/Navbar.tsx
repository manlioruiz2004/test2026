
import React from 'react';
import { Menu, X, LayoutDashboard, Cpu, Network, Rocket } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: LayoutDashboard },
    { name: 'Experience', id: 'experience', icon: Network },
    { name: 'Tech Bridge', id: 'impact', icon: Rocket },
    { name: 'Skills', id: 'skills', icon: Cpu },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-2xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#2E5BFF] to-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-white">
            M
          </div>
          <span className="font-mono text-lg font-bold tracking-tighter text-white">
            MANLIO<span className="text-[#2E5BFF]">.</span>AR
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-mono text-sm transition-all duration-300 hover:text-[#2E5BFF] ${
                activeSection === link.id ? 'text-[#2E5BFF]' : 'text-slate-400'
              }`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="mailto:manlioruiz2022@fau.edu"
            className="bg-[#2E5BFF] hover:bg-[#1a44cc] text-white px-5 py-2 rounded-xl text-xs font-bold transition-all transform hover:scale-105"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 glass-card rounded-2xl p-6 border border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 font-mono text-lg text-slate-300 hover:text-[#2E5BFF]"
              >
                <link.icon size={20} />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
