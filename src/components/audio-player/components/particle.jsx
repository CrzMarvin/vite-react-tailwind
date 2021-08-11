import React, { useEffect, useRef } from 'react';
import anime from 'animejs'

const PARTICLE_NUM = 15;
const particleArray = Array.from({ length: PARTICLE_NUM }, (_, i) => i)

const generateAnime = () => {
  const top = Math.floor(Math.random() * 8)
  const delay = Math.floor(Math.random() * 1000)
  const maxX = - (Math.floor(Math.random() * 10) + 10)
  const maxY =  (Math.floor(Math.random() * 4)) - 2
  return ({
    top,
    translateX: [0 , maxX],
    translateY: [0 , maxY],
    delay,
  })
}

let playRef = false

const Particle = ({ isPlay }) => {
  const elRef = useRef();
  useEffect(() => {
    playRef = isPlay
    if (isPlay) {
      playAnime();
    }
  }, [isPlay]);
  const playAnime = () => {
    if (!playRef) {
      return;
    }
    const animation = anime({
      targets: elRef.current,
      easing: 'easeOutCubic',
      opacity: [2, 0],
      duration: 1500,
      loop: false,
      autoplay: false,
      ...generateAnime(),
      complete: function(anim) {
        playAnime();
      },
    });
    animation.play();
  }
  return (
    <div ref={elRef} className="absolute w-[2px] h-[1px] bg-white" style={{ top: Math.floor(Math.random() * 8), left: 0 }}>
    </div>
  )
}

export default ({ isPlay }) => {
  return (
    <div className="absolute left-0 top-0">
      {particleArray.map(i => <Particle key={i} isPlay={isPlay} />)}
    </div>
  )
}