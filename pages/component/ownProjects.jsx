import Link from 'next/link';


export default function OwnProjects() {
const projectArray = [
{
'name' : 'Pragi pre_built tailwindcss',
'link' : 'https://pragi.vercel.app/'
},
{
'name' : 'Pragi pre_built tailwindcss',
'link' : 'https://pragi.vercel.app/'
},
]
return (
<section className="py-20 bg-white">
    <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div className="relative">
            <h2 className="w-full text-xl font-bold text-center sm:text-2xl md:text-3xl">Own Projects</h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Developing my career by learning new technologies</p>
        </div>
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last border-2 border-indigo-800 rounded-md">
                <img className="rounded-lg shadow-xl" src="/img/pragipage.png" alt="pragi-prebuilt" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Pre-Built Components</p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Pragi-Prebuilt Tailwind</h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">It is designed and devloped for components that are commonly used in our any projects, such as navbars, sidemenus, and alert message UIs.</p>
                <a
                    className="inline-flex w-40 items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                    href="https://pragi.vercel.app/" rel="noopener noreferrer"
                >
          <span className="text-sm font-medium">Find Out</span>
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
        </a>
            </div>
        </div>
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img className="rounded-lg shadow-xl" src="/img/seran.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">User Interface and User Experience</p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Seran</h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">Web design for Electric vehicle company with a vector image and some Icons, It Designed flawlessly for seran in Adobe XD with my favourite colour palette </p>
                <a
          className="inline-flex w-40 items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="https://dribbble.com/shots/14787008-Electric-vehicle-website"  rel="noopener noreferrer"
        >
          <span className="text-sm font-medium">Dribble</span>
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
        </a>
            </div>
        </div>
        <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img className="rounded-lg shadow-xl" src="/img/five.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Local Client</p>
                <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Five Star Drop Taxi</h3>
                <p className="mt-5 text-lg text-gray-700 text md:text-left">This project designed and devloped for booking drop taxi via whatsapp and phone call, More informations added with cool animations.</p>
                <a
                    className="inline-flex w-40 items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                    href="https://www.fivestardroptaxi.in/" rel="noopener noreferrer"
                >
          <span className="text-sm font-medium">Find Out</span>
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
        </a>
            </div>
        </div>

    </div>
</section>
)
}