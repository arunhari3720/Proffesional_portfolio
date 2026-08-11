// src/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { title: 'Enterprise CRM', desc: 'Comprehensive customer relationship management with analytics.', tech: ['React', 'Node', 'MongoDB'], img: 'https://placehold.co/600x400/2563EB/FFFFFF?text=CRM' },
  { title: 'Attendance System', desc: 'Real-time attendance tracking with facial recognition.', tech: ['React', 'Express', 'JWT'], img: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Attendance' },
  { title: 'Employee Management', desc: 'Full-featured HR platform with payroll & leaves.', tech: ['React', 'Node', 'Mongoose'], img: 'https://placehold.co/600x400/06B6D4/FFFFFF?text=Employee' },
  { title: 'Birthday Management', desc: 'Automated birthday reminders & greetings.', tech: ['React', 'Node', 'MongoDB'], img: 'https://placehold.co/600x400/2563EB/FFFFFF?text=Birthday' },
  { title: 'Finance Dashboard', desc: 'Interactive dashboard for expense tracking & insights.', tech: ['React', 'Express', 'Chart.js'], img: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Finance' },
  { title: 'Student Requisition', desc: 'Digital portal for student requests & approvals.', tech: ['React', 'Node', 'MongoDB'], img: 'https://placehold.co/600x400/06B6D4/FFFFFF?text=Student' },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Featured <span className="text-primary-600">Projects</span></h2>
          <p className="section-sub mx-auto">Enterprise-grade applications built with MERN stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="bg-white rounded-3xl shadow-soft overflow-hidden border border-gray-100 group hover:shadow-xl transition-all">
              <div className="h-48 bg-gray-200 overflow-hidden"><img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.map(t => <span key={t} className="badge-pill text-xs">{t}</span>)}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="#" className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm font-medium"><Github size={16}/> Code</a>
                  <a href="#" className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm font-medium"><ExternalLink size={16}/> Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;