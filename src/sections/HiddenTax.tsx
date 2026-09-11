
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Moon } from 'lucide-react';

const HiddenTax: React.FC = () => {
  return (
    <section className="py-72 bg-radiant-text text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1C1917_0%,_transparent_70%)] opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
            <div className="space-y-10">
              <div className="flex items-center gap-6 px-6 py-3 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
                <AlertTriangle size={18} className="text-radiant-champagne" />
                <span className="text-[11px] font-mono tracking-[0.4em] text-radiant-champagne uppercase font-bold">The Eclipse of Time</span>
              </div>
              <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.85]">
                L'Eclissi <br />
                <span className="gold-gradient-text">del Valore.</span>
              </h2>
            </div>

            <p className="text-3xl font-light text-white/40 leading-relaxed tracking-wide italic">
              "Ogni secondo che non illumini è una tassa che paghi all'ombra. Smetti di finanziare la tua obsolescenza con la tua disattenzione."
            </p>

            <div className="space-y-12 pt-16 border-t border-white/10">
              <div className="flex gap-10 items-start">
                <div className="p-6 bg-white/5 rounded-3xl text-radiant-gold border border-white/10 shadow-2xl">
                  <TrendingDown size={32} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-3xl font-serif italic gold-gradient-text">€144.000 / anno</h4>
                  <p className="text-lg font-light text-white/30 italic">Perdita media di capitale decisionale dovuta alla saturazione informativa.</p>
                </div>
              </div>
              <div className="flex gap-10 items-start">
                <div className="p-6 bg-white/5 rounded-3xl text-radiant-gold border border-white/10 shadow-2xl">
                  <Moon size={32} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-3xl font-serif italic gold-gradient-text">1.460 Ore d'Ombra</h4>
                  <p className="text-lg font-light text-white/30 italic">Tempo sacrificato alla reattività non autorizzata nell'ultimo ciclo solare.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-radiant-gold/10 blur-[150px]"></div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-20 rounded-[80px] relative z-10 space-y-16 shadow-3xl">
              <h3 className="text-4xl font-serif text-white italic tracking-tight">"Il rumore è l'unica <br/> vera povertà."</h3>
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-mono text-white/30 uppercase tracking-[0.5em] font-bold italic">
                    <span>Erosione Sovranità</span>
                    <span className="text-radiant-gold">78%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '78%' }}
                      className="h-full bg-radiant-gold shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] font-mono text-white/30 uppercase tracking-[0.5em] font-bold italic">
                    <span>Luce Disponibile</span>
                    <span className="text-white/20">12%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '12%' }}
                      className="h-full bg-white/40"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xl font-light text-white/40 italic leading-relaxed border-l border-radiant-gold/40 pl-10">
                Michael Jara: "Luminel Way ferma questa emorragia. Non è un corso; è un atto di difesa della tua chiarezza patrimoniale."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HiddenTax;
