//  https://www.youtube.com/watch?v=5_BPDve5-3M
import React, { useRef, useEffect } from "react";
import VocationCard from "../components/vocation-card";

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
    <div className="bg-DI py-5 space-y-12">
      {vocationCitiesData.map((city) => (
        <VocationCard key={city?.name} {...city} />
      ))}
    </div>
  );
}

export default App;
