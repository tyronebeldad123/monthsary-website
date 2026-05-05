// src/components/Footer.jsx - Simplified version
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 z-10 border-t border-white/5 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="text-4xl">💖</div>
          <p className="text-pink-300/60 text-sm">
            Happy 1st Monthsary, my baby! 🎉  
            This is just the beginning of our forever. Every day with you is a gift I'll never take for granted.
          </p>
          <p className="text-pink-400/40 text-xs">
            Made with all my love • Forever yours
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;