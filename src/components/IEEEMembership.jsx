import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

const IEEEMembership = () => {
  return (
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-[#e9f1fb] text-gray-900 overflow-hidden">
      
      {/* Background decorative element */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div> */}

      {/* --- Section Header --- */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Become a <span className="text-blue-700">Member</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
          Join a global community of innovators and unlock a world of resources designed to help you succeed in your academic and professional journey.
        </p>
      </div>

      {/* --- Pricing and Membership Cards --- */}
      <motion.div
        className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1: Standard Student Membership */}
        <motion.div
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Student Membership</h3>
          <p className="text-5xl font-extrabold text-blue-700 mb-2">
            $27<span className="text-xl font-medium text-gray-500">.00 USD/year*</span>
          </p>
          <p className="text-gray-500 mb-6 text-sm">*Price may vary based on region.</p>
          <ul className="space-y-3 text-gray-600 text-lg flex-grow">
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>IEEE Spectrum Magazine</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Access to IEEE Xplore</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>IEEE eLearning Library</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Networking Opportunities</li>
          </ul>
        </motion.div>

        {/* Card 2: Society Membership */}
        <motion.div
          variants={itemVariants}
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md p-8 flex flex-col"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Add Technical Societies</h3>
          <p className="text-4xl font-extrabold text-blue-700 mb-2">
            Enhance Your Focus
          </p>
          <p className="text-gray-500 mb-6">Join societies dedicated to your specific fields of interest, like Computer Science, Robotics, or Power & Energy.</p>
          <ul className="space-y-3 text-gray-600 text-lg flex-grow">
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Specialized Publications</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Exclusive Conferences</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Expert-led Webinars</li>
            <li className="flex items-center"><span className="text-blue-600 mr-3">✔</span>Lower pricing for students</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* --- Join IEEE Button --- */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.ieee.org/membership/join/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Join IEEE Today
        </a>
      </motion.div>

    </div>
  );
};

export default IEEEMembership;