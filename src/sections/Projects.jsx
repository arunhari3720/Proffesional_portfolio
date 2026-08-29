import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'pustaka-spa',
    title: 'Single Page Application - Pustaka',
    shortDesc:
      'Modernized the Pustaka digital eBook platform from a multi-page application into a single-page application.',
    description:
      'Pustaka is a digital eBook platform that needed to move from a traditional multi-page architecture to a modern single-page application.',
    tech: ['React.js', 'Node.js', 'AWS Lambda', 'API Gateway'],
    image:
      'https://placehold.co/600x400/2563EB/FFFFFF?text=Pustaka',
    year: '2023',
    github: null,
    demo: null,
  },

  {
    id: 'student-requisition',
    title: 'Student Requisition Portal',
    shortDesc:
      'Online portal for students to submit and track institutional document requests.',
    description:
      'A student requisition portal that allows students to submit document requests online and track their requests.',
    tech: ['Python', 'Django', 'SQLite'],
    image:
      'https://placehold.co/600x400/4F46E5/FFFFFF?text=Student+Requisition',
    year: '2022',
    github: 'https://github.com/arunhari3720/student-req-system',
    demo: null,
  },

  {
    id: 'crm-admin-dashboard',
    title: 'CRM Admin Dashboard',
    shortDesc:
      'Modern administrative dashboard for managing CRM-related business information.',
    description:
      'A responsive CRM administration dashboard designed to provide a centralized interface for managing customer and business-related information.',
    tech: ['React', 'JavaScript', 'Dashboard UI'],
    image:
      'https://placehold.co/600x400/06B6D4/FFFFFF?text=CRM+Dashboard',
    year: '2026',
    github: null,
    demo: 'https://arunhari3720.github.io/crm-admin-dashboard/',
  },

  {
    id: 'birthday-surprise',
    title: 'Birthday Surprise',
    shortDesc:
      'Interactive birthday surprise website with a personalized digital experience.',
    description:
      'An interactive birthday surprise website created to provide a personalized and memorable digital birthday experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://placehold.co/600x400/EC4899/FFFFFF?text=Birthday+Surprise',
    year: '2026',
    github: null,
    demo: 'https://arunhari3720.github.io/BIRTHDAY-SURPRISE/',
  },

  {
    id: 'ms-paints',
    title: 'MS Paints',
    shortDesc:
      'Responsive client website developed for MS Paints.',
    description:
      'A client-focused business website developed for MS Paints with a clean and responsive interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://placehold.co/600x400/F59E0B/FFFFFF?text=MS+Paints',
    year: '2026',
    github: null,
    demo: 'https://arunhari3720.github.io/MS-paints/',
  },

  {
    id: 'broadcast-encryption',
    title: 'Contributory Broadcast Encryption',
    shortDesc:
      'Cryptographic project for secure message broadcasting to selected users.',
    description:
      'An academic cryptography project implementing a model for securely broadcasting messages to selected users.',
    tech: ['Python', 'Django'],
    image:
      'https://placehold.co/600x400/7C3AED/FFFFFF?text=Encryption',
    year: '2022',
    github: null,
    demo: null,
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container-custom">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured{' '}
            <span className="text-primary-600">
              Projects
            </span>
          </h2>

          <p className="section-sub mx-auto">
            Enterprise-grade applications built with MERN stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="block"
            >

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0 }
                    : {}
                }
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-3xl shadow-soft overflow-hidden border border-gray-100 group hover:shadow-xl transition-all"
              >

                {/* EXISTING UI — unchanged */}

                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {p.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {p.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="badge-pill text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary-600 hover:text-primary-800 flex items-center gap-1 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}

                  </div>

                </div>
              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;