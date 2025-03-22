
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Code, Trophy } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BlueGlowSpan = ({ children }: { children: React.ReactNode }) => (
  <span className="text-codeBlue relative inline-block">
    {children}
    <span className="absolute inset-0 blur-sm opacity-70 -z-10 bg-codeBlue rounded-full"></span>
  </span>
);

const IconAnimation = () => {
  return (
    <motion.div 
      className="relative w-40 h-40 md:w-60 md:h-60"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <img
          src="/lovable-uploads/fbb00a01-20ad-4e4e-a882-ad8333bf3edf.png"
          alt="Code Clash Battle"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-codeDark opacity-80 z-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMjRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMzBoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgMzZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgNDJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHptLTYgNDhoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAtNmgtMlYwaDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 z-10 w-full max-w-7xl"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={ref}
      >
        <motion.div 
          className="flex-1 max-w-2xl text-center md:text-left"
          variants={item}
        >
          <motion.div className="mb-3 inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-opacity-20 bg-codeBlue text-codeBlue border border-codeBlue/30">
            <Trophy className="w-3 h-3 mr-1" /> Competitive coding platform
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={item}
          >
            <BlueGlowSpan>Ignite</BlueGlowSpan> your code,<br />
            <span className="block mt-2">conquer the <BlueGlowSpan>arena</BlueGlowSpan></span>
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground text-lg mb-8"
            variants={item}
          >
            Challenge yourself and others in real-time coding battles.
            Improve your skills, rise up the ranks, and become a coding legend.
          </motion.p>
          
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.button
              className="px-8 py-3 bg-codeBlue rounded-md font-bold text-white flex items-center space-x-2 box-glow"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(77, 144, 214, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Get Started</span>
              <Flame className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          variants={item}
        >
          <IconAnimation />
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div 
          className="w-1 h-8 bg-muted-foreground/30 rounded-full overflow-hidden"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-full bg-codeBlue"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
