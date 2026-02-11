
import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  currentStep: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (currentStep !== 'landing') return;
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep]);

  const getProgress = () => {
    if (currentStep === 'landing') return scroll;
    if (currentStep === 'quiz') return 20;
    if (currentStep === 'audit') return 40;
    if (currentStep === 'checkout') return 60;
    if (currentStep === 'onboarding') return 80;
    if (currentStep === 'signup' || currentStep === 'login') return 95;
    if (currentStep === 'dashboard') return 100;
    return 0;
  };

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-radiant-champagne/10 overflow-hidden">
      <div 
        className="holographic-bar h-full transition-all duration-500 ease-out" 
        style={{ width: `${getProgress()}%` }}
      />
      <div className="absolute top-4 right-6 text-[9px] font-mono opacity-60 uppercase tracking-[0.4em] text-radiant-gold font-bold bg-white/80 px-4 py-2 rounded-full backdrop-blur-md border border-radiant-champagne/10 shadow-sm">
        Reset Status: {currentStep.toUpperCase()} • {Math.round(getProgress())}%
      </div>
    </div>
  );
};

export default ProgressBar;
