import React from 'react'

const societies = [
  {
    name: 'Computer Society (CS)',
    image: '/Socities/CS.jpg',
    description: 'Fostering technical innovation in computing and advancing knowledge in algorithms, AI, and software systems.'
  },
  {
    name: 'Industrial Applications Society (IAS)',
    image: '/Socities/IAS.jpg',
    description: 'Dedicated to the advancement of theory and practice of electrical and electronic engineering in industrial settings.'
  },
  {
    name: 'Signal Processing Society (SPS)',
    image: '/Socities/sps.png',
    description: 'Focused on signal processing theory, algorithms, and applications in communications, image processing, and more.'
  },
  {
    name: 'Robotics and Automation Society (RAS)',
    image: '/Socities/ras.jpg',
    description: 'Promotes the development and deployment of robotics and automation in research and industry.'
  },
  {
    name: 'Women in Engineering (WIE)',
    image: '/Socities/wie.jpg',
    description: 'Empowers women in engineering and technology to advance and thrive in their professional careers.'
  }
];

const Societies = () => {
  return (
    <div className='py-20 px-6 md:px-20 lg:px-32'>
      <h2 className='text-4xl font-bold text-center mb-10'>Our <span className='text-blue-600'>Socities</span></h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {societies.map((society, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <img src={society.image} alt={society.name} className='w-full h-56 object-cover' />
            <div className='p-6'>
              <h2 className='text-xl font-semibold mb-2'>{society.name}</h2>
              <p className='text-gray-600 text-sm'>{society.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Societies;
