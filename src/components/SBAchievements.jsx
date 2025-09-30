import React, { useState } from 'react';
// 1. Import motion and AnimatePresence for animations
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/SbAwards/sba2.jpeg',
  '/SbAwards/sba3.jpeg',
  '/SbAwards/sba4.png',
  '/SbAwards/sba5.jpeg',
  '/SbAwards/sba6.jpeg',
  '/SbAwards/sba7.jpeg',
  '/SbAwards/sba8.jpeg',
  '/SbAwards/sba9.jpeg',
];

// Animation variant for the grid container
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: 'easeOut' },
  },
};

// Animation variant for each image item
const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SBAchievements = () => {
  // 2. Add state to manage the selected image for the lightbox
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='py-20 px-6 md:px-20 lg:px-32 bg-white'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-extrabold text-gray-800 inline-block relative'>
          SB <span className='text-blue-600'>Achievements</span>
          <motion.div
            className="absolute bottom-[-10px] left-0 w-full h-1 bg-blue-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </h2>
        <p className='text-center text-gray-600 mt-6 max-w-2xl mx-auto'>
          Celebrating the milestones, awards, and accolades of our IEEE Student Branch. Click on any image to view it larger.
        </p>
      </div>

      {/* 3. Animate the grid of images */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className='rounded-lg shadow-md overflow-hidden cursor-pointer group'
            variants={imageVariants}
            onClick={() => setSelectedImg(src)} // 4. Set the selected image on click
          >
            <img
              src={src}
              alt={`Award ${idx + 1}`}
              className='w-full h-64 object-cover object-center transform transition-transform duration-500 group-hover:scale-110'
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 5. Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4'
            onClick={() => setSelectedImg(null)} // Close modal on backdrop click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged achievement"
              className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SBAchievements;