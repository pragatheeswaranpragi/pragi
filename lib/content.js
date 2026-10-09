export const profile = {
  name: "Pragatheeswaran Kasinathan",
  email: "pragatheespragi98@gmail.com",
  url: "https://pragatheeswaran.vercel.app",
  linkedin: "https://www.linkedin.com/in/pragatheeswarank/",
  github: "https://github.com/pragatheeswaranpragi",
};
export const projects = [
  {
    name: "SPICE 2.0",
    category: "Healthcare / Front-end ownership",
    summary:
      "Rebuilding a healthcare platform with a foundation that can grow with its clinical workflows.",
    context:
      "SPICE supports clinical and administrative workflows in low-resource settings. After contributing to SPICE 1.0, I took ownership of the SPICE 2.0 front-end redevelopment.",
    contributions: [
      "Re-architected and rebuilt the front end using modern React and reusable modules.",
      "Introduced dynamic forms driven by FHIR-mapped JSON, allowing shared UI to support different workflows.",
      "Audited deprecated dependencies and used React Testing Library to support maintainability.",
    ],
    tech: ["React", "TypeScript", "FHIR", "Redux-Saga", "MUI"],
    visual: "healthcare",
    visualLabel: "SPICE / 2.0",
  },
  {
    name: "MSCIQ",
    category: "FinTech / Enterprise interfaces",
    summary:
      "Making complex financial planning data easier to navigate, edit and work with.",
    context:
      "MSCIQ is a financial planning and analysis tool for finance teams working with data models. My focus was the spreadsheet-like experience and the structure behind it.",
    contributions: [
      "Built spreadsheet-like interfaces with React and Jspreadsheet for financial use cases.",
      "Integrated nested datasets with MUI TreeView for clearer navigation.",
      "Implemented modular state management with Zustand and reusable enterprise UI components.",
    ],
    tech: ["React", "TypeScript", "Zustand", "Jspreadsheet", "Jest"],
    visual: "finance",
    visualLabel: "MSCIQ / FP&A",
  },
  {
    name: "LegacyLeap",
    category: "Developer tools / IDE extension",
    summary:
      "Helping engineers review AI-suggested code changes and understand their impact.",
    context:
      "LegacyLeap is an AI-enhanced IDE extension for legacy code modernization. I worked on the interface that helps engineers compare transformations and inspect areas that need attention.",
    contributions: [
      "Developed a real-time code diff view comparing original code with suggested transformations.",
      "Created an Impact View heatmap to visualize legacy hotspots.",
      "Integrated the experience into VSCode using the Extension API, with attention to runtime performance.",
    ],
    tech: ["TypeScript", "VSCode Extension API", "CSS Modules"],
    visual: "developer",
    visualLabel: "LEGACYLEAP / IDE",
  },
];
export const experience = [
  {
    company: "Ideas2IT",
    period: "Mar 2023 — Present",
    role: "Senior Software Engineer → Technical Analyst",
    summary:
      "Front-end ownership across SPICE 2.0, MSCIQ and developer tooling, with a focus on scalable architecture and complex interfaces.",
  },
  {
    company: "Techfully",
    period: "Aug 2021 — Mar 2023",
    role: "Front-End Developer",
    summary:
      "Built assessment and learning experiences for Terv, including TensorFlow.js proctoring, a custom video player and PDF viewing. Developed JSON-driven forms for DocsAuth.",
  },
  {
    company: "Padink Engineering Service",
    period: "Jun 2019 — Jul 2021",
    role: "Front-End Developer",
    summary:
      "Built project tracking, employee assignment and reporting interfaces for engineering teams working with CAD and SP3D workflows.",
  },
];
export const personalProjects = [
  {
    name: "Prebuilt Tailwind components",
    image: "pragipage",
    category: "Reusable UI",
    description:
      "A collection of navigation, menus and interface components for everyday projects.",
    href: "https://pragi.vercel.app/",
    label: "View project",
  },
  {
    name: "Month End",
    image: "monthend",
    category: "Personal product",
    description:
      "A simple application to estimate monthly expenses and plan ahead.",
    href: "https://monthend.vercel.app/",
    label: "View project",
  },
  {
    name: "Seran",
    image: "seran",
    category: "Interface design",
    description:
      "A website design exploration for an electric vehicle company, created in Adobe XD.",
    href: "https://dribbble.com/shots/14787008-Electric-vehicle-website",
    label: "View design",
  },
];
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
      name: profile.name,
      alternateName: ["Pragatheeswaran", "Pragatheeswaran K", "Pragi"],
      url: `${profile.url}/`,
      image: `${profile.url}/img/pragatheeswaran-k.webp`,
      jobTitle: "Technical Analyst",
      description:
        "Front-end engineer based in Chennai, specializing in React, Next.js, TypeScript, front-end architecture, performance and accessibility.",
      worksFor: { "@type": "Organization", name: "Ideas2IT" },
      homeLocation: { "@type": "City", name: "Chennai" },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Front-end architecture",
        "Web accessibility",
        "Web performance",
      ],
      sameAs: [profile.linkedin, profile.github],
    },
    {
      "@type": "WebSite",
      "@id": `${profile.url}/#website`,
      url: `${profile.url}/`,
      name: profile.name,
      alternateName: ["Pragatheeswaran", "Pragatheeswaran K", "Pragi"],
      publisher: { "@id": `${profile.url}/#person` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.url}/#profile`,
      url: `${profile.url}/`,
      name: "Pragatheeswaran Kasinathan — Front-End Engineer",
      isPartOf: { "@id": `${profile.url}/#website` },
      mainEntity: { "@id": `${profile.url}/#person` },
      inLanguage: "en-IN",
    },
  ],
};
