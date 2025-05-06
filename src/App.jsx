import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Execom from './components/Execom';
import Societies from './components/Societies';
import StudentAchievements from './components/StudentAchievements';
import SBAchievements from './components/SBAchievements';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Profile from './components/Profile';
import EventDetail from './components/EventDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => (
  <>
    <Header />
    <About />
    <Societies />
    <SBAchievements />
    <StudentAchievements />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ToastContainer />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/execom" element={<Execom />} />
          <Route path="/profile/:memberId" element={<Profile />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
