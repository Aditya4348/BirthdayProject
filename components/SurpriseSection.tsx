
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SURPRISE_ITEMS } from '../constants';
import { SurpriseItem } from '../types';

interface Props {
  onComplete: () => void;
}

const SurpriseSection: React.FC<Props> = ({ onComplete }) => {
  const [poppedIds, setPoppedIds] = useState<number[]>([]);
  const totalBalloons = SURPRISE_ITEMS.length;

  const handlePop = (id: number) => {
    if (!poppedIds.includes(id)) {
      setPoppedIds(prev => [...prev, id]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-sky-50 py-20 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="z-10 text-center mb-12 px-6">
        <h2 className="text-3xl font-cursive text-sky-800 mb-2">Pecahkan Balon Kejutannya!</h2>
        <p className="text-sky-400 text-sm font-light tracking-widest uppercase">
          {poppedIds.length} dari {totalBalloons} Rahasia Terbuka
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-8 max-w-5xl w-full">
        {SURPRISE_ITEMS.map((item, i) => (
          <BalloonCard 
            key={item.id} 
            item={item} 
            isPopped={poppedIds.includes(item.id)} 
            onPop={() => handlePop(item.id)}
            index={i}
          />
        ))}
      </div>

      <AnimatePresence>
        {poppedIds.length === totalBalloons && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-16 z-20"
          >
            <button
              onClick={onComplete}
              className="px-10 py-4 bg-amber-500 text-white rounded-full font-bold shadow-xl shadow-amber-200 hover:bg-amber-600 transition-all hover:scale-105 active:scale-95"
            >
              Lihat Penutup Sempurna ✨
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-200/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-sky-200/30 blur-3xl rounded-full"></div>
      </div>
    </motion.div>
  );
};

const BalloonCard: React.FC<{ 
  item: SurpriseItem; 
  isPopped: boolean; 
  onPop: () => void;
  index: number;
}> = ({ item, isPopped, onPop, index }) => {
  return (
    <div className="relative h-[280px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isPopped ? (
          <motion.div
            key="balloon"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -10, 0]
            }}
            exit={{ 
              scale: 1.5, 
              opacity: 0,
              transition: { duration: 0.2 }
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
              scale: { duration: 0.5, delay: index * 0.1 }
            }}
            whileHover={{ scale: 1.1 }}
            onClick={onPop}
            className={`w-28 h-36 rounded-full ${item.color} cursor-pointer relative shadow-lg flex items-center justify-center group`}
          >
            <div className="absolute -bottom-2 w-0.5 h-10 bg-slate-300 left-1/2 -translate-x-1/2"></div>
            <span className="text-white text-xs font-bold opacity-40 group-hover:opacity-80 transition-opacity">TAP!</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="w-full h-full bg-white rounded-2xl p-3 shadow-xl flex flex-col items-center border border-sky-100"
          >
            <div className="w-full h-40 rounded-xl overflow-hidden mb-3">
              <img 
                src={item.image} 
                alt="Surprise" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-600 text-center text-sm font-medium leading-tight px-2">
              {item.text}
            </p>
            <div className="mt-auto pb-1">
              <span className="text-amber-400 text-lg">✨</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SurpriseSection;
