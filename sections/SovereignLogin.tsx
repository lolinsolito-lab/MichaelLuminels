
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Lock, ChevronRight, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const SovereignLogin: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-radiant-bg p-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-md w-full bg-white p-16 rounded-[45px] relative z-10 shadow-pearl-skeuo border border-radiant-champagne/10"
      >
        <div className="text-center space-y-10 mb-20">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="inline-flex items-center justify-center w-28 h-28 bg-radiant-bg rounded-full text-radiant-gold mb-4 border border-radiant-champagne/10 group interactive shadow-inner"
          >
            <Fingerprint size={48} strokeWidth={1} className="group-hover:gold-text-glow transition-all duration-500" />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-5xl font-serif text-radiant-text tracking-tighter italic">
              Private <br /><span className="gold-gradient-text italic font-light">Lounge Access.</span>
            </h2>
            <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.6em] font-bold italic">Ingresso Caveau Istituzionale</p>
          </div>
        </div>

        <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[9px] font-mono text-radiant-gold/60 uppercase tracking-widest ml-4 font-bold italic">Sovereign Identity</label>
              <input 
                type="email" 
                required
                placeholder="nome@identita-sovrana.it" 
                className="w-full bg-radiant-bg p-8 rounded-[30px] border border-radiant-champagne/10 text-xl font-serif text-radiant-text focus:outline-none focus:border-radiant-gold transition-all placeholder:text-radiant-muted/20"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[9px] font-mono text-radiant-gold/60 uppercase tracking-widest ml-4 font-bold italic">Passphrase Key</label>
              <input 
                type="password" 
                required
                placeholder="••••••••••••" 
                className="w-full bg-radiant-bg p-8 rounded-[30px] border border-radiant-champagne/10 text-xl font-serif text-radiant-text focus:outline-none focus:border-radiant-gold transition-all placeholder:text-radiant-muted/20"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="interactive w-full bg-radiant-text text-white py-10 rounded-full text-[11px] tracking-[0.6em] uppercase hover:bg-radiant-gold transition-all duration-700 flex items-center justify-center gap-6 group font-bold shadow-2xl"
          >
            <span>Sincronizza Accesso</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-20 pt-16 border-t border-radiant-champagne/5 text-center space-y-6">
          <p className="text-[10px] text-radiant-muted uppercase tracking-[0.3em] flex items-center justify-center gap-4 italic font-bold">
            <ShieldCheck size={14} className="text-radiant-gold" /> Protocollo Inviolabile Active
          </p>
          <p className="text-[8px] font-mono text-radiant-muted/30 uppercase tracking-[0.5em]">AES-256 Forensic Encryption</p>
        </div>
      </motion.div>

      {/* Vault Background Detail */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none text-radiant-gold">
         <Lock size={600} strokeWidth={0.5} />
      </div>
    </section>
  );
};

export default SovereignLogin;
