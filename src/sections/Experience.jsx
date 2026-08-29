// src/sections/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  { company: 'Hurryep Technologies', role: 'Full Stack Developer', duration: '2026 - Present', desc: 'Building enterprise CRM and HR platforms using MERN stack, leading frontend architecture.' },
  { company: 'Freelance Developer', role: 'Mern stack devloper', duration: '2023 - 2026', desc: 'Developed responsive UIs with React & Tailwind, integrated REST APIs and JWT auth.' },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-gray-50/60">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Work <span className="text-primary-600">Experience</span></h2>
          <p className="section-sub mx-auto">Professional journey & contributions.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.2 }} className="bg-white rounded-3xl shadow-soft p-8 border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-xl transition">
              <div className="md:w-1/4"><Briefcase className="text-primary-500" size={32}/></div>
              <div><h3 className="text-xl font-bold">{exp.role}</h3><p className="text-primary-600 font-medium">{exp.company}</p><p className="text-sm text-gray-400">{exp.duration}</p><p className="text-gray-600 mt-2">{exp.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;