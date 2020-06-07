import React from 'react';

import './Backdrop.css';

const Backdrop = ({ showModal, toggleModal }) =>
  showModal ? <div className="Backdrop" onClick={toggleModal}></div> : null;

export default Backdrop;
