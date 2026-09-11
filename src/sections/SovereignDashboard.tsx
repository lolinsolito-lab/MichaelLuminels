
import React from 'react';
import { motion } from 'framer-motion';
import { 
  VolumeX, 
  Sparkles, 
  Wind, 
  ArrowUpRight, 
  Settings, 
  LogOut, 
  Shield, 
  Activity, 
  Lock, 
  Zap,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { type Profile, supabase } from '@/lib/supabase';

interface DashboardProps {
  user: Profile | null;
}

const SovereignDashboard: React.FC<DashboardProps> = ({ user }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <section className="min-h-screen bg-radiant-bg flex flex-col p-6 md:p-12 overflow-x-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radiant-gold/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Header Dashboard Editoriale */}
        <header className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-serif italic text-radiant-text tracking-tighter leading-none">Bentornato, {user?.full_name?.split(' ')[0] || 'Sovrano'}.</h1>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-radiant-gold animate-pulse"></div>
              <p className="text-[10px] font-mono text-radiant-gold uppercase tracking-[0.4em] font-bold italic">Status: {user?.tier?.toUpperCase()} • Update v1.0</p>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="interactive p-5 bg-white rounded-[25px] border border-radiant-champagne/10 text-radiant-muted hover:text-radiant-gold transition-all shadow-pearl-skeuo">
                <Settings size={20} />
             </button>
             <button 
               onClick={handleLogout}
               className="interactive p-5 bg-white rounded-[25px] border border-radiant-champagne/10 text-radiant-muted hover:text-red-400 transition-all shadow-pearl-skeuo"
             >
                <LogOut size={20} />
             </button>
          </div>
        </header>

        {/* I TROFEI DELLA SOVRANITÀ - Grid Modulare */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. IL CONTATORE DEL SILENZIO */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[45px] shadow-pearl-skeuo border border-radiant-champagne/5 flex flex-col justify-between h-[400px] interactive"
          >
            <div className="flex justify-between items-start">
              <div className="p-5 bg-radiant-bg rounded-2xl text-radiant-gold shadow-inner border border-radiant-champagne/10">
                <VolumeX size={28} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-radiant-muted uppercase font-bold italic opacity-30">Audit Temporale</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-radiant-muted uppercase tracking-widest font-bold italic">Ore di Silenzio Acquisito</h3>
              <div className="flex items-baseline gap-2">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-8xl font-serif text-radiant-text tracking-tighter leading-none"
                >
                  {user?.reset_score ? (user.reset_score / 10).toFixed(1) : '0.0'}
                </motion.span>
                <span className="text-3xl font-serif italic text-radiant-gold">h</span>
              </div>
            </div>
            <p className="text-sm text-radiant-muted italic leading-relaxed tracking-wide">
              "L'AI ha filtrato i segnali irrilevanti oggi basandosi sul tuo score di {user?.reset_score}."
            </p>
          </motion.div>

          {/* 2. LA LINEA DI LUCE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-radiant-text p-10 rounded-[45px] shadow-2xl text-white flex flex-col justify-between h-[400px] relative overflow-hidden group interactive"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-radiant-gold/10 rounded-full blur-[80px] -mr-24 -mt-24 group-hover:bg-radiant-gold/20 transition-all duration-1000"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="p-5 bg-white rounded-2xl text-radiant-text shadow-xl">
                <Sparkles size={28} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-radiant-gold uppercase font-bold italic opacity-50">Tier: {user?.tier}</span>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-3xl font-serif italic tracking-tight">Sincronizzazione</h3>
                <p className="text-[10px] font-mono text-radiant-gold/50 uppercase tracking-widest italic">Protocollo v1.0 attivo</p>
              </div>
              
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: user?.onboarding_completed ? '100%' : '38%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full holographic-bar shadow-[0_0_20px_rgba(212,175,55,0.4)] rounded-full"
                  />
                </div>
                <div className="flex justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-white/20 font-bold">
                  <span>Origine: Caos</span>
                  <span className="text-radiant-gold">Target: Sovranità</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. EAT THE FROG AI */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-[45px] shadow-pearl-skeuo border border-radiant-champagne/5 flex flex-col justify-between h-[400px] interactive"
          >
            <div className="flex justify-between items-start">
              <div className="p-5 bg-radiant-bg rounded-2xl text-radiant-gold shadow-inner border border-radiant-champagne/10">
                <Wind size={28} />
              </div>
              <button className="text-radiant-muted/20 hover:text-radiant-gold transition-colors p-2">
                <ArrowUpRight size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-radiant-bg text-radiant-gold text-[10px] font-mono rounded-full uppercase font-bold tracking-widest border border-radiant-champagne/10">
                Protocollo Eseguito
              </div>
              <h3 className="text-3xl font-serif text-radiant-text leading-[1.1] tracking-tighter italic">
                "Compito delegato all'AI. <span className="gold-gradient-text italic font-light">Respira.</span>"
              </h3>
              <p className="text-sm font-light text-radiant-muted leading-relaxed italic tracking-wide">
                L'architettura del tuo tier {user?.tier} sta gestendo le urgenze per te.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SovereignDashboard;
