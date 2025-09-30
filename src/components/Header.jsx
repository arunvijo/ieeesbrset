import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 }, // Added delay for bg animation
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// New variant for the letter-by-letter title animation
const title = "Advancing Technology for Humanity";
const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
    }),
};

const letterVariant = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
    },
};


const Header = () => {
  // 1. NEW: State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user scrolls more than 50px
      setScrolled(window.scrollY > 50);
    };
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative" id="Header">
      <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
        {/* Background Image with Zoom-out Animation */}
        <motion.div
            className='absolute inset-0 bg-cover bg-center'
            style={{ backgroundImage: "url('/header_img.jpeg')" }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='relative z-10 text-center text-white px-6'
        >
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className='text-4xl sm:text-6xl md:text-7xl font-extrabold max-w-5xl mx-auto leading-tight tracking-tight drop-shadow-md'
          >
            {/* 2. NEW: Letter-by-letter animation */}
            {title.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariant}>
                    {letter}
                </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Welcome to the IEEE Student Branch at Rajagiri School of Engineering & Technology.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className='mt-10 flex justify-center flex-wrap gap-4'
          >
            <motion.a href="#About" className='border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Know More
            </motion.a>
            <motion.a href="#Contact" className='bg-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 text-white' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Arrow */}
        <a href="#About" className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-white hover:text-blue-300 transition">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={36} />
          </motion.div>
        </a>

        {/* 3. NEW: Conditionally rendered Announcement Bar */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              className="absolute bottom-0 w-full bg-blue-700 text-white text-center py-2 z-20"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              📢 <span className='font-semibold'>IEEE PES WEEK 2025:</span> Registrations are now LIVE!{" "}
              <a href="#Register" className="underline font-bold hover:text-yellow-300 transition">
                Click here to join →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;