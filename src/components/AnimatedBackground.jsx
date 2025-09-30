// src/components/AnimatedBackground.js

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#f8fbff]">
      <div className="relative w-full h-full">
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            rotate: [0, 90, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-300/50 rounded-full filter blur-3xl opacity-50"
        />
        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [90, 0, 90],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 35,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
          className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-blue-200/50 rounded-full filter blur-3xl opacity-40"
        />
        {/* Blob 3 */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [100, -100, 100],
            rotate: [0, -90, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 50,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2,
          }}
          className="absolute top-[50%] right-[30%] w-64 h-64 bg-[#e9f1fb] rounded-full filter blur-2xl opacity-70"
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;