
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }
    });
  }, [controls]);

  return (
    <motion.div 
      className="min-h-screen bg-codeDark text-white overflow-hidden animated-bg"
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
    >
      <Header />
      <Hero />
      <Cards />
      <Footer />
      
      {/* Enhanced Floating Elements for Visual Interest */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-codeBlue opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-codeBlue opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-codeBlue opacity-3 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 20, 0],
            opacity: [0.02, 0.06, 0.02]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />
        
        {/* Code particles effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-codeBlue opacity-20 text-xs"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0
              }}
              animate={{
                y: [null, Math.random() * -window.innerHeight],
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              {Math.random() > 0.5 ? "{ }" : "</>"}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
