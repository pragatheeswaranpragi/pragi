import React from 'react'

export default function Footer() {
    return(
        <div>
  <footer className="text-gray-600 body-font bg-gray-900">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="./img/vr.svg" className="w-8"/>
      <span className="ml-3 text-gray-200 text-xl">Pragatheeswaran-FrontEnd Developer</span>
    </a>
    <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Pragatheeswaran-FrontEnd Developer
    </p>
    
  </div>
</footer>
        </div>
    )
}