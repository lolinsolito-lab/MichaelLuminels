
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'white' | 'dark';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'gold', withText = false }) => {
  const colors = {
    gold: "#D4AF37",
    white: "#FFFFFF",
    dark: "#1C1917"
  };

  const currentColor = colors[variant];

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cerchio di Protezione - Ecosistema Sovrano */}
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          stroke={currentColor} 
          strokeWidth="1.5" 
          strokeOpacity="0.15"
        />
        
        {/* Il Prisma (L) - Fondazione Istituzionale */}
        <path 
          d="M38 28V72H72" 
          stroke={currentColor} 
          strokeWidth="3.5" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
        />
        
        {/* La Via (The Way) - Reset Diagonale */}
        <path 
          d="M32 66L68 30" 
          stroke={currentColor} 
          strokeWidth="2" 
          strokeDasharray="5 5"
          strokeOpacity="0.5"
        />

        {/* Punto di Luce - La Sovranità Raggiunta */}
        <circle cx="68" cy="30" r="4.5" fill={currentColor} className="animate-pulse" />
        
        {/* Bagliore Sottostante al punto di luce */}
        <circle cx="68" cy="30" r="12" fill={currentColor} fillOpacity="0.15" />
      </svg>
      
      {withText && (
        <div className="flex flex-col">
          <span className={`text-2xl font-serif tracking-tighter leading-none uppercase ${variant === 'dark' ? 'text-radiant-text' : variant === 'white' ? 'text-white' : 'text-radiant-text'}`}>
            Michael <span className="font-light">Luminel's</span>
          </span>
          <span className={`text-[7px] font-mono uppercase tracking-[0.6em] opacity-40 font-bold mt-1 ${variant === 'white' ? 'text-white/60' : 'text-radiant-gold'}`}>
            The Sovereign Protocol
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
