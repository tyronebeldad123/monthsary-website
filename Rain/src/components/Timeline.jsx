// src/components/Timeline.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const memories = [
  {
    id: 1,
    title: "Our First Date 💕",
    date: "March 13, 2026",
    description: "Our first date at SM Seaside! We watched 'The Loved One' together. After the movie, we had dinner at Locas Cafe and walked hand in hand at the Skypark at night. The city lights were shining, but you were the brightest star I've ever seen. That night, I knew my life would never be the same. ✨",
    emoji: "🎬",
    imageBg: "bg-gradient-to-br from-purple-400/20 to-pink-400/20"
  },
  {
    id: 2,
    title: "First Time at Home 🏠",
    date: "March 15, 2026",
    description: "You came over to my house for the first time! I was so nervous but you made everything feel so natural. We ate jollibee together, watched movies in my room, and you met my family. They absolutely love you! You fell asleep on my shoulder while listening to music, and I realized that this is what home feels like - not a place, but being with you, baby. 🥰",
    emoji: "🏡",
    imageBg: "bg-gradient-to-br from-amber-400/20 to-orange-400/20"
  },
  {
    id: 3,
    title: "The Day We Became Official 💍",
    date: "April 9, 2026",
    description: "The most unforgettable night! We went to Sip Cafe for dinner, then walked around IT Park. Under the twinkling lights (Well inside the mall lol), I finally asked you to be my girlfriend. My heart was racing so fast! After you said yes (best moment of my life 💖), we celebrated with tea and chocolate drinks at Bo's Coffee. That tea will forever taste like happiness to me. This is the day my whole world changed for the better, baby. 🌹",
    emoji: "💑",
    imageBg: "bg-gradient-to-br from-rose-400/20 to-pink-400/20"
  },
  {
    id: 4,
    title: "The Little Things 🎁",
    date: "Every day",
    description: "The way you hold my hand, your random 'I miss you' texts, how you remember the smallest details about me, the memes you send that remind you of us, your laugh when I tell a bad joke, how you look at me like I'm the only person in the room. It's not about grand gestures - it's about all these tiny moments that make loving you, baby, the easiest thing I've ever done. 💝",
    emoji: "✨",
    imageBg: "bg-gradient-to-br from-yellow-400/20 to-amber-400/20"
  },
  {
    id: 5,
    title: "Looking Forward To... 🌈",
    date: "Our Future",
    description: "More dates, more adventures, more late night talks, more laughs, more hugs, more 'I love you's. Every single day with you, baby, is a blessing, and I can't wait to create thousands more memories together. Thank you for being you, baby. You're my greatest love story, and we're just getting started. Here's to forever with you, my baby. 💖✨",
    emoji: "🌟",
    imageBg: "bg-gradient-to-br from-pink-400/20 to-rose-400/20"
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative py-24 px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-light text-pink-200 mb-3">
          Our Beautiful Journey 💫
        </h2>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
        <p className="text-pink-300/60 text-sm mt-4">Every moment with you is a memory I'll cherish forever</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-pink-500/30 hidden md:block" />
        
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-16 md:mb-24 ${
              index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)] md:text-left'
            }`}
          >
            <motion.div 
              className={`glass-card p-6 ${memory.imageBg} transform transition-all hover:scale-[1.02] duration-300 cursor-pointer`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-6xl mb-3">{memory.emoji}</div>
              <h3 className="text-xl font-semibold text-pink-200 mb-1">{memory.title}</h3>
              <p className="text-sm text-pink-300/70 mb-3">{memory.date}</p>
              <p className="text-gray-300 leading-relaxed">{memory.description}</p>
            </motion.div>
            
            <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-pink-400 shadow-lg shadow-pink-500/50"
              style={{
                left: index % 2 === 0 ? 'calc(50% - 0.5rem)' : 'calc(50% - 0.5rem)'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;