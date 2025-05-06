import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    name: 'AI Symposium 2025',
    date: '2025-06-15',
    description: 'Join us for a deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers.',
    image: '/events/ai-symposium.jpg',
    registerLink: 'https://example.com/register-ai-symposium'
  },
  {
    name: 'TechHack 2025',
    date: '2025-07-01',
    description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators.',
    image: '/events/techhack.jpg',
    registerLink: 'https://example.com/register-techhack'
  }
];

const pastEvents = [
  {
    name: 'Cybersecurity Bootcamp',
    date: '2025-03-10',
    description: 'A hands-on workshop on cybersecurity practices, led by experts from the industry and academia.',
    image: '/events/cybersecurity.jpg'
  },
  {
    name: 'IEEE Innovators Summit',
    date: '2024-12-05',
    description: 'Celebrating innovative projects and startups by IEEE student members.',
    image: '/events/innovators-summit.jpg'
  }
];

const Events = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Banner */}
      <div className='relative w-full h-[350px] overflow-hidden mb-12'>
        <img
          src="/banner.png"
          alt="Events Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-white text-5xl font-extrabold drop-shadow-lg">
            IEEE <span className="text-blue-400">Events</span>
          </h2>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className='px-6 md:px-16 mb-16'>
        <h3 className='text-3xl font-bold mb-8 text-blue-900'>Upcoming Events</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {upcomingEvents.map((event, index) => (
            <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow'>
              <img src={event.image} alt={event.name} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h4 className='text-xl font-semibold text-blue-800'>{event.name}</h4>
                <p className='text-sm text-gray-600 mb-2'>{event.date}</p>
                <p className='text-gray-700 mb-4'>{event.description}</p>
                <Link
                  to={`/event/${index}`}
                  className='inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className='px-6 md:px-16 mb-20'>
        <h3 className='text-3xl font-bold mb-8 text-gray-800'>Past Events</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {pastEvents.map((event, index) => (
            <div key={index} className='bg-gray-100 rounded-xl shadow-md overflow-hidden'>
              <img src={event.image} alt={event.name} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h4 className='text-xl font-semibold text-gray-900'>{event.name}</h4>
                <p className='text-sm text-gray-500 mb-2'>{event.date}</p>
                <p className='text-gray-700'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
