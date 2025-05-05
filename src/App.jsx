import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Wrap with BrowserRouter
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <div
        className='w-full min-h-screen overflow-hidden'
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Toast Notifications */}
        <ToastContainer />

        {/* All Sections */}
        <Header />
        <About />
        <Societies />
        <Execom />
        <Gallery />
        <SBAchievements />
        <StudentAchievements />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
