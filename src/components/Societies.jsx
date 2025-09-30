import React from 'react';
// 1. Import the 'motion' component from Framer Motion
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
   // Added PES for completeness
  {
    name: 'Power & Energy Society (PES)',
    image: '/Socities/pes.jpg', // Make sure you have a corresponding image
    description: 'Advancing innovation in the electric power and energy industry for the betterment of society.'
  }
];

// 2. Define animation variants for the container to orchestrate animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make each child animate one after the other
    },
  },
};

// 3. Define animation variants for each card item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Societies = () => {
  return (
    // Refined background styling for a more modern feel
    <div className='py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-gray-50 to-blue-100 text-gray-900'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-extrabold text-gray-800 inline-block relative'>
          Our <span className='text-blue-600'>Societies</span>
          {/* Animated underline for a dynamic touch */}
          <motion.div
            className="absolute bottom-[-10px] left-0 w-full h-1 bg-blue-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Explore the diverse technical communities within IEEE RSET SB, each dedicated to a specific field of interest.
        </p>
      </div>

      {/* 4. Apply the motion component and animation variants */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the grid is visible
      >
        {societies.map((society, index) => (
          // Apply item variants to each card
          <motion.div
            key={index}
            className='bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'
            variants={itemVariants}
          >
            <div className="overflow-hidden h-56">
                <img
                    src={society.image}
                    alt={society.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' // Added a subtle zoom effect on hover
                />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>{society.name}</h3>
              <p className='text-gray-600 text-sm'>{society.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Societies;