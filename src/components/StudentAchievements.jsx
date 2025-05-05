import React from 'react'

const StudentAchievements = () => {
  const images = [
    '/StudentAwards/sa1.jpeg',
    '/StudentAwards/sa2.jpeg',
    '/StudentAwards/sa3.jpeg',
    '/StudentAwards/sa4.jpeg',
    '/StudentAwards/sa5.jpeg',
    // Add more if needed
  ];

  return (
    <div className='py-20 px-6 md:px-20 lg:px-32'>
     <h2 className='text-4xl font-bold text-center mb-10'>Student <span className='text-blue-600'>Achievemnts</span></h2>
      <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>
        Recognizing the outstanding contributions and accomplishments of our student members.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Student Award ${idx + 1}`} className='rounded-lg shadow-md' />
        ))}
      </div>
    </div>
  )
}

export default StudentAchievements;
