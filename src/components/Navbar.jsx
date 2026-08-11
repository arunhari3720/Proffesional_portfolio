// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-2' : 'bg-white/70 backdrop-blur-sm py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-extrabold text-primary-600 tracking-tight">AG</span>
          <span className="text-xs font-medium text-gray-400 ml-1 hidden sm:inline">portfolio</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <ScrollLink key={link} to={link.toLowerCase()} smooth={true} duration={500} offset={-70} className="cursor-pointer hover:text-primary-600 transition-colors">{link}</ScrollLink>
          ))}
          <a href="/resume.pdf" download className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-primary-200 transition">Download Resume</a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
            <div className="container-custom py-6 flex flex-col gap-4 text-center">
              {navLinks.map(link => (
                <ScrollLink key={link} to={link.toLowerCase()} smooth={true} duration={500} offset={-70} className="text-lg font-medium hover:text-primary-600" onClick={() => setIsOpen(false)}>{link}</ScrollLink>
              ))}
              <a href="/resume.pdf" download className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold w-fit mx-auto shadow-md">Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;