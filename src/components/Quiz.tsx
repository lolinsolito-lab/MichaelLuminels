
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface QuizProps {
  onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: "I",
      tag: "ANALISI DEL FLUSSO",
      q: "Qual è il livello di interferenza esterna che distorce attualmente la tua sincronia quotidiana?",
      options: [
        { label: "Saturazione Critica (Rumore continuo)", score: 40 },
        { label: "Frammentazione (Segnali discontinui)", score: 25 },
        { label: "Sincronia Parziale (Flusso gestito)", score: 10 }
      ]
    },
    {
      id: "II",
      tag: "AUDIT DELLA SOVRANITÀ",
      q: "Quanta della tua architettura decisionale è delegata a automatismi non autorizzati?",
      options: [
        { label: "La quasi totalità (Erosione del comando)", score: 35 },
        { label: "Circa il 50% (Sistemi non allineati)", score: 20 },
        { label: "Minima (Controllo progettuale)", score: 5 }
      ]
    },
    {
      id: "III",
      tag: "PROTOCOLLO DI TRASPARENZA",
      q: "In che misura riesci a mantenere la chiarezza visiva nei momenti di alta densità informativa?",
      options: [
        { label: "L'ombra prevale (Perdita di visione)", score: 25 },
        { label: "Sforzo costante (Equilibrio precario)", score: 15 },
        { label: "Trasparenza Totale (Chiarezza radiosa)", score: 0 }
      ]
    }
  ];

  const handleOptionClick = (s: number) => {
    const newScore = score + s;
    setScore(newScore);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(newScore);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div 
          key={step}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/80 backdrop-blur-3xl rounded-[60px] p-16 md:p-32 border border-radiant-champagne/10 shadow-pearl-skeuo relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none">
            <Sparkles size={300} className="text-radiant-gold" />
          </div>

          <div className="relative z-10 space-y-20">
            <div className="flex justify-between items-center border-b border-radiant-champagne/10 pb-12">
              <div className="space-y-3">
                <span className="text-[11px] font-mono tracking-[0.5em] text-radiant-gold uppercase font-bold italic">
                  Mappatura Frequenza v2.0 • {questions[step].tag}
                </span>
              </div>
              <span className="font-serif italic text-radiant-gold/20 text-4xl tracking-tighter">{questions[step].id} <span className="text-sm opacity-50">/ III</span></span>
            </div>

            <h3 className="text-4xl md:text-7xl font-serif text-radiant-text leading-[0.9] tracking-tighter italic">
              {questions[step].q}
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-12">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt.score)}
                  className="interactive group flex items-center justify-between p-10 text-left border border-radiant-champagne/10 rounded-[40px] hover:border-radiant-gold hover:bg-white transition-all duration-700 hover:shadow-trayce-glow"
                >
                  <span className="text-xl md:text-2xl font-light text-radiant-muted group-hover:text-radiant-text transition-colors italic tracking-wide">
                    {opt.label}
                  </span>
                  <div className="w-14 h-14 rounded-full border border-radiant-champagne/20 flex items-center justify-center group-hover:bg-radiant-gold group-hover:text-white transition-all duration-700">
                    <ArrowRight size={20} className="text-radiant-champagne group-hover:text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
