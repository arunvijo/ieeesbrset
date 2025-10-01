import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data for the two galleries ---
const sbImages = [
  '/SbAwards/sba2.jpeg',
  '/SbAwards/sba3.jpeg',
  '/SbAwards/sba4.png',
  '/SbAwards/sba5.jpeg',
  '/SbAwards/sba6.jpeg',
  '/SbAwards/sba7.jpeg',
  '/SbAwards/sba8.jpeg',
  '/SbAwards/sba9.jpeg',
];

const studentImages = [
  '/StudentAwards/sa1.jpeg',
  '/StudentAwards/sa2.jpeg',
  '/StudentAwards/sa3.jpeg',
  '/StudentAwards/sa4.jpeg',
];

// --- Animation Variants ---

// For staggering the grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// For individual grid items
const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// For the gallery transition (fade + subtle scale)
const galleryVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
};


const Announcements = () => {
  // State to manage the active tab ('sb' or 'student')
  const [activeTab, setActiveTab] = useState('sb');
  // State for the lightbox modal
  const [selectedImg, setSelectedImg] = useState(null);

  const currentImages = activeTab === 'sb' ? sbImages : studentImages;
  const gridColsClass = activeTab === 'sb' ? 'lg:grid-cols-4' : 'lg:grid-cols-3 xl:grid-cols-4';

  return (
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-[#e9f1fb] text-gray-900 overflow-hidden">
      
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div> */}

      {/* --- Section Header --- */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-blue-700">Announcements</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Celebrating the collective milestones of our Student Branch and the outstanding achievements of our individual members.
        </p>
      </div>

      {/* --- Animated Tab Switcher --- */}
      <div className="flex justify-center mb-16 relative z-10">
        <div className="flex space-x-2 bg-blue-100/70 p-1.5 rounded-full">
          {['sb', 'student'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 text-lg font-semibold rounded-full transition-colors duration-300 ${
                activeTab === tab ? 'text-white' : 'text-blue-800 hover:bg-white/60'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-blue-700 rounded-full"
                  transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                />
              )}
              <span className="relative z-10">
                {tab === 'sb' ? 'SB Achievements' : 'Student Awards'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Galleries with Transition Animation --- */}
      <AnimatePresence mode="wait">
        <motion.div
            key={activeTab} // Crucial for AnimatePresence to detect changes
            variants={galleryVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
          <motion.div
            className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-12 relative z-10`}
            variants={containerVariants}
            initial="hidden"
            animate="visible" // Use animate instead of whileInView for tab changes
          >
            {currentImages.map((src, idx) => (
              <motion.div
                key={src} // Use image source as key for better re-rendering
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImg(src)}
              >
                <div className="overflow-hidden h-64 relative">
                  <motion.img
                    src={src}
                    alt={`${activeTab === 'sb' ? 'SB Achievement' : 'Student Award'} ${idx + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
                    layoutId={`image-${src}`} // For potential shared layout animations
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* --- Lightbox Modal (no changes needed here) --- */}
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
              alt="Enlarged achievement"
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

export default Announcements;