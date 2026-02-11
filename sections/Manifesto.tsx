
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, AlertTriangle } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-80 px-6 bg-radiant-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FAF3E0_0%,_transparent_70%)] opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-16"
          >
            <div className="space-y-8">
              <span className="text-[11px] font-mono tracking-[0.7em] text-radiant-gold uppercase font-bold italic">The Viral Manifesto</span>
              <h2 className="text-7xl md:text-[10rem] font-serif italic text-radiant-text leading-[0.85] tracking-tighter">
                La Tassa Invisibile <br /> 
                <span className="gold-gradient-text font-light">sulla tua Vita.</span>
              </h2>
            </div>

            <div className="space-y-12 text-2xl md:text-3xl font-light text-radiant-muted italic leading-relaxed tracking-wide font-sans text-justify">
              <p>
                Il mondo moderno è progettato per renderti un consumatore di rumore. <span className="text-radiant-text font-medium italic underline decoration-radiant-gold/20">Ogni notifica è un furto.</span> Ogni scroll infinito è una cessione di sovranità.
              </p>
              <p>
                Molti pensano che essere produttivi significhi fare di più. Io so che essere potenti significa <span className="text-radiant-text font-medium italic">negare l'accesso.</span>
              </p>
              <p className="border-l-4 border-radiant-gold pl-12 text-4xl md:text-5xl text-radiant-text leading-tight tracking-tight not-italic font-serif">
                "Il silenzio non è un'assenza di suono. È una presenza di potere. Sei pronto a reclamare il tuo?"
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white p-16 md:p-20 rounded-[60px] border border-radiant-champagne/10 shadow-pearl-skeuo space-y-12 relative overflow-hidden group interactive">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Shield size={250} className="text-radiant-gold" />
               </div>
               <div className="space-y-6 relative z-10">
                  <div className="p-6 bg-radiant-bg w-fit rounded-[30px] text-radiant-gold border border-radiant-champagne/10 shadow-inner">
                    <AlertTriangle size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-serif italic text-radiant-text">L'Architettura di Difesa.</h3>
                  <p className="text-lg text-radiant-muted font-light leading-relaxed italic tracking-wide">
                    Ho visto come i grandi sistemi creano l'ordine dal caos. La maggior parte delle persone paga una tassa in distrazione che finanzia il successo di qualcun altro.
                  </p>
               </div>
               <div className="pt-10 border-t border-radiant-champagne/10 relative z-10">
                  <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-widest font-bold italic mb-4">Luminel Protocol v1.0</p>
                  <Sparkles size={40} className="text-radiant-gold/20 animate-pulse" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;
