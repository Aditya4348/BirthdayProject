
import React from 'react';
import { motion } from 'framer-motion';
import { USER_NAME } from '../constants';

const ClosingSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-12 text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <span className="text-5xl md:text-7xl block mb-6">🎂</span>
        <h1 className="text-4xl md:text-6xl font-cursive mb-4 text-amber-200">
          Happy Birthday, {USER_NAME}!
        </h1>
        <p className="text-slate-400 font-light tracking-widest uppercase text-xs md:text-sm mb-12">
          May your year be as wonderful as you are.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-4 z-10"
      >
        <div className="w-16 h-[1px] bg-slate-700 mx-auto"></div>
        <p className="text-slate-500 italic text-sm">
          "The best is yet to come."
        </p>
        <div className="mt-12">
          <button 
            onClick={() => window.location.reload()}
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            Putar Sekali Lagi?
          </button>
        </div>
      </motion.div>

      {/* Background soft glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Subtle random sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%` 
          }}
        />
      ))}
    </motion.div>
  );
};

export default ClosingSection;
