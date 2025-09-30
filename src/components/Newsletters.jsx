import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

const newslettersData = [
  {
    title: 'Newsletter 2024',
    previewImage: '/Newsletters/Newsletter_2024.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2024.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2024.pdf'
  },
  {
    title: 'Newsletter 2023',
    previewImage: '/Newsletters/Newsletter_2023.png',
    pdfUrl: '/Newsletters/IEEE_RSET_SB_Newsletter_2023.pdf',
    fileName: 'IEEE_RSET_SB_Newsletter_2023.pdf'
  }
];

// 1. Added consistent animation variants from other pages
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const Newsletters = () => {
  return (
    // 2. Applied the standard page background and layout
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#f8fbff] to-[#e9f1fb] text-gray-900 overflow-hidden">
      
      {/* 3. Added the subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div>

      {/* 4. Updated the header to match the site-wide animated style */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-blue-700">Newsletters</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          Check out the latest news, events, and achievements from our Student Branch.
        </p>
      </div>

      {/* 5. Converted grid to a motion component with staggered animations */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {newslettersData.map((newsletter, index) => (
          // 6. Completely restyled the card to match the site's aesthetic
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 overflow-hidden"
          >
            {/* Image section with hover effects */}
            <div className="overflow-hidden h-80 relative">
              <motion.img
                src={newsletter.previewImage}
                alt={`Preview of ${newsletter.title}`}
                className="w-full h-full object-cover object-top transform group-hover:scale-110 group-hover:grayscale-0 grayscale transition-all duration-700 ease-out"
                onError={(e) => { e.target.onerror = null; e.target.src='/Newsletters/default-preview.png' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Content section with title and buttons */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                {newsletter.title}
              </h3>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <a
                  href={newsletter.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                >
                  <FiEye className="mr-2" />
                  View
                </a>
                <a
                  href={newsletter.pdfUrl}
                  download={newsletter.fileName}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
                >
                  <FiDownload className="mr-2" />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Newsletters;