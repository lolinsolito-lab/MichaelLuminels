
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Fingerprint, 
  Sun, 
  ShieldCheck, 
  Zap, 
  Award, 
  Layers, 
  Crown 
} from 'lucide-react';

const Laws: React.FC = () => {
  const laws = [
    {
      id: "01",
      title: "Risonanza Identitaria",
      tag: "Vision",
      description: "Il caos nasce dalla disconnessione tra anima e azione. Riallineiamo la tua luce interna dissipando le distorsioni digitali.",
      icon: <Fingerprint className="w-8 h-8" />
    },
    {
      id: "02",
      title: "Chiarificazione Chirurgica",
      tag: "Focus",
      description: "Applichiamo il rigore delle procedure forensi per isolare l'essenziale. Se non brilla della tua visione, viene rimosso.",
      icon: <Sun className="w-8 h-8" />
    },
    {
      id: "03",
      title: "Automazione Solare",
      tag: "Flow",
      description: "Il lusso supremo è l'assenza di attrito. Progettiamo flussi invisibili che operano come architetture celesti.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: "04",
      title: "Inviolabilità Istituzionale",
      tag: "Security",
      description: "Proteggere il tuo pensiero è un atto sacro. Creiamo un prisma difensivo tra la tua mente e l'ombra esterna.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      id: "05",
      title: "Spazio di Cristallo",
      tag: "Assets",
      description: "Solo nel silenzio radioso si manifesta il potere. Progettiamo spazi di assenza per far fiorire la tua sovranità.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      id: "06",
      title: "Estetica dell'Ordine",
      tag: "Identity",
      description: "L'ordine estetico è un requisito funzionale. Se il tuo ecosistema riflette luce, la tua mente opererà con splendore.",
      icon: <Award className="w-8 h-8" />
    },
    {
      id: "07",
      title: "Sovranità Radiosa",
      tag: "Ownership",
      description: "L'apice del protocollo. Diventare l'unico Architetto di Luce che governa ogni variabile del proprio destino.",
      icon: <Crown className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-72 px-6 bg-radiant-bg relative overflow-hidden">
      {/* Background radiant glow - no more black spaces */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-radiant-champagne/10 rounded-full blur-[180px] -z-10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mb-48 space-y-12 text-center mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-mono tracking-[0.7em] text-radiant-gold uppercase font-bold italic"
          >
            The Illuminated Code
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[9rem] font-serif text-radiant-text leading-[0.8] tracking-tighter"
          >
            Le 7 Leggi del <br /> 
            <span className="gold-gradient-text italic font-light">Risveglio.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-light text-radiant-muted max-w-2xl leading-relaxed tracking-wide italic mx-auto"
          >
            Protocolli di un sistema operativo superiore, distillati dalla luce zen e dal rigore forense per chi esige il comando del proprio tempo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {laws.slice(0, 2).map((law, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-6 bg-white p-16 rounded-[60px] border border-radiant-champagne/10 shadow-pearl-skeuo group interactive"
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-between items-start mb-20">
                <div className="p-8 bg-radiant-champagne/5 rounded-[30px] text-radiant-gold group-hover:bg-radiant-gold group-hover:text-white transition-all duration-700 transform group-hover:scale-110">
                  {law.icon}
                </div>
                <span className="text-6xl font-serif text-radiant-gold/10 group-hover:text-radiant-gold/20 transition-all italic">{law.id}</span>
              </div>
              <div className="space-y-8">
                <span className="text-[11px] font-mono tracking-[0.5em] text-radiant-gold uppercase font-bold italic">{law.tag}</span>
                <h4 className="text-5xl font-serif text-radiant-text leading-tight tracking-tight">{law.title}</h4>
                <p className="text-2xl text-radiant-muted font-light leading-relaxed italic tracking-wide">{law.description}</p>
              </div>
            </motion.div>
          ))}

          {laws.slice(2, 5).map((law, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-4 bg-white p-12 rounded-[50px] border border-radiant-champagne/10 shadow-pearl-skeuo group interactive"
              whileHover={{ y: -10 }}
            >
              <div className="mb-12 p-6 bg-radiant-champagne/5 rounded-[25px] w-fit text-radiant-gold group-hover:bg-radiant-champagne group-hover:text-white transition-all duration-700">
                {law.icon}
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-mono tracking-[0.4em] text-radiant-gold/50 uppercase font-bold italic">{law.tag}</span>
                <h4 className="text-3xl font-serif text-radiant-text leading-tight tracking-tight">{law.title}</h4>
                <p className="text-lg text-radiant-muted font-light leading-relaxed italic tracking-wide">{law.description}</p>
              </div>
            </motion.div>
          ))}

          {laws.slice(5, 7).map((law, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.8 }}
              viewport={{ once: true }}
              className={`md:col-span-6 p-16 rounded-[60px] transition-all duration-1000 group interactive ${i === 1 ? 'bg-radiant-text text-white shadow-gold-glow' : 'bg-white border border-radiant-champagne/10 shadow-pearl-skeuo'}`}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-between items-start mb-16">
                <div className={`p-8 rounded-[30px] transition-all duration-700 group-hover:scale-110 ${i === 1 ? 'bg-radiant-gold text-radiant-text shadow-2xl' : 'bg-radiant-champagne/5 text-radiant-gold'}`}>
                  {law.icon}
                </div>
                <span className={`text-6xl font-serif italic transition-all ${i === 1 ? 'text-white/10' : 'text-radiant-gold/10'}`}>{law.id}</span>
              </div>
              <div className="space-y-8">
                <span className={`text-[11px] font-mono tracking-[0.5em] uppercase font-bold italic ${i === 1 ? 'text-radiant-gold' : 'text-radiant-gold'}`}>{law.tag}</span>
                <h4 className="text-5xl font-serif leading-tight tracking-tight">{law.title}</h4>
                <p className={`text-2xl font-light leading-relaxed italic tracking-wide ${i === 1 ? 'text-white/60' : 'text-radiant-muted'}`}>{law.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Laws;
