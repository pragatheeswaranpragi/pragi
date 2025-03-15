import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNpm, FaGithub, FaCode } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';
import { SiTypescript } from 'react-icons/si';
import { BsTerminal, BsCalculator, BsChevronDown, BsChevronUp, BsGrid, BsList } from 'react-icons/bs';

const Contribution = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('grid');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: "📝",
      title: "Case Transformations",
      description: "Transform text into various cases (title, sentence, camel, snake, kebab, etc.)",
      category: "string",
      primary: true
    },
    {
      icon: "✨",
      title: "Smart Truncation",
      description: "Intelligent text truncation with customizable length and suffix",
      category: "string",
    },
    {
      icon: "🔍",
      title: "Whitespace Handling",
      description: "Intelligent whitespace trimming for clean text output",
      category: "string",
    },
    {
      icon: "🎯",
      title: "Selective Transformation",
      description: "Exclude specific words from case transformations",
      category: "string",
    },
    {
      icon: "🛠️",
      title: "Method-based API",
      description: "Convenient method-based API (e.g., pragiString.titleCase())",
      category: "utility",
      primary: true
    },
    {
      icon: "📦",
      title: "CLI Support",
      description: "CLI tool for quick transformations",
      category: "utility"
    },
    {
      icon: "🔢",
      title: "Number Formatting",
      description: "Convert between number formats, words, ordinals, Roman numerals, and human-readable time",
      category: "number",
      primary: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: features.length },
    { id: 'string', label: 'String', count: features.filter(f => f.category === 'string').length },
    { id: 'number', label: 'Number', count: features.filter(f => f.category === 'number').length },
    { id: 'utility', label: 'Utility', count: features.filter(f => f.category === 'utility').length }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'number', label: 'Number Format' }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  const renderGridView = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 border border-gray-700 hover:border-gray-600 ${
            feature.primary ? 'ring-1 ring-red-500/30' : ''
          }`}
          onMouseEnter={() => setHoveredFeature(index)}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          <div className="flex justify-between items-start">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-700/50 text-gray-400 capitalize">
              {feature.category}
            </span>
          </div>
          <h3 className="text-base font-bold mb-1 text-white">{feature.title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed h-10 overflow-hidden">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="flex flex-col space-y-2">
      {filteredFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 border border-gray-700 hover:border-gray-600 ${
            feature.primary ? 'border-l-4 border-l-red-500' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{feature.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-700/50 text-gray-400 capitalize">
                    {feature.category}
                  </span>
                </div>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            </div>
            <pre className="bg-gray-900/50 text-gray-300 text-xs p-1.5 rounded max-w-[180px] overflow-hidden">
              <code>{feature.example.split('\n')[0]}</code>
            </pre>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 via-gray-850 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600"> Javascript Package</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">Empowering developers with powerful string and numbers format tools</p>
        </motion.div>

        {/* Main content tabs */}
        <div className="mb-8">
          <div className="flex border-b border-gray-700 mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id 
                    ? 'text-red-400 border-red-400' 
                    : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && (
              <div>
                <motion.div 
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 mb-8 shadow-lg border border-gray-700"
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                      <FaNpm className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white"><a href="https://www.npmjs.com/package/pragi-string" target="_blank" rel="noopener noreferrer">pragi-string</a></h3>
                        <div className="flex gap-2">
                          <span className="bg-gray-700 px-2 py-1 rounded-full text-xs font-medium">v1.2.0</span>
                          <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">Active</span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">A lightweight string and number manipulation library</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {features.filter(f => f.primary).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="text-xl mt-0.5">{feature.icon}</div>
                        <div>
                          <h4 className="font-medium text-white">{feature.title}</h4>
                          <p className="text-gray-400 text-xs">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-gray-700 px-3 py-1.5 rounded-full text-xs flex items-center gap-1">
                      <BiPackage className="text-red-400" /> npm install pragi-string
                    </span>
                    <span className="bg-blue-600 px-3 py-1.5 rounded-full text-xs flex items-center gap-1">
                      <SiTypescript /> TypeScript
                    </span>
                    <span className="bg-gray-700 px-3 py-1.5 rounded-full text-xs flex items-center gap-1">
                      <BsTerminal className="text-green-400" /> CLI Support
                    </span>
                  </div>
                </motion.div>

                <div className="bg-gray-800/70 rounded-lg p-4 mb-8">
                  <h3 className="text-lg font-bold mb-3">Quick Example</h3>
                  <pre className="bg-gray-900/60 text-sm text-gray-300 p-4 rounded overflow-x-auto border border-gray-700">
                    <code>
                      {`import { pragiString } from 'pragi-string';

// Basic transformations
pragiString("hello world").titleCase(); // "Hello World"
pragiString("  extra space  ").trim(); // "extra space"

// Number formats
pragiString.toWords(42); // "forty two"
pragiString.humanizeNumber(1234567); // "1.2M"`}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                          activeCategory === category.id 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {category.label}
                        <span className="bg-black/20 px-1.5 rounded-full">{category.count}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-gray-800 p-0.5 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-md text-sm ${viewMode === 'grid' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                    >
                      <BsGrid size={14} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-md text-sm ${viewMode === 'list' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
                    >
                      <BsList size={14} />
                    </button>
                  </div>
                </div>

                {viewMode === 'grid' ? renderGridView() : renderListView()}
              </div>
            )}

            {activeTab === 'number' && (
              <motion.div
                className="bg-gradient-to-r from-blue-900/30 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                    <BsCalculator className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">Number Formatting</h3>
                    <p className="text-gray-300 text-sm">Comprehensive suite of number formatting functions</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-medium text-sm mb-2 text-blue-300">Words & Numbers</h4>
                    <pre className="text-xs text-gray-300 bg-gray-900/50 p-3 rounded">
                      <code>{`// Convert numbers to words
pragiString.toWords(42);  // "forty two"
pragiString.toWords(1234);  // "one thousand two..."

// Convert words to numbers
pragiString.toNumbers("forty two");  // 42`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-medium text-sm mb-2 text-blue-300">Ordinals & Roman Numerals</h4>
                    <pre className="text-xs text-gray-300 bg-gray-900/50 p-3 rounded">
                      <code>{`// Ordinal numbers
pragiString.toOrdinal(1);  // "1st"
pragiString.toOrdinal(42);  // "42nd"

// Roman numerals
pragiString.toRoman(42);  // "XLII"
pragiString.fromRoman("XLII");  // 42`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-medium text-sm mb-2 text-blue-300">Human-readable Formats</h4>
                    <pre className="text-xs text-gray-300 bg-gray-900/50 p-3 rounded">
                      <code>{`// Humanize large numbers
pragiString.humanizeNumber(1234567);  // "1.2M"

// Formatting currencies
pragiString.formatCurrency(1234.56, "USD");  // "$1,234.56"`}</code>
                    </pre>
                  </div>
                  
                  <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-medium text-sm mb-2 text-blue-300">Time & Duration</h4>
                    <pre className="text-xs text-gray-300 bg-gray-900/50 p-3 rounded">
                      <code>{`// Human-readable duration
pragiString.humanizeDuration(3665);
// "1 hour, 1 minute, 5 seconds"

// Digital time format
pragiString.toDigitalTime(3665);  // "01:01:05"`}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contribution;
