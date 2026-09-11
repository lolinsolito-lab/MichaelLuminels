
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, ArrowRight, Sun, Sparkles, MessageCircle, ArrowLeft, Crown } from 'lucide-react';

interface PulseProps {
  onBack: () => void;
  onUpgrade: () => void;
}

const PulseLounge: React.FC<PulseProps> = ({ onBack, onUpgrade }) => {
  const dispatches = [
    {
      id: "001",
      title: "La Geometria dell'Attenzione",
      date: "01.2026",
      content: `Il Rumore è una scelta. La maggior parte degli uomini vive in uno stato di "Saturazione Passiva". Accettano che ogni app, ogni email e ogni persona abbia il diritto di rubare un bit della loro vita.\n\nL'Architettura di oggi: Analizza il tuo smartphone. Se hai più di 3 notifiche attive nella schermata di blocco, non sei un proprietario del tuo tempo. Sei un ospite del tempo altrui.\n\nAzione Sovrana: Disattiva tutto ciò che non produce valore o pace. Il silenzio non è vuoto. È spazio per il comando.`,
      tag: "PROTOCOLLO: Pulse Update"
    }
  ];

  return (
    <div className="min-h-screen bg-radiant-bg text-radiant-text font-sans">
      {/* Zen-Tech Ambient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,_#FAF3E0_0%,_transparent_50%)] pointer-events-none opacity-40"></div>
      
      {/* Top Nav */}
      <nav className="relative z-20 border-b border-radiant-champagne/10 bg-white/60 backdrop-blur-3xl px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-4 text-radiant-muted hover:text-radiant-text transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">Torna al Portale</span>
          </button>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] font-bold italic">Luminel Pulse Active</span>
            <div className="w-12 h-12 rounded-2xl bg-white border border-radiant-champagne/10 flex items-center justify-center text-radiant-gold shadow-pearl-skeuo">
              <Fingerprint size={24} strokeWidth={1} />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-8 py-20 md:py-32">
        <div className="space-y-16 mb-32">
          <div className="space-y-6">
             <span className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Tier 01 • The Social Access</span>
             <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-radiant-text">Pulse Lounge.</h1>
          </div>

          {/* Daily Dispatch Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-radiant-champagne/20"></div>
              <h3 className="text-[10px] font-mono tracking-[0.4em] text-radiant-gold uppercase font-bold italic">Ultimi Dispacci</h3>
              <div className="h-px flex-1 bg-radiant-champagne/20"></div>
            </div>

            {dispatches.map((d, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 md:p-20 rounded-[60px] border border-radiant-champagne/10 shadow-pearl-skeuo space-y-10"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-radiant-champagne/5 pb-10">
                   <div className="space-y-2">
                     <p className="text-[10px] font-mono text-radiant-gold/50 uppercase tracking-widest font-bold italic">{d.tag}</p>
                     <h4 className="text-3xl md:text-5xl font-serif italic text-radiant-text">Dispaccio {d.id}: {d.title}</h4>
                   </div>
                   <span className="text-xl font-serif italic text-radiant-muted">{d.date}</span>
                </div>
                
                <div className="text-xl md:text-2xl font-light text-radiant-muted leading-relaxed italic tracking-wide font-sans space-y-8 whitespace-pre-wrap">
                  {d.content}
                </div>

                <div className="pt-10 flex items-center justify-between">
                   <div className="flex items-center gap-4 text-radiant-gold">
                      <MessageCircle size={18} />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold italic">Discussione Riservata</span>
                   </div>
                   <p className="text-[9px] font-mono text-radiant-muted/30 uppercase tracking-[0.3em] font-bold">Firmato: Michael Luminel</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upsell Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-radiant-text p-16 md:p-24 rounded-[70px] shadow-gold-glow relative overflow-hidden group interactive"
          onClick={onUpgrade}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-radiant-gold/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-radiant-gold/20 transition-all duration-1000"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
               <div className="w-20 h-20 bg-radiant-gold rounded-[30px] flex items-center justify-center text-radiant-text shadow-2xl">
                  <Crown size={36} strokeWidth={1} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-4xl md:text-6xl font-serif italic text-white leading-tight tracking-tighter">
                    Senti il bisogno di una <br /> <span className="gold-gradient-text">sintonizzazione?</span>
                  </h3>
                  <p className="text-xl font-light text-white/40 italic leading-relaxed tracking-wide">
                    Il silenzio non è un'assenza di suono. È una presenza di potere. Riacquista la sovranità totale con l'Architect Protocol.
                  </p>
               </div>
               <button className="flex items-center gap-6 text-radiant-gold font-mono text-[10px] tracking-[0.5em] uppercase group font-bold">
                 Visualizza Accesso Vault <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
               </button>
            </div>
            <div className="hidden md:flex justify-center">
               <div className="text-center space-y-6">
                  <Sparkles className="w-24 h-24 text-radiant-gold/20 animate-pulse mx-auto" />
                  <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] font-bold">Solo 2 slot rimasti per Architect Pack</p>
               </div>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default PulseLounge;
