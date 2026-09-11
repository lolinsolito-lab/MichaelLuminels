import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import Magnetic from '@/components/Magnetic';

interface HeroProps {
  onStart: () => void;
}

// ─── TERMINAL STRINGS ──────────────────────────────────────────────────────────
const TERMINAL_LINES = [
  'SYSTEM_STATUS: SECURE_v2.1',
  'NODE_01: ONLINE // LATENCY: 0.4ms',
  'METRIC_FLOW: ACTIVE // PKT: 99.98%',
  'SOVEREIGN_PROTOCOL: ENGAGED',
  'DATA_SHIELD: OPERATIONAL',
  'AUDIT_ENGINE: INITIALIZED',
  'THREAT_VECTOR: NULL // CLEARED',
  'ARCHITECT_MODE: ACTIVE',
  'ENCRYPTION: AES-256 // VERIFIED',
  'INTEGRITY_CHECK: PASS ✓',
];

const TerminalOverlay = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % TERMINAL_LINES.length);
      setLines(prev => [...prev.slice(-4), TERMINAL_LINES[current]]);
    }, 1200);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute top-8 left-8 z-20 font-mono text-[9px] tracking-[0.18em] leading-loose text-radiant-gold/30 pointer-events-none select-none hidden md:block">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: (i + 1) / lines.length * 0.6, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-radiant-gold/20 mr-2">&gt;</span>{line}
        </motion.div>
      ))}
    </div>
  );
};

// ─── PERSPECTIVE GRID ─────────────────────────────────────────────────────────
const PerspectiveGrid = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const cols = 12;
  const rows = 8;
  const tiltX = (mouseY - 0.5) * 12;
  const tiltY = (mouseX - 0.5) * -12;

  return (
    <motion.div
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      animate={{ rotateX: tiltX, rotateY: tiltY }}
      transition={{ type: 'spring', stiffness: 60, damping: 30 }}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      <svg
        className="w-full h-full opacity-[0.04]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {Array.from({ length: cols + 1 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * (1200 / cols)}
            y1={0}
            x2={i * (1200 / cols)}
            y2={800}
            stroke="#D4AF37"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: rows + 1 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * (800 / rows)}
            x2={1200}
            y2={i * (800 / rows)}
            stroke="#D4AF37"
            strokeWidth="0.5"
          />
        ))}
        {/* Convergence point perspective lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`p${i}`}
            x1={600}
            y1={400}
            x2={i * 170}
            y2={0}
            stroke="#D4AF37"
            strokeWidth="0.3"
            opacity="0.5"
          />
        ))}
      </svg>
    </motion.div>
  );
};

// ─── PARTICLE CANVAS ──────────────────────────────────────────────────────────
const ParticleCanvas = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    mousePosRef.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.2 + 0.4,
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let raf: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mousePosRef.current.x * width;
      const my = mousePosRef.current.y * height;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 220) { p.x -= dx * 0.004; p.y -= dy * 0.004; }
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212,175,55,0.55)';
        ctx.fill();
      });

      ctx.strokeStyle = 'rgba(212,175,55,0.07)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(render);
    };
    render();
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(raf); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-70" />;
};

// ─── STAGGER VARIANTS ─────────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } }
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]">
      {/* Radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,175,55,0.07)_0%,transparent_65%)] z-[1] pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0B0C] to-transparent z-[5] pointer-events-none" />

      {/* Live Particle Canvas */}
      <ParticleCanvas mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Perspective Grid with mouse parallax */}
      <PerspectiveGrid mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Terminal Overlay - top left */}
      <TerminalOverlay />

      {/* Metric badge - top right */}
      <div className="absolute top-8 right-8 z-20 font-mono text-[8px] tracking-[0.15em] text-radiant-gold/20 pointer-events-none hidden md:flex flex-col items-end gap-1 select-none">
        <div><span className="mr-2 text-radiant-gold/10">◆</span>PROTOCOL_ENGINE: v2.1.0</div>
        <div><span className="mr-2 text-radiant-gold/10">◆</span>NODES: 3/3 ACTIVE</div>
        <motion.div animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ repeat: Infinity, duration: 2.2 }}>
          <span className="mr-2 text-radiant-gold/30">●</span>LIVE
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-12">

          {/* BADGE */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-4 px-6 py-2.5 border border-radiant-gold/20 rounded-full bg-white/[0.03] backdrop-blur-3xl shadow-[0_0_40px_rgba(212,175,55,0.06)] relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-radiant-gold/5 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              />
              <Logo className="w-5 h-5" variant="gold" />
              <span className="text-[10px] font-mono tracking-[0.45em] text-white/60 uppercase font-bold italic relative z-10">
                Architettura di Alto Profilo&nbsp;&nbsp;•&nbsp;&nbsp;MICHAEL LUMINEL'S
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-radiant-gold animate-pulse" />
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.div variants={item} className="space-y-6">
            <h1 className="text-[clamp(4rem,11vw,11rem)] font-serif text-white font-light leading-[0.82] tracking-tight">
              L'evoluzione <br />
              non fa{' '}
              <span className="italic font-light relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#C5A059]">
                  rumore.
                </span>
                {/* Glow halo behind "rumore" */}
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#FFF1C5]/10 to-[#C5A059]/20 pointer-events-none -z-10" />
              </span>
            </h1>
          </motion.div>

          {/* SUBHEADLINE */}
          <motion.div variants={item}>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-white/45 leading-relaxed tracking-wide font-sans italic">
              Gestiamo la tua struttura con lo stesso rigore di un'indagine forense.{' '}
              <br className="hidden md:block" />
              Per chi ha smesso di reagire ed è pronto a esercitare un dominio sistemico assoluto.
            </p>
          </motion.div>

          {/* SEPARATOR LINE */}
          <motion.div variants={item} className="flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-radiant-gold/30" />
            <span className="text-[8px] font-mono tracking-[0.5em] text-radiant-gold/30 uppercase">Protocollo Luminel</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-radiant-gold/30" />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">

            {/* PRIMARY: Magnetic + Glow */}
            <Magnetic>
              <div
                className="relative"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                {/* Glow halo — animates on hover */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-radiant-gold/20 blur-xl pointer-events-none"
                  animate={{ opacity: isButtonHovered ? 1 : 0, scale: isButtonHovered ? 1.2 : 0.8 }}
                  transition={{ duration: 0.35 }}
                />
                <button
                  onClick={onStart}
                  className="interactive group relative px-14 py-9 bg-[#0f0f0f] text-white rounded-full flex items-center gap-6 overflow-hidden border border-white/5 hover:border-radiant-gold/60 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  {/* shimmer sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-radiant-gold/15 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.8s_infinite]" />
                  <span className="text-[11px] tracking-[0.55em] uppercase font-bold relative z-10 group-hover:text-radiant-champagne transition-colors duration-500">
                    Richiedi l'Audit d'Élite
                  </span>
                  <ArrowRight size={14} className="relative z-10 text-white/50 group-hover:text-radiant-champagne group-hover:translate-x-1.5 transition-all duration-500" />
                </button>
              </div>
            </Magnetic>

            {/* SECONDARY */}
            <Magnetic>
              <button className="interactive px-14 py-9 text-white/70 text-[11px] tracking-[0.5em] uppercase border border-white/10 rounded-full hover:bg-white/5 hover:border-white/30 hover:text-white transition-all duration-500 font-bold backdrop-blur-xl">
                The Architect's Journal
              </button>
            </Magnetic>
          </motion.div>

          {/* BOTTOM TRUST STRIP */}
          <motion.div variants={item} className="flex items-center justify-center gap-8 pt-2">
            {['Il Protocollo Luminel', 'The Sovereign Board', 'Lifestyle Architecture'].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-radiant-gold/40" />
                <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-white/20">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <div className="w-px h-20 bg-gradient-to-b from-radiant-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
