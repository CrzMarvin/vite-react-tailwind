import React from "react";

export default ({ name, subtitle, imgSrc, description }) => {
  return (
    <div className="no-shake mx-auto max-w-md bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-0.5 transition md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="w-full h-48 object-cover md:w-48"
            src={imgSrc}
            alt={`${name}.jpg`}
          />
        </div>
        <div className="p-8">
          <div className="text-indigo-500 text-sm font-semibold tracking-wide uppercase">
            {name}
          </div>
          <a
            href="#"
            className="block mt-1 text-black hover:underline text-lg font-medium leading-tight"
          >
            {subtitle}
          </a>
          <p className="mt-2 text-gray-500 truncate max-w-sm h-16">{description}</p>
        </div>
      </div>
    </div>
  );
};
