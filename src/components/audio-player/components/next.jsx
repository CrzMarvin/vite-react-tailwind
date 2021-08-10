import React, { useState, useCallback } from 'react';

const blankFunc = () => {}

const IconNext = (props) => {
  const { color = 'steelblue',  onClick = blankFunc } = props;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleMouseDown = () => {
    setIsMouseDown(true)
  }
  const handleMouseUp = useCallback( () => {
    if (isMouseDown) {
      onClick()
      setIsMouseDown(false)
    }
  }, [isMouseDown])
  const className = isMouseDown ? "w-10 h-10 cursor-pointer translate-y-[1px] transform" : "w-10 h-10 cursor-pointer"
  return (
    <svg
      className={className}
      t="1628490848925"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3291"
      width="200"
      height="200"
      fill={color}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <path
        d="M298.666667 298.666667v426.666666l298.666666-213.333333z m384 426.666666V298.666667h-85.333334v426.666666z"
        p-id="3292"
      ></path>
    </svg>
  );
};

export default IconNext;
