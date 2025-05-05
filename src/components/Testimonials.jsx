import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <div
      className='container mx-auto px-6 py-20 lg:px-32 bg-white text-gray-900'
      id='Testimonials'
    >
      <h2 className='text-4xl font-bold text-center mb-10'>
        Expert <span className='text-blue-600'>Testimonials</span>
      </h2>
      <p className='text-center text-gray-600 mb-12 max-w-xl mx-auto'>
        Real stories from those who benefitted from IEEE RSET Student Branch.
      </p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='w-full sm:w-[300px] bg-white border border-gray-200 shadow-lg rounded-xl p-6 text-center space-y-4'
          >
            <img
              className='w-20 h-20 rounded-full mx-auto object-cover'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>{testimonial.name}</h3>
              <p className='text-sm text-gray-600'>{testimonial.title}</p>
            </div>
            <div className='flex justify-center gap-1 text-yellow-500'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt="Star" className='w-4 h-4' />
              ))}
            </div>
            <p className='text-gray-800 text-sm'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
