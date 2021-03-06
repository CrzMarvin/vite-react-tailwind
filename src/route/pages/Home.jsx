//  https://www.youtube.com/watch?v=5_BPDve5-3M
import React from 'react';
import VocationCard from '@components/vocation-card';
import Home from './tailwind-04';
import MdxContainer from './mdx';
import { MDXProvider } from '@mdx-js/react'
import Text from '@components/mdx-components/text'
import Code from '@components/mdx-components/code'

import MoscowImg from '@img/Moscow.png';
import NaplesImg from '@img/Naples.png';
import NewYorkImg from '@img/NewYork.png';
import TokyoImg from '@img/Tokyo.png';
import ParisImg from '@img/Paris.png';
import LondonImg from '@img/London.png';

const vocationCitiesData = [
  {
    name: 'Naples',
    subtitle: 'Italy Naples (123.12, 23.21)',
    imgSrc: NaplesImg,
    description: `Naples (/ˈneɪpəlz/; Italian: Napoli [ˈnaːpoli] (About this soundlisten); Neapolitan: Napule [ˈnɑːpələ, ˈnɑːpulə])[a] is the regional capital of Campania and the third-largest city of Italy, after Rome and Milan, with a population of 967,069 within the city's administrative limits as of 2017.`,
  },
  {
    name: 'NewYork',
    subtitle: 'America NewYork (123.12, 23.21)',
    imgSrc: NewYorkImg,
    description: `New York City (NYC), often simply called New York, is the most populous city in the United States. With an estimated 2020 population of 8,253,213 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States.`,
  },
  {
    name: 'Moscow',
    subtitle: 'Russia Moscow (123.12, 23.21)',
    imgSrc: MoscowImg,
    description: `Moscow (/ˈmɒskoʊ/, /ˈmɒskaʊ/;[10][11] Russian: Москва, tr. Moskva, IPA: [mɐˈskva] (About this soundlisten)) is the capital and largest city of Russia. The city stands on the Moskva River in Central Russia, with a population estimated at 12.4 million residents within the city limits,[12] over 17 million residents in the urban area,[13] and over 20 million residents in the metropolitan area.`,
  },
  {
    name: 'Tokyo',
    subtitle: 'Japan Tokyo (123.12, 23.21)',
    imgSrc: TokyoImg,
    description: `Tokyo (/ˈtoʊkioʊ/ TOH-kee-oh, /-kjoʊ/ -⁠kyoh; Japanese: 東京, Tōkyō [toːkʲoː] (About this soundlisten)), officially the Tokyo Metropolis (Japanese: 東京都, Tōkyō-to), is the de facto capital[note 1][7] and most populous prefecture of Japan.`,
  },
  {
    name: 'London',
    subtitle: 'England London (123.12, 23.21)',
    imgSrc: LondonImg,
    description: `London is the capital and largest city of England and the United Kingdom.[8][9] The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.`,
  },
  {
    name: 'Paris',
    subtitle: 'France Paris (123.12, 23.21)',
    imgSrc: ParisImg,
    description: `Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres (41 square miles).`,
  },
];

function App() {
  return (
    <>
      <Home />
      <div className="grid gap-y-4 grid-cols-2 py-8 bg-DI">
        {vocationCitiesData.map((city) => (
          <VocationCard key={city?.name} {...city} />
        ))}
      </div>
      {/* this is the default theme */}
      <article className="bg-skin-fill my-3 p-8">
        <h1 className="text-skin-base text-2xl font-bold">
          Garlic bread with cheese: What the science tells us
        </h1>
        <p className="text-skin-muted mt-2">
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <p className="text-skin-base mt-4">
          For years parents have espoused the health benefits of eating garlic
          <br />
          bread with cheese to their children, with the food earning such an{' '}
          <br />
          iconic status in our culture that kids will often dress up as warm,{' '}
          <br />
          cheesy loaf for Halloween. <br />
        </p>
        <div className="flex gap-3 mt-8">
          <a
            href="#"
            className="btn bg-skin-button-muted text-skin-inverted px-5 py-2"
          >
            cancel
          </a>
          <a
            href="#"
            className="btn bg-skin-button-accent text-skin-base hover:bg-skin-button-accent-hover px-5 py-2"
          >
            action
          </a>
        </div>
      </article>
      {/* this is the sky theme */}
      <article className="bg-skin-fill theme-sky my-3 p-8">
        <h1 className="text-skin-base text-2xl font-bold">
          Garlic bread with cheese: What the science tells us
        </h1>
        <p className="text-skin-muted mt-2">
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <p className="text-skin-base mt-4">
          For years parents have espoused the health benefits of eating garlic
          <br />
          bread with cheese to their children, with the food earning such an{' '}
          <br />
          iconic status in our culture that kids will often dress up as warm,{' '}
          <br />
          cheesy loaf for Halloween. <br />
        </p>
        <div className="flex gap-3 mt-8">
          <a
            href="#"
            className="btn bg-skin-button-muted text-skin-inverted px-5 py-2"
          >
            cancel
          </a>
          <a
            href="#"
            className="btn bg-skin-button-accent text-skin-base hover:bg-skin-button-accent-hover px-5 py-2"
          >
            action
          </a>
        </div>
      </article>
      {/* this is the teal theme */}
      <article className="bg-skin-fill theme-sky theme-teal my-3 p-8">
        <h1 className="text-skin-base text-2xl font-bold">
          Garlic bread with cheese: What the science tells us
        </h1>
        <p className="text-skin-muted mt-2">
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <p className="text-skin-base mt-4">
          For years parents have espoused the health benefits of eating garlic
          <br />
          bread with cheese to their children, with the food earning such an{' '}
          <br />
          iconic status in our culture that kids will often dress up as warm,{' '}
          <br />
          cheesy loaf for Halloween. <br />
        </p>
        <div className="flex gap-3 mt-8">
          <a
            href="#"
            className="btn bg-skin-button-muted text-skin-inverted px-5 py-2"
          >
            cancel
          </a>
          <a
            href="#"
            className="btn bg-skin-button-accent text-skin-base hover:bg-skin-button-accent-hover px-5 py-2"
          >
            action
          </a>
        </div>
      </article>
      <MdxContainer />
      <h2> This is a default title!</h2>
    </>
  );
}



const components = {
  // h1: Heading.H1,
  // h2: Heading.H2,
  // …
  p: Text,
  code: Code,
  // inlineCode: Code
}
const AppWithMDX = (props) => {
  return (
    <MDXProvider components={components}>
      <App {...props} />
    </MDXProvider>
  )
}

export default AppWithMDX;
