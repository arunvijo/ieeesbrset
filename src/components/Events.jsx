import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; // Link is already imported, now we'll use it

// Unchanged upcoming events
const upcomingEvents = [
  {
    name: 'AI Symposium 2025',
    date: '2025-06-15',
    description: 'A deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers.',
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

// Past events categorized by society from your spreadsheets
const pastEvents = {
  "Student Branch (SB)": [
    { name: "IEEE Day 2024", date: "2024-10-01", description: "Celebrating the global IEEE community with various technical and non-technical events.", image: "/events/demo.jpg" },
    { name: "EXECOM Training", date: "2024-03-05", description: "Leadership and management training for the new executive committee members.", image: "/events/demo.jpg" },
    { name: "Annual General Meeting 2024", date: "2024-01-20", description: "The annual meeting to discuss the past year's activities and future plans.", image: "/events/demo.jpg" },
    { name: "Project Expo 2023", date: "2023-11-15", description: "A platform for students to showcase their innovative projects.", image: "/events/demo.jpg" }
  ],
  "Computer Society (CS)": [
    { name: "TechVerse 2.0", date: "2024-09-10", description: "A technical fest focused on emerging trends in computer science.", image: "/events/demo.jpg" },
    { name: "UI/UX Workshop", date: "2024-05-22", description: "Hands-on session covering the fundamentals of UI/UX design.", image: "/events/demo.jpg" },
    { name: "Web Dev Bootcamp", date: "2023-08-01", description: "An intensive bootcamp on modern web development technologies.", image: "/events/demo.jpg" }
  ],
  "Industry Applications Society (IAS)": [
    { name: "Industrial Visit to KSEB", date: "2024-11-05", description: "An educational visit to a KSEB substation to understand power distribution.", image: "/events/demo.jpg" },
    { name: "Illuminar", date: "2024-07-18", description: "A technical talk series featuring experts from various industries.", image: "/events/demo.jpg" },
    { name: "Expert Talk on Industry 4.0", date: "2023-09-25", description: "A seminar on the fourth industrial revolution and its impact.", image: "/events/demo.jpg" }
  ],
  "Power & Energy Society (PES)": [
    { name: "EV Charging Station Visit", date: "2024-10-30", description: "A visit to an electric vehicle charging station to learn about the technology.", image: "/events/demo.jpg" },
    { name: "World Environment Day Quiz", date: "2024-06-05", description: "A quiz competition to raise awareness about environmental issues.", image: "/events/demo.jpg" },
    { name: "PES Day Quiz", date: "2023-04-28", description: "Celebrating PES Day with an engaging quiz on power and energy topics.", image: "/events/demo.jpg" }
  ],
  "Robotics & Automation Society (RAS)": [
    { name: "Line Following Robot Competition", date: "2024-08-20", description: "A competitive event where participants build and race line-following robots.", image: "/events/demo.jpg" },
    { name: "Robo Soccer", date: "2023-10-10", description: "An exciting competition combining robotics and the fun of soccer.", image: "/events/demo.jpg" },
    { name: "Drone Building Workshop", date: "2023-03-15", description: "A workshop on the basics of drone assembly and operation.", image: "/events/demo.jpg" }
  ],
  "Women in Engineering (WIE)": [
    { name: "WIE STAR Program", date: "2024-12-01", description: "A mentorship program aimed at encouraging young girls in STEM fields.", image: "/events/demo.jpg" },
    { name: "Women in Tech Panel", date: "2023-10-20", description: "A panel discussion with successful women in the technology sector.", image: "/events/demo.jpg" },
    { name: "Self Defense Workshop", date: "2023-07-12", description: "A practical workshop on self-defense techniques for women.", image: "/events/demo.jpg" }
  ],
};

const Events = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Banner */}
      <div className='relative w-full h-[350px] overflow-hidden mb-12'>
        <img src="/banner.png" alt="Events Banner" className="absolute inset-0 w-full h-full object-cover" />
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
                {/* --- CHANGE MADE HERE --- */}
                {/* Replaced the <a> tag with <Link> to navigate to the event detail page */}
                <Link
                  to={`/event/${index}`}
                  className='inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
                >
                  View Details & Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events - Now Categorized */}
      <section className='px-6 md:px-16 mb-20'>
        <div className='text-center'>
            <h3 className='text-3xl font-bold mb-12 text-gray-800'>Past Events</h3>
        </div>
        {Object.entries(pastEvents).map(([society, events]) => (
          <div key={society} className='mb-12'>
            <h4 className='text-2xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2'>{society}</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {events.map((event, index) => (
                <div key={index} className='bg-gray-100 rounded-xl shadow-md overflow-hidden'>
                  <img src={event.image} alt={event.name} className='w-full h-48 object-cover' />
                  <div className='p-4'>
                    <h5 className='text-xl font-semibold text-gray-900'>{event.name}</h5>
                    <p className='text-sm text-gray-500 mb-2'>{event.date}</p>
                    <p className='text-gray-700'>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;