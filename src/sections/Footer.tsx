
import React from 'react';
import Logo from '@/components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-radiant-champagne/10 bg-radiant-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <Logo className="w-12 h-12" withText variant="gold" />
          <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.6em] font-bold">
            © 2024 • Michael Jara • High-Reliability Architect
          </p>
        </div>
        <div className="flex gap-16 text-[10px] font-mono tracking-[0.5em] uppercase text-radiant-muted font-bold italic">
          <a href="#" className="hover:text-radiant-champagne transition-colors">Privacy</a>
          <a href="#" className="hover:text-radiant-champagne transition-colors">Protocolli</a>
          <a href="#" className="hover:text-radiant-champagne transition-colors">Istituzionale</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
