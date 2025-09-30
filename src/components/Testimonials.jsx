import React from 'react';

const testimonialsData = [
  {
    name: 'ER. A SUHAIR',
    title: 'Chair IEEE PES Kerala Chapter',
    image: '/testimonials/suhair.jpg',
    alt: 'Er. A Suhair',
    text: `I am happy to endorse that IEEE PES Student Branch of RSET has been quite active from its inception and has been organizing quality events and won recognition. I hope they will continue to do the good work and will remain the pride of the IEEE Student community in the years to come. Wishing them all the very best.`,
  },
  {
    name: 'DR. BIJUNA KUNJU K',
    title: 'Professor and Head, DEE TKMCE, Kollam',
    image: '/testimonials/bijuna.jpg',
    alt: 'Dr. Bijuna Kunju K',
    text: `It is indeed a very happy feeling to write about the IAS SB Chapter of RSET. Being the Chair of IA/IE/PELS Joint Chapter Kerala, I had the very rare opportunity to work together with two volunteers of RSET, Eldho and Nivetha. I do congratulate the SB Chapter of RSET for moulding these volunteers as the best volunteers of the Section. All the best in all your future endeavours also. With the SB under the control of Nivetha, I am sure it will reap success after success.`,
  },
];

const Testimonials = () => {
  return (
    <div
      className='w-full bg-gray-50 py-20 px-6 lg:px-24 special-font'
      id='Testimonials'
    >
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800'>
        Expert <span className='text-blue-600'>Testimonials</span>
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='relative bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl'
          >
            <div className='text-5xl text-gray-500 mb-4'>❝</div>
            <p className='text-lg leading-relaxed text-gray-700 font-light'>
              {testimonial.text}
            </p>

            <div className='absolute bottom-[-50px] left-8 flex items-center gap-6'>
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className='w-20 h-20 rounded-full object-cover border-4 border-blue-600'
              />
              <div className='text-sm'>
                <p className='font-bold text-blue-600 uppercase'>{testimonial.name}</p>
                <p className='text-gray-500'>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
