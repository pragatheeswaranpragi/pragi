'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    name: 'Pragi Prebuilt TailwindCSS',
    link: 'https://pragi.vercel.app/',
    image: '/img/pragipage.png',
    category: 'Pre-Built Components',
    button: 'Find Out',
    disabled: false,
    description:
      'Designed and developed for commonly used components in projects, such as navbars, side menus, and alert message UIs.',
  },
  {
    name: 'Seran',
    link: 'https://dribbble.com/shots/14787008-Electric-vehicle-website',
    image: '/img/seran.png',
    category: 'UI/UX Design',
    button: 'Find Out',
    disabled: false,
    description:
      'Web design for an Electric Vehicle company with vector images and custom icons, designed flawlessly in Adobe XD.',
  },
  {
    name: 'Five Star Drop Taxi',
    link: 'https://www.fivestardroptaxi.in/',
    image: '/img/five.png',
    category: 'Local Client',
    button: 'Not Available',
    disabled: true,
    description:
      'A booking platform for drop taxi services via WhatsApp and phone call, featuring cool animations.',
  },
  {
    name: 'Month End Application',
    link: 'https://monthend.vercel.app/',
    image: '/img/monthend.png',
    category: 'Product',
    button: 'Find Out',
    disabled: false,
    description:
      'Developed to estimate monthly expenses and provide useful financial advice.',
  },
];

export default function OwnProjects() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Own Projects
        </h2>
        <p className="mt-4 text-center text-gray-600 text-lg">
          Developing my career by learning new technologies
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover border-b border-gray-200"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-indigo-600 uppercase">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="mt-4 text-gray-600">{project.description}</p>
                <div className="flex justify-end py-2">
                  {project.disabled ? (
                    <span className="inline-flex items-center px-6 py-2 mt-6 text-white bg-gray-400 cursor-not-allowed rounded-lg">
                      {project.button}
                    </span>
                  ) : (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      disabled={project.disabled}
                  className={
                    `inline-flex items-center px-6 py-2 mt-6 text-white ${project.disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300'}`
                  }
                >
                  <span className="flex items-center justify-center bg-indigo-600 text-white rounded-lg px-4 py-2">
                    {project.button}
                    <svg
                      className="w-5 h-5 ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
