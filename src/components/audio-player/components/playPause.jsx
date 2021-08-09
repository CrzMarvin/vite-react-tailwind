import React, { useRef, useState, useEffect } from 'react';
import anime from 'animejs';

const blankFunc = () => {};

const PathData = {
  play: 'M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z',
  pause: 'M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z',
};

const PlayPause = (props) => {
  const {
    isPlay = false,
    color = 'steelblue',
    className,
    onClick = blankFunc,
  } = props;
  const pathRef = useRef(null);
  useEffect(() => {
    const loopState = isPlay ? 'pause' : 'play';
    const timeline = anime({
      targets: pathRef.current,
      duration: 200,
      easing: 'easeInOutSine',
      d: [{ value: PathData[loopState] }],
    });
  }, [isPlay]);
  return (
    <svg
      onClick={onClick} 
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width="100"
      height="100"
      viewBox="0 0 36 36"
      data-play="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
      data-pause="M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z"
    >
      <path
        id="test-anime"
        ref={pathRef}
        d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
      ></path>
    </svg>
  );
};

const Hoc = (props) => {
  // disableAnime 用在性能不够的场景 取消动画的效果
  const {
    disableAnime = false,
    isPlay = false,
    color = 'steelblue',
    className,
    onClick = blankFunc,
  } = props;
  if (disableAnime) {
    return (
      <svg
        onClick={onClick}
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        width="100"
        height="100"
        viewBox="0 0 36 36"
        data-play="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
        data-pause="M 12,26 16.33,26 16.33,10 12,10 z M 20.66,26 25,26 25,10 20.66,10 z"
      >
        <path d={isPlay ? PathData['pause'] : PathData['play']}></path>
      </svg>
    );
  } else {
    return <PlayPause {...props} />;
  }
};
export default Hoc;
