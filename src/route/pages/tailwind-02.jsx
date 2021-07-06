// https://www.youtube.com/watch?v=5_BPDve5-3M
import React from "react";
import logo from "./logo.svg";
import astronaut from "../../assets/img/astro.png";

function App() {
  return (
    <div className="h-screen bg-gray-300">
      <div className="grid bg-gray-100 lg:grid-cols-2 xl:grid-cols-5">
        <div className="m-auto px-8 py-12 max-w-md sm:max-w-xl lg:px-12 lg:py-20 xl:col-span-2">
          <img src={logo} className="h-20" />
          <img
            src={astronaut}
            className="mt-2 w-full rounded-lg shadow-xl object-cover object-center sm:mt-8 lg:hidden"
          />
          <h1 className="mt-2 text-gray-900 text-2xl font-bold lg:text-4xl">
            Morning
            <br className="hidden lg:inline" />
            <span className="text-indigo-500">Universe!</span>
          </h1>
          <p className="mt-2 text-gray-600 font-light">
            Aute est est non labore occaecat id elit nostrud enim ut minim.
            Consequat mollit nulla qui aute Lorem voluptate anim reprehenderit
            duis id commodo aute aute nulla. Deserunt id reprehenderit tempor
            cupidatat aliqua consectetur excepteur veniam. Ut aliquip non dolor
            nisi velit minim mollit consequat incididunt aliquip ex
            reprehenderit.
          </p>
          <div className="mt-4">
            <a className="inline-block px-4 py-3 text-white text-sm font-semibold tracking-wide bg-indigo-600 rounded-md shadow-lg cursor-pointer uppercase">
              launch rocket
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block xl:col-span-3">
          <img
            src={astronaut}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
