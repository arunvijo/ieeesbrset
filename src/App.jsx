import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Execom from './components/Execom'
import Societies from './components/Societies'
import StudentAchievements from './components/StudentAchievements'
import SBAchievements from './components/SBAchievements'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
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
  )
}

export default App