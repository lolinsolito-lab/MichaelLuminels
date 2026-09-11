
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, PenTool } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="authority" className="py-72 bg-radiant-text text-white overflow-hidden relative">
      {/* Background Decor - Linee di scansione impercettibili e bagliore oro */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(255,255,255,0.01))] bg-[length:100%_4px,4px_100%]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radiant-gold/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Colonna Immagine - Ritratto d'Elite */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-[3/4] rounded-[60px] overflow-hidden border border-white/10 grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:contrast-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                alt="Michael Jara - The Architect" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-radiant-text via-transparent to-transparent opacity-80"></div>
            </div>
            {/* Firma Digitale */}
            <div className="absolute -bottom-10 -right-10 p-12 bg-radiant-gold/10 backdrop-blur-2xl rounded-[50px] border border-radiant-gold/20 shadow-2xl">
               <p className="font-serif italic text-3xl gold-gradient-text">Michael Luminel</p>
               <p className="text-[10px] font-mono tracking-[0.4em] uppercase mt-3 text-radiant-gold font-bold italic">Principal Architect</p>
            </div>
          </motion.div>

          {/* Colonna Narrativa - Il Mito */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-16"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">The Architect’s Dossier</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tighter italic">
                Dalla Procura al <br />
                <span className="gold-gradient-text font-light">Reset Sovrano.</span>
              </h2>
            </div>

            <div className="space-y-10 text-xl md:text-2xl font-light text-white/40 leading-relaxed tracking-wide italic font-sans text-justify">
              <p>
                La mia mente è stata forgiata in ecosistemi in cui il caos non è un'opzione, ma un rischio fatale. Tra i corridoi della <span className="text-white font-medium italic underline decoration-radiant-gold/20">Procura della Repubblica</span>, ho operato a fianco di magistrati e organi inquirenti, dove ogni dato è un'arma e la sicurezza dei flussi informativi decreta la vita o la morte di un'operazione.
              </p>
              
              <p>
                In <span className="text-white font-medium">Capgemini</span>, ho proiettato questa disciplina sull'architettura dei flussi aziendali globali. L'essere umano fallisce dove la macchina eccelle. Non hai bisogno di più tempo. Hai bisogno di un'infrastruttura inattaccabile.
              </p>

              <blockquote className="border-l-4 border-radiant-gold pl-12 py-6 italic text-3xl md:text-4xl text-white font-serif leading-tight tracking-tight">
                "Applichiamo alla tua struttura privata e finanziaria lo stesso livello di rigore e isolamento di un'indagine forense."
              </blockquote>

              <p>
                Oggi, ho distillato quel rigore istituzionale nel <span className="text-radiant-gold font-medium italic">Protocollo Luminel</span>. Non offro motivazione. Non vendo corsi. Offro il reset del tuo sistema operativo: un'ingegnerizzazione completa della tua infrastruttura di vita e di business.
              </p>
            </div>

            {/* Credenziali Istituzionali */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
              <div className="space-y-4 group cursor-default">
                <div className="p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-radiant-gold/10 transition-colors">
                  <Shield className="text-radiant-gold" size={24} strokeWidth={1} />
                </div>
                <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-white font-bold italic">Rigore Forense</h4>
                <p className="text-[9px] text-white/20 uppercase tracking-widest italic font-bold">Ex Procura della Repubblica</p>
              </div>
              <div className="space-y-4 group cursor-default">
                <div className="p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-radiant-gold/10 transition-colors">
                  <Database className="text-radiant-gold" size={24} strokeWidth={1} />
                </div>
                <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-white font-bold italic">Architettura di Flusso</h4>
                <p className="text-[9px] text-white/20 uppercase tracking-widest italic font-bold">Business Analyst · Capgemini</p>
              </div>
              <div className="space-y-4 group cursor-default">
                <div className="p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-radiant-gold/10 transition-colors">
                  <PenTool className="text-radiant-gold" size={24} strokeWidth={1} />
                </div>
                <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-white font-bold italic">Design Sovrano</h4>
                <p className="text-[9px] text-white/20 uppercase tracking-widest italic font-bold">Luxury Transformation</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
