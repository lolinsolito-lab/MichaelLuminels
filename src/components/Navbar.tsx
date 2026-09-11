
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import Logo from './Logo';
import Magnetic from '@/components/Magnetic';

interface NavbarProps {
  onAccessClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAccessClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Filosofia", id: "philosophy" },
    { name: "Protocollo", id: "laws" },
    { name: "Percorso", id: "journey" },
    { name: "L'Architetto", id: "authority" },
    { name: "Abbonamento", id: "pricing" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between px-8 py-5 rounded-full transition-all duration-1000 ${scrolled ? 'bg-white/80 backdrop-blur-3xl border border-radiant-champagne/20 shadow-trayce-glow' : 'bg-transparent'}`}>
          
          {/* Logo Section */}
          <div 
            className="interactive group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="w-8 h-8 md:w-10 md:h-10" withText variant="gold" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-[9px] font-mono uppercase tracking-[0.3em] text-radiant-muted hover:text-radiant-gold transition-colors font-bold italic"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={onAccessClick}
              className="text-[9px] font-mono uppercase tracking-[0.3em] text-radiant-gold hover:text-radiant-text transition-colors flex items-center gap-2 font-bold italic"
            >
              <User size={12} /> Area Membri
            </button>
            <Magnetic>
              <button 
                onClick={() => scrollToSection('audit-start')}
                className="interactive px-10 py-4 bg-radiant-text text-white text-[9px] font-mono uppercase tracking-[0.4em] rounded-full transition-all duration-500 shadow-[0_15px_30px_rgba(28,25,23,0.1)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.25)] font-bold flex items-center gap-3 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10">Inizia Audit</span>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-radiant-text"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-radiant-champagne/10 p-12 md:hidden flex flex-col gap-8 text-center"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-serif italic text-radiant-text"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => { setMobileMenu(false); onAccessClick(); }}
              className="text-xl font-serif italic text-radiant-gold"
            >
              Area Membri
            </button>
            <button 
              onClick={() => scrollToSection('audit-start')}
              className="py-5 bg-radiant-text text-white rounded-full text-[10px] tracking-[0.4em] uppercase font-bold"
            >
              Inizia Audit d'Élite
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
