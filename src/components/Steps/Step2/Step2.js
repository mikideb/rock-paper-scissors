import React from 'react';
import { navigate } from '@reach/router';

import GameElement from '../../UI/GameElement/GameElement';

import './Step2.css';

const Step2 = ({ userPick, setHousePick, gameElements }) => {
  const handleHousePick = () => {
    const index = getRandomInt(0, gameElements.length);
    setHousePick(gameElements[index]);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

  return (
    <div
      className="step2"
      onClick={() => {
        handleHousePick();
        navigate('/3');
      }}
    >
      <div className="col">
        <GameElement
          src={userPick.iconURL}
          alt={userPick.name}
          className={`${userPick.name} game-element user-pick picked`}
        />
        <h2 className="headline">You Picked</h2>
      </div>

      <div className="col">
        <div className="picked house-pick  house-pick-step2"></div>
        <h2 className="headline house-headline">The House Picked</h2>
      </div>
    </div>
  );
};

export default Step2;
