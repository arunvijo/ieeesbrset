import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion"; // Use "framer-motion" instead of "motion/react"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto px-6 md:px-16 lg:px-24 py-16'
      id='About'
    >
      <h2 className='text-4xl font-bold text-center mb-10'>About <span className='text-blue-600'>RSET SB</span></h2>
      <p className='text-center text-lg text-gray-500 max-w-3xl mx-auto mb-10'>
        Passionate About Technology. Dedicated to Your Vision.
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
      <img
      src={assets.brand_img}
      alt="RSET IEEE"
      className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg mx-auto object-contain"
    />

        <div className='flex flex-col justify-center text-gray-700'>
          <div className='grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-12'>
            {[
              { count: "10+", label: "Years of Excellence" },
              { count: "50+", label: "Workshops Conducted" },
              { count: "100+", label: "Active Members" },
              { count: "20+", label: "Events Organized" },
            ].map((item, index) => (
              <div key={index}>
                <p className='text-3xl font-bold text-blue-700'>{item.count}</p>
                <p className='text-gray-600'>{item.label}</p>
              </div>
            ))}
          </div>

          <p className='mt-10 text-justify leading-relaxed max-w-2xl'>
            IEEE sponsors over 2,000 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE.
            <br /><br />
            The IEEE Student Branch of Rajagiri School of Engineering and Technology is the product of a combined effort from qualified faculty members and passionate students of RSET. We are a vibrant community committed to innovation, collaboration, and excellence in engineering.
          </p>

          <button className='mt-8 self-start bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg'>
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
