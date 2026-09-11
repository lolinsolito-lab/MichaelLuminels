
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Wallet, Clock, Zap, ArrowRight, Database, Sparkles } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const ArchitectOnboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const slides = [
    {
      icon: <Fingerprint size={40} />,
      title: "Identità Sovrana",
      question: "Quali sono i tuoi 3 flussi di reddito principali che richiedono la massima protezione del dato?",
      tag: "Audit Economico",
      placeholder: "Descrivi la tua struttura di capitale...",
      sub: "Stiamo resettando le tue frequenze."
    },
    {
      icon: <Clock size={40} />,
      title: "Erosione Temporale",
      question: "Identifica con precisione chi o cosa sottrae oggi il 60% della tua lucidità operativa quotidiana.",
      tag: "Analisi Flussi",
      placeholder: "Elenca le interferenze sistemiche...",
      sub: "Definiamo ora i parametri del tuo impero."
    },
    {
      icon: <Sparkles size={40} />,
      title: "Attivazione VirtualTwin",
      question: "Sei pronto a delegare la tua operatività ripetitiva alla nostra AI Twin per reclamare il lusso del silenzio?",
      tag: "Readiness Check",
      placeholder: "Conferma la tua intenzione di comando...",
      sub: "Da oggi, il rumore non ti appartiene più."
    }
  ];

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-radiant-bg px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] opacity-30"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="mb-20 space-y-6 text-center">
           <div className="h-1.5 w-64 bg-radiant-champagne/10 rounded-full overflow-hidden mx-auto mb-10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / slides.length) * 100}%` }}
                className="h-full bg-radiant-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              />
           </div>
           <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-widest font-bold italic">Step {step + 1} di 3 • Sincronizzazione v1.0</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-16 md:p-24 rounded-[60px] border border-radiant-champagne/10 shadow-pearl-skeuo space-y-16 text-center"
          >
            <div className="space-y-6">
               <div className="w-24 h-24 bg-radiant-bg rounded-[35px] flex items-center justify-center mx-auto text-radiant-gold shadow-inner border border-radiant-champagne/10 group">
                  {slides[step].icon}
               </div>
               <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-serif italic text-radiant-text leading-tight tracking-tighter">
                    Sincronizziamo la tua <br /><span className="gold-gradient-text font-light">{slides[step].title}.</span>
                  </h3>
                  <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.3em] font-bold italic">{slides[step].sub}</p>
               </div>
            </div>

            <div className="space-y-10">
              <p className="text-2xl md:text-3xl font-light text-radiant-muted leading-tight tracking-wide max-w-2xl mx-auto italic">
                {slides[step].question}
              </p>
              <textarea 
                placeholder={slides[step].placeholder}
                className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[40px] p-10 text-xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all min-h-[180px] shadow-inner placeholder:text-radiant-muted/20 italic"
              />
            </div>

            <button 
              onClick={handleNext}
              className="interactive group flex items-center gap-8 px-20 py-10 bg-radiant-text text-white rounded-full transition-all shadow-3xl hover:bg-radiant-gold mx-auto font-bold"
            >
              <span className="text-[11px] tracking-[0.4em] uppercase">Salva e Procedi al Reset</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArchitectOnboarding;
