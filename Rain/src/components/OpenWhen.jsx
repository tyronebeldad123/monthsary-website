// src/components/OpenWhen.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { id: 1, title: "Open when you're missing me 💭", content: "Even when we're apart, you're always in my heart. Remember all the laughs we shared and know that I'm counting down the moments until we're together again. 💕" },
  { id: 2, title: "Open when you need a smile 😊", content: "Think of the time we tried to cook together and set off the smoke alarm. We ended up ordering pizza and couldn't stop giggling. That's us - chaotic and perfect. 🍕" },
  { id: 3, title: "Open when you feel stressed 📚", content: "Take a deep breath, my love. You've got this. And remember, no matter what happens, I'm always in your corner cheering you on. Now go be amazing! ✨" },
  { id: 4, title: "Open when you can't sleep 🌙", content: "Imagine us lying under the stars like that one night. Feel the gentle breeze, hear the quiet. You're safe, you're loved, and I'm sending you the warmest hug across the distance. 🫂" }
];

const OpenWhen = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-pink-200 mb-2">
            Open When... 💌
          </h2>
          <p className="text-pink-300/70">A little something for every feeling</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: msg.id * 0.1 }}
            >
              <button
                onClick={() => setOpenCard(openCard === msg.id ? null : msg.id)}
                className="w-full glass-card p-6 text-left hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl text-pink-200">{msg.title}</span>
                  <span className="text-2xl text-pink-400">
                    {openCard === msg.id ? '📖' : '💌'}
                  </span>
                </div>
                
                <AnimatePresence>
                  {openCard === msg.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">{msg.content}</p>
                        <div className="mt-3 text-pink-400 text-sm">with love, always ❤️</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenWhen;