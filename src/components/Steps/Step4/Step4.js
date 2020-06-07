import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

import GameElement from '../../UI/GameElement/GameElement';

import './Step4.css';

const StepFour = ({ userPick, housePick, setScore, score, setUserPick }) => {
  const [gameResult, setGameResult] = useState('');

  useEffect(() => {
    switch (true) {
      case (userPick.name === 'rock' && housePick.name === 'scissors') ||
        (userPick.name === 'scissors' && housePick.name === 'paper') ||
        (userPick.name === 'paper' && housePick.name === 'rock'): {
        setScore(prevScore => prevScore + 1);
        setGameResult('win');
        break;
      }

      case (housePick.name === 'rock' && userPick.name === 'scissors') ||
        (housePick.name === 'scissors' && userPick.name === 'paper') ||
        (housePick.name === 'paper' && userPick.name === 'rock'): {
        setScore(prevScore => prevScore - 1);
        setGameResult('lose');
        break;
      }

      default:
        setGameResult('draw');
    }
  }, [userPick.name, housePick.name, setScore]);

  let announcement;

  switch (gameResult) {
    case 'win':
      announcement = <h1 className="announcement-headline">You Win!</h1>;
      break;

    case 'lose':
      announcement = <h1 className="announcement-headline">You Lose</h1>;
      break;

    default:
      announcement = <h1 className="announcement-headline">It's a Draw</h1>;
  }

  localStorage.setItem('score', score);

  return (
    <div className="step4">
      <div className="col left">
        <GameElement
          className={`${userPick.name} game-element user-pick`}
          src={userPick.iconURL}
          alt={userPick.name}
        />
        <h2 className="user-headline headline">You Picked</h2>
      </div>

      <div className="col right">
        <GameElement
          className={`${housePick.name} game-element house-pick`}
          src={housePick.iconURL}
          alt={housePick.name}
        />
        <h2 className="house-headline headline">The House Picked</h2>
      </div>

      <div className="col announcement">
        {announcement}
        <button
          className="btn-reset btn"
          onClick={() => {
            setUserPick({ name: '', iconURL: '' });
            navigate('/');
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default StepFour;
