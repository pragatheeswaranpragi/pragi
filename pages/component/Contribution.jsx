import React from 'react';
import { motion } from 'framer-motion';

const Contribution = () => {
  const features = [
    {
      icon: "📝",
      title: "Case Transformations",
      description: "Transform text into various cases (title, sentence, camel, snake, kebab, etc.)"
    },
    {
      icon: "✨",
      title: "Smart Truncation",
      description: "Intelligent text truncation with customizable length and suffix"
    },
    {
      icon: "🔍",
      title: "Whitespace Handling",
      description: "Intelligent whitespace trimming for clean text output"
    },
    {
      icon: "🎯",
      title: "Selective Transformation",
      description: "Exclude specific words from case transformations"
    },
    {
      icon: "🛠️",
      title: "Method-based API",
      description: "Convenient method-based API (e.g., pragiString.titleCase())"
    },
    {
      icon: "📦",
      title: "CLI Support",
      description: "CLI tool for quick transformations"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Open Source Contributions</h2>
          <p className="text-gray-400">Empowering developers with powerful string and numbers format tools</p>
        </motion.div>

        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            {/* <FaNpm className="text-red-500 text-5xl" /> */}
            <div>
              <h3 className="text-2xl font-bold">pragi-string</h3>
              <div className="flex gap-3 mt-2">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {/* <BiPackage /> */}
                   npm install pragi-string
                </span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {/* <SiTypescript />  */}
                  TypeScript
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {/* <BsTerminal /> */} CLI Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.npmjs.com/package/pragi-string"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold px-8 py-3 rounded-lg"
          >
            View on NPM
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contribution;
