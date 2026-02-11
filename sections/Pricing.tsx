
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Crown, Lock, ShieldCheck } from 'lucide-react';
import Logo from '../components/Logo';

interface PricingProps {
  onSelect: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelect }) => {
  const tiers = [
    {
      name: "Luminel Pulse",
      price: "29",
      period: "/mese",
      desc: "Il tuo Daily Alignment. Un abbonamento alla chiarezza quotidiana.",
      features: ["Daily Pulse: Bit di Sincronia", "Accesso alla Newsroom", "Status Badge Silver"],
      cta: "Entra nel Club",
      icon: <Zap size={24} />,
      highlight: false,
      theme: "light"
    },
    {
      name: "Luminel Sync",
      price: "490",
      period: "/21gg",
      desc: "Percorso trasformativo assistito. Sincronia totale dei flussi.",
      features: ["Upgrade di Sistema (21gg)", "Dashboard Sovereign Sync", "Audit Architetturale"],
      cta: "Inizia Sincronia",
      icon: <Sparkles size={24} />,
      highlight: true,
      theme: "light"
    },
    {
      name: "The Architect",
      price: "1.490",
      period: "/upgrade",
      desc: "L'esperienza d'élite. Progettazione diretta con Michael Jara.",
      features: ["3 Sessioni con l'Architetto", "Design Istituzionale Custom", "Supporto Prioritario"],
      cta: "Diventa Sovrano",
      icon: <Crown size={24} />,
      highlight: false,
      theme: "dark"
    }
  ];

  return (
    <section id="pricing" className="py-72 px-6 bg-radiant-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#E0F2FE_0%,_transparent_80%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-48 space-y-8">
          <span className="text-[11px] font-mono tracking-[0.5em] text-radiant-gold uppercase font-bold italic">Upgrade Sistemici</span>
          <h3 className="text-7xl md:text-[9rem] font-serif text-radiant-text leading-[0.8] tracking-tighter">
            Architetture di <br /> 
            <span className="gold-gradient-text italic font-light">Valore.</span>
          </h3>
          <p className="text-xl font-light text-radiant-muted italic tracking-wide max-w-2xl mx-auto opacity-70">
            Dal riallineamento quotidiano alla progettazione integrale della tua sovranità. Scegli il livello di upgrade richiesto dal tuo sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch px-4">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-12 md:p-16 rounded-[50px] flex flex-col justify-between transition-all duration-1000 border border-radiant-champagne/10 shadow-pearl-skeuo h-full interactive
                ${tier.theme === 'dark' ? 'bg-radiant-text text-white' : 'bg-white/80 backdrop-blur-xl text-radiant-text'}
                ${tier.highlight ? 'lg:scale-105 z-20 shadow-trayce-glow' : 'z-10'}
              `}
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <div className={`p-5 rounded-[25px] ${tier.theme === 'dark' ? 'bg-radiant-gold text-radiant-text' : 'bg-radiant-bg text-radiant-gold border border-radiant-champagne/10'}`}>
                    {tier.icon}
                  </div>
                  <span className={`text-[10px] font-mono tracking-widest uppercase font-bold italic ${tier.theme === 'dark' ? 'text-white/20' : 'text-radiant-gold/30'}`}>
                    Protocol 0{i+1}
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className={`text-4xl font-serif italic tracking-tight ${tier.theme === 'dark' ? 'text-white' : 'text-radiant-text'}`}>
                    {tier.name}
                  </h4>
                  <p className={`text-lg font-light font-sans italic tracking-wide opacity-60 ${tier.theme === 'dark' ? 'text-white' : 'text-radiant-muted'}`}>
                    {tier.desc}
                  </p>
                </div>

                <div className={`text-6xl font-serif tracking-tighter italic leading-none pt-4 ${tier.theme === 'dark' ? 'gold-gradient-text' : 'text-radiant-text'}`}>
                  €{tier.price} <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase opacity-40 block mt-2">{tier.period}</span>
                </div>

                <ul className="space-y-6 pt-12 border-t border-radiant-champagne/5">
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
                  ${tier.theme === 'dark' ? 'bg-white text-radiant-text hover:bg-radiant-gold' : 'bg-radiant-text text-white hover:bg-radiant-gold'}
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
