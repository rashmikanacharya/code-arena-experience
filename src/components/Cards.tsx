
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, Swords, User, Users, Trophy, ArrowRight, Cpu } from 'lucide-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  color: string;
  delay: number;
}

const Card: React.FC<CardProps> = ({ title, icon, description, benefits, color, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      className="card-3d w-full max-w-sm mx-auto"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: isFlipped ? 1 : 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div 
        className={`card-content ${isFlipped ? 'flipped' : ''} cursor-pointer h-96 w-full`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <motion.div 
          className="card-face flex flex-col items-center justify-center rounded-xl p-8 bg-codeGray border border-gray-800"
          style={{ boxShadow: `0 10px 30px -15px ${color}30` }}
        >
          <motion.div 
            className={`w-20 h-20 rounded-full flex items-center justify-center bg-opacity-10 mb-6`}
            style={{ backgroundColor: `${color}20` }}
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                `0 0 0 rgba(${color}, 0.5)`,
                `0 0 20px rgba(${color}, 0.2)`,
                `0 0 0 rgba(${color}, 0.5)`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ color }}
              className="text-4xl"
            >
              {icon}
            </motion.div>
          </motion.div>
          
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground text-center">{description}</p>
          
          <motion.div 
            className="absolute bottom-6 right-6"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="text-muted-foreground" />
          </motion.div>
        </motion.div>

        {/* Back Face */}
        <motion.div 
          className="card-face card-back rounded-xl p-8 bg-codeGray border border-gray-800"
          style={{ boxShadow: `0 10px 30px -15px ${color}30` }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color }}>
            {title} Features
          </h2>
          
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-2 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.span 
                  className="mt-1 text-codeBlue flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Trophy className="h-4 w-4" />
                </motion.span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            className="absolute bottom-6 right-6"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-codeDark to-codeBlack opacity-80"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="mb-3 inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full bg-opacity-20 bg-codeBlue text-codeBlue border border-codeBlue/30">
            <Swords className="w-3 h-3 mr-1" /> Choose your path
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Battle Modes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your preferred mode and start your coding journey. 
            Compete against yourself or challenge other coders in real-time battles.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <Card 
            title="Solo Mode"
            icon={<User />}
            description="Challenge yourself with coding problems at your own pace."
            benefits={[
              "Practice at your own pace",
              "Track your progress over time",
              "Access to hundreds of problems",
              "Detailed solution explanations",
              "Build your coding portfolio"
            ]}
            color="#4D90D6"
            delay={0.2}
          />
          
          <Card 
            title="1v1 Battle"
            icon={<Swords />}
            description="Go head-to-head against another coder in real-time."
            benefits={[
              "Real-time competitive coding",
              "Live opponent matching",
              "Time-pressure challenges",
              "Rise through global rankings",
              "Earn badges and achievements"
            ]}
            color="#FF5E5B"
            delay={0.4}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
