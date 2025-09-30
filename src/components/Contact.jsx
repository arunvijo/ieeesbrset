import React, { useState } from 'react';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { FiMail, FiMapPin, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "c338cf41-bca2-4ad2-8f68-2d8b2e83fdc5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message || "Something went wrong.");
        setResult("Failed to send");
      }
    } catch (error) {
        console.error("Submission Error:", error);
        toast.error("An error occurred during submission.");
        setResult("Submission Error");
    }
  };

  return (
    <section 
      id='Contact' 
      className="relative z-10 py-24 px-6 md:px-20 lg:px-32"
    >
      <motion.div
        className='bg-gray-900/70 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl container mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-extrabold text-white inline-block relative tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact <span className="text-blue-500">Us</span>
            {/* UPDATED: Changed from a fixed width to w-full to be responsive */}
            <motion.div
              className="absolute bottom-[-12px] left-0 w-full h-1 bg-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.8 }}
            />
          </motion.h2>
          <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto">
            Have a question or want to collaborate? Reach out to us directly or fill out the form, and we'll get back to you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Contact Info & Socials */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <FiMail className="text-blue-400 text-2xl" />
                <a href="mailto:ieee@rajagiritech.edu.in" className="hover:text-blue-400 transition">ieee@rajagiritech.edu.in</a>
              </div>
              <div className="flex items-start gap-4">
                <FiMapPin className="text-blue-400 text-2xl mt-1" />
                <span>Rajagiri School of Engineering & Technology, Kakkanad, Kochi, Kerala - 682039</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Follow Us</h3>
            <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/company/ieee-sb-rset/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-gray-400 text-3xl hover:text-blue-400 transition" /></a>
                <a href="https://www.instagram.com/ieee_sb_rset/" target="_blank" rel="noopener noreferrer"><FiInstagram className="text-gray-400 text-3xl hover:text-blue-400 transition" /></a>
                <a href="https://www.youtube.com/@IEEESBRSET" target="_blank" rel="noopener noreferrer"><FiYoutube className="text-gray-400 text-3xl hover:text-blue-400 transition" /></a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                <input type="text" name="Name" required placeholder="John Doe" className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Email</label>
                <input type="email" name="Email" required placeholder="john@example.com" className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-200" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea name="Message" required placeholder="Type your message here..." className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-200"></textarea>
              </div>
              <div className="text-left">
                <motion.button type="submit" className="bg-blue-600 text-white py-3 px-10 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {result || "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;