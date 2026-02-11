
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Key, ShieldCheck, Lock, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SignupProps {
  onComplete: () => void;
}

const SovereignSignup: React.FC<SignupProps> = ({ onComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      onComplete();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-radiant-bg px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.06)_0%,_transparent_70%)]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="bg-white max-w-md w-full p-16 rounded-[45px] space-y-12 text-center relative z-10 shadow-pearl-skeuo border border-radiant-champagne/10"
      >
        <div className="space-y-6">
           <div className="relative inline-block">
              <div className="absolute inset-0 bg-radiant-gold/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-24 h-24 bg-radiant-bg rounded-full flex items-center justify-center mx-auto text-radiant-gold border border-radiant-champagne/10 shadow-inner interactive group">
                <Key className="w-10 h-10 stroke-[1px] group-hover:rotate-12 transition-transform duration-700" />
              </div>
           </div>
           <div className="space-y-2">
             <h2 className="text-4xl md:text-5xl font-serif italic tracking-tighter text-radiant-text">Genera Identità.</h2>
             <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.6em] font-bold italic">Private Lounge Initialization</p>
           </div>
        </div>

        <form className="space-y-8" onSubmit={handleSignup}>
          <div className="space-y-6 text-left">
            <div className="space-y-3">
              <label className="text-[9px] font-mono text-radiant-gold/60 uppercase tracking-widest block font-bold px-4 italic">Email Istituzionale</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nome@identita-sovrana.it"
                className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[30px] p-7 text-xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all placeholder:text-radiant-muted/20"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[9px] font-mono text-radiant-gold/60 uppercase tracking-widest block font-bold px-4 italic">Crea Chiave d'Accesso</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••••"
                className="w-full bg-radiant-bg border border-radiant-champagne/10 rounded-[30px] p-7 text-xl font-serif text-radiant-text focus:border-radiant-gold outline-none transition-all placeholder:text-radiant-muted/20"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest">{error}</p>}
          
          <button 
            type="submit"
            disabled={loading}
            className="interactive w-full py-10 bg-radiant-text text-white rounded-full text-[11px] tracking-[0.5em] uppercase hover:bg-radiant-gold transition-all duration-700 shadow-2xl flex items-center justify-center gap-6 group font-bold"
          >
            <span>{loading ? 'Inizializzazione...' : 'Inizializza Caveau'}</span>
            {!loading && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <div className="mt-16 pt-10 border-t border-radiant-champagne/5 flex flex-col items-center gap-6">
           <p className="text-[10px] font-mono text-radiant-muted uppercase tracking-[0.4em] leading-relaxed italic font-bold">
             <ShieldCheck size={12} className="inline mr-2 text-radiant-gold" /> Zero-Knowledge Security Standard
           </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SovereignSignup;
