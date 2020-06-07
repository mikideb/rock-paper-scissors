import React from 'react';
import './Header.css';

const Header = ({ score }) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-headline">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
        </div>

        <div className="score-box">
          <div className="score-headline">Score</div>
          <div className="score-number">{score || 0}</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
