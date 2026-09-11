import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import Magnetic from '@/components/Magnetic';

interface HeroProps {
  onStart: () => void;
}

// Canvas Particellare Leggero ed Etereo
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    let particles: {x: number, y: number, vx: number, vy: number, size: number}[] = [];
    const numParticles = window.innerWidth < 768 ? 30 : 60;
    
    for(let i=0; i<numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5
      });
    }

    let mouseX = width/2;
    let mouseY = height/2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.5)'; // Radiant Gold

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // Morbido effetto di attrazione/repulsione
        if (dist < 250) {
          p.x -= dx * 0.005;
          p.y -= dy * 0.005;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } }
};

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
      {/* Sfondo Dinamico Deep-Light: Gradiente Radiale Sofisticato */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] z-[1]"></div>
      
      {/* Canvas Particellare */}
      <ParticleCanvas />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* LOGO BADGE */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-radiant-champagne/20 rounded-full bg-white/5 backdrop-blur-3xl shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <Logo className="w-5 h-5" variant="gold" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-white/70 uppercase font-bold italic">
                L'Upgrade Invisibile • Luminel Way
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-7xl md:text-[10rem] font-serif text-white font-light leading-[0.85] tracking-tight">
              L’evoluzione <br /> 
              non fa <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#C5A059] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">rumore.</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl font-light text-white/50 leading-relaxed tracking-wide font-sans italic opacity-90">
              Sincronizza la tua quotidianità con la versione più chiara di te stesso. <br className="hidden md:block" />
              Un'architettura fluida per chi ha smesso di reagire e ha iniziato a esistere.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-16">
            <Magnetic>
              <button 
                onClick={onStart}
                className="interactive group relative px-16 py-10 bg-[#151515] text-white rounded-full transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_rgba(212,175,55,0.2)] border border-white/5 hover:border-radiant-gold/50 flex items-center gap-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-radiant-gold/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
                <span className="text-[11px] tracking-[0.5em] uppercase font-bold relative z-10 text-white group-hover:text-radiant-champagne transition-colors">Inizia Audit</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 text-white/70 group-hover:text-radiant-champagne transition-all duration-500 relative z-10" />
              </button>
            </Magnetic>

            <Magnetic>
              <button className="interactive px-16 py-10 text-white text-[11px] tracking-[0.5em] uppercase border border-white/20 rounded-full hover:bg-white transition-colors hover:text-black font-bold backdrop-blur-3xl shadow-pearl-skeuo">
                The Architect's Journal
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Linea Decorativa Inferiore */}
      <motion.div 
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <div className="w-px h-24 bg-gradient-to-b from-radiant-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
