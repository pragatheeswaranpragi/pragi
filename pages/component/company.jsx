import React, { useState, useRef, useEffect } from "react";
// import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(1); // Default to second company
  const [animating, setAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const carouselRef = useRef(null);
  const autoSlideInterval = 6000; // 6 seconds per slide
  const progressRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const handleCompanySelect = (index) => {
    if (selectedCompany === index || animating) return;
    
    setAnimating(true);
    setSelectedCompany(index);
    setTimeout(() => setAnimating(false), 600);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  // Auto slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      
      // Reset and start progress bar animation
      setProgressWidth(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      progressIntervalRef.current = setInterval(() => {
        setProgressWidth(prev => {
          const newWidth = prev + (100 / (autoSlideInterval / 100));
          return newWidth > 100 ? 0 : newWidth;
        });
      }, 100);
      
      return () => {
        clearInterval(interval);
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      };
    } else {
      // Pause progress bar
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  }, [activeIndex, isPaused]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  // Handle touch events for mobile (swipe)
  useEffect(() => {
    const carousel = carouselRef.current;
    let touchStartX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      setIsPaused(true);
    };
    
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      // If swipe distance is significant enough
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      
      setTimeout(() => setIsPaused(false), autoSlideInterval);
    };
    
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [carouselRef.current, isTransitioning]);

  return (
    <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-medium mb-2 block">Professional Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A journey of innovation, growth, and impact in the tech industry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Fixed Company Tabs */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-4">Companies</h3>
              
              {experienceData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => handleCompanySelect(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 
                    ${selectedCompany === index 
                      ? "bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 shadow-sm" 
                      : "hover:bg-gray-50 dark:hover:bg-gray-750 border-l-4 border-transparent"
                    }`}
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${
                      selectedCompany === index 
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md" 
                        : "bg-gray-200 dark:bg-gray-700"
                    } flex items-center justify-center text-white font-bold text-lg`}>
                      {exp.company.charAt(0)}
                    </div>
                    
                    <div className="ml-4">
                      <h3 className={`font-semibold transition-all duration-300 ${
                        selectedCompany === index
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-gray-800 dark:text-gray-200"
                      }`}>
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap items-center mt-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{exp.role}</p>
                        <span className="mx-2 text-gray-300 dark:text-gray-600 hidden sm:inline">•</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-0">{exp.duration.split('(')[0].trim()}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Card */}
          <div className="lg:w-2/3" ref={carouselRef}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-[10px] bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/5 dark:to-purple-900/5 opacity-50"></div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 flex-grow">
                {experienceData.map((exp, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-500 ease-out ${
                      selectedCompany === index 
                        ? "opacity-100 translate-x-0" 
                        : selectedCompany > index 
                          ? "opacity-0 -translate-x-full absolute inset-0" 
                          : "opacity-0 translate-x-full absolute inset-0"
                    }`}
                    style={{ 
                      display: Math.abs(selectedCompany - index) > 1 ? 'none' : 'block',
                      transitionDelay: selectedCompany === index ? '100ms' : '0ms'
                    }}
                  >
                    <div className="p-6 sm:p-8 md:p-10 overflow-auto max-h-[70vh] lg:max-h-none scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                      {/* Company Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-4 sm:gap-5">
                          {/* Company Logo */}
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {exp.company.charAt(0)}
                          </div>
                          
                          <div>
                            <div className="flex items-center flex-wrap gap-3">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                {exp.company}
                              </h3>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                                {exp.role}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-3 text-gray-600 dark:text-gray-400">
                              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-1.5 text-gray-600 dark:text-gray-400">
                              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              <span className="text-sm">{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Technologies Badges - Top */}
                        <div className="flex flex-wrap gap-2 md:max-w-[280px]">
                          {getTechnologies(exp).map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects Section */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          Key Projects
                        </h4>
                        
                        {/* Enhanced Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          {exp.projects.map((project, idx) => (
                            <div 
                              key={idx}
                              className="relative bg-white dark:bg-gray-750 rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 group overflow-hidden"
                              style={{ animationDelay: `${idx * 150}ms` }}
                            >
                              {/* Improved decorative gradient corner */}
                              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/70 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-tr-xl rounded-bl-3xl"></div>
                              
                              <div className="relative z-10">
                                <h5 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                  {project.name}
                                </h5>
                                
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Controls */}
              <div className="relative z-20 py-5 px-6 sm:px-8 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <button 
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label="Previous company"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                <div className="flex space-x-3">
                  {experienceData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleCompanySelect(index)}
                      className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                        selectedCompany === index 
                          ? 'w-6 h-3 bg-blue-500 rounded-full ring-2 ring-blue-200 dark:ring-blue-900/30' 
                          : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full'
                      }`}
                      aria-label={`View ${experienceData[index].company}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-label="Next company"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to extract technologies from project descriptions
function getTechnologies(experience) {
  const techSet = new Set();
  
  // Common technologies to extract
  const techKeywords = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
    'Node.js', 'HTML', 'CSS', 'API'
  ];
  
  // Extract from company and role
  const companyAndRole = `${experience.company} ${experience.role}`;
  techKeywords.forEach(tech => {
    if (companyAndRole.includes(tech)) techSet.add(tech);
  });
  
  // Extract from project descriptions
  experience.projects.forEach(project => {
    techKeywords.forEach(tech => {
      if (project.description.includes(tech)) techSet.add(tech);
    });
  });
  
  return Array.from(techSet);
}

// Experience Data
const experienceData = [
  {
    company: "Padink Engineering Services",
    location: "Chennai, Tamilnadu",
    role: "UI/UX Designer & Front-End Developer",
    duration: "May 2019 - Jul 2021 (2 yrs 3 mos)",
    projects: [
      {
        name: "Padink Engineering Tracker",
        description:
          "A web-based tool for tracking project progress, developed in Next.js.",
      },
      {
        name: "SimsLabsGlobal",
        description: "A static website built with React.js (hooks).",
      },
      {
        name: "Preetha Foundation",
        description: "A React.js and Tailwind CSS-based static website.",
      },
    ],
  },
  {
    company: "Techfully",
    location: "Chennai, Tamilnadu",
    role: "React Developer",
    duration: "Aug 2021 - Mar 2023 (1 yr)",
    projects: [
      {
        name: "Terv",
        description:
          "An online training and assessment platform, developed using TypeScript.",
      },
      {
        name: "Docsauth",
        description:
          "A digital document processing app, built with React & TypeScript.",
      },
    ],
  },
  {
    company: "Ideas2It",
    location: "Chennai, Tamilnadu",
    role: "Senior Software Engineer",
    duration: "Mar 2023 - Present (2 yrs)",
    projects: [
      {
        name: "FP&A",
        description:
          "A financial planning & analytics platform built with React & TypeScript.",
      },
      {
        name: "SPICE",
        description:
          "The SPICE Admin Portal is a tool that enables workflows, medication databases, and lab test databases, and customize the platform at the region and account levels built with React & TypeScript.",
      },
    ],
  },
];
