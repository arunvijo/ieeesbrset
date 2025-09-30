import React, { useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { motion, useInView, animate } from "framer-motion";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// --- NEW COMPONENT FOR ANIMATED COUNTING ---
const AnimatedCounter = ({ to }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const value = parseInt(to, 10);
    const suffix = to.includes('+') ? '+' : '';

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(latest) {
                    node.textContent = Math.round(latest) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return <span ref={ref}>0</span>;
};


const About = () => {
  return (
    <section
      id='About'
      className='relative z-10 py-24 px-6 md:px-20 lg:px-32'
    >
      {/* 1. UPDATED: Switched to a dark-themed glassmorphism card */}
      <motion.div 
        className='bg-gray-900/70 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl container mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* 2. UPDATED: Header text and accent colors adjusted for dark background */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-white inline-block relative tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About <span className="text-blue-500">RSET SB</span>
            <motion.div
              className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.8 }}
            />
          </motion.h2>
        </div>

        <motion.div 
          className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={assets.brand_img}
            alt="RSET IEEE"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-lg mx-auto object-contain"
            variants={itemVariants}
          />

          <motion.div className='flex flex-col justify-center' variants={itemVariants}>
            <div className='grid grid-cols-2 gap-8 mb-8 text-center sm:text-left'>
              {[
                { count: "10+", label: "Years of Excellence" },
                { count: "50+", label: "Workshops Conducted" },
                { count: "100+", label: "Active Members" },
                { count: "20+", label: "Awards Won" },
              ].map((item, index) => (
                <div key={index}>
                  {/* 3. NEW: Replaced static number with the AnimatedCounter */}
                  <p className='text-4xl lg:text-5xl font-extrabold text-blue-400'>
                    <AnimatedCounter to={item.count} />
                  </p>
                  <p className='text-gray-300 text-sm'>{item.label}</p>
                </div>
              ))}
            </div>

            {/* 4. UPDATED: Text color for dark background */}
            <p className='text-gray-300 leading-relaxed max-w-2xl text-left'>
              The IEEE Student Branch of Rajagiri School of Engineering and Technology is a vibrant community of innovators, leaders, and problem-solvers. We are the product of a combined effort from qualified faculty and passionate students, dedicated to advancing technology for the benefit of humanity.
              <br /><br />
              Through workshops, competitions, and technical talks, we provide a platform for students to develop their skills, network with professionals, and turn their creative ideas into reality.
            </p>

            <motion.button 
              className='mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg self-start font-semibold shadow-lg hover:bg-blue-700 transition'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;