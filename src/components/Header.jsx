import React from 'react';
import Navbar from './Navbar';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react'; // ✅ lightweight icon (optional)

const Header = () => {
  return (
    <div className="relative" id="Header">
      <div
        className='min-h-screen bg-cover bg-center flex items-center justify-center relative'
        style={{ backgroundImage: "url('/header_img.jpeg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='relative z-10 text-center text-white px-6 md:px-20 lg:px-32'
        >
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight'>
            INSPIRE. INNOVATE. LEARN.
          </h1>

          <div className='mt-10 flex justify-center flex-wrap gap-6'>
            <a
              href="#About"
              className='border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition'
            >
              Know More
            </a>
            <a
              href="#Contact"
              className='bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition text-white'
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* ⬇️ Animated Scroll Arrow */}
        <a
          href="#About"
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 text-white hover:text-blue-300 transition"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center"
          >
            <ChevronDown size={36} className="mb-1" />
            <span className="text-sm uppercase tracking-wider">Scroll Down</span>
          </motion.div>
        </a>

        {/* 🔔 Announcement Bar */}
        <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center py-2 animate-pulse z-50">
          📢 <span className='font-semibold'>IEEE PES WEEK 2025:</span> Registrations are now LIVE!{" "}
          <a href="#Register" className="underline font-bold hover:text-yellow-300 transition">
            Click here to join →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
