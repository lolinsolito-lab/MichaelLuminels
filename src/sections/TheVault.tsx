
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, PlayCircle, FileText, MessageSquare, ArrowLeft, Download, ExternalLink } from 'lucide-react';

interface VaultProps {
  onBack: () => void;
}

const TheVault: React.FC<VaultProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-radiant-gold selection:text-radiant-text font-sans">
      {/* Cinematic Background Detail */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      {/* Header Elite */}
      <nav className="relative z-20 border-b border-white/5 bg-black/40 backdrop-blur-3xl px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-4 text-white/30 hover:text-white transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">Esci dal Caveau</span>
          </button>
          <div className="flex items-center gap-10">
            <div className="text-right hidden md:block">
              <p className="text-[9px] font-mono text-radiant-gold uppercase tracking-[0.5em] font-bold italic">Sovereign Identity Verificata</p>
              <p className="text-xl font-serif italic text-white/80">Michael Luminel Architect</p>
            </div>
            <div className="w-14 h-14 rounded-2xl border border-radiant-gold/30 flex items-center justify-center bg-radiant-gold/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <Shield size={24} className="text-radiant-gold" />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-32">
        <div className="space-y-4 mb-24">
          <p className="text-[11px] font-mono tracking-[0.6em] text-radiant-gold uppercase font-bold italic">Area Riservata • Accesso Livello 03</p>
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter">The Vault.</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content: Protocol Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 space-y-12"
          >
            <div className="aspect-video bg-gray-900 rounded-[50px] border border-white/5 overflow-hidden relative group shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/30 transition-all cursor-pointer z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-radiant-gold/20 blur-3xl group-hover:bg-radiant-gold/40 transition-all"></div>
                  <PlayCircle size={100} strokeWidth={1} className="text-white/40 group-hover:text-radiant-gold group-hover:scale-110 transition-all relative z-10" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Sovereign Workspace" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[3000ms]" 
              />
              <div className="absolute bottom-8 left-8 z-20">
                <span className="px-4 py-1.5 bg-radiant-gold text-radiant-text text-[9px] font-mono uppercase tracking-widest rounded-full font-bold">Live Masterclass</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8 bg-white/5 p-12 rounded-[40px] border border-white/5">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif italic text-white/90">Protocollo 01: De-Saturazione Forense</h2>
                <div className="flex gap-6 text-[10px] font-mono text-white/30 uppercase tracking-widest font-bold">
                  <span>Durata: 45min</span>
                  <span>•</span>
                  <span>Modulo: Architettura Decisionale</span>
                </div>
                <p className="text-white/40 font-light italic text-lg max-w-xl leading-relaxed">
                  Analizziamo i flussi di dati che erodono il tuo capitale decisionale. Impariamo a costruire il primo muro di protezione istituzionale.
                </p>
              </div>
              <button className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono tracking-widest uppercase hover:bg-white/10 transition-all group font-bold">
                <Download size={14} className="group-hover:translate-y-1 transition-transform" />
                <span>Asset PDF</span>
              </button>
            </div>
          </motion.div>

          {/* Sidebar Tools */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="p-10 bg-white/5 rounded-[50px] border border-white/10 space-y-10 shadow-xl backdrop-blur-md">
              <div className="space-y-2">
                <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-radiant-gold font-bold italic">Strumenti Sovrani</h3>
                <div className="h-0.5 w-12 bg-radiant-gold/30 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <FileText size={20} />, text: "Audit Personalizzato", sub: "Report v1.4" },
                  { icon: <MessageSquare size={20} />, text: "Direct Line Michael", sub: "Canale Blindato" },
                  { icon: <Lock size={20} />, text: "Cloud Criptato", sub: "AES-256 Storage" },
                  { icon: <ExternalLink size={20} />, text: "VirtualTwin Dashboard", sub: "AI Sincronizzata" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-radiant-gold/30 hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="flex items-center gap-6">
                      <div className="text-radiant-gold group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="space-y-1">
                        <p className="text-sm font-light text-white/80">{item.text}</p>
                        <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest font-bold">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                 <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] font-bold text-center italic">Sessione Prossima: 14 Gennaio</p>
                 <button className="w-full py-6 bg-radiant-gold text-radiant-text rounded-full text-[10px] font-mono uppercase tracking-[0.4em] font-bold hover:bg-white transition-all shadow-2xl">
                    Prenota Revisione
                 </button>
              </div>
            </div>

            {/* Notification Card */}
            <div className="p-8 bg-radiant-gold/5 rounded-[40px] border border-radiant-gold/10 flex items-center gap-6">
               <div className="w-3 h-3 bg-radiant-gold rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]"></div>
               <p className="text-xs font-light italic text-white/60">
                 Michael Luminel ha aggiornato il <span className="text-radiant-gold font-medium">Protocollo Visibility</span>.
               </p>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default TheVault;
