import React from 'react';
import { motion } from 'framer-motion';

const societies = [
  {
    name: 'Computer Society (CS)',
    image: '/Socities/CS.jpg',
    description: 'Fostering technical innovation in computing and advancing knowledge in algorithms, AI, and software systems.'
  },
  {
    name: 'Industrial Applications Society (IAS)',
    image: '/Socities/IAS.jpg',
    description: 'Dedicated to the advancement of theory and practice of electrical and electronic engineering in industrial settings.'
  },
  {
    name: 'Signal Processing Society (SPS)',
    image: '/Socities/sps.png',
    description: 'Focused on signal processing theory, algorithms, and applications in communications, image processing, and more.'
  },
  {
    name: 'Robotics and Automation Society (RAS)',
    image: '/Socities/ras.jpg',
    description: 'Promotes the development and deployment of robotics and automation in research and industry.'
  },
  {
    name: 'Women in Engineering (WIE)',
    image: '/Socities/wie.jpg',
    description: 'Empowers women in engineering and technology to advance and thrive in their professional careers.'
  },
  {
    name: 'Power & Energy Society (PES)',
    image: '/Socities/PESlogo.jpg',
    description: 'Advancing innovation in the electric power and energy industry for the betterment of society.'
  }
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

// Card animation
const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Societies = () => {
  return (
    // 1. UPDATED: Removed static background to reveal dynamic animated background
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#f8fbff] to-[#e9f1fb] text-gray-900 overflow-hidden">
      
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-blue-700">Societies</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Explore the diverse technical communities within IEEE RSET SB, each dedicated to a specific field of interest.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {societies.map((society, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 cursor-pointer overflow-hidden"
          >
            <div className="overflow-hidden h-60 relative">
              <motion.img
                src={society.image}
                alt={society.name}
                // 2. UPDATED: Removed grayscale effect
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
                whileHover={{ rotate: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors relative inline-block">
                {society.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 group-hover:w-full transition-all duration-500"></span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{society.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Societies;