import React from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "ER. A SUHAIR",
    title: "Chair IEEE PES Kerala Chapter",
    image: "/testimonials/suhair.jpg",
    alt: "Er. A Suhair",
    text: `I am happy to endorse that IEEE PES Student Branch of RSET has been quite active from its inception and has been organizing quality events and won recognition. I hope they will continue to do the good work and will remain the pride of the IEEE Student community in the years to come. Wishing them all the very best.`,
  },
  {
    name: "DR. BIJUNA KUNJU K",
    title: "Professor and Head, DEE TKMCE, Kollam",
    image: "/testimonials/bijuna.jpg",
    alt: "Dr. Bijuna Kunju K",
    text: `It is indeed a very happy feeling to write about the IAS SB Chapter of RSET. Being the Chair of IA/IE/PELS Joint Chapter Kerala, I had the very rare opportunity to work together with two volunteers of RSET, Eldho and Nivetha. I do congratulate the SB Chapter of RSET for moulding these volunteers as the best volunteers of the Section. All the best in all your future endeavours also. With the SB under the control of Nivetha, I am sure it will reap success after success.`,
  },
];

// 1. Updated animation variants to be consistent with other pages
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    // 2. Applied the standard page background, padding, and layout
    <section
      className="relative py-24 px-6 md:px-20 lg:px-32 bg-[#e9f1fb] text-gray-900"
      id="Testimonials"
    >
      {/* 3. Added the consistent radial background glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,102,204,0.07),transparent_60%)] pointer-events-none"></div> */}

      {/* 4. Updated the header to match the site-wide animated style */}
      <div className="text-center mb-28 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Expert <span className="text-blue-700">Testimonials</span>
          <motion.div
            className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-700 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
          />
        </motion.h2>
      </div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial, index) => (
          // 5. Restyled the card container, preserving the unique author layout
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 p-10 pb-20"
          >
            {/* Quote Icon */}
            <motion.div
              className="text-7xl text-blue-700/20 mb-4"
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ❝
            </motion.div>

            {/* Text */}
            <p className="text-lg leading-relaxed text-gray-700 italic">
              {testimonial.text}
            </p>

            {/* Author Section - preserved the hanging layout */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full">
              <motion.img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-700 shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
              <div className="text-center">
                <p className="font-bold text-blue-700 uppercase tracking-wide text-md">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;