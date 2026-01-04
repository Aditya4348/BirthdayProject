
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  emoji: string;
  x: string;
  delay: number;
  duration: number;
  size: number;
}

interface Props {
  type: 'mixed' | 'flowers' | 'balloons' | 'stars';
  count?: number;
}

const FloatingDecorations: React.FC<Props> = ({ type, count = 15 }) => {
  const emojis = useMemo(() => {
    if (type === 'flowers') return ['🌸', '🌷', '🌼', '🌺'];
    if (type === 'balloons') return ['🎈', '✨', '🎈'];
    if (type === 'stars') return ['✨', '⭐', '🌟'];
    return ['🌸', '🎈', '✨', '🍀', '🌷', '🧡'];
  }, [type]);

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
      size: 15 + Math.random() * 25,
    }));
  }, [count, emojis]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '110vh', opacity: 0, x: p.x, rotate: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.5, 0.5, 0],
            rotate: 360,
            x: [p.x, `calc(${p.x} + ${Math.random() > 0.5 ? '50px' : '-50px'})`, p.x]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{ fontSize: p.size }}
          className="absolute"
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingDecorations;
