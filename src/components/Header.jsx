import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="relative">
      <div 
        className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative' 
        style={{ backgroundImage: "url('/header_img.png')" }} 
        id='Header'
      >
        {/* Overlay to decrease transparency */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <Navbar />
        <motion.div
        initial={{opacity: 0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity: 1,y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
          <h2 className='text-5xl dm:text-6xl md:text-[82px] inline-block max-w-7xl font-semibold pt-20'>
            INSPIRE.INNOVATE.LEARN
          </h2>
          <div className='space-x-6 mt-16'>
            <a href="#About" className='border border-white px-8 py-3 rounded'>Know More</a> 
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a> 
          </div>
        </motion.div>                    
      </div>
    </div>
  )
}

export default Header
