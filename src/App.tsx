
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import Hero from '@/sections/Hero';
import Philosophy from '@/sections/Philosophy';
import AI from '@/sections/AI';
import AboutMe from '@/sections/AboutMe';
import Laws from '@/sections/Laws';
import Quote from '@/sections/Quote';
import Quiz from '@/components/Quiz';
import Journey from '@/sections/Journey';
import Pricing from '@/sections/Pricing';
import Footer from '@/sections/Footer';
import LuminelAssistant from '@/components/LuminelAssistant';
import MembershipGate from '@/sections/MembershipGate';
import PulseLounge from '@/sections/PulseLounge';
import TheVault from '@/sections/TheVault';
import Manifesto from '@/sections/Manifesto';
import Ecosystem from '@/sections/Ecosystem';
import Studio from '@/sections/Studio';

// Sezioni d'Élite
import Contrast from '@/sections/Contrast';
import HiddenTax from '@/sections/HiddenTax';
import AuditResult from '@/sections/AuditResult';
import SovereignCheckout from '@/sections/SovereignCheckout';
import ArchitectOnboarding from '@/sections/ArchitectOnboarding';
import SovereignSignup from '@/sections/SovereignSignup';
import SovereignLogin from '@/sections/SovereignLogin';
import SovereignDashboard from '@/sections/SovereignDashboard';

// Backend Interface
import { supabase, type Profile } from '@/lib/supabase';

type ViewState = 'landing' | 'quiz' | 'audit' | 'checkout' | 'onboarding' | 'signup' | 'login' | 'dashboard' | 'gate' | 'pulse' | 'vault';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [user, setUser] = useState<Profile | null>(null);
  const [auditScore, setAuditScore] = useState(0);

  // Monitoraggio Sessione Supabase
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) fetchProfile(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) fetchProfile(session.user.id);
      else setUser(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (!error && data) {
      setUser(data);
      // Re-indirizzamento basato sul Tier
      if (data.tier === 'pulse') setView('pulse');
      else if (data.tier === 'sync' || data.tier === 'architect') setView('vault');
    }
  };

  const startQuiz = () => setView('quiz');
  const openGate = () => setView('gate');
  const finishQuiz = (score: number) => {
    setAuditScore(score);
    setView('audit');
    window.scrollTo(0, 0);
  };
  const startCheckout = () => setView('checkout');
  const startOnboarding = () => setView('onboarding');
  const startSignup = () => setView('signup');
  const finishSignup = () => setView('login');
  const enterEmpire = () => setView('vault');

  return (
    <div className="min-h-screen bg-radiant-bg text-radiant-text selection:bg-radiant-champagne selection:text-white transition-colors duration-1000">
      {view === 'landing' && <Navbar onAccessClick={openGate} />}
      <ProgressBar currentStep={view} />
      <LuminelAssistant />

      {view === 'landing' && (
        <div className="animate-in fade-in duration-1000">
          <Hero onStart={startQuiz} />
          
          <div id="philosophy">
            <Philosophy />
          </div>
          
          <Contrast />
          <AI />
          <HiddenTax />
          
          <AboutMe />

          <Manifesto />
          
          <Ecosystem />
          <Studio />
          
          <Quote />
          
          <section id="audit-start" className="py-80 px-6 bg-radiant-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FAF3E0_0%,_transparent_70%)] opacity-40"></div>
            <div className="max-w-6xl mx-auto text-center space-y-16 relative z-10">
               <h2 className="text-7xl md:text-[9rem] font-serif tracking-tighter italic text-radiant-text leading-tight">
                 Riprendi il <br/> <span className="gold-gradient-text font-light">Comando.</span>
               </h2>
               <p className="text-2xl font-light text-radiant-muted italic max-w-2xl mx-auto tracking-wide leading-relaxed">
                 Smetti di essere un dato passivo. Diventa l'Architetto del tuo Silenzio in un mondo di rumore.
               </p>
               <button 
                 onClick={startQuiz}
                 className="interactive group relative px-20 py-10 bg-radiant-text text-white rounded-full text-[11px] tracking-[0.5em] uppercase hover:bg-radiant-gold transition-all font-bold shadow-2xl overflow-hidden"
               >
                 <span className="relative z-10">Inizia Audit d'Élite</span>
               </button>
            </div>
          </section>

          <div id="laws">
            <Laws />
          </div>
          
          <div id="journey">
            <Journey />
          </div>
          
          <div id="pricing">
            <Pricing onSelect={startCheckout} />
          </div>
          
          <Footer />
        </div>
      )}

      {view === 'gate' && (
        <MembershipGate 
          onLogin={() => setView('login')} 
          onSignup={() => setView('signup')} 
        />
      )}

      {view === 'pulse' && (
        <PulseLounge 
          onBack={() => setView('landing')} 
          onUpgrade={() => {
            setView('landing');
            setTimeout(() => {
              const el = document.getElementById('pricing');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                });
              }
            }, 100);
          }}
        />
      )}

      {view === 'vault' && (
        <TheVault onBack={() => setView('landing')} />
      )}

      {view === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center p-6 bg-radiant-bg">
          <div className="max-w-4xl w-full">
            <Quiz onComplete={finishQuiz} />
          </div>
        </div>
      )}

      {view === 'audit' && (
        <AuditResult score={auditScore} onProceed={startCheckout} />
      )}

      {view === 'checkout' && (
        <SovereignCheckout onPaymentSuccess={startOnboarding} />
      )}

      {view === 'onboarding' && (
        <ArchitectOnboarding onComplete={startSignup} />
      )}

      {view === 'signup' && (
        <SovereignSignup onComplete={finishSignup} />
      )}

      {view === 'login' && (
        <SovereignLogin onLogin={enterEmpire} />
      )}

      {view === 'dashboard' && (
        <SovereignDashboard user={user} />
      )}
    </div>
  );
};

export default App;
