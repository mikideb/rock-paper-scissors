import React from 'react';
import { navigate } from '@reach/router';

import GameElement from '../../UI/GameElement/GameElement';

const StepThree = ({ userPick, housePick }) => {
  return (
    <div className="step2" onClick={() => navigate('/4')}>
      <div className="col">
        <GameElement
          className={`${userPick.name} game-element user-pick picked`}
          src={userPick.iconURL}
          alt={userPick.name}
        />
        <h2 className="headline">You Picked</h2>
      </div>
      <div className="col">
        <GameElement
          className={`${housePick.name} game-element house-pick picked`}
          src={housePick.iconURL}
          alt={housePick.name}
        />
        <h2 className="headline">The House Picked</h2>
      </div>
    </div>
  );
};

export default StepThree;
