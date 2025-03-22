
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="py-12 px-6 bg-codeBlack border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div 
            className="flex items-center gap-2 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="text-codeBlue h-6 w-6" />
            <h2 className="text-xl font-bold tracking-tight">
              C<span className="blue-o">O</span>DE CLASH
            </h2>
          </motion.div>
          
          <div className="flex gap-6">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2023 Code Clash. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ color: "#4D90D6" }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ color: "#4D90D6" }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white transition-colors"
              whileHover={{ color: "#4D90D6" }}
            >
              Contact
            </motion.a>
          </div>
        </div>
        
        <motion.div 
          className="mt-8 text-center text-xs text-gray-500 flex items-center justify-center"
          whileHover={{ color: "#4D90D6" }}
        >
          Made with <Heart size={12} className="mx-1 text-codeBlue" /> for coding enthusiasts
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
