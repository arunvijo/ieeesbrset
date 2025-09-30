import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUsers, FiMapPin, FiArrowLeft } from 'react-icons/fi';

// --- ANIMATION VARIANTS ---
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

// --- DATA ---
const upcomingEvents = [
  {
    name: 'AI Symposium 2025',
    date: 'October 15, 2025',
    description: 'Join us for a deep dive into the future of Artificial Intelligence, featuring talks from industry experts and IEEE researchers. This full-day event includes keynote sessions, technical workshops, and networking opportunities with pioneers in the AI field.',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
    schedule: "10:00 AM - 5:00 PM",
    speakers: "Dr. Evelyn Reed, Prof. Kenji Tanaka",
    location: "RSET Convention Centre, Kochi"
  },
  {
    name: 'TechHack 2025',
    date: 'November 01, 2025',
    description: 'A 48-hour hackathon powered by IEEE, bringing together student developers, designers, and innovators to solve real-world challenges. Compete for amazing prizes, attend mentorship sessions, and build something incredible.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    registerLink: 'https://forms.gle/kHf5oDeBJhGssJhu8',
    schedule: "Starts 6:00 PM Friday, ends 6:00 PM Sunday",
    speakers: "Mentors from Google, Microsoft, & more",
    location: "Online / RSET Campus"
  }
];

const EventDetail = () => {
  const { eventId } = useParams();
  const event = upcomingEvents[parseInt(eventId)];

  if (!event) {
    return (
        // UPDATED: Removed background classes
        <div className="relative py-24 px-6 md:px-20 lg:px-32 min-h-screen flex justify-center items-center">
            <motion.div
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-12 relative z-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Not Found</h1>
                <p className="text-lg text-gray-600">The event you are looking for does not exist.</p>
                <Link to="/events" className="mt-8 inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition shadow-lg font-semibold">
                    <FiArrowLeft className="mr-2"/>
                    Back to Events
                </Link>
            </motion.div>
        </div>
    );
  }

  return (
    // UPDATED: Removed background classes
    <div className="relative py-24 px-6 md:px-20 lg:px-32 text-gray-900 min-h-screen overflow-hidden">
        {/* Radial glow is removed as it was part of the light theme. Can be added back if desired. */}
        
        <div className="max-w-5xl mx-auto relative z-10">
            {/* Event Details Card */}
            <motion.div 
                className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 md:p-12 rounded-2xl shadow-2xl mb-16"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="overflow-hidden rounded-xl mb-8 shadow-lg" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <img src={event.image} alt={event.name} className="w-full h-64 md:h-96 object-cover" />
                </motion.div>
                
                <motion.h1 variants={itemVariant} className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">{event.name}</motion.h1>
                <motion.p variants={itemVariant} className="text-gray-600 text-lg leading-relaxed mb-8">{event.description}</motion.p>
                
                <hr className="my-8 border-gray-200" />

                {/* Richer Content Sections */}
                <motion.div variants={itemVariant} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
                    <div className="flex items-center gap-4">
                        <FiCalendar className="text-blue-700 text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">Date</h3>
                            <p>{event.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FiClock className="text-blue-700 text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">Schedule</h3>
                            <p>{event.schedule}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FiUsers className="text-blue-700 text-3xl flex-shrink-0" />
                        <div>
                            <h3 className="font-bold">Key Speakers</h3>
                            <p>{event.speakers}</p>
                        </div>
                    </div>
                </motion.div>
                 <motion.div variants={itemVariant} className="flex items-center gap-4 mt-6 text-gray-700">
                    <FiMapPin className="text-blue-700 text-3xl flex-shrink-0" />
                    <div>
                        <h3 className="font-bold">Location</h3>
                        <p>{event.location}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Registration Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Register for the Event</h2>
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-2">
                    <iframe
                        src={event.registerLink}
                        title="Registration Form"
                        className="w-full h-[700px] border-0 rounded-lg"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default EventDetail;