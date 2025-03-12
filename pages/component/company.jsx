import React from "react";

export default function Experience() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight sm:text-3xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of innovation, growth, and impact in the tech industry.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Company & Location */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  {/* <FaBriefcase className="text-gray-800 dark:text-gray-200 text-lg" /> */}
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  {/* <FaMapMarkerAlt /> */}
                  {exp.location}
                </div>
              </div>

              {/* Role & Duration */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
                  {exp.role}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </p>
              </div>

              {/* Projects */}
              <ul className="mt-4 space-y-4">
                {exp.projects.map((project, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 border-l-4 border-gray-800 dark:border-gray-400 pl-4"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {project.name}:
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
    duration: "Mar 2023 - Present (1.3 yrs)",
    projects: [
      {
        name: "FP&A",
        description:
          "A financial planning & analytics platform built with React & TypeScript.",
      },
      {
        name: "SPICE",
        description:
          "An open-source healthcare platform for community & primary care.",
      },
    ],
  },
];
