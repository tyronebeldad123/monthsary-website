// src/components/MusicPlayer.jsx (Enhanced version)
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if user has interacted before
    const hasInteracted = localStorage.getItem('musicInteracted');
    if (!hasInteracted) {
      // Show tooltip to prompt user
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
    localStorage.setItem('musicInteracted', 'true');
    setShowTooltip(false);
  };

  const hidePlayer = () => {
    setIsVisible(false);
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-14 right-0 bg-pink-500/90 text-white text-xs py-2 px-3 rounded-xl whitespace-nowrap"
          >
            Click to play💖
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-pink-500/90 rotate-45" />
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="glass-card p-2 backdrop-blur-xl bg-white/15 border border-pink-400/30 rounded-full shadow-2xl"
        >
          <div className="flex items-center gap-2">
            {/* Animated icon */}
            <div className={`pl-2 ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
              {isPlaying ? '💿' : '🎵'}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            {/* Song title */}
            <div className="text-xs text-pink-200 pr-1 hidden sm:block">
              {isPlaying ? 'Now playing...' : ''}
            </div>

            {/* Hide Button */}
            <button
              onClick={hidePlayer}
              className="text-pink-300/50 hover:text-pink-300 text-sm transition px-2"
              title="Hide player"
            >
              ✕
            </button>
          </div>
        </motion.div>

        <audio
          ref={audioRef}
          src="/music/our-song.mp3"
          loop
          preload="auto"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicPlayer;