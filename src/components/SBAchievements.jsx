import React from 'react';

const SBAchievements = () => {
  const images = [
    '/SbAwards/sba2.jpeg',
    '/SbAwards/sba3.jpeg',
    '/SbAwards/sba4.png',
    '/SbAwards/sba5.jpeg',
    '/SbAwards/sba6.jpeg',
    '/SbAwards/sba7.jpeg',
    '/SbAwards/sba8.jpeg',
    '/SbAwards/sba9.jpeg',
    // Add more if needed
  ];

  return (
    <div className='py-20 px-6 md:px-20 lg:px-32 bg-white text-gray-900'>
      <h2 className='text-4xl font-bold text-center mb-10'>
        SB <span className='text-blue-600'>Achievements</span>
      </h2>
      <p className='text-center text-gray-600 mb-12 max-w-xl mx-auto'>
        Celebrating the milestones and accolades of our IEEE Student Branch.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Award ${idx + 1}`} className='rounded-lg shadow-lg' />
        ))}
      </div>
    </div>
  );
};

export default SBAchievements;
