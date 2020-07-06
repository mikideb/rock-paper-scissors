import React from 'react';
import PropTypes from 'prop-types';

import './GameElement.css';

const GameElement = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default GameElement;

GameElement.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};
