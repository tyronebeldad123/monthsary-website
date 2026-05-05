// src/components/SecretSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretSection = () => {
  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === '0509') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const secretMessages = [
    "You make my world brighter just by being in it. ☀️",
    "Every day with you feels like a beautiful adventure. 🗺️",
    "Thank you for loving me in ways I never knew I needed. 💝",
    "You are my favorite notification. 📱",
    "Home isn't a place, it's wherever you are. 🏠"
  ];

  return (
    <section className="relative py-24 px-6 z-10">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <div className="text-5xl mb-4 secret-pulse">🔐</div>
          <h3 className="text-2xl font-light text-pink-200 mb-2">Secret Messages</h3>
          <p className="text-pink-300/60 text-sm mb-6">Enter our special code to unlock 💕</p>

          {!unlocked ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="DDMM"
                maxLength="4"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-2xl tracking-widest text-pink-200 focus:outline-none focus:border-pink-400/50 transition"
                inputMode="numeric"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 pastel-gradient text-[#1a0b13] font-medium rounded-xl hover:opacity-90 transition-opacity"
              >
                Unlock ✨
              </button>
              {error && (
                <p className="text-rose-400 text-sm animate-pulse">Not quite right... try again? 💭</p>
              )}
            </form>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {secretMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <p className="text-pink-100">{msg}</p>
                  </motion.div>
                ))}
                <div className="pt-4 text-pink-300 text-sm">I love you more than words can say. 💖</div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SecretSection;