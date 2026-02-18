
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Timeline } from './components/Timeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { TechBridge } from './components/TechBridge';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'impact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] selection:bg-[#2E5BFF] selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2E5BFF] opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF6B00] opacity-5 blur-[120px]" />
      </div>

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
          <Stats />
        </section>
        
        <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
          <Timeline />
        </section>

        <section id="impact" className="py-20 bg-black/40">
          <div className="max-w-7xl mx-auto px-6">
            <TechBridge />
          </div>
        </section>

        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
          <SkillsMatrix />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
