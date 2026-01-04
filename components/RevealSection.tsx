
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const RevealSection: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHolding) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onComplete();
            return 100;
          }
          return prev + 3; // Sedikit lebih cepat untuk UX yang lebih baik
        });
      }, 30);
    } else {
      interval = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 5 : 0));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHolding, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen px-8 relative touch-none"
    >
      <motion.div
        animate={{ scale: isHolding ? 0.95 : 1 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-2">Today is yours</h2>
        <h1 className="text-4xl md:text-6xl font-cursive text-amber-600">Tahan untuk Membuka</h1>
      </motion.div>

      <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
        {/* SVG Progress Circle - Added pointer-events-none */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-0">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth="6"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            fill="transparent"
            stroke="#d97706"
            strokeWidth="6"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            className="transition-all duration-75"
            strokeLinecap="round"
          />
        </svg>
        
        <button
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onMouseLeave={() => setIsHolding(false)}
          onTouchStart={(e) => {
            e.preventDefault(); // Mencegah scroll saat menahan tombol
            setIsHolding(true);
          }}
          onTouchEnd={() => setIsHolding(false)}
          className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-amber-50 shadow-xl flex items-center justify-center group active:scale-90 transition-transform duration-200 z-10 relative border-2 border-amber-100"
        >
          <span className={`text-5xl transition-all duration-300 ${isHolding ? 'scale-125' : ''}`}>🎁</span>
        </button>
      </div>

      <div className="mt-10 h-6 flex items-center justify-center">
        <p className={`text-slate-400 text-sm transition-all duration-300 ${isHolding ? 'text-amber-600 font-semibold' : 'animate-pulse'}`}>
          {isHolding ? `Membuka... ${Math.round(progress)}%` : 'Tahan tombol hadiahnya'}
        </p>
      </div>
    </motion.div>
  );
};

export default RevealSection;
