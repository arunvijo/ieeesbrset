import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='About'
      className='relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-20 text-white'
    >
      <div className='bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg'>
        <h2 className='text-4xl font-bold text-center mb-6'>
          About <span className='text-blue-500'>RSET SB</span>
        </h2>
        <p className='text-center text-lg text-gray-300 max-w-3xl mx-auto mb-10'>
          Passionate About Technology. Dedicated to Your Vision.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-10'>
          <img
            src={assets.brand_img}
            alt="RSET IEEE"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-lg mx-auto object-contain"
          />

          <div className='flex flex-col justify-center text-gray-200'>
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-12 mb-6'>
              {[
                { count: "10+", label: "Years of Excellence" },
                { count: "50+", label: "Workshops Conducted" },
                { count: "100+", label: "Active Members" },
                { count: "20+", label: "Events Organized" },
              ].map((item, index) => (
                <div key={index}>
                  <p className='text-3xl font-bold text-blue-400'>{item.count}</p>
                  <p className='text-gray-300'>{item.label}</p>
                </div>
              ))}
            </div>

            <p className='leading-relaxed text-justify max-w-2xl'>
              IEEE sponsors over 2,000 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE.
              <br /><br />
              The IEEE Student Branch of Rajagiri School of Engineering and Technology is the product of a combined effort from qualified faculty members and passionate students of RSET. We are a vibrant community committed to innovation, collaboration, and excellence in engineering.
            </p>

            <button className='mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg self-start'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
