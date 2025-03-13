'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 relative inline-block">
            <span className="relative z-10">Portfolio Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Showcasing my expertise through innovative solutions and technologies
          </p>
        </div>

        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.2)" 
              }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 h-full flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                    {project.category}
                  </span>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-600"></span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{project.description}</p>
                <div className="flex justify-end mt-auto">
                  {project.disabled ? (
                    <span className="inline-flex items-center px-3 py-1.5 text-xs text-white bg-gray-400 opacity-75 cursor-not-allowed rounded-md">
                      {project.button}
                    </span>
                  ) : (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-md hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 touch-action-manipulation"
                    >
                      <span className="flex items-center">
                      {project.button}
                      <svg
                        className="w-3 h-3 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
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
