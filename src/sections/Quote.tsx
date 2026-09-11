
import React from 'react';
import { motion } from 'framer-motion';

const Quote: React.FC = () => {
  return (
    <section className="py-72 px-6 relative bg-radiant-bg overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_#FAF3E0_0%,_transparent_70%)] opacity-30 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-10">
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2 }}
          className="h-32 w-[1px] bg-radiant-champagne/30 mx-auto"
        />
        
        <h2 className="text-5xl md:text-8xl font-serif text-radiant-text leading-[0.9] italic tracking-tighter max-w-6xl mx-auto">
          "Il comando non è l'assenza di segnale, <br className="hidden md:block"/> 
          ma la capacità di illuminare solo l'essenziale."
        </h2>
        
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[11px] font-mono tracking-[0.8em] uppercase text-radiant-gold font-bold"
          >
            Michael Luminel
          </motion.div>
          <div className="text-xl font-light text-radiant-muted uppercase tracking-[0.5em] font-mono italic">Lifestyle Architect</div>
        </div>

        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2 }}
          className="h-32 w-[1px] bg-gradient-to-b from-radiant-champagne/30 to-transparent mx-auto"
        />
      </div>
    </section>
  );
};

export default Quote;
