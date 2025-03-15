import Link from 'next/link';


export default function Career() {
  const startYear = 2019; // The year you started as a front-end developer
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  
  return (
    <section className="grid justify-items-center bg-gray-50">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-800">Professional Summary</h2>
            <p className="mt-4 text-gray-600">
              I have over {yearsOfExperience}+ years of experience as a front-end developer. I have emphasized the importance of scalable and well documented code, as well as a strong understanding of usability, error handling, performance, and reusability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                className="inline-flex items-center justify-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="https://www.linkedin.com/in/pragatheeswarank/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              </span>
              <h6 className="mt-2 font-bold">Web technologies</h6>
              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                HTML5, CSS3, SASS, JavaScript, Typescript
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-pink-600 bg-pink-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
              </span>

              <h6 className="mt-2 font-bold">Frameworks</h6>
              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Next.js
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
                <path
                  fillRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clipRule="evenodd"
                />
                <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
              </span>
              <h6 className="mt-2 font-bold">JS-Library</h6>
              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                React.js, Redux, React Hooks, Styled components
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-green-600 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
              </span>
              <h6 className="mt-2 font-bold">User Interface Development</h6>
              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Bootstrap, Tailwindcss, Material ui
              </p>
            </a>
            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-purple-600 bg-purple-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
          </div>
              </span>
              <h6 className="mt-2 font-bold">Design Tools</h6>
              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Adobe Xd
              </p>
            </a>

            <a
              className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
            >
              <span>
              <div className="flex items-center justify-center w-8 h-8 mb-4 text-blue-600 bg-blue-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-="true">
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
              </span>
              <h6 className="mt-2 font-bold">Development tools</h6>

              <p className=" sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Visual studio code
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}