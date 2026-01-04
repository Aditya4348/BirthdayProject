
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const OpeningSection: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const texts = [
    "Halo...",
    "Ada sesuatu yang ingin kubagikan.",
    "Bisa minta waktumu sebentar?",
    "Ini khusus untukmu."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= texts.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [onComplete, texts.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen px-8 text-center"
    >
      <motion.p
        key={step}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl font-light tracking-wide text-slate-500 italic"
      >
        {texts[step]}
      </motion.p>
    </motion.div>
  );
};

export default OpeningSection;
