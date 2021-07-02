// https://www.youtube.com/watch?v=5_BPDve5-3M
import React from 'react'
import logo from './logo.svg'
import astronaut from '../../assets/img/astro.png'

function App() {

  return (
    <div className="bg-gray-300 h-screen">
      <div className="bg-gray-100 grid lg:grid-cols-2 xl:grid-cols-5">
        <div className="px-8 py-12 m-auto max-w-md sm:max-w-xl lg:px-12 lg:py-20 xl:col-span-2">
          <img src={logo} className="h-20" />
          <img src={astronaut} className="w-full mt-2 rounded-lg shadow-xl sm:mt-8 object-cover object-center lg:hidden" />
          <h1 className="mt-2 text-2xl font-bold text-gray-900 lg:text-4xl">
            Morning
            <br className="hidden lg:inline"/>
            <span className="text-indigo-500">Universe!</span>
          </h1>
          <p className="mt-2 text-gray-600 font-light">Aute est est non labore occaecat id elit nostrud enim ut minim. Consequat mollit nulla qui aute Lorem voluptate anim reprehenderit duis id commodo aute aute nulla. Deserunt id reprehenderit tempor cupidatat aliqua consectetur excepteur veniam. Ut aliquip non dolor nisi velit minim mollit consequat incididunt aliquip ex reprehenderit.</p>
          <div className="mt-4">
            <a className="inline-block rounded-md bg-indigo-600 py-3 shadow-lg px-4 text-white uppercase tracking-wide font-semibold cursor-pointer text-sm">
              launch rocket
            </a>
          </div>
        </div>
        <div className="hidden lg:block relative xl:col-span-3">
          <img src={astronaut} className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
  )
}

export default App
