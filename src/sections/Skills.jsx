// src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = {
  Frontend: ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS', 'Ant Design'],
  Backend: ['Node', 'Express', 'REST API', 'JWT'],
  Database: ['MongoDB', 'Mongoose'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Axios', 'Cloudinary']
};

const SkillBar = ({ name, level }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm font-medium"><span>{name}</span><span className="text-primary-600">{level}%</span></div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
        <motion.div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full" initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ duration: 0.8, ease: "easeOut" }}></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const levels = { React: 92, JavaScript: 88, Tailwind: 90, HTML: 85, CSS: 80, 'Ant Design': 75, Node: 85, Express: 82, 'REST API': 88, JWT: 78, MongoDB: 80, Mongoose: 75, Git: 85, GitHub: 82, 'VS Code': 90, Postman: 80, Axios: 78, Cloudinary: 70 };

  return (
    <section id="skills" className="py-24 bg-gray-50/60">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">My <span className="text-primary-600">Skills</span></h2>
          <p className="section-sub mx-auto">Technologies & tools I work with to bring ideas to life.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <motion.div key={category} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="bg-white rounded-3xl shadow-soft p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">{category}</h3>
              {items.map(skill => <SkillBar key={skill} name={skill} level={levels[skill] || 75} />)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;