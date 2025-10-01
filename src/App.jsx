import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Execom from './components/Execom';
import Societies from './components/Societies';
import Navbar from './components/Navbar';
import Events from './components/Events';
import Profile from './components/Profile';
import EventDetail from './components/EventDetails';
import Newsletters from './components/Newsletters';
// UPDATED: Import the new unified Announcements component
import Announcements from './components/Announcements';
import IEEEMembership from './components/IEEEMembership';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => (
  <>
    <Header />
    <About />
    <IEEEMembership />
    <Societies />
    {/* UPDATED: Replaced SBAchievements and StudentAchievements with the new Announcements component */}
    <Announcements />
    <Newsletters />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

// Layout component to conditionally apply background (No changes needed here)
const Layout = ({ children }) => {
  const location = useLocation();
  const noBgPages = ['/events', '/execom'];
  // A check to see if the current path starts with /event/
  const isEventDetailPage = location.pathname.startsWith('/event/');
  const isNoBg = noBgPages.includes(location.pathname) || isEventDetailPage;


  return (
    <div
      className="w-full min-h-screen overflow-hidden"
      style={
        !isNoBg
          ? {
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('/bg.jpg')",
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <ToastContainer />
      <Navbar />
      {children}
    </div>
  );
};

// Main App component (No changes needed here)
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/execom" element={<Execom />} />
          <Route path="/profile/:memberId" element={<Profile />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;