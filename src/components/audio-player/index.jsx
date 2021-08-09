import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import PlayPause from './components/playPause';
import Next from './components/next';

const STATIC_HOST = 'https://dongshanfzy.com/static/cdn/audio/';

const playList = [
  {
    name: 'lofi_girl01',
    filename: 'lofi_girl01.mp3',
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

export default (props) => {
  const playRef = useRef(null);
  const [playerState, setPlayerState] = useState('INIT');
  const [songIdx, setSongIdx] = useState(0);
  useEffect(() => {
    loadSong(0)
  }, []);

  const loadSong = (id) => {
    const { name, filename } = playList[id]
    const player = new Howl({
      src: STATIC_HOST + filename,
      html5: true,
      onplay: function (id) {
        setPlayerState('PLAYING');
      },
      onpause: function () {
        setPlayerState('PAUSE');
      },
      onstop: function () {
        setPlayerState('STOP');
      },
      onend: function () {
        setPlayerState('END');
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
    const isLastSong = songIdx === playList.length - 1 
    const nextSongIdx = isLastSong ? 0 : songIdx + 1;
    console.log('nextSongIdx', nextSongIdx);
    setSongIdx(nextSongIdx)
    const prePlayer = playRef.current;
    if (prePlayer) {
      prePlayer.stop()
    }
    const player = loadSong(nextSongIdx)
    player.play();
  };
  console.log('playerState', playerState);
  return (
    <div className="fixed right-3 top-3 flex w-32 h-12 bg-gray-500 rounded shadow-md">
      <PlayPause
        className="w-12 h-12 cursor-pointer"
        color="white"
        isPlay={playerState === 'PLAYING'}
        onClick={handlePlay}
      />
      <Next onClick={handleNext} color="white" />
    </div>
  );
};
