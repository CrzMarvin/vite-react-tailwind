import React from 'react';

export default ({name, subtitle, imgSrc, description }) => {

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl no-shake transform  transition hover:-translate-y-0.5 hover:shadow-xl ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={imgSrc} alt={`${name}.jpg`} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
          <p className="mt-2 text-gray-500">{description?.slice(0, 100)}</p>
        </div>
      </div>
    </div>
  )
}