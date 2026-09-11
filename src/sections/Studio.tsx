import React from 'react';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="relative py-80 px-8 md:px-24 bg-radiant-text overflow-hidden text-white">
      {/* Deep Iridescence Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[conic-gradient(from_0deg_at_50%_50%,#D4AF37,#1C1917,#D4AF37)] blur-[150px] animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <span className="text-radiant-champagne text-[10px] tracking-[1.5em] uppercase mb-12 block font-black">Michael Luminels Studio</span>
            <h2 className="text-6xl md:text-9xl font-serif text-white uppercase leading-[0.8] tracking-tighter mb-16">
              AI Image <br /> <span className="text-radiant-gold italic lowercase tracking-normal">Alchemics</span>
            </h2>
            <div className="max-w-2xl space-y-16">
              <p className="text-white/60 text-2xl md:text-3xl font-light leading-relaxed italic border-l border-radiant-gold/30 pl-12">
                "Nell'era dell'iper-visibilità, scolpiamo la percezione per renderla il tuo manifesto di dominio silenzioso."
              </p>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="group space-y-6">
                  <h4 className="font-serif text-radiant-gold text-sm tracking-[0.4em] uppercase">Visual Identity</h4>
                  <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase leading-relaxed group-hover:text-white/70 transition-colors">
                    Sincronizziamo l'estetica IA con la tua identità di leader. Immagini che non sono pixel, ma potere.
                  </p>
                </div>
                <div className="group space-y-6">
                  <h4 className="font-serif text-radiant-gold text-sm tracking-[0.4em] uppercase">Digital Aura</h4>
                  <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase leading-relaxed group-hover:text-white/70 transition-colors">
                    Guardiani della tua percezione globale. Ricalibriamo il tuo impatto visivo per una coerenza imperiale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full aspect-square rounded-full bg-white/5 backdrop-blur-3xl p-12 border-radiant-gold/10 relative group hover:scale-105 transition-transform duration-1000 shadow-2xl">
               <div className="w-full h-full rounded-full overflow-hidden grayscale brightness-125 opacity-30 group-hover:opacity-70 transition-all duration-1000">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                    alt="AI Sculpting" 
                    className="w-full h-full object-cover scale-150"
                  />
               </div>
               <div className="absolute inset-0 rounded-full border border-radiant-gold/5 group-hover:border-radiant-gold/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Studio;
