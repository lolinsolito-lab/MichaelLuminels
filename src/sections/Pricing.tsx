
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Crown, Lock, ShieldCheck } from 'lucide-react';
import Logo from '@/components/Logo';

interface PricingProps {
  onSelect: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelect }) => {
  const tiers = [
    {
      name: "Protocol 01",
      subtitle: "La Scintilla Iniziale",
      price: "99",
      period: "Accesso Immediato",
      desc: "Il percorso digitale per gettare le fondamenta. Ideale per chi si accosta al metodo per la prima volta e desidera muovere i primi passi verso la propria sovranità interiore.",
      features: [
        "6 Moduli Video Ispirazionali",
        "Il Diario del Focus Personale",
        "Accesso alla Community dei Viaggiatori",
        "Contenuti di Espansione Periodici"
      ],
      cta: "Rispondi alla Chiamata e Inizia",
      icon: <ShieldCheck size={24} />,
      highlight: false,
      theme: "light"
    },
    {
      name: "Protocol 02",
      subtitle: "Sovereign Sync",
      price: "2.500",
      period: "Su Prenotazione",
      desc: "L'esperienza trasformativa totale. Un affiancamento intimo e personalizzato con Michael per ridefinire l'intera mappa della tua vita e del tuo business, eliminando ogni blocco emotivo e strutturale.",
      features: [
        "Sessioni di Mentoring Diretto con Michael",
        "Analisi Profonda dello Stile di Vita",
        "Mappatura Custom dei Flussi d'Oro",
        "Contatto Prioritario Personale",
        "Accesso Esclusivo alla Sovereign Board"
      ],
      cta: "Richiedi la tua Sessione di Allineamento",
      icon: <Crown size={24} />,
      highlight: true,
      theme: "dark"
    }
  ];

  return (
    <section id="pricing" className="py-72 px-6 bg-radiant-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#E0F2FE_0%,_transparent_80%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-48 space-y-8">
          <span className="text-[11px] font-mono tracking-[0.5em] text-radiant-gold uppercase font-bold italic">L'Inizio del Nuovo Capitolo</span>
          <h3 className="text-7xl md:text-[9rem] font-serif text-radiant-text leading-[0.8] tracking-tighter">
            Scegli la tua <br /> 
            <span className="gold-gradient-text italic font-light">porta d'ingresso.</span>
          </h3>
          <p className="text-xl font-light text-radiant-muted italic tracking-wide max-w-3xl mx-auto opacity-70">
            Ogni grande viaggio inizia con una singola decisione. Scegli il livello più adatto alla tua chiamata attuale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch px-4 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25 }}
              viewport={{ once: true }}
              className={`relative p-12 md:p-16 rounded-[50px] flex flex-col justify-between transition-all duration-1000 border h-full interactive
                ${tier.theme === 'dark' 
                  ? 'bg-radiant-text text-white border-radiant-gold/20 shadow-[0_30px_80px_rgba(0,0,0,0.2)]' 
                  : 'bg-white/80 backdrop-blur-xl text-radiant-text border-radiant-champagne/10 shadow-pearl-skeuo'}
                ${tier.highlight ? 'lg:scale-102 z-20' : 'z-10'}
              `}
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <div className={`p-5 rounded-[25px] ${tier.theme === 'dark' ? 'bg-radiant-gold/10 text-radiant-gold border border-radiant-gold/20' : 'bg-radiant-bg text-radiant-gold border border-radiant-champagne/10'}`}>
                    {tier.icon}
                  </div>
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-bold italic ${tier.theme === 'dark' ? 'text-radiant-gold/40' : 'text-radiant-gold/30'}`}>
                    Accesso Riservato
                  </span>
                </div>

                <div className="space-y-2">
                  <p className={`text-[10px] font-mono tracking-[0.5em] uppercase font-bold ${tier.theme === 'dark' ? 'text-radiant-gold' : 'text-radiant-gold'}`}>
                    {tier.name}
                  </p>
                  <h4 className={`text-3xl font-serif italic tracking-tight ${tier.theme === 'dark' ? 'text-white' : 'text-radiant-text'}`}>
                    {tier.subtitle}
                  </h4>
                  <p className={`text-base font-light font-sans italic tracking-wide opacity-60 pt-4 ${tier.theme === 'dark' ? 'text-white' : 'text-radiant-muted'}`}>
                    {tier.desc}
                  </p>
                </div>

                <div className={`pt-4 ${tier.theme === 'dark' ? 'gold-gradient-text' : 'text-radiant-text'}`}>
                  <div className="text-5xl font-serif tracking-tighter italic leading-none">
                    {tier.price === 'Riservato' ? (
                      <span className="text-radiant-gold italic">Su Candidatura</span>
                    ) : (
                      <>€{tier.price}</>  
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase opacity-40 block mt-2">{tier.period}</span>
                </div>

                <ul className="space-y-6 pt-12 border-t border-radiant-champagne/10">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-6 text-sm font-light italic tracking-wide">
                      <Check size={14} className="text-radiant-gold flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={onSelect}
                className={`mt-16 w-full py-8 rounded-full text-[10px] tracking-[0.5em] uppercase font-bold transition-all duration-700
                  ${tier.theme === 'dark' 
                    ? 'bg-radiant-gold text-radiant-text hover:bg-white' 
                    : 'bg-radiant-text text-white hover:bg-radiant-gold'}
                `}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* The Sovereign Seal Redesign */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 relative"
        >
          <div className="max-w-5xl mx-auto luxury-glass p-12 md:p-16 rounded-[45xl] shadow-pearl-skeuo flex flex-col md:flex-row items-center justify-between gap-12 group interactive">
            <div className="flex items-center gap-8 md:w-1/3">
              <div className="w-14 h-14 bg-radiant-bg rounded-2xl flex items-center justify-center text-radiant-gold shadow-inner border border-radiant-champagne/10">
                <Lock size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-widest font-bold">Encrypted Stream</p>
                <p className="text-[11px] font-sans text-radiant-muted italic leading-tight">Protocollo Trasparenza Active</p>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
               <div className="absolute inset-0 bg-radiant-gold/10 rounded-full blur-2xl group-hover:bg-radiant-gold/30 transition-all duration-1000"></div>
               <Logo className="w-16 h-16 relative z-10" variant="gold" />
            </div>
            <div className="flex items-center md:flex-row-reverse gap-8 md:w-1/3 text-left md:text-right">
              <div className="w-14 h-14 bg-radiant-bg rounded-2xl flex items-center justify-center text-radiant-gold shadow-inner border border-radiant-champagne/10">
                <ShieldCheck size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-widest font-bold">Sovereign Vault</p>
                <p className="text-[11px] font-sans text-radiant-muted italic leading-tight">Upgrade Architetturale Verificato</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
