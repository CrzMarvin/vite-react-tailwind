import React, { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';


const STATIC_HOST = 'https://dongshanfzy.com/static/cdn/audio/'

const playList = [
  '80s_vibe.mp3', 'rave_digger.mp3', 'running_out.mp3',
]

const src = playList.map(e => STATIC_HOST + e)


export default props => {
  const playRef = useRef(null)
  useEffect(() => {
    const player = new Howl({
      src,
      html5: true,
    });
    playRef.current = player;
  }, []);
  const handlePlay = () => {
    if (playRef?.current) {
    }
  }

  return (
    <div className="fixed top-3 right-3 w-32 h-12 bg-gray-500 shadow-md rounded" onClick={handlePlay}>
    </div>
  )
}