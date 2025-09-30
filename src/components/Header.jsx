import React from 'react';
import { motion } from 'framer-motion'; // 1. Standardized to framer-motion
import { ChevronDown } from 'lucide-react';

// --- ANIMATION VARIANTS for staggered effect ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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


const Header = () => {
  return (
    <header className="relative" id="Header">
      <div
        className='min-h-screen bg-cover bg-center flex items-center justify-center relative'
        style={{ backgroundImage: "url('/header_img.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

        {/* 2. NOTE: Navbar is removed from here. It should be in your main App layout to avoid duplicates. */}

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='relative z-10 text-center text-white px-6'
        >
          <motion.h1
            variants={itemVariants}
            className='text-4xl sm:text-6xl md:text-7xl font-extrabold max-w-5xl mx-auto leading-tight tracking-tight'
          >
            Advancing Technology for Humanity
          </motion.h1>

          {/* 3. Added a descriptive subtitle */}
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
            {/* 4. Enhanced buttons with motion and consistent styling */}
            <motion.a
              href="#About"
              className='border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
            </motion.a>
            <motion.a
              href="#Contact"
              className='bg-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 text-white'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Arrow */}
        <a
          href="#About"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-white hover:text-blue-300 transition"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={36} />
          </motion.div>
        </a>

        {/* Announcement Bar */}
        <div className="absolute bottom-0 w-full bg-blue-700 text-white text-center py-2 z-20">
          📢 <span className='font-semibold'>IEEE PES WEEK 2025:</span> Registrations are now LIVE!{" "}
          <a href="#Register" className="underline font-bold hover:text-yellow-300 transition">
            Click here to join →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;