import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import GameElement from '../../UI/GameElement/GameElement';

import triangle from '../../../images/bg-triangle.svg';

import './Step1.css';

const Step1 = ({ setUserPick, gameElements }) => {
  const gameComponents = gameElements.map(gameEl => (
    <div
      className={`${gameEl.name} game-element`}
      key={gameEl.name}
      onClick={() => {
        setUserPick(gameEl);
        navigate('/2');
      }}
    >
      <GameElement src={gameEl.iconURL} alt={gameEl.name} />
    </div>
  ));

  return (
    <>
      <div className="step1">{gameComponents}</div>
      <img src={triangle} alt="Triangle" className="triangle" />
    </>
  );
};

export default Step1;

Step1.propTypes = {
  setUserPick: PropTypes.func.isRequired,
  gameElements: PropTypes.array.isRequired
};
