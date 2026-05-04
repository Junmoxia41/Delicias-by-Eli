import { motion } from 'framer-motion';
import { CakeSlice } from 'lucide-react';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [showText, setShowText] = useState(false);
  const text = "Delicias by Eli";
  
  // Brand Colors
  const colors = ['#F8C8DC', '#D4AF37', '#2E5A2E'];

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 400);
    return () => clearTimeout(timer);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 1
  }));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#F8C8DC_0%,_#FFF9F0_100%)]"
    >
      {/* Monstera Pattern Overlay */}
      <div className="absolute inset-0 bg-monstera-pattern opacity-10 pointer-events-none" />

      {/* Decorative Particles (Confetti) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: ['0vh', '110vh'], 
            x: [`${p.x}vw`, `${p.x + (Math.random() * 6 - 3)}vw`],
            opacity: [0, 1, 0],
            rotate: 360
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: 0,
            top: -20,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.id % 2 === 0 ? '50%' : '2px',
          }}
        />
      ))}

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ 
            scale: [1, 1.25, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="text-bakery-gold drop-shadow-xl mb-6"
        >
          <CakeSlice size={110} strokeWidth={1.2} />
        </motion.div>

        {/* Text Animation */}
        <div className="flex">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 + 0.6, duration: 0.4 }}
              className={`font-script text-5xl md:text-7xl text-bakery-gold ${char === " " ? "mr-4" : ""}`}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
