//  https://www.youtube.com/watch?v=5_BPDve5-3M
import React, { useRef, useEffect } from "react";
import VocationCard from "@components/vocation-card";

import logo from "./logo.svg";
import astronaut from "@assets/img/astro.png";
import MoscowImg from "../assets/img/Moscow.png";
import NaplesImg from "../assets/img/Naples.png";
import NewYorkImg from "../assets/img/NewYork.png";
import TokyoImg from "../assets/img/Tokyo.png";
import ParisImg from "../assets/img/Paris.png";
import LondonImg from "../assets/img/London.png";

const vocationCitiesData = [
  {
    name: "Naples",
    subtitle: "Italy Naples (123.12, 23.21)",
    imgSrc: NaplesImg,
    description: `Naples (/ˈneɪpəlz/; Italian: Napoli [ˈnaːpoli] (About this soundlisten); Neapolitan: Napule [ˈnɑːpələ, ˈnɑːpulə])[a] is the regional capital of Campania and the third-largest city of Italy, after Rome and Milan, with a population of 967,069 within the city's administrative limits as of 2017.`,
  },
  {
    name: "NewYork",
    subtitle: "America NewYork (123.12, 23.21)",
    imgSrc: NewYorkImg,
    description: `New York City (NYC), often simply called New York, is the most populous city in the United States. With an estimated 2020 population of 8,253,213 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States.`,
  },
  {
    name: "Moscow",
    subtitle: "Russia Moscow (123.12, 23.21)",
    imgSrc: MoscowImg,
    description: `Moscow (/ˈmɒskoʊ/, /ˈmɒskaʊ/;[10][11] Russian: Москва, tr. Moskva, IPA: [mɐˈskva] (About this soundlisten)) is the capital and largest city of Russia. The city stands on the Moskva River in Central Russia, with a population estimated at 12.4 million residents within the city limits,[12] over 17 million residents in the urban area,[13] and over 20 million residents in the metropolitan area.`,
  },
  {
    name: "Tokyo",
    subtitle: "Japan Tokyo (123.12, 23.21)",
    imgSrc: TokyoImg,
    description: `Tokyo (/ˈtoʊkioʊ/ TOH-kee-oh, /-kjoʊ/ -⁠kyoh; Japanese: 東京, Tōkyō [toːkʲoː] (About this soundlisten)), officially the Tokyo Metropolis (Japanese: 東京都, Tōkyō-to), is the de facto capital[note 1][7] and most populous prefecture of Japan.`,
  },
  {
    name: "London",
    subtitle: "England London (123.12, 23.21)",
    imgSrc: LondonImg,
    description: `London is the capital and largest city of England and the United Kingdom.[8][9] The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.`,
  },
  {
    name: "Paris",
    subtitle: "France Paris (123.12, 23.21)",
    imgSrc: ParisImg,
    description: `Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres (41 square miles).`,
  },
];

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
        <div className="mt-4 space-x-2">
          <button  className="btn btn-primary">
            launch rocket
          </button>
          <a className="btn btn-secondary" href="#">
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
    <div className="py-8 bg-DI grid grid-cols-2 gap-y-4 ">
      {vocationCitiesData.map((city) => (
        <VocationCard key={city?.name} {...city} />
      ))}
    </div>
  </div>

  );
}

export default App;
