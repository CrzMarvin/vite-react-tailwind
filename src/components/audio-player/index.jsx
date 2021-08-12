import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import PlayPause from './components/playPause';
import Next from './components/next';
import Particle from './components/particle';

import { generateLoopListNodes } from '../../utils'

import './index.scss'

const formatTime= (secs) => {
  var minutes = Math.floor(secs / 60) || 0;
  var seconds = (secs - minutes * 60) || 0;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

const STATIC_HOST = 'https://dongshanfzy.com/static/cdn/audio/';

const playList = [
  {
    name: 'lofi_girl01',
    filename: 'lofi_girl01.mp3',
  },
  {
    name: 'Re: Stacks  --BonIver',
    filename: 'Stacks-BonIver.mp3',
  },
  {
    name: '80s_vibe',
    filename: '80s_vibe.mp3',
  },
  {
    name: 'rave_digger',
    filename: 'rave_digger.mp3',
  },
  {
    name: 'running_out',
    filename: 'running_out.mp3',
  },
];

const PlayerStates = ['INIT', 'PLAYING', 'PAUSE', 'STOP', 'ERROR', 'END'];


const defaultOrderArray = Array.from(playList, (_, i) => i)
const playNodeListHeader = generateLoopListNodes(defaultOrderArray)
let currentPlayNode = playNodeListHeader;

const Player = (props) => {
  const playRef = useRef(null);
  const progressRef = useRef(null);
  const [playerState, setPlayerState] = useState('INIT');
  const [songIdx, setSongIdx] = useState(currentPlayNode.val);
  const [autoPlayNext, setAutoplayNext] = useState(true);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    loadSong(0)
  }, []);

  const updateProgress = (player) => {
    const progressDom = progressRef.current;
    if (player?.playing() && progressDom) {
      // requestAnimationFrame(() => updateProgress(player));
      const seek = player.seek();
      const duration = player.duration();
      const percent = Math.round(seek / duration * 10000) / 100;
      progressDom.style.width = `${percent}%`
      setTimeout(() => {
        updateProgress(player)
      }, 200);
    }
  }
  const updateSongId = () => {
    currentPlayNode = currentPlayNode.next
    setSongIdx(currentPlayNode.val)
    return currentPlayNode.val
  }
  const loadSong = (id) => {
    const { name, filename } = playList[id]
    const player = new Howl({
      src: STATIC_HOST + filename,
      html5: true,
      onplay: function (id) {
        setPlayerState('PLAYING');
        const duration = player.duration();
        setDuration(Math.round(duration))
        updateProgress(player, duration)
      },
      onseek: function (seek) {
        updateProgress(seek)
      },
      onpause: function () {
        setPlayerState('PAUSE');
      },
      onstop: function () {
        setPlayerState('STOP');
      },
      onend: function () {
        setPlayerState('END');
        if (autoPlayNext) {
          handleNext();
        }
      },
    });

    playRef.current = player;
    return player;
  }

  const handlePlay = () => {
    const player = playRef.current;
    if (player) {
      if (playerState === 'PLAYING') {
        player.pause();
      } else {
        player.play();
      }
    }
  };
  const handleNext = () => {
    const nextSongIdx = currentPlayNode.next.val;
    const prePlayer = playRef.current;
    if (prePlayer) {
      prePlayer.stop()
    }
    const player = loadSong(nextSongIdx)
    player.play();
    updateSongId();
  };
  const currentSong = playList[songIdx]
  return (
    <div className="fixed right-3 top-3  w-64 h-16 bg-gradient-to-tr from-gray-600 to-gray-400 rounded shadow-md opacity-90">
      <div className="flex items-center">
        <PlayPause
          className="w-10 h-10 cursor-pointer"
          color="white"
          isPlay={playerState === 'PLAYING'}
          onClick={handlePlay}
        />
        <Next onClick={handleNext} color="white" />
        <p className="text-gray-50 truncate w-32" >{currentSong.name} </p>
      </div>
      <div className="relative w-11/12 mx-auto h-1 bg-gray-400 box-border">
        <div 
          ref={progressRef} 
          className="absolute h-full bg-gradient-to-r from-green-400 to-blue-500 " 
          style={{ transition: 'width 0.2s linear', transitionDelay: 0 }}
        >
          <div 
            className={`absolute h-[8px] w-[2px] bg-gray-100 right-0 top-[-2px] ${playerState === 'PLAYING' ? 'glory' : ''}`}
          >
            <Particle isPlay={playerState === 'PLAYING'}/>
          </div>
        </div>
        <p className="absolute right-[-5px] text-gray-50 text-xs top-1 " >{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default Player;

// export default () => {
//   const [isPlay, setPlay] = useState(false);
//   const handlePlay = () => {
//     setPlay(v => !v)
//   }
//   return(
//     <div className="fixed right-3 top-3  w-64 h-16 bg-gray-500 rounded shadow-md" onClick={handlePlay}>
//       <div className="relative w-11/12 mx-auto h-1 bg-gray-400 box-border top-3">
//         <div 
//           className="relative h-full bg-gradient-to-r from-green-400 to-blue-500 " 
//           style={{ transition: 'width 0.2s linear', transitionDelay: 0, width: '30%' }}
//         >
//           <div className="absolute h-[8px] w-[2px] bg-white right-0 top-[-2px]">
//           </div>

//         </div>
//         <p className="absolute right-[-5px] text-gray-50 text-xs top-1" >05:23</p>
//       </div>
//     </div>
//   )
// }