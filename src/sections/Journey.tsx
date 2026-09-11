
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Sparkles } from 'lucide-react';

const Journey: React.FC = () => {
  const steps = [
    {
      version: "I",
      title: "Risveglio",
      tag: "THE DAWN",
      description: "Dissipazione del rumore tossico. Riacquisizione della chiarezza biologica.",
      icon: <Sun className="w-6 h-6" />,
    },
    {
      version: "II",
      title: "Sincronia",
      tag: "THE ALIGNMENT",
      description: "Progettazione dei flussi d'oro. Automazione della sovranità quotidiana.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      version: "III",
      title: "Splendore",
      tag: "THE RADIANCE",
      description: "Manifestazione della visione suprema. Comando assoluto del proprio tempo.",
      icon: <Sparkles className="w-6 h-6" />,
    }
  ];

  return (
    <section className="py-72 px-6 bg-radiant-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-40">
          
          <div className="max-w-4xl space-y-10">
            <span className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">21 Days To Sovereignty</span>
            <h3 className="text-7xl md:text-9xl font-serif text-radiant-text leading-[0.85] tracking-tighter">
              Il Cammino <br /> 
              <span className="gold-gradient-text italic font-light text-radiant-gold/80">Illuminato.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Gold Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-radiant-champagne/20 hidden md:block -translate-y-32"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 1.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative z-10 p-12 bg-white rounded-[50px] border border-radiant-champagne/10 shadow-pearl-skeuo group-hover:shadow-gold-glow group-hover:border-radiant-champagne/30 transition-all duration-1000 h-full flex flex-col justify-between">
                  <div className="space-y-12">
                    <div className="flex justify-between items-center">
                      <div className="p-6 bg-radiant-champagne/5 rounded-[25px] text-radiant-champagne group-hover:bg-radiant-champagne group-hover:text-white transition-all duration-700">
                        {step.icon}
                      </div>
                      <span className="text-5xl font-serif text-radiant-gold/10 italic group-hover:text-radiant-gold/20 transition-all">{step.version}</span>
                    </div>
                    <div className="space-y-6">
                      <span className="text-[10px] font-mono tracking-widest text-radiant-gold uppercase font-bold">{step.tag}</span>
                      <h4 className="text-4xl font-serif text-radiant-text tracking-tight">{step.title}</h4>
                      <p className="text-radiant-muted font-light leading-relaxed font-sans text-lg italic">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
