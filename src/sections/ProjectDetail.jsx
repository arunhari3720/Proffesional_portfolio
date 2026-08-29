import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectDetails = [
  {
    id: 'pustaka-spa',

    overview:
      'Pustaka is a digital eBook platform that was modernized from a traditional multi-page application into a scalable single-page application.',

    detailedDescription:
      'The project focused on improving the overall user experience by reducing unnecessary page reloads and creating a smoother navigation experience. The application was redesigned around a component-based architecture using React.js.',

    challenges: [
      'Migrating the existing multi-page architecture',
      'Improving application performance',
      'Creating reusable React components',
      'Supporting a growing collection of eBooks',
    ],

    solution:
      'A modern React-based SPA architecture was implemented with API-driven communication and serverless backend services.',

    features: [
      'Single-page navigation',
      'eBook browsing',
      'Responsive user interface',
      'API-based data communication',
      'Scalable backend architecture',
    ],
  },

  {
    id: 'student-requisition',

    overview:
      'A web-based student requisition system designed to simplify institutional document request workflows.',

    detailedDescription:
      'Students can submit requests online instead of depending on manual processes. Administrators can review, approve and manage submitted requests through the system.',

    challenges: [
      'Digitizing manual request processes',
      'Managing student requests',
      'Providing request tracking',
      'Creating an administrative workflow',
    ],

    solution:
      'A Django-based application was developed to manage student requests and administrative processing.',

    features: [
      'Online request submission',
      'Request tracking',
      'Administrative approval',
      'Request management',
    ],
  },

  {
    id: 'crm-admin-dashboard',

    overview:
      'A modern CRM administration dashboard designed to centralize business and customer-related information.',

    detailedDescription:
      'The dashboard provides an organized interface for administrators to manage CRM information through reusable UI components and responsive layouts.',

    challenges: [
      'Designing a clean admin interface',
      'Organizing CRM information',
      'Maintaining responsive layouts',
    ],

    solution:
      'A component-based React dashboard was developed with a responsive and reusable UI structure.',

    features: [
      'Dashboard overview',
      'CRM data management',
      'Responsive interface',
      'Reusable components',
    ],
  },

  {
    id: 'birthday-surprise',

    overview:
      'An interactive birthday surprise website designed to create a personalized digital experience.',

    detailedDescription:
      'The website combines animations, visual elements and interactive sections to create an engaging and memorable birthday experience.',

    challenges: [
      'Creating an engaging experience',
      'Implementing smooth animations',
      'Designing responsive sections',
    ],

    solution:
      'A lightweight frontend implementation using HTML, CSS and JavaScript was created with interactive animations.',

    features: [
      'Interactive sections',
      'Animations',
      'Responsive design',
      'Personalized content',
    ],
  },

  {
    id: 'ms-paints',

    overview:
      'A responsive business website developed for MS Paints to establish a professional online presence.',

    detailedDescription:
      'The website presents the company and its offerings through a clean interface optimized for different screen sizes.',

    challenges: [
      'Creating a professional business presence',
      'Maintaining responsive layouts',
      'Presenting company information clearly',
    ],

    solution:
      'A responsive frontend website was developed using HTML, CSS and JavaScript.',

    features: [
      'Responsive design',
      'Business information',
      'Product presentation',
      'Clean navigation',
    ],
  },

  {
    id: 'broadcast-encryption',

    overview:
      'An academic cryptography project focused on securely broadcasting messages to selected users.',

    detailedDescription:
      'The project explored secure key distribution and encryption techniques for broadcasting messages while reducing unnecessary cryptographic overhead.',

    challenges: [
      'Secure message distribution',
      'Key management',
      'Reducing ciphertext overhead',
      'Creating an easy-to-use interface',
    ],

    solution:
      'A Python and Django-based implementation was created to demonstrate the encryption and decryption workflow.',

    features: [
      'Message encryption',
      'Secure key distribution',
      'Message decryption',
      'User-based message broadcasting',
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projectDetails.find(
    (item) => item.id === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container-custom">

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-gray-500 mb-10"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="max-w-4xl">

          <h1 className="text-4xl font-bold">
            Project Details
          </h1>

          <p className="text-gray-500 mt-3">
            {project.overview}
          </p>

          <div className="mt-10">

            <h2 className="text-2xl font-bold">
              Overview
            </h2>

            <p className="text-gray-600 leading-8 mt-4">
              {project.detailedDescription}
            </p>

            <h2 className="text-2xl font-bold mt-10">
              Challenges
            </h2>

            <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-10">
              Solution
            </h2>

            <p className="text-gray-600 leading-8 mt-4">
              {project.solution}
            </p>

            <h2 className="text-2xl font-bold mt-10">
              Key Features
            </h2>

            <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;