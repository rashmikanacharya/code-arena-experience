
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="w-full py-4 px-6 md:px-12 bg-codeDark border-b border-muted flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center gap-2" 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Code className="text-codeBlue h-6 w-6" />
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">
          C<span className="blue-o">O</span>DE CLASH
        </h1>
      </motion.div>
      
      <div className="flex items-center gap-6">
        <motion.span 
          className="hidden md:block text-muted-foreground hover:text-codeWhite cursor-pointer transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Us
        </motion.span>
        
        <motion.span 
          className="hidden md:block text-muted-foreground hover:text-codeWhite cursor-pointer transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4 text-codeBlue" />
            Leaderboard
          </div>
        </motion.span>
        
        <motion.button
          className="bg-codeBlue text-white px-5 py-2 rounded-md font-semibold transition-all"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#5DA0E6",
            boxShadow: "0 0 15px rgba(77, 144, 214, 0.5)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
