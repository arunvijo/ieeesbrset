import React from 'react';
import { useParams } from 'react-router-dom';

const upcomingEvents = [
  {
    name: 'AI Symposium 2025',
    date: '2025-06-15',
    description: 'Join us for a deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers.',
    image: '/events/ai-symposium.jpg',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8'
  },
  {
    name: 'TechHack 2025',
    date: '2025-07-01',
    description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators.',
    image: '/events/techhack.jpg',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8'
  }
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = upcomingEvents[parseInt(eventId)];

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        Event not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-black/70 bg-cover bg-center px-4 py-20">
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl max-w-3xl w-full text-white mb-10">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-60 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
        <p className="text-sm text-gray-300 mb-4">{event.date}</p>
        <p className="mb-4">{event.description}</p>
        <p className="text-sm text-blue-300 italic">Scroll down to register</p>
      </div>

      <div className="w-full max-w-3xl">
  <iframe
    src={event.registerLink}
    title="Registration Form"
    className="w-full h-[700px] border-0 rounded-lg"
    allowFullScreen
  />
</div>

    </div>
  );
};

export default EventDetail;
