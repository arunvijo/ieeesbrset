import React from 'react';
import {assets} from '../assets/assets' // Ensure correct import of assets
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0,x:200}}
    transition={{duration:1}}
    whileInView={{opacity: 1,x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About <span className='underline underline-offset-4 decoration-1 under font-light'>RSET SB</span>
      </h1>
      <p className='text-gray-500 max-w-90 text-center mb-8'>
       Passionate About Technology.Dedicated to Your Vision
      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>50+</p>
              <p>Workshops Conducted</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>100+</p>
              <p>Active Members</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Events Organized</p>
            </div>
          </div>
          <p className='my-10 mx-w-lg'>
        IEEE sponsors over 2,000 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE. Use the IEEE conference search to find the right conference for you to share and discuss innovation and interact with your community.
        <br /><br />
        The IEEE Student Branch of Rajagiri School of Engineering and Technology is the product of a combined effort from the qualified faculty members and talented students of RSET. We are a gathering of energetic and innovative individuals from various disciplines of engineering. By joining hands with IEEE we have pledged to make the world a better place, thereby manifesting a fitter path for the ages to come.
      </p>
      <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
