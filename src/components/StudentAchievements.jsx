import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/StudentAwards/sa1.jpeg',
  '/StudentAwards/sa2.jpeg',
  '/StudentAwards/sa3.jpeg',
  '/StudentAwards/sa4.jpeg',
  '/StudentAwards/sa5.jpeg',
  // Add more if needed
];

// Animation variant for the grid container to stagger children
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: 'easeOut' },
  },
};

// Animation variant for each image card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const StudentAchievements = () => {
  // State to handle which image is selected for the lightbox view
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='py-20 px-6 md:px-20 lg:px-32 bg-white backdrop-blur-sm'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-extrabold text-gray-900 inline-block relative'>
          Student <span className='text-blue-700'>Achievements</span>
          <motion.div
            className="absolute bottom-[-10px] left-0 w-full h-1 bg-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </h2>
        <p className='text-center text-gray-700 mt-6 max-w-2xl mx-auto'>
          Recognizing the outstanding contributions and accomplishments of our student members. Click an image to see the full award.
        </p>
      </div>

      {/* Animated grid container */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className='rounded-xl shadow-lg bg-white/10 overflow-hidden cursor-pointer group'
            variants={cardVariants}
            onClick={() => setSelectedImg(src)} // Opens the lightbox
          >
            <img
              src={src}
              alt={`Student Award ${idx + 1}`}
              className='w-full h-80 object-cover object-center transform transition-transform duration-500 group-hover:scale-105'
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal for viewing images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4'
            onClick={() => setSelectedImg(null)} // Close modal on backdrop click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged student award"
              className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentAchievements;