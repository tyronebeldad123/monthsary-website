// src/components/Landing.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          className="text-7xl mb-6"
        >
          🌸
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-4 bg-gradient-to-r from-pink-300 to-rose-200 bg-clip-text text-transparent">
          Happy Monthsary, My Baby
        </h1>
        
        <p className="text-lg md:text-xl text-pink-100/80 mb-8 font-light">
          Every moment with you feels like a beautiful dream.  
          Here's to us, and all the memories we've created together. 💕
        </p>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-pink-300 text-sm"
        >
          scroll down ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Landing;