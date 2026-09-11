
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-80 bg-radiant-bg px-6 border-t border-radiant-champagne/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-radiant-gold/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="lg:col-span-7 space-y-20"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-[0.7em] text-radiant-gold uppercase font-bold italic">The Architect</span>
              <h3 className="text-8xl md:text-[11rem] font-serif text-radiant-text leading-[0.85] tracking-[-0.05em]">
                Michael <br />
                <span className="italic font-light text-radiant-muted">Jara.</span>
              </h3>
            </div>

            <div className="space-y-12 text-xl md:text-2xl font-light text-radiant-muted leading-[1.6] tracking-wide font-sans text-justify italic">
              <p>
                Dall'analisi del rigore forense nella <span className="text-radiant-text italic font-medium">Procura della Repubblica</span> alla direzione di complessi sistemi di dati in <span className="text-radiant-text font-medium">Capgemini</span>, Michael Jara ha distillato un protocollo di sovranità che non accetta compromessi.
              </p>
              <p>
                La sua missione non è la gestione del tempo, ma la progettazione del <span className="text-radiant-gold font-medium italic underline decoration-radiant-champagne/20">Silenzio Strategico</span>. Agisce come l'Architetto dei Sistemi Umani per coloro che intendono trasformare la propria attenzione in un patrimonio inalienabile.
              </p>
              <div className="pt-12 flex gap-16 border-t border-radiant-champagne/10">
                 <div className="space-y-2">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-radiant-gold/50 font-bold">Background</p>
                    <p className="text-3xl font-serif italic text-radiant-text">Istituzionale</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-radiant-gold/50 font-bold">Standard</p>
                    <p className="text-3xl font-serif italic text-radiant-text">Luminel Gold</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border border-radiant-champagne/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-pearl-skeuo group">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                 alt="Michael Jara"
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-radiant-bg/80 via-transparent to-transparent opacity-60"></div>
               <div className="absolute bottom-12 left-12 right-12">
                  <p className="text-radiant-muted text-[9px] font-mono tracking-[0.5em] uppercase mb-4 italic">Michael Jara • Founding Architect</p>
                  <p className="text-radiant-text text-3xl font-serif italic leading-relaxed font-light">
                    "Il vero comando è progettare <br/> l'assenza di urgenza."
                  </p>
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-radiant-gold/10 rounded-full blur-[80px]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Authority;
