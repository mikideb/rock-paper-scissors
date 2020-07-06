import React, { useState } from 'react';
import { Router } from '@reach/router';

import Header from './components/UI/Header/Header';
import Modal from './components/UI/Modal/Modal';

import Step1 from './components/Steps/Step1/Step1';
import Step2 from './components/Steps/Step2/Step2';
import Step3 from './components/Steps/Step3/Step3';
import Step4 from './components/Steps/Step4/Step4';

import rules from './images/image-rules.svg';
import close from './images/icon-close.svg';
import paper from './images/icon-paper.svg';
import rock from './images/icon-rock.svg';
import scissors from './images/icon-scissors.svg';

import './App.css';

const App = () => {
  const [score, setScore] = useState(Number(localStorage.getItem('score')));
  const [showModal, setShowModal] = useState(false);
  const [userPick, setUserPick] = useState({
    name: '',
    iconURL: ''
  });
  const [housePick, setHousePick] = useState({
    name: '',
    iconURL: ''
  });

  const toggleModal = () => setShowModal(!showModal);

  const gameElements = [
    {
      name: 'paper',
      iconURL: paper
    },
    {
      name: 'rock',
      iconURL: rock
    },
    {
      name: 'scissors',
      iconURL: scissors
    }
  ];

  return (
    <div className="App">
      <Header score={score} />
      <Modal showModal={showModal} toggleModal={toggleModal}>
        <span className="modal-headline">Rules</span>
        <img src={rules} alt="Rules" className="modal-rules" />
        <img
          src={close}
          alt="Close"
          className="modal-close"
          onClick={toggleModal}
        />
      </Modal>
      <Router>
        <Step1
          path="/"
          setUserPick={setUserPick}
          gameElements={gameElements}
          userPick={userPick}
        />
        <Step2
          path="/2"
          userPick={userPick}
          gameElements={gameElements}
          setHousePick={setHousePick}
        />
        <Step3
          path="/3"
          userPick={userPick}
          housePick={housePick}
          setScore={setScore}
          score={score}
        />
        <Step4
          path="/4"
          userPick={userPick}
          setUserPick={setUserPick}
          housePick={housePick}
          setScore={setScore}
          score={score}
        />
      </Router>
      <footer className="footer">
        <button className="btn btn-rules" onClick={toggleModal}>
          Rules
        </button>
      </footer>
    </div>
  );
};

export default App;
