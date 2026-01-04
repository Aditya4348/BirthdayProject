
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppSection } from './types';
import OpeningSection from './components/OpeningSection';
import RevealSection from './components/RevealSection';
import MemorySection from './components/MemorySection';
import MessageSection from './components/MessageSection';
import SurpriseSection from './components/SurpriseSection';
import ClosingSection from './components/ClosingSection';
import FloatingDecorations from './components/FloatingDecorations';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.OPENING);

  const nextSection = useCallback((next: AppSection) => {
    setCurrentSection(next);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-slate-800 overflow-hidden relative">
      {/* Background Decorations based on section */}
      {currentSection === AppSection.OPENING && <FloatingDecorations type="flowers" count={10} />}
      {currentSection === AppSection.REVEAL && <FloatingDecorations type="mixed" count={15} />}
      {currentSection === AppSection.MEMORIES && <FloatingDecorations type="flowers" count={8} />}
      {currentSection === AppSection.SURPRISE && <FloatingDecorations type="balloons" count={20} />}
      {currentSection === AppSection.CLOSING && <FloatingDecorations type="stars" count={25} />}

      <AnimatePresence mode="wait">
        {currentSection === AppSection.OPENING && (
          <OpeningSection key="opening" onComplete={() => nextSection(AppSection.REVEAL)} />
        )}
        {currentSection === AppSection.REVEAL && (
          <RevealSection key="reveal" onComplete={() => nextSection(AppSection.MEMORIES)} />
        )}
        {currentSection === AppSection.MEMORIES && (
          <MemorySection key="memories" onComplete={() => nextSection(AppSection.MESSAGE)} />
        )}
        {currentSection === AppSection.MESSAGE && (
          <MessageSection key="message" onComplete={() => nextSection(AppSection.SURPRISE)} />
        )}
        {currentSection === AppSection.SURPRISE && (
          <SurpriseSection key="surprise" onComplete={() => nextSection(AppSection.CLOSING)} />
        )}
        {currentSection === AppSection.CLOSING && (
          <ClosingSection key="closing" />
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-amber-200 transition-all duration-700 ease-in-out z-50" 
           style={{ width: `${(Object.values(AppSection).indexOf(currentSection) + 1) / Object.values(AppSection).length * 100}%` }}>
      </div>
    </div>
  );
};

export default App;
