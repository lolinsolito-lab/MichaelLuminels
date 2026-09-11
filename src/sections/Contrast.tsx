
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Layout, Sun, Moon, Maximize2 } from 'lucide-react';

const Contrast: React.FC = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const nextPos = ((x - rect.left) / rect.width) * 100;
    setPosition(Math.min(Math.max(nextPos, 0), 100));
  };

  return (
    <section className="py-72 px-6 bg-radiant-bg overflow-hidden border-y border-radiant-champagne/10">
      <div className="max-w-6xl mx-auto space-y-32">
        <div className="text-center space-y-8">
          <span className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">The Visual Proof</span>
          <h2 className="text-6xl md:text-9xl font-serif text-radiant-text italic tracking-tighter leading-none">Scegli la tua <br/> <span className="gold-gradient-text">Frequenza.</span></h2>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          className="relative h-[700px] w-full rounded-[60px] overflow-hidden shadow-pearl-skeuo interactive group select-none border border-radiant-champagne/10"
        >
          {/* LATO DESTRO - SOVRANITÀ (PERLA) */}
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-20 text-center space-y-16">
            <div className="w-40 h-40 bg-radiant-bg rounded-[50px] shadow-pearl-skeuo flex items-center justify-center text-radiant-gold border border-radiant-champagne/10">
               <Sun size={56} strokeWidth={1} className="animate-spin-slow" />
            </div>
            <div className="space-y-6 max-w-lg">
               <h4 className="text-5xl font-serif text-radiant-text italic">Sovranità</h4>
               <p className="text-2xl font-light text-radiant-muted italic leading-relaxed tracking-wide">
                 Focus assoluto. Architettura blindata. Tempo distillato per la visione suprema.
               </p>
            </div>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-radiant-champagne/30 to-transparent"></div>
            <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.6em] font-bold italic">Luminel Protocol Active</p>
          </div>

          {/* LATO SINISTRO - CAOS (OSSIDIANA BRONZO) */}
          <div 
            className="absolute inset-0 bg-radiant-text flex flex-col items-center justify-center p-20 text-center space-y-16"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-radiant-gold/10 blur-3xl animate-pulse"></div>
              <div className="w-40 h-40 bg-white/5 rounded-[50px] flex items-center justify-center text-white/20 relative z-10 border border-white/10">
                 <Moon size={56} strokeWidth={1} />
              </div>
            </div>
            <div className="space-y-6 max-w-lg">
               <h4 className="text-5xl font-serif text-white/80 italic">Caos Reattivo</h4>
               <p className="text-2xl font-light text-white/30 italic leading-relaxed tracking-wide">
                 Saturazione informativa. Frammentazione dell'anima. Finanziamento dell'urgenza altrui.
               </p>
            </div>
            <div className="h-px w-40 bg-white/5"></div>
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.6em] font-bold italic">System Overload</p>
          </div>

          {/* DRAGGER (ORO CHAMPAGNE) */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-radiant-champagne/50 backdrop-blur-md cursor-none z-30"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-radiant-bg border-2 border-radiant-champagne rounded-full shadow-gold-glow flex items-center justify-center text-radiant-gold group-hover:scale-110 transition-transform duration-500">
               <Maximize2 size={24} className="rotate-45" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[11px] font-mono text-radiant-muted uppercase tracking-[0.5em] font-bold italic px-12">
           <span>Scorri per visualizzare l'Eclissi</span>
           <span className="text-radiant-gold">Michael Luminel: "La luce è una scelta architettonica."</span>
        </div>
      </div>
    </section>
  );
};

export default Contrast;
