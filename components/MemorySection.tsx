
import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';

interface Props {
  onComplete: () => void;
}

const MemorySection: React.FC<Props> = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 flex flex-col items-center"
    >
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-cursive text-slate-700 mb-2">Beberapa Kenangan...</h2>
        <div className="w-12 h-1 bg-amber-200 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
        {MEMORIES.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-4 shadow-xl border border-slate-100 transform"
          >
            <div className="aspect-[3/4] overflow-hidden mb-4 relative group">
              <img 
                src={memory.image} 
                alt={memory.caption}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 text-xs font-mono">
                {memory.year}
              </div>
            </div>
            <p className="text-sm font-light text-slate-600 leading-relaxed italic">
              "{memory.caption}"
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="mt-20 px-8 py-3 bg-slate-800 text-white rounded-full text-sm tracking-widest uppercase hover:bg-slate-700 transition-colors"
      >
        Lanjut Baca
      </motion.button>
    </motion.div>
  );
};

export default MemorySection;
