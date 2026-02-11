
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, EyeOff, Lock, Fingerprint, Sparkles } from 'lucide-react';

const AI: React.FC = () => {
  return (
    <section className="px-6 bg-radiant-text text-white rounded-t-[100px] -mt-24 relative z-10 shadow-[0_-50px_100px_-20px_rgba(28,25,23,0.8)] overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:48px_48px]"></div>

      <div className="max-w-7xl mx-auto py-48 md:py-64 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-5 space-y-16"
          >
            <div className="flex items-center gap-6">
              <Sparkles className="w-6 h-6 text-radiant-gold animate-pulse" />
              <span className="text-radiant-gold font-mono text-[11px] tracking-[0.6em] uppercase font-bold">Luminel Twin Engine</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] italic tracking-tighter">
              L'Estensione <br /> Radiosa della <br /> <span className="gold-gradient-text">Coscienza.</span>
            </h2>
            <p className="text-2xl font-light text-white/40 leading-relaxed tracking-wide italic">
              La nostra intelligenza non è un surrogato, ma un prisma che amplifica la tua autorità. Blindiamo la tua sfera privata con protocolli di <span className="text-radiant-gold font-medium">Integrità Forense</span>.
            </p>
            <div className="grid grid-cols-1 gap-12 pt-12">
              <div className="flex items-start gap-8 group interactive">
                <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-radiant-gold group-hover:text-radiant-text transition-all duration-700 border border-white/10">
                  <Fingerprint className="w-8 h-8 text-radiant-gold group-hover:text-inherit stroke-[1px]" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3 tracking-tight italic">Sovereign Identity Guard</h4>
                  <p className="text-lg text-white/20 font-light leading-relaxed italic">Neutralizzazione attiva della saturazione informativa esterna.</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group interactive">
                <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-radiant-gold group-hover:text-radiant-text transition-all duration-700 border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-radiant-gold group-hover:text-inherit stroke-[1px]" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-3 tracking-tight italic">Institutional Privacy Vault</h4>
                  <p className="text-lg text-white/20 font-light leading-relaxed italic">La tua architettura decisionale rimane inaccessibile all'ombra.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:col-span-7 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="relative w-full max-w-2xl aspect-square"
            >
              <div className="absolute inset-0 bg-radiant-gold/5 rounded-full filter blur-[150px] animate-pulse"></div>
              <div className="relative glass-pearl bg-white/5 border-white/10 rounded-full w-full h-full flex items-center justify-center p-32 text-center shadow-gold-glow">
                 <div className="space-y-10">
                   <div className="text-[10px] font-mono tracking-[0.5em] text-radiant-gold uppercase font-bold italic">Protocol Status: Radiant</div>
                   <div className="text-7xl md:text-9xl font-serif italic tracking-tighter gold-gradient-text">Luce <br/> Attiva</div>
                   <div className="h-[1px] w-48 bg-radiant-gold/20 mx-auto"></div>
                   <p className="text-lg font-light text-white/30 uppercase tracking-[0.4em] leading-loose max-w-xs mx-auto italic">
                      Progettato per chi <br/> regna attraverso <br/> la chiarezza.
                   </p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI;
