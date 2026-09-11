import React from 'react';
import { ECOSYSTEM } from '@/constants';

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-60 px-8 md:px-24 bg-radiant-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-10">
          <div className="max-w-2xl">
            <span className="text-radiant-champagne text-[10px] tracking-[1.2em] uppercase mb-8 block font-bold">Architettura Celeste</span>
            <h2 className="text-5xl md:text-8xl font-serif text-radiant-text uppercase leading-[0.85] tracking-tighter">
              L'Ecosistema <br /> <span className="text-radiant-gold italic lowercase tracking-normal">Insolito</span>
            </h2>
          </div>
          <p className="text-radiant-muted text-[10px] tracking-[0.5em] uppercase max-w-[250px] leading-loose text-right font-light">
            Sistemi di sovranità digitale integrati per il dominio totale del tempo.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-10">
          {ECOSYSTEM.map((item, idx) => (
            <div 
              key={item.id} 
              className={`${
                idx === 0 ? 'col-span-12 lg:col-span-8' : 
                idx === 1 ? 'col-span-12 lg:col-span-4' :
                idx === 2 ? 'col-span-12 md:col-span-6 lg:col-span-4' :
                idx === 3 ? 'col-span-12 md:col-span-6 lg:col-span-4' :
                'col-span-12 lg:col-span-4'
              }`}
            >
              <div className="group relative h-[500px] bg-white border border-radiant-champagne/10 p-16 flex flex-col justify-between overflow-hidden shadow-pearl-skeuo hover:shadow-trayce-glow transition-all duration-700 rounded-45xl">
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-5xl text-radiant-champagne group-hover:scale-125 transition-transform duration-1000 opacity-60 group-hover:opacity-100">{item.icon}</span>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[7px] tracking-[0.4em] text-radiant-muted uppercase font-bold">Node.Protocol</span>
                    <span className={`text-[8px] tracking-[0.3em] uppercase font-black px-4 py-1.5 border rounded-full ${
                      item.status === 'LIVE' ? 'text-emerald-600 border-emerald-500/20 bg-emerald-500/5' : 
                      item.status === 'ACTIVE' ? 'text-blue-600 border-blue-500/20 bg-blue-500/5' : 
                      'text-radiant-gold/60 border-radiant-gold/10 bg-radiant-gold/5'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-serif text-4xl text-radiant-text mb-6 group-hover:text-radiant-champagne transition-colors duration-700">
                    {item.name}
                  </h3>
                  <p className="text-radiant-muted font-light leading-loose tracking-wide text-sm max-w-sm">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 pt-10 border-t border-radiant-champagne/10 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button className="text-[10px] tracking-[0.6em] uppercase text-radiant-text font-bold flex items-center gap-6 group/btn">
                    Esplora Protocollo <span className="group-hover/btn:translate-x-3 transition-transform duration-500">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
