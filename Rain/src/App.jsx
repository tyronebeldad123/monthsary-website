// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Landing from './components/Landing';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';  // Add this import
import SecretSection from './components/SecretSection';
import OpenWhen from './components/OpenWhen';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1a0b13] z-50">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-6xl"
        >
          💖
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      </motion.div>

      <Landing />
      <Timeline />
      <PhotoGallery />  {/* Add this line */}
      <SecretSection />
      <OpenWhen />
      <Footer />
    </div>
  );
}

export default App;