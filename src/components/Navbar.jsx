import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const navLinks = [
    { label: 'Home', href: '#Header' },
    { label: 'About', href: '#About' },
    { label: 'Execom', href: '#Execom' },
    { label: 'Gallery', href: '#Gallery' }
  ];

  return (
    <header className='absolute top-0 left-0 w-full z-20'>
      <div className='container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32'>
        <img src={assets.logo} alt='IEEE Logo' className='h-10 w-auto' />
        
        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 text-white font-medium items-center'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='hover:text-blue-400 transition-colors'
            >
              {link.label}
            </a>
          ))}
          <a
            href="#Contact"
            className='ml-6 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition'
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className='md:hidden w-7 h-7 cursor-pointer'
          alt='Menu'
        />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-white z-30 transition-transform duration-300 transform ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className='flex justify-end p-6'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt='Close'
            className='w-6 h-6 cursor-pointer'
          />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-10 text-lg font-semibold text-gray-800'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => setShowMobileMenu(false)}
              href={link.href}
              className='px-4 py-2 hover:bg-gray-200 rounded-full transition'
            >
              {link.label}
            </a>
          ))}
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className='mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'
          >
            Contact Us
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
