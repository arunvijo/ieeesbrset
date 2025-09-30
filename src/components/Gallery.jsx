import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const events = [
  { title: "TechTalks 2024", date: "Jan 15, 2024", image: "/Events/g1.png" },
  { title: "InnovateX Hackathon", date: "Feb 10, 2024", image: "/Events/g2.jpeg" },
  { title: "WIE Empower Summit", date: "Mar 8, 2024", image: "/Events/g3.jpeg" },
  { title: "RAS Robotics Expo", date: "Apr 5, 2024", image: "/Events/g4.jpeg" },
  { title: "RAS Robotics Expo", date: "Apr 5, 2024", image: "/Events/g5.jpeg" },
  { title: "RAS Robotics Expo", date: "Apr 5, 2024", image: "/Events/g6.jpeg" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto scroll with pause on hover
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, events.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div
      className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#f8fbff] to-[#e9f1fb] text-gray-900 overflow-hidden"
      id="Gallery"
    >
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div>
      
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Event <span className="text-blue-700">Gallery</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
        Have a walk with us down memory lane, where we hold our dearest and most enriching memories from thousands of events over the years.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-6 space-x-3 relative z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProject}
          className="p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition"
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProject}
          className="p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition"
        >
          <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Gallery Carousel */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (32 / cardsToShow)}px)` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 overflow-hidden"
              style={{ flex: `0 0 calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 32 / cardsToShow}px)` }}
            >
              {/* Image Section */}
              <div className="overflow-hidden h-72 relative">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:grayscale-0 grayscale transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Progress Bar has been removed from here */}

      </div>
    </div>
  );
};

export default Gallery;