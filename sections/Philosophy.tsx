
import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-64 px-6 overflow-hidden bg-radiant-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#E0F2FE_0%,_transparent_60%)] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-16"
          >
            <div className="flex items-center gap-6">
              <Layout className="w-6 h-6 text-radiant-gold" />
              <span className="text-radiant-gold font-mono text-[11px] tracking-[0.5em] uppercase font-bold italic">Architettura di Valore</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] text-radiant-text tracking-tighter">
              Il Rumore è <br /> 
              <span className="gold-gradient-text italic font-light">inefficienza sistemica.</span>
            </h2>
            <div className="space-y-10 text-2xl font-light text-radiant-muted leading-relaxed tracking-wide italic font-sans text-justify">
              <p>
                Luminel Way nasce dalla consapevolezza che il successo non dipende dal tempo, ma dalla qualità dell'architettura in cui quel tempo risiede.
              </p>
              <p>
                Ogni interferenza è una perdita di sovranità. Il nostro compito è sincronizzare la tua intenzione con un sistema che la amplifica senza attriti.
              </p>
              <p className="border-l-2 border-radiant-gold/30 pl-12 italic text-radiant-text font-medium text-3xl leading-snug">
                "Non aggiungiamo compiti; eliminiamo l'obsolescenza dei flussi che non ti appartengono."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-3xl p-24 rounded-[60px] space-y-12 border border-radiant-champagne/10 shadow-pearl-skeuo">
              <h3 className="text-4xl font-serif gold-gradient-text italic leading-tight tracking-tight">"Sincronizza il tuo Comando."</h3>
              <p className="text-xl text-radiant-muted font-light leading-relaxed italic tracking-wide">
                Il protocollo Luminel è un <span className="text-radiant-text font-medium underline decoration-radiant-gold/30">upgrade dell'identità operativa</span>. 
                Utilizziamo l'analisi dei dati per permettere alla tua architettura personale di risplendere con trasparenza assoluta.
              </p>
              <div className="pt-16 border-t border-radiant-champagne/10">
                 <div className="text-[11px] font-mono tracking-[0.4em] uppercase text-radiant-gold mb-6 font-bold italic">Sovereign Rule: Structural Flow</div>
                 <div className="flex items-center gap-6">
                    <div className="h-px w-24 bg-radiant-champagne"></div>
                    <span className="text-xl font-serif italic text-radiant-text font-light">Michael Jara, Architetto Fondatore</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
