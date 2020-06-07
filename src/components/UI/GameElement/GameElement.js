import React from 'react';

import './GameElement.css';

const GameElement = ({ onClick, src, alt, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default GameElement;
