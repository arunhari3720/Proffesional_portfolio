// src/sections/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, BadgeCheck } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-title">Achievements & <span className="text-primary-600">Badges</span></h2>
          <p className="section-sub mx-auto">Certifications, hackathons, and recognitions.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[{ icon: <Award size={32} />, label: 'MERN Stack Certified' }, { icon: <Trophy size={32} />, label: 'Hackathon Winner 2024' }, { icon: <BadgeCheck size={32} />, label: 'Top 10% on GitHub' }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i*0.1 }} className="glass-card rounded-3xl p-8 text-center border border-gray-100 shadow-soft hover:shadow-xl transition">
              <div className="text-primary-500 flex justify-center mb-3">{item.icon}</div>
              <h4 className="font-semibold">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;