
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const LuminelAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-12 right-12 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-24 right-0 w-[400px] h-[550px] glass-pro rounded-2xl shadow-3xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header Assistant */}
            <div className="p-8 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                  <Sparkles size={18} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-serif italic text-white">Luminel AI</h4>
                  <p className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Digital Architect Twin</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors p-2">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-8 overflow-y-auto space-y-8 font-sans">
              <div className="bg-white/5 p-6 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-sm text-white/60 leading-relaxed italic">
                  "Salute, Sovrano. Sono qui per analizzare i tuoi flussi di attenzione. Come posso ottimizzare la tua architettura oggi?"
                </p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-8 border-t border-white/5 bg-white/5">
              <div className="relative">
                <input 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Analizza saturazione..."
                  className="w-full bg-onyx-bg/50 border border-white/10 rounded-full py-5 px-8 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/30 transition-all pr-16"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/20 hover:text-white transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="interactive w-20 h-20 bg-white text-black rounded-full flex items-center justify-center shadow-beacon shadow-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default LuminelAssistant;
