
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Crown, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface GateProps {
  onLogin: () => void;
  onSignup: () => void;
}

const MembershipGate: React.FC<GateProps> = ({ onLogin, onSignup }) => {
  return (
    <div className="min-h-screen bg-radiant-bg flex flex-col md:flex-row items-stretch overflow-hidden">
      
      {/* LATO SINISTRO: PULSE (L'Accesso Sociale - Lounge) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col justify-center p-12 md:p-24 border-r border-radiant-champagne/10 relative group interactive"
        onClick={onSignup}
      >
        <div className="absolute inset-0 bg-radiant-gold/0 group-hover:bg-radiant-gold/5 transition-colors duration-700"></div>
        <div className="relative z-10 space-y-12">
          <div className="p-6 bg-white w-fit rounded-[30px] text-radiant-gold shadow-pearl-skeuo border border-radiant-champagne/10 group-hover:scale-110 transition-transform duration-700">
            <Fingerprint size={40} strokeWidth={1} />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Tier 01 • Status Access</span>
            <h2 className="text-5xl md:text-7xl font-serif text-radiant-text italic leading-none tracking-tighter">Luminel <br /><span className="gold-gradient-text font-light">Pulse.</span></h2>
            <p className="text-radiant-muted font-light mt-4 max-w-sm text-xl italic leading-relaxed">
              Sintonizzati sulla frequenza dell'ordine. Accedi alla Newsroom privata e ricevi i Bit di Chiarezza quotidiani.
            </p>
          </div>
          <button className="flex items-center gap-6 text-radiant-text font-mono text-[10px] tracking-[0.5em] uppercase group font-bold">
            Entra nella Lounge <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
        <div className="absolute bottom-12 left-12 opacity-10 font-serif italic text-4xl text-radiant-gold">Lounge</div>
      </motion.div>

      {/* LATO DESTRO: ARCHITECT (L'Accesso Sovrano - The Vault) */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col justify-center p-12 md:p-24 bg-radiant-text relative group interactive"
        onClick={onLogin}
      >
        <div className="absolute inset-0 bg-radiant-gold/0 group-hover:bg-radiant-gold/10 transition-colors duration-700"></div>
        <div className="relative z-10 space-y-12 text-white">
          <div className="p-6 bg-radiant-gold w-fit rounded-[30px] text-radiant-text shadow-2xl group-hover:scale-110 transition-transform duration-700">
            <Crown size={40} strokeWidth={1} />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Tier 02/03 • Sovereign Access</span>
            <h2 className="text-5xl md:text-7xl font-serif italic leading-none tracking-tighter">The <br /><span className="gold-gradient-text font-light">Vault.</span></h2>
            <p className="text-white/40 font-light mt-4 max-w-sm text-xl italic leading-relaxed">
              Area Riservata Protocolli Sync & Architect. Accesso esclusivo per chi ha completato l'acquisizione della propria sovranità.
            </p>
          </div>
          <button className="flex items-center gap-6 text-radiant-gold font-mono text-[10px] tracking-[0.5em] uppercase group font-bold">
            Identificazione Requisita <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
          </button>
        </div>
        
        {/* Scanning Light Effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-radiant-gold to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-flow_2s_infinite] pointer-events-none"></div>
        
        <div className="absolute bottom-12 right-12 flex items-center gap-4 opacity-20 text-white">
          <Lock size={16} />
          <span className="text-[9px] font-mono uppercase tracking-widest font-bold italic">AES-256 Protected</span>
        </div>
      </motion.div>

    </div>
  );
};

export default MembershipGate;
