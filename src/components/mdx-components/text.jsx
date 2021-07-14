import React from 'react';

export default props => {
  console.log('props in P', props);
  return (
    <p className="font-sans">
      {props.children}
    </p>
  )
}