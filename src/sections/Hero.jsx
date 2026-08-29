// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Briefcase, Code, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import avatarIllustration from '../assets/avatar1.png';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
  <section
  ref={ref}
  id="home"
  className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-white via-primary-50/20 to-indigo-50/20"
>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">Available for Work</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hello, <br />I'm <span className="text-primary-600">Arun Hariharan G</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl md:text-2xl font-medium text-gray-700 flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Full Stack Developer</span>
              <span className="text-gray-400">|</span>
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer', 1500,
                  'React Developer', 1500,
                  'Node Developer', 1500,
                  'Backend Engineer', 1500,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                className="text-primary-700 font-semibold"
              />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }} className="text-gray-500 max-w-lg mx-auto lg:mx-0 text-base">
              Crafting robust, scalable web applications with modern MERN stack. 1+ year of experience delivering high-quality digital solutions.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="primary-btn">View Projects</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </motion.div>

            {/* Social icons */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="flex gap-4 justify-center lg:justify-start pt-2">
              <a href="https://github.com/arunhari3720" className="text-gray-500 hover:text-primary-600 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/arun-hariharan-2226b5211/" className="text-gray-500 hover:text-primary-600 transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:arungobi307@gmail.com" className="text-gray-500 hover:text-primary-600 transition-colors"><Mail size={24} /></a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6 }} className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-4">
              <div className="stat-card"><span className="block text-2xl font-bold text-primary-600">20+</span><span className="text-sm text-gray-500">Projects</span></div>
              <div className="stat-card"><span className="block text-2xl font-bold text-primary-600">1+</span><span className="text-sm text-gray-500">Years</span></div>
              <div className="stat-card"><span className="block text-2xl font-bold text-primary-600">100%</span><span className="text-sm text-gray-500">Satisfaction</span></div>
            </motion.div>
          </div>

          {/* Right illustration */}
         {/* Right Illustration */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="flex-1 flex justify-center items-center relative"
>
  {/* Soft Background Glow */}
  <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/10 blur-[80px]" />

  {/* Card */}
  <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-400/40 to-cyan-400/30 shadow-xl">

    <div className="rounded-3xl bg-white/90 backdrop-blur-md overflow-hidden border border-blue-100">

      <img
        src={avatarIllustration}
        alt="Arun Hariharan"
        className="w-[400px] h-[500px] object-cover"
      />

    </div>
  </div>

  {/* Experience */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="absolute top-10 -left-4 bg-white rounded-xl shadow-lg px-4 py-2"
  >
    <p className="text-[11px] text-gray-500">Experience</p>
    <h3 className="text-lg font-bold text-blue-600">1+ Years</h3>
  </motion.div>

  {/* MERN */}
  <motion.div
    animate={{ y: [0, 6, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
    className="absolute bottom-10 -right-4 bg-white rounded-xl shadow-lg px-4 py-2"
  >
    <p className="text-[11px] text-gray-500">MERN Stack</p>
    <h3 className="text-lg font-bold text-indigo-600">Developer</h3>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;