import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/StudentAwards/sa1.jpeg',
  '/StudentAwards/sa2.jpeg',
  '/StudentAwards/sa3.jpeg',
  '/StudentAwards/sa4.jpeg',
  // '/StudentAwards/sa5.jpeg',
  // Add more if needed
];

// 1. Updated animation variants to match the consistent site-wide style
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


const StudentAchievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    // 2. Applied the same background, padding, and layout as the other pages
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#f8fbff] to-[#e9f1fb] text-gray-900 overflow-hidden">
      
      {/* 3. Added the subtle radial background glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div>

      {/* 4. Updated the header section to match the consistent page title style */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Student <span className="text-blue-700">Achievements</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Recognizing the outstanding contributions and accomplishments of our student members. Click an image to see the full award.
        </p>
      </div>

      {/* 5. Updated the grid to use the new variants and consistent spacing */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, idx) => (
          // 6. Restyled each grid item into a 'card' with identical animations and hover effects
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 cursor-pointer overflow-hidden"
            onClick={() => setSelectedImg(src)}
          >
            <div className="overflow-hidden h-64 relative">
              <motion.img
                src={src}
                alt={`Student Award ${idx + 1}`}
                // 7. Added grayscale and overlay effects to the image for a polished hover state
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:grayscale-0 grayscale transition-all duration-700 ease-out"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal remains functionally the same */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4'
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged student award"
              className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentAchievements;