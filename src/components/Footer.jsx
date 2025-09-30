import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Footer = () => {
  return (
    <footer
      className="relative pt-20 pb-8 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#0a0e1a] to-[#111827] w-full overflow-hidden text-gray-300"
      id="Footer"
    >
      {/* Soft radial glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,204,0.12),transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start relative z-10">
        {/* Logo & Info */}
        <motion.div
          className="w-full md:w-1/3 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="w-40 mb-4"
            src="/logo.png"
            alt="IEEE RSET SB Logo"
          />
          <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
            IEEE Student Branch Rajagiri School of Engineering and Technology
            <br />
            Kakkanad, Kochi
            <br />
            Kerala - 682039
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="w-full md:w-1/5 mb-12 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.2}
        >
          {/* UPDATED: Added w-fit for responsive underline */}
          <h3 className="text-white text-xl font-semibold mb-5 relative w-fit">
            Company
            {/* UPDATED: Changed width to w-full and standardized color */}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 rounded-full"></span>
          </h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            {["Home", "About Us", "Contact", "Privacy policy"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.replace(" ", "")}`}
                className="relative w-fit hover:text-white transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                {/* UPDATED: Standardized hover underline color */}
                <span className="relative inline-block pb-[2px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-500 hover:after:w-full">
                  {item}
                </span>
              </motion.a>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="w-full md:w-1/3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.4}
        >
          <h3 className="text-white text-xl font-semibold mb-5 relative w-fit">
            Subscribe to our newsletter
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-700 rounded-full"></span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-xs text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700 focus:outline-none focus:border-blue-700 transition-all duration-300 w-full flex-grow"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-6 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-300 shadow-md shadow-blue-700/20"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Divider + Bottom */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.6}
        className="border-t border-gray-700 py-6 mt-16 text-center text-gray-500 text-sm relative z-10"
      >
        © 2025 IEEE RSET SB. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
