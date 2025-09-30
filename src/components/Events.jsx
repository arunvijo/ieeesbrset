import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// --- DATA (Unchanged Upcoming, Updated Past) ---
const upcomingEvents = [
  {
    name: 'AI Symposium 2025',
    date: 'October 15, 2025',
    description: 'A deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8'
  },
  {
    name: 'TechHack 2025',
    date: 'November 01, 2025',
    description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8'
  }
];

// Replaced all demo.jpg with relevant, free-to-use images
const pastEvents = {
  "Student Branch (SB)": [
    { name: "Annual General Meeting 2024", date: "2024-04-02", description: "Reviewing the year's progress and planning for the future.", image: "/Events/AGM.jpg" },
    { name: "DEBAITE", date: "2024-11-11", description: "An exciting debate competition for engineering students.", image: "/Events/DebAIte.jpg" },
    { name: "Game Jam", date: "2024-09-29", description: "A multi-day event focused on collaborative game development.", image: "/Events/GameJam.jpg" },
    { name: "Learn From Scratch", date: "2024-09-29", description: "A foundational workshop for beginners on key tech skills.", image: "/Events/Scratch.jpg" },
    { name: "MD Session", date: "2024-03-23", description: "An insightful Membership Development session for members.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" },
    { name: "Tink-her-Hack 2.0", date: "2024-03-02", description: "A hackathon promoting innovation and problem-solving among women.", image: "/Events/Tinkerhack.png" },
    { name: "Beach Cleanup, YESS", date: "2024-07-15", description: "An environmental initiative as part of the YESS program.", image: "https://images.unsplash.com/photo-1617936234372-4318868f0b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Circuit Designing, YESS", date: "2024-08-24", description: "A hands-on workshop on the fundamentals of circuit design.", image: "https://images.unsplash.com/photo-1581092921440-aa96a4a2c5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
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
    { name: "Immersive Signals: Introduction to AR/VR", date: "2024-08-24", description: "A webinar exploring the world of Augmented and Virtual Reality.", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80" },
    { name: "Intro to FL Studio", date: "2024-11-13", description: "A beginner's workshop on music production with FL Studio.", image: "https://images.unsplash.com/photo-1616419499421-99459523e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Triathlon of Minds", date: "2024-09-30", description: "A multi-stage competition testing a range of mental skills.", image: "/Events/Quiz.jpg" },
  ],
  "Women in Engineering (WIE)": [
    { name: "ASCENDIA", date: "2024-10-18", description: "A two-day flagship event focused on empowerment and skill-building.", image: "/Events/Wie.jpg" },
    { name: "BASICS OF GAME DEVELOPMENT", date: "2024-04-04", description: "An introductory online session on game development concepts.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Ignitia", date: "2024-07-11", description: "An online event designed to spark innovation and creativity.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" },
    { name: "Origami Workshop", date: "2024-09-27", description: "A creative and relaxing workshop on the art of paper folding.", image: "https://images.unsplash.com/photo-1596193422492-749d017d8aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Redefining Success", date: "2024-03-09", description: "An inspiring online session discussing diverse career paths.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" },
    { name: "Stick-to-Bridge", date: "2024-10-04", description: "A hands-on engineering challenge to build bridges from sticks.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { name: "Triathlon", date: "2024-04-01", description: "A multi-event online competition testing various skills.", image: "/Events/Quiz.jpg" },
  ]
};

const Events = () => {
  return (
    <div className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-[#f8fbff] to-[#e9f1fb] text-gray-900 overflow-hidden">
        {/* Note: The <Navbar /> was removed from here because it's handled by the main App Layout, preventing duplicates. */}

        {/* --- STYLED BANNER --- */}
        <div className='relative w-screen h-[400px] -mx-6 md:-mx-20 lg:-mx-32 -mt-24 mb-24 overflow-hidden'>
            <motion.img 
                src="/banner.png" 
                alt="Events Banner" 
                className="absolute inset-0 w-full h-full object-cover" 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.h1 
                    className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    IEEE <span className="text-blue-700">Events</span>
                </motion.h1>
                <motion.p 
                    className="text-gray-300 mt-4 text-lg max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Discover our upcoming workshops, seminars, and competitions. Explore our rich history of past events.
                </motion.p>
            </div>
        </div>

        {/* --- UPCOMING EVENTS (STYLED) --- */}
        <section className='mb-24'>
            <motion.h2
                className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight mb-20 text-center w-full"
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            >
                Upcoming <span className="text-blue-700">Events</span>
                <motion.div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-700 rounded-full"
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.9, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.8 }}
                />
            </motion.h2>
            <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-12' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {upcomingEvents.map((event, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 overflow-hidden">
                        <div className="overflow-hidden h-60 relative">
                            <motion.img src={event.image} alt={event.name} className="w-full h-full object-cover transform group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className='p-6'>
                            <p className='text-sm text-blue-700 font-semibold mb-2'>{event.date}</p>
                            <h4 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors'>{event.name}</h4>
                            <p className='text-gray-600 mb-6 text-sm leading-relaxed'>{event.description}</p>
                            <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition shadow-md hover:shadow-lg font-semibold'>
                                Register Now
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>

        {/* --- PAST EVENTS (STYLED & CATEGORIZED) --- */}
        <section className='mb-16'>
            <motion.h2
                className="text-5xl font-extrabold text-gray-800 inline-block relative tracking-tight mb-20 text-center w-full"
                initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            >
                Our <span className="text-blue-700">Past Events</span>
                <motion.div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-700 rounded-full"
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.9, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.8 }}
                />
            </motion.h2>
            {Object.entries(pastEvents).map(([society, events]) => (
                <div key={society} className='mb-16'>
                    <h3 className='text-3xl font-bold mb-8 text-blue-900 border-b-2 border-blue-200 pb-2'>{society}</h3>
                    <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                        {events.map((event, index) => (
                            <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-blue-600/60 overflow-hidden">
                                <div className="overflow-hidden h-52 relative">
                                    <motion.img src={event.image} alt={event.name} className="w-full h-full object-cover transform group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className='p-5'>
                                    <p className='text-xs text-gray-500 mb-1'>{event.date}</p>
                                    <h5 className='text-md font-bold text-gray-800 group-hover:text-blue-700 transition-colors leading-tight'>{event.name}</h5>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ))}
        </section>
    </div>
  );
};

export default Events;