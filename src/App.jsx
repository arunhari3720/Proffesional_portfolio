// src/App.jsx
import React from 'react';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import ProjectDetail from './sections/ProjectDetail';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
          },
        }}
      />

      <Routes>

        {/* Main Portfolio */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Project Detail */}
        <Route
          path="/projects/:id"
          element={
            <>
              <Navbar />
              <ProjectDetail />
              <Footer />
            </>
          }
        />

      </Routes>

    </div>
  );
}

export default App;