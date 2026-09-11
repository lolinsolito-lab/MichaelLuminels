
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import Magnetic from '@/components/Magnetic';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-radiant-bg iridescent-bg">
      {/* Cinematic Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-radiant-bg z-[1]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* LOGO INTEGRATO NEL BADGE HERO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-4 px-6 py-2 border border-radiant-champagne/10 rounded-full bg-white/40 backdrop-blur-3xl shadow-pearl-skeuo"
          >
            <Logo className="w-5 h-5" variant="gold" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-radiant-muted uppercase font-bold italic">
              L'Upgrade Invisibile • Luminel Way
            </span>
          </motion.div>

          <div className="space-y-8">
            <h1 className="text-7xl md:text-[10rem] font-serif text-radiant-text font-light leading-[0.85] tracking-tight">
              L’evoluzione <br /> 
              non fa <span className="italic font-light gold-gradient-text">rumore.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-radiant-muted leading-relaxed tracking-wide font-sans italic opacity-80">
              Sincronizza la tua quotidianità con la versione più chiara di te stesso. <br className="hidden md:block" />
              Un'architettura fluida per chi ha smesso di reagire e ha iniziato a esistere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-16">
            <Magnetic>
              <button 
                onClick={onStart}
                className="interactive group relative px-16 py-10 bg-radiant-text text-white rounded-full transition-all duration-700 shadow-[0_20px_40px_rgba(28,25,23,0.15)] hover:shadow-[0_30px_60px_rgba(28,25,23,0.3)] flex items-center gap-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                <span className="text-[11px] tracking-[0.5em] uppercase font-bold relative z-10">Inizia Audit</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
              </button>
            </Magnetic>

            <Magnetic>
              <button className="interactive px-16 py-10 text-radiant-text text-[11px] tracking-[0.5em] uppercase border border-radiant-champagne/30 rounded-full hover:bg-white/60 transition-all font-bold backdrop-blur-3xl shadow-pearl-skeuo hover:shadow-trayce-glow">
                The Architect's Journal
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-radiant-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
