
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CheckoutProps {
  onPaymentSuccess: () => void;
}

const SovereignCheckout: React.FC<CheckoutProps> = ({ onPaymentSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPaymentSuccess();
    }, 2500);
  };

  return (
    <section className="min-h-screen py-48 px-6 flex items-center justify-center bg-radiant-bg">
      <div className="max-w-2xl w-full space-y-20">
        
        <div className="text-center space-y-8">
          <div className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Sovereign Investment</div>
          <h2 className="text-6xl md:text-7xl font-serif italic tracking-tighter text-radiant-text leading-tight">Acquisizione <br/> Protocollo.</h2>
          <p className="text-radiant-muted font-light tracking-wide text-2xl italic max-w-sm mx-auto">
            Questo atto sancisce il tuo risveglio alla <span className="gold-gradient-text font-medium underline decoration-radiant-champagne/30">sovranità radiosa.</span>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-16 md:p-24 rounded-[70px] border border-radiant-champagne/10 shadow-pearl-skeuo relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
             <CreditCard size={150} className="text-radiant-gold" />
          </div>

          <div className="bg-radiant-bg p-12 rounded-[50px] border border-radiant-champagne/10 mb-16 shadow-inner">
             <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] mb-4 font-bold italic">Selected Path</p>
             <h4 className="text-4xl font-serif italic text-radiant-text">The Architect Pack</h4>
             <p className="text-5xl font-serif mt-8 gold-gradient-text italic">€1.490 <span className="text-[11px] font-mono text-radiant-muted opacity-40 uppercase tracking-[0.3em] font-bold">/ full sync</span></p>
          </div>

          <form onSubmit={handlePayment} className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] block font-bold italic ml-4">Numero Identità Finanziaria</label>
                <input 
                  type="text" 
                  required
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[30px] p-8 text-2xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all placeholder:text-radiant-gold/10"
                />
              </div>
              <div className="flex gap-8">
                <div className="w-1/2 space-y-3">
                  <label className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] block font-bold italic ml-4">Ciclo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="MM/YY"
                    className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[30px] p-8 text-2xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all placeholder:text-radiant-gold/10"
                  />
                </div>
                <div className="w-1/2 space-y-3">
                  <label className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] block font-bold italic ml-4">Chiave</label>
                  <input 
                    type="text" 
                    required
                    placeholder="000"
                    className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[30px] p-8 text-2xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all placeholder:text-radiant-gold/10"
                  />
                </div>
              </div>
            </div>

            <button 
              disabled={loading}
              className="interactive w-full py-10 bg-radiant-text text-white rounded-full text-[11px] tracking-[0.5em] uppercase hover:bg-radiant-gold hover:text-radiant-text transition-all duration-700 shadow-2xl flex items-center justify-center gap-6 group font-bold"
            >
              {loading ? (
                <span className="animate-pulse">Sincronizzazione Criptata...</span>
              ) : (
                <>
                  <span>Conferma Investimento Radioso</span>
                  <Check size={20} className="group-hover:scale-125 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-16 flex flex-col items-center gap-8 text-[10px] font-mono text-radiant-muted uppercase tracking-[0.3em] text-center font-bold">
            <div className="flex items-center gap-6 opacity-60 italic">
               <Lock size={14} className="text-radiant-gold" /> <ShieldCheck size={14} className="text-radiant-gold" /> <span>Standard Procura Istituzionale</span>
            </div>
            <p className="max-w-xs opacity-30 italic leading-relaxed px-8">
              "L'investimento nella tua sovranità è l'unico atto di libertà inalienabile."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SovereignCheckout;
