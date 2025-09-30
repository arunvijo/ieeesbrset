import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

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

// --- UPDATED DATA ---
// Past events now match your 2024 spreadsheet and provided event images.
const pastEvents = {
  "Student Branch (SB)": [
    { name: "Annual General Meeting 2024", date: "2024-04-02", description: "Reviewing the year's progress and planning for the future.", image: "/Events/AGM.jpg" },
    { name: "DEBAITE", date: "2024-11-11", description: "An exciting debate competition for engineering students.", image: "/Events/DebAIte.jpg" },
    { name: "Game Jam", date: "2024-09-29", description: "A multi-day event focused on collaborative game development.", image: "/Events/GameJam.jpg" },
    { name: "Learn From Scratch", date: "2024-09-29", description: "A foundational workshop for beginners on key tech skills.", image: "/Events/Scratch.jpg" },
    { name: "MD Session", date: "2024-03-23", description: "An insightful Membership Development session for members.", image: "/events/demo.jpg" },
    { name: "Tink-her-Hack 2.0", date: "2024-03-02", description: "A hackathon promoting innovation and problem-solving among women.", image: "/Events/Tinkerhack.png" },
    { name: "Beach Cleanup, YESS", date: "2024-07-15", description: "An environmental initiative as part of the YESS program.", image: "/events/demo.jpg" },
    { name: "Circuit Designing, YESS", date: "2024-08-24", description: "A hands-on workshop on the fundamentals of circuit design.", image: "/events/demo.jpg" },
    { name: "Robo Soccer, YESS", date: "2024-08-24", description: "A fun and competitive event combining robotics and soccer.", image: "/Events/Roborazz.jpeg" },
  ],
  "Robotics & Automation Society (RAS)": [
    { name: "Robo Razz", date: "2024-09-27", description: "An online robotics challenge testing design and programming skills.", image: "/Events/RoboRAZZ.jpeg" }
  ],
  "Power & Energy Society (PES)": [
    { name: "Project Green Future Talk", date: "2024-09-24", description: "A talk on sustainable technologies and green energy solutions.", image: "/Events/GreenFuture.jpg" },
    { name: "Solar Visit", date: "2024-10-04", description: "An industrial visit to a solar power facility.", image: "/Events/SolarVisit.jpg" },
  ],
  "Industry Applications Society (IAS)": [
    { name: "From Nature to Engineering: Optimization (DLP)", date: "2024-08-06", description: "A distinguished lecture on nature-inspired engineering solutions.", image: "/Events/Illuminar.jpg" },
    { name: "GeoQuest", date: "2024-07-22", description: "An online treasure hunt testing geographical and technical knowledge.", image: "/Events/GeoQuest.jpg" },
    { name: "Maze Runner", date: "2024-10-26", description: "An offline competitive event focused on problem-solving.", image: "/Events/MazeRunner.jpeg" },
    { name: "Shewisdom", date: "2024-04-20", description: "An event celebrating and sharing knowledge from women in tech.", image: "/Events/SheWisdom.jpg" },
    { name: "Future Charging Trends in EV", date: "2024-06-19", description: "A webinar on the future of on-board EV charger converters.", image: "/Events/WebinarEV.jpg" },
    { name: "Resilient and Adaptive Electrical Systems", date: "2024-10-09", description: "A technical webinar on modern electrical grid technologies.", image: "/Events/Illuminar.jpg" },
  ],
  "Computer Society (CS)": [
    { name: "AMONG US", date: "2024-10-26", description: "A fun, interactive gaming event for members.", image: "/Events/AmongUs.jpeg" },
    { name: "Elev8", date: "2024-08-11", description: "A hybrid event series designed to elevate technical skills.", image: "/Events/Elev8.jpeg" },
    { name: "Minute to Win It", date: "2024-10-03", description: "A series of quick and fun one-minute challenges.", image: "/Events/Min2Win.jpeg" },
    { name: "Music Production Using AI workshop", date: "2024-11-06", description: "Exploring the intersection of artificial intelligence and music.", image: "/Events/Music.jpeg" },
    { name: "Open Mic", date: "2024-04-30", description: "A platform for members to showcase their creative talents.", image: "/Events/OpenMic.jpeg" },
  ],
  "Signal Processing Society (SPS)": [
    { name: "Immersive Signals: Introduction to AR/VR", date: "2024-08-24", description: "A webinar exploring the world of Augmented and Virtual Reality.", image: "/events/demo.jpg" },
    { name: "Intro to FL Studio", date: "2024-11-13", description: "A beginner's workshop on music production with FL Studio.", image: "/events/demo.jpg" },
    { name: "Triathlon of Minds", date: "2024-09-30", description: "A multi-stage competition testing a range of mental skills.", image: "/Events/Quiz.jpg" },
  ],
  "Women in Engineering (WIE)": [
    { name: "ASCENDIA", date: "2024-10-18", description: "A two-day flagship event focused on empowerment and skill-building.", image: "/Events/Wie.jpg" },
    { name: "BASICS OF GAME DEVELOPMENT", date: "2024-04-04", description: "An introductory online session on game development concepts.", image: "/events/demo.jpg" },
    { name: "Ignitia", date: "2024-07-11", description: "An online event designed to spark innovation and creativity.", image: "/events/demo.jpg" },
    { name: "Origami Workshop", date: "2024-09-27", description: "A creative and relaxing workshop on the art of paper folding.", image: "/events/demo.jpg" },
    { name: "Redefining Success", date: "2024-03-09", description: "An inspiring online session discussing diverse career paths.", image: "/events/demo.jpg" },
    { name: "Stick-to-Bridge", date: "2024-10-04", description: "A hands-on engineering challenge to build bridges from sticks.", image: "/events/demo.jpg" },
    { name: "Triathlon", date: "2024-04-01", description: "A multi-event online competition testing various skills.", image: "/Events/Quiz.jpg" },
  ]
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