
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Lock, ArrowRight, Zap, BarChart3, AlertTriangle, Sparkles } from 'lucide-react';

interface AuditResultProps {
  score: number;
  onProceed: () => void;
}

const AuditResult: React.FC<AuditResultProps> = ({ score, onProceed }) => {
  return (
    <section className="min-h-screen py-48 px-6 flex items-center justify-center bg-radiant-bg">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <span className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Analisi Forense Completata</span>
            <h2 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tighter text-radiant-text">
              Il tuo sistema è <br /> 
              <span className="gold-gradient-text italic font-light">altamente saturato.</span>
            </h2>
          </div>
          
          <div className="space-y-10 text-2xl font-light text-radiant-muted leading-relaxed tracking-wide italic">
            <p>
              La diagnosi indica che il tuo sistema operativo umano opera al <span className="text-radiant-gold font-bold italic">{100 - score}% delle potenzialità</span>.
            </p>
            <p className="border-l-2 border-radiant-champagne/20 pl-12 italic text-2xl leading-relaxed text-radiant-text">
              "Il resto della tua energia è disperso in flussi di rumore. Operare senza un reset significa finanziare l'obsolescenza della propria visione."
            </p>
          </div>

          <div className="pt-12 flex flex-col items-start gap-12">
            <button 
              onClick={onProceed}
              className="interactive beacon-gold group flex items-center gap-8 px-20 py-10 bg-radiant-text text-white rounded-full transition-all duration-700 shadow-2xl hover:scale-105"
            >
              <span className="text-[11px] tracking-[0.5em] uppercase font-bold">Inizializza Protocollo di Risveglio</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-8 opacity-40">
               <div className="h-px w-24 bg-radiant-champagne"></div>
               <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.4em] flex items-center gap-4 italic font-bold">
                 <Lock size={14} className="text-radiant-gold" /> Criptazione Istituzionale Active
               </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-20 rounded-[80px] border border-radiant-champagne/10 shadow-pearl-skeuo relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-radiant-champagne/10 to-transparent opacity-30"></div>
          
          <div className="relative z-10 space-y-20">
            <div className="flex justify-between items-center">
               <BarChart3 className="w-16 h-16 text-radiant-gold stroke-[1px]" />
               <Sparkles className="w-16 h-16 text-radiant-gold/20 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-16">
               <div className="space-y-6">
                  <div className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.4em] flex items-center gap-3 font-bold">
                     <Zap size={14} className="text-radiant-gold" /> Focus Score
                  </div>
                  <div className="text-8xl font-serif text-radiant-text tracking-tighter italic gold-gradient-text">
                    {100 - score}<span className="text-2xl opacity-20">/100</span>
                  </div>
                  <p className="text-[10px] font-mono text-radiant-gold/50 uppercase italic font-bold">Erosione Sistematica</p>
               </div>
               <div className="space-y-6">
                  <div className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.4em] flex items-center gap-3 font-bold">
                     <AlertTriangle size={14} className="text-radiant-gold" /> Risk Status
                  </div>
                  <div className="text-6xl font-serif text-radiant-text tracking-tighter italic">
                    Critico
                  </div>
                  <p className="text-[10px] font-mono text-radiant-gold/50 uppercase italic font-bold">Vulnerabilità Ombra</p>
               </div>
            </div>

            <div className="p-10 bg-radiant-bg/80 rounded-[45px] border border-radiant-champagne/20 flex items-center gap-10 shadow-inner">
               <ShieldAlert className="text-radiant-gold flex-shrink-0" size={40} />
               <p className="text-lg font-light text-radiant-muted leading-relaxed italic">
                 Michael Luminel: <span className="text-radiant-text font-bold italic">"Il tuo attuale blocco è strutturale. È tempo di dissipare l'ombra."</span>
               </p>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-radiant-gold/30 uppercase tracking-[0.5em] border-t border-radiant-champagne/5 pt-10 font-bold">
               <span>Audit Ref: LJ-2026-RADIANT</span>
               <span>Status: Pending Reset</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AuditResult;
