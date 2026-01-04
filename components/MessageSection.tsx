
import React from 'react';
import { motion } from 'framer-motion';
import { MAIN_MESSAGE, USER_NAME } from '../constants';

interface Props {
  onComplete: () => void;
}

const MessageSection: React.FC<Props> = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#faf7f2]"
    >
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 md:p-12 shadow-2xl relative"
        >
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-amber-400"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-amber-400"></div>

          <h3 className="text-2xl font-cursive text-amber-700 mb-6 underline decoration-amber-200 underline-offset-8">
            Sebuah Pesan Tulus...
          </h3>

          <div className="text-slate-700 leading-relaxed whitespace-pre-line text-sm md:text-base font-light tracking-wide italic">
            {MAIN_MESSAGE}
          </div>

          <div className="mt-8 text-right font-cursive text-xl text-slate-500">
            — Sahabatmu
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <button
            onClick={onComplete}
            className="group flex items-center mx-auto space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
          >
            <span className="text-sm font-semibold tracking-widest uppercase">Lihat Kejutan Terakhir</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MessageSection;
