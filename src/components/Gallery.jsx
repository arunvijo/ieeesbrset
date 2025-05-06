import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const events = [
  { title: 'TechTalks 2024', date: 'Jan 15, 2024', image: '/Events/g1.png' },
  { title: 'InnovateX Hackathon', date: 'Feb 10, 2024', image: '/Events/g2.jpeg' },
  { title: 'WIE Empower Summit', date: 'Mar 8, 2024', image: '/Events/g3.jpeg' },
  { title: 'RAS Robotics Expo', date: 'Apr 5, 2024', image: '/Events/g4.jpeg' },
  { title: 'RAS Robotics Expo', date: 'Apr 5, 2024', image: '/Events/g5.jpeg' },
  { title: 'RAS Robotics Expo', date: 'Apr 5, 2024', image: '/Events/g6.jpeg' },
  // Add more as needed
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % events.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - cardsToShow : (prevIndex - cardsToShow + events.length) % events.length
    );
  };

  return (
    <div
      className='container mx-auto px-6 md:px-16 lg:px-24 py-20 w-full bg-white text-gray-900'
      id='Gallery'
    >
      <h2 className='text-4xl font-bold text-center mb-10'>
        Event <span className='text-blue-600'>Gallery</span>
      </h2>
      <p className='text-gray-700 text-center mb-10'>
      Through thousands of events over the years, the members of our Student Branch (SB) have amassed a great number of experiences and fond memories while setting the groundwork for a successful professional life. Have a walk with us down the memory lane, where we hold our dearest and most enriching of memories.
      </p>

      {/* Buttons */}
      <div className='flex justify-end items-center mb-6'>
        <button onClick={prevProject} className='p-2 bg-gray-300 hover:bg-gray-200 rounded mr-2'>
          <img src={assets.left_arrow} alt='Previous' className='w-5 h-5' />
        </button>
        <button onClick={nextProject} className='p-2 bg-gray-300 hover:bg-gray-200 rounded'>
          <img src={assets.right_arrow} alt='Next' className='w-5 h-5' />
        </button>
      </div>

      {/* Gallery */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-6 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {events.map((event, index) => (
            <div key={index} className='relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3'>
              <img
                src={event.image}
                alt={event.title}
                className='rounded-lg shadow-lg w-full h-72 object-cover'
              />
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur px-4 py-2 rounded shadow text-center w-11/12'>
                <h2 className='text-lg font-semibold text-white'>{event.title}</h2>
                <p className='text-sm text-gray-300'>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
